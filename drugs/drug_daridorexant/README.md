<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05C&quot;,&quot;href&quot;:&quot;atc/N05C.md&quot;},{&quot;label&quot;:&quot;daridorexant&quot;}]"></div>

# daridorexant

- **generic name:** daridorexant
- **ATC codes:** `N05CJ03`
- **DrugBank:** [DB15031](https://go.drugbank.com/drugs/DB15031) · **PubChem:** not captured
- **molar mass:** 450.93 g/mol (C23H23ClN6O2) — DrugBank
- **groups:** approved, investigational

## About

Daridorexant is a hypnotic used to treat insomnia, helping people fall asleep and stay asleep. It is authorised in the European Union and is an approved medicine, though also still under investigation for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q55112806](https://www.wikidata.org/wiki/Q55112806) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| daridorexant | parent | 450.93 | C23H23ClN6O2 | DrugBank | — | Krause_2023 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 20:15 | 3:26 | 0/4/1 | 0/0/0 | 0/0/0 | 151,724/11,824 | ollama / glm-5.3-flash | 1 | 1/0 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q64, Q30, Q1 — no SI value to build…</sub><br><sub>route_to: `human_review`</sub> | [Krause_2023_final_all_data_final_model_rse](drugs/drug_daridorexant/Daridorexant_Krause2023_final_all_data_final_model_rse.md) | — | 1-compartment (no model) | 3 (+3 cov.) | Krause A et al., Population pharmacokinetic modeling of…, CPT: pharmacometrics & syst… (2023) | [10.1002/psp4.12877](https://doi.org/10.1002/psp4.12877) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Krause_2023_all_phase_i_data_estimate](drugs/drug_daridorexant/Daridorexant_Krause2023_all_phase_i_data_estimate.md) | — | 2-compartment (no model) | 8 (+6 cov.) | Krause A et al., Population pharmacokinetic modeling of…, CPT: pharmacometrics & syst… (2023) | [10.1002/psp4.12877](https://doi.org/10.1002/psp4.12877) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Krause_2023_final](drugs/drug_daridorexant/Daridorexant_Krause2023_final.md) | — | 2-compartment (no model) | 8 (+7 cov.) | Krause A et al., Population pharmacokinetic modeling of…, CPT: pharmacometrics & syst… (2023) | [10.1002/psp4.12877](https://doi.org/10.1002/psp4.12877) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Krause_2023_food](drugs/drug_daridorexant/Daridorexant_Krause2023_food.md) | — | 1-compartment (no model) | 0 | Krause A et al., Population pharmacokinetic modeling of…, CPT: pharmacometrics & syst… (2023) | [10.1002/psp4.12877](https://doi.org/10.1002/psp4.12877) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Krause_2023_phase_i_data_intense_pk_estimate](drugs/drug_daridorexant/Daridorexant_Krause2023_phase_i_data_intense_pk_estimate.md) | — | 2-compartment (no model) | 9 | Krause A et al., Population pharmacokinetic modeling of…, CPT: pharmacometrics & syst… (2023) | [10.1002/psp4.12877](https://doi.org/10.1002/psp4.12877) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=daridorexant) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: HCRTR1 (target), HCRTR2 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 2 matched, 2 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 5  ·  extracted 0  ·  needs_review 1  ·  rejected 4  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ufer_2022 | irrelevant | 2 | 0 | Abuse-potential PD study; PK only mentioned qualitatively ("consistent with earlier trials") with no numeric disposition parameters in the evidence. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 20:11 UTC</sub>
