<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01B&quot;,&quot;href&quot;:&quot;atc/L01B.md&quot;},{&quot;label&quot;:&quot;cladribine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Cladribine_Lu2024_reference&quot;,&quot;label&quot;:&quot;Lu_2024_reference&quot;,&quot;href&quot;:&quot;drugs/drug_cladribine/Cladribine_Lu2024_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cladribine_Lindemalm2005_interindividual_variability&quot;,&quot;label&quot;:&quot;Lindemalm_2005_interindividual_variability&quot;,&quot;href&quot;:&quot;drugs/drug_cladribine/Cladribine_Lindemalm2005_interindividual_variability.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cladribine_Lindemalm2005_population_average&quot;,&quot;label&quot;:&quot;Lindemalm_2005_population_average&quot;,&quot;href&quot;:&quot;drugs/drug_cladribine/Cladribine_Lindemalm2005_population_average.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cladribine_Savic2017_reference&quot;,&quot;label&quot;:&quot;Savic_2017_reference&quot;,&quot;href&quot;:&quot;drugs/drug_cladribine/Cladribine_Savic2017_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# cladribine

- **generic name:** cladribine
- **ATC codes:** `L01BB04`, `L04AA40`
- **DrugBank:** [DB00242](https://go.drugbank.com/drugs/DB00242)
- **groups:** approved, investigational

## About

**Description.** Cladribine is a purine analogue or a chlorinated derivative of adenine [A263733] that causes apoptosis of B and T lymphocytes.[A350] Cladribine was first approved in the United States in 1993 [A263713] initially as a treatment for a number of hematological malignancies; currently, it is approved for the treatment of hairy cell leukemia.[A263733] In 2017 in Europe and in 2019 in the United States, cladribine was also approved for the treatment multiple sclerosis.[A263718]

**Indication.** Intravenous cladribine is indicated for the treatment of active Hairy Cell Leukemia as defined by clinically significant anemia, neutropenia, thrombocytopenia or disease-related symptoms.[L50693]

Oral cladribine is indicated for the treatment of relapsing forms of multiple sclerosis (MS), including relapsing-remitting disease and active secondary progressive disease, in adults. Because of its safety profile, the use of cladribine is generally recommended for patients who have had an inadequate response to, or are unable to tolerate, an alternate drug indicated for the treatment of MS.[L50688, L50708]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-15 06:28 | 10:17 | 3/1/0 | 0/0/0 | 0/0/0 | 147,690/7,094 | ollama / qwen3.8:27b-mtp-q8_0 | 13 | 3/10 | 13/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> | [Lu_2024_reference](drugs/drug_cladribine/Cladribine_Lu2024_reference.md) | Lu H et al., Asia-inclusive drug development leverag…, Clinical and translational… (2024) | [10.1111/cts.70050](https://doi.org/10.1111/cts.70050) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: T1_t_half_beta</sub><br><sub>route_to: `scholar`</sub> | [Lindemalm_2005_interindividual_variability](drugs/drug_cladribine/Cladribine_Lindemalm2005_interindividual_variability.md) | Lindemalm S et al., Application of population pharmacokinet…, BMC pharmacology (2005) | [10.1186/1471-2210-5-4](https://doi.org/10.1186/1471-2210-5-4) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: T1_t_half_beta</sub><br><sub>route_to: `scholar`</sub> | [Lindemalm_2005_population_average](drugs/drug_cladribine/Cladribine_Lindemalm2005_population_average.md) | Lindemalm S et al., Application of population pharmacokinet…, BMC pharmacology (2005) | [10.1186/1471-2210-5-4](https://doi.org/10.1186/1471-2210-5-4) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C7 apparent-parameter coherence violated (double correction)</sub><br><sub>route_to: `human_review`</sub> | [Savic_2017_reference](drugs/drug_cladribine/Cladribine_Savic2017_reference.md) | Savic RM et al., Population Pharmacokinetics of Cladribi…, Clinical pharmacokinetics (2017) | [10.1007/s40262-017-0516-6](https://doi.org/10.1007/s40262-017-0516-6) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=cladribine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| absorption | mammary gland | `ABCG2` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| distribution | blood | `SLC29A1` unknown | DrugBank actor |
| distribution | liver | `SLC29A1` unknown | DrugBank actor |
| metabolism | liver | <sub>“…haracterized; however, extensive whole blood and negligible hepatic enzyme metabolism was…”</sub> | prose |
| excretion | kidney | <sub>“…e administered dose has been reported to be excreted in the urine of patients with solid t…”</sub> | prose |

<sub>Actors without a tissue in the table: ADA (inhibitor), DCK (substrate), DGUOK (substrate), DNA (disruptor), DNA (other/unknown), PARP1 (inducer), PNP (inducer), POLA1 (inhibitor), POLE (inhibitor), POLE2 (inhibitor), POLE3 (inhibitor), POLE4 (inhibitor), RRM1 (inhibitor), RRM2 (inhibitor), RRM2B (inhibitor), SLC28A3 (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 38 matched, 38 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 4  ·  extracted 1  ·  needs_review 2  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Kearns_1994.pdf` | Kearns CM et al., Pharmacokinetics of cladribine (2-chlor…, Cancer research (1994) | popPK | 10 | not captured | [7906999](https://pubmed.ncbi.nlm.nih.gov/7906999) | The paper reports quantitative pharmacokinetic parameters (clearance, volume of distribution, half-life) for cladribine in children, with all numeric values explicitly present in the text. |
| `Sonderegger_2000.pdf` | Sonderegger T et al., Pharmacokinetics of 2-chloro-2'-deoxyad…, Cancer chemotherapy and pha… (2000) | popPK | 10 | [10.1007/s002800000129](https://doi.org/10.1007/s002800000129) | [10912576](https://pubmed.ncbi.nlm.nih.gov/10912576) | The study reports quantitative pharmacokinetic parameters (Vd, kelim, AUC) for cladribine in humans, with all numeric values explicitly present in the text. |
| `Saven_1996.pdf` | Saven A et al., Pharmacokinetic study of oral and bolus…, Journal of clinical oncolog… (1996) | popPK | 9 | [10.1200/JCO.1996.14.3.978](https://doi.org/10.1200/JCO.1996.14.3.978) | [8622049](https://pubmed.ncbi.nlm.nih.gov/8622049) | The study is a PK study of cladribine using a 3-compartment model, but the specific numeric values for clearance, volume, and rate constants are not present in the provided text, only bioavailability and variability metrics. |

<sub>queue written 2026-09-15T06:23:30.153284+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Baltz_1993 | irrelevant | 2 | 0 | The paper is a review that describes the pharmacokinetic model type (two-compartment) but does not provide specific quantitative parameter values (CL, V, t1/2) in the evidence. |
| PGx | Benyahia_2025 | not_relevant | 0 | 0 | The paper is a case report on CMV retinitis and MDS/AML management; it does not report pharmacogenomic effects on cladribine PK/PD. |
| PGx | Cross_2020 | not_relevant | 0 | 0 | The paper is a review of Hairy Cell Leukaemia pathogenesis and treatment, focusing on BRAF mutations and general therapy responses, but does not report pharmacogenomic effects on cladribine PK/PD parameters. |
| PGx | Fukuda_2012 | not_relevant | 2 | 0 | The text is a review discussing the general role of ABC transporters in nucleoside drug resistance and mentions cladribine only as an example of a substrate, without reporting specific pharmacogenomic effects on PK/PD parameters. |
| popPK | Ganelin-Cohen_2026 | irrelevant | 0 | 0 | The paper is a clinical outcomes and safety study for pediatric MS, reporting no pharmacokinetic parameters such as clearance, volume, or half-life for cladribine. |
| popPK | Gomez-Figueroa_2025 | irrelevant | 0 | 0 | The paper is a retrospective registry analysis of clinical outcomes (NEDA-3, ARR) in multiple sclerosis patients and does not report any pharmacokinetic parameters for cladribine. |
| popPK | Guchelaar_1998 | irrelevant | 0 | 0 | The study is an in-vitro pharmacodynamic investigation of apoptosis and necrosis, not a pharmacokinetic study reporting disposition parameters for cladribine. |
| popPK | Hersh_2024 | irrelevant | 0 | 0 | The paper is a clinical study on heterogeneous treatment effects of MS therapies using brain atrophy as an outcome, and does not report any pharmacokinetic parameters for cladribine. |
| PGx | Laszlo_2010 | not_relevant | 2 | 5 | The paper reports an association between hCNT1 expression and clinical response (CR vs non-CR), but does not report changes in specific pharmacokinetic (e.g., AUC, Cmax) or pharmacodynamic (e.g., biomarker levels) parameters of cladribine. |
| PGx | Laszlo_2011 | not_relevant | 2 | 5 | The paper reports an association between hCNT1 expression and clinical response (CR), but does not report changes in specific pharmacokinetic (PK) or pharmacodynamic (PD) parameters. |
| PGx | LeBlanc_2022 | not_relevant | 0 | 0 | The paper reports that a CCND1 polymorphism predicts clinical response to therapy, but it does not report any pharmacokinetic or pharmacodynamic parameter changes (e.g., AUC, Cmax, receptor occupancy) driven by the genotype. |
| popPK | Lindemalm_2003 | irrelevant | 0 | 0 | The study is an in-vitro cytotoxicity and mechanistic comparison, not a pharmacokinetic study reporting disposition parameters for cladribine. |
| PGx | Loganathan_2022 | not_relevant | 2 | 0 | The paper is an in silico molecular docking study predicting binding affinity, not a clinical or experimental report of a pharmacokinetic or pharmacodynamic parameter change in humans or animals. |
| popPK | Lu_2024 | irrelevant | 2 | 1 | The paper is a review of drug development strategies where cladribine is one of several case studies, and it only provides a qualitative description of PK (short half-life, dose-linear) without reporting specific quantitative parameter values like clearance or volume. |
| PGx | Lu_2025 | not_relevant | 0 | 0 | The paper studies capecitabine, not cladribine, and focuses on protein expression rather than genetic variants. |
| PGx | Lübke_2022 | not_relevant | 0 | 0 | The paper compares the clinical efficacy of midostaurin and cladribine in systemic mastocytosis but does not report pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters. |
| PGx | Robak_2012 | not_relevant | 0 | 0 | The paper is a general review of purine nucleoside analogs and does not report specific pharmacogenomic effects on PK/PD parameters for cladribine. |
| PGx | Rossi_2005 | not_relevant | 0 | 0 | The paper discusses inherited disorders of bilirubin metabolism and UGT1A1 variants, but does not mention cladribine or its pharmacokinetics/pharmacodynamics. |
| popPK | Saven_1996 | relevant | 9 | 2 | The study is a PK study of cladribine using a 3-compartment model, but the specific numeric values for clearance, volume, and rate constants are not present in the provided text, only bioavailability and variability metrics. |
| PGx | Szturz_2014 | not_relevant | 0 | 0 | The paper reports on the efficacy of anakinra in Schnitzler syndrome and mentions cladribine only as a previously failed treatment, without analyzing any pharmacogenomic effects on its PK or PD parameters. |
| PGx | Szuber_2021 | not_relevant | 0 | 0 | The paper is a clinical management review for Chronic Neutrophilic Leukemia and mentions cladribine only as a treatment option, without reporting any pharmacogenomic effects on its PK or PD parameters. |
| PGx | Takenaka_2007 | not_relevant | 2 | 5 | The paper reports transporter-mediated effects (Abcg2/Mrp4) on cladribine distribution and resistance in animal models, but does not report human pharmacogenomic variants affecting PK/PD parameters. |
| PGx | Thiele_2020 | not_relevant | 0 | 0 | The study investigates the pharmacogenomic effects of ABCG2 on teriflunomide, not cladribine. |
| PGx | Turner_2026 | not_relevant | 0 | 0 | The paper compares dosing schedules (weekly vs. continuous) of cladribine and does not report pharmacogenomic effects of gene variants on PK or PD parameters. |
| PGx | Zarzuelo_2021 | not_relevant | 2 | 0 | The paper is a review that mentions ADA polymorphisms for cladribine as potential predictive markers for treatment response (efficacy), but it does not report specific pharmacokinetic or pharmacodynamic parameter changes or fitted effect sizes. |
| PGx | de_2008 | not_relevant | 2 | 5 | The paper reports in vitro transporter function and cellular resistance mechanisms, not a pharmacogenomic effect on PK/PD parameters in humans. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-15 06:24 UTC</sub>
