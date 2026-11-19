<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Pyrene&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Pyrene_Choi2023_reference&quot;,&quot;label&quot;:&quot;Choi_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_pyrene/Pyrene_Choi2023_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# Pyrene

- **generic name:** Pyrene
- **T3DB:** [T3D0253](http://www.t3db.ca/toxins/T3D0253) · **PubChem:** [CID 31423](https://pubchem.ncbi.nlm.nih.gov/compound/31423)

## About

Pyrene is a polycyclic aromatic hydrocarbon (PAH) consisting of four fused benzene rings, resulting in a flat aromatic system. The chemical formula is C16H10. This colourless solid is the smallest peri-fused PAH (one where the rings are fused through more than one face). …

- **Category:** Industrial/Workplace Toxin, Pollutant, Food Toxin, Natural Toxin
- **Route of exposure:** oral, inhalation
- **Sources and uses:** PAHs are released into the environment via the combustion of fossil fuels, coke oven emissions and vehicle exhausts, as well as naturally from forest fires and vocanic eruptions. PAHs from these sources may contaminate nearly water systems. …
- **Mechanism of toxicity:** The ability of PAH's to bind to blood proteins such as albumin allows them to be transported throughout the body. Many PAH's induce the expression of cytochrome P450 enzymes, especially CYP1A1, CYP1A2, and CYP1B1, by binding to the aryl hydrocarbon receptor or glycine N-methyltransferase protein. …
- **Health effects:** PAHs are carcinogens and have been associated with the increased risk of skin, respiratory tract, bladder, stomach, and kidney cancers. They may also cause reproductive effects and depress the immune system.
- **Carcinogenicity:** IARC group 3, not classifiable as to its carcinogenicity to humans.
- **Acute toxicity:** LD50: 2700 mg/kg (Oral, Rat)
- **Treatment:** There is no know antidote for PAHs. …

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D0253">T3DB T3D0253</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 129-00-0 · <a href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:39106">ChEBI 39106</a></small></p>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| Pyrene | parent | 202.256 | C16H10 | PubChem | [31423](https://pubchem.ncbi.nlm.nih.gov/compound/31423) | Choi_2023 |
| 1-hydroxypyrene | metabolite | 218.255 | C16H10O | PubChem | [21387](https://pubchem.ncbi.nlm.nih.gov/compound/21387) | Choi_2023 |

## Start here

> **Choi_2023_reference** — <span class="pk-badge pk-badge--orange">Needs review</span> eight healthy adults, n = 8. [Run it in the simulator](drugs/toxin_pyrene/Pyrene_Choi2023_reference.md?tab=Simulation) · [record](drugs/toxin_pyrene/Pyrene_Choi2023_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="yes"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: a value printed only as a range — the record carries its midpoint</sub> | [Choi_2023_reference](drugs/toxin_pyrene/Pyrene_Choi2023_reference.md) | ▶ model + simulator | retention, 1 pool | 2 | Choi JW et al., Toxicokinetic analyses of naphthalene,…, The Science of the total en… (2023) | [10.1016/j.scitotenv.2023.161899](https://doi.org/10.1016/j.scitotenv.2023.161899) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Armstrong_1996_PC](drugs/toxin_pyrene/pd_Armstrong_1996_PC.md) | probability of causation ← benzo-a-pyrene · direct linear effect | — | Armstrong B et al., Compensating lung cancer patients occup…, Occupational and environmen… (1996) | [10.1136/oem.53.3.160](https://doi.org/10.1136/oem.53.3.160) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by qwen3.8-flash-next, p(non-human) 0.00).">in vitro</span> | [Vian_1993_MN_freq](drugs/toxin_pyrene/pd_Vian_1993_MN_freq.md) | micronucleus frequency biomarker turnover ← benzo[a]pyrene | — | Vian L et al., The in vitro micronucleus test on isola…, Mutation research (1993) | [10.1016/0165-1161(93)90021-q](https://doi.org/10.1016/0165-1161(93)90021-q) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Portengen_2023_lung_cancer_mortality](drugs/toxin_pyrene/pd_Portengen_2023_lung_cancer_mortality.md) | lung cancer mortality ← pyrene · time-to-event model | — | Portengen L et al., Methylated polycyclic aromatic hydrocar…, Environment international (2023) | [10.1016/j.envint.2023.107870](https://doi.org/10.1016/j.envint.2023.107870) |
| <span class="pk-badge pk-badge--red">Rejected</span> | [Li_2023_cancer_mortality_risk](drugs/toxin_pyrene/pd_Li_2023_cancer_mortality_risk.md) | cancer mortality risk ← total benzo[a]pyrene equivalents · stimulation effect | — | Li Y et al., Long-term exposure to ambient fine part…, Chemosphere (2023) | [10.1016/j.chemosphere.2023.139800](https://doi.org/10.1016/j.chemosphere.2023.139800) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from an LLM reading of the title and abstract by qwen3.8-flash-next, p(non-human) 1.00).">mouse</span> | **AHR** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Feltner_2023](drugs/toxin_pyrene/pgx_Feltner_2023_AHR_Q100.md) | Feltner M et al., Differential Susceptibility to Benzo[a]…, Toxics (2023) | [10.3390/toxics11090778](https://doi.org/10.3390/toxics11090778) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from an LLM reading of the title and abstract by qwen3.8-flash-next, p(non-human) 1.00).">mouse</span> | **CYP1A1** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | metabolism | [Feltner_2023](drugs/toxin_pyrene/pgx_Feltner_2023_CYP1A1_Q100.md) | Feltner M et al., Differential Susceptibility to Benzo[a]…, Toxics (2023) | [10.3390/toxics11090778](https://doi.org/10.3390/toxics11090778) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from an LLM reading of the title and abstract by qwen3.8-flash-next, p(non-human) 1.00).">mouse</span> | **CYP1A2** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | metabolism | [Feltner_2023](drugs/toxin_pyrene/pgx_Feltner_2023_CYP1A2_Q100.md) | Feltner M et al., Differential Susceptibility to Benzo[a]…, Toxics (2023) | [10.3390/toxics11090778](https://doi.org/10.3390/toxics11090778) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from an LLM reading of the title and abstract by qwen3.8-flash-next, p(non-human) 1.00).">mouse</span> | **CYP1B1** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | metabolism | [Feltner_2023](drugs/toxin_pyrene/pgx_Feltner_2023_CYP1B1_Q100.md) | Feltner M et al., Differential Susceptibility to Benzo[a]…, Toxics (2023) | [10.3390/toxics11090778](https://doi.org/10.3390/toxics11090778) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=pyrene).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP1A2` metabolism | PGx paper |
| metabolism | lung | `CYP1A1` metabolism, `CYP1B1` metabolism | PGx paper |
| metabolism | skin | `CYP1B1` metabolism | PGx paper |
| metabolism | small intestine | `CYP1A1` metabolism | PGx paper |

<sub>Actors without a tissue in the table: AHR (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-15 22:29 | 53:54 | 1/0/0 | 3/1/0 | 0/0/4 | 1,114,347/45,231 | einfracz / qwen3.8-flash-next | 60 | 14/35 | 60/0 | 0 |

## Coverage

- **PubMed hits:** 1717 matched, 262 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_5 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Choi_2023.pdf` | Choi JW et al., Toxicokinetic analyses of naphthalene,…, The Science of the total en… (2023) | popPK | 10 | [10.1016/j.scitotenv.2023.161899](https://doi.org/10.1016/j.scitotenv.2023.161899) | [36716884](https://pubmed.ncbi.nlm.nih.gov/36716884) | The paper explicitly reports biological half-lives and two-compartment model parameters for pyrene, but specific numeric values for pyrene are given as ranges alongside other PAHs rather than isolated precise values for pyrene alone in the provided text. |
| `Simon_2023.pdf` | Simon K et al., Migration of polycyclic aromatic hydroc…, Ecotoxicology and environme… (2023) | popPK | 9 | [10.1016/j.ecoenv.2023.115113](https://doi.org/10.1016/j.ecoenv.2023.115113) | [37315362](https://pubmed.ncbi.nlm.nih.gov/37315362) | Pyrene partition and diffusion coefficients are relevant dermal kinetic parameters, but specific numeric values for pyrene are not provided in the text (only ranges for logKsc/m and relative Dsc comparisons). |
| `Xiao_2022.pdf` | Xiao Y et al., Dermal Uptake is an Important Pathway f…, Bulletin of environmental c… (2022) | popPK | 8 | [10.1007/s00128-022-03647-8](https://doi.org/10.1007/s00128-022-03647-8) | [36512124](https://pubmed.ncbi.nlm.nih.gov/36512124) | The paper reports dermal uptake contributions (2.9-7.6%) for pyrene in zebrafish, which are kinetic parameters, but the specific numeric values are summarized as ranges in the abstract rather than listed as precise individual data points or parameters in a table/text provided. |
| `Zhai_2023.pdf` | Zhai Y et al., Bioconcentration of polycyclic aromatic…, Environmental science and p… (2023) | popPK | 8 | [10.1007/s11356-023-30618-1](https://doi.org/10.1007/s11356-023-30618-1) | [37910354](https://pubmed.ncbi.nlm.nih.gov/37910354) | The paper establishes a PBTK model for pyrene in zebrafish, which is a relevant quantitative toxicokinetic study, but no specific numeric kinetic parameters (e.g., half-lives, partition coefficients) are provided in the extracted evidence. |
| `Gaither_2025.pdf` | Gaither KA et al., Human in vitro metabolism of an environ…, Toxicology letters (2025) | popPK | 5 | [10.1016/j.toxlet.2025.08.010](https://doi.org/10.1016/j.toxlet.2025.08.010) | [40854413](https://pubmed.ncbi.nlm.nih.gov/40854413) | Pyrene is one of the target substances studied for its metabolic kinetics in human liver microsomes, supporting PBPK modeling, but no specific numeric kinetic parameters are listed in the provided text. |

<sub>queue written 2026-11-15 22:18 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abadi_2023 | irrelevant | 0 | 0 | The paper is a human exposure and epidemiological study reporting urinary concentrations and health associations but lacks any quantitative toxicokinetic parameters for pyrene. |
| popPK | Armstrong_1986 | irrelevant | 0 | 0 | The paper is an epidemiological exposure-response study of bladder cancer risk in smelter workers, reporting no quantitative toxicokinetic parameters for pyrene or its metabolites. |
| popPK | Armstrong_1996 | irrelevant | 1 | 0 | This is an epidemiological and compensation risk analysis study that discusses exposure-response models and probability of causation for lung cancer, but reports no quantitative toxicokinetic parameters (e.g., half-life, clearance, partition coefficients) for pyrene. |
| popPK | Armstrong_2004 | irrelevant | 0 | 0 | The paper is a meta-analysis of epidemiological exposure-response relationships for lung cancer risks in various industries, focusing on benzo[a]pyrene as a marker, and contains no toxicokinetic parameters for pyrene. |
| popPK | Armstrong_2009 | irrelevant | 0 | 0 | This is an epidemiological exposure-response study reporting relative risk estimates for lung cancer, not quantitative toxicokinetic parameters for pyrene. |
| popPK | Bailey_2009 | irrelevant | 0 | 0 | The paper studies dibenzo[a,l]pyrene (DBP), not pyrene, and reports tumor incidence and DNA adduct dose-response data, not toxicokinetic parameters like clearance, volume of distribution, or half-lives. |
| popPK | Barata_2005 | irrelevant | 0 | 0 | The paper reports acute toxicity (LC50) values for pyrene but contains no quantitative toxicokinetic parameters (such as half-life, clearance, or partition coefficients). |
| PGx | Barr_2020 | not_relevant | 0 | 0 | The paper studies biochemical mechanisms of CYP3A4 inhibition by pyrene derivatives, not pharmacogenomic effects on PK/PD parameters. |
| popPK | Bausinger_2016 | irrelevant | 0 | 0 | The paper investigates lymphocyte isolation methods for comet assay protocols and mentions benzo[a]pyrene metabolites as mutagenic controls, but contains no kinetic parameters or study on pyrene. |
| PGx | Ben_2024 | not_relevant | 0 | 0 | The drug is benzo[a]pyrene, not pyrene, and the study focuses on gene-environment interactions in cancer susceptibility rather than pharmacokinetic or pharmacodynamic parameters. |
| popPK | Bolognesi_1997 | irrelevant | 0 | 0 | The paper is an epidemiological biomonitoring study of cytogenetic markers (micronuclei) in humans, reporting no toxicokinetic parameters such as half-life, clearance, or partition coefficients for pyrene. |
| popPK | Bronaugh_1994 | irrelevant | 2 | 1 | Pyrene is mentioned only as a substrate for enzyme activity assays (AHH activity) in a review of skin metabolism methods; no toxicokinetic parameters (rate constants, partition coefficients, half-lives) for pyrene are reported in the provided text. |
| PGx | Bukowska_2022 | not_relevant | 0 | 0 | The text is a general review of benzo[a]pyrene exposure and toxicity, and although it mentions that CYP P450 polymorphisms determine sensitivity, it does not report specific quantitative pharmacokinetic or pharmacodynamic parameter changes based on genotype. |
| PGx | Bullock_1995 | not_relevant | 0 | 0 | The study investigates enzyme induction via drug treatment in monkeys, not pharmacogenomic effects of gene variants on pharmacokinetic parameters. |
| popPK | Burstyn_2002 | irrelevant | 1 | 1 | The paper is an epidemiological exposure model validation study for Benzo(a)pyrene (not pyrene) in asphalt workers, containing no toxicokinetic parameters. |
| popPK | Burstyn_2005 | irrelevant | 0 | 0 | The paper is an epidemiological study linking exposure to ischemic heart disease and contains no toxicokinetic parameters or internal concentration data for pyrene. |
| popPK | Burstyn_2007 | irrelevant | 1 | 0 | The study is an epidemiological exposure-outcome association study reporting relative risks, with no quantitative toxicokinetic parameters measured. |
| popPK | Capozzi_2016 | irrelevant | 0 | 0 | The paper reports environmental concentrations of pyrene in moss bags for biomonitoring, not toxicokinetic parameters in biological systems. |
| popPK | Cardoso_2024 | irrelevant | 0 | 0 | The study focuses on benzo(a)pyrene (B(a)P), not pyrene, and therefore contains no kinetic parameters for the requested substance. |
| PGx | Cavalieri_2014 | not_relevant | 0 | 0 | The paper discusses benzo[a]pyrene as a carcinogen and estrogen metabolism, but does not report pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters of pyrene (the specific chemical C16H10). |
| popPK | Cesila_2023 | irrelevant | 0 | 0 | The study is an epidemiological exposure/biomonitoring study reporting urinary concentrations of PAH metabolites but provides no toxicokinetic parameters (half-lives, rate constants, etc.). |
| PGx | Chaloupka_1995 | not_relevant | 0 | 0 | The paper studies the induction of Cyp1a gene expression by PAH mixtures including pyrene, but does not investigate how gene variants/phenotypes alter the pharmacokinetic or pharmacodynamic parameters of pyrene itself. |
| popPK | Chen_2013 | irrelevant | 0 | 0 | The paper studies benzo(a)pyrene, not pyrene, and focuses on enzymatic mechanism/DNA damage rather than reporting quantitative toxicokinetic parameters like half-lives or clearance rates for pyrene. |
| PGx | Chen_2024 | not_relevant | 2 | 2 | The study models the effect of introducing human CYP1A1/CYP1A2 genes into C. elegans on Benzo[a]pyrene (BaP) metabolism/toxicity, which is xenobiotic metabolism modeling rather than human pharmacogenomics (natural variation), and BaP is an environmental carcinogen rather than a therapeutic drug. |
| popPK | Chen_2025 | irrelevant | 0 | 0 | The paper measures general metabolic rates (oxygen consumption, ammonia excretion) in zebrafish exposed to pyrene but reports no toxicokinetic parameters such as half-life, clearance, volume of distribution, or metabolite kinetics. |
| PGx | Christou_1992 | not_relevant | 2 | 3 | The paper studies in vitro enzyme kinetics and site-directed mutagenesis of CYP2B1 in microsomes, not clinical pharmacogenomic effects on PK/PD parameters in patients. |
| popPK | Clauzel_2024 | irrelevant | 0 | 0 | The paper is a review and database compilation of airborne PyrT/BaP ratios for occupational exposure assessment, containing no quantitative toxicokinetic parameters for pyrene. |
| popPK | Clinton_1989 | irrelevant | 0 | 0 | The paper studies 7,12-dimethylbenz[a]anthracene (DMBA), not pyrene; pyrene does not appear as the subject substance. |
| popPK | Cochard_2021 | irrelevant | 0 | 0 | The study reports environmental PAH concentrations in honeybees as bioindicators but provides no toxicokinetic parameters such as rates, half-lives, or partition coefficients for pyrene. |
| PGx | Coltman_2021 | not_relevant | 0 | 0 | The study focuses on genotoxicity and gene expression in 3D spheroids, not on pharmacogenomic effects of gene variants on pyrene PK/PD parameters. |
| PGx | Costa_2012 | not_relevant | 0 | 0 | The study investigates gene expression changes in response to benzo(a)pyrene exposure in fish, not how specific gene variants alter pharmacokinetic or pharmacodynamic parameters in humans. |
| PGx | Costa_2013 | not_relevant | 2 | 2 | The paper investigates protein expression changes due to BaP exposure, not the effect of genetic polymorphisms on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Cox_2006 | irrelevant | 0 | 0 | The paper is a methodological epidemiological study estimating preventable disease fractions, containing no quantitative toxicokinetic parameters for pyrene. |
| PGx | Crespi_1991 | not_relevant | 0 | 0 | The text describes an engineered cell line expressing multiple CYP enzymes for mutagenicity screening of polycyclic aromatic hydrocarbons, not a pharmacogenomic effect on pyrene PK/PD parameters in humans. |
| popPK | Crowell_2011 | irrelevant | 2 | 0 | The paper models benzo[a]pyrene and dibenzo[def,p]chrysene; pyrene is mentioned only as a substance for which simpler models previously existed, with no data or parameters for pyrene provided here. |
| popPK | Croy_2004 | irrelevant | 0 | 0 | Pyrene is mentioned only as an analytical fluorescent probe for polarity, not as the substance of toxicokinetic study. |
| popPK | Cwalina_2023 | irrelevant | 0 | 0 | The paper is an environmental biomonitoring study mapping spatial distribution of PAHs in moss, containing no toxicokinetic parameters for pyrene in any organism. |
| PGx | Danchev_2019 | not_relevant | 0 | 0 | The paper is a bibliometric analysis of scientific replication rates in drug-gene interaction claims and does not report specific pharmacogenomic effects on PK or PD parameters for pyrene. |
| popPK | Deng_2021 | irrelevant | 0 | 0 | The paper focuses on benzo(a)pyrene (BaP), not pyrene, and discusses modeling methodology without reporting specific numeric kinetic parameters for pyrene in the text. |
| popPK | Deutsch-Wenzel_1983 | irrelevant | 0 | 0 | The paper reports carcinogenic potency and dose-response data, not toxicokinetic parameters. |
| popPK | Deutsch-Wenzel_1984 | irrelevant | 0 | 0 | The paper reports carcinogenicity results for brown coal condensate and benzo[a]pyrene, with no toxicokinetic parameters for pyrene. |
| popPK | Deutsch-Wenzel_1985 | irrelevant | 0 | 0 | The paper reports carcinogenic potency (relative risk/potency index) from a skin painting study, not quantitative toxicokinetic parameters (e.g., half-life, clearance, partition coefficients) for pyrene. |
| PGx | Doehmer_1995 | not_relevant | 2 | 1 | The study compares metabolic profiles and cytotoxicity between rat and human CYP1A1 expressed in cells, representing a cross-species comparison of enzyme orthologs rather than an analysis of specific gene variants/polymorphisms (pharmacogenomics) affecting PK/PD parameters in humans. |
| popPK | Edenius_2024 | irrelevant | 0 | 0 | The paper focuses exclusively on benzo[a]pyrene (BaP) and clotrimazole in fish liver cells, with no mention or data regarding pyrene. |
| popPK | Efimov_2021 | irrelevant | 0 | 0 | The paper discusses analytical chemistry partition coefficients (hexane-acetonitrile) for hydrocarbon identification, not toxicokinetic parameters in biological systems. |
| PGx | Farin_1994 | not_relevant | 0 | 0 | The text discusses CYP and mEH expression in endothelial cells but does not involve pyrene or report pharmacokinetic/pharmacodynamic parameters for pyrene. |
| PGx | Ferguson_2008 | not_relevant | 0 | 0 | The text mentions benzo[a]pyrene as a mutagenic dietary contaminant but does not report any pharmacokinetic or pharmacodynamic parameters, nor does it link gene variants to drug disposition or response for pyrene. |
| PGx | Franco_2022 | not_relevant | 2 | 1 | The paper reports population-level metabolic adaptation (phenotype) rather than a specific pharmacogenomic gene variant effect on pyrene PK parameters. |
| PGx | Freedland_2017 | not_relevant | 0 | 0 | The paper discusses Benzo[a]pyrene and CYP1A1 variants, not Pyrene, and reports on genotoxicity/association in yeast rather than human PK/PD parameters. |
| popPK | Friesen_2006 | irrelevant | 0 | 0 | The paper focuses on retrospective exposure assessment using mixed effects models, reporting no quantitative toxicokinetic parameters (such as half-lives, clearance, or volume of distribution) for pyrene. |
| popPK | Friesen_2009 | irrelevant | 0 | 0 | The paper is an epidemiological cohort study of mortality and cancer risk in smelter workers, reporting no toxicokinetic parameters for pyrene. |
| PGx | Fukuta_1992 | not_relevant | 0 | 0 | The paper reports recombinant expression of dog CYP1A1 and its metabolic activity on various substrates, but does not address pharmacogenomic effects (genotype/phenotype variation) on PK or PD parameters in humans or animals. |
| popPK | Gaither_2025 | relevant | 5 | 0 | Pyrene is one of the target substances studied for its metabolic kinetics in human liver microsomes, supporting PBPK modeling, but no specific numeric kinetic parameters are listed in the provided text. |
| PGx | Gleich_2019 | not_relevant | 0 | 0 | The paper describes in vitro characterization of a bovine cell line's metabolic capabilities using benzo[a]pyrene, but does not report human pharmacogenomic effects on PK/PD parameters for pyrene. |
| popPK | González-Gómez_2023 | irrelevant | 0 | 0 | The paper reports static biomonitoring concentrations of pollutants in dog plasma but does not provide any quantitative toxicokinetic parameters such as half-lives, clearance rates, partition coefficients, or metabolic constants. |
| popPK | Granberg_2003 | irrelevant | 0 | 0 | The paper studies benzo[a]pyrene and DMBA, not pyrene, and reports tissue binding/distribution rather than quantitative kinetic parameters for pyrene. |
| popPK | Grimard_2021 | irrelevant | 0 | 0 | The paper models benzo[a]pyrene and four other chemicals in white sturgeon, but contains no data or parameters for pyrene. |
| popPK | Grimmer_1982 | irrelevant | 1 | 0 | The paper reports only tumorigenic endpoints and PAH content in oil, with no quantitative kinetic parameters for pyrene. |
| popPK | Grimmer_1983 | irrelevant | 0 | 0 | The paper reports carcinogenicity (tumor incidence) and chemical composition fractions, but no toxicokinetic parameters such as half-life, clearance, or absorption rates. |
| popPK | Grimmer_1984 | irrelevant | 1 | 0 | The paper reports only carcinogenicity outcomes (tumor incidence, dose-response) and chemical composition, containing no kinetic parameters such as half-lives or clearance rates. |
| popPK | Grimmer_1984_2 | irrelevant | 1 | 0 | The paper is a carcinogenicity bioassay measuring tumor incidence and dose-response relationships, not toxicokinetic parameters. |
| popPK | Grimmer_1985 | irrelevant | 0 | 0 | The paper reports carcinogenic potency and dose-response data, not quantitative toxicokinetic parameters for pyrene. |
| popPK | Grimmer_1987 | irrelevant | 0 | 0 | The paper is a carcinogenicity bioassay identifying carcinogenic fractions of flue gas condensate and reports no quantitative toxicokinetic parameters (e.g., half-lives, clearance, partition coefficients) for pyrene. |
| popPK | Grünfeld_2024 | irrelevant | 2 | 1 | The paper is an epidemiological/exposure assessment study measuring urinary biomarkers and skin wipe concentrations; it does not report quantitative toxicokinetic parameters (half-lives, rate constants, partition coefficients, or model parameters) for pyrene. |
| PGx | Gumenku_2024 | not_relevant | 0 | 0 | The drug studied is docetaxel, not pyrene (pyrene is only mentioned as a metabolic pathway for CYP1B1). |
| popPK | Guo_2019 | irrelevant | 0 | 0 | The paper focuses on Benzo[a]pyrene (BaP) metabolite adducts in umbilical cord blood for epidemiological purposes and does not mention Pyrene at all, nor does it report any toxicokinetic parameters. |
| popPK | Guo_2024 | irrelevant | 0 | 0 | The paper is an epidemiological exposure study on benzo(a)pyrene and reports only statistical associations between exposure levels and biomarkers, with no kinetic parameters (half-lives, clearance, partition coefficients) for pyrene or any other substance. |
| PGx | Hadrup_2019 | not_relevant | 1 | 8 | The study measures 1-hydroxypyrene as a biomarker of exposure and GSTM1 as a covariate, but does not report how gene variants alter the pharmacokinetic or pharmacodynamic parameters of pyrene itself; the dependent variables are inflammatory markers (SAA/CRP), not drug PK/PD. |
| popPK | He_1991 | irrelevant | 0 | 0 | This is an epidemiological case-control study focusing on lung cancer risk from smoky coal (benzo[a]pyrene), containing no toxicokinetic parameters for pyrene. |
| popPK | He_1998 | irrelevant | 0 | 0 | The paper reports kinetic parameters for benzo(a)pyrene, not pyrene. |
| popPK | Healy_2006 | irrelevant | 0 | 0 | The paper discusses a genotoxicity assay using benzo-a-pyrene-diol-epoxide (BPDE), not pyrene itself, and reports no quantitative toxicokinetic parameters. |
| PGx | Hecht_2002 | not_relevant | 1 | 0 | The paper is a qualitative review of biomarkers for tobacco exposure and mentions metabolic polymorphisms only in the context of future study needs, without reporting specific pharmacogenomic effects on PK/PD parameters. |
| PGx | Hu_2025 | not_relevant | 0 | 0 | The paper studies drug-drug interaction (sucralose inhibiting P-glycoprotein affecting benzo(a)pyrene accumulation), not pharmacogenomics (gene variant effects). |
| popPK | Hua_2021 | irrelevant | 0 | 0 | The paper is an analytical method development study for measuring hydroxylated PAHs in urine and contains no toxicokinetic parameters. |
| PGx | Hýždalová_2018 | not_relevant | 0 | 0 | The drug is benzo[a]pyrene (BaP), not pyrene. |
| popPK | Iamiceli_2020 | irrelevant | 1 | 1 | The paper is a human biomonitoring study reporting exposure levels (concentrations in urine) of pyrene metabolites, but does not report any quantitative toxicokinetic parameters such as half-lives, clearance rates, or partition coefficients. |
| popPK | Iamiceli_2022 | irrelevant | 1 | 1 | The study measures metabolite concentrations in urine for biomonitoring/exposure assessment but reports no kinetic parameters (half-lives, clearance, partition coefficients, etc.). |
| popPK | Ifegwu_2016 | irrelevant | 0 | 0 | The text is a qualitative review or chapter introduction discussing biomarkers for PAHs generally, with no quantitative kinetic parameters for pyrene present. |
| popPK | Jacob_1996 | irrelevant | 3 | 1 | The abstract discusses metabolite profiles and general excretion rates as qualitative or comparative observations without providing specific quantitative kinetic parameters like half-lives, clearance, or rate constants for pyrene. |
| popPK | Jakobsen_2018 | irrelevant | 0 | 0 | The paper focuses on probabilistic cancer risk assessment for benzo[a]pyrene (BaP), not pyrene, and contains no toxicokinetic parameters for pyrene. |
| popPK | Ji_2025 | irrelevant | 0 | 0 | The paper focuses on probabilistic dose-response modeling for Benzo[a]pyrene and Naphthalene, not pyrene, and contains no toxicokinetic parameters. |
| popPK | Karakoltzidis_2025 | irrelevant | 1 | 2 | This is an epidemiological human biomonitoring study reporting population exposure levels (concentrations) and their determinants, not toxicokinetic parameters like half-lives or clearance rates for pyrene. |
| PGx | Kato_1990 | not_relevant | 0 | 0 | The text discusses mephenytoin and benzo[a]pyrene metabolism but reports no data on pyrene pharmacokinetics or pharmacodynamics. |
| popPK | Kelly_2021 | irrelevant | 0 | 0 | The paper is an atmospheric chemistry and epidemiological study estimating global cancer risk and emissions of PAHs, including pyrene, but contains no biological toxicokinetic data (e.g., half-lives, clearance, partition coefficients) for humans or animals. |
| PGx | Kishino_2019 | not_relevant | 0 | 0 | The paper discusses pyrene only as part of benzo[a]pyrene (BaP) in a rat liver S9 metabolism/genotoxicity assay; it does not study pyrene itself as a drug, nor does it investigate human gene variants or pharmacokinetic/pharmacodynamic parameters. |
| popPK | Kodzhahinchev_2021 | irrelevant | 2 | 2 | The paper studies Benzo[a]pyrene, not Pyrene, and reports qualitative trends in body burden without specific kinetic parameters or numeric time-course data for Pyrene. |
| popPK | Koslitz_2023 | irrelevant | 2 | 1 | The paper reports only biomonitoring concentration levels of 1-hydroxypyrene and pyrene on textiles, without any toxicokinetic parameters such as half-lives, clearance rates, or partition coefficients. |
| popPK | Kuang_2013 | irrelevant | 1 | 0 | The paper is an epidemiological exposure-response study reporting statistical associations between biomarker levels and oxidative damage, but it provides no quantitative toxicokinetic parameters (e.g., half-lives, rate constants, partition coefficients) for pyrene. |
| popPK | Kuljukka-Rabb_2002 | irrelevant | 2 | 9 | The paper reports biomarker concentrations (1-hydroxypyrene) and statistical associations with genotypes but provides no quantitative toxicokinetic parameters (such as half-lives, clearance, or partition coefficients) for pyrene. |
| popPK | Kurasz_2025 | irrelevant | 0 | 0 | The paper reports epidemiological risk associations between air pollution (including benzo(a)pyrene) and hospital admissions, with no toxicokinetic parameters reported. |
| PGx | Lang_1981 | not_relevant | 0 | 0 | The paper discusses benzo[a]pyrene metabolism and cytochrome P-450 activities in vitro, not pharmacokinetic or pharmacodynamic parameters in a pharmacogenomic context for a subject population. |
| PGx | Lewis_1996 | not_relevant | 0 | 0 | The paper discusses molecular modelling of CYP1A enzymes with benzo[a]pyrene, not pyrene itself, and does not report pharmacogenomic effects on PK/PD parameters. |
| PGx | Li_2020 | not_relevant | 2 | 2 | The paper investigates metabolic activation (genotoxicity/PD) using engineered cell lines overexpressing specific CYP enzymes, rather than studying the effect of natural human genetic polymorphisms (pharmacogenomics) on pharmacokinetic or pharmacodynamic parameters of pyrene. |
| popPK | Li_2023 | irrelevant | 0 | 0 | The paper is an epidemiological study on cancer mortality associated with PM2.5-bound PAHs and reports no kinetic parameters for pyrene. |
| PGx | Li_2025 | not_relevant | 0 | 0 | The paper uses in silico methods to identify gene targets and pathways linking BaP to liver cancer, but does not investigate how specific genetic variants affect pyrene pharmacokinetics or pharmacodynamics. |
| popPK | Liu_2014 | irrelevant | 0 | 0 | The paper focuses on benzo[a]pyrene (B[a]P) in scallops, not pyrene. |
| popPK | Liu_2025 | irrelevant | 0 | 0 | The paper concerns benzo[a]pyrene desorption from polyethylene in seawater, not pyrene, and reports environmental mass transfer kinetics rather than biological toxicokinetics. |
| PGx | Lo_2013 | not_relevant | 0 | 0 | The study focuses on the inhibition of CYP1 enzymes by berberine and does not investigate pyrene or its pharmacokinetic/pharmacodynamic parameters. |
| popPK | Mackay_2001 | irrelevant | 0 | 8 | The paper reports environmental partition coefficients for pyrene in groundwater/colloid systems, not toxicokinetic parameters in humans or animals. |
| PGx | Maier_2023 | not_relevant | 0 | 0 |  |
| popPK | Mallon_1984 | irrelevant | 0 | 0 | no_text gate: only 111 chars of text extracted (&lt; 400) |
| PGx | Mandon_2019 | not_relevant | 0 | 0 | The paper focuses on in vitro genotoxicity screening in 3D HepaRG spheroids and does not involve pyrene or report pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Mariottini_2008 | irrelevant | 0 | 0 | Pyrene appears only as a substrate name in an enzyme activity assay (BP(a)PMO) for eels; no pyrene kinetic parameters are reported. |
| popPK | McCormick_2022 | irrelevant | 1 | 0 | The paper is an occupational exposure and epidemiological study reporting external exposure levels (air, dermal) and urinary biomarker concentrations, but it reports no toxicokinetic parameters such as half-lives, clearance rates, volumes of distribution, or partition coefficients for pyrene. |
| PGx | Mikhailova_2005 | not_relevant | 0 | 0 | The paper discusses o-aminoazotoluene and enzyme induction in mice, mentioning 3,4-benzopyrene only as a comparison standard, and contains no data on pyrene pharmacokinetics or pharmacodynamics. |
| popPK | Mokhtar_2020 | irrelevant | 0 | 0 | Pyrene (specifically benzo(a)pyrene) is used as an Ar hydrocarbon receptor agonist to modulate gentamicin toxicity, with no toxicokinetic parameters reported for the PAH itself. |
| PGx | Mori_1995 | not_relevant | 0 | 0 | The paper discusses the metabolic activation of benzo[a]pyrene in hamsters exposed to cigarette smoke, not pharmacogenomic effects in humans or specific genetic variants. |
| popPK | Morse_1985 | irrelevant | 0 | 0 | The paper investigates benzo[a]pyrene (BaP), not pyrene, and provides qualitative distribution data without specific toxicokinetic parameters. |
| popPK | Motykiewicz_1995 | irrelevant | 1 | 0 | The paper reports DNA adduct levels (biomarker of exposure) and lacks quantitative toxicokinetic parameters for pyrene. |
| PGx | Nebert_1981 | not_relevant | 2 | 3 | The paper discusses benzo[a]pyrene, not pyrene, and focuses on metabolic activation/toxicity rather than pharmacokinetic parameters of pyrene. |
| popPK | Nesnow_1982 | irrelevant | 0 | 0 | The paper focuses on tumor-initiating activity of complex mixtures and does not report quantitative toxicokinetic parameters for pyrene. |
| PGx | Nishikawa_2017 | not_relevant | 0 | 0 | The paper reports an association between a genotype and disease risk (lung cancer), not a pharmacokinetic or pharmacodynamic effect on the drug pyrene. |
| popPK | Obinaju_2015 | irrelevant | 0 | 0 | The paper measures environmental PAH concentrations and biochemical perturbations but reports no toxicokinetic parameters for pyrene. |
| popPK | Okay_2008 | irrelevant | 2 | 0 | The paper reports toxicity endpoints and bioaccumulation levels in marine mussels but does not provide specific quantitative toxicokinetic parameters (e.g., half-lives, rate constants, partition coefficients) for pyrene. |
| popPK | Okona-Mensah_2005 | irrelevant | 0 | 0 | The paper is a review and methodological proposal focusing on DNA adducts and high potency PAHs (DBA, DB[a,l]P) with no quantitative toxicokinetic parameters for pyrene provided in the evidence. |
| popPK | Oliveira_2019 | irrelevant | 0 | 0 | The paper is a review of exposure levels and health outcomes, reporting no toxicokinetic parameters for pyrene. |
| popPK | Palanikumar_2012 | irrelevant | 1 | 0 | The paper measures LC50 and biomarker responses (enzymes) but does not report quantitative toxicokinetic parameters like clearance, partition coefficients, or half-lives. |
| popPK | Persoons_2020 | irrelevant | 0 | 0 | The paper reports urinary concentrations of biomarkers in a population (exposure study) but does not quantify any kinetic parameters such as half-lives, clearance, or partition coefficients. |
| popPK | Peters_2016 | relevant | 10 | 4 | The paper measures absorption and elimination rates (ka, kel) and bioavailability for anthracene and benzo[a]pyrene in swine, but not for pyrene. |
| popPK | Peters_2016_2 | irrelevant | 0 | 0 | The paper reports environmental exposure estimates for a job-exposure matrix and does not contain any toxicokinetic data or parameters for pyrene. |
| popPK | Pilz_2024 | irrelevant | 1 | 10 | The paper concerns benzo[a]pyrene, not pyrene, and is an analytical/exposure study reporting static biomarker concentrations rather than kinetic parameters. |
| popPK | Portengen_2023 | irrelevant | 0 | 0 | The study reports epidemiological risk associations (hazard ratios) for PAH exposure and lung cancer mortality but contains no quantitative toxicokinetic parameters for pyrene. |
| popPK | Pramanik_2024 | irrelevant | 0 | 0 | The paper uses pyrene tetrasulfonate (PTSA) as a fluorescent dye for microplastic detection; it does not report toxicokinetic parameters for pyrene as a subject substance. |
| popPK | Rafique_2023 | irrelevant | 0 | 0 | The paper reports urinary metabolite concentrations as biomarkers of exposure without providing any quantitative kinetic parameters (e.g., half-lives, rate constants, clearance, or PBPK parameters). |
| popPK | Rajfur_2025 | irrelevant | 0 | 0 | The paper reports environmental bioaccumulation of PAHs in mosses, not toxicokinetic parameters in humans or animals. |
| popPK | Ramesh_2023 | irrelevant | 1 | 10 | The paper reports static concentrations of B(a)P (not pyrene) in a cross-sectional human cohort, providing no kinetic parameters such as half-life, clearance, or partition coefficients. |
| popPK | Reynaud_2012 | irrelevant | 0 | 0 | The paper reports toxicokinetic parameters for benzo[a]pyrene and fipronil, not pyrene. |
| popPK | Richter-Brockmann_2018 | irrelevant | 0 | 0 | The paper focuses on analytical method development for benzo[a]pyrene metabolites and does not report any toxicokinetic parameters for pyrene. |
| popPK | Rietz_2021 | relevant | 9 | 4 | The paper reports dermal absorption rate constants and lag times for pyrene in humans, but the specific numeric values for these toxicokinetic parameters are likely in Table 2 or supplementary tables which are not fully rendered in the text snippet. |
| popPK | Saengtienchai_2015 | relevant | 9 | 4 | The paper reports tissue concentrations of pyrene metabolites and explicitly cites a terminal half-life (6.2-8.7 hr) for pyrene in rats, though the primary data are concentrations rather than direct kinetic parameters derived in this study. |
| popPK | Sales_2011 | irrelevant | 0 | 0 | Pyrene is used only as a spectrofluorimetric probe for surfactant characterization, with no toxicokinetic parameters reported. |
| popPK | Sartorelli_2020 | irrelevant | 2 | 5 | The paper is an occupational exposure assessment reporting measured concentrations of 1-hydroxypyrene in workers, but contains no quantitative toxicokinetic parameters (half-lives, rate constants, etc.) for pyrene itself. |
| popPK | Scheepers_2002 | irrelevant | 0 | 0 | The paper reports biomarker levels (urinary metabolites) as exposure indicators in an epidemiological study, containing no toxicokinetic rate constants, half-lives, or partition coefficients for pyrene. |
| popPK | Schmidt_2013 | irrelevant | 0 | 0 | The paper reports mixture toxicity endpoints (LC50) and chemical activity in springtails, but contains no quantitative toxicokinetic parameters (e.g., half-lives, clearance, partition coefficients) for pyrene. |
| popPK | Schubert_2011 | irrelevant | 0 | 0 | The paper measures PAH concentrations in waterpipe smoke and biomarkers for body burden but reports no quantitative toxicokinetic parameters (rates, volumes, coefficients) for pyrene. |
| PGx | Sengstag_1994 | not_relevant | 0 | 0 | The paper discusses a yeast bioassay for carcinogen activation and mitotic recombination, not pharmacogenomic effects on PK/PD parameters in humans. |
| popPK | Senthilkumar_2022 | irrelevant | 0 | 0 | The paper is a pharmaceutical formulation study on aceclofenac-loaded pluronic micelles, where pyrene is used solely as a fluorescence probe (analytical reagent) to characterize micelle properties, not as the subject of toxicokinetic analysis. |
| PGx | Sharin_2025 | not_relevant | 0 | 0 | The paper describes the development of a cell line for toxicological screening and mentions benzo-a-pyrene as a CYP1A inducer, but does not investigate pharmacogenomic effects or report PK/PD parameter changes based on genetic variants. |
| PGx | Shen_2023 | not_relevant | 0 | 0 | The paper investigates drug-drug/chemical-chemical interactions (MAHs inhibiting BaP glucuronidation), not pharmacogenomic effects (gene variants influencing PK/PD). |
| popPK | Shen_2023_2 | irrelevant | 1 | 0 | The paper reports qualitative metabolomic changes (polar metabolites) in amphipods after exposure but does not report any quantitative toxicokinetic parameters such as half-lives, clearance, or partition coefficients for pyrene. |
| popPK | Simon_2023 | relevant | 9 | 0 | Pyrene partition and diffusion coefficients are relevant dermal kinetic parameters, but specific numeric values for pyrene are not provided in the text (only ranges for logKsc/m and relative Dsc comparisons). |
| popPK | Sivaram_2019 | irrelevant | 0 | 0 | The paper is a metabolomics study on maize (plants), not humans or animals, and reports no quantitative toxicokinetic parameters for pyrene. |
| popPK | Smith_2017 | irrelevant | 1 | 2 | The paper studies benzo[a]pyrene and dibenzo[a]pyrene metabolites, not pyrene, so parameters for pyrene are absent. |
| popPK | Smith_2022 | irrelevant | 1 | 2 | The paper reports toxicokinetic parameters (Ki, Clint, Vmax, Km) for benzo[a]pyrene (BaP) and dibenzo[def,p]chrysene (DBC); pyrene appears only as a component of a mixture (Supermix-10) with no specific kinetic parameters reported for pyrene itself. |
| popPK | Sochacka-Tatara_2018 | irrelevant | 0 | 0 | The study measures static urinary metabolite concentrations to assess environmental exposure but reports no toxicokinetic parameters (such as half-lives, clearance rates, or partition coefficients). |
| PGx | Solan_2023 | not_relevant | 0 | 0 | The paper investigates the effect of PFAS on CYP450 enzyme activity in vitro, not the effect of a gene variant on the pharmacokinetics or pharmacodynamics of pyrene. |
| popPK | Souza_2022 | irrelevant | 0 | 0 | This is a human biomonitoring and exposure study reporting urinary metabolite concentrations and daily intake estimates, not kinetic parameters like half-lives or partition coefficients. |
| PGx | Sparfel_2004 | not_relevant | 0 | 0 | The paper studies drug-drug interaction (inhibition by EIPA) on benzo(a)pyrene metabolism, not a pharmacogenomic effect of a gene variant on pyrene parameters. |
| PGx | Sparfel_2006 | not_relevant | 0 | 0 | The paper describes drug-drug interaction (inhibition by Pifithrin alpha) and enzyme kinetics, not pharmacogenomic effects of human gene variants on Pyrene parameters. |
| popPK | Speit_2003 | irrelevant | 0 | 0 | The study focuses on DNA damage in smokers using the comet assay and does not report any toxicokinetic parameters for pyrene. |
| PGx | Spink_1992 | not_relevant | 0 | 0 | The paper studies estradiol metabolism, not pyrene; pyrene is mentioned only as an inhibitor of P450 1A enzymes in MCF-7 cells. |
| popPK | Stagaman_2024 | irrelevant | 0 | 0 | The paper focuses on Benzo[a]pyrene (BaP), not pyrene, and reports behavioral and microbiome diversity metrics rather than toxicokinetic parameters like half-life or clearance. |
| PGx | Starek_2009 | not_relevant | 0 | 0 | The text discusses the carcinogenic effects of tobacco smoke and general concepts of metabolic activation and genotype-dependent susceptibility, but it does not report specific pharmacokinetic or pharmacodynamic parameters for pyrene nor does it quantify the effect of specific gene variants. |
| PGx | Striganavičiūtė_2025 | not_relevant | 0 | 0 | The paper investigates phytoremediation of PAH pollutants (including pyrene) in plants, not pharmacokinetics or pharmacodynamics in humans/animals. |
| popPK | Sun_1984 | irrelevant | 0 | 0 | The paper studies benzo(a)pyrene (BaP), not pyrene; pyrene is not the subject substance and has no reported kinetic parameters. |
| PGx | Sundberg_2019 | not_relevant | 0 | 0 | The study investigates gene knockouts affecting toxicity pathways (AHR/CYP1A1 induction) for benzo[a]pyrene, not pharmacogenomic effects on pyrene PK/PD parameters. |
| PGx | Søfteland_2022 | not_relevant | 0 | 0 | The paper studies the toxicology of glyphosate in salmon cells and uses benzo(a)pyrene only as a comparator for cell viability; it does not analyze genetic variants affecting the pharmacokinetics or pharmacodynamics of pyrene. |
| popPK | Tainio_2015 | irrelevant | 0 | 0 | The paper is an epidemiological burden of disease study that does not report any toxicokinetic parameters for pyrene. |
| popPK | Takahara_1993 | irrelevant | 0 | 0 | The paper focuses on the purification of NADPH-cytochrome P-450 reductase using benzo(a)pyrene as a substrate; pyrene is not mentioned, and no kinetic parameters for pyrene are reported. |
| PGx | Talaska_2006 | not_relevant | 2 | 2 | The paper reports on Benzo(a)pyrene, not Pyrene, and focuses on DNA adduct formation (toxicological endpoint) rather than standard pharmacokinetic or pharmacodynamic parameters. |
| PGx | Tao_2025 | not_relevant | 0 | 0 | The paper investigates gene-environment interactions regarding asthma susceptibility and lipid metabolism, not pharmacokinetic or pharmacodynamic parameters of pyrene as a drug. |
| popPK | Tao_2026 | irrelevant | 0 | 0 | The paper is an epidemiological exposure-outcome study reporting associations between urinary PAH metabolite concentrations and birth outcomes, with no quantitative toxicokinetic parameters for pyrene disposition or metabolism rates. |
| PGx | Tatemichi_1999 | not_relevant | 0 | 0 | The paper discusses CYP expression in gastric mucosa and mutagenic activation of benzo(a)pyrene, but it does not report a pharmacogenomic association (gene variant to PK/PD parameter) for pyrene in humans. |
| popPK | Teunen_2022 | irrelevant | 0 | 0 | The paper reports threshold concentrations of benzo(a)pyrene in biota for ecological quality assessment, not quantitative toxicokinetic parameters like half-lives, clearance rates, or partition coefficients. |
| popPK | Thackray_2015 | irrelevant | 0 | 0 | The paper reports atmospheric environmental modeling parameters (OH oxidation rate constants) rather than toxicokinetic parameters in biological organisms. |
| popPK | Tummino_1993 | irrelevant | 0 | 0 | Pyrene is used merely as an analytical fluorophore for detergent aggregation number determination, not as a subject of toxicokinetic study. |
| PGx | Valton_2017 | not_relevant | 0 | 0 | The paper discusses benzo[a]pyrene exposure inducing P-gp expression in fish, which is an environmental toxicology study, not a human pharmacogenomic study of pyrene (the drug) affecting PK/PD parameters. |
| popPK | Vauhkonen_1980 | irrelevant | 2 | 2 | The paper studies benzo[a]pyrene (BaP), not pyrene, and reports no quantitative kinetic parameters like rate constants or clearance for pyrene. |
| popPK | Verheyen_2021 | irrelevant | 0 | 0 | The paper is an epidemiological study reporting exposure concentrations and association statistics, not quantitative toxicokinetic parameters (e.g., half-lives, partition coefficients, clearance). |
| popPK | Vermillion_2023 | irrelevant | 0 | 0 | The paper investigates Benzo[a]pyrene (BaP) toxicokinetics, not Pyrene; Pyrene is mentioned only as a co-exposure/background contaminant measured in plasma, with no kinetic parameters reported for it. |
| popPK | Viau_2004 | irrelevant | 2 | 0 | The paper is a methodological study on creatinine normalization in biological monitoring and does not report quantitative toxicokinetic parameters for pyrene. |
| PGx | Wahlang_2015 | not_relevant | 0 | 0 | The text is a general review of CYP metabolism of carcinogens (including benzo[a]pyrene, not pyrene) and anticancer drugs, mentioning genetic polymorphisms only in a broad context without reporting specific quantitative PK/PD effects for pyrene. |
| popPK | Wang_2015 | irrelevant | 2 | 2 | The paper is an epidemiological exposure/outcome study linking PAH levels to health effects; it mentions a partition coefficient only as a verification concept without providing any numeric toxicokinetic parameters for pyrene. |
| popPK | Wang_2024 | irrelevant | 1 | 1 | This is a cross-sectional exposure and biomonitoring study reporting internal concentrations for risk assessment, not toxicokinetic parameters like half-lives, clearance, or partition coefficients. |
| popPK | Webb_2008 | irrelevant | 0 | 0 | The study focuses on benzo[a]pyrene and beta-naphthoflavone, with pyrene only appearing as a class of metabolites (pyrene-type), and reports biomarker activity ratios rather than quantitative kinetic parameters for pyrene. |
| PGx | Wei_2001 | not_relevant | 0 | 0 | The paper characterizes CYP enzyme expression and activity in human lung tissue using probe substrates but does not study pyrene metabolism or report pharmacogenomic effects on PK/PD parameters. |
| popPK | Wenzel-Hartung_1990 | irrelevant | 0 | 0 | The paper reports carcinogenic potency and dose-response data (ED10 values) for polycyclic aromatic hydrocarbons, but does not report any quantitative toxicokinetic parameters (e.g., half-lives, clearance, partition coefficients) for pyrene or benzo(a)pyrene. |
| popPK | Weyand_1986 | irrelevant | 0 | 0 | The paper investigates Benzo(a)pyrene, not pyrene. |
| PGx | White_1994 | not_relevant | 0 | 0 | The paper focuses on beluga whales and benzo[a]pyrene (not pyrene), comparing sexes rather than reporting pharmacogenomic effects of specific gene variants on drug PK/PD. |
| PGx | Wilson_2021 | not_relevant | 0 | 0 | The paper is a review of genetic models for AHR signaling and does not report pharmacogenomic effects on PK/PD parameters for pyrene. |
| popPK | Wong_2021 | irrelevant | 0 | 0 | The paper reports epidemiological associations between coal/diesel exposure and urinary mutagenicity, not quantitative toxicokinetic parameters for pyrene. |
| popPK | Wormley_2004 | irrelevant | 1 | 0 | This is a mini-review summarizing existing literature on neurotoxicity of benzo(a)pyrene and TCDD without reporting original quantitative kinetic parameters. |
| popPK | Xiao_2022 | relevant | 8 | 2 | The paper reports dermal uptake contributions (2.9-7.6%) for pyrene in zebrafish, which are kinetic parameters, but the specific numeric values are summarized as ranges in the abstract rather than listed as precise individual data points or parameters in a table/text provided. |
| PGx | Xu_2023 | not_relevant | 2 | 0 | The paper reports associations between gene variants and cancer risk (susceptibility) induced by benzo(a)pyrene exposure, not pharmacokinetic or pharmacodynamic parameters of pyrene as a drug. |
| PGx | Xu_2026 | not_relevant | 0 | 0 | The study focuses on PAH toxicity (phenanthrene, chrysene, benzo[a]pyrene) in clams, not pyrene, and reports general transcriptomic/phenotypic responses rather than specific pharmacogenomic effects of a gene variant on PK/PD parameters. |
| PGx | Yamashita_2021 | not_relevant | 0 | 0 | The paper investigates the regulation of CYP3A5 gene expression by AhR ligands (benzo[a]pyrene/3MC) in cell lines, not the effect of genetic variants on pharmacokinetic/pharmacodynamic parameters of pyrene. |
| popPK | Yan_2023 | irrelevant | 2 | 2 | The paper reports urinary concentrations of pyrene metabolites over time to validate biomarkers, but does not report derived toxicokinetic parameters (e.g., half-lives, clearance, partition coefficients) for pyrene. |
| popPK | Ye_2026 | irrelevant | 0 | 0 | The paper is an epidemiological and network pharmacology study on smoking and premature ovarian insufficiency, focusing on cotinine, nicotine, and benzo[a]pyrene; it does not report toxicokinetic parameters for pyrene. |
| PGx | Zaja_2016 | not_relevant | 0 | 0 | The paper characterizes a fish transporter's interaction with benzo(a)pyrene, not pharmacogenomic effects on human PK/PD parameters. |
| popPK | Zhai_2023 | relevant | 8 | 0 | The paper establishes a PBTK model for pyrene in zebrafish, which is a relevant quantitative toxicokinetic study, but no specific numeric kinetic parameters (e.g., half-lives, partition coefficients) are provided in the extracted evidence. |
| PGx | Zhang_2004 | not_relevant | 0 | 0 | The paper describes a transgenic mouse model reporter for Cyp1a2 regulation and does not report pharmacokinetic or pharmacodynamic parameters of pyrene. |
| popPK | Zhang_2023 | irrelevant | 0 | 0 | The paper is an epidemiological study measuring exposure and lung function outcomes, with no quantitative toxicokinetic parameters for pyrene. |
| popPK | Zhang_2024 | irrelevant | 0 | 0 | The paper reports static concentrations of PAHs in hair and in vitro cellular accumulation based on melanin affinity, but does not provide quantitative toxicokinetic parameters (rates, half-lives, partition coefficients, or PBPK models). |
| popPK | Zhang_2025 | irrelevant | 0 | 0 | The paper is an environmental monitoring study measuring atmospheric PAH concentrations and risk, not a toxicokinetic study on pyrene disposition in organisms. |
| popPK | Zhang_2025_2 | irrelevant | 0 | 0 | The paper reports epidemiological hazard ratios for mortality associations with benzo(a)pyrene [B(a)P], not pyrene, and contains no toxicokinetic parameters. |
| PGx | Zhou_2010 | not_relevant | 1 | 0 | The drug specified is pyrene (which is not in the text, unlike benzo[a]pyrene which is mentioned as a procarcinogen, not a drug in this context), and the text is a general review of CYP1A2 structure and regulation without reporting specific gene-variant effects on the PK/PD parameters of pyrene. |
| popPK | Zhou_2023 | irrelevant | 0 | 0 | The paper uses pyrene as one of three POPs for ecological risk assessment in fish but does not report any specific quantitative kinetic parameters for pyrene itself, only aggregated PAH concentrations and risk ratios. |
| PGx | Zhou_2023_2 | not_relevant | 0 | 0 | The paper studies transcriptomic and toxicological responses in scallops to benzo[a]pyrene exposure, but does not report pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Zhu_2024 | irrelevant | 0 | 0 | The paper is a meta-analysis of gene expression data for Benzo[a]pyrene (B[a]P), not pyrene, and reports no toxicokinetic parameters. |
| popPK | de_2018 | irrelevant | 1 | 0 | The study reports static concentrations of biliary metabolites in fish for bioavailability assessment, with no kinetic parameters (rates, half-lives, partitions) for pyrene. |
| popPK | van_2010 | irrelevant | 1 | 0 | The study measures metabolite concentrations in field-sampled crabs (exposure monitoring) and reports no quantitative kinetic parameters for pyrene; additionally, the substance is benzo[a]pyrene, not pyrene. |
| PGx | Álvarez-González_2024 | not_relevant | 0 | 0 | The paper studies pyrene as an environmental biomarker of exposure, not as a drug, and does not report pharmacokinetic or pharmacodynamic parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpyrene%5D&body=Drug%3A%20pyrene%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_pyrene/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-15 22:18 UTC</sub>
