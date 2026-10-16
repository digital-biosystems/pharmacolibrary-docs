<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;urokinase&quot;}]"></div>

# urokinase

- **generic name:** urokinase
- **ATC codes:** `B01AD04`
- **DrugBank:** [DB00013](https://go.drugbank.com/drugs/DB00013) · **PubChem:** not captured
- **groups:** approved, investigational, withdrawn

## About

Urokinase is a thrombolytic enzyme used to treat blood clots such as myocardial infarction, pulmonary embolism, and coronary thrombosis. It has been withdrawn from use, though it was once an approved medication.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q110969665](https://www.wikidata.org/wiki/Q110969665) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 18:48 | 19:36 | 0/1/1 | 0/0/0 | 0/0/1 | 885,531/39,427 | einfracz / qwen3.8-27b | 36 | 10/40 | 33/3 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Piechowski-Jozwiak_2022_reference](drugs/drug_urokinase/Urokinase_PiechowskiJozwiak2022_reference.md) | — | 1-compartment (no model) | 2 | Piechowski-Jozwiak B et al., Clinical Pharmacokinetics and Pharmacod…, European journal of drug me… (2022) | [10.1007/s13318-021-00743-8](https://doi.org/10.1007/s13318-021-00743-8) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Koster_1994_reference](drugs/drug_urokinase/Urokinase_Koster1994_reference.md) | — | 1-compartment (no model) | 0 | Koster RW et al., Pharmacokinetics and pharmacodynamics o…, Thrombosis and haemostasis (1994) | — |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (?, agreement 0.25), gpt-oss:120b (confirmed, agreement 1.0). Primary extraction retained.">cross-check: partial 1/2</span> | **TAFI** | `Q22` · CL | target | [Jiao_2026](drugs/drug_urokinase/pgx_Jiao_2026_TAFI_Q22.md) | Jiao Y et al., Efficacy of rt-PA versus Urokinase in e…, Frontiers in neurology (2026) | [10.3389/fneur.2026.1830505](https://doi.org/10.3389/fneur.2026.1830505) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=urokinase).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: LRP2 (substrate), MMP12 (substrate), NID1 (target), PLAU (modulator), PLAUR (inducer), PLAUR (modulator), PLG (activator), SERPINA5 (substrate), SERPINB2 (inducer), SERPINB2 (substrate), SERPINE1 (inducer), SERPINE1 (substrate), ST14 (substrate), TAFI (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 356 matched, 160 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 2  ·  extracted 0  ·  needs_review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_19 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Koster_1994.pdf` | Koster RW et al., Pharmacokinetics and pharmacodynamics o…, Thrombosis and haemostasis (1994) | popPK | 10 | not captured | [7534946](https://pubmed.ncbi.nlm.nih.gov/7534946) | The study reports quantitative PK parameters (clearance, half-lives) for saruplase, a urokinase-type plasminogen activator, in the provided abstract. |
| `Stump_1987.pdf` | Stump DC et al., Pharmacokinetics of single chain forms…, The Journal of pharmacology… (1987) | popPK | 10 | not captured | [3612530](https://pubmed.ncbi.nlm.nih.gov/3612530) | The abstract explicitly lists quantitative pharmacokinetic parameters (alpha/beta T1/2, Vc, Vd, CL) for urokinase-type plasminogen activator (scu-PA). |
| `Köhler_1991.pdf` | Köhler M et al., Half-life of single-chain urokinase-typ…, Thrombosis research (1991) | popPK | 9 | [10.1016/0049-3848(91)90670-r](https://doi.org/10.1016/0049-3848(91)90670-r) | [1906642](https://pubmed.ncbi.nlm.nih.gov/1906642) | The study reports quantitative pharmacokinetic parameters (half-lives and compartmental model fit) for urokinase in humans directly in the abstract/text. |
| `Huang_2022.pdf` | Huang Z et al., A versatile insertion point on albumin…, International journal of bi… (2022) | pd | 5 | [10.1016/j.ijbiomac.2022.02.002](https://doi.org/10.1016/j.ijbiomac.2022.02.002) | [35134454](https://www.ncbi.nlm.nih.gov/pubmed/35134454) | metadata signals extractable PD data (IC50) |
| `Rijken_2002.pdf` | Rijken DC et al., Characterization of the binding of urok…, Thrombosis and haemostasis (2002) | pd | 5 | not captured | [12152683](https://www.ncbi.nlm.nih.gov/pubmed/12152683) | metadata signals extractable PD data (EC50) |
| `Han_2016.pdf` | Han T et al., Modulation of plasminogen activator inh…, Fitoterapia (2016) | pd | 4 | [10.1016/j.fitote.2016.07.010](https://doi.org/10.1016/j.fitote.2016.07.010) | [27476618](https://www.ncbi.nlm.nih.gov/pubmed/27476618) | metadata signals extractable PD data (IC50) |
| `Heussen_1984.pdf` | Heussen C et al., Purification of human tissue plasminoge…, The Journal of biological c… (1984) | pd | 4 | not captured | [6541221](https://www.ncbi.nlm.nih.gov/pubmed/6541221) | metadata signals extractable PD data (IC50) |
| `Li_2019.pdf` | Li L et al., Rapid identification of urokinase plasm…, Journal of pharmaceutical a… (2019) | pd | 4 | [10.1016/j.jpba.2018.10.036](https://doi.org/10.1016/j.jpba.2018.10.036) | [30396051](https://www.ncbi.nlm.nih.gov/pubmed/30396051) | metadata signals extractable PD data (IC50) |
| `Mao_2016.pdf` | Mao D et al., [Effect of jianpi-jiedu formula on tumo…, Zhong nan da xue xue bao. Y… (2016) | pd | 4 | [10.11817/j.issn.1672-7347.2016.12.008](https://doi.org/10.11817/j.issn.1672-7347.2016.12.008) | [28070042](https://www.ncbi.nlm.nih.gov/pubmed/28070042) | metadata signals extractable PD data (IC50) |
| `Martin_1993.pdf` | Martin U et al., Differential fibrinolytic properties of…, Blood coagulation & fibrino… (1993) | pd | 4 | [10.1097/00001721-199304000-00004](https://doi.org/10.1097/00001721-199304000-00004) | [8388740](https://www.ncbi.nlm.nih.gov/pubmed/8388740) | metadata signals extractable PD data (Emax) |
| `Niemetz_1988.pdf` | Niemetz J et al., A streptokinase dependent plasma factor…, British journal of haematol… (1988) | pd | 4 | [10.1111/j.1365-2141.1988.tb02512.x](https://doi.org/10.1111/j.1365-2141.1988.tb02512.x) | [2975501](https://www.ncbi.nlm.nih.gov/pubmed/2975501) | metadata signals extractable PD data (sigmoid) |
| `Nykjaer_1994.pdf` | Nykjaer A et al., Regions involved in binding of urokinas…, The Journal of biological c… (1994) | pd | 4 | not captured | [7929271](https://www.ncbi.nlm.nih.gov/pubmed/7929271) | metadata signals extractable PD data (EC50) |
| `Rovelli_1990.pdf` | Rovelli G et al., Specific interaction of vitronectin wit…, European journal of biochem… (1990) | pd | 4 | [10.1111/j.1432-1033.1990.tb19293.x](https://doi.org/10.1111/j.1432-1033.1990.tb19293.x) | [1698627](https://www.ncbi.nlm.nih.gov/pubmed/1698627) | metadata signals extractable PD data (EC50) |
| `Takano_1994.pdf` | Takano S et al., A diaminoantraquinone inhibitor of angi…, The Journal of pharmacology… (1994) | pd | 4 | not captured | [7525934](https://www.ncbi.nlm.nih.gov/pubmed/7525934) | metadata signals extractable PD data (IC50) |
| `Xu_2017.pdf` | Xu D et al., Mimicking Intermolecular Interactions o…, ChemMedChem (2017) | pd | 4 | [10.1002/cmdc.201700572](https://doi.org/10.1002/cmdc.201700572) | [28960868](https://www.ncbi.nlm.nih.gov/pubmed/28960868) | metadata signals extractable PD data (IC50) |
| `Yang_2016.pdf` | Yang MD et al., Inhibitory Effects of AVEMAR on Prolife…, Nutrition and cancer (2016) | pd | 4 | [10.1080/01635581.2016.1153668](https://doi.org/10.1080/01635581.2016.1153668) | [27007465](https://www.ncbi.nlm.nih.gov/pubmed/27007465) | metadata signals extractable PD data (IC50) |
| `Zhang_2016.pdf` | Zhang Y et al., Procoagulant Substance and Mechanism of…, Journal of medicinal food (2016) | pd | 4 | [10.1089/jmf.2016.3700](https://doi.org/10.1089/jmf.2016.3700) | [27845864](https://www.ncbi.nlm.nih.gov/pubmed/27845864) | metadata signals extractable PD data (IC50) |
| `Emoto_2008.pdf` | Emoto C et al., Non-invasive method to detect induction…, Xenobiotica; the fate of fo… (2008) | pgx | 7 | [10.1080/00498250701760159](https://doi.org/10.1080/00498250701760159) | [18274954](https://www.ncbi.nlm.nih.gov/pubmed/18274954) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Katoh_2007.pdf` | Katoh M et al., Application of chimeric mice with human…, Drug metabolism reviews (2007) | pgx | 7 | [10.1080/03602530601021340](https://doi.org/10.1080/03602530601021340) | [17364883](https://www.ncbi.nlm.nih.gov/pubmed/17364883) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |

<sub>queue written 2026-10-14T18:42:14.852920+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abi-Habib_2004 | irrelevant | 0 | 0 | The study reports in vitro cytotoxicity and IC50 values for a fusion toxin, providing no pharmacokinetic disposition parameters (CL, V, etc.) for urokinase. |
| popPK | Almholt_2020 | irrelevant | 0 | 0 | The paper describes the development of an anti-uPA antibody and its toxicology in monkeys, reporting no pharmacokinetic parameters for urokinase itself. |
| popPK | Almohammad_2024 | irrelevant | 0 | 0 | The study is an in-vitro gene expression analysis where urokinase (PLAU) is only mentioned as a downregulated gene, with no pharmacokinetic parameters reported. |
| PD | Almohammad_2024 | not_relevant | 0 | 0 | The paper investigates the effect of quercetin on doxorubicin cytotoxicity and gene expression (including PLAU/urokinase mRNA levels), but does not report a pharmacodynamic or exposure-response relationship for urokinase itself. |
| popPK | Almosnid_2026 | irrelevant | 0 | 0 | The paper reports in vitro pharmacodynamic and enzymatic activity (IC50) of uPA inhibitors, but does not contain any pharmacokinetic parameters (CL, V, ka, t1/2) for urokinase itself. |
| popPK | Arakawa_2002 | irrelevant | 0 | 0 | The study investigates the anti-angiogenic drug ANO-2 which inhibits urokinase-type plasminogen activator (u-PA) production, but it does not report pharmacokinetic parameters (CL, V, t1/2) for urokinase itself. |
| PD | Arakawa_2002 | not_relevant | 3 | 2 | The paper reports an IC50 for cathepsin B inhibition but only qualitatively describes the inhibition of u-PA production without providing numeric dose-response parameters or a concentration-effect curve for urokinase. |
| popPK | Arnljots_1994 | irrelevant | 0 | 0 | The study investigates the effects of urokinase on microarterial thrombosis and platelet accumulation (hemostasis/efficacy) rather than pharmacokinetic disposition parameters like clearance or volume. |
| PD | Arnljots_1994 | not_relevant | 2 | 1 | The study reports qualitative differences in platelet accumulation and patency rates at fixed doses, but provides no numeric concentration-effect data, dose-response curve parameters (Emax/EC50), or PK/PD model fits. |
| popPK | Badylak_1988 | irrelevant | 3 | 1 | This is a pharmacodynamic dose-response study in dogs that reports thrombolytic efficacy rather than quantitative pharmacokinetic parameters (CL, Vd, ka) for urokinase. |
| popPK | Barni_2012 | irrelevant | 0 | 0 | The study examines the effect of carnosic acid on colorectal cancer cells, using urokinase (uPA) only as an enzyme activity assay to measure cell invasion mechanisms, not as the subject of a pharmacokinetic study. |
| popPK | Battini_2024 | irrelevant | 0 | 0 | The study is a pharmacovigilance analysis of drug-drug interactions in the FDA Adverse Event Reporting System and does not report any pharmacokinetic parameters for urokinase. |
| PD | Battini_2024 | not_relevant | 0 | 0 | The paper focuses on pharmacovigilance signal detection and temporal plausibility of drug-drug interactions in the FAERS database, containing no pharmacodynamic modeling, exposure-response analysis, or numeric PD parameters for urokinase. |
| popPK | Bergh_2008 | irrelevant | 0 | 0 | The study is an in-vitro investigation of gene expression regulation (u-PA mRNA) in endothelial cells, not a pharmacokinetic study of the drug urokinase. |
| popPK | Bhat_2025 | irrelevant | 0 | 0 | The paper is a scoping review of Model-Informed Drug Development (MIDD) and pharmacometrics, with no specific quantitative PK parameters or data for urokinase provided. |
| PD | Bhat_2025 | not_relevant | 0 | 0 | The paper is a scoping review of Model-Informed Drug Development (MIDD) and does not contain any data, analysis, or parameters for urokinase. |
| popPK | Buckley_2021 | irrelevant | 0 | 0 | The study focuses on the in-vitro inhibition of urokinase activity by amiloride analogs (IC50 values) and does not report pharmacokinetic parameters (e.g., clearance, volume, half-life) for urokinase itself. |
| popPK | Callas_1994 | irrelevant | 0 | 0 | The study is an in-vitro and mechanistic study characterizing the inhibitory effects of thrombin inhibitors on urokinase activity (IC50), not a pharmacokinetic study of urokinase disposition parameters. |
| PGx | Cambruzzi_2019 | not_relevant | 0 | 0 | The paper is a review of lipoprotein glomerulopathy pathology and general treatment options; it mentions urokinase only as a potential therapeutic agent without analyzing its pharmacokinetics or pharmacodynamics in relation to specific genetic variants. |
| popPK | Davidson_2022 | irrelevant | 0 | 0 | The paper is a systematic review of IL-1 blocking agents for COVID-19 and contains no pharmacokinetic data for urokinase. |
| PD | Davidson_2022 | not_relevant | 0 | 0 | The paper is a systematic review of clinical trials for IL-1 blocking agents (anakinra/canakinumab) in COVID-19 and contains no pharmacodynamic modeling, exposure-response analysis, or numeric PD parameters for urokinase. |
| popPK | De_2022 | irrelevant | 0 | 0 | The study investigates unfractionated heparin dosing and coagulation testing in hemodialysis patients, not urokinase pharmacokinetics. |
| PD | De_2022 | not_relevant | 2 | 1 | The study analyzes heparin dosing and coagulation outcomes (aPTT/ACT) but does not report a pharmacodynamic model or numeric PD parameters (e.g., Emax, EC50) for urokinase. |
| popPK | Deitcher_2002 | irrelevant | 0 | 0 | The text is a general review or introduction to thrombolytic agents that mentions urokinase qualitatively but provides no specific pharmacokinetic parameters, numeric values, or model data for urokinase. |
| PGx | Ding_2017 | not_relevant | 0 | 0 | The paper reports a pharmacogenomic effect of CYP2C19 on clopidogrel response, not on the PK or PD parameters of urokinase. |
| popPK | Donà_2004 | irrelevant | 0 | 0 | The study focuses on the pharmacological effects of Hyperforin on cancer invasion, with urokinase mentioned only as a proteinase target for inhibition, not as a subject drug for PK analysis. |
| popPK | Ducloy-Bouthors_2022 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics and pharmacodynamics of tranexamic acid (TXA), not urokinase. |
| PGx | Duffy_2008 | not_relevant | 0 | 0 | The paper discusses urokinase as a prognostic biomarker for breast cancer, not as a drug whose PK/PD is modified by a gene variant. |
| popPK | Duijvelaar_2024 | irrelevant | 0 | 0 | The study is a plasma proteomics analysis of biomarkers in COVID-19 patients and does not involve urokinase or pharmacokinetic modeling. |
| PD | Duijvelaar_2024 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamic effects of imatinib on plasma proteomics in COVID-19 patients, not urokinase, and does not report any exposure-response or dose-response parameters for urokinase. |
| PGx | Edwards_2011 | not_relevant | 0 | 0 | The paper examines genetic associations with a clinical condition (small-for-gestational-age), not the pharmacokinetics or pharmacodynamics of the urokinase drug. |
| popPK | El-Monaem_2026 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on the synthesis and in vitro antimicrobial/anticancer activity of adamantane-thiazole hybrids; urokinase is mentioned only as a protein target (uPAR) for molecular docking, with no pharmacokinetic parameters reported. |
| PD | El-Monaem_2026 | not_relevant | 0 | 0 | The paper reports in vitro IC50 values for anti-proliferative activity and molecular docking scores for urokinase-type plasminogen activator receptor (uPAR), but does not report a pharmacodynamic (exposure-response) relationship for the drug urokinase itself. |
| popPK | El-Sharief_2018 | irrelevant | 0 | 0 | The paper reports in-vitro inhibition and anticancer activity of THICZs against urokinase, not the pharmacokinetic disposition parameters of urokinase. |
| PD | El-Sharief_2018 | not_relevant | 3 | 2 | The paper reports IC50 values for urokinase inhibition, which are single-point potency metrics rather than a full exposure-response or dose-response curve with derivable PD parameters like Emax or slope. |
| PGx | Emoto_2008 | not_relevant | 0 | 0 | The paper concerns CYP3A4 induction in chimeric mice using dexamethasone; urokinase is only used to generate the immunodeficient host model, not as the study drug, and no genetic variants are analyzed. |
| popPK | Farag_2023 | irrelevant | 0 | 0 | The study focuses on the in vitro synthesis and inhibitory activity (IC50) of novel compounds against urokinase, rather than the pharmacokinetic disposition parameters of urokinase itself. |
| popPK | Festuccia_2005 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study focusing on urokinase-type plasminogen activator (uPA) signaling and cell invasiveness, not the pharmacokinetics of the drug urokinase. |
| PD | Festuccia_2005 | not_relevant | 3 | 2 | The paper describes qualitative dose-dependent effects of EGF on invasion and uPA secretion, but does not report specific numeric PD parameters (e.g., EC50, Emax) for urokinase or a formal exposure-response model. |
| popPK | Frankel_2002 | irrelevant | 0 | 0 | The study investigates the cytotoxicity of a diphtheria toxin-urokinase fusion protein in leukemia cells, not the pharmacokinetic disposition of the drug urokinase. |
| popPK | Fu_1988 | irrelevant | 0 | 0 | The study investigates recombinant tissue plasminogen activator (tPA) and melanoma tPA in rabbits, not urokinase as the subject drug. |
| popPK | Geretti_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of RO7239958 (an antisense oligonucleotide for Hepatitis B), not urokinase; urokinase is only mentioned in the context of a mouse strain name (urokinase-type plasminogen activator/severe combined immunodeficiency mice) used in preclinical background. |
| PGx | Gettins_2016 | not_relevant | 0 | 0 | The paper investigates the structural binding sites on PAI-1 for LRP1 using in vitro biochemistry, not the effect of genetic variants on the pharmacokinetics or pharmacodynamics of urokinase in vivo. |
| popPK | Girisa_2021 | irrelevant | 0 | 0 | The paper is a review on curcuminoids for oral diseases and does not mention urokinase or its pharmacokinetics. |
| PD | Girisa_2021 | not_relevant | 0 | 0 | The paper is a review on curcuminoids for oral diseases and does not mention urokinase or report any pharmacodynamic parameters. |
| popPK | Goodson_1994 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of receptor binding affinity (IC50) for urokinase receptor antagonists, not a pharmacokinetic study of urokinase disposition. |
| popPK | Grøndahl-Hansen_1988 | irrelevant | 0 | 0 | The paper describes the development and application of an immunoassay for measuring urokinase-type plasminogen activator (u-PA) concentrations in cancer patients, not a pharmacokinetic study of the drug urokinase (disposition parameters like CL/V are absent). |
| PD | Grøndahl-Hansen_1988 | not_relevant | 0 | 0 | The paper describes an ELISA assay for measuring u-PA concentration and reports baseline levels in healthy vs. cancer patients, but it does not report a pharmacodynamic (exposure-response) relationship for urokinase as a drug treatment. |
| popPK | Hahnvajanawong_2021 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of urokinase-type plasminogen activator (uPA) expression and activity in cancer cells, not a pharmacokinetic study of the drug urokinase. |
| PD | Hahnvajanawong_2021 | not_relevant | 0 | 0 | The paper studies the effect of isomorellin on uPA expression, not the pharmacodynamics of urokinase itself. |
| popPK | Haj-Yehia_2000 | irrelevant | 0 | 0 | The paper investigates the mechanism of action (vasoactive effects) of urokinase in vitro and in vivo, not its pharmacokinetic disposition parameters. |
| popPK | Han_2016 | irrelevant | 0 | 0 | The study investigates the inhibitory effect of shikonin on PAI-1, using urokinase only as a tool/substrate in an in-vitro assay, and does not report any pharmacokinetic parameters for urokinase. |
| popPK | Han_2023 | irrelevant | 0 | 0 | The study focuses on a urokinase receptor-targeted imaging probe, not the pharmacokinetics of urokinase as a drug. |
| PD | Han_2023 | not_relevant | 1 | 0 | The paper reports an IC50 for a peptide probe binding to uPAR (a receptor affinity assay), not a pharmacodynamic exposure-response or dose-response relationship for the drug urokinase itself. |
| popPK | Haupt_2023 | irrelevant | 0 | 0 | The paper investigates soluble urokinase plasminogen activator receptor (suPAR) as a biomarker for inflammation in depression, not the pharmacokinetics of the drug urokinase. |
| PGx | Haynes_2022 | not_relevant | 2 | 5 | The paper studies the biochemical stability and latency transition of PAI-1 variants (the inhibitor) and their interaction with urokinase, but does not report pharmacogenomic effects on the PK or PD parameters of urokinase as a drug in humans. |
| popPK | Hermens_1975 | irrelevant | 0 | 0 | The study focuses on modeling myocardial necrosis and enzyme release (troponin/CK etc.) as a diagnostic consequence, not the pharmacokinetic disposition parameters (CL, V, t1/2) of urokinase itself. |
| popPK | Hernández-Gago_2026 | irrelevant | 0 | 0 | The study is a systematic review focusing on a general list of high-alert medications (e.g., insulin, vancomycin, enoxaparin) in obese pediatric patients and does not mention or report pharmacokinetic parameters for urokinase. |
| PD | Hernández-Gago_2026 | not_relevant | 0 | 0 | The paper is a systematic review of dosing strategies in obese pediatric patients and does not report specific pharmacodynamic or exposure-response data for urokinase. |
| popPK | Heussen_1984 | irrelevant | 0 | 0 | The study is a biochemical purification and in-vitro inhibitor characterization of tissue plasminogen activator, with no pharmacokinetic modeling or disposition parameters for urokinase. |
| PGx | Holvoet_1997 | not_relevant | 0 | 0 | The text describes mechanisms of atherosclerosis and thrombosis, and mentions urokinase in a pathophysiological context, but does not report any gene variant's effect on urokinase's pharmacokinetic or pharmacodynamic parameters. |
| PGx | Huang_2013 | not_relevant | 0 | 0 | The paper studies soluble urokinase receptor levels in kidney disease patients, not the pharmacokinetics or pharmacodynamics of urokinase (plasminogen activator) as a drug in relation to gene variants. |
| popPK | Huang_2022 | irrelevant | 0 | 0 | The paper describes a protein engineering strategy for albumin fusion peptides targeting urokinase-type plasminogen activator (uPA), not a pharmacokinetic study of the drug urokinase. |
| PD | Huang_2022 | not_relevant | 0 | 0 | The paper reports IC50 values for engineered albumin-peptide fusion proteins (inhibitors), not a pharmacodynamic exposure-response or dose-response relationship for the drug urokinase itself. |
| popPK | Huang_2022_2 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics and thrombolytic efficacy of tissue plasminogen activator (tPA), while urokinase is only mentioned in the introduction as a general example of a fibrinolytic enzyme. |
| PD | Huang_2022_2 | not_relevant | 2 | 1 | The paper reports PK profiles and qualitative/semi-quantitative efficacy (thrombus lysis, blood flow) but does not provide a concentration-effect or dose-response curve with numeric PD parameters (e.g., EC50, Emax) for urokinase or tPA. |
| PGx | Inoue_2008 | not_relevant | 0 | 0 | The paper focuses on warfarin metabolism in chimeric mice; urokinase is only mentioned as a transgene for the control mice, not as the subject of pharmacogenomic analysis. |
| popPK | Ishida_2018 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics/kinetics of Hepatitis B Virus (HBV), not the drug urokinase (which is only a genetic component of the mouse strain name 'uPA/SCID'). |
| popPK | Ismail_2026 | irrelevant | 0 | 0 | The study investigates the biomarker suPAR (soluble urokinase plasminogen activator receptor) and the drug sotagliflozin; it does not study the pharmacokinetics of urokinase. |
| PGx | Jankun_2012 | not_relevant | 0 | 0 | The paper focuses on protein engineering (mutagenesis) to stabilize PAI-1, not on human genetic variation (pharmacogenomics) affecting the pharmacokinetics or pharmacodynamics of urokinase. |
| popPK | Jedinák_2006 | irrelevant | 0 | 0 | The study investigates the in vitro inhibitory activity of ursolic acid on urokinase, rather than the pharmacokinetic disposition of urokinase itself. |
| PGx | Jiao_2026 | not_relevant | 2 | 2 | The study reports a significant difference in efficacy (hematoma clearance) between rt-PA and urokinase, but concludes that no genotype-outcome association was observed with urokinase, meaning no pharmacogenomic effect on a PD parameter for the drug in question was reported. |
| PGx | Kamiya_2010 | not_relevant | 0 | 0 | The paper studies urokinase (uPA) only as a transgenic marker for liver humanization in an HCV mouse model, not as a gene variant affecting the PK/PD of urokinase itself. |
| PGx | Katoh_2007 | not_relevant | 0 | 0 | The paper uses urokinase (uPA) only as a marker for a mouse model of liver humanization to study debrisoquin metabolism, not as the drug of interest for which PK/PD is being analyzed. |
| PGx | Katoh_2007_2 | not_relevant | 0 | 0 | The paper describes a drug development tool (chimeric mice) and does not report pharmacogenomic effects on the PK/PD of urokinase. |
| PGx | Katoh_2008 | not_relevant | 1 | 0 | The text refers to 'urokinase-type plasminogen activator (uPA)' as a genetic background/transgenic marker for the mouse strain, not as a drug of interest. |
| PD | Koster_1994 | not_relevant | 3 | 2 | The paper reports PK parameters and qualitative changes in hemostatic markers (fibrinogen, alpha-2-antiplasmin) but does not provide numeric PD parameters (e.g., Emax, EC50) or a quantitative concentration-effect relationship. |
| popPK | Kubincová_2026 | irrelevant | 0 | 0 | The paper is a computational study on protein-ligand docking protocols and contains no pharmacokinetic data for urokinase or any other drug. |
| PD | Kubincová_2026 | not_relevant | 0 | 0 | The paper is a computational study on protein-ligand docking protocols and contains no pharmacodynamic, exposure-response, or dose-response data for urokinase or any other drug. |
| popPK | Künnapuu_2021 | irrelevant | 0 | 0 | The paper reviews proteolytic cleavages of the VEGF family and does not contain any pharmacokinetic data or quantitative disposition parameters for urokinase. |
| PD | Künnapuu_2021 | not_relevant | 0 | 0 | The paper is a review of the proteolytic activation mechanisms of VEGF-C and VEGF-D and does not report any pharmacokinetic or pharmacodynamic modeling, exposure-response relationships, or numeric PD parameters for urokinase. |
| popPK | Lee_2008 | irrelevant | 0 | 0 | The study is an in-vitro/in-vivo pharmacological investigation of shikonin's antiangiogenic effects, not a pharmacokinetic study of urokinase. |
| PD | Lee_2008 | not_relevant | 0 | 0 | The paper investigates the anti-angiogenic effects of shikonin derivatives and mentions the downregulation of urokinase-type plasminogen activator (uPA) expression, but it does not report a pharmacodynamic or exposure-response relationship for the drug urokinase itself. |
| popPK | Li_2019 | irrelevant | 0 | 0 | The study focuses on identifying inhibitors of urokinase plasminogen activator (uPA) using in-vitro assays and docking, rather than reporting the pharmacokinetic disposition parameters of urokinase itself. |
| PGx | Lijnen_1992 | not_relevant | 0 | 0 | The paper discusses engineered mutants and chimeras for improved pharmacology, not naturally occurring gene variants (pharmacogenomics) affecting PK/PD. |
| popPK | Liu_2015 | irrelevant | 0 | 0 | The paper describes small-molecule antagonists of the urokinase receptor (uPAR) and protein-protein interactions, not the pharmacokinetics of the drug urokinase. |
| popPK | Logan_1992 | irrelevant | 0 | 0 | The study investigates the effects of TNF on the fibrinolytic system, measuring tissue plasminogen activator (t-PA) and urokinase-type plasminogen activator (u-PA) activity/antigen levels, not the pharmacokinetic disposition parameters (CL, V, etc.) of the drug urokinase (a thrombolytic). |
| popPK | Lohita_2026 | irrelevant | 0 | 0 | The study investigates the inhibitory effect of plant extracts on the urokinase enzyme (uPA) in an in vitro setting and does not report pharmacokinetic parameters for the drug urokinase. |
| popPK | Loizou_2021 | irrelevant | 0 | 0 | The paper concerns perfluorooctanoic acid (PFOA), not urokinase, and reports no PK parameters for the subject drug. |
| PD | Loizou_2021 | not_relevant | 0 | 0 | The paper focuses on Perfluorooctanoic Acid (PFOA) and does not report any pharmacodynamic or exposure-response data for urokinase. |
| PGx | Longstaff_2008 | not_relevant | 0 | 0 | The text is a review discussing fibrin binding and the history of thrombolytic drugs; it does not report pharmacogenomic effects of genetic variants on urokinase PK/PD parameters. |
| popPK | Luo_2025 | irrelevant | 0 | 0 | The study focuses on a uPAR-targeted nanoparticle for imaging and therapy, not the pharmacokinetics of the drug urokinase. |
| popPK | Lönsjö_2025 | irrelevant | 0 | 0 | The study is a proteomic analysis of synovial fluid in osteoarthritis patients comparing protein expression levels, not a pharmacokinetic study reporting disposition parameters for urokinase. |
| popPK | Mahdi_2001 | irrelevant | 0 | 0 | The paper is a mechanistic/cellular biology study on the localization of the urokinase receptor (uPAR) and does not report pharmacokinetic parameters for the drug urokinase. |
| PD | Mahdi_2001 | not_relevant | 0 | 0 | The paper describes cellular localization and competitive inhibition of binding/activation by antibodies, not a pharmacodynamic exposure-response or dose-response relationship for the drug urokinase. |
| PGx | Manea_2018 | not_relevant | 1 | 1 | The paper reviews GPI-APs in disease but does not investigate how a gene variant affects the PK or PD of the drug urokinase. |
| popPK | Mao_2016 | irrelevant | 0 | 0 | The paper focuses on gene expression and angiogenesis in colorectal cancer cell lines using a Chinese herbal formula, with no pharmacokinetic parameters reported for urokinase. |
| PD | Mao_2016 | not_relevant | 0 | 0 | The paper studies a traditional Chinese medicine formula (JPJD) and reports IC50 values for cell proliferation, but does not report a pharmacodynamic or exposure-response relationship for the drug urokinase. |
| popPK | Martin_1993 | irrelevant | 0 | 0 | no_text gate: only 135 chars of text extracted (&lt; 400) |
| PGx | Mateusiak_2024 | not_relevant | 0 | 0 | The paper describes the development of nanobodies for imaging uPAR in tumors and does not investigate pharmacogenomic effects on the PK/PD of urokinase. |
| popPK | Mizuta_1988 | irrelevant | 0 | 0 | The study is an in-vitro investigation of platelet aggregation where urokinase serves as a comparator agent to tissue-type plasminogen activator, and no pharmacokinetic parameters are reported. |
| popPK | Mukhina_2000 | irrelevant | 0 | 0 | The study investigates the mechanistic chemotactic effects of urokinase on cell migration in vitro, rather than its pharmacokinetic disposition parameters. |
| popPK | Niemetz_1988 | irrelevant | 0 | 0 | no_text gate: only 87 chars of text extracted (&lt; 400) |
| PD | Niemetz_1988 | not_relevant | 0 | 0 | The paper reports a dose-response relationship for streptokinase, not urokinase, and explicitly states that urokinase was unable to activate the factor. |
| PGx | Nieves_2010 | not_relevant | 0 | 0 | The paper studies the structural biology and cellular trafficking of a mutated receptor (u-PAR), not the PK/PD of a drug (urokinase) influenced by a human polymorphic genetic variant. |
| popPK | Nykjaer_1994 | irrelevant | 0 | 0 | no_text gate: only 283 chars of text extracted (&lt; 400) |
| PD | Nykjaer_1994 | not_relevant | 3 | 4 | The paper reports binding affinities (EC50) for receptor-ligand interactions, which are pharmacological binding parameters, but does not report a pharmacodynamic exposure-response or dose-response relationship for the drug's therapeutic effect. |
| popPK | Ochoa_2016 | irrelevant | 0 | 0 | The paper investigates the modulation of nicotinic acetylcholine receptors by the prototoxin LYPD6B, which shares a domain with the urokinase receptor, but does not study urokinase pharmacokinetics. |
| PD | Ochoa_2016 | not_relevant | 0 | 0 | The paper studies the modulation of nicotinic acetylcholine receptors by LYPD6B (a prototoxin), not the pharmacodynamics of the drug urokinase. |
| popPK | Pant_2018 | irrelevant | 0 | 0 | The study focuses on the design of hepsin inhibitors where urokinase (uPA) serves only as a selectivity comparator, and no pharmacokinetic parameters for urokinase are reported. |
| PD | Pant_2018 | not_relevant | 0 | 0 | The paper reports IC50 values for hepsin inhibitors and selectivity ratios against urokinase, but does not report a pharmacodynamic (exposure-response or dose-response) relationship for urokinase itself. |
| popPK | Papadopoulos_2019 | irrelevant | 0 | 0 | The paper is a review of aflibercept, not urokinase. |
| popPK | Pappalardo_2024 | irrelevant | 0 | 0 | The paper is a review of in silico computational methods for drug design and does not contain pharmacokinetic data for urokinase. |
| PD | Pappalardo_2024 | not_relevant | 0 | 0 | The paper is a review of in silico computational methods for receptor mutations and contains no pharmacodynamic data, exposure-response analysis, or numeric PD parameters for urokinase. |
| popPK | Peng_2017 | irrelevant | 0 | 0 | The paper describes a PAI-1 inhibitor (a urokinase variant) and its pharmacodynamics, but does not report quantitative pharmacokinetic parameters (CL, V, etc.) for urokinase itself. |
| PD | Peng_2017 | not_relevant | 3 | 2 | The paper reports in vitro IC50 values for a PAI-1 inhibitor (PAItrap-HSA), not a pharmacodynamic exposure-response or dose-response relationship for urokinase itself. |
| PGx | Peng_2017 | not_relevant | 0 | 0 | The paper describes the development of a PAI-1 inhibitor (drug design) and its efficacy in animal models, not a pharmacogenomic study of urokinase. |
| popPK | Percha_2015 | irrelevant | 0 | 0 | The paper is a text-mining algorithm study and does not report any pharmacokinetic data for urokinase. |
| PD | Percha_2015 | not_relevant | 0 | 0 | The paper describes a text mining algorithm for extracting drug-gene relationships from biomedical literature and does not contain any pharmacokinetic or pharmacodynamic data for urokinase. |
| popPK | Persson_2014 | irrelevant | 0 | 0 | The study investigates urokinase-type plasminogen activator receptor (uPAR) targeted radionuclide therapy in a cancer model, not the pharmacokinetics of the drug urokinase. |
| popPK | Piechowski-Jozwiak_2022 | irrelevant | 0 | 0 | The paper is a review of desmoteplase, not urokinase; urokinase is only mentioned as a comparator or structural analogue. |
| PGx | Poliakov_2001 | not_relevant | 0 | 0 | The paper investigates the molecular mechanism of urokinase degradation by plasmin, not how a human gene variant/genotype alters its pharmacokinetics or pharmacodynamics. |
| popPK | Rea_2013 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of urokinase receptor (uPAR) inhibitors blocking cell invasion, containing no pharmacokinetic or disposition parameters for urokinase. |
| popPK | Ren_2026 | irrelevant | 0 | 0 | The paper is a bioinformatics and in-vitro study on Idiopathic Pulmonary Fibrosis and does not contain pharmacokinetic data for urokinase. |
| PD | Ren_2026 | not_relevant | 0 | 0 | The paper focuses on bioinformatics, machine learning, and molecular docking for Jingfang Granule in IPF, and does not report any pharmacodynamic or exposure-response analysis for urokinase. |
| PGx | Riemenschneider_2006 | not_relevant | 0 | 0 | The paper reports an association between a PLAU gene variant and Alzheimer's disease pathology (amyloid plaque counts), not a pharmacokinetic or pharmacodynamic effect of urokinase as a therapeutic agent. |
| popPK | Rijken_2002 | irrelevant | 0 | 0 | no_text gate: only 106 chars of text extracted (&lt; 400) |
| popPK | Rosenquist_1993 | irrelevant | 0 | 0 | The study describes an ELISA assay for uPA levels in tissue extracts and is not a pharmacokinetic study of the drug urokinase. |
| popPK | Rotbain_2023 | irrelevant | 0 | 0 | The study measures soluble urokinase plasminogen activator receptor (suPAR), a biomarker, rather than the pharmacokinetics of the drug urokinase. |
| popPK | Rovelli_1990 | irrelevant | 0 | 0 | no_text gate: only 121 chars of text extracted (&lt; 400) |
| PD | Rovelli_1990 | not_relevant | 0 | 0 | The paper reports binding affinities (EC50) for vitronectin and GDN, not a pharmacodynamic exposure-response or dose-response relationship for urokinase. |
| popPK | Rønø_2006 | irrelevant | 0 | 0 | The study focuses on the antitumor efficacy of a urokinase-activated prodrug in mice and does not report pharmacokinetic parameters for urokinase itself. |
| popPK | Sarubbi_1989 | irrelevant | 0 | 0 | The study investigates the structural and enzymatic properties of recombinant urokinase in vitro, not its pharmacokinetic disposition parameters in vivo. |
| PD | Sarubbi_1989 | not_relevant | 3 | 2 | The paper reports qualitative similarity in dose-response curves and kinetic parameters (Km, kcat) between recombinant and natural urokinase, but does not provide specific numeric PD parameters or extractable concentration-effect data. |
| popPK | Schmiedeberg_2002 | irrelevant | 0 | 0 | The paper focuses on the synthesis, NMR structure, and receptor binding activity (in vitro) of urokinase mimetics, not the pharmacokinetic disposition of urokinase itself. |
| popPK | Schneider_1989 | irrelevant | 1 | 0 | The study investigates the pharmacodynamic fibrinolytic activity (clot lysis) in a rabbit model rather than the pharmacokinetic disposition parameters (CL, V, t1/2) of the drug itself. |
| PGx | Shanmukhappa_2006 | not_relevant | 0 | 0 | The paper is a basic science study using knockout mice to investigate the biological role of urokinase in liver repair, not a pharmacogenomic study of urokinase as a therapeutic drug in humans. |
| PGx | Sobel_1990 | not_relevant | 2 | 0 | The study investigates the PK of engineered t-PA variants (not urokinase) and focuses on protein engineering for half-life extension, not the effect of patient genetic polymorphisms on drug response. |
| PGx | Song_2012 | not_relevant | 0 | 0 | The paper investigates the therapeutic efficacy of adenoviral gene therapy (Ad-ECRG2) in hepatocarcinoma models, not the impact of genetic variants on the pharmacokinetics or pharmacodynamics of the drug urokinase. |
| popPK | Spinale_2015 | irrelevant | 0 | 0 | The study investigates urokinase-type plasminogen activator receptor (suPAR) as a disease biomarker/mechanistic factor, not the pharmacokinetic disposition of the drug urokinase. |
| popPK | Spriggs_1989 | irrelevant | 2 | 0 | The study is a pharmacodynamic comparison of thrombolytic efficacy in animal models, reporting dose-response and synergism data rather than quantitative population pharmacokinetic parameters (CL, V, etc.) for urokinase. |
| popPK | Storgaard_2026 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for gentamicin, not urokinase. |
| popPK | Su_2014 | irrelevant | 0 | 0 | This is an in-vitro cancer biology study investigating the effects of MIBG on HCC cell invasion and urokinase-type plasminogen activator (uPA) expression; it does not report pharmacokinetic parameters for the drug urokinase. |
| popPK | Sutherland_1991 | irrelevant | 0 | 0 | The paper describes a stability-indicating assay for urokinase fibrinolytic potency (bioassay), not a pharmacokinetic study reporting disposition parameters like clearance or half-life. |
| PGx | Suzuki_2000 | not_relevant | 0 | 0 | The paper investigates synergistic effects of endothelial products on platelet disaggregation and does not involve any genetic variants or pharmacogenomic analysis. |
| popPK | Takano_1994 | irrelevant | 0 | 0 | The paper investigates an angiogenesis inhibitor's effect on urokinase activity, not the pharmacokinetics of urokinase. |
| popPK | Talath_2026 | irrelevant | 0 | 0 | The paper is a review of natural supplements in breast cancer therapy and contains no pharmacokinetic data or mention of urokinase. |
| PD | Talath_2026 | not_relevant | 0 | 0 | The paper is a review of natural supplements in breast cancer and does not report any pharmacodynamic or exposure-response data for urokinase. |
| PGx | Tanoue_2013 | not_relevant | 0 | 0 | The paper evaluates zaleplon metabolism in transgenic mouse models, not the PK/PD of urokinase in humans based on genetic variants. |
| PGx | Tateno_2015 | not_relevant | 0 | 0 | The paper reports on the generation of novel chimeric mouse models for liver humanization using urokinase-type plasminogen activator (uPA) transgenes, but does not study pharmacogenomic effects on the PK/PD parameters of urokinase as a therapeutic drug. |
| popPK | Teno_1993 | irrelevant | 0 | 0 | The provided text is a software configuration string and contains no information about urokinase pharmacokinetics. |
| PD | Teno_1993 | not_relevant | 0 | 0 | The provided text is metadata for the GROBID software and does not contain any scientific content regarding urokinase or pharmacodynamics. |
| PGx | Thomson_1999 | not_relevant | 0 | 0 | The text describes the development and design of novel thrombolytic drugs, including engineered variants of urokinase, but does not report any pharmacogenomic analysis of how human gene variants affect the PK/PD of urokinase. |
| PGx | Uno_2009 | not_relevant | 0 | 0 | The paper compares CYP enzyme activities between mouse/human cell lines and does not report PK/PD parameters for urokinase. |
| PGx | Uxa_2010 | not_relevant | 0 | 0 | The study investigates associations between genetic variants and a disease phenotype (placental fibrin deposition), reporting no association, rather than the effect of a genotype on the PK or PD of the administered drug urokinase. |
| PGx | Vats_2018 | not_relevant | 0 | 0 | The paper studies radiolabeled peptide probes for imaging uPAR, not the pharmacogenomics of urokinase therapy. |
| PGx | Verstraete_1995 | not_relevant | 0 | 0 | The text is a general review of thrombolytic agent development and contains no information on pharmacogenomics, gene variants, or genotype-dependent effects on PK/PD parameters. |
| popPK | Wang_2012 | irrelevant | 0 | 0 | The study focuses on the neuroprotective effects of ethanol in rats; urokinase is mentioned only as a co-administered thrombolytic agent to test for hemorrhage risk, not as the subject of pharmacokinetic analysis. |
| popPK | Wang_2021 | irrelevant | 0 | 0 | The paper reports in-vitro fibrinolytic activity (EC50) of novel marine derivatives, not pharmacokinetic parameters (CL, V, t1/2) for urokinase itself. |
| popPK | Watanabe_2024 | irrelevant | 0 | 0 | The study investigates the pharmacology and efficacy of SAG-524 against HBV, not the pharmacokinetics of urokinase. |
| PD | Watanabe_2024 | not_relevant | 0 | 0 | The paper investigates the antiviral activity of SAG-524 against Hepatitis B Virus (HBV) and does not report any pharmacodynamic or exposure-response data for urokinase. |
| popPK | Wen_2023 | irrelevant | 0 | 0 | The paper is a transcriptomic and proteomic study of kidney injury markers and does not report pharmacokinetic parameters for urokinase. |
| PD | Wen_2023 | not_relevant | 0 | 0 | The paper focuses on transcriptomic and proteomic markers of kidney injury and does not report any pharmacodynamic or exposure-response analysis for urokinase. |
| popPK | Wong_2023 | irrelevant | 0 | 0 | The paper discusses perfluoroaryl macrocyclic peptides for albumin binding, not the pharmacokinetics of the drug urokinase. |
| PD | Wong_2023 | not_relevant | 0 | 0 | The paper focuses on the discovery of albumin-binding macrocyclic peptides and their pharmacokinetics (circulation half-life), but does not report a pharmacodynamic (exposure-response or dose-response) relationship for urokinase or any other drug. |
| popPK | Xu_2017 | irrelevant | 0 | 0 | no_text gate: only 103 chars of text extracted (&lt; 400) |
| popPK | Yang_2016 | irrelevant | 0 | 0 | The study is an in-vitro investigation of a cancer cell line where urokinase plasminogen activator (u-PA) is measured as a biomarker of metastasis, not a pharmacokinetic study of the drug urokinase. |
| PD | Yang_2016 | not_relevant | 0 | 0 | The paper studies the effects of AVEMAR on oral cancer cells and mentions urokinase (u-PA) only as a suppressed protein marker, not as the drug subject of a pharmacodynamic or exposure-response analysis. |
| popPK | Yang_2022 | irrelevant | 0 | 0 | The study investigates the inhibitory effects of TCM compounds on urokinase (uPA) activity in an in vitro and nephrotic rat model, rather than characterizing the pharmacokinetic disposition parameters of urokinase itself. |
| popPK | Yang_2023 | relevant | 9 | 3 | The study presents an in silico pharmacokinetic model for urokinase in humans, utilizing specific PK parameters (clearance, volume, elimination constants) derived from clinical data, though the explicit numeric values for these parameters are contained in Table 1 or supplementary material which are not fully readable in the provided text. |
| popPK | Yang_2025 | irrelevant | 0 | 0 | The paper is a general review of in silico and AI methods for drug disposition and does not contain any specific pharmacokinetic data for urokinase. |
| PD | Yang_2025 | not_relevant | 0 | 0 | The paper is a review of in silico and AI modeling methods and does not report specific pharmacodynamic or exposure-response data for urokinase. |
| popPK | Yu_2017 | irrelevant | 0 | 0 | The study investigates toddalolactone as a PAI-1 inhibitor and uses urokinase (uPA) only as a recombinant tool enzyme in in vitro assays; no pharmacokinetic parameters for urokinase are reported. |
| PGx | Zaitsev_2010 | not_relevant | 0 | 0 | The paper describes a novel drug delivery mechanism (RBC-targeting) but does not investigate pharmacogenomic effects (gene variants/genotypes) on pharmacokinetic or pharmacodynamic parameters. |
| PGx | Zeymer_1994 | not_relevant | 0 | 0 | The paper discusses the development of new thrombolytic agents and their efficacy in clinical trials but does not report any pharmacogenomic effects of gene variants on the PK or PD of urokinase. |
| popPK | Zhang_2013 | irrelevant | 0 | 0 | The paper is a review of clinical trials for cerebral vasospasm and does not report quantitative pharmacokinetic parameters for urokinase. |
| popPK | Zhang_2014 | irrelevant | 0 | 0 | The study investigates the inhibitory effect of dihydroartemisinin on urokinase-type plasminogen activator (uPA) expression in cancer cells in vitro, which is a mechanistic study and does not report pharmacokinetic parameters for urokinase. |
| popPK | Zhang_2016 | irrelevant | 0 | 0 | The study evaluates the inhibitory effects of herbal compounds on urokinase's fibrinolytic activity in vitro, not the pharmacokinetic disposition parameters of urokinase itself. |
| popPK | Zhang_2025 | irrelevant | 0 | 0 | The study focuses on the development and pharmacodynamic evaluation of a novel nanoplatform for drug delivery, without reporting quantitative pharmacokinetic parameters (CL, V, etc.) for urokinase itself. |
| PD | Zhang_2025 | not_relevant | 1 | 0 | The paper reports a single qualitative pharmacodynamic outcome (thrombus blockage rate) for a specific nanoplatform formulation but does not provide an exposure-response or dose-response analysis with numeric PD parameters for urokinase. |
| popPK | Zhu_2007 | irrelevant | 0 | 0 | The paper reports on the identification and characterization of a novel uPA inhibitor (UK122) using cell-free assays, containing no pharmacokinetic disposition parameters for urokinase. |
| popPK | Ziegler_1990 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of uPA gene expression and signaling pathways, containing no pharmacokinetic data. |
| PD | Ziegler_1990 | not_relevant | 3 | 2 | The paper describes a qualitative shift in the dose-response curve of Br-cAMP on uPA mRNA accumulation in the presence of calcium, but it does not report numeric PD parameters (EC50, Emax) or a quantitative exposure-response model for urokinase itself. |
| popPK | da_2024 | irrelevant | 0 | 0 | The study is an in vitro cytotoxicity assay using urokinase as a receptor target for a reengineered toxin, not a pharmacokinetic study of urokinase. |
| popPK | de_1995 | irrelevant | 2 | 0 | The paper is a review discussing drug interactions and focusing primarily on alteplase and saruplase, with no original quantitative PK parameter values reported for urokinase. |
| popPK | de_2021 | irrelevant | 0 | 0 | The study is a prognostic biomarker analysis for COVID-19 where urokinase-type plasminogen activator receptor is a measured biomarker, not a drug subject to pharmacokinetic modeling. |
| popPK | unknown_2021 | irrelevant | 0 | 0 | no_text gate: only 94 chars of text extracted (&lt; 400) |
| PD | unknown_2021 | not_relevant | 0 | 0 | The provided text is only a conference header and contains no data, analysis, or mention of urokinase pharmacodynamics. |
| popPK | unknown_2022 | irrelevant | 0 | 0 | no_text gate: only 37 chars of text extracted (&lt; 400) |
| PD | unknown_2022 | not_relevant | 0 | 0 | The provided text is only a conference title and contains no information regarding urokinase, pharmacodynamics, or exposure-response relationships. |
| popPK | unknown_2024 | irrelevant | 0 | 0 | no_text gate: only 52 chars of text extracted (&lt; 400) |
| PD | unknown_2024 | not_relevant | 0 | 0 | The provided text is a placeholder for a PDF file and contains no scientific content, data, or PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-14 18:42 UTC</sub>
