<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M01A&quot;,&quot;href&quot;:&quot;atc/M01A.md&quot;},{&quot;label&quot;:&quot;aceclofenac&quot;}]"></div>

# aceclofenac

- **generic name:** aceclofenac
- **ATC codes:** `M01AB16`, `M02AA25`
- **DrugBank:** [DB06736](https://go.drugbank.com/drugs/DB06736) · **PubChem:** [CID 71771](https://pubchem.ncbi.nlm.nih.gov/compound/71771)
- **molar mass:** 354.18 g/mol (C16H13Cl2NO4) — DrugBank
- **groups:** approved

## About

Aceclofenac is a non-steroidal anti-inflammatory drug used to relieve pain and inflammation in musculoskeletal and joint conditions. It is an approved medicine, available as oral antiinflammatory/rheumatic products and as topical preparations for joint and muscular pain.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q481757](https://www.wikidata.org/wiki/Q481757) and the WHO ATC classification; not checked by a person.</small>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Kim_2016_reference](drugs/drug_aceclofenac/Aceclofenac_Kim2016_reference.md) | — | general linear (no model) | 0 | Kim E et al., Modeling of aceclofenac metabolism to m…, Drug metabolism and pharmac… (2016) | [10.1016/j.dmpk.2016.10.001](https://doi.org/10.1016/j.dmpk.2016.10.001) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Henrotin_2001_COX_2](drugs/drug_aceclofenac/pd_Henrotin_2001_COX_2.md) | COX-2 activity ← aceclofenac · inhibition effect | — | Henrotin Y et al., In vitro effects of aceclofenac and its…, Inflammation research : off… (2001) | [10.1007/PL00000261](https://doi.org/10.1007/PL00000261) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Henrotin_2001_IL_6](drugs/drug_aceclofenac/pd_Henrotin_2001_IL_6.md) | interleukin-6 ← aceclofenac · inhibition effect | — | Henrotin Y et al., In vitro effects of aceclofenac and its…, Inflammation research : off… (2001) | [10.1007/PL00000261](https://doi.org/10.1007/PL00000261) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Henrotin_2001_PGE_2](drugs/drug_aceclofenac/pd_Henrotin_2001_PGE_2.md) | prostaglandin E 2 ← aceclofenac · inhibition effect | — | Henrotin Y et al., In vitro effects of aceclofenac and its…, Inflammation research : off… (2001) | [10.1007/PL00000261](https://doi.org/10.1007/PL00000261) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Henrotin_2001_TXB_2](drugs/drug_aceclofenac/pd_Henrotin_2001_TXB_2.md) | TXB 2 ← aceclofenac · inhibition effect | — | Henrotin Y et al., In vitro effects of aceclofenac and its…, Inflammation research : off… (2001) | [10.1007/PL00000261](https://doi.org/10.1007/PL00000261) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Adverse-reaction risk allele; no quantitative PK/PD parameter effect.">safety allele</span> | **CYP2C9** | `safety` — adverse-reaction risk (HLA / safety allele) — no parameter shift | safety_allele | [Agúndez_2009](drugs/drug_aceclofenac/pgx_Ag_ndez_2009_CYP2C9_safety.md) | Agúndez JA et al., Genetically based impairment in CYP2C8-…, Expert opinion on drug meta… (2009) | [10.1517/17425250902970998](https://doi.org/10.1517/17425250902970998) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **CYP2C8** | `Q88` · AUC | metabolism | [Agúndez_2009](drugs/drug_aceclofenac/pgx_Ag_ndez_2009_CYP2C8_Q88.md) | Agúndez JA et al., Genetically based impairment in CYP2C8-…, Expert opinion on drug meta… (2009) | [10.1517/17425250902970998](https://doi.org/10.1517/17425250902970998) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=aceclofenac).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | liver | `CYP2C8` metabolism, `CYP2C9` safety_allele/substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: PTGS1 (inhibitor), PTGS2 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 00:35 | 1:26 | 0/1/0 | 1/0/0 | 1/0/1 | 258,639/2,720 | einfracz / qwen3.8-27b | 20 | 25/3 | 11/9 | 0 |

## Coverage

- **PubMed hits:** 84 matched, 40 returned
- **screened:** 7  ·  **relevant:** 7
- **records:** 1  ·  extracted 0  ·  needs review 0  ·  rejected 1  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Kim_2026.pdf` | Kim T et al., Population pharmacokinetic model-based…, International journal of ph… (2026) | popPK | 10 | [10.1016/j.ijpharm.2026.126631](https://doi.org/10.1016/j.ijpharm.2026.126631) | [41621501](https://pubmed.ncbi.nlm.nih.gov/41621501) | The study reports a population pharmacokinetic model for aceclofenac, but the specific quantitative parameter values (CL, V, ka, etc.) are not explicitly listed in the provided abstract evidence. |

<sub>queue written 2026-10-07 00:34 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Afzal_2021 | irrelevant |  |  | The study presents basic non-compartmental pharmacokinetic data in rabbits for a cocrystal formulation rather than population or compartmental modeling. |
| popPK | Aldeeb_2024 | irrelevant |  |  | The study focuses on nanoemulgel formulation, in vitro drug release, and in vivo anti-inflammatory efficacy without reporting any quantitative pharmacokinetic parameters for aceclofenac. |
| PD | Aldeeb_2024 | not_relevant | 0 | 0 | The paper describes formulation development and in vivo efficacy studies using descriptive statistics, but does not perform population pharmacodynamic or exposure-response modeling. |
| PGx | Amo_2016 | not_relevant | 0 | 0 | The study analyzes associations between FCERI/Histamine gene variants and the risk of NSAID hypersensitivity, not pharmacokinetic or pharmacodynamic parameter changes. |
| popPK | Bae_2012 | irrelevant |  |  | The study reports only standard non-compartmental bioequivalence parameters (AUC, Cmax) without population/compartmental modeling or specific disposition parameters. |
| PD | Bawazeer_2018 | not_relevant | 0 | 0 | The paper describes an analytical method validation (UPLC) for quantifying drug concentrations in tablets, not a population pharmacodynamic or exposure-response modeling study. |
| popPK | Brogden_1996 | irrelevant |  |  | This is a narrative review summarizing basic pharmacokinetic data without original compartmental or population-PK modeling parameters. |
| popPK | Dua_2010 | irrelevant |  |  | The study focuses on topical formulation development and in vitro release kinetics without reporting any systemic pharmacokinetic parameters or population PK modeling. |
| PD | Dua_2010 | not_relevant | 0 | 0 | The paper describes formulation development and in vitro/in vivo efficacy studies using descriptive statistics, without any population pharmacokinetic/pharmacodynamic modeling or exposure-response analysis. |
| popPK | El-Masry_2023 | irrelevant |  |  | The paper describes an in vitro analytical method for quantifying aceclofenac and contains no pharmacokinetic data or modeling. |
| PD | El-Masry_2023 | not_relevant | 0 | 0 | The paper describes an in vitro analytical method (fluorescence quenching) for quantifying aceclofenac, not a population pharmacodynamic or exposure-response model. |
| PD | El_1999 | not_relevant | 0 | 0 | The paper describes analytical chemistry methods (spectrophotometry and spectrofluorimetry) for quantifying aceclofenac in pharmaceutical formulations, not population pharmacodynamic or exposure-response modeling. |
| popPK | Garg_2017 | irrelevant |  |  | The paper focuses on nanocarrier formulation and transdermal penetration without reporting systemic population or compartmental pharmacokinetic parameters. |
| popPK | Grau_1991 | irrelevant |  |  | The paper focuses exclusively on preclinical pharmacodynamics and safety without reporting any quantitative pharmacokinetic parameters. |
| PD | Han_2025 | not_relevant | 0 | 0 | The paper is an epidemiological cohort study using survival analysis (Cox models) to assess adverse event risks, not a population pharmacodynamic modeling study estimating exposure-response parameters. |
| PD | Henrotin_2001 | not_relevant | 0 | 0 | The paper describes an in vitro mechanistic study on human chondrocytes and enzyme assays, not a population pharmacodynamic or exposure-response modeling study in vivo. |
| PD | Jeong_2023 | not_relevant | 1 | 0 | The paper uses machine learning (GBM) on administrative claims data to predict gastric ulcer risk based on medication adherence and comorbidities, but does not perform population pharmacodynamic modeling or estimate PD parameters like Emax or EC50. |
| popPK | Kim_2013 | irrelevant |  |  | The study uses noncompartmental analysis and only reports Cmax and AUC ratios, lacking the requested population-PK or compartmental disposition parameters for aceclofenac. |
| PGx | Kim_2016 | not_relevant | 0 | 0 | The paper reports compartmental pharmacokinetic modeling of aceclofenac in healthy volunteers but does not analyze or report any genetic variants or pharmacogenomic effects on its PK/PD parameters. |
| popPK | Kim_2026 | relevant | 10 | 2 | The study reports a population pharmacokinetic model for aceclofenac, but the specific quantitative parameter values (CL, V, ka, etc.) are not explicitly listed in the provided abstract evidence. |
| PD | Kumar_2021 | not_relevant | 0 | 0 | The paper reports on pharmacokinetic parameters and bioavailability of aceclofenac cocrystals, but does not present a population pharmacodynamic or exposure-response model. |
| popPK | Liu_2016 | irrelevant |  |  | The paper only reports non-compartmental pharmacokinetic metrics from a rabbit formulation study and lacks population or compartmental disposition parameters. |
| PGx | Macías_2021 | not_relevant | 0 | 0 | The study investigates associations between CYP2C genotypes and the risk of hypersensitivity (clinical phenotype), but does not measure or report changes in pharmacokinetic or pharmacodynamic parameters (e.g., AUC, Cmax, COX inhibition) of aceclofenac based on genotype. |
| PGx | Martínez_2006 | not_relevant | 2 | 1 | The paper is a general review of CYP2C8/9 pharmacogenomics and NSAIDs, mentioning aceclofenac only in the context of bleeding risk associations without providing specific quantitative PK/PD parameter data or fitted effect sizes. |
| popPK | Mathurm_2011 | irrelevant |  |  | The study focuses on in vitro drug release kinetics and pharmacodynamic efficacy of ocular inserts, with no systemic or population pharmacokinetic parameters reported. |
| PGx | Medhi_2012 | not_relevant | 0 | 0 | The paper investigates a drug-drug interaction between aceclofenac and phenytoin, not the effect of a gene variant or genotype on aceclofenac's pharmacokinetics or pharmacodynamics. |
| PD | Minhaj_2025 | not_relevant | 0 | 0 | The paper is a phytochemical and pharmacological evaluation of Rondeletia leucophylla extract, using aceclofenac only as a standard comparator in anti-inflammatory assays; it does not report any population pharmacodynamic or exposure-response modeling for aceclofenac. |
| popPK | Moon_2022 | irrelevant |  |  | The paper reports standard non-compartmental AUC and Cmax ratios from a crossover drug interaction study rather than population or compartmental pharmacokinetic parameters. |
| popPK | Mutalik_2008 | irrelevant |  |  | The study focuses on pharmaceutical formulation and lacks quantitative compartmental or population-pharmacokinetic modeling parameters for aceclofenac. |
| popPK | Narayanaswamy_2024 | irrelevant | 1 | 8 | This is a docking/toxicity study, not a pharmacokinetic study; numeric aceclofenac docking values are present, but no PK disposition parameters. |
| PGx | Narayanaswamy_2024 | not_relevant | 0 | 0 | The paper analyzes molecular docking between drugs and HLA alleles and uses pkCSM to predict general PK properties, but it does not report specific pharmacogenomic effects of gene variants on aceclofenac's PK or PD parameters. |
| popPK | Palm_2023 | irrelevant | 0 | 0 | The paper is a bioinformatics study on curating transformation products and only mentions aceclofenac in passing as a parent compound of diclofenac, providing no pharmacokinetic parameters. |
| popPK | Parekh_2026 | irrelevant |  |  | The paper focuses on formulation development and pharmacodynamic evaluation, lacking any quantitative pharmacokinetic parameters or population/compartmental modeling for aceclofenac. |
| popPK | Park_2013 | irrelevant | 0 | 0 | Aceclofenac is only a concomitant analgesic in a tamsulosin stone-clearance study, and no aceclofenac PK parameters are reported. |
| PD | Park_2016 | not_relevant | 0 | 0 | The paper describes formulation development and in vitro cytotoxicity assays, lacking any population pharmacokinetic/pharmacodynamic modeling or exposure-response analysis. |
| PGx | Ponsoda_2004 | not_relevant | 0 | 0 | The study investigates in vitro vs in vivo metabolic correlation and phenotypic variability, but does not report specific gene variants or genotypes affecting the PK/PD parameters. |
| popPK | Raju_2015 | irrelevant |  |  | The paper focuses on topical formulation development, in-vitro release, and pharmacodynamic effects, without reporting any quantitative pharmacokinetic parameters or modeling for aceclofenac. |
| popPK | Shah_2025 | irrelevant |  |  | The paper focuses on molecular salt synthesis and in-vitro characterization without reporting any quantitative pharmacokinetic parameters or models for aceclofenac. |
| popPK | Sharma_2016 | irrelevant |  |  | The paper focuses on topical formulation development and pharmacodynamic evaluation without reporting quantitative systemic pharmacokinetic parameters or modeling for aceclofenac. |
| PD | Shavi_2009 | not_relevant | 0 | 0 | The paper describes pharmaceutical formulation development and in vitro dissolution studies, containing no clinical pharmacokinetic or pharmacodynamic data for population modeling. |
| popPK | Solanki_2011 | irrelevant |  |  | The paper focuses exclusively on in vitro formulation development and dissolution testing, providing no in vivo pharmacokinetic data or modeling for aceclofenac. |
| PD | Solanki_2011 | not_relevant | 0 | 0 | The paper describes pharmaceutical formulation and in vitro dissolution studies, containing no clinical pharmacokinetic or pharmacodynamic data or modeling. |
| popPK | Somogyi-Végh_2019 | irrelevant | 0 | 0 | The paper is a retrospective analysis of prescription dispensing data for drug-drug interactions and does not report any pharmacokinetic parameters for aceclofenac. |
| popPK | Usha_2008 | irrelevant |  |  | The study focuses on formulation development and only provides basic non-compartmental pharmacokinetic data from a small oral crossover trial, without population or compartmental modeling. |
| PD | Yong_2005 | not_relevant | 0 | 0 | The paper reports a pharmacokinetic bioequivalence study comparing two formulations using non-compartmental analysis, with no pharmacodynamic data or exposure-response modeling. |
| PD | Younis_2023 | not_relevant | 0 | 0 | The paper describes formulation development and in vitro cytotoxicity assays (IC50) for a nanoemulsion, lacking any population pharmacokinetic/pharmacodynamic modeling or exposure-response analysis. |
| popPK | Zeitlinger_2021 | irrelevant | 0 | 0 | The paper contains pharmacokinetic studies for oxycodone, daridorexant, atorvastatin, and midazolam, but contains no mention or data for aceclofenac. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Baceclofenac%5D&body=Drug%3A%20aceclofenac%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_aceclofenac/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · newest extraction 2026-10-07 00:34 UTC</sub>
