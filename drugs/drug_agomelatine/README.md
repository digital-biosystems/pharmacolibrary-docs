<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;agomelatine&quot;}]"></div>

# agomelatine

- **generic name:** agomelatine
- **ATC codes:** `N06AX22`
- **DrugBank:** [DB06594](https://go.drugbank.com/drugs/DB06594)
- **groups:** approved, investigational

## About

**Description.** Agomelatine is structurally closely related to melatonin. Agomelatine is a potent agonist at melatonin receptors and an antagonist at serotonin-2C (5-HT2C) receptors, tested in an animal model of depression. Agomelatine was developed in Europe by Servier Laboratories Ltd. and submitted to the European Medicines Agency (EMA) in 2005. The Committee for Medical Products for Human Use (CHMP) recommended refusal of marketing authorization on 27 July 2006. The major concern was that efficacy had not been sufficiently shown. In 2006 Servier sold the rights to develop Agomelatine in the US to Novartis.

The development for the US market was discontinued in October 2011. It is currently sold in Australia under the Valdoxan trade name.

**Indication.** Agomelatine is indicated to treat major depressive episodes in adults.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-23 19:03 | 20:37 | 0/0/0 | 0/0/0 | 1/0/0 | 134,931/6,262 | ollama / qwen3.8:27b-mtp-q8_0 | 18 | 4/14 | 16/2 | 0 |

## popPK records

_not available_

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> | **CYP2C9** | `safety` — adverse-reaction risk (HLA / safety allele) — no parameter shift | safety_allele | [Fang_2026](drugs/drug_agomelatine/pgx_Fang_2026_CYP2C9_safety.md) | Fang P et al., Effect of Cytochrome P450 2C9 genetic p…, PeerJ (2026) | [10.7717/peerj.20973](https://doi.org/10.7717/peerj.20973) |

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=agomelatine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP1A2` substrate, `CYP2C9` inhibitor/safety_allele | DrugBank actor |

<sub>Actors without a tissue in the table: HTR2C (target), MTNR1A (target), MTNR1B (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 89 matched, 78 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_7 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Xie_2019.pdf` | Xie F et al., A semiphysiological population pharmaco…, British journal of clinical… (2019) | popPK | 10 | [10.1111/bcp.13902](https://doi.org/10.1111/bcp.13902) | [30761579](https://pubmed.ncbi.nlm.nih.gov/30761579) | The paper is a population PK study of agomelatine, but the evidence only provides variability percentages (IIV/IOCV) and simulation ranges, lacking the specific central estimates for clearance, volume, or half-life. |
| `ElKady_2018.pdf` | ElKady EF et al., Optimized bio-analytical methods develo…, Journal of chromatography.… (2018) | popPK | 8 | [10.1016/j.jchromb.2018.10.018](https://doi.org/10.1016/j.jchromb.2018.10.018) | [30388703](https://pubmed.ncbi.nlm.nih.gov/30388703) | The study reports pharmacokinetic parameters for agomelatine in humans, but the specific numeric values are not present in the provided evidence text. |
| `Saiz-Rodríguez_2019.pdf` | Saiz-Rodríguez M et al., Polymorphisms in CYP1A2, CYP2C9 and ABC…, Journal of psychopharmacolo… (2019) | popPK | 8 | [10.1177/0269881119827959](https://doi.org/10.1177/0269881119827959) | [30789308](https://pubmed.ncbi.nlm.nih.gov/30789308) | The study is a relevant pharmacokinetic investigation of agomelatine, but the provided evidence contains only qualitative descriptions of parameter changes (e.g., "lower clearance") without specific numeric values for CL, V, or other PK parameters. |
| `Yang_2016.pdf` | Yang J et al., Agomelatine affects rat suprachiasmatic…, Life sciences (2016) | pd | 4 | [10.1016/j.lfs.2016.04.035](https://doi.org/10.1016/j.lfs.2016.04.035) | [27269050](https://www.ncbi.nlm.nih.gov/pubmed/27269050) | metadata signals extractable PD data (IC50) |
| `Saiz-Rodríguez_2018.pdf` | Saiz-Rodríguez M et al., Effect of ABCB1 C3435T Polymorphism on…, Basic & clinical pharmacolo… (2018) | pgx | 8 | [10.1111/bcpt.13031](https://doi.org/10.1111/bcpt.13031) | [29723928](https://www.ncbi.nlm.nih.gov/pubmed/29723928) | metadata signals extractable PGX data (ABCB1, PK/PD-context) |
| `Englisch_2019.pdf` | Englisch S et al., Response to Agomelatine Treatment is In…, Pharmacopsychiatry (2019) | pgx | 7 | [10.1055/a-0606-5240](https://doi.org/10.1055/a-0606-5240) | [29734455](https://www.ncbi.nlm.nih.gov/pubmed/29734455) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Spina_2012.pdf` | Spina E et al., Clinically significant drug interaction…, CNS drugs (2012) | pgx | 7 | [10.2165/11594710-000000000-00000](https://doi.org/10.2165/11594710-000000000-00000) | [22171584](https://www.ncbi.nlm.nih.gov/pubmed/22171584) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |

<sub>queue written 2026-09-23T18:58:21.444752+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Adair_2023 | irrelevant | 0 | 0 | The paper is a clinical efficacy study of vortioxetine where agomelatine serves only as an active comparator, and no pharmacokinetic parameters are reported. |
| PD | Adair_2023 | not_relevant | 0 | 0 | The paper focuses on vortioxetine and only mentions agomelatine as an active comparator in a separate analysis without providing any pharmacodynamic or exposure-response data for agomelatine. |
| popPK | Bertin_2023 | irrelevant | 0 | 0 | The paper describes an in-silico method for identifying synergistic drug combinations and does not report pharmacokinetic parameters for agomelatine. |
| PD | Bertin_2023 | not_relevant | 0 | 0 | The paper focuses on a machine learning method for identifying synergistic drug combinations in vitro and does not report any pharmacodynamic or exposure-response analysis for agomelatine. |
| popPK | Bhutada_2013 | irrelevant | 0 | 0 | The study is a behavioral pharmacology investigation in mice and does not report any pharmacokinetic parameters for agomelatine. |
| PD | Bhutada_2013 | not_relevant | 3 | 2 | The paper reports qualitative dose-dependent effects and specific dose-response points for agomelatine in a behavioral model, but it does not provide a formal PK/PD model, concentration-effect curve, or derived numeric PD parameters (e.g., EC50, Emax) for the drug itself. |
| PGx | Bobrov_2010 | not_relevant | 0 | 0 | The paper analyzes clinical predictors (symptoms, comorbidities) for therapeutic response, not genetic variants or pharmacokinetic parameters. |
| popPK | Cerou_2019 | irrelevant | 0 | 0 | The paper focuses on Item Response Theory for disease progression and efficacy modeling, not pharmacokinetics, and contains no PK parameters for agomelatine. |
| popPK | Chen_2024 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of quetiapine, not agomelatine. |
| PD | Chen_2024 | not_relevant | 0 | 0 | The paper focuses on population pharmacokinetics (PPK) and drug-drug interactions for quetiapine, reporting no pharmacodynamic (PD) or exposure-response relationship. |
| popPK | Cheng_2020 | irrelevant | 0 | 0 | The paper is a model-based meta-analysis of antidepressant efficacy and safety, not a pharmacokinetic study, and contains no PK parameters for agomelatine. |
| PD | Cheng_2020 | not_relevant | 2 | 1 | The paper is a meta-analysis that explicitly states no significant dose-response relationship was observed for the antidepressants, and it does not provide specific numeric PD parameters (like Emax or EC50) for agomelatine. |
| PGx | De_2014 | not_relevant | 0 | 0 | The paper is a case report on the safety of co-prescribing agomelatine with tamoxifen, focusing on CYP2D6 interactions, but it does not report a pharmacogenomic effect (gene variant) on agomelatine's PK or PD parameters. |
| popPK | ElKady_2018 | relevant | 8 | 0 | The study reports pharmacokinetic parameters for agomelatine in humans, but the specific numeric values are not present in the provided evidence text. |
| PD | ElKady_2018 | not_relevant | 0 | 0 | The study focuses exclusively on pharmacokinetic (PK) parameter comparison (Cmax, AUC) between genders and does not report any pharmacodynamic (PD) or exposure-response data. |
| popPK | Englisch_2019 | irrelevant | 0 | 0 | no_text gate: only 110 chars of text extracted (&lt; 400) |
| PD | Englisch_2019 | not_relevant | 0 | 0 | The paper reports that response is independent of dosage and smoking status, implying a lack of a dose-response relationship, and does not provide numeric PD parameters or concentration-effect curves. |
| PGx | Englisch_2019 | not_relevant | 0 | 0 | The paper investigates the impact of smoking status and dosage on treatment response, not the effect of gene variants or genotypes on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Filippova_2019 | irrelevant | 0 | 0 | The paper is a clinical review of efficacy and tolerability with no pharmacokinetic parameters or quantitative disposition data for agomelatine. |
| PD | Filippova_2019 | not_relevant | 1 | 0 | The text is a qualitative review of agomelatine's mechanism and clinical efficacy, containing no numeric PD parameters, concentration-effect data, or dose-response curves. |
| popPK | Fornaro_2010 | irrelevant | 2 | 3 | The paper is a systematic review that summarizes PK parameters (half-life, Vd) from other sources rather than reporting original quantitative disposition data or population PK models. |
| PD | Fornaro_2010 | not_relevant | 1 | 0 | The paper is a systematic review that summarizes clinical and pre-clinical evidence but does not present original data, perform PK/PD modeling, or report specific numeric PD parameters (e.g., Emax, EC50) for agomelatine. |
| popPK | Gahr_2014 | relevant | 4 | 3 | The paper is a narrative review that reports some quantitative PK parameters (clearance ~1100 ml/min, half-lives 0.2/1.4h, bioavailability 3-4%) for agomelatine, but it lacks a full compartmental or population-PK model with volume and intercompartmental clearance values. |
| PD | Gahr_2014 | not_relevant | 1 | 0 | The paper is a narrative review summarizing efficacy and safety data but does not present original PK/PD modeling or extractable numeric PD parameters (e.g., Emax, EC50) for agomelatine. |
| PGx | Gahr_2014_2 | not_relevant | 0 | 0 | The paper discusses the safety and hepatotoxicity profile of agomelatine but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Gao_2023 | irrelevant | 0 | 0 | The study focuses on the toxicokinetics of GW117, a new drug, with agomelatine mentioned only as a comparator in the introduction. |
| PD | Gao_2023 | not_relevant | 1 | 0 | The study is a 28-day toxicity and toxicokinetics study in beagle dogs that reports qualitative dose-dependent toxicity (GI reactions) and PK parameters, but it does not provide a quantitative pharmacodynamic model or numeric PD parameters (e.g., Emax, EC50) for agomelatine or GW117. |
| popPK | Günaydın_2019 | irrelevant | 0 | 0 | The study is a mechanistic/behavioral investigation of agomelatine's effects on Parkinson's disease pathology in rats and does not report any pharmacokinetic parameters. |
| PD | Günaydın_2019 | not_relevant | 1 | 0 | The study is a single-dose animal experiment (40 mg/kg) reporting qualitative worsening of symptoms and biochemical markers, without any concentration-effect data, multiple dose levels, or numeric PD parameters. |
| PGx | Hardeland_2016 | not_relevant | 2 | 0 | The paper is a general review of melatoninergic agonists and mentions genetic factors as theoretical limits but does not report specific pharmacogenomic effects on agomelatine PK/PD parameters. |
| popPK | Hayasaka_2015 | irrelevant | 0 | 0 | The paper is a meta-analysis of dose equivalence in clinical trials and does not report any pharmacokinetic parameters (CL, V, ka, etc.) for agomelatine. |
| PD | Hayasaka_2015 | not_relevant | 1 | 0 | The paper reports dose equivalence ratios derived from clinical trial data but does not provide a pharmacodynamic model, concentration-effect curve, or numeric PD parameters (e.g., Emax, EC50) for agomelatine. |
| PGx | He_2018 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction (celecoxib inhibiting agomelatine metabolism) rather than a pharmacogenomic effect (gene variant/genotype). |
| popPK | Hengartner_2020 | irrelevant | 0 | 0 | The paper is a descriptive analysis of protracted withdrawal syndrome narratives and does not report any pharmacokinetic parameters for agomelatine. |
| PD | Hengartner_2020 | not_relevant | 0 | 0 | The paper is a descriptive analysis of consumer narratives regarding protracted withdrawal syndrome and does not contain any pharmacokinetic or pharmacodynamic modeling, concentration-effect data, or numeric PD parameters for agomelatine. |
| PGx | Howland_2009 | not_relevant | 0 | 0 | The paper discusses general pharmacokinetics and drug interactions (e.g., CYP1A2 inhibitors, smoking, liver function) but does not report specific gene variants or genotypes affecting agomelatine PK/PD. |
| popPK | Jani_2019 | irrelevant | 1 | 0 | The study focuses on formulation development and pharmacodynamics (antidepressant activity) without reporting quantitative pharmacokinetic parameters such as clearance or volume of distribution. |
| PD | Jani_2019 | not_relevant | 1 | 0 | The paper reports a qualitative pharmacodynamic observation (reduction in immobility time) but provides no numeric PD parameters, concentration-effect data, or dose-response curve. |
| popPK | Jellimann_1999 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on melatonin receptor ligands where agomelatine is used only as a reference compound, with no pharmacokinetic parameters reported. |
| PD | Jellimann_1999 | not_relevant | 1 | 0 | The paper focuses on the synthesis and characterization of new melatonin receptor ligands; agomelatine is mentioned only as a reference compound with no specific numeric PD parameters or exposure-response data provided for it. |
| popPK | Konstantakopoulos_2020 | irrelevant | 0 | 0 | The paper is a review of the discovery and development of agomelatine focusing on pharmacodynamics and clinical efficacy, with no quantitative pharmacokinetic parameters reported. |
| PD | Konstantakopoulos_2020 | not_relevant | 2 | 1 | The paper is a review of the discovery and development history, providing only a qualitative summary of the pharmacodynamic profile without reporting specific numeric PD parameters or exposure-response curves. |
| popPK | Lalovic_2020 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of lemborexant, not agomelatine. |
| PD | Lalovic_2020 | not_relevant | 0 | 0 | The paper analyzes lemborexant, not agomelatine, and reports no exposure-response relationship for the target drug. |
| popPK | Leal_2022 | irrelevant | 0 | 0 | The paper is a clinical epidemiological study on drug-drug interaction prevalence and adverse outcomes, not a pharmacokinetic study, and contains no PK parameters for agomelatine. |
| PD | Leal_2022 | not_relevant | 0 | 0 | The paper is a large-scale epidemiological study on drug-drug interaction prevalence and adverse outcomes (mortality/readmission), not a pharmacodynamic or exposure-response analysis; it reports hazard ratios for clinical outcomes, not PD parameters like Emax or EC50. |
| PGx | Lee_2019 | not_relevant | 0 | 0 | The paper focuses on the physical chemistry and polymorphism of agomelatine cocrystals, containing no pharmacogenomic or PK/PD data. |
| popPK | Li_2017 | relevant | 4 | 5 | The study reports non-compartmental PK parameters (Cmax, AUC, t1/2) for agomelatine, but lacks compartmental model parameters (CL, V, Q, ka) required for population PK extraction. |
| PGx | Liao_2016 | not_relevant | 0 | 0 | The paper investigates the effect of a cyclodextrin formulation on agomelatine pharmacokinetics, not the effect of a gene variant or genotype. |
| popPK | Lin_2025 | irrelevant | 0 | 0 | The study is a mechanistic/behavioral investigation of agomelatine's neuroprotective effects in a Parkinson's disease rat model and does not report any pharmacokinetic parameters (e.g., clearance, volume, half-life). |
| PD | Lin_2025 | not_relevant | 2 | 1 | The study is a preclinical animal model investigating qualitative effects and correlations, not a pharmacokinetic/pharmacodynamic (PK/PD) analysis with numeric exposure-response parameters. |
| PGx | Liu_2016 | not_relevant | 0 | 0 | The paper characterizes metabolic pathways and enzymes (CYP1A2, CYP3A4) but does not report pharmacogenomic effects of specific gene variants on PK/PD parameters. |
| popPK | Martínez-Águila_2013 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of intraocular pressure reduction in rabbits and does not report any pharmacokinetic parameters for agomelatine. |
| popPK | Naveed_2022 | irrelevant | 0 | 0 | The paper is a narrative review discussing the mechanism of action and clinical efficacy of agomelatine without reporting any original quantitative pharmacokinetic parameters. |
| PD | Naveed_2022 | not_relevant | 1 | 0 | The text is a qualitative review discussing the mechanism of action and general properties of agomelatine without reporting any specific numeric pharmacodynamic parameters, exposure-response data, or dose-effect curves. |
| popPK | Nemr_2022 | irrelevant | 0 | 0 | The study focuses on the formulation and in vitro release of agomelatine bilosomes for ocular delivery, reporting no systemic pharmacokinetic parameters such as clearance, volume of distribution, or half-life. |
| popPK | Nemr_2023 | irrelevant | 1 | 0 | The study focuses on formulation development and in vivo pharmacodynamics (intraocular pressure) rather than reporting quantitative systemic pharmacokinetic parameters (CL, V, ka) for agomelatine. |
| PD | Nemr_2023 | not_relevant | 3 | 2 | The paper reports in vivo pharmacodynamic endpoints (IOP reduction) for a formulation but does not provide a concentration-effect or dose-response model with numeric PD parameters like Emax or EC50. |
| PGx | Owen_2009 | not_relevant | 0 | 0 | The text describes general pharmacology and clinical efficacy of agomelatine but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Perugi_2015 | irrelevant | 1 | 0 | The paper is a review/expert opinion discussing the role of agomelatine in OCD and does not report original quantitative pharmacokinetic parameter values. |
| PD | Perugi_2015 | not_relevant | 2 | 0 | The text is a review/expert opinion discussing the pharmacodynamics of agomelatine qualitatively without providing specific numeric PD parameters or concentration-effect data. |
| popPK | Poleszak_2016 | irrelevant | 1 | 0 | The study is a pharmacodynamic investigation in mice using behavioral tests, and while it mentions HPLC measurement of drug levels, it does not report quantitative pharmacokinetic parameters (CL, V, ka, etc.) for agomelatine. |
| PD | Poleszak_2016 | not_relevant | 1 | 0 | The paper reports qualitative behavioral effects and drug concentrations but does not provide numeric PD parameters or an exposure-response curve. |
| popPK | Prajapati_2018 | relevant | 4 | 2 | The study reports PK parameters (AUC, Cmax) for agomelatine in rats, but lacks compartmental model parameters (CL, V, ka) and the specific numeric values for Cmax/Tmax are in a table not fully provided in the evidence. |
| PD | Prajapati_2018 | not_relevant | 2 | 0 | The paper focuses on formulation and PK (bioavailability enhancement) with only a qualitative mention of pharmacodynamic efficacy, lacking any numeric concentration-effect or dose-response parameters. |
| PGx | Saiz-Rodríguez_2018 | not_relevant | 0 | 0 | The paper explicitly states that the ABCB1 C3435T polymorphism had no effect on agomelatine pharmacokinetics. |
| popPK | Saiz-Rodríguez_2019 | relevant | 8 | 2 | The study is a relevant pharmacokinetic investigation of agomelatine, but the provided evidence contains only qualitative descriptions of parameter changes (e.g., "lower clearance") without specific numeric values for CL, V, or other PK parameters. |
| PD | Saiz-Rodríguez_2019 | not_relevant | 1 | 0 | The study focuses on pharmacokinetic parameters (clearance, AUC, Tmax) influenced by genotypes and explicitly states that agomelatine did not produce changes in pharmacodynamic endpoints (blood pressure, heart rate, QT interval), providing no numeric PD parameters or exposure-response relationship. |
| popPK | Shagiakhmetov_2017 | irrelevant | 0 | 0 | The paper is a review of the mechanism of action and efficacy of agomelatine, containing no pharmacokinetic data or quantitative disposition parameters. |
| PD | Shagiakhmetov_2017 | not_relevant | 1 | 0 | The text is a qualitative review of the mechanism of action and clinical efficacy, containing no numeric PD parameters, concentration-effect curves, or PK/PD modeling data. |
| popPK | Socała_2017 | irrelevant | 1 | 0 | The study is a behavioral pharmacology experiment in mice that measures drug concentrations in serum and brain to assess interactions, but it does not report quantitative pharmacokinetic parameters (CL, V, ka, t1/2) or a compartmental model for agomelatine. |
| PD | Socała_2017 | not_relevant | 2 | 1 | The study reports qualitative changes in immobility time and drug concentrations but does not provide numeric PD parameters (e.g., Emax, EC50) or a fitted concentration-effect curve for agomelatine. |
| popPK | Souza_2018 | irrelevant | 0 | 0 | The study is a behavioral pharmacology experiment in rats investigating circadian rhythms and depressive-like behavior, with no pharmacokinetic parameters reported. |
| PD | Souza_2018 | not_relevant | 1 | 0 | The study is a qualitative behavioral pharmacology experiment in rats that reports no plasma concentrations, PK data, or quantitative dose-response parameters (e.g., EC50, Emax) for agomelatine. |
| PGx | Spina_2012 | not_relevant | 0 | 0 | The paper is a review of drug-drug interactions (CYP inhibition/induction) and does not report pharmacogenomic effects (gene variants) on agomelatine PK/PD. |
| popPK | Sundell_2020 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of ethambutol, not agomelatine. |
| PD | Sundell_2020 | not_relevant | 0 | 0 | The paper focuses on the population pharmacokinetics and pharmacogenetics of ethambutol, not agomelatine, and does not report any pharmacodynamic or exposure-response relationships. |
| popPK | Tawfik_2025 | irrelevant | 1 | 0 | The study focuses on the formulation and pharmacodynamics (IOP reduction) of agomelatine leciplexes, reporting no quantitative pharmacokinetic disposition parameters (CL, V, ka) for the drug. |
| PD | Tawfik_2025 | not_relevant | 3 | 2 | The paper reports a single maximum effect value (74.2% IOP reduction) and residence time for a specific formulation compared to a control, but lacks concentration-effect data, dose-response curves, or numeric PD parameters (Emax, EC50) required for an extractable PD relationship. |
| popPK | Tu_2014 | irrelevant | 0 | 0 | The paper is a case report describing a psychiatric adverse event (hypomania) and contains no pharmacokinetic data or quantitative disposition parameters for agomelatine. |
| PD | Tu_2014 | not_relevant | 0 | 0 | The paper is a single case report of an adverse event (hypomania) and does not contain any pharmacokinetic data, concentration-effect analysis, or numeric PD parameters. |
| PGx | Wang_2021 | not_relevant | 2 | 0 | The paper is a case report linking CYP1A2 polymorphism to liver injury (safety/PD toxicity) but does not report quantitative changes in pharmacokinetic parameters (e.g., AUC, Cmax) or standard pharmacodynamic efficacy parameters. |
| popPK | Wang_2026 | irrelevant | 1 | 1 | The study focuses on neuroprotection and glymphatic function in a PD model, reporting only single-point brain concentrations rather than quantitative pharmacokinetic disposition parameters (CL, V, ka). |
| PD | Wang_2026 | not_relevant | 2 | 1 | The paper reports brain concentrations of agomelatine and qualitative/semi-quantitative effects on pathology and glymphatic function, but does not provide a dose-response curve, Emax/EC50 parameters, or a formal PK/PD model linking exposure to effect. |
| popPK | Wen_2025 | irrelevant | 0 | 0 | The paper is a meta-analysis of gastrointestinal adverse effects and does not report pharmacokinetic parameters for agomelatine. |
| popPK | Xie_2019 | relevant | 10 | 2 | The paper is a population PK study of agomelatine, but the evidence only provides variability percentages (IIV/IOCV) and simulation ranges, lacking the specific central estimates for clearance, volume, or half-life. |
| PD | Xie_2019 | not_relevant | 0 | 0 | The paper focuses exclusively on the population pharmacokinetic (PK) modeling of agomelatine and its metabolites, with no mention of pharmacodynamic (PD) endpoints, exposure-response relationships, or dose-effect analyses. |
| popPK | Yang_2016 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of receptor effects on neurons and does not report pharmacokinetic disposition parameters. |
| PGx | Yao_2025 | not_relevant | 0 | 0 | The paper discusses the metabolic profile of agomelatine in the context of insulin resistance but does not report any pharmacogenomic effects on its PK or PD parameters. |
| PGx | Yasar_2018 | not_relevant | 0 | 0 | The text is a letter to the editor discussing drug-drug interactions (celecoxib inhibiting agomelatine metabolism) and enzyme roles, but it does not report any pharmacogenomic effects (gene variants/genotypes) on PK or PD parameters. |
| popPK | Zangani_2021 | irrelevant | 0 | 0 | The paper is a systematic review and meta-analysis of the efficacy of amisulpride, not a pharmacokinetic study of agomelatine. |
| PD | Zangani_2021 | not_relevant | 0 | 0 | The paper is a meta-analysis of amisulpride (not agomelatine) and reports clinical efficacy outcomes (SMD, OR) rather than pharmacodynamic parameters (Emax, EC50) or exposure-response relationships. |
| popPK | Zeiss_2024 | irrelevant | 0 | 0 | The paper is a pharmacovigilance study analyzing adverse drug reactions (sexual dysfunction) and does not report any pharmacokinetic parameters for agomelatine. |
| PD | Zeiss_2024 | not_relevant | 1 | 0 | The study is a pharmacovigilance disproportionality analysis (RORs) and receptor affinity correlation, not a PK/PD or dose-response study with numeric PD parameters for agomelatine. |
| PGx | Zhou_2014 | not_relevant | 0 | 0 | The paper investigates the effect of solid-state polymorphs on bioavailability, not the effect of genetic variants on pharmacokinetics or pharmacodynamics. |
| popPK | Zhou_2026 | irrelevant | 0 | 0 | The paper is a clinical trial evaluating the efficacy of agomelatine for schizophrenia and EEG biomarkers, containing no pharmacokinetic data or disposition parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
