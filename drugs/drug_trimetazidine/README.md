<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01E&quot;,&quot;href&quot;:&quot;atc/C01E.md&quot;},{&quot;label&quot;:&quot;trimetazidine&quot;}]"></div>

# trimetazidine

- **generic name:** trimetazidine
- **ATC codes:** `C01EB15`
- **DrugBank:** [DB09069](https://go.drugbank.com/drugs/DB09069) · **PubChem:** [CID 21109](https://pubchem.ncbi.nlm.nih.gov/compound/21109)
- **molar mass:** 266.341 g/mol (C14H22N2O3) — DrugBank
- **groups:** approved, investigational

## About

**Description.** Trimetazidine is a piperazine derivative indicated for the symptomatic treatment of stable angina pectoris in patients inadequately controlled or intolerant to first line therapies.[L33015] Trimetazidine has been studied as a treatment for angina pectoris since the late 1960s.[A233255,A233260]

Acidic conditions, caused by anaerobic metabolism and fatty acid oxidation, in response to myocardial ischemia, activate sodium-hydrogen and sodium-calcium antiport systems.[A233215] The increased intracellular calcium decreases contractility.[A233215] It is hypothesized that trimetazidine inhibits 3-ketoacyl coenzyme A thiolase, which decreases fatty acid oxidation but not glucose metabolism, preventing the acidic conditions that exacerbate ischemic injury.[A7688,L33020] However, evidence for this mechanism is controversial.[A233215]

Trimetazidine is not FDA approved. However, it has been approved in France since 1978.[L33020]

**Indication.** Trimetazidine is indicated for the symptomatic treatment of stable angina pectoris in patients inadequately controlled or intolerant to first line therapies.[L33015]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-30 05:06 | 6:07 | 0/0/0 | 0/0/0 | 0/0/0 | 32,222/1,722 | ollama / qwen3.8:27b-mtp-q8_0 | 4 | 4/4 | 4/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=trimetazidine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | blood | `ALB` binder | DrugBank actor |
| excretion | kidney | <sub>“…Trimetazidine is 79-84% eliminated in the urine…”</sub> | prose |

<sub>Actors without a tissue in the table: ACAA2 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 79 matched, 82 returned
- **screened:** 4  ·  **relevant:** 2
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_12 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Barré_2003.pdf` | Barré J et al., Pharmacokinetic profile of a modified r…, Biopharmaceutics & drug dis… (2003) | popPK | 9 | [10.1002/bdd.350](https://doi.org/10.1002/bdd.350) | [12698499](https://pubmed.ncbi.nlm.nih.gov/12698499) | The paper is a relevant PK study for trimetazidine, but the specific numeric parameter values (CL, V, t1/2) are not present in the provided text, which only contains qualitative results and correlations. |
| `Körnicke_2020.pdf` | Körnicke T et al., Single Ascending Dose Study to Assess P…, Drug research (2020) | popPK | 9 | [10.1055/a-1180-4357](https://doi.org/10.1055/a-1180-4357) | [32886932](https://pubmed.ncbi.nlm.nih.gov/32886932) | The study reports quantitative PK parameters (CL/F, t1/2, AUC) for trimetazidine in humans, with all numeric values explicitly present in the text. |
| `Génissel_2004.pdf` | Génissel P et al., Assessment of the sustained release pro…, European journal of drug me… (2004) | popPK | 8 | [10.1007/BF03190575](https://doi.org/10.1007/BF03190575) | [15151172](https://pubmed.ncbi.nlm.nih.gov/15151172) | The study reports pharmacokinetic parameters for trimetazidine, but the evidence only provides exposure metrics (Cmax, trough, fluctuation) and time points, lacking specific quantitative disposition parameters like clearance (CL), volume (V), or absorption rate (ka). |
| `Helmy_2014.pdf` | Helmy SA et al., In vitro dissolution and in vivo bioequ…, Clinical pharmacology in dr… (2014) | popPK | 8 | [10.1002/cpdd.63](https://doi.org/10.1002/cpdd.63) | [27128458](https://pubmed.ncbi.nlm.nih.gov/27128458) | The study reports in vivo PK parameters for trimetazidine, but the specific numeric values are not present in the provided evidence. |
| `Liu_2012.pdf` | Liu WF et al., [Pharmacokinetics and bioequivalence of…, Zhonghua xin xue guan bing… (2012) | popPK | 8 | not captured | [23363721](https://pubmed.ncbi.nlm.nih.gov/23363721) | The study reports quantitative pharmacokinetic parameters (Cmax, t1/2z, AUC) for trimetazidine in humans, which are directly readable in the provided evidence. |
| `Nenchev_2020.pdf` | Nenchev N et al., Effect of age and renal impairment on t…, Drug development research (2020) | popPK | 8 | [10.1002/ddr.21654](https://doi.org/10.1002/ddr.21654) | [32128844](https://pubmed.ncbi.nlm.nih.gov/32128844) | The study reports PK parameters (AUC, Cmax) for trimetazidine, but lacks specific disposition parameters like clearance (CL) or volume (V) in the provided text. |
| `Othman_2021.pdf` | Othman AI et al., Trimetazidine Dihydrochloride Pulsatile…, Current drug delivery (2021) | popPK | 8 | [10.2174/1567201818666210212095932](https://doi.org/10.2174/1567201818666210212095932) | [33583377](https://pubmed.ncbi.nlm.nih.gov/33583377) | The study reports PK parameters (Cmax, Tmax) for trimetazidine in rabbits, but lacks quantitative disposition parameters like clearance, volume, or half-life. |
| `Tan_2025.pdf` | Tan D et al., Evaluation of the Pharmacokinetics, Bio…, Clinical pharmacology in dr… (2025) | popPK | 8 | [10.1002/cpdd.1582](https://doi.org/10.1002/cpdd.1582) | [40765434](https://pubmed.ncbi.nlm.nih.gov/40765434) | The study reports pharmacokinetic parameters for trimetazidine, but the specific numeric values are not present in the provided evidence text. |
| `Wang_2023.pdf` | Wang J et al., Bioequivalence and Pharmacokinetic Prof…, Clinical pharmacology in dr… (2023) | popPK | 8 | [10.1002/cpdd.1200](https://doi.org/10.1002/cpdd.1200) | [36458661](https://pubmed.ncbi.nlm.nih.gov/36458661) | The study reports pharmacokinetic parameters for trimetazidine, but the specific numeric values are not present in the provided evidence text. |
| `Kennedy_1998.pdf` | Kennedy JA et al., Effect of trimetazidine on carnitine pa…, Cardiovascular drugs and th… (1998) | pd | 4 | [10.1023/a:1007768716934](https://doi.org/10.1023/a:1007768716934) | [9825181](https://www.ncbi.nlm.nih.gov/pubmed/9825181) | metadata signals extractable PD data (IC50) |
| `Simon_2001.pdf` | Simon N et al., [Effects of trimetazidine on altered fu…, Therapie (2001) | pd | 4 | not captured | [11806297](https://www.ncbi.nlm.nih.gov/pubmed/11806297) | metadata signals extractable PD data (EC50) |
| `Sternberg_2025.pdf` | Sternberg J et al., In Vitro Metabolism of Doping Agents (S…, Metabolites (2025) | pgx | 7 | [10.3390/metabo15070452](https://doi.org/10.3390/metabo15070452) | [40710553](https://www.ncbi.nlm.nih.gov/pubmed/40710553) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |

<sub>queue written 2026-09-30T05:06:59.041633+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abdelrahman_2022 | irrelevant | 0 | 0 | The study is a mechanistic investigation of trimetazidine's protective effects on kidney injury in mice and does not report any pharmacokinetic parameters. |
| popPK | Abreu_2011 | irrelevant | 0 | 0 | The study is a pharmacodynamic/renal function assessment in pigs where trimetazidine is used as a protective agent, and it does not report any pharmacokinetic parameters (CL, V, ka, etc.) for trimetazidine itself. |
| popPK | Albengres_1996 | irrelevant | 0 | 0 | The study investigates pharmacodynamic interactions in immunological models and does not report any pharmacokinetic parameters for trimetazidine. |
| PD | Albengres_1996 | not_relevant | 1 | 0 | The paper reports qualitative lack of interaction and statistical significance (P-values) but provides no numeric PD parameters (Emax, EC50) or concentration-effect curves for trimetazidine. |
| popPK | Amini_2019 | irrelevant | 0 | 0 | The study is a mechanistic/efficacy trial evaluating renoprotective effects and molecular markers, not a pharmacokinetic study reporting disposition parameters for trimetazidine. |
| popPK | Ancerewicz_1998 | irrelevant | 0 | 0 | The paper is an in-vitro structure-activity relationship study on antioxidant properties, not a pharmacokinetic study. |
| PD | Ancerewicz_1998 | not_relevant | 0 | 0 | The paper investigates the antioxidant activity and structure-activity relationships (QSAR) of trimetazidine derivatives in vitro, not the pharmacodynamic or exposure-response relationship of the drug trimetazidine in a biological system. |
| popPK | Barré_2003 | relevant | 9 | 2 | The paper is a relevant PK study for trimetazidine, but the specific numeric parameter values (CL, V, t1/2) are not present in the provided text, which only contains qualitative results and correlations. |
| popPK | Barseem_2023 | irrelevant | 1 | 0 | The study is an in-vitro mechanistic investigation of trimetazidine binding to human serum albumin and does not report quantitative pharmacokinetic disposition parameters (e.g., clearance, volume, half-life). |
| PD | Barseem_2023 | not_relevant | 0 | 0 | The paper focuses on in vitro binding interactions between trimetazidine and human serum albumin (HSA), reporting thermodynamic and structural data rather than any pharmacodynamic exposure-response or dose-response relationship. |
| popPK | Ben_2006 | irrelevant | 0 | 0 | The study is an in-vitro/isolated organ perfusion model evaluating hepatic injury and function, not a pharmacokinetic study reporting disposition parameters for trimetazidine. |
| popPK | Ben_2007 | irrelevant | 0 | 0 | The study is a mechanistic investigation of trimetazidine's protective effects on liver preservation and does not report any pharmacokinetic parameters. |
| popPK | Borowicz-Reutt_2022 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation in mice regarding antiepileptic interactions and does not report any quantitative pharmacokinetic parameters for trimetazidine. |
| PD | Borowicz-Reutt_2022 | not_relevant | 3 | 2 | The paper reports qualitative dose-dependent interactions (e.g., TMZ 20-120 mg/kg decreases phenobarbital effect) but does not provide numeric PD parameters (Emax, EC50) or a quantitative concentration-effect curve. |
| popPK | Cau_2008 | irrelevant | 0 | 0 | The study is a pharmacodynamic/toxicology investigation of trimetazidine's protective effects on renal ischemia in pigs and does not report any pharmacokinetic parameters. |
| popPK | Chen_2006 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of astragalosides using trimetazidine only as a positive control, with no pharmacokinetic parameters reported. |
| PD | Chen_2006 | not_relevant | 0 | 0 | The paper focuses on the protective effects of astragalosides, using trimetazidine only as a positive control without reporting any exposure-response or dose-response data for it. |
| popPK | Dayanithi_2007 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of receptor binding and electrophysiology, reporting no pharmacokinetic parameters. |
| popPK | Dimitrova_2025 | irrelevant | 0 | 0 | The paper focuses on the synthesis and in-vitro biological evaluation of novel hybrid molecules, not the pharmacokinetics of trimetazidine. |
| PD | Dimitrova_2025 | not_relevant | 0 | 0 | The paper reports in vitro IC50 values for novel hybrid compounds, not a pharmacodynamic or exposure-response relationship for trimetazidine itself. |
| popPK | Ding_2007 | irrelevant | 2 | 0 | The paper describes an analytical method and mentions PK application but provides no quantitative pharmacokinetic parameter values (CL, V, t1/2, etc.) in the evidence. |
| popPK | Doğan_2026 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on novel trimetazidine derivatives as AChE inhibitors, containing no pharmacokinetic data for trimetazidine itself. |
| PD | Doğan_2026 | not_relevant | 0 | 0 | The paper reports in vitro IC50 values for novel trimetazidine derivatives, not a pharmacodynamic or exposure-response relationship for the drug trimetazidine itself. |
| popPK | Elimadi_1997 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of mitochondrial swelling and does not report pharmacokinetic parameters for trimetazidine. |
| popPK | Elimadi_2001 | irrelevant | 0 | 0 | The study focuses on the mechanistic anti-ischemic properties of a trimetazidine derivative (S-15176) and does not report any pharmacokinetic parameters for trimetazidine. |
| popPK | Faure_2004 | irrelevant | 0 | 0 | The study is a pharmacodynamic/functional assessment of kidney grafts where trimetazidine is used as a protective agent, and no pharmacokinetic parameters (CL, V, ka, etc.) are reported. |
| PGx | Fontana_2026 | not_relevant | 0 | 0 | The paper investigates the mechanism of chemoresistance in NSCLC using trimetazidine as a tool compound, but does not report any pharmacogenomic effects on its PK or PD parameters. |
| popPK | Galal_2020 | irrelevant | 0 | 0 | The study is a clinical trial assessing the efficacy of trimetazidine in preventing nephropathy, not a pharmacokinetic study, and reports no PK parameters. |
| popPK | Goujon_2000 | irrelevant | 0 | 0 | The study is a pharmacodynamic/functional assessment of kidney preservation in pigs, not a pharmacokinetic study, and reports no disposition parameters for trimetazidine. |
| popPK | Gu_2025 | irrelevant | 0 | 0 | The paper focuses on the design and biological evaluation of novel borneol derivatives, mentioning trimetazidine only as a structural comparator without reporting any pharmacokinetic parameters for it. |
| PD | Gu_2025 | not_relevant | 0 | 0 | The paper focuses on novel borneol derivatives and only mentions trimetazidine as a structural reference; it does not report any pharmacodynamic or exposure-response data for trimetazidine. |
| popPK | Génissel_2004 | relevant | 8 | 2 | The study reports pharmacokinetic parameters for trimetazidine, but the evidence only provides exposure metrics (Cmax, trough, fluctuation) and time points, lacking specific quantitative disposition parameters like clearance (CL), volume (V), or absorption rate (ka). |
| popPK | Hamdan_2001 | irrelevant | 0 | 0 | The study is an in-vitro/ex-vivo mechanistic investigation of enzyme inhibition (CPT-1) and does not report pharmacokinetic parameters for trimetazidine. |
| popPK | Han_2008 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on apoptosis where trimetazidine is used only as a ROS scavenger, with no pharmacokinetic parameters reported. |
| PD | Han_2008 | not_relevant | 0 | 0 | The paper investigates the mechanism of pyrogallol-induced apoptosis and mentions trimetazidine only as a ROS scavenger that failed to reduce intracellular O2- levels, without providing any dose-response data, concentration-effect curve, or PD parameters for trimetazidine. |
| popPK | Hauet_2000 | irrelevant | 0 | 0 | The study is a pharmacodynamic/functional assessment of trimetazidine's cytoprotective effects in pig kidneys, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Hazelhoff_2021 | irrelevant | 0 | 0 | The study is a mechanistic/toxicology investigation of trimetazidine's protective effects on kidney injury in rats and does not report any pharmacokinetic parameters. |
| popPK | Hazem_2023 | irrelevant | 0 | 0 | The study focuses on the antitumor mechanism of action (glycolysis/AKT signaling) and cytotoxicity, not pharmacokinetic disposition parameters. |
| popPK | Helmy_2014 | relevant | 8 | 0 | The study reports in vivo PK parameters for trimetazidine, but the specific numeric values are not present in the provided evidence. |
| popPK | Ibrahim_2017 | irrelevant | 0 | 0 | The study is a clinical trial evaluating the efficacy of trimetazidine in preventing contrast-induced nephropathy and does not report any pharmacokinetic parameters. |
| popPK | Joseph_2022 | irrelevant | 0 | 0 | The paper is a review of drugs for overactive bladder and mentions trimetazidine only as a miscellaneous target without providing any pharmacokinetic parameters. |
| PD | Joseph_2022 | not_relevant | 1 | 0 | The paper is a review of drugs for overactive bladder that mentions trimetazidine only as a miscellaneous target without providing any specific pharmacodynamic data, exposure-response analysis, or numeric parameters. |
| popPK | Kantor_2000 | irrelevant | 0 | 0 | The study is a mechanistic investigation of trimetazidine's effect on cardiac metabolism in isolated rat hearts and does not report any pharmacokinetic parameters. |
| popPK | Karpov_2004 | irrelevant | 0 | 0 | The study is a clinical efficacy trial assessing myocardial perfusion and hemodynamics, not a pharmacokinetic study reporting disposition parameters for trimetazidine. |
| popPK | Kaur_2003 | irrelevant | 0 | 0 | The study is a mechanistic investigation of trimetazidine's antioxidant effects in a renal ischemia-reperfusion model and does not report pharmacokinetic parameters. |
| popPK | Kayukova_2026 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on novel amidoxime derivatives for antimicrobial and antidiabetic activity, with no mention of trimetazidine or pharmacokinetic parameters. |
| PD | Kayukova_2026 | not_relevant | 0 | 0 | The paper reports the synthesis and in vitro biological screening of novel amidoxime derivatives, not a pharmacodynamic or exposure-response analysis for trimetazidine. |
| popPK | Kennedy_1998 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of enzyme inhibition (CPT-1) and does not report any pharmacokinetic parameters for trimetazidine. |
| PD | Kennedy_1998 | not_relevant | 0 | 0 | The paper investigates the biochemical mechanism of action (CPT-1 inhibition) in rat hearts, not a pharmacokinetic-pharmacodynamic (PK/PD) or exposure-response relationship with numeric PD parameters. |
| popPK | Kim_2020 | irrelevant | 0 | 0 | The study is an epidemiological analysis of parkinsonism risk and does not report any pharmacokinetic parameters for trimetazidine. |
| PD | Kim_2020 | not_relevant | 4 | 2 | The study reports a cumulative dose-response relationship for parkinsonism risk using hazard ratios, but it is an epidemiological cohort study, not a pharmacodynamic (exposure-response) analysis with numeric PD parameters like Emax or EC50. |
| popPK | Klouz_2001 | irrelevant | 0 | 0 | The paper is a mechanistic study on sigma receptor binding of a trimetazidine derivative (S-16950) and does not report pharmacokinetic parameters for trimetazidine. |
| PD | Klouz_2001 | not_relevant | 3 | 2 | The paper reports an in vitro binding affinity (IC50) for a trimetazidine derivative (S-16950) at sigma receptors, but does not provide an in vivo pharmacodynamic exposure-response or dose-response relationship for trimetazidine itself. |
| popPK | Kuba_1976 | irrelevant | 0 | 0 | The paper is an in-vitro electrophysiological study on frog muscle membranes, not a pharmacokinetic study, and contains no disposition parameters. |
| PGx | Lkhagva_2025 | not_relevant | 0 | 0 | The paper investigates the mechanism of action of trimetazidine in ZFHX3 knockdown cells, not the effect of a genetic variant on the drug's pharmacokinetics or pharmacodynamics. |
| popPK | Luneva_2019 | irrelevant | 0 | 0 | The paper is a clinical efficacy study evaluating anti-anginal effects and quality of life, containing no pharmacokinetic parameters or disposition data for trimetazidine. |
| PD | Luneva_2019 | not_relevant | 1 | 0 | The paper is a clinical pilot study reporting clinical outcomes (angina frequency, quality of life) before and after treatment, but it does not measure drug concentrations or perform any PK/PD modeling, thus lacking extractable PD parameters. |
| popPK | Mahfoudh-Boussaid_2012 | irrelevant | 0 | 0 | The study is a mechanistic investigation of renal ischemia-reperfusion injury in rats, reporting functional and molecular markers rather than pharmacokinetic parameters for trimetazidine. |
| popPK | Mahfoudh-Boussaid_2014 | irrelevant | 0 | 0 | The study is a mechanistic investigation of renal protection signaling pathways and does not report any pharmacokinetic parameters for trimetazidine. |
| popPK | Martinez_2025 | irrelevant | 0 | 0 | The paper is a clinical case report on post-COVID-19 syndrome where trimetazidine is used as a therapeutic agent, but no pharmacokinetic parameters are reported. |
| PGx | Martinez_2025 | not_relevant | 0 | 0 | The paper is a case report on post-COVID-19 syndrome and does not report any pharmacogenomic effect of the mentioned gene variants on the pharmacokinetic or pharmacodynamic parameters of trimetazidine. |
| popPK | McCarthy_2016 | irrelevant | 0 | 0 | The paper is a review article discussing the clinical role and mechanisms of trimetazidine, containing no original pharmacokinetic data or quantitative disposition parameters. |
| PD | McCarthy_2016 | not_relevant | 1 | 0 | The text is a review article discussing clinical efficacy and mechanisms of trimetazidine but does not report any specific pharmacokinetic or pharmacodynamic data, exposure-response relationships, or numeric PD parameters. |
| popPK | Morin_1998 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of mitochondrial binding sites and does not report pharmacokinetic disposition parameters for trimetazidine. |
| popPK | Nenchev_2020 | relevant | 8 | 2 | The study reports PK parameters (AUC, Cmax) for trimetazidine, but lacks specific disposition parameters like clearance (CL) or volume (V) in the provided text. |
| popPK | Onay-Besikci_2008 | irrelevant | 2 | 0 | The paper is a comprehensive review of pharmacological effects and analytical techniques, not an original study reporting quantitative population-pharmacokinetic parameters for trimetazidine. |
| popPK | Othman_2021 | relevant | 8 | 2 | The study reports PK parameters (Cmax, Tmax) for trimetazidine in rabbits, but lacks quantitative disposition parameters like clearance, volume, or half-life. |
| popPK | Rosano_2004 | irrelevant | 0 | 0 | The paper is a clinical review discussing quality of life and therapeutic management, containing no quantitative pharmacokinetic parameters for trimetazidine. |
| popPK | Seecheran_2019 | irrelevant | 0 | 0 | The study is a pharmacodynamic assessment of trimetazidine's effect on clopidogrel platelet reactivity and does not report any pharmacokinetic parameters for trimetazidine. |
| PD | Seecheran_2019 | not_relevant | 3 | 2 | The study reports a qualitative change in platelet reactivity (PRU) after trimetazidine administration but does not provide concentration-effect data, dose-response curves, or specific PD parameters (e.g., Emax, EC50) for trimetazidine itself. |
| popPK | Sharma_2025 | irrelevant | 0 | 0 | The paper describes a genetically encoded fluorescent reporter for polyamines and does not involve trimetazidine or pharmacokinetic parameters. |
| PD | Sharma_2025 | not_relevant | 0 | 0 | The paper describes a genetically encoded fluorescent reporter for polyamines and does not investigate trimetazidine or report any pharmacodynamic parameters for it. |
| popPK | Shirahase_1988 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of platelet aggregation and does not report any pharmacokinetic parameters for trimetazidine. |
| popPK | Silveira_2008 | irrelevant | 0 | 0 | The study is a mechanistic/experimental assessment of myocardial protection in a swine heart model, reporting hemodynamic and metabolic parameters rather than pharmacokinetic disposition parameters (CL, V, ka) for trimetazidine. |
| PD | Silveira_2008 | not_relevant | 0 | 0 | The study is a comparative clinical/experimental trial (3 groups) assessing hemodynamic outcomes, not a pharmacokinetic/pharmacodynamic modeling study; it does not report drug concentrations or fit a dose-response curve to derive PD parameters like Emax or EC50. |
| popPK | Simon_1997 | irrelevant | 0 | 0 | The paper is a mechanistic study on mitochondrial function and nephrotoxicity, containing no pharmacokinetic parameters for trimetazidine. |
| popPK | Simon_2001 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of mitochondrial function in rat kidney, not a pharmacokinetic study, and reports no disposition parameters for trimetazidine. |
| PGx | Sternberg_2025 | not_relevant | 0 | 0 | The study investigates tissue-specific metabolism in seminal vesicles versus liver but does not report any pharmacogenomic effects (gene variants) on PK/PD parameters. |
| popPK | Tan_2025 | relevant | 8 | 0 | The study reports pharmacokinetic parameters for trimetazidine, but the specific numeric values are not present in the provided evidence text. |
| popPK | Wang_2023 | relevant | 8 | 0 | The study reports pharmacokinetic parameters for trimetazidine, but the specific numeric values are not present in the provided evidence text. |
| popPK | Won_2018 | irrelevant | 0 | 0 | The study is a retrospective analysis of medication dosing errors and does not report any pharmacokinetic parameters for trimetazidine. |
| popPK | Yang_2019 | irrelevant | 0 | 0 | The study investigates the cardioprotective mechanism of trimetazidine in sunitinib-induced cardiotoxicity and does not report any pharmacokinetic parameters. |
| PD | Yang_2019 | not_relevant | 2 | 1 | The study reports qualitative cardioprotective effects and an IC50 for sunitinib toxicity, but does not provide a quantitative exposure-response or dose-response model (e.g., Emax, EC50) for trimetazidine. |
| popPK | Zaouali_2010 | irrelevant | 0 | 0 | The study is a mechanistic investigation of liver preservation using trimetazidine as an additive, and it does not report any pharmacokinetic parameters for trimetazidine. |
| popPK | Zhang_2014 | irrelevant | 0 | 0 | The study is a clinical trial assessing renal function outcomes (creatinine, BUN, etc.) and does not report any pharmacokinetic parameters for trimetazidine. |
| popPK | Zhang_2021 | irrelevant | 0 | 0 | The study is a clinical trial assessing the efficacy of trimetazidine in preventing contrast-induced nephropathy and does not report any pharmacokinetic parameters. |
| PGx | Zhou_2022 | not_relevant | 0 | 0 | The paper investigates the mechanism of cardiac dysfunction in a genetic mouse model and the therapeutic effect of trimetazidine, but does not report pharmacogenomic differences in the drug's PK or PD parameters. |
| popPK | Zini_1996 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of mitochondrial respiration and does not report pharmacokinetic parameters for trimetazidine. |
| popPK | van_2025 | irrelevant | 0 | 0 | The study is a Phase 2a clinical trial focused on safety and pharmacodynamic outcomes (oxidative stress markers) in ALS patients, with no pharmacokinetic parameters reported. |
| PD | van_2025 | not_relevant | 2 | 1 | The study reports mean changes in biomarkers (MDA, 8-OHdG, energy expenditure) during treatment but does not provide drug concentrations or fit a concentration-effect/dose-response model, so no numeric PD parameters (Emax, EC50, etc.) are extractable. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
