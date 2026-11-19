<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Benzo[ghi]perylene&quot;}]"></div>

# Benzo[ghi]perylene

- **generic name:** Benzo[ghi]perylene
- **T3DB:** [T3D0621](http://www.t3db.ca/toxins/T3D0621) · **PubChem:** [CID 9117](https://pubchem.ncbi.nlm.nih.gov/compound/9117)

## About

Benzo[ghi]perylene is one of over 100 different polycyclic aromatic hydrocarbons (PAHs). PAHs are chemicals that are formed during the incomplete burning organic substances, such as fossil fuels. They are usually found as a mixture containing two or more of these compounds.

- **Category:** Pollutant, Food Toxin, Natural Toxin
- **Route of exposure:** oral, inhalation
- **Sources and uses:** PAHs are released into the environment via the combustion of fossil fuels, coke oven emissions and vehicle exhausts, as well as naturally from forest fires and vocanic eruptions. PAHs from these sources may contaminate nearly water systems. …
- **Mechanism of toxicity:** The ability of PAH's to bind to blood proteins such as albumin allows them to be transported throughout the body. Many PAH's induce the expression of cytochrome P450 enzymes, especially CYP1A1, CYP1A2, and CYP1B1, by binding to the aryl hydrocarbon receptor or glycine N-methyltransferase protein. …
- **Health effects:** PAHs are carcinogens and have been associated with the increased risk of skin, respiratory tract, bladder, stomach, and kidney cancers. They may also cause reproductive effects and depress the immune system.
- **Carcinogenicity:** IARC group 3, not classifiable as to its carcinogenicity to humans.
- **Treatment:** There is no know antidote for PAHs. …

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D0621">T3DB T3D0621</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 191-24-2</small></p>

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-14 18:28 | 5:11 | 0/0/0 | 0/0/0 | 0/0/0 | 186,568/9,021 | ollama / glm-5.3-flash | 4 | 1/3 | 4/0 | 0 |

## Coverage

- **PubMed hits:** 30 matched, 30 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Bosveld_2002.pdf` | Bosveld AT et al., In vitro EROD induction equivalency fac…, Chemosphere (2002) | pd | 4 | [10.1016/s0045-6535(02)00161-3](https://doi.org/10.1016/s0045-6535(02)00161-3) | [12243332](https://www.ncbi.nlm.nih.gov/pubmed/12243332) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-11-14 18:28 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Barbosa_2018 | irrelevant | 0 | 0 | Benzo(ghi)perylene appears only as one measured PAH contaminant in seafood (exposure study with concentrations and cooking effects), with no kinetic parameters of disposition. |
| popPK | Bosveld_2002 | irrelevant | 1 | 3 | In vitro EROD potency/IEF study, not toxicokinetics; only EC50-derived equivalency factors for BghiP, no kinetic parameters. |
| popPK | Cachada_2014 | irrelevant | 0 | 0 | This is a review of chemical methods for PAH soil bioavailability with no kinetic parameters for benzo[ghi]perylene specifically. |
| popPK | Campo_2014 | irrelevant | 1 | 4 | This is an exposure/analysis study reporting urinary PAH concentrations (exposure biomarkers) in workers and controls, not toxicokinetic parameters; some values are present but they are concentrations, not kinetic constants. |
| popPK | Capolupo_2017 | irrelevant | 2 | 1 | Environmental biomonitoring study; benzo(ghi)perylene appears only as bioaccumulation in transplanted mussels with fold-changes, not kinetic parameters. |
| popPK | Cwalina_2023 | irrelevant | 0 | 0 | Environmental biomonitoring study of PAH concentrations in moss; no toxicokinetic parameters for benzo(g,h,i)perylene. |
| popPK | Deutsch-Wenzel_1983 | irrelevant | 0 | 0 | This is an inhalational carcinogenicity/dose-response study in rats with no toxicokinetic parameters (no half-life, rate constant, partition coefficient, or disposition model) for benzo[ghi]perylene, which showed no tumor response anyway. |
| popPK | Domeño_2012 | irrelevant | 0 | 0 | This is an analytical-method paper for PAHs in mosses with no toxicokinetic parameters for benzo(g,h,i)perylene; LOD is an analytical metric, not PK. |
| popPK | Galvão_2014 | irrelevant | 0 | 0 | Benzo[ghi]perylene appears only as an abundant PAH in particulate matter air concentrations (exposure/environmental study) with no kinetic parameters of any kind. |
| popPK | Grova_2017 | irrelevant | 1 | 0 | Benzo[g,h,i]perylene is only noted as lacking identified tetrahydroxylated metabolites; no kinetic parameters for it are reported anywhere. |
| popPK | Jeng_2026 | irrelevant | 0 | 0 | Occupational exposure/outcome study with interaction associations only; no kinetic parameters for benzo[ghi]perylene, which appears only as a co-exposure analyte. |
| popPK | Kargar_2017 | irrelevant | 0 | 0 | Environmental biomonitoring/exposure study with only measured PAH concentrations in bioindicator samples; no kinetic parameters for benzo(g,h,i)perylene. |
| popPK | Lee_2004 | irrelevant | 0 | 0 | Environmental multimedia fate model of PAHs with no toxicokinetic parameters (no half-life, clearance, partition within organisms, etc.) for benzo[g,h,i]perylene; values relate to environmental media ratios only. |
| popPK | Lu_2009 | irrelevant | 2 | 2 | Only fold-increases of EROD/GST biomarker responses to benzo(g,h,i)perylene, no kinetic parameters, and numeric values are not provided in the evidence. |
| popPK | Marrucci_2013 | irrelevant | 0 | 0 | Environmental exposure monitoring of PAHs in seawater with no kinetic parameters for benzoghiperylene. |
| popPK | Mousset_2016 | irrelevant | 1 | 2 | This is a soil remediation/chemistry study of PAH extraction and degradation; benzo(g,h,i)perylene appears only as an environmental contaminant with extraction/oxidation efficiencies, no in vivo toxicokinetic parameters, and numeric values are largely not provided in the abstract. |
| popPK | Nambirajan_2026 | irrelevant | 0 | 0 | Environmental monitoring study; no kinetic parameters of any kind, and benzo[g,h,i]perylene was not even detected in bird tissue samples. |
| popPK | Oliveira_2020 | irrelevant | 1 | 2 | Breast milk concentration biomonitoring/exposure study; benzo(g,h,i)perylene is measured as an exposure contaminant with no kinetic parameter (half-life, rate constant, clearance, partition, model) for it. |
| popPK | Ollson_2014 | irrelevant | 0 | 0 | Ecological risk assessment with screening ratios only; benzoghiperylene appears as a modeled emission with no kinetic parameters. |
| popPK | Ramesh_2014 | irrelevant | 1 | 4 | This is a biomonitoring study measuring serum PAH concentrations (including benzo(g,h,i)perylene) in autopsy samples; concentrations in a population with no kinetic parameter (no half-life, rate constant, clearance, model or time course) for benzo(g,h,i)perylene. |
| popPK | Silkworth_1995 | irrelevant | 1 | 1 | Benzo[g,h,i]perylene appears only as a screened PAH showing no immunosuppressive effect; no kinetic parameters for it are reported, and numeric ED/dose values belong to other compounds. |
| popPK | Sinaei_2013 | irrelevant | 3 | 0 | In vitro fish erythrocyte hemolysis study with membrane-stability endpoints, no toxicokinetic parameters for benzoghiperylene and no numeric values provided. |
| popPK | Srogi_2007 | irrelevant | 0 | 0 | This is an environmental exposure review of PAH concentrations; benzo(ghi)perylene appears only as a listed compound, with no kinetic parameters. |
| PGx | Syed_2013 | not_relevant | 1 | 2 | Enzymatic biotransformation of benzo(ghi)perylene by a fungal P450 in a bioremediation context; no gene variant/genotype effect on a pharmacokinetic or pharmacodynamic parameter is reported. |
| popPK | Torre_2023 | irrelevant | 0 | 0 | Environmental analytical study of air sampling methods; benzo(ghi)perylene appears only as an atmospheric analyte with no toxicokinetic parameters. |
| popPK | Wild_1991 | irrelevant | 1 | 2 | These are environmental persistence half-lives of benzo[ghi]perylene in amended soils, not biological toxicokinetic parameters in any organism, and no exact numeric values are given. |
| popPK | Zechmeister_2006 | irrelevant | 0 | 0 | Environmental biomonitoring of PAH deposition in mosses; no toxicokinetic parameters (only an enrichment factor for benzo(g,h,i)perylene as an emission indicator, not a kinetic parameter). |
| popPK | Świsłowski_2024 | irrelevant | 0 | 0 | Moss biomonitoring air-pollution study of PAHs (including BghiP as one analyte), no toxicokinetic parameters for a human or animal subject; no numeric BghiP kinetic values, only calibration/LoD figures. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bbenzoghiperylene%5D&body=Drug%3A%20benzoghiperylene%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_benzoghiperylene/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
