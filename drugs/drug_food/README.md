<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V01A&quot;,&quot;href&quot;:&quot;atc/V01A.md&quot;},{&quot;label&quot;:&quot;food&quot;}]"></div>

# food

- **generic name:** food
- **ATC codes:** `V01AA08`
- **DrugBank:** none · **PubChem:** none
- **groups:** not captured

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Jung_2026_pH](drugs/drug_food/pd_Jung_2026_pH.md) | Intragastric pH ← food · indirect response — drug stimulates the production of Intragastric pH | — | Jung W et al., A Mechanism-Based Multi-Level Populatio…, CPT: pharmacometrics & syst… (2026) | [10.1002/psp4.70181](https://doi.org/10.1002/psp4.70181) |
| <span class="pk-badge pk-badge--red">Rejected</span> | [Koele_2025_TTP](drugs/drug_food/pd_Koele_2025_TTP.md) | time to positivity in liquid medium ← BTZ-043total (BTZ-043 + M2) · direct Emax (saturable) effect | — | Koele SE et al., Population pharmacokinetics and exposur…, The Journal of antimicrobia… (2025) | [10.1093/jac/dkaf076](https://doi.org/10.1093/jac/dkaf076) |
| <span class="pk-badge pk-badge--red">Rejected</span> | [Koele_2025_cfu](drugs/drug_food/pd_Koele_2025_cfu.md) | bacterial load (cfu on solid medium) ← BTZ-043total (BTZ-043 + M2) · direct Emax (saturable) effect | — | Koele SE et al., Population pharmacokinetics and exposur…, The Journal of antimicrobia… (2025) | [10.1093/jac/dkaf076](https://doi.org/10.1093/jac/dkaf076) |
| <span class="pk-badge pk-badge--red">Rejected</span> | [Sun_1999_Abylqis](drugs/drug_food/pd_Sun_1999_Abylqis.md) | Abylqis ← food · model not identified | — | Sun H et al., Population pharmacokinetics. A regulato…, Clinical pharmacokinetics (1999) | [10.2165/00003088-199937010-00003](https://doi.org/10.2165/00003088-199937010-00003) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-23 22:47 | 0:04 | 0/0/0 | 1/3/0 | 0/0/0 | 3,579/210 | einfracz / qwen3.8-27b | 8 | 2/6 | 7/1 | 0 |

## Coverage

- **PubMed hits:** 2695 matched, 18 returned
- **screened:** 2  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ammendola_2022 | irrelevant | 0 | 0 | Narrative review of nutraceuticals and obesity; no PK parameters for any drug, and "food" is not a subject drug here. |
| popPK | Briguglio_2018 | irrelevant | 0 | 0 | A narrative review of food-drug interactions with no PK disposition parameters for food itself and no numeric values present. |
| popPK | Chawla_2023 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for the drug gefapixant, not for the drug food (which is not a medication). |
| PGx | Chawla_2023 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic analysis of gefapixant focusing on covariates like age, weight, and renal impairment, but does not report pharmacogenomic effects or gene variants. |
| popPK | Chrysant_2017 | irrelevant | 0 | 0 | The paper concerns the pharmacokinetics of LCZ-696 (sacubitril/valsartan), not a drug called "food". |
| PGx | Chrysant_2017 | not_relevant | 0 | 0 | The paper discusses the pharmacology and therapeutic effects of sacubitril/valsartan (LCZ-696) in hypertension and heart failure, but it does not report on any gene variants or pharmacogenomic effects on its pharmacokinetic or pharmacodynamic parameters. |
| popPK | Eales_2024 | irrelevant | 0 | 0 | This is a review of FDA labeling for biological products and does not report quantitative PK parameters for the specific drug 'food'. |
| PGx | Eales_2024 | not_relevant | 0 | 0 | The paper discusses population pharmacokinetics for pediatric dosing of biologics, but does not report any pharmacogenomic effects (gene variant/genotype) on PK or PD parameters. |
| popPK | Hoener_1981 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of nitrofurantoin, not the drug 'food'. |
| PGx | Hoener_1981 | not_relevant | 0 | 0 | The paper reports pharmacokinetic parameters for a drug (nitrofurantoin) and mentions food effects, but contains no pharmacogenomic data (gene variants, genotypes, or phenotypes). |
| popPK | Jung_2026 | irrelevant | 0 | 0 | Food is only a co-administered PD modifier in a population PK/PD model of PCABs (tegoprazan, vonoprazan, etc.); no PK parameters for food itself are reported. |
| popPK | Kubota_2018 | irrelevant | 0 | 0 | This is a population PK study of naldemedine, not of food; food appears only as a covariate ("food condition") on Vc/F, so no PK parameters for food itself are reported. |
| popPK | Laurence_2003 | irrelevant | 0 | 0 | The paper is a review of the ecological effects of ozone on natural systems, not a pharmacokinetic study of a food drug. |
| PGx | Laurence_2003 | not_relevant | 0 | 0 | The text discusses the ecological effects of ozone exposure on natural plant systems, which is completely unrelated to pharmacogenomics or the pharmacokinetics/pharmacodynamics of food. |
| popPK | Li_2010 | irrelevant | 0 | 0 | The study is about the pharmacokinetics of posaconazole, not the drug food. |
| PGx | Li_2010 | not_relevant | 0 | 0 | The paper describes general PK/PD profiles and food effects but does not report pharmacogenomic effects (gene variants changing PK/PD). |
| popPK | Lim_2020 | irrelevant | 2 | 2 | The drug of interest is "food", but this paper studies Cannabidiol (CBD), with food only serving as a covariate (fed vs. fasted state) for CBD absorption. |
| PGx | Lim_2020 | not_relevant | 0 | 0 | The study analyzes the effects of dose, dosage form, and food on CBD pharmacokinetics but does not investigate genetic variants or pharmacogenomic factors. |
| popPK | Möllenhoff_2022 | irrelevant | 0 | 0 | This is a methodological simulation study on bioequivalence testing statistics, not an original pharmacokinetic study of a specific drug, and it does not report quantitative disposition parameters for a subject drug. |
| PGx | Möllenhoff_2022 | not_relevant | 0 | 0 | The paper focuses on statistical methods for bioequivalence testing (comparing drug formulations) and does not investigate the impact of gene variants on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Pearson_1985 | irrelevant | 0 | 0 | The paper describes the pharmacokinetics of glyburide, not food, and food is only mentioned as a factor affecting drug mobilization. |
| PGx | Pearson_1985 | not_relevant | 0 | 0 | The paper describes general pharmacokinetics of glyburide (distribution, elimination, half-life) but does not report any pharmacogenomic effects or genetic variants. |
| popPK | Santos_2021 | irrelevant | 0 | 0 | This is a review of the basophil activation test for allergy diagnosis with no pharmacokinetic parameters for any drug. |
| popPK | Sun_1999 | irrelevant | 0 | 0 | The paper is a general regulatory review of population pharmacokinetic methodology and does not report specific quantitative PK parameters for the drug 'food'. |
| PGx | Sun_1999 | not_relevant | 0 | 0 | The text is a regulatory perspective on population pharmacokinetics and modeling methodologies; it does not report any pharmacogenomic effects or specific drug/food PK data. |
| popPK | Tam_2021 | irrelevant | 0 | 0 | The drug of interest is 'food' (likely a typo in the prompt for 'zanubrutinib' or a misunderstanding of 'food effects'), but even if interpreting 'food' as the subject, the paper discusses 'food effects' on zanubrutinib, not the PK of food itself; furthermore, no numeric PK parameters are provided in the extracted text. |
| PGx | Tam_2021 | not_relevant | 0 | 0 | The paper discusses the clinical pharmacology of zanubrutinib, specifically its food effects and drug-drug interactions, but does not report any pharmacogenomic effects of gene variants on PK or PD parameters. |
| popPK | Venitz_2007 | irrelevant | 0 | 0 | The paper discusses biomarkers for the drug efaproxiral, not the drug "food," and contains no quantitative PK parameters for food. |
| PGx | Venitz_2007 | not_relevant | 0 | 0 | The paper discusses biomarkers and exposure-response relationships for the drug efaproxiral, but does not report any pharmacogenomic effects or gene-variant interactions on PK/PD parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bfood%5D&body=Drug%3A%20food%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_food/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
