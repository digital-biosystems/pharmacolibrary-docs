<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01C&quot;,&quot;href&quot;:&quot;atc/J01C.md&quot;},{&quot;label&quot;:&quot;flucloxacillin&quot;}]"></div>

# flucloxacillin

- **generic name:** flucloxacillin
- **ATC codes:** `J01CF05`
- **DrugBank:** [DB00301](https://go.drugbank.com/drugs/DB00301) · **PubChem:** [CID 21319](https://pubchem.ncbi.nlm.nih.gov/compound/21319)
- **molar mass:** 453.872 g/mol (C19H17ClFN3O5S) — DrugBank
- **groups:** approved, investigational, withdrawn

## About

Flucloxacillin is a penicillin antibiotic that resists breakdown by bacterial beta-lactamase enzymes and has been used to treat infections such as meningitis. It remains an approved antibacterial for systemic use, though some approved products have been withdrawn in certain markets.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q1994556](https://www.wikidata.org/wiki/Q1994556) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| flucloxacillin | parent | 453.872 | C19H17ClFN3O5S | DrugBank | [21319](https://pubchem.ncbi.nlm.nih.gov/compound/21319) | Drennan_2021_2, Jager_2020 |

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL | 183 | L/h | 183 L h−1 | adults with staphylococcal infections and healthy adults | $56$ $45$ $11$ (45 participants + 11 healthy volunteers) = 56 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Drennan_2021_2_base](drugs/drug_flucloxacillin/Flucloxacillin_Drennan2021v2_base.md) |
| V | V | 144 | L | 144 L | adults with staphylococcal infections and healthy adults | $56$ $45$ $11$ (45 participants + 11 healthy volunteers) = 56 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Drennan_2021_2_base](drugs/drug_flucloxacillin/Flucloxacillin_Drennan2021v2_base.md) |
| ka | kabs | 0.478 | 1/h | 0.478 h−1 | adults with staphylococcal infections and healthy adults | $56$ $45$ $11$ (45 participants + 11 healthy volunteers) = 56 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Drennan_2021_2_base](drugs/drug_flucloxacillin/Flucloxacillin_Drennan2021v2_base.md) |
| F | Fab | 0.745 |  | 0.745 | adults with staphylococcal infections and healthy adults | $56$ $45$ $11$ (45 participants + 11 healthy volunteers) = 56 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Drennan_2021_2_base](drugs/drug_flucloxacillin/Flucloxacillin_Drennan2021v2_base.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub> | [Drennan_2021_2_base](drugs/drug_flucloxacillin/Flucloxacillin_Drennan2021v2_base.md) | — | 1-compartment (no model) | 5 | Drennan PG et al., Population pharmacokinetics of free flu…, British journal of clinical… (2021) | [10.1111/bcp.14887](https://doi.org/10.1111/bcp.14887) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C2 negative clearance/volume in a covariate scenario or base (implausible — bas…</sub> | [↳ final](drugs/drug_flucloxacillin/Flucloxacillin_Drennan2021v2_final.md) | — | 1-compartment (no model) | 6 |  |  |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub> | [Jager_2020_base](drugs/drug_flucloxacillin/Flucloxacillin_Jager2020_base.md) | — | 2-compartment (no model) | 6 | Jager NGL et al., Optimization of flucloxacillin dosing r…, The Journal of antimicrobia… (2020) | [10.1093/jac/dkaa187](https://doi.org/10.1093/jac/dkaa187) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub> | [↳ final](drugs/drug_flucloxacillin/Flucloxacillin_Jager2020_final.md) | — | 2-compartment (no model) | 6 |  |  |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Wallenburg_2021_reference](drugs/drug_flucloxacillin/Flucloxacillin_Wallenburg2021_reference.md) | — | 1-compartment (no model) | 0 | Wallenburg E et al., High unbound flucloxacillin fraction in…, The Journal of antimicrobia… (2021) | [10.1093/jac/dkab314](https://doi.org/10.1093/jac/dkab314) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=flucloxacillin).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP3A4` inducer/substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer/substrate | DrugBank actor |
| excretion | liver | `ABCB11` substrate | DrugBank actor |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 10:04 | 1:53 | 1/4/0 | 0/0/0 | 0/0/0 | 136,311/5,627 | einfracz / qwen3.8-27b | 16 | 2/3 | 5/0 | 0 |

## Coverage

- **PubMed hits:** 29 matched, 12 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 5  ·  extracted 0  ·  needs_review 1  ·  rejected 4  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full-text requests

_4 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Anderson_1985.pdf` | Anderson P et al., Pharmacokinetics and distribution of fl…, European journal of clinica… (1985) | popPK | 10 | [10.1007/BF00547055](https://doi.org/10.1007/BF00547055) | [3987776](https://pubmed.ncbi.nlm.nih.gov/3987776) | The study reports quantitative two-compartment PK parameters (CL, Vc, Vd, half-lives) for flucloxacillin in humans, with all numeric values explicitly present in the abstract. |
| `Hermann_2024.pdf` | Hermann L et al., Population pharmacokinetics of flucloxa…, The Journal of antimicrobia… (2024) | popPK | 10 | [10.1093/jac/dkae207](https://doi.org/10.1093/jac/dkae207) | [38946285](https://pubmed.ncbi.nlm.nih.gov/38946285) | The paper is a population pharmacokinetic study of flucloxacillin in humans, but the specific numeric parameter values (clearance, volume, etc.) are not present in the provided evidence, which contains only the abstract. |
| `Öbrink-Hansen_2022.pdf` | Öbrink-Hansen K et al., Population Pharmacokinetics of Flucloxa…, Pharmaceutical research (2022) | popPK | 10 | [10.1007/s11095-022-03197-y](https://doi.org/10.1007/s11095-022-03197-y) | [35233728](https://pubmed.ncbi.nlm.nih.gov/35233728) | The paper describes a population PK model for flucloxacillin in pigs and humans, but specific numeric parameter estimates (CL, V) are not explicitly listed in the provided text. |
| `Boast_2026.pdf` | Boast A et al., Effect of ibuprofen on the pharmacokine…, International journal of an… (2026) | popPK | 9 | [10.1016/j.ijantimicag.2025.107684](https://doi.org/10.1016/j.ijantimicag.2025.107684) | [41338520](https://pubmed.ncbi.nlm.nih.gov/41338520) | The study reports a population PK model for flucloxacillin, but the specific numeric parameter estimates (CL, V, etc.) are not listed in the provided evidence text. |

<sub>queue written 2026-10-07T10:02:33.103019+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Boast_2026 | relevant | 9 | 2 | The study reports a population PK model for flucloxacillin, but the specific numeric parameter estimates (CL, V, etc.) are not listed in the provided evidence text. |
| popPK | Hermann_2024 | relevant | 10 | 0 | The paper is a population pharmacokinetic study of flucloxacillin in humans, but the specific numeric parameter values (clearance, volume, etc.) are not present in the provided evidence, which contains only the abstract. |
| popPK | Janknegt_1997 | irrelevant | 2 | 0 | This is a review/clinical perspective on antibiotic policy and pharmacoeconomics for staphylococcal infections; it mentions flucloxacillin's efficacy and cost but provides no quantitative PK parameter values. |
| popPK | Korzilius_2023 | irrelevant | 4 | 2 | The study is a multi-drug bioavailability assessment in SBS patients using non-compartmental analysis (AUC, Cmax) rather than estimating compartmental PK parameters (CL, V, ka) for flucloxacillin, and specific numeric values for flucloxacillin are in Table 2 (not provided). |
| popPK | Meenks_2023_2 | relevant | 10 | 4 | The study reports a population PK model for flucloxacillin, but the final numeric parameter estimates (CL, V) are in Table 2 which is not provided; only clearance comparisons (77.5 L/h) and unbound fraction estimates are visible in the text. |
| popPK | Wallenburg_2022 | irrelevant | 2 | 0 | The study reports parameters for a mechanistic protein-binding model (fraction unbound) rather than standard disposition PK parameters like clearance or volume, and no specific numeric model parameter estimates are provided in the text. |
| popPK | Zwiers_2011 | irrelevant | 0 | 0 | The paper focuses on sugammadex-pharmacodynamic interactions and only lists flucloxacillin as a drug with potential for displacement, without reporting any quantitative pharmacokinetic parameters (CL, V, etc.) for flucloxacillin. |
| popPK | Öbrink-Hansen_2022 | relevant | 10 | 4 | The paper describes a population PK model for flucloxacillin in pigs and humans, but specific numeric parameter estimates (CL, V) are not explicitly listed in the provided text. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 10:02 UTC</sub>
