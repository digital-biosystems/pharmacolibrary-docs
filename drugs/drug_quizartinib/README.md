<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;quizartinib&quot;}]"></div>

# quizartinib

- **generic name:** quizartinib
- **ATC codes:** `L01EX11`, `L01XE`
- **DrugBank:** [DB12874](https://go.drugbank.com/drugs/DB12874) · **PubChem:** [CID 24889392](https://pubchem.ncbi.nlm.nih.gov/compound/24889392)
- **molar mass:** 560.67 g/mol (C29H32N6O4S) — DrugBank
- **groups:** approved, investigational

## About

Quizartinib is a protein kinase inhibitor used to treat acute myeloid leukemia. It is an approved medicine, authorised in the European Union, though it carries a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7272714](https://www.wikidata.org/wiki/Q7272714) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| quizartinib | parent | 560.67 | C29H32N6O4S | DrugBank | [24889392](https://pubchem.ncbi.nlm.nih.gov/compound/24889392) | Kang_2020, Solana-Altabella_2025, Vaddady_2024 |
| AC886 | metabolite | 576.67 | — | the paper | — | Vaddady_2024 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 05:37 | 8:29 | 0/3/2 | 1/0/0 | 0/0/0 | 178,381/46,206 | openai / gpt-6-luna | 5 | 0/5 | 5/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.812). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q61 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Solana-Altabella_2025_mean](drugs/drug_quizartinib/Quizartinib_SolanaAltabella2025_mean.md) | — | 2-compartment (no model) | 10 | Solana-Altabella A et al., Validation of pharmacokinetic model for…, European journal of clinica… (2025) | [10.1007/s00228-025-03909-4](https://doi.org/10.1007/s00228-025-03909-4) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.75). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q31 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Vaddady_2024_final](drugs/drug_quizartinib/Quizartinib_Vaddady2024_final.md) | — | parent + metabolite (no model) | 6 (+4 cov.) | Vaddady P et al., Population pharmacokinetic analysis of…, Clinical and translational… (2024) | [10.1111/cts.70074](https://doi.org/10.1111/cts.70074) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by qwen3.8-27b (partly confirmed, agreement 0.938). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Kang_2020_reference](drugs/drug_quizartinib/Quizartinib_Kang2020_reference.md) | — | parent + metabolite (no model) | 5 (+22 cov.) | Kang D et al., Population Pharmacokinetic Analysis of…, Journal of clinical pharmac… (2020) | [10.1002/jcph.1680](https://doi.org/10.1002/jcph.1680) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.867). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Solana-Altabella_2025_median](drugs/drug_quizartinib/Quizartinib_SolanaAltabella2025_median.md) | — | 2-compartment (no model) | 9 | Solana-Altabella A et al., Validation of pharmacokinetic model for…, European journal of clinica… (2025) | [10.1007/s00228-025-03909-4](https://doi.org/10.1007/s00228-025-03909-4) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.6). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C2 negative clearance/volume in a covariate scenario or base (implausible — bas…</sub><br><sub>route_to: `human_review`</sub> | [Vaddady_2024_final_final_quizartinib_model](drugs/drug_quizartinib/Quizartinib_Vaddady2024_final_final_quizartinib_model.md) | — | parent + metabolite (no model) | 11 (+5 cov.) | Vaddady P et al., Population pharmacokinetic analysis of…, Clinical and translational… (2024) | [10.1111/cts.70074](https://doi.org/10.1111/cts.70074) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:qwen3.8-27b (not confirmed, agreement 0.444). Primary extraction retained.">cross-check: disputed</span> | [Kang_2021_QTcF](drugs/drug_quizartinib/pd_Kang_2021_QTcF.md) | QTcF ← quizartinib and AC886 · direct sigmoid Emax (Hill) effect | — | Kang D et al., Concentration-QTc analysis of quizartin…, Cancer chemotherapy and pha… (2021) | [10.1007/s00280-020-04204-y](https://doi.org/10.1007/s00280-020-04204-y) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 5  ·  extracted 0  ·  needs_review 2  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Kang_2021 | irrelevant | 1 | 0 | This is a human concentration–QTc analysis, not a disposition study, and no quizartinib PK parameter values are reported here. |
| popPK | Olíva_2026 | irrelevant | 0 | 0 | This patient-reported-outcomes trial reports no quantitative quizartinib pharmacokinetic parameters. |
| popPK | Vaddady_2024_2 | irrelevant | 2 | 0 | This human concentration–QTcF analysis reports pharmacodynamic parameters, while quizartinib disposition parameters are only referenced from another population-PK model. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 05:30 UTC</sub>
