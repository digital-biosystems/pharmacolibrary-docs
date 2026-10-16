<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;apremilast&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Apremilast_Okubo2021_typical_values_rse_for_model_parameters&quot;,&quot;label&quot;:&quot;Okubo_2021_typical_values_rse_for_model_parameters_and_covariate_effects&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_apremilast/Apremilast_Okubo2021_typical_values_rse_for_model_parameters.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# apremilast

- **generic name:** apremilast
- **ATC codes:** `L04AA32`
- **DrugBank:** [DB05676](https://go.drugbank.com/drugs/DB05676) · **PubChem:** [CID 11561674](https://pubchem.ncbi.nlm.nih.gov/compound/11561674)
- **molar mass:** 460.5 g/mol (C22H24N2O7S) — DrugBank
- **groups:** approved, investigational

## About

Apremilast is an immunosuppressant used to treat inflammatory conditions such as psoriasis, psoriatic arthritis, and Behçet's disease. It is an approved medicine, authorised in the European Union, and is also being investigated for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2858961](https://www.wikidata.org/wiki/Q2858961) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| apremilast | parent | 460.5 | C22H24N2O7S | DrugBank | [11561674](https://pubchem.ncbi.nlm.nih.gov/compound/11561674) | Okubo_2021, Warren_2025 |
| orismilast | metabolite | 510.29 | — | the paper | — | Warren_2025 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-15 00:33 | 1:18 | 1/2/0 | 1/0/0 | 0/0/0 | 83,911/5,697 | einfracz / qwen3.8-27b | 3 | 0/3 | 3/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span> | [Okubo_2021_typical_values_rse_for_model_parameters_and_covariate_effects](drugs/drug_apremilast/Apremilast_Okubo2021_typical_values_rse_for_model_parameters.md) | ▶ model + simulator | 1-compartment, oral | 4 | Okubo Y et al., Population pharmacokinetic and exposure…, The Journal of dermatology (2021) | [10.1111/1346-8138.16068](https://doi.org/10.1111/1346-8138.16068) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Okubo_2021_geometric_mean_cv_geometric_mean](drugs/drug_apremilast/Apremilast_Okubo2021_geometric_mean_cv_geometric_mean.md) | — | 1-compartment (no model) | 4 | Okubo Y et al., Population pharmacokinetic and exposure…, The Journal of dermatology (2021) | [10.1111/1346-8138.16068](https://doi.org/10.1111/1346-8138.16068) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.571). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Warren_2025_reference](drugs/drug_apremilast/Apremilast_Warren2025_reference.md) | — | general linear (no model) | 2 | Warren RB et al., Population Pharmacokinetic-Pharmacodyna…, Dermatology and therapy (2025) | [10.1007/s13555-025-01371-9](https://doi.org/10.1007/s13555-025-01371-9) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.4). Primary extraction retained.">cross-check: disputed</span> | [Okubo_2021_PASI_50](drugs/drug_apremilast/pd_Okubo_2021_PASI_50.md) | PASI-50 response ← Apremilast · direct Emax (saturable) effect | — | Okubo Y et al., Population pharmacokinetic and exposure…, The Journal of dermatology (2021) | [10.1111/1346-8138.16068](https://doi.org/10.1111/1346-8138.16068) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.4). Primary extraction retained.">cross-check: disputed</span> | [Okubo_2021_PASI_75](drugs/drug_apremilast/pd_Okubo_2021_PASI_75.md) | PASI-75 response ← Apremilast · direct Emax (saturable) effect | — | Okubo Y et al., Population pharmacokinetic and exposure…, The Journal of dermatology (2021) | [10.1111/1346-8138.16068](https://doi.org/10.1111/1346-8138.16068) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.4). Primary extraction retained.">cross-check: disputed</span> | [Okubo_2021_sPGA](drugs/drug_apremilast/pd_Okubo_2021_sPGA.md) | sPGA response ← Apremilast · direct Emax (saturable) effect | — | Okubo Y et al., Population pharmacokinetic and exposure…, The Journal of dermatology (2021) | [10.1111/1346-8138.16068](https://doi.org/10.1111/1346-8138.16068) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=apremilast).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate | DrugBank actor |
| absorption | testis | `ABCB1` substrate | DrugBank actor |
| metabolism | liver | `CYP1A2` substrate, `CYP2A6` substrate, `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: CDK4 (inhibitor), CDK6 (inhibitor), PDE4 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 8 matched, 8 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 3  ·  extracted 1  ·  needs_review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Coffey_2026 | irrelevant | 0 | 0 | The paper is an in-vitro pharmacological study identifying a new PDE4 inhibitor (LT-104A), and apremilast is only mentioned as a marketed comparator without any pharmacokinetic data. |
| popPK | Gu_2024 | irrelevant | 0 | 0 | The study focuses on the identification and efficacy of novel PDE4 inhibitors in mice, mentioning apremilast only as a structural reference/comparator without providing any pharmacokinetic data. |
| popPK | Vossen_2019 | irrelevant | 0 | 0 | The paper is a randomized clinical trial assessing efficacy and safety, not a pharmacokinetic study, and does not report PK parameters. |
| popPK | Vossen_2019_2 | irrelevant | 0 | 0 | This is a pharmacodynamic/translational study analyzing inflammatory biomarkers in skin biopsies, not a pharmacokinetic study reporting disposition parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-15 00:32 UTC</sub>
