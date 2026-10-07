<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;pegcetacoplan&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Pegcetacoplan_Crass2025_transformed_estimate&quot;,&quot;label&quot;:&quot;Crass_2025_transformed_estimate&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_pegcetacoplan/Pegcetacoplan_Crass2025_transformed_estimate.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# pegcetacoplan

- **generic name:** pegcetacoplan
- **ATC codes:** `L04AJ03`, `S01XA31`
- **DrugBank:** [DB16694](https://go.drugbank.com/drugs/DB16694) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Pegcetacoplan is a complement inhibitor used to treat paroxysmal nocturnal hemoglobinuria. It is authorised in the European Union and also has ophthalmological uses, though it carries a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q106863504](https://www.wikidata.org/wiki/Q106863504) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 00:09 | 1:04 | 1/2/1 | 2/0/0 | 0/0/0 | 84,747/6,398 | einfracz / qwen3.8-27b | 3 | 3/0 | 3/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Crass_2025_transformed_estimate](drugs/drug_pegcetacoplan/Pegcetacoplan_Crass2025_transformed_estimate.md) | ▶ model + simulator | 1-compartment, oral | 3 (+1 cov.) | Crass RL et al., Population Pharmacokinetics of Pegcetac…, Ophthalmology science (2025) | [10.1016/j.xops.2024.100657](https://doi.org/10.1016/j.xops.2024.100657) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub><br><sub>route_to: `human_review`</sub> | [Crass_2025_estimate](drugs/drug_pegcetacoplan/Pegcetacoplan_Crass2025_estimate.md) | — | 1-compartment (no model) | 1 | Crass RL et al., Population Pharmacokinetics of Pegcetac…, Ophthalmology science (2025) | [10.1016/j.xops.2024.100657](https://doi.org/10.1016/j.xops.2024.100657) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Crass_2024_reference](drugs/drug_pegcetacoplan/Pegcetacoplan_Crass2024_reference.md) | — | 1-compartment (no model) | 2 | Crass RL et al., Population Pharmacokinetic and Pharmaco…, Drugs in R&D (2024) | [10.1007/s40268-024-00500-7](https://doi.org/10.1007/s40268-024-00500-7) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Crass_2025_2_reference](drugs/drug_pegcetacoplan/Pegcetacoplan_Crass2025v2_reference.md) | — | 1-compartment (no model) | 2 | Crass RL et al., Pharmacokinetic/pharmacodynamic analysi…, CPT: pharmacometrics & syst… (2025) | [10.1002/psp4.13264](https://doi.org/10.1002/psp4.13264) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> | [Crass_2024_Hb](drugs/drug_pegcetacoplan/pd_Crass_2024_Hb.md) | hemoglobin ← pegcetacoplan · direct sigmoid Emax (Hill) effect | model (no simulator) | Crass RL et al., Population Pharmacokinetic and Pharmaco…, Drugs in R&D (2024) | [10.1007/s40268-024-00500-7](https://doi.org/10.1007/s40268-024-00500-7) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> | [Crass_2024_LDH](drugs/drug_pegcetacoplan/pd_Crass_2024_LDH.md) | lactate dehydrogenase ← pegcetacoplan · direct sigmoid Emax (Hill) effect | model (no simulator) | Crass RL et al., Population Pharmacokinetic and Pharmaco…, Drugs in R&D (2024) | [10.1007/s40268-024-00500-7](https://doi.org/10.1007/s40268-024-00500-7) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Crass_2025_2_GA_lesion_area](drugs/drug_pegcetacoplan/pd_Crass_2025_2_GA_lesion_area.md) | GA lesion area ← pegcetacoplan · disease-progression model | — | Crass RL et al., Pharmacokinetic/pharmacodynamic analysi…, CPT: pharmacometrics & syst… (2025) | [10.1002/psp4.13264](https://doi.org/10.1002/psp4.13264) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=pegcetacoplan) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: C3 (binder), C3 (regulator).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 4  ·  extracted 1  ·  needs_review 1  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Crass_2025_2 | relevant | 4 | 5 | The paper is primarily a PD analysis but reports derived PK parameters (clearance 0.36 L/day, half-life 8.6 days) from a referenced population PK model in the text. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 00:08 UTC</sub>
