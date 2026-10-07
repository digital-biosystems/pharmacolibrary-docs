<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R07A&quot;,&quot;href&quot;:&quot;atc/R07A.md&quot;},{&quot;label&quot;:&quot;Lumacaftor&quot;}]"></div>

# Lumacaftor

- **generic name:** Lumacaftor
- **ATC codes:** `R07AX30`
- **DrugBank:** [DB09280](https://go.drugbank.com/drugs/DB09280) · **PubChem:** [CID 16678941](https://pubchem.ncbi.nlm.nih.gov/compound/16678941)
- **molar mass:** 452.414 g/mol (C24H18F2N2O5) — DrugBank
- **groups:** approved, investigational

## About

Lumacaftor is a medicine used to treat cystic fibrosis, given together with ivacaftor to help the faulty CFTR protein work better. It is an approved drug used in combination therapy for people with cystic fibrosis, mainly in countries where the combination product is authorised.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q6703005](https://www.wikidata.org/wiki/Q6703005) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 17:55 | 7:51 | 0/0/0 | 0/1/1 | 0/0/1 | 329,362/5,369 | einfracz / qwen3.8-27b | 27 | 1/21 | 27/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> | [Beuschlein_2024_FEV1](drugs/drug_lumacaftor/pd_Beuschlein_2024_FEV1.md) | lung function ← lumacaftor · direct Emax (saturable) effect | — | Beuschlein F et al., European Society of Endocrinology and E…, The Journal of clinical end… (2024) | [10.1210/clinem/dgae250](https://doi.org/10.1210/clinem/dgae250) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Beuschlein_2024_PPA](drugs/drug_lumacaftor/pd_Beuschlein_2024_PPA.md) | plasma protein A ← lumacaftor · direct Emax (saturable) effect | — | Beuschlein F et al., European Society of Endocrinology and E…, The Journal of clinical end… (2024) | [10.1210/clinem/dgae250](https://doi.org/10.1210/clinem/dgae250) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Hanafin_2021_none](drugs/drug_lumacaftor/pd_Hanafin_2021_none.md) | none ← none · model not identified | — | Hanafin PO et al., Insights Into Patient Variability Durin…, Frontiers in pharmacology (2021) | [10.3389/fphar.2021.577263](https://doi.org/10.3389/fphar.2021.577263) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **CFTR** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Efremova_2024](drugs/drug_lumacaftor/pgx_Efremova_2024_CFTR_Q100.md) | Efremova A et al., Estimation of Chloride Channel Residual…, International journal of mo… (2024) | [10.3390/ijms251910424](https://doi.org/10.3390/ijms251910424) |

<details class="pk-legend"><summary>What the PGx badges mean — evidence, and whether a model runs</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>the paper gives the effect of each phenotype (or genotype) on a named model parameter — a θ per category.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>the effect comes from a CPIC / DPWG dosing guideline, not from this paper's numbers.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>the paper's popPK model runs per phenotype in the browser (Simulation tab); its PGx Modelica model is under Models.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>a PGx Modelica model exists but has no in-browser simulator.</td></tr></tbody></table></details>

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=lumacaftor) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inducer/inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` inducer/inhibitor | DrugBank actor |
| absorption | liver | `ABCB1` inducer/inhibitor | DrugBank actor |
| absorption | placenta | `ABCB1` inducer/inhibitor | DrugBank actor |
| absorption | small intestine | `ABCB1` inducer/inhibitor | DrugBank actor |
| absorption | testis | `ABCB1` inducer/inhibitor | DrugBank actor |
| distribution | blood | `ALB` carrier | DrugBank actor |
| metabolism | liver | `CYP2B6` inducer, `CYP2C19` inducer, `CYP2C8` inducer/inhibitor, `CYP2C9` inducer/inhibitor, `CYP3A4` inducer | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: CFTR (modulator), CFTR (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 88 matched, 82 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Bouazza_2024.pdf` | Bouazza N et al., Lumacaftor/Ivacaftor Population Pharmac…, Clinical pharmacokinetics (2024) | popPK | 10 | [10.1007/s40262-023-01342-3](https://doi.org/10.1007/s40262-023-01342-3) | [38310629](https://pubmed.ncbi.nlm.nih.gov/38310629) | The paper reports a population PK model for lumacaftor, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |

<sub>queue written 2026-10-07T17:53:55.991573+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ahmadi_2025 | irrelevant | 0 | 0 | This is an in silico molecular docking study of lumacaftor against dengue virus RdRp; it reports binding energies and ADME predictions, but no quantitative population pharmacokinetic parameters (CL, V, Q, ka) for lumacaftor. |
| popPK | Ambrosetti_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics (channel activity and processing) of lumacaftor in cell lines, not on its pharmacokinetic disposition parameters. |
| PGx | Bali_2016 | not_relevant | 0 | 0 | The paper reports a pharmacodynamic interaction between CFTR modulators on a protein variant in cell lines, not a pharmacogenomic effect of a gene variant on the PK/PD of lumacaftor. |
| popPK | Bentley_2021 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for posaconazole, not lumacaftor; lumacaftor is mentioned only as a drug interacting with posaconazole. |
| popPK | Beuschlein_2024 | irrelevant | 0 | 0 | The paper is a clinical guideline regarding glucocorticoid-induced adrenal insufficiency and does not mention lumacaftor or provide any pharmacokinetic parameters for it. |
| PGx | Bolleddula_2022 | not_relevant | 0 | 0 | The paper is a review on alternative CYP3A inducers for drug-drug interaction studies and does not report pharmacogenomic effects on the PK/PD of lumacaftor. |
| popPK | Bouazza_2024 | relevant | 10 | 2 | The paper reports a population PK model for lumacaftor, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| PGx | Carter_2016 | not_relevant | 3 | 5 | This is a broad review of CF pharmacogenetics and treatments, and it does not report specific gene variant-to-PK/PD parameter effects for lumacaftor. |
| PGx | Choong_2022 | not_relevant | 0 | 0 | The paper discusses PK/PD of lumacaftor but does not report specific gene variant effects on pharmacokinetics or pharmacodynamics; it is a review of TDM and general PK variability. |
| PGx | Cigana_2023 | not_relevant | 0 | 0 | The study evaluates the effect of bacterial infection on PK and direct antimicrobial activity, but does not report any association between genetic variants/genotypes and pharmacokinetic or pharmacodynamic parameters of lumacaftor. |
| PGx | Colombo_2021 | not_relevant | 0 | 0 | The study evaluates clinical efficacy (glucose metabolism) of lumacaftor/ivacaftor in CF patients but does not investigate pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Ding_2022 | irrelevant | 0 | 0 | The paper is a review of population pharmacokinetic models for posaconazole, not lumacaftor. |
| PGx | Efremova_2024 | not_relevant | 6 | 7 | The study reports the effect of the gene variant [L467F;F508del] on the pharmacodynamic efficacy (CFTR function/organoid swelling) of lumacaftor-containing combinations, showing abolished efficacy, but it does not report PK parameter changes or quantitative pharmacogenomic effect sizes (e.g., fold-changes in AUC or specific PD metric shifts attributed to the variant compared to wild-type). |
| popPK | Habler_2022 | irrelevant | 1 | 0 | This is a bioanalytical method validation paper for a therapeutic drug monitoring assay, not a pharmacokinetic study, and it reports no quantitative PK parameters (CL, V, t1/2, etc.) for lumacaftor. |
| PGx | Hammond_2018 | not_relevant | 0 | 0 | The paper discusses clinical use and efficacy in acute deterioration but does not report any genetic variant-specific changes in pharmacokinetic or pharmacodynamic parameters of lumacaftor. |
| popPK | Harwood_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of tobramycin in children with cystic fibrosis, and lumacaftor is only listed as a concomitant CFTR modulator medication. |
| PGx | Heltshe_2017 | not_relevant | 0 | 0 | The paper reports pregnancy rates and outcomes, not the effect of genetic variants on the pharmacokinetics or pharmacodynamics of lumacaftor. |
| PGx | Heneghan_2023 | not_relevant | 0 | 0 | The paper is a clinical outcome review of CFTR modulators and does not report pharmacokinetic or pharmacodynamic parameter changes driven by gene variants. |
| PGx | Hong_2023 | not_relevant | 0 | 0 | The paper reviews drug-drug interactions involving CYP enzymes and transporters, not pharmacogenomic effects of gene variants. |
| popPK | Hoppe_2025 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of vanzacaftor-tezacaftor-deutivacaftor, not lumacaftor. |
| PGx | Iftikhar_2025 | not_relevant | 0 | 0 | The paper is a network meta-analysis comparing clinical efficacy outcomes (ppFEV1, SwCl) of CFTR modulators and does not report pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters of lumacaftor. |
| PGx | Jackson_2026 | not_relevant | 0 | 0 | The paper is a review on CFTR modulator eligibility and does not report specific pharmacogenomic effects on lumacaftor PK/PD. |
| PGx | Kleinfelder_2026 | not_relevant | 2 | 2 | The paper reports clinical responses (CFTR function) to CFTR modulators, not how genetic variants modify the PK/PD of lumacaftor itself. |
| PGx | Lim_2026 | not_relevant | 0 | 0 | The study examines the effect of liver disease (a clinical phenotype) on pharmacokinetics, not a specific gene variant or genotype. |
| popPK | Lueangaramkul_2026 | irrelevant | 0 | 0 | The study is an in silico and in vitro antiviral screening for feline infectious peritonitis, reporting EC50/IC50 values for viral inhibition but no pharmacokinetic disposition parameters (CL, V, etc.) for lumacaftor. |
| PGx | Paglialunga_2023 | not_relevant | 0 | 0 | The paper is a review on N-nitrosamine impurities and drug development; it does not discuss lumacaftor or pharmacogenomics. |
| PGx | Pranke_2018 | not_relevant | 0 | 0 | The study investigates the functional rescue of CFTR proteins (a pharmacodynamic effect on the disease target) using ivacaftor and lumacaftor, but does not report on how genetic variants affect the pharmacokinetics (PK) or pharmacodynamics (PD) of the drugs themselves. |
| PGx | Presti_2026 | not_relevant | 0 | 0 | The paper reports clinical outcomes and safety, not pharmacokinetic/pharmacodynamic changes driven by gene variants. |
| PGx | Pócsi_2023 | not_relevant | 0 | 0 | The paper investigates the correlation between a biomarker (HE4) and clinical response (FEV1) to lumacaftor/ivacaftor but does not report how genetic variants alter the PK or PD parameters of the drug itself. |
| PGx | R_2024 | not_relevant | 1 | 0 | The text is a general review of precision medicine in CF and mentions lumacaftor only as an example of a drug class, without reporting any specific pharmacogenomic data or PK/PD parameters for it. |
| PGx | Ratjen_2017 | not_relevant | 0 | 0 | The paper is a clinical efficacy trial for CFTR F508del homozygotes and does not report pharmacogenomic effects on the PK/PD parameters of lumacaftor. |
| PGx | Ratjen_2025 | not_relevant | 2 | 5 | The paper describes the use of an in vitro surrogate marker (theratyping) to predict clinical response to modulators, but does not report genetic effects on lumacaftor pharmacokinetics or direct pharmacodynamics. |
| PGx | Rayment_2022 | not_relevant | 0 | 0 | The study assesses safety, PK, and PD in children with a specific disease genotype (F508del) but does not report pharmacogenomic effects (e.g., metabolic gene variants) on PK/PD parameters. |
| PGx | Sala_2018 | not_relevant | 0 | 0 | The text is a general review of tezacaftor and mentions lumacaftor only in a comparative clinical context (efficacy/safety), with no discussion of pharmacogenomics or gene variants affecting PK/PD. |
| PGx | Schneider_2018 | not_relevant | 0 | 0 | The study investigates drug-drug interactions (CYP3A4 induction) and general patient variability, but does not report pharmacogenomic effects based on specific gene variants or genotypes. |
| PGx | Sermet-Gaudelus_2026 | not_relevant | 0 | 0 | The paper reports clinical outcomes of elexacaftor-tezacaftor-ivacaftor, not the pharmacokinetics or pharmacodynamics of lumacaftor. |
| popPK | Singh_2020 | irrelevant | 0 | 0 | The paper focuses on the in vitro biological characterization of a new corrector (ABBV-2222), using lumacaftor only as a comparator for potency and DDI, without reporting any PK parameters for lumacaftor. |
| PGx | Smeets_2024 | not_relevant | 0 | 0 | The paper describes a drug-drug interaction between lumacaftor and triazoles, not a pharmacogenomic effect on a PK/PD parameter of lumacaftor. |
| PGx | Terlizzi_2021 | not_relevant | 1 | 5 | The paper reports clinical efficacy endpoints (sweat chloride, lung clearance index) in a specific CFTR genotype, which are PD measures of disease status or drug activity, not pharmacokinetic parameters or standard pharmacodynamic parameters of the drug itself (e.g., receptor binding, concentration-response curve). |
| popPK | Truong_2025 | irrelevant | 0 | 0 | The study models the pharmacokinetics of the drug combination elexacaftor/tezacaftor/ivacaftor (ETI), and lumacaftor is not the subject drug nor included in the PK model (it is only mentioned in a citation regarding ivacaftor). |
| popPK | Tsai_2020 | irrelevant | 5 | 0 | While the paper describes a PBPK model for lumacaftor, it is a co-administered/transitioning agent rather than the primary subject, and all specific numeric parameter values are referenced as being in Supplementary Table S2 which is not provided in the evidence. |
| PGx | Tsai_2020 | not_relevant | 0 | 0 | The paper models pharmacokinetic transitions between CFTR modulators based on CYP3A induction, but does not report or analyze the impact of specific genetic variants (genotypes) on drug exposure or efficacy. |
| PGx | Yu_2017 | not_relevant | 0 | 0 | The paper discusses lumacaftor as a perpetrator of CYP3A induction (drug-drug interaction) in a general review of 2015 NDAs, but it does not report pharmacogenomic effects on lumacaftor's own PK or PD parameters. |
| PGx | Yu_2018 | not_relevant | 0 | 0 | This paper focuses on drug-drug interactions with lumacaftor as a perpetrator and contains no information on pharmacogenomic (gene variant) effects on its PK/PD. |
| popPK | Zhang_2026 | irrelevant | 0 | 0 | The paper is an in-vitro antibacterial drug discovery study and does not involve lumacaftor or any pharmacokinetic analysis. |
| PGx | van_2020 | not_relevant | 0 | 0 | The study evaluates the efficacy and safety of adding GLPG2737 to lumacaftor/ivacaftor in a specific population (F508del homozygous) but does not report genotype-stratified pharmacokinetic or pharmacodynamic effects of lumacaftor itself. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
