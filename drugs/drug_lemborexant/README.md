<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05C&quot;,&quot;href&quot;:&quot;atc/N05C.md&quot;},{&quot;label&quot;:&quot;lemborexant&quot;}]"></div>

# lemborexant

- **generic name:** lemborexant
- **ATC codes:** `N05CJ02`
- **DrugBank:** [DB11951](https://go.drugbank.com/drugs/DB11951) · **PubChem:** [CID 56944144](https://pubchem.ncbi.nlm.nih.gov/compound/56944144)
- **molar mass:** 410.425 g/mol (C22H20F2N4O2) — DrugBank
- **groups:** approved, investigational

## About

Lemborexant is an orexin receptor antagonist used to treat insomnia. It is given by mouth as a tablet. It is used in the United States.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q20707990](https://www.wikidata.org/wiki/Q20707990), [Wikipedia](https://en.wikipedia.org/wiki/Lemborexant?oldid=1383108921) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| lemborexant | parent | 410.425 | C22H20F2N4O2 | DrugBank | [56944144](https://pubchem.ncbi.nlm.nih.gov/compound/56944144) | Lalovic_2020 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub><br><sub>blocking: model_quarantined: Vd left at base-class defaults</sub> | [Lalovic_2020_reference](drugs/drug_lemborexant/Lemborexant_Lalovic2020_reference.md) | held back | 1-compartment, oral | 8 (+3 cov.) | Lalovic B et al., Population Pharmacokinetics and Exposur…, Journal of clinical pharmac… (2020) | [10.1002/jcph.1683](https://doi.org/10.1002/jcph.1683) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-23 23:23 | 0:03 | 1/0/0 | 0/0/0 | 0/0/0 | 4,549/167 | einfracz / qwen3.8-27b | 2 | 0/2 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Lalovic_2020 | not_relevant | 0 | 0 | The paper reports population PK covariates such as BMI, age, and alkaline phosphatase, but does not analyze genetic variants or genotypes. |
| popPK | Lalovic_2023 | irrelevant | 0 | 0 | The paper describes exposure-response and clinical efficacy analyses using a PK model from a separate previous study, but does not report quantitative PK parameters (CL, V, etc.) in the text provided. |
| PGx | Lalovic_2023 | not_relevant | 0 | 0 | The paper analyzes non-genetic demographic covariates (age, sex, race, weight) on sleep endpoints and does not report any pharmacogenomic effects on lemborexant PK or PD parameters. |
| popPK | Naito_2026 | irrelevant | 0 | 0 | Clinical efficacy study of lemborexant on sleep-wake state discrepancy with no pharmacokinetic parameters reported. |
| popPK | Shimohara_2026 | irrelevant | 0 | 0 | The study investigates the effects of dual orexin receptor antagonists on seizure parameters during electroconvulsive therapy, not the pharmacokinetics of lemborexant. |
| PGx | Shimohara_2026 | not_relevant | 0 | 0 | The paper investigates the effect of dual orexin receptor antagonists on seizure quality during electroconvulsive therapy, not a pharmacogenomic effect on PK/PD parameters of lemborexant. |
| popPK | Ufer_2022 | irrelevant | 0 | 0 | The study is a pharmacodynamic abuse potential assessment of daridorexant where lemborexant is not the subject drug and no quantitative PK parameters for lemborexant are reported. |
| PGx | Ufer_2022 | not_relevant | 0 | 0 | The study evaluates the abuse potential of daridorexant and does not investigate any gene variants, genotypes, or their effects on the pharmacokinetics or pharmacodynamics of lemborexant. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Blemborexant%5D&body=Drug%3A%20lemborexant%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_lemborexant/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-23 12:51 UTC</sub>
