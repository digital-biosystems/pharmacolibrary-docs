<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;1,1-Dichloroethene&quot;}]"></div>

# 1,1-Dichloroethene

- **generic name:** 1,1-Dichloroethene
- **ATC codes:** not captured
- **DrugBank:** not captured · **PubChem:** [CID 6366](https://pubchem.ncbi.nlm.nih.gov/compound/6366)
- **groups:** not captured

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">rat</span> | [McKenna_1977_alkylating_metabolites](drugs/toxin_11_dichloroethene/pd_McKenna_1977_alkylating_metabolites.md) | name ← reactive alkylating species · inhibition effect | — | McKenna MJ et al., Pharmacokinetics of vinylidene chloride…, Environmental health perspe… (1977) | [10.1289/ehp.772199](https://doi.org/10.1289/ehp.772199) |
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">rat</span> | [McKenna_1977_hepatic_glutathione](drugs/toxin_11_dichloroethene/pd_McKenna_1977_hepatic_glutathione.md) | name ← reactive alkylating species · inhibition effect | — | McKenna MJ et al., Pharmacokinetics of vinylidene chloride…, Environmental health perspe… (1977) | [10.1289/ehp.772199](https://doi.org/10.1289/ehp.772199) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-08 10:33 | 0:34 | 0/0/0 | 0/1/0 | 0/0/0 | 1,646/256 | ollama / qwen3.8:27b-mtp-q8_0 | 6 | 1/5 | 6/0 | 0 |

## Coverage

- **PubMed hits:** 30 matched, 23 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `DSouza_1988.pdf` | D'Souza RW et al., Physiologically based pharmacokinetic m…, Toxicology and applied phar… (1988) | popPK | 9 | [10.1016/0041-008x(88)90159-7](https://doi.org/10.1016/0041-008x(88)90159-7) | [3420614](https://pubmed.ncbi.nlm.nih.gov/3420614) | The paper describes a physiologically based pharmacokinetic model for vinylidene chloride (1,1-dichloroethene) in rats, but the specific numeric parameter values are not present in the provided text. |

<sub>queue written 2026-09-08T10:33:13.315920+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Csandy_1995 | irrelevant | 2 | 0 | The paper is a theoretical study on metabolic reactivity (kapp) and does not report standard quantitative PK parameters (CL, V, Q, ka) for 11_dichloroethene. |
| popPK | DSouza_1988 | relevant | 9 | 0 | The paper describes a physiologically based pharmacokinetic model for vinylidene chloride (1,1-dichloroethene) in rats, but the specific numeric parameter values are not present in the provided text. |
| PD | DSouza_1988 | not_relevant | 3 | 1 | The paper describes a PB-PK model for vinylidene chloride (1,1-dichloroethene) that simulates GSH depletion and mortality, but the provided text does not contain specific numeric PD parameters (e.g., EC50, Emax) or explicit concentration-effect curves, only qualitative descriptions of dose-response mortality. |
| popPK | Dekant_1996 | irrelevant | 0 | 0 | The paper discusses hexachlorobutadiene and vinylidene chloride (1,1-dichloroethene) in the context of nephrotoxicity mechanisms and biotransformation, but does not report quantitative pharmacokinetic parameters (CL, V, etc.) for 1,1-dichloroethene. |
| popPK | Gammon_2002 | irrelevant | 0 | 0 | The paper is an epidemiological study on breast cancer risk associated with organochlorine exposure, not a pharmacokinetic study, and does not report PK parameters for 1,1-dichloroethene. |
| PD | Gammon_2002 | not_relevant | 0 | 0 | The paper reports epidemiological odds ratios for breast cancer risk based on exposure quintiles and explicitly states that no dose-response relations were apparent; it does not provide pharmacodynamic parameters (Emax, EC50, etc.) or a concentration-effect curve for 1,1-dichloroethene. |
| popPK | Gómez-Perales_2021 | irrelevant | 0 | 0 | The paper title indicates a review on iodine allergy in nuclear medicine, which is unrelated to the pharmacokinetics of 11_dichloroethene. |
| PD | Gómez-Perales_2021 | not_relevant | 0 | 0 | The paper discusses the concept of iodine allergy in nuclear medicine and does not contain any pharmacodynamic or exposure-response data for 1,1-dichloroethene. |
| popPK | Han_2011 | irrelevant | 0 | 0 | The paper reports octanol/water partition coefficients (logP) for DDT-related compounds, not pharmacokinetic disposition parameters (CL, V, ka, etc.) for 1,1-dichloroethene. |
| popPK | Jones_1978 | irrelevant | 0 | 0 | The paper focuses on the qualitative and quantitative differences in the metabolic pathways (metabolite proportions) of 1,1-dichloroethylene in mice and rats, rather than reporting pharmacokinetic disposition parameters like clearance, volume, or half-life. |
| PD | Jones_1978 | not_relevant | 0 | 0 | The paper focuses on comparative metabolism and toxicokinetics (metabolite proportions) rather than pharmacodynamic exposure-response relationships or dose-effect curves with numeric PD parameters. |
| popPK | Kadyrov_2025 | irrelevant | 0 | 0 | The paper is a clinical chemistry atlas of toxicity in rats and does not report pharmacokinetic parameters for 11_dichloroethene. |
| PD | Kadyrov_2025 | not_relevant | 0 | 0 | The paper is a clinical chemistry atlas of toxicity for 86 toxins in rats, reporting group-level clinical chemistry parameters (e.g., AST, ALT) rather than specific pharmacodynamic modeling (Emax, EC50) or exposure-response relationships for 1,1-dichloroethene. |
| popPK | Kenyon_2020 | irrelevant | 0 | 0 | The paper focuses on bromodichloromethane (BDCM) and other VOCs, and does not report pharmacokinetic parameters for 11_dichloroethene. |
| PD | Kenyon_2020 | not_relevant | 0 | 0 | The paper compares in vivo and in vitro metabolic rate constants (VmaxC) for VOCs, which is a PK parameter, and does not report any pharmacodynamic (exposure-response or dose-response) relationship or PD parameters for 1,1-dichloroethene. |
| popPK | McKenna_1977 | irrelevant | 2 | 1 | The study reports qualitative pharmacokinetic data (body burdens, % metabolism, covalent binding) for 1,1-dichloroethylene (VDC) but does not provide quantitative compartmental parameters (CL, V, Q, ka) or a population-PK model. |
| popPK | Peyret_2012 | irrelevant | 2 | 0 | The paper is a modeling study for 26 VOCs where 1,1-dichloroethylene is one of many compounds, and it reports AUC ratios rather than specific quantitative PK parameters (CL, V, ka) for the subject drug. |
| PD | Peyret_2012 | not_relevant | 0 | 0 | The paper focuses on pharmacokinetic (PK) modeling (PBPK) and intrinsic clearance (CLint) prediction for VOCs, not on pharmacodynamic (PD) or exposure-response relationships for biological effects. |
| popPK | Roberts_2002 | irrelevant | 0 | 0 | The paper is a carcinogenicity risk assessment review for 1,1-dichloroethylene and does not report quantitative pharmacokinetic parameters. |
| PD | Roberts_2002 | not_relevant | 0 | 0 | The paper is a qualitative weight-of-evidence review concluding that dose-response assessment is not indicated, and it does not report any numeric PD parameters or concentration-effect curves. |
| popPK | Sjödin_2018 | irrelevant | 0 | 0 | The paper is a biomonitoring study reporting serum concentrations of POPs (including p,p'-DDE) but does not report pharmacokinetic parameters (CL, V, ka) or compartmental models for 1,1-dichloroethene. |
| popPK | Slikker_2004 | irrelevant | 0 | 0 | The paper is a review of dose-dependent toxicity mechanisms and does not report pharmacokinetic parameters for 11_dichloroethene. |
| PD | Slikker_2004 | not_relevant | 0 | 0 | The paper is a review of dose-dependent toxicity mechanisms and does not report any pharmacodynamic or exposure-response data for 1,1-dichloroethene. |
| popPK | Slikker_2004_2 | irrelevant | 0 | 0 | The paper is a review of toxicity mechanisms for various chemicals (including vinylidene chloride, which is 1,1-dichloroethene) but does not report quantitative pharmacokinetic parameters for the subject drug. |
| PD | Slikker_2004_2 | not_relevant | 0 | 0 | The text is an abstract or introduction for a review on dose-dependent toxicity mechanisms and does not contain any specific data, numeric parameters, or analysis for 1,1-dichloroethene. |
| popPK | Stalter_2013 | irrelevant | 0 | 0 | The paper is an in-vitro toxicology study focusing on bioassay setup and chemical loss, not a pharmacokinetic study reporting disposition parameters for 1,1-dichloroethene. |
| popPK | Sweeney_2008 | irrelevant | 0 | 0 | The paper studies 1,2-dichloroethane (ethylene dichloride), which is a different chemical entity from the target drug 11_dichloroethene. |
| popPK | Tang_2021 | irrelevant | 0 | 0 | The paper describes a GC-MS analytical method for detecting chlorinated hydrocarbons in cosmetics, not a pharmacokinetic study. |
| popPK | Wesselink_2024 | irrelevant | 0 | 0 | The paper is an epidemiological study on endocrine-disrupting chemicals and uterine leiomyomata, not a pharmacokinetic study, and does not report PK parameters for 1,1-dichloroethene. |
| PD | Wesselink_2024 | not_relevant | 0 | 0 | The paper reports epidemiological associations (probit regression coefficients) between environmental chemical concentrations and disease incidence, not a pharmacodynamic exposure-response relationship for a drug. |
| popPK | unknown_2017 | irrelevant | 0 | 0 | The provided evidence contains only a conference acronym and no pharmacokinetic data or information regarding 11_dichloroethene. |
| PD | unknown_2017 | not_relevant | 0 | 0 | The provided text is a conference header (EANM'17) and contains no information regarding 1,1-dichloroethene, pharmacodynamics, or exposure-response relationships. |
| popPK | unknown_2018 | irrelevant | 0 | 0 | The provided evidence is only a title for a book of abstracts and contains no specific study data, drug information, or pharmacokinetic parameters for 11_dichloroethene. |
| PD | unknown_2018 | not_relevant | 0 | 0 | The provided text is only a title/header for a book of abstracts and contains no data, analysis, or mention of 1,1-dichloroethene or any pharmacodynamic parameters. |
| popPK | unknown_2021 | irrelevant | 0 | 0 | The provided evidence contains only conference metadata and no pharmacokinetic data or information regarding 11_dichloroethene. |
| PD | unknown_2021 | not_relevant | 0 | 0 | The provided text is a conference header and does not contain any pharmacodynamic data, exposure-response analysis, or numeric parameters for 1,1-dichloroethene. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
