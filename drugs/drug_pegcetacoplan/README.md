<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;pegcetacoplan&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Pegcetacoplan_Crass2025_transformed_estimate&quot;,&quot;label&quot;:&quot;Crass_2025_transformed_estimate&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_pegcetacoplan/Pegcetacoplan_Crass2025_transformed_estimate.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

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
| 2026-10-07 00:09 | 1:04 | 0/2/2 | 2/0/0 | 0/0/0 | 84,747/6,398 | einfracz / qwen3.8-27b | 3 | 3/0 | 3/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub><br><sub>route_to: `human_review`</sub> | [Crass_2025_estimate](drugs/drug_pegcetacoplan/Pegcetacoplan_Crass2025_estimate.md) | — | 1-compartment (no model) | 1 | Crass RL et al., Population Pharmacokinetics of Pegcetac…, Ophthalmology science (2025) | [10.1016/j.xops.2024.100657](https://doi.org/10.1016/j.xops.2024.100657) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span><br><sub>caveat: the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only…</sub><br><sub>blocking: T1_t_half_beta</sub><br><sub>blocking: T1_cmax</sub><br><sub>route_to: `scholar`</sub> | [Crass_2025_transformed_estimate](drugs/drug_pegcetacoplan/Pegcetacoplan_Crass2025_transformed_estimate.md) | ▶ model + simulator | 1-compartment, oral | 3 (+1 cov.) | Crass RL et al., Population Pharmacokinetics of Pegcetac…, Ophthalmology science (2025) | [10.1016/j.xops.2024.100657](https://doi.org/10.1016/j.xops.2024.100657) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Crass_2024_reference](drugs/drug_pegcetacoplan/Pegcetacoplan_Crass2024_reference.md) | — | 1-compartment (no model) | 2 | Crass RL et al., Population Pharmacokinetic and Pharmaco…, Drugs in R&D (2024) | [10.1007/s40268-024-00500-7](https://doi.org/10.1007/s40268-024-00500-7) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Crass_2025_2_reference](drugs/drug_pegcetacoplan/Pegcetacoplan_Crass2025v2_reference.md) | — | 1-compartment (no model) | 2 | Crass RL et al., Pharmacokinetic/pharmacodynamic analysi…, CPT: pharmacometrics & syst… (2025) | [10.1002/psp4.13264](https://doi.org/10.1002/psp4.13264) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> | [Crass_2024_Hb](drugs/drug_pegcetacoplan/pd_Crass_2024_Hb.md) | hemoglobin ← pegcetacoplan · direct sigmoid Emax (Hill) effect | model (no simulator) | Crass RL et al., Population Pharmacokinetic and Pharmaco…, Drugs in R&D (2024) | [10.1007/s40268-024-00500-7](https://doi.org/10.1007/s40268-024-00500-7) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> | [Crass_2024_LDH](drugs/drug_pegcetacoplan/pd_Crass_2024_LDH.md) | lactate dehydrogenase ← pegcetacoplan · direct sigmoid Emax (Hill) effect | model (no simulator) | Crass RL et al., Population Pharmacokinetic and Pharmaco…, Drugs in R&D (2024) | [10.1007/s40268-024-00500-7](https://doi.org/10.1007/s40268-024-00500-7) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Crass_2025_2_GA_lesion_area](drugs/drug_pegcetacoplan/pd_Crass_2025_2_GA_lesion_area.md) | GA lesion area ← pegcetacoplan · disease-progression model | — | Crass RL et al., Pharmacokinetic/pharmacodynamic analysi…, CPT: pharmacometrics & syst… (2025) | [10.1002/psp4.13264](https://doi.org/10.1002/psp4.13264) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=pegcetacoplan).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: C3 (binder), C3 (regulator).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 4  ·  extracted 0  ·  needs_review 2  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Crass_2025_2 | relevant | 4 | 5 | The paper is primarily a PD analysis but reports derived PK parameters (clearance 0.36 L/day, half-life 8.6 days) from a referenced population PK model in the text. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 00:08 UTC</sub>
