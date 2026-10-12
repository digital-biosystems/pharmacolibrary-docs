<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01D&quot;,&quot;href&quot;:&quot;atc/J01D.md&quot;},{&quot;label&quot;:&quot;Relebactam&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Relebactam_Fratoni2022_reference&quot;,&quot;label&quot;:&quot;Fratoni_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_relebactam/Relebactam_Fratoni2022_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# Relebactam

- **generic name:** Relebactam
- **ATC codes:** `J01DH56`
- **DrugBank:** [DB12377](https://go.drugbank.com/drugs/DB12377) · **PubChem:** [CID 44129647](https://pubchem.ncbi.nlm.nih.gov/compound/44129647)
- **molar mass:** 348.37 g/mol (C12H20N4O6S) — DrugBank
- **groups:** approved

## About

Relebactam is a beta-lactamase inhibitor used to treat serious bacterial infections, given alongside a carbapenem antibiotic. It is an approved medicine, used mainly in hospital settings for infections caused by resistant bacteria.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27252695](https://www.wikidata.org/wiki/Q27252695) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| relebactam | parent | 348.37 | C12H20N4O6S | DrugBank | [44129647](https://pubchem.ncbi.nlm.nih.gov/compound/44129647) | Bhagunde_2019, Fratoni_2022, Patel_2022 |
| relebactam and imipenem | metabolite | 299.345 | C12H17N3O4S | PubChem | [104838](https://pubchem.ncbi.nlm.nih.gov/compound/104838) | Bhagunde_2019 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 11:46 | 3:08 | 0/1/2 | 0/0/0 | 0/0/0 | 199,496/6,840 | einfracz / qwen3.8-27b | 8 | 0/8 | 8/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">built, not shipped</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.545). Primary extraction retained.">cross-check: disputed</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub><br><sub>blocking: model_quarantined: Cl, Vd, k12 left at base-class defaults</sub><br><sub>route_to: `scholar`</sub> | [Bhagunde_2019_reference](drugs/drug_relebactam/Relebactam_Bhagunde2019_reference.md) | held back | 2-compartment, IV | 4 (+2 cov.) | Bhagunde P et al., Population Pharmacokinetic Analysis for…, CPT: pharmacometrics & syst… (2019) | [10.1002/psp4.12462](https://doi.org/10.1002/psp4.12462) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.778). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: T3_param_coverage</sub><br><sub>route_to: `engineer`</sub> | [Fratoni_2022_reference](drugs/drug_relebactam/Relebactam_Fratoni2022_reference.md) | ▶ model + simulator | 1-compartment, IV | 4 | Fratoni AJ et al., Imipenem/cilastatin/relebactam pharmaco…, The Journal of antimicrobia… (2022) | [10.1093/jac/dkac261](https://doi.org/10.1093/jac/dkac261) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.556). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Patel_2022_reference](drugs/drug_relebactam/Relebactam_Patel2022_reference.md) | — | general linear (no model) | 4 | Patel M et al., Population pharmacokinetic/pharmacodyna…, Clinical and translational… (2022) | [10.1111/cts.13158](https://doi.org/10.1111/cts.13158) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 25 matched, 20 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 3  ·  extracted 0  ·  needs_review 2  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Fratoni_2022.pdf` | Fratoni AJ et al., Imipenem/cilastatin/relebactam pharmaco…, The Journal of antimicrobia… (2022) | popPK | 10 | [10.1093/jac/dkac261](https://doi.org/10.1093/jac/dkac261) | [35906810](https://pubmed.ncbi.nlm.nih.gov/35906810) | The paper reports quantitative population pharmacokinetic parameters (CL, Vc, k12, k21) specifically for relebactam in human subjects, and the numeric values are explicitly provided in the results section. |
| `Shi_2026.pdf` | Shi X et al., Cost-minimizing alternative dosage regi…, European journal of clinica… (2026) | popPK | 6 | [10.1007/s00228-025-03944-1](https://doi.org/10.1007/s00228-025-03944-1) | [41483214](https://pubmed.ncbi.nlm.nih.gov/41483214) | The study involves PK/PD simulations for relebactam, but no specific numeric parameter values (CL, V, etc.) are present in the provided evidence, likely residing in supplementary material or the full text not included here. |
| `Zhanel_2018.pdf` | Zhanel GG et al., Imipenem-Relebactam and Meropenem-Vabor…, Drugs (2018) | popPK | 5 | [10.1007/s40265-017-0851-9](https://doi.org/10.1007/s40265-017-0851-9) | [29230684](https://pubmed.ncbi.nlm.nih.gov/29230684) | The text reports approximate volume of distribution and half-life for relebactam, but lacks specific clearance values and detailed compartmental parameters, appearing to be a review summarizing data. |

<sub>queue written 2026-10-07T11:44:09.991965+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Assefa_2024 | irrelevant | 2 | 0 | The paper is a systematic review of PK/PD targets (efficacy metrics like fAUC/MIC) rather than a study reporting quantitative pharmacokinetic disposition parameters (CL, V, t1/2) for relebactam. |
| popPK | Gatti_2023 | irrelevant | 0 | 0 | This is a narrative review discussing PK/PD optimization strategies for novel beta-lactams in general, with no quantitative PK parameters reported for relebactam specifically. |
| popPK | Lombardi_2024 | irrelevant | 0 | 0 | The paper is a review focusing on the clinical use and efficacy of new antibiotics in liver transplantation, and does not report original quantitative pharmacokinetic parameters (CL, V, ka) for relebactam. |
| popPK | Lombardi_2026 | irrelevant | 0 | 0 | The paper is a clinical review of antibiotics in lung transplantation that discusses relebactam's efficacy and safety but contains no quantitative pharmacokinetic parameters (CL, V, Q, ka) for relebactam. |
| popPK | Patel_2026 | irrelevant | 3 | 0 | This is an exposure-efficacy analysis that reports PK/PD indices (fAUC/MIC) but does not report underlying quantitative disposition parameters (CL, V, Q, ka) for relebactam, as it relies on a previously developed population PK model cited in reference 21. |
| popPK | Principe_2022 | irrelevant | 0 | 0 | The paper is a review that discusses relebactam only as part of the imipenem/relebactam combination but provides no quantitative pharmacokinetic parameter values (CL, Vd, etc.) specifically for relebactam. |
| popPK | Rando_2024 | irrelevant | 2 | 0 | This is a systematic review that does not report original quantitative parameter values for relebactam in the provided text. |
| popPK | Shen_2023 | irrelevant | 2 | 0 | This is a review article discussing PK/PD modeling strategies and citing data for relebactam but does not report original quantitative parameter values for relebactam in the provided evidence. |
| popPK | Shi_2026 | relevant | 6 | 1 | The study involves PK/PD simulations for relebactam, but no specific numeric parameter values (CL, V, etc.) are present in the provided evidence, likely residing in supplementary material or the full text not included here. |
| popPK | Takahashi_2026 | irrelevant | 0 | 0 | The paper is a methodological simulation/study on sampling windows for NCA and does not report specific PK parameters for the subject drug relebactam. |
| popPK | Zhanel_2018 | relevant | 5 | 3 | The text reports approximate volume of distribution and half-life for relebactam, but lacks specific clearance values and detailed compartmental parameters, appearing to be a review summarizing data. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 11:44 UTC</sub>
