<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01C&quot;,&quot;href&quot;:&quot;atc/C01C.md&quot;},{&quot;label&quot;:&quot;ephedrine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ephedrine_Tran2020_reference&quot;,&quot;label&quot;:&quot;Tran_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ephedrine/Ephedrine_Tran2020_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

# ephedrine

- **generic name:** ephedrine
- **ATC codes:** `C01CA26`, `R01AA03`, `R01AB05`, `R03CA02`, `S01FB02`
- **DrugBank:** [DB01364](https://go.drugbank.com/drugs/DB01364) · **PubChem:** [CID 9294](https://pubchem.ncbi.nlm.nih.gov/compound/9294)
- **molar mass:** 165.2322 g/mol (C10H15NO) — DrugBank
- **groups:** approved, investigational

## About

Ephedrine is a sympathomimetic used for conditions such as asthma, rhinitis, and orthostatic hypotension, and as a nasal decongestant, cardiac stimulant, and pupil-dilating agent. It remains an approved medicine and is included on the WHO list of essential medicines, so it is still in use worldwide.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q219626](https://www.wikidata.org/wiki/Q219626) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| ephedrine | parent | 165.232 | C10H15NO | DrugBank | [9294](https://pubchem.ncbi.nlm.nih.gov/compound/9294) | Csajka_2005 |
| norephedrine | metabolite | 151.209 | C9H13NO | PubChem | [26934](https://pubchem.ncbi.nlm.nih.gov/compound/26934) | Csajka_2005 |

## Start here

> **Tran_2020_reference** — <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> review reference. [Run it in the simulator](drugs/drug_ephedrine/Ephedrine_Tran2020_reference.md?tab=Simulation) · [record](drugs/drug_ephedrine/Ephedrine_Tran2020_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | species | status | record |
|---|---|---|---|---|---|---|---|---|
| CL | CL/F | 22.5 | L/h | 22.5 L/h | review reference | human | <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> | [Tran_2020_reference](drugs/drug_ephedrine/Ephedrine_Tran2020_reference.md) |
| V | V/F | 16.3 | L | 16.3 L | review reference | human | <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> | [Tran_2020_reference](drugs/drug_ephedrine/Ephedrine_Tran2020_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Not simulated" data-sim="yes"></span><span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Not simulated</sub> | [Tran_2020_reference](drugs/drug_ephedrine/Ephedrine_Tran2020_reference.md) | ▶ model + simulator | 1-compartment, oral | 2 | Tran QT et al., Clinical Evaluation of Acetaminophen-Ga…, Pharmaceutics (2020) | [10.3390/pharmaceutics12121182](https://doi.org/10.3390/pharmaceutics12121182) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Rejected</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub> | [Csajka_2005_reference](drugs/drug_ephedrine/Ephedrine_Csajka2005_reference.md) | — | parent + metabolite (no model) | 6 | Csajka C et al., Mechanistic pharmacokinetic modelling o…, British journal of clinical… (2005) | [10.1111/j.1365-2125.2005.02254.x](https://doi.org/10.1111/j.1365-2125.2005.02254.x) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by qwen3.8:27b-mtp-q8_0, p(non-human) 1.00).">in vitro</span> | **SLC22A1** | `Q1` · Km | transport | [Jensen_2020](drugs/drug_ephedrine/pgx_Jensen_2020_SLC22A1_Q1.md) | Jensen O et al., Cellular Uptake of Psychostimulants - A…, Frontiers in pharmacology (2020) | [10.3389/fphar.2020.609811](https://doi.org/10.3389/fphar.2020.609811) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by qwen3.8:27b-mtp-q8_0, p(non-human) 1.00).">in vitro</span> | **SLC22A2** | `Q1` · Km | transport | [Jensen_2020](drugs/drug_ephedrine/pgx_Jensen_2020_SLC22A2_Q1.md) | Jensen O et al., Cellular Uptake of Psychostimulants - A…, Frontiers in pharmacology (2020) | [10.3389/fphar.2020.609811](https://doi.org/10.3389/fphar.2020.609811) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-09 19:54 | 0:40 | 1/1/0 | 0/0/0 | 0/0/2 | 12,481/1,159 | ollama / qwen3.8:27b-mtp-q8_0 | 8 | 1/7 | 8/0 | 0 |

## Coverage

- **PubMed hits:** 42 matched, 38 returned
- **screened:** 5  ·  **relevant:** 1
- **records:** 2  ·  extracted 1  ·  needs_review 0  ·  rejected 1  ·  stale 2
- **scholar-agent fallback query used:** not captured

## Full-text requests

_10 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Csajka_2005.pdf` | Csajka C et al., Mechanistic pharmacokinetic modelling o…, British journal of clinical… (2005) | popPK | 10 | [10.1111/j.1365-2125.2005.02254.x](https://doi.org/10.1111/j.1365-2125.2005.02254.x) | [15752380](https://pubmed.ncbi.nlm.nih.gov/15752380) | The study reports quantitative population PK parameters (clearance, volume) for ephedrine in healthy human subjects, with key values provided in the abstract. |
| `Yafune_2001.pdf` | Yafune A et al., Population pharmacokinetic analysis of…, International journal of cl… (2001) | popPK | 10 | not captured | [11824653](https://pubmed.ncbi.nlm.nih.gov/11824653) | The paper is a population PK study of ephedrine in humans, but the specific numeric parameter values are not present in the provided evidence text. |
| `Atsumi_2026.pdf` | Atsumi T et al., Effect of pre- and postprandial adminis…, Journal of natural medicines (2026) | popPK | 9 | [10.1007/s11418-025-01980-w](https://doi.org/10.1007/s11418-025-01980-w) | [41276775](https://pubmed.ncbi.nlm.nih.gov/41276775) | The study reports quantitative PK parameters (ka, AUC, Cmax) for ephedrine in humans, but the specific numeric values are not present in the provided abstract text. |
| `Marvola_1978.pdf` | Marvola M et al., Pharmacokinetics and locomotor activity…, Acta pharmacologica et toxi… (1978) | popPK | 9 | [10.1111/j.1600-0773.1978.tb02282.x](https://doi.org/10.1111/j.1600-0773.1978.tb02282.x) | [726903](https://pubmed.ncbi.nlm.nih.gov/726903) | The study reports a compartmental PK model for ephedrine in mice, but no specific numeric parameter values (CL, V, t1/2, etc.) are present in the provided evidence. |
| `Wan_2019.pdf` | Wan JY et al., [Pharmacokinetics of compatible effecti…, Zhongguo Zhong yao za zhi =… (2019) | popPK | 8 | [10.19540/j.cnki.cjcmm.20190125.002](https://doi.org/10.19540/j.cnki.cjcmm.20190125.002) | [31355574](https://pubmed.ncbi.nlm.nih.gov/31355574) | The study reports pharmacokinetic parameters for ephedrine in rats, but the specific numeric values are not present in the provided evidence text. |
| `Persky_2004.pdf` | Persky AM et al., Modelling the cardiovascular effects of…, British journal of clinical… (2004) | pd | 5 | [10.1111/j.1365-2125.2003.02062.x](https://doi.org/10.1111/j.1365-2125.2003.02062.x) | [15089807](https://www.ncbi.nlm.nih.gov/pubmed/15089807) | metadata signals extractable PD data (pharmacodynamicmodel) |
| `Song_2024.pdf` | Song D et al., Natural Binary Herbal Small Molecules S…, ACS biomaterials science &… (2024) | pd | 5 | [10.1021/acsbiomaterials.4c01227](https://doi.org/10.1021/acsbiomaterials.4c01227) | [39324477](https://www.ncbi.nlm.nih.gov/pubmed/39324477) | metadata signals extractable PD data (EC50) |
| `Xu_2024.pdf` | Xu HC et al., The EC50 of propofol with different dos…, Medicine (2024) | pd | 5 | [10.1097/MD.0000000000038421](https://doi.org/10.1097/MD.0000000000038421) | [38847682](https://www.ncbi.nlm.nih.gov/pubmed/38847682) | metadata signals extractable PD data (EC50) |
| `Alexander_2005.pdf` | Alexander M et al., Noradrenergic and dopaminergic effects…, Synapse (New York, N.Y.) (2005) | pd | 4 | [10.1002/syn.20126](https://doi.org/10.1002/syn.20126) | [15729739](https://www.ncbi.nlm.nih.gov/pubmed/15729739) | metadata signals extractable PD data (EC50) |
| `Jing_2010.pdf` | Jing H et al., Ephedrine controls heart rhythms by act…, Journal of cardiovascular p… (2010) | pd | 4 | [10.1097/FJC.0b013e3181ce965c](https://doi.org/10.1097/FJC.0b013e3181ce965c) | [20040889](https://www.ncbi.nlm.nih.gov/pubmed/20040889) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-06T08:57:37.164757+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Alexander_2005 | irrelevant | 0 | 0 | no_text gate: only 100 chars of text extracted (&lt; 400) |
| PD | Alexander_2005 | not_relevant | 0 | 0 | The paper focuses on amphetamine-like stimulants in baboons and does not report pharmacodynamic or exposure-response data for ephedrine. |
| popPK | Atsumi_2026 | relevant | 9 | 2 | The study reports quantitative PK parameters (ka, AUC, Cmax) for ephedrine in humans, but the specific numeric values are not present in the provided abstract text. |
| popPK | Cardozo_2024 | irrelevant | 0 | 0 | Ephedrine is used only as a rescue vasopressor for hypotension, and no pharmacokinetic parameters are reported. |
| popPK | Guo_2020 | irrelevant | 0 | 0 | The study investigates the EC50 of propofol, and ephedrine is only mentioned as a rescue medication for hypotension, not as the subject of pharmacokinetic analysis. |
| PD | Guo_2020 | not_relevant | 0 | 0 | The paper reports an EC50 for propofol, not ephedrine; ephedrine is only mentioned as a rescue medication with no dose-response or PD analysis. |
| popPK | He_2005 | irrelevant | 0 | 0 | The study investigates pseudo-ephedrine, not ephedrine, which is a distinct chemical entity. |
| popPK | Jing_2010 | irrelevant | 0 | 0 | no_text gate: only 69 chars of text extracted (&lt; 400) |
| PD | Jing_2010 | not_relevant | 0 | 0 | The provided text is a title/abstract snippet describing a mechanism of action (activation of Iks currents) without reporting any numeric concentration-effect data, dose-response curves, or PD parameters. |
| popPK | Kloth_2017 | irrelevant | 0 | 0 | The study is an in-vitro pharmacodynamic investigation of Akrinor (cafedrine/theodrenaline) on human atrial tissue and does not report pharmacokinetic parameters for ephedrine. |
| PGx | Kocyigit_2026 | not_relevant | 0 | 0 | The paper is a review of herb-drug interactions and does not report pharmacogenomic effects (gene variants) on ephedrine PK/PD parameters. |
| popPK | Kubo_2023 | irrelevant | 0 | 0 | The study evaluates cerebral oxygenation changes using near-infrared spectroscopy and does not report pharmacokinetic parameters (CL, V, ka, etc.) for ephedrine. |
| PGx | Landau_2017 | not_relevant | 0 | 0 | The paper is a general review of pharmacogenetics in obstetric anesthesia and does not mention ephedrine or specific pharmacokinetic/pharmacodynamic parameters for it. |
| PGx | Liu_2021 | not_relevant | 0 | 0 | The paper reports a pharmacokinetic study of ephedrine in rats but does not investigate any gene variants, genotypes, or pharmacogenomic effects. |
| popPK | Marvola_1978 | relevant | 9 | 0 | The study reports a compartmental PK model for ephedrine in mice, but no specific numeric parameter values (CL, V, t1/2, etc.) are present in the provided evidence. |
| popPK | Munhall_2006 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological investigation of ephedrine's mechanism of action on dopamine neurons, not a pharmacokinetic study reporting disposition parameters. |
| PGx | Nayar_2022 | not_relevant | 0 | 0 | The paper is a review of nuclear imaging in Takotsubo cardiomyopathy and does not report pharmacogenomic effects on ephedrine PK/PD. |
| popPK | Persky_2004 | irrelevant | 0 | 0 | no_text gate: only 49 chars of text extracted (&lt; 400) |
| PGx | Rao_2019 | not_relevant | 0 | 0 | The paper is a general review of pharmacogenetics for natural products and does not report specific data or effects for ephedrine. |
| popPK | Song_2024 | irrelevant | 0 | 0 | no_text gate: only 118 chars of text extracted (&lt; 400) |
| PD | Song_2024 | not_relevant | 0 | 0 | The paper focuses on a nanogel formulation for RSV inhibition and does not report any pharmacodynamic or exposure-response data for ephedrine. |
| PGx | Takei_2023 | not_relevant | 0 | 0 | The paper is a forensic case report on drug overdose and interaction, containing no data on gene variants or pharmacogenomic effects on ephedrine PK/PD. |
| popPK | Tong_1992 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of vascular reactivity and does not report pharmacokinetic parameters. |
| popPK | Tran_2020 | irrelevant | 2 | 0 | The study focuses on the pharmacokinetics of acetaminophen (AAP), with ephedrine serving only as a covariate to explain changes in AAP parameters; no quantitative PK parameters for ephedrine itself are reported. |
| PGx | Upton_1991 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions for theophylline and explicitly states that ephedrine was not found to influence its disposition kinetics, with no mention of pharmacogenomics. |
| popPK | Vansal_1999 | irrelevant | 0 | 0 | The study reports in vitro pharmacodynamic potency (EC50) of ephedrine isomers on beta-adrenergic receptors, not pharmacokinetic disposition parameters. |
| PGx | Villar-Quiles_2026 | not_relevant | 0 | 0 | The paper is a review of congenital myasthenic syndromes and mentions ephedrine only as a general therapeutic option, without reporting any pharmacogenomic effects on its PK or PD parameters. |
| popPK | Wan_2019 | relevant | 8 | 0 | The study reports pharmacokinetic parameters for ephedrine in rats, but the specific numeric values are not present in the provided evidence text. |
| PGx | Wei_2021 | not_relevant | 0 | 0 | The paper is a protocol for a study on differential sensitivity to sevoflurane and does not report pharmacogenomic effects on ephedrine PK/PD parameters. |
| popPK | Xu_2024 | irrelevant | 0 | 0 | no_text gate: only 136 chars of text extracted (&lt; 400) |
| PD | Xu_2024 | not_relevant | 0 | 0 | The paper investigates the PD of propofol and dexmedetomidine, not ephedrine. |
| popPK | Yafune_2001 | relevant | 10 | 0 | The paper is a population PK study of ephedrine in humans, but the specific numeric parameter values are not present in the provided evidence text. |
| PGx | Zhang_2024 | not_relevant | 0 | 0 | The paper investigates the metabolomic effects of acteoside on cancer-related fatigue in mice; ephedrine is merely identified as a differentially regulated metabolite, and there is no study of pharmacogenomic effects on ephedrine PK/PD. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-06 08:57 UTC</sub>
