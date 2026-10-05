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
| 2026-10-05 17:09 | 6:48 | 0/0/0 | 0/0/0 | 0/0/1 | 244,892/6,947 | ollama / qwen3.8:27b-mtp-q8_0 | 29 | 8/36 | 27/2 | 0 |

## popPK records

_not available_

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> | **TAFI** | `Q22` · CL | target | [Jiao_2026](drugs/drug_urokinase/pgx_Jiao_2026_TAFI_Q22.md) | Jiao Y et al., Efficacy of rt-PA versus Urokinase in e…, Frontiers in neurology (2026) | [10.3389/fneur.2026.1830505](https://doi.org/10.3389/fneur.2026.1830505) |

<details class="pk-legend"><summary>What the PGx badges mean — evidence, and whether a model runs</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>the paper gives the effect of each phenotype (or genotype) on a named model parameter — a θ per category.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>the effect comes from a CPIC / DPWG dosing guideline, not from this paper's numbers.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>the paper's popPK model runs per phenotype in the browser (Simulation tab); its PGx Modelica model is under Models.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>a PGx Modelica model exists but has no in-browser simulator.</td></tr></tbody></table></details>

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=urokinase) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: LRP2 (substrate), MMP12 (substrate), NID1 (target), PLAU (modulator), PLAUR (inducer), PLAUR (modulator), PLG (activator), SERPINA5 (substrate), SERPINB2 (inducer), SERPINB2 (substrate), SERPINE1 (inducer), SERPINE1 (substrate), ST14 (substrate), TAFI (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 353 matched, 126 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_13 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Köhler_1991.pdf` | Köhler M et al., Half-life of single-chain urokinase-typ…, Thrombosis research (1991) | popPK | 10 | [10.1016/0049-3848(91)90670-r](https://doi.org/10.1016/0049-3848(91)90670-r) | [1906642](https://pubmed.ncbi.nlm.nih.gov/1906642) | The study reports quantitative pharmacokinetic parameters (half-lives and compartmental model details) for urokinase in humans, with specific numeric values provided in the abstract. |
| `Stump_1987.pdf` | Stump DC et al., Pharmacokinetics of single chain forms…, The Journal of pharmacology… (1987) | popPK | 10 | not captured | [3612530](https://pubmed.ncbi.nlm.nih.gov/3612530) | The abstract explicitly reports quantitative two-compartment pharmacokinetic parameters (half-lives, volumes, clearance) for urokinase-type plasminogen activator in rabbits and squirrel monkeys. |
| `Huang_2022.pdf` | Huang Z et al., A versatile insertion point on albumin…, International journal of bi… (2022) | pd | 5 | [10.1016/j.ijbiomac.2022.02.002](https://doi.org/10.1016/j.ijbiomac.2022.02.002) | [35134454](https://www.ncbi.nlm.nih.gov/pubmed/35134454) | metadata signals extractable PD data (IC50) |
| `Rijken_2002.pdf` | Rijken DC et al., Characterization of the binding of urok…, Thrombosis and haemostasis (2002) | pd | 5 | not captured | [12152683](https://www.ncbi.nlm.nih.gov/pubmed/12152683) | metadata signals extractable PD data (EC50) |
| `Li_2019.pdf` | Li L et al., Rapid identification of urokinase plasm…, Journal of pharmaceutical a… (2019) | pd | 4 | [10.1016/j.jpba.2018.10.036](https://doi.org/10.1016/j.jpba.2018.10.036) | [30396051](https://www.ncbi.nlm.nih.gov/pubmed/30396051) | metadata signals extractable PD data (IC50) |
| `Mao_2016.pdf` | Mao D et al., [Effect of jianpi-jiedu formula on tumo…, Zhong nan da xue xue bao. Y… (2016) | pd | 4 | [10.11817/j.issn.1672-7347.2016.12.008](https://doi.org/10.11817/j.issn.1672-7347.2016.12.008) | [28070042](https://www.ncbi.nlm.nih.gov/pubmed/28070042) | metadata signals extractable PD data (IC50) |
| `Martin_1993.pdf` | Martin U et al., Differential fibrinolytic properties of…, Blood coagulation & fibrino… (1993) | pd | 4 | [10.1097/00001721-199304000-00004](https://doi.org/10.1097/00001721-199304000-00004) | [8388740](https://www.ncbi.nlm.nih.gov/pubmed/8388740) | metadata signals extractable PD data (Emax) |
| `Niemetz_1988.pdf` | Niemetz J et al., A streptokinase dependent plasma factor…, British journal of haematol… (1988) | pd | 4 | [10.1111/j.1365-2141.1988.tb02512.x](https://doi.org/10.1111/j.1365-2141.1988.tb02512.x) | [2975501](https://www.ncbi.nlm.nih.gov/pubmed/2975501) | metadata signals extractable PD data (sigmoid) |
| `Nykjaer_1994.pdf` | Nykjaer A et al., Regions involved in binding of urokinas…, The Journal of biological c… (1994) | pd | 4 | not captured | [7929271](https://www.ncbi.nlm.nih.gov/pubmed/7929271) | metadata signals extractable PD data (EC50) |
| `Rovelli_1990.pdf` | Rovelli G et al., Specific interaction of vitronectin wit…, European journal of biochem… (1990) | pd | 4 | [10.1111/j.1432-1033.1990.tb19293.x](https://doi.org/10.1111/j.1432-1033.1990.tb19293.x) | [1698627](https://www.ncbi.nlm.nih.gov/pubmed/1698627) | metadata signals extractable PD data (EC50) |
| `Yang_2016.pdf` | Yang MD et al., Inhibitory Effects of AVEMAR on Prolife…, Nutrition and cancer (2016) | pd | 4 | [10.1080/01635581.2016.1153668](https://doi.org/10.1080/01635581.2016.1153668) | [27007465](https://www.ncbi.nlm.nih.gov/pubmed/27007465) | metadata signals extractable PD data (IC50) |
| `Emoto_2008.pdf` | Emoto C et al., Non-invasive method to detect induction…, Xenobiotica; the fate of fo… (2008) | pgx | 7 | [10.1080/00498250701760159](https://doi.org/10.1080/00498250701760159) | [18274954](https://www.ncbi.nlm.nih.gov/pubmed/18274954) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Katoh_2007.pdf` | Katoh M et al., Application of chimeric mice with human…, Drug metabolism reviews (2007) | pgx | 7 | [10.1080/03602530601021340](https://doi.org/10.1080/03602530601021340) | [17364883](https://www.ncbi.nlm.nih.gov/pubmed/17364883) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |

<sub>queue written 2026-10-05T17:04:33.709055+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PD | Almohammad_2024 | not_relevant | 0 | 0 | The paper investigates the effect of quercetin on doxorubicin cytotoxicity and gene expression (including PLAU/urokinase mRNA levels), but does not report a pharmacodynamic or exposure-response relationship for urokinase itself. |
| PD | Arakawa_2002 | not_relevant | 3 | 2 | The paper reports an IC50 for cathepsin B inhibition but only qualitatively describes the inhibition of u-PA production without providing numeric dose-response parameters or a concentration-effect curve for urokinase. |
| PD | Arnljots_1994 | not_relevant | 2 | 1 | The study reports qualitative differences in platelet accumulation and patency rates at fixed doses, but provides no numeric concentration-effect data, dose-response curve parameters (Emax/EC50), or PK/PD model fits. |
| popPK | Battini_2024 | irrelevant | 0 | 0 | The paper describes a machine learning method for drug-drug interaction signal detection in the FAERS database and does not report any pharmacokinetic parameters for urokinase. |
| PD | Battini_2024 | not_relevant | 0 | 0 | The paper focuses on pharmacovigilance signal detection and temporal plausibility of drug-drug interactions in the FAERS database, containing no pharmacodynamic modeling, exposure-response analysis, or numeric PD parameters for urokinase. |
| popPK | Bhat_2025 | irrelevant | 0 | 0 | The paper is a scoping review of model-informed drug development (MIDD) and does not report specific pharmacokinetic parameters for urokinase. |
| PD | Bhat_2025 | not_relevant | 0 | 0 | The paper is a scoping review of Model-Informed Drug Development (MIDD) and does not contain any data, analysis, or parameters for urokinase. |
| PGx | Cambruzzi_2019 | not_relevant | 0 | 0 | The paper is a review of lipoprotein glomerulopathy and mentions urokinase only as a treatment modality, without reporting any pharmacogenomic effects on its PK or PD parameters. |
| popPK | Davidson_2022 | irrelevant | 0 | 0 | The paper is a clinical review of IL-1 blocking agents (anakinra, canakinumab) for COVID-19 and does not involve urokinase or pharmacokinetic parameters. |
| PD | Davidson_2022 | not_relevant | 0 | 0 | The paper is a systematic review of clinical trials for IL-1 blocking agents (anakinra/canakinumab) in COVID-19 and contains no pharmacodynamic modeling, exposure-response analysis, or numeric PD parameters for urokinase. |
| popPK | De_2022 | irrelevant | 0 | 0 | The study focuses on unfractionated heparin dosing during hemodialysis and does not involve urokinase or report its pharmacokinetic parameters. |
| PD | De_2022 | not_relevant | 2 | 1 | The study analyzes heparin dosing and coagulation outcomes (aPTT/ACT) but does not report a pharmacodynamic model or numeric PD parameters (e.g., Emax, EC50) for urokinase. |
| PGx | Ding_2017 | not_relevant | 0 | 0 | The paper reports a pharmacogenomic effect of CYP2C19 on clopidogrel, not on the pharmacokinetics or pharmacodynamics of urokinase. |
| popPK | Ducloy-Bouthors_2022 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics and pharmacodynamics of tranexamic acid, not urokinase. |
| PGx | Duffy_2008 | not_relevant | 0 | 0 | The paper is a general review of cancer biomarkers and mentions urokinase only as a prognostic marker for breast cancer, not as a drug subject to pharmacogenomic analysis. |
| popPK | Duijvelaar_2024 | irrelevant | 0 | 0 | The study is a plasma proteomics analysis of COVID-19 patients and does not report pharmacokinetic parameters for urokinase. |
| PD | Duijvelaar_2024 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamic effects of imatinib on plasma proteomics in COVID-19 patients, not urokinase, and does not report any exposure-response or dose-response parameters for urokinase. |
| PGx | Edwards_2011 | not_relevant | 0 | 0 | The paper investigates genetic associations with small-for-gestational-age (SGA) risk, not the pharmacokinetics or pharmacodynamics of urokinase as a drug. |
| PD | El-Monaem_2026 | not_relevant | 0 | 0 | The paper reports in vitro IC50 values for anti-proliferative activity and molecular docking scores for urokinase-type plasminogen activator receptor (uPAR), but does not report a pharmacodynamic (exposure-response) relationship for the drug urokinase itself. |
| PD | El-Sharief_2018 | not_relevant | 3 | 2 | The paper reports IC50 values for urokinase inhibition, which are single-point potency metrics rather than a full exposure-response or dose-response curve with derivable PD parameters like Emax or slope. |
| PGx | Emoto_2008 | not_relevant | 0 | 0 | The paper describes a method to detect CYP3A4 induction in chimeric mice using dexamethasone as a probe, and does not report pharmacogenomic effects on the PK/PD of urokinase. |
| PD | Festuccia_2005 | not_relevant | 3 | 2 | The paper describes qualitative dose-dependent effects of EGF on invasion and uPA secretion, but does not report specific numeric PD parameters (e.g., EC50, Emax) for urokinase or a formal exposure-response model. |
| popPK | Fu_1988 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of recombinant tissue plasminogen activator (hPA(B) and mtPA), not urokinase itself. |
| popPK | Geretti_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of RO7239958 (an antisense oligonucleotide), not urokinase. |
| PGx | Gettins_2016 | not_relevant | 0 | 0 | The paper investigates the molecular binding site of PAI-1 on LRP1 and does not report pharmacogenomic effects on the PK or PD of urokinase. |
| popPK | Girisa_2021 | irrelevant | 0 | 0 | The paper is a review of curcuminoids for oral diseases and does not mention urokinase or report any pharmacokinetic parameters for it. |
| PD | Girisa_2021 | not_relevant | 0 | 0 | The paper is a review on curcuminoids for oral diseases and does not mention urokinase or report any pharmacodynamic parameters. |
| PD | Grøndahl-Hansen_1988 | not_relevant | 0 | 0 | The paper describes an ELISA assay for measuring u-PA concentration and reports baseline levels in healthy vs. cancer patients, but it does not report a pharmacodynamic (exposure-response) relationship for urokinase as a drug treatment. |
| PD | Hahnvajanawong_2021 | not_relevant | 0 | 0 | The paper studies the effect of isomorellin on uPA expression, not the pharmacodynamics of urokinase itself. |
| popPK | Haj-Yehia_2000 | irrelevant | 0 | 0 | The study investigates the mechanistic effects of urokinase on vascular smooth muscle contraction (in vitro and in vivo) and does not report any pharmacokinetic parameters such as clearance, volume, or half-life. |
| PD | Han_2023 | not_relevant | 1 | 0 | The paper reports an IC50 for a peptide probe binding to uPAR (a receptor affinity assay), not a pharmacodynamic exposure-response or dose-response relationship for the drug urokinase itself. |
| popPK | Haupt_2023 | irrelevant | 0 | 0 | The study measures suPAR (a biomarker) in depression patients and does not report pharmacokinetic parameters for the drug urokinase. |
| PGx | Haynes_2022 | not_relevant | 0 | 0 | The paper studies the functional stability of PAI-1 variants (the inhibitor) and their interaction with urokinase, but does not report pharmacokinetic or pharmacodynamic parameters of urokinase as a drug in a pharmacogenomic context. |
| popPK | Hermens_1975 | irrelevant | 1 | 0 | The study uses a two-compartment model to estimate myocardial necrosis rate from enzyme release, not to characterize the pharmacokinetic disposition parameters (CL, V, t1/2) of urokinase itself. |
| popPK | Hernández-Gago_2026 | irrelevant | 0 | 0 | The paper is a systematic review of dosing strategies for high-alert medications in obese pediatric patients and does not report pharmacokinetic parameters for urokinase. |
| PD | Hernández-Gago_2026 | not_relevant | 0 | 0 | The paper is a systematic review of dosing strategies in obese pediatric patients and does not report specific pharmacodynamic or exposure-response data for urokinase. |
| PGx | Holvoet_1997 | not_relevant | 0 | 0 | The text discusses the role of urokinase in atherosclerosis and mentions genetic polymorphisms in E-selectin, but does not report any pharmacogenomic effect on the PK or PD of urokinase. |
| PGx | Huang_2013 | not_relevant | 0 | 0 | The study measures plasma levels of the soluble urokinase receptor as a biomarker for FSGS, not the pharmacokinetics or pharmacodynamics of urokinase as a therapeutic drug. |
| PD | Huang_2022 | not_relevant | 0 | 0 | The paper reports IC50 values for engineered albumin-peptide fusion proteins (inhibitors), not a pharmacodynamic exposure-response or dose-response relationship for the drug urokinase itself. |
| popPK | Huang_2022_2 | irrelevant | 0 | 0 | The study focuses on tissue plasminogen activator (tPA), not urokinase, and does not report quantitative PK parameters for urokinase. |
| PD | Huang_2022_2 | not_relevant | 2 | 1 | The paper reports PK profiles and qualitative/semi-quantitative efficacy (thrombus lysis, blood flow) but does not provide a concentration-effect or dose-response curve with numeric PD parameters (e.g., EC50, Emax) for urokinase or tPA. |
| PGx | Inoue_2008 | not_relevant | 0 | 0 | The paper investigates warfarin metabolism in chimeric mice and does not report pharmacogenomic effects on urokinase. |
| popPK | Ishida_2018 | irrelevant | 0 | 0 | The study characterizes the pharmacokinetics of Hepatitis B Virus (HBV) in urokinase (uPA) transgenic mice, where urokinase is a genetic background feature rather than the subject drug being dosed and measured. |
| PGx | Jankun_2012 | not_relevant | 0 | 0 | The paper describes the structural engineering of a stable PAI-1 variant to inhibit urokinase, but does not report how a human gene variant affects the PK or PD of urokinase. |
| PGx | Jiao_2026 | not_relevant | 5 | 5 | The paper reports a pharmacogenomic association with clinical outcomes (hematoma clearance, NIHSS) rather than a direct change in a pharmacokinetic (PK) or pharmacodynamic (PD) parameter of urokinase. |
| PGx | Kamiya_2010 | not_relevant | 0 | 0 | The paper uses a urokinase (uPA) transgenic mouse model to study HCV dynamics and telaprevir pharmacokinetics, but it does not report how a urokinase gene variant affects the PK or PD of urokinase itself. |
| PGx | Katoh_2007 | not_relevant | 0 | 0 | The paper uses urokinase (uPA) as a genetic marker for a chimeric mouse model to study debrisoquin metabolism, not as the drug of interest for pharmacogenomic analysis. |
| PGx | Katoh_2007_2 | not_relevant | 0 | 0 | The paper describes a chimeric mouse model for ADME prediction and does not report pharmacogenomic effects of human gene variants on urokinase PK/PD. |
| PGx | Katoh_2008 | not_relevant | 0 | 0 | The paper describes a chimeric mouse model for drug metabolism and does not report pharmacogenomic effects on the PK/PD of urokinase. |
| PD | Koster_1994 | not_relevant | 3 | 2 | The paper reports PK parameters and qualitative changes in hemostatic markers (fibrinogen, alpha-2-antiplasmin) but does not provide numeric PD parameters (e.g., Emax, EC50) or a quantitative concentration-effect relationship. |
| popPK | Kubincová_2026 | irrelevant | 0 | 0 | The paper is a computational study on protein-ligand docking protocols and contains no pharmacokinetic data for urokinase. |
| PD | Kubincová_2026 | not_relevant | 0 | 0 | The paper is a computational study on protein-ligand docking protocols and contains no pharmacodynamic, exposure-response, or dose-response data for urokinase or any other drug. |
| popPK | Künnapuu_2021 | irrelevant | 0 | 0 | The paper is a review of proteolytic cleavage mechanisms in the VEGF family and does not report pharmacokinetic parameters for urokinase. |
| PD | Künnapuu_2021 | not_relevant | 0 | 0 | The paper is a review of the proteolytic activation mechanisms of VEGF-C and VEGF-D and does not report any pharmacokinetic or pharmacodynamic modeling, exposure-response relationships, or numeric PD parameters for urokinase. |
| PD | Lee_2008 | not_relevant | 0 | 0 | The paper investigates the anti-angiogenic effects of shikonin derivatives and mentions the downregulation of urokinase-type plasminogen activator (uPA) expression, but it does not report a pharmacodynamic or exposure-response relationship for the drug urokinase itself. |
| PGx | Lijnen_1992 | not_relevant | 0 | 0 | The paper discusses engineered protein variants (mutants/chimeras) of the drug itself, not human genetic variants affecting the drug's PK/PD. |
| popPK | Loizou_2021 | irrelevant | 0 | 0 | The study focuses on perfluorooctanoic acid (PFOA) and does not involve urokinase. |
| PD | Loizou_2021 | not_relevant | 0 | 0 | The paper focuses on Perfluorooctanoic Acid (PFOA) and does not report any pharmacodynamic or exposure-response data for urokinase. |
| PGx | Longstaff_2008 | not_relevant | 0 | 0 | The text is a review discussing the structural biology and clinical history of thrombolytics, with no data on gene variants or pharmacogenomic effects on PK/PD parameters. |
| popPK | Luo_2025 | irrelevant | 0 | 0 | The study focuses on a uPAR-targeted nanomedicine for imaging and hyperthermia, not the pharmacokinetics of the drug urokinase. |
| popPK | Lönsjö_2025 | irrelevant | 0 | 0 | The paper is a proteomic study of synovial fluid in osteoarthritis that measures urokinase-type plasminogen activator (uPA) as a biomarker, not a pharmacokinetic study of the drug urokinase. |
| PD | Mahdi_2001 | not_relevant | 0 | 0 | The paper describes cellular localization and competitive inhibition of binding/activation by antibodies, not a pharmacodynamic exposure-response or dose-response relationship for the drug urokinase. |
| PGx | Manea_2018 | not_relevant | 0 | 0 | The paper is a review of GPI-anchored proteins and their roles in congenital glycosylation disorders, mentioning the urokinase receptor only as a protein example, without reporting any pharmacogenomic effects on urokinase PK or PD parameters. |
| PD | Mao_2016 | not_relevant | 0 | 0 | The paper studies a traditional Chinese medicine formula (JPJD) and reports IC50 values for cell proliferation, but does not report a pharmacodynamic or exposure-response relationship for the drug urokinase. |
| popPK | Martin_1993 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic evaluation of fibrinolytic activity (clot lysis) where urokinase serves as a comparator, not a pharmacokinetic study reporting disposition parameters. |
| PGx | Mateusiak_2024 | not_relevant | 0 | 0 | The paper focuses on the development of anti-uPAR nanobodies for imaging and does not report pharmacogenomic effects on the PK/PD of urokinase. |
| popPK | Mukhina_2000 | irrelevant | 0 | 0 | The study investigates the mechanism of urokinase-induced chemotaxis and receptor binding in vitro, not pharmacokinetic disposition parameters. |
| popPK | Niemetz_1988 | irrelevant | 0 | 0 | The paper investigates the mechanism of a plasma factor (SKDF) and its interaction with streptokinase, using urokinase only as a negative control/comparator, and reports no pharmacokinetic parameters. |
| PD | Niemetz_1988 | not_relevant | 0 | 0 | The paper reports a dose-response relationship for streptokinase, not urokinase, and explicitly states that urokinase was unable to activate the factor. |
| PGx | Nieves_2010 | not_relevant | 0 | 0 | The paper investigates a mutated receptor (u-PAR) and its cellular effects, not a pharmacogenomic effect of a gene variant on the PK/PD of the drug urokinase. |
| popPK | Nykjaer_1994 | irrelevant | 0 | 0 | The study is a mechanistic in vitro investigation of receptor binding affinities (EC50) and does not report pharmacokinetic disposition parameters like clearance or volume. |
| PD | Nykjaer_1994 | not_relevant | 3 | 4 | The paper reports binding affinities (EC50) for receptor-ligand interactions, which are pharmacological binding parameters, but does not report a pharmacodynamic exposure-response or dose-response relationship for the drug's therapeutic effect. |
| popPK | Ochoa_2016 | irrelevant | 0 | 0 | The paper investigates the modulation of nicotinic acetylcholine receptors by LYPD6B (a urokinase receptor domain-containing protein) in Xenopus oocytes and does not report pharmacokinetic parameters for urokinase. |
| PD | Ochoa_2016 | not_relevant | 0 | 0 | The paper studies the modulation of nicotinic acetylcholine receptors by LYPD6B (a prototoxin), not the pharmacodynamics of the drug urokinase. |
| PD | Pant_2018 | not_relevant | 0 | 0 | The paper reports IC50 values for hepsin inhibitors and selectivity ratios against urokinase, but does not report a pharmacodynamic (exposure-response or dose-response) relationship for urokinase itself. |
| popPK | Pappalardo_2024 | irrelevant | 0 | 0 | The paper is a review of in silico computational methods for receptor mutations and does not contain pharmacokinetic data for urokinase. |
| PD | Pappalardo_2024 | not_relevant | 0 | 0 | The paper is a review of in silico computational methods for receptor mutations and contains no pharmacodynamic data, exposure-response analysis, or numeric PD parameters for urokinase. |
| PD | Peng_2017 | not_relevant | 3 | 2 | The paper reports in vitro IC50 values for a PAI-1 inhibitor (PAItrap-HSA), not a pharmacodynamic exposure-response or dose-response relationship for urokinase itself. |
| PGx | Peng_2017 | not_relevant | 0 | 0 | The paper describes the development of a new drug (PAItrap-HSA) and its pharmacological effects, but does not report any pharmacogenomic analysis or how genetic variants affect the PK/PD of urokinase. |
| popPK | Percha_2015 | irrelevant | 0 | 0 | The paper is a computational text-mining study and contains no pharmacokinetic data for urokinase. |
| PD | Percha_2015 | not_relevant | 0 | 0 | The paper describes a text mining algorithm for extracting drug-gene relationships from biomedical literature and does not contain any pharmacokinetic or pharmacodynamic data for urokinase. |
| PGx | Poliakov_2001 | not_relevant | 0 | 0 | The paper describes the mechanism of urokinase degradation and cellular uptake via plasmin-mediated cleavage, not the effect of a human gene variant on its pharmacokinetics or pharmacodynamics. |
| popPK | Ren_2026 | irrelevant | 0 | 0 | The paper is a bioinformatics and in-vitro study on Jingfang Granule for pulmonary fibrosis and does not involve urokinase pharmacokinetics. |
| PD | Ren_2026 | not_relevant | 0 | 0 | The paper focuses on bioinformatics, machine learning, and molecular docking for Jingfang Granule in IPF, and does not report any pharmacodynamic or exposure-response analysis for urokinase. |
| PGx | Riemenschneider_2006 | not_relevant | 0 | 0 | The paper investigates the association between a PLAU polymorphism and Alzheimer's disease pathology (amyloid plaque counts), not the pharmacokinetics or pharmacodynamics of urokinase as a therapeutic drug. |
| popPK | Rijken_2002 | irrelevant | 1 | 0 | The study is an in-vitro mechanistic binding assay characterizing receptor interaction, not a pharmacokinetic study reporting quantitative disposition parameters like clearance or volume. |
| popPK | Rotbain_2023 | irrelevant | 0 | 0 | The study measures soluble urokinase plasminogen activator receptor (suPAR) as a biomarker, not the pharmacokinetics of the drug urokinase. |
| popPK | Rovelli_1990 | irrelevant | 0 | 0 | The study is an in-vitro binding assay investigating protein-protein interactions (vitronectin, GDN, thrombin) and does not report pharmacokinetic parameters for urokinase. |
| PD | Rovelli_1990 | not_relevant | 0 | 0 | The paper reports binding affinities (EC50) for vitronectin and GDN, not a pharmacodynamic exposure-response or dose-response relationship for urokinase. |
| PD | Sarubbi_1989 | not_relevant | 3 | 2 | The paper reports qualitative similarity in dose-response curves and kinetic parameters (Km, kcat) between recombinant and natural urokinase, but does not provide specific numeric PD parameters or extractable concentration-effect data. |
| PGx | Shanmukhappa_2006 | not_relevant | 0 | 0 | The paper investigates the physiological role of endogenous urokinase-type plasminogen activator (uPA) in liver repair using knockout mice, rather than the pharmacokinetics or pharmacodynamics of exogenous urokinase therapy in humans. |
| PGx | Sobel_1990 | not_relevant | 0 | 0 | The paper studies engineered molecular variants of t-PA (a drug), not human genetic variants affecting the pharmacokinetics of urokinase. |
| PGx | Song_2012 | not_relevant | 0 | 0 | The paper investigates the therapeutic efficacy of an adenoviral vector (Ad-ECRG2) for cancer treatment, not the pharmacokinetics or pharmacodynamics of the drug urokinase. |
| popPK | Spinale_2015 | irrelevant | 0 | 0 | The study focuses on soluble urokinase-type plasminogen activator receptor (suPAR) as a biomarker in glomerular disease, not the pharmacokinetics of the drug urokinase. |
| PGx | Suzuki_2000 | not_relevant | 0 | 0 | The paper investigates the synergistic pharmacodynamic effects of endothelial products on platelet disaggregation but does not report any pharmacogenomic effects (gene variants) on urokinase PK or PD parameters. |
| popPK | Talath_2026 | irrelevant | 0 | 0 | The paper is a review of natural supplements in breast cancer therapy and does not contain any pharmacokinetic data for urokinase. |
| PD | Talath_2026 | not_relevant | 0 | 0 | The paper is a review of natural supplements in breast cancer and does not report any pharmacodynamic or exposure-response data for urokinase. |
| PGx | Tanoue_2013 | not_relevant | 0 | 0 | The paper studies zaleplon metabolism in chimeric mice and mentions urokinase only as a transgene for immunodeficiency in control mice, not as the drug of interest. |
| PGx | Tateno_2015 | not_relevant | 0 | 0 | The paper describes the generation of a novel mouse model (cDNA-uPA/SCID) for liver humanization and does not report pharmacogenomic effects on the PK/PD of urokinase as a drug. |
| PD | Teno_1993 | not_relevant | 0 | 0 | The provided text is metadata for the GROBID software and does not contain any scientific content regarding urokinase or pharmacodynamics. |
| PGx | Thomson_1999 | not_relevant | 0 | 0 | The paper is a general review of new thrombolytic drug development strategies and does not report any pharmacogenomic effects on PK or PD parameters. |
| PGx | Uno_2009 | not_relevant | 0 | 0 | The paper focuses on CYP1A1/2 expression in humanized mice and cell lines, and urokinase is only mentioned as a genetic marker for the mouse strain, not as the drug being studied. |
| PGx | Uxa_2010 | not_relevant | 0 | 0 | The study investigates genetic associations with a pathological condition (placental fibrin deposition) and does not report pharmacokinetic or pharmacodynamic parameters of urokinase as a drug. |
| PGx | Vanwolleghem_2007 | not_relevant | 0 | 0 | The paper reports a pharmacodynamic toxicity (cardiotoxicity) in a transgenic mouse model, not a pharmacokinetic or pharmacodynamic parameter of the drug urokinase. |
| PGx | Vats_2018 | not_relevant | 0 | 0 | The paper evaluates radiolabeled peptides for PET imaging and does not report pharmacogenomic effects on the PK/PD of urokinase. |
| PGx | Verstraete_1995 | not_relevant | 0 | 0 | The paper is a review of thrombolytic agents in development and does not report any pharmacogenomic effects on PK or PD parameters. |
| popPK | Wang_2021 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on marine derivatives that enhance urokinase activity in vitro, not a pharmacokinetic study of urokinase itself. |
| PD | Watanabe_2024 | not_relevant | 0 | 0 | The paper investigates the antiviral activity of SAG-524 against Hepatitis B Virus (HBV) and does not report any pharmacodynamic or exposure-response data for urokinase. |
| popPK | Wen_2023 | irrelevant | 0 | 0 | The paper is a transcriptomic and proteomic study of kidney injury markers and does not report pharmacokinetic parameters for urokinase. |
| PD | Wen_2023 | not_relevant | 0 | 0 | The paper focuses on transcriptomic and proteomic markers of kidney injury and does not report any pharmacodynamic or exposure-response analysis for urokinase. |
| popPK | Wong_2023 | irrelevant | 0 | 0 | The paper studies albumin-binding macrocyclic peptides in mice and does not involve urokinase. |
| PD | Wong_2023 | not_relevant | 0 | 0 | The paper focuses on the discovery of albumin-binding macrocyclic peptides and their pharmacokinetics (circulation half-life), but does not report a pharmacodynamic (exposure-response or dose-response) relationship for urokinase or any other drug. |
| PD | Yang_2016 | not_relevant | 0 | 0 | The paper studies the effects of AVEMAR on oral cancer cells and mentions urokinase (u-PA) only as a suppressed protein marker, not as the drug subject of a pharmacodynamic or exposure-response analysis. |
| popPK | Yang_2025 | irrelevant | 0 | 0 | The paper is a review on in silico and AI modeling tools for drug disposition across the lifespan and does not report specific pharmacokinetic parameters for urokinase. |
| PD | Yang_2025 | not_relevant | 0 | 0 | The paper is a review of in silico and AI modeling methods and does not report specific pharmacodynamic or exposure-response data for urokinase. |
| PGx | Zaitsev_2010 | not_relevant | 0 | 0 | The paper describes a novel drug delivery mechanism (RBC-targeted pro-urokinase) but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| PGx | Zeymer_1994 | not_relevant | 0 | 0 | The paper discusses the development of new thrombolytic agents and their clinical efficacy but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| PD | Zhang_2025 | not_relevant | 1 | 0 | The paper reports a single qualitative pharmacodynamic outcome (thrombus blockage rate) for a specific nanoplatform formulation but does not provide an exposure-response or dose-response analysis with numeric PD parameters for urokinase. |
| PD | Ziegler_1990 | not_relevant | 3 | 2 | The paper describes a qualitative shift in the dose-response curve of Br-cAMP on uPA mRNA accumulation in the presence of calcium, but it does not report numeric PD parameters (EC50, Emax) or a quantitative exposure-response model for urokinase itself. |
| popPK | de_2021 | irrelevant | 0 | 0 | The study is a clinical biomarker analysis for COVID-19 prognosis where urokinase-type plasminogen activator receptor (UPAR) is measured as a prognostic marker, not a pharmacokinetic study of the drug urokinase. |
| popPK | unknown_2021 | irrelevant | 0 | 0 | no_text gate: only 94 chars of text extracted (&lt; 400) |
| PD | unknown_2021 | not_relevant | 0 | 0 | The provided text is only a conference header and contains no data, analysis, or mention of urokinase pharmacodynamics. |
| popPK | unknown_2022 | irrelevant | 0 | 0 | no_text gate: only 37 chars of text extracted (&lt; 400) |
| PD | unknown_2022 | not_relevant | 0 | 0 | The provided text is only a conference title and contains no information regarding urokinase, pharmacodynamics, or exposure-response relationships. |
| popPK | unknown_2024 | irrelevant | 0 | 0 | no_text gate: only 52 chars of text extracted (&lt; 400) |
| PD | unknown_2024 | not_relevant | 0 | 0 | The provided text is a placeholder for a PDF file and contains no scientific content, data, or PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
