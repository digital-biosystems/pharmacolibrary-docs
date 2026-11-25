<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;entecavir&quot;}]"></div>

# entecavir

- **generic name:** entecavir
- **ATC codes:** `J05AF10`
- **DrugBank:** [DB00442](https://go.drugbank.com/drugs/DB00442) · **PubChem:** [CID 153941](https://pubchem.ncbi.nlm.nih.gov/compound/153941)
- **molar mass:** 277.2792 g/mol (C12H15N5O3) — DrugBank
- **groups:** approved, investigational

## About

Entecavir is an antiviral medication in the nucleoside reverse transcriptase inhibitor class used to treat hepatitis B virus infection. The medication is given orally in the form of tablets or liquid solutions. It is widely utilized and appears on the World Health Organization list of essential medicines, with several products authorised in the European Union.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q418586](https://www.wikidata.org/wiki/Q418586), [Wikipedia](https://en.wikipedia.org/wiki/Entecavir?oldid=1339067882) (CC BY-SA 4.0), DrugBank's routes and dosage forms, the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| entecavir | parent | 277.279 | C12H15N5O3 | DrugBank | [153941](https://pubchem.ncbi.nlm.nih.gov/compound/153941) | Yoshitsugu_2011 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [Yoshitsugu_2011_reference](drugs/drug_entecavir/Entecavir_Yoshitsugu2011_reference.md) | — | 1-compartment (no model) | 1 | Yoshitsugu H et al., Pooled model-based approach to compare…, Diagnostic microbiology and… (2011) | [10.1016/j.diagmicrobio.2010.12.009](https://doi.org/10.1016/j.diagmicrobio.2010.12.009) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Kumamoto_2023_CC50](drugs/drug_entecavir/pd_Kumamoto_2023_CC50.md) | cytotoxicity ← entecavir · stimulation effect | — | Kumamoto H et al., Synthesis of novel entecavir analogues…, RSC advances (2023) | [10.1039/d3ra01750h](https://doi.org/10.1039/d3ra01750h) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Kumamoto_2023_HBV_DNA](drugs/drug_entecavir/pd_Kumamoto_2023_HBV_DNA.md) | HBV DNA ← entecavir · inhibition effect | — | Kumamoto H et al., Synthesis of novel entecavir analogues…, RSC advances (2023) | [10.1039/d3ra01750h](https://doi.org/10.1039/d3ra01750h) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Zhao_2021_Gluc](drugs/drug_entecavir/pd_Zhao_2021_Gluc.md) | CoV-Gluc activity ← Entecavir · inhibition effect | — | Zhao J et al., A cell-based assay to discover inhibito…, Antiviral research (2021) | [10.1016/j.antiviral.2021.105078](https://doi.org/10.1016/j.antiviral.2021.105078) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-23 20:55 | 0:21 | 1/0/0 | 3/0/0 | 0/0/0 | 10,182/2,004 | einfracz / qwen3.8-27b | 10 | 2/8 | 9/1 | 0 |

## Coverage

- **PubMed hits:** 25 matched, 20 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Yoshitsugu_2011.pdf` | Yoshitsugu H et al., Pooled model-based approach to compare…, Diagnostic microbiology and… (2011) | popPK | 10 | [10.1016/j.diagmicrobio.2010.12.009](https://doi.org/10.1016/j.diagmicrobio.2010.12.009) | [21513847](https://pubmed.ncbi.nlm.nih.gov/21513847) | The abstract reports a specific population PK parameter (oral clearance of 26.4 L/h) and model structure, but other key parameters (V, Q) are not provided numerically in the text. |

<sub>queue written 2026-11-23 20:55 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chan_2016 | irrelevant | 1 | 0 | The provided evidence contains only demographic and covariate data (e.g., creatinine clearance, age, weight) and lacks any pharmacokinetic parameter estimates (CL, V, ka) for entecavir. |
| PGx | Chan_2016 | not_relevant | 0 | 0 | The table lists demographic and clinical characteristics (age, dose, weight, etc.) but does not report any gene variants, genotypes, or phenotypes influencing PK or PD parameters. |
| popPK | Huang_2020 | irrelevant | 0 | 0 | Entecavir is only an antiviral comparator, and no entecavir disposition parameters are reported. |
| popPK | Imoto_2015 | irrelevant | 0 | 0 | The paper reports in-vitro synthesis and anti-HBV activity (EC50) of new hybrid molecules, not pharmacokinetic parameters of entecavir. |
| PGx | Imoto_2015 | not_relevant | 0 | 0 | The paper describes the synthesis and in vitro activity of entecavir-adebovir hybrid analogues, not the pharmacogenomics of entecavir itself. |
| popPK | Jiang_2020 | irrelevant | 0 | 0 | The paper describes an in-vitro virology study on HBV drug resistance and does not report pharmacokinetic parameters for entecavir. |
| PGx | Jiang_2020 | not_relevant | 0 | 0 | The paper reports viral resistance mutations in the Hepatitis B virus genome, not human pharmacogenomic variants affecting the pharmacokinetics or pharmacodynamics of entecavir. |
| popPK | Kong_2019 | irrelevant | 0 | 0 | The study evaluates liver stiffness and histological fibrosis reversal, containing no pharmacokinetic parameters (CL, V, ka, etc.) for entecavir. |
| PGx | Kong_2019 | not_relevant | 0 | 0 | The paper investigates the predictive value of liver stiffness changes for fibrosis reversal but does not analyze the impact of genetic variants on entecavir pharmacokinetics or pharmacodynamics. |
| popPK | Kumada_2026 | irrelevant | 0 | 0 | The study focuses on efficacy outcomes (HBsAg reduction) rather than pharmacokinetic parameters, and entecavir serves as a comparator. |
| PGx | Kumada_2026 | not_relevant | 1 | 1 | The study compares clinical efficacy (HBsAg decline) between two drugs in treatment-naive patients without analyzing the impact of specific genetic variants or genotypes on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Kumamoto_2023 | irrelevant | 0 | 0 | This is a synthesis and in-vitro antiviral-activity study, with no quantitative entecavir disposition parameters. |
| popPK | Li_2025 | irrelevant | 0 | 0 | This is a human renal-safety study and reports no entecavir pharmacokinetic disposition parameters. |
| popPK | Lin_2019 | irrelevant | 0 | 0 | The study examines HBsAg kinetics during entecavir therapy and reports no entecavir pharmacokinetic parameters. |
| popPK | Liu_2015 | irrelevant | 0 | 0 | The study is a virological and resistance analysis (EC50) of HBV mutations, not a pharmacokinetic study of entecavir. |
| PGx | Liu_2015 | not_relevant | 0 | 0 | The paper reports on viral mutations (rtA181S) conferring drug resistance, not human host genetic variants affecting entecavir's pharmacokinetics or pharmacodynamics. |
| popPK | Mani_2018 | irrelevant | 1 | 0 | The study focuses on the pharmacokinetics of AB-423 in mice, while entecavir is only mentioned as a comparator agent in combination efficacy studies without specific PK parameter reporting. |
| PGx | Mani_2018 | not_relevant | 0 | 0 | The paper describes the preclinical profile of AB-423, not the pharmacogenomics of entecavir. |
| popPK | Mauss_2011 | irrelevant | 0 | 0 | The study focuses on renal function (eGFR) and nephrotoxicity, not on the pharmacokinetic disposition parameters (CL, V, ka) of entecavir. |
| PGx | Mauss_2011 | not_relevant | 0 | 0 | The paper reports on the effect of entecavir and other drugs on renal function (eGFR), which is an adverse drug reaction (safety), not a change in a pharmacokinetic or pharmacodynamic parameter driven by a gene variant/genotype. |
| popPK | Peng_2022 | irrelevant | 0 | 0 | This study reports renal-function outcomes during entecavir treatment, not quantitative pharmacokinetic disposition parameters for entecavir. |
| popPK | Ren_2017 | irrelevant | 0 | 0 | The study focuses on a new HBV capsid assembly inhibitor (GLS4), using entecavir only as a comparative benchmark for antiviral potency in vitro, without reporting any pharmacokinetic parameters for entecavir. |
| PGx | Ren_2017 | not_relevant | 0 | 0 | The paper focuses on the discovery and characterization of a novel HBV capsid assembly inhibitor (GLS4) and does not report any pharmacogenomic effects on the PK or PD of entecavir. |
| popPK | Squires_2020 | irrelevant | 0 | 0 | Entecavir is only an in-vitro antiviral comparator; no entecavir disposition parameters are reported. |
| popPK | Tan_2006 | irrelevant | 0 | 0 | The paper is a synthetic chemistry and in vitro virology study evaluating new oxadiazole compounds, with no pharmacokinetic data for entecavir. |
| PGx | Tan_2006 | not_relevant | 0 | 0 | The paper focuses on the synthesis and biological evaluation of novel oxadiazole compounds as anti-HBV agents, with no investigation of pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of entecavir. |
| popPK | Udompap_2018 | irrelevant | 0 | 0 | The study evaluates longitudinal renal function trends (eGFR) rather than pharmacokinetic parameters like clearance or volume of distribution. |
| PGx | Udompap_2018 | not_relevant | 0 | 0 | The paper reports longitudinal trends in renal function (eGFR) as a measure of renal safety/toxicity, not a pharmacokinetic or pharmacodynamic parameter influenced by genetic variants (pharmacogenomics). |
| PGx | Yoshitsugu_2011 | not_relevant | 0 | 0 | The study analyzes population pharmacokinetics and covariates such as ethnicity and renal function, but does not investigate gene variants or pharmacogenomic effects. |
| popPK | Zhang_2017 | irrelevant | 1 | 0 | This human renal-function study reports eGFR outcomes, not quantitative entecavir disposition or population-PK parameters. |
| popPK | Zhao_2021 | irrelevant | 0 | 0 | This is an in-vitro antiviral activity assay, not a PK study, and entecavir-specific EC50 values are only shown in a figure not provided. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bentecavir%5D&body=Drug%3A%20entecavir%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_entecavir/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-23 20:55 UTC</sub>
