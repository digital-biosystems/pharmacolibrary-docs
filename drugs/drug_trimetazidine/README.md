<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01E&quot;,&quot;href&quot;:&quot;atc/C01E.md&quot;},{&quot;label&quot;:&quot;trimetazidine&quot;}]"></div>

# trimetazidine

- **generic name:** trimetazidine
- **ATC codes:** `C01EB15`
- **DrugBank:** [DB09069](https://go.drugbank.com/drugs/DB09069) · **PubChem:** [CID 21109](https://pubchem.ncbi.nlm.nih.gov/compound/21109)
- **molar mass:** 266.341 g/mol (C14H22N2O3) — DrugBank
- **groups:** approved, investigational

## About

Trimetazidine is a cardiac drug used to treat angina pectoris, acting as a vasodilator agent. It is approved and sold under many brand names, and is also being studied investigationally.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q674703](https://www.wikidata.org/wiki/Q674703) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 11:47 | 3:07 | 0/0/0 | 0/0/0 | 0/0/0 | 107,449/3,740 | ollama / qwen3.8:27b-mtp-q8_0 | 7 | 4/7 | 7/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=trimetazidine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | blood | `ALB` binder | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

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

_10 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Barré_2003.pdf` | Barré J et al., Pharmacokinetic profile of a modified r…, Biopharmaceutics & drug dis… (2003) | popPK | 9 | [10.1002/bdd.350](https://doi.org/10.1002/bdd.350) | [12698499](https://pubmed.ncbi.nlm.nih.gov/12698499) | The study reports quantitative PK parameters (half-life, renal clearance, AUC) for trimetazidine in humans, but the specific numeric values are not present in the provided evidence text. |
| `Körnicke_2020.pdf` | Körnicke T et al., Single Ascending Dose Study to Assess P…, Drug research (2020) | popPK | 9 | [10.1055/a-1180-4357](https://doi.org/10.1055/a-1180-4357) | [32886932](https://pubmed.ncbi.nlm.nih.gov/32886932) | The study reports quantitative PK parameters (CL/F, t1/2, AUC) for trimetazidine in humans, with values explicitly listed in the abstract. |
| `Génissel_2004.pdf` | Génissel P et al., Assessment of the sustained release pro…, European journal of drug me… (2004) | popPK | 8 | [10.1007/BF03190575](https://doi.org/10.1007/BF03190575) | [15151172](https://pubmed.ncbi.nlm.nih.gov/15151172) | The study reports pharmacokinetic parameters (Cmax, trough, fluctuation) for trimetazidine in humans, but specific disposition parameters like clearance (CL) or volume (V) are not explicitly listed in the provided text. |
| `Liu_2012.pdf` | Liu WF et al., [Pharmacokinetics and bioequivalence of…, Zhonghua xin xue guan bing… (2012) | popPK | 8 | not captured | [23363721](https://pubmed.ncbi.nlm.nih.gov/23363721) | The study reports quantitative non-compartmental pharmacokinetic parameters (Cmax, t1/2z, AUC) for trimetazidine in humans, which are present in the text. |
| `Nenchev_2020.pdf` | Nenchev N et al., Effect of age and renal impairment on t…, Drug development research (2020) | popPK | 8 | [10.1002/ddr.21654](https://doi.org/10.1002/ddr.21654) | [32128844](https://pubmed.ncbi.nlm.nih.gov/32128844) | The study reports PK ratios (AUC, Cmax) for trimetazidine in humans, but lacks absolute quantitative disposition parameters like clearance (CL) or volume (V). |
| `Othman_2021.pdf` | Othman AI et al., Trimetazidine Dihydrochloride Pulsatile…, Current drug delivery (2021) | popPK | 8 | [10.2174/1567201818666210212095932](https://doi.org/10.2174/1567201818666210212095932) | [33583377](https://pubmed.ncbi.nlm.nih.gov/33583377) | The study reports pharmacokinetic parameters (Cmax, Tmax, relative bioavailability) for trimetazidine in rabbits, but specific disposition parameters like clearance (CL) or volume (V) are not explicitly listed in the provided text. |
| `Tan_2025.pdf` | Tan D et al., Evaluation of the Pharmacokinetics, Bio…, Clinical pharmacology in dr… (2025) | popPK | 8 | [10.1002/cpdd.1582](https://doi.org/10.1002/cpdd.1582) | [40765434](https://pubmed.ncbi.nlm.nih.gov/40765434) | The study reports pharmacokinetic parameters for trimetazidine in humans, but the specific numeric values are not present in the provided evidence text. |
| `Wang_2023.pdf` | Wang J et al., Bioequivalence and Pharmacokinetic Prof…, Clinical pharmacology in dr… (2023) | popPK | 8 | [10.1002/cpdd.1200](https://doi.org/10.1002/cpdd.1200) | [36458661](https://pubmed.ncbi.nlm.nih.gov/36458661) | The study reports pharmacokinetic parameters for trimetazidine, but the specific numeric values (Cmax, AUC, t1/2, etc.) are not present in the provided abstract text. |
| `Kennedy_1998.pdf` | Kennedy JA et al., Effect of trimetazidine on carnitine pa…, Cardiovascular drugs and th… (1998) | pd | 4 | [10.1023/a:1007768716934](https://doi.org/10.1023/a:1007768716934) | [9825181](https://www.ncbi.nlm.nih.gov/pubmed/9825181) | metadata signals extractable PD data (IC50) |
| `Simon_2001.pdf` | Simon N et al., [Effects of trimetazidine on altered fu…, Therapie (2001) | pd | 4 | not captured | [11806297](https://www.ncbi.nlm.nih.gov/pubmed/11806297) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-06T11:46:41.214351+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abdelrahman_2022 | irrelevant | 0 | 0 | The study is a mechanistic/toxicology investigation of trimetazidine's protective effects in a mouse model of kidney injury and does not report pharmacokinetic parameters. |
| popPK | Abreu_2011 | irrelevant | 0 | 0 | The study evaluates trimetazidine as a renal protective agent in pigs and measures renal function via iohexol clearance, but does not report pharmacokinetic parameters (CL, V, ka) for trimetazidine itself. |
| popPK | Albengres_1996 | irrelevant | 0 | 0 | The study investigates pharmacodynamic interactions in immunological models and does not report any pharmacokinetic parameters for trimetazidine. |
| PD | Albengres_1996 | not_relevant | 1 | 0 | The paper reports qualitative lack of interaction and statistical significance (P-values) but provides no numeric PD parameters (Emax, EC50) or concentration-effect curves for trimetazidine. |
| popPK | Amini_2019 | irrelevant | 0 | 0 | The study is a mechanistic investigation of renoprotective effects and molecular markers (apoptosis, microRNA) in rats, not a pharmacokinetic study reporting disposition parameters for trimetazidine. |
| popPK | Ancerewicz_1998 | irrelevant | 0 | 0 | The study is an in-vitro structure-activity relationship analysis of antioxidant properties, not a pharmacokinetic study. |
| PD | Ancerewicz_1998 | not_relevant | 0 | 0 | The paper investigates the antioxidant activity and structure-activity relationships (QSAR) of trimetazidine derivatives in vitro, not the pharmacodynamic or exposure-response relationship of the drug trimetazidine in a biological system. |
| popPK | Barré_2003 | relevant | 9 | 2 | The study reports quantitative PK parameters (half-life, renal clearance, AUC) for trimetazidine in humans, but the specific numeric values are not present in the provided evidence text. |
| popPK | Barseem_2023 | irrelevant | 1 | 0 | The study is an in-vitro mechanistic investigation of trimetazidine binding to human serum albumin, reporting thermodynamic parameters rather than quantitative pharmacokinetic disposition parameters (CL, V, ka, etc.). |
| PD | Barseem_2023 | not_relevant | 0 | 0 | The paper focuses on in vitro binding interactions between trimetazidine and human serum albumin (HSA), reporting thermodynamic and structural data rather than any pharmacodynamic exposure-response or dose-response relationship. |
| popPK | Ben_2006 | irrelevant | 0 | 0 | The study is an in-vitro/isolated organ perfusion model evaluating the protective effects of trimetazidine on liver injury, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Ben_2007 | irrelevant | 0 | 0 | The study is a mechanistic investigation of liver preservation and injury in rats, not a pharmacokinetic study, and reports no disposition parameters for trimetazidine. |
| popPK | Borowicz-Reutt_2022 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation in mice regarding antiepileptic interactions and does not report any quantitative pharmacokinetic parameters for trimetazidine. |
| PD | Borowicz-Reutt_2022 | not_relevant | 3 | 2 | The paper reports qualitative dose-dependent interactions (e.g., TMZ 20-120 mg/kg decreases phenobarbital effect) but does not provide numeric PD parameters (Emax, EC50) or a quantitative concentration-effect curve. |
| popPK | Cau_2008 | irrelevant | 0 | 0 | The study is a pharmacodynamic/toxicology investigation of trimetazidine's protective effects on renal ischemia in pigs, reporting no pharmacokinetic parameters (CL, V, ka, etc.). |
| popPK | Chen_2006 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of astragalosides using trimetazidine only as a positive control, with no pharmacokinetic parameters reported. |
| PD | Chen_2006 | not_relevant | 0 | 0 | The paper focuses on the protective effects of astragalosides, using trimetazidine only as a positive control without reporting any exposure-response or dose-response data for it. |
| popPK | Dayanithi_2007 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of receptor binding and electrophysiology, not a pharmacokinetic study. |
| popPK | Dimitrova_2025 | irrelevant | 0 | 0 | The paper focuses on the synthesis and in-vitro biological evaluation of novel hybrid molecules, not the pharmacokinetics of trimetazidine. |
| PD | Dimitrova_2025 | not_relevant | 0 | 0 | The paper reports in vitro IC50 values for novel hybrid compounds, not a pharmacodynamic or exposure-response relationship for trimetazidine itself. |
| popPK | Ding_2007 | irrelevant | 2 | 0 | The paper describes an analytical method and mentions its application to a PK study, but no quantitative pharmacokinetic parameters (CL, V, t1/2, etc.) are provided in the evidence. |
| popPK | Doğan_2026 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on novel trimetazidine derivatives as AChE inhibitors, containing no pharmacokinetic data for trimetazidine itself. |
| PD | Doğan_2026 | not_relevant | 0 | 0 | The paper reports in vitro IC50 values for novel trimetazidine derivatives, not a pharmacodynamic or exposure-response relationship for the drug trimetazidine itself. |
| popPK | Elimadi_1997 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of mitochondrial swelling and does not report pharmacokinetic parameters for trimetazidine. |
| popPK | Elimadi_2001 | irrelevant | 0 | 0 | The study focuses on the mechanistic anti-ischemic properties of a trimetazidine derivative (S-15176) and does not report any pharmacokinetic parameters for trimetazidine. |
| popPK | Faure_2004 | irrelevant | 0 | 0 | The study investigates the protective effects of trimetazidine on kidney graft function (creatinine clearance) in pigs, not the pharmacokinetic disposition parameters (CL, V, etc.) of trimetazidine itself. |
| PGx | Fontana_2026 | not_relevant | 0 | 0 | The paper investigates the mechanism of chemoresistance in NSCLC using trimetazidine as a tool compound, but does not report any pharmacogenomic effects on its PK or PD parameters. |
| popPK | Galal_2020 | irrelevant | 0 | 0 | The study is a clinical trial assessing the efficacy of trimetazidine in preventing contrast-induced nephropathy and does not report any pharmacokinetic parameters. |
| popPK | Goujon_2000 | irrelevant | 0 | 0 | The study is a renal physiology/transplant study in pigs where trimetazidine is used as a preservation agent, and no pharmacokinetic parameters (CL, V, etc.) for trimetazidine are reported. |
| popPK | Gu_2025 | irrelevant | 0 | 0 | The paper focuses on the design and biological evaluation of novel borneol derivatives, mentioning trimetazidine only as a structural comparator without reporting any pharmacokinetic parameters for it. |
| PD | Gu_2025 | not_relevant | 0 | 0 | The paper focuses on novel borneol derivatives and only mentions trimetazidine as a structural reference; it does not report any pharmacodynamic or exposure-response data for trimetazidine. |
| popPK | Génissel_2004 | relevant | 8 | 2 | The study reports pharmacokinetic parameters (Cmax, trough, fluctuation) for trimetazidine in humans, but specific disposition parameters like clearance (CL) or volume (V) are not explicitly listed in the provided text. |
| popPK | Hamdan_2001 | irrelevant | 0 | 0 | The study is an in-vitro/ex-vivo mechanistic investigation of enzyme inhibition (CPT-1) and does not report pharmacokinetic parameters for trimetazidine. |
| popPK | Han_2008 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on apoptosis where trimetazidine is used only as a ROS scavenger, with no pharmacokinetic parameters reported. |
| PD | Han_2008 | not_relevant | 0 | 0 | The paper investigates the mechanism of pyrogallol-induced apoptosis and mentions trimetazidine only as a ROS scavenger that failed to reduce intracellular O2- levels, without providing any dose-response data, concentration-effect curve, or PD parameters for trimetazidine. |
| popPK | Hauet_2000 | irrelevant | 0 | 0 | The study investigates the cytoprotective effects of trimetazidine on renal function in pig kidneys, not its pharmacokinetic disposition parameters. |
| popPK | Hazelhoff_2021 | irrelevant | 0 | 0 | The study is a mechanistic/toxicology investigation of trimetazidine's renoprotective effects in rats and does not report any pharmacokinetic parameters (CL, V, ka, etc.) for trimetazidine. |
| popPK | Hazem_2023 | irrelevant | 0 | 0 | The study focuses on the antitumor mechanism of action (glycolysis/AKT signaling) and cytotoxicity, not pharmacokinetic disposition parameters. |
| popPK | Helmy_2014 | irrelevant | 4 | 0 | The study reports bioequivalence metrics (Cmax, AUC) but does not provide quantitative disposition parameters (CL, V, ka) or a compartmental model, and no numeric values are present in the evidence. |
| popPK | Ibrahim_2017 | irrelevant | 0 | 0 | The study is a clinical trial evaluating the efficacy of trimetazidine in preventing contrast-induced nephropathy and does not report any pharmacokinetic parameters. |
| popPK | Joseph_2022 | irrelevant | 0 | 0 | The paper is a review of drugs for overactive bladder and mentions trimetazidine only as a miscellaneous target without providing any pharmacokinetic parameters. |
| PD | Joseph_2022 | not_relevant | 1 | 0 | The paper is a review of drugs for overactive bladder that mentions trimetazidine only as a miscellaneous target without providing any specific pharmacodynamic data, exposure-response analysis, or numeric parameters. |
| popPK | Kantor_2000 | irrelevant | 0 | 0 | The study is a mechanistic investigation of trimetazidine's effect on cardiac metabolism in isolated rat hearts and does not report any pharmacokinetic parameters. |
| popPK | Karpov_2004 | irrelevant | 0 | 0 | The study is a clinical efficacy trial assessing myocardial perfusion and hemodynamics, not a pharmacokinetic study reporting disposition parameters for trimetazidine. |
| popPK | Kaur_2003 | irrelevant | 0 | 0 | The study investigates the therapeutic/antioxidant effects of trimetazidine in a renal injury model and does not report pharmacokinetic parameters (CL, V, ka, etc.). |
| popPK | Kayukova_2026 | irrelevant | 0 | 0 | The paper describes the synthesis and in vitro biological activity of novel amidoxime compounds, with no mention of trimetazidine or pharmacokinetic parameters. |
| PD | Kayukova_2026 | not_relevant | 0 | 0 | The paper reports the synthesis and in vitro biological screening of novel amidoxime derivatives, not a pharmacodynamic or exposure-response analysis for trimetazidine. |
| popPK | Kennedy_1998 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of enzyme inhibition (CPT-1) and does not report any pharmacokinetic parameters for trimetazidine. |
| PD | Kennedy_1998 | not_relevant | 0 | 0 | The paper investigates the biochemical mechanism of action (CPT-1 inhibition) in rat hearts, not a pharmacokinetic-pharmacodynamic (PK/PD) or exposure-response relationship with numeric PD parameters. |
| popPK | Kim_2020 | irrelevant | 0 | 0 | The study is an epidemiological analysis of parkinsonism risk and does not report any pharmacokinetic parameters for trimetazidine. |
| PD | Kim_2020 | not_relevant | 4 | 2 | The study reports a cumulative dose-response relationship for parkinsonism risk using hazard ratios, but it is an epidemiological cohort study, not a pharmacodynamic (exposure-response) analysis with numeric PD parameters like Emax or EC50. |
| popPK | Klouz_2001 | irrelevant | 0 | 0 | The paper is a mechanistic study on sigma receptor binding of a trimetazidine derivative (S-16950) and does not report pharmacokinetic parameters for trimetazidine. |
| PD | Klouz_2001 | not_relevant | 3 | 2 | The paper reports an in vitro binding affinity (IC50) for a trimetazidine derivative (S-16950) at sigma receptors, but does not provide an in vivo pharmacodynamic exposure-response or dose-response relationship for trimetazidine itself. |
| popPK | Kuba_1976 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological investigation of trimetazidine's mechanism of action on frog end-plate membranes, not a pharmacokinetic study. |
| PGx | Lkhagva_2025 | not_relevant | 0 | 0 | The paper investigates the mechanism of action of trimetazidine in ZFHX3 knockdown cells, not the effect of a gene variant on the drug's pharmacokinetics or pharmacodynamics. |
| popPK | Luneva_2019 | irrelevant | 0 | 0 | The paper is a clinical efficacy study evaluating anti-anginal effects and quality of life, containing no pharmacokinetic parameters or disposition data for trimetazidine. |
| PD | Luneva_2019 | not_relevant | 1 | 0 | The paper is a clinical pilot study reporting clinical outcomes (angina frequency, quality of life) before and after treatment, but it does not measure drug concentrations or perform any PK/PD modeling, thus lacking extractable PD parameters. |
| popPK | Mahfoudh-Boussaid_2012 | irrelevant | 0 | 0 | The study investigates the protective effects of trimetazidine on renal ischemia-reperfusion injury in rats, reporting functional and molecular markers (creatinine clearance, protein levels) rather than pharmacokinetic parameters (CL, V, ka) for trimetazidine. |
| popPK | Mahfoudh-Boussaid_2014 | irrelevant | 0 | 0 | The study investigates the protective mechanism of trimetazidine on renal ischemia-reperfusion injury (signaling pathways and oxidative stress markers) and does not report pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Martinez_2025 | irrelevant | 0 | 0 | The paper is a clinical case report on post-COVID-19 syndrome where trimetazidine is used as a therapeutic agent for angina, but no pharmacokinetic parameters are reported. |
| PGx | Martinez_2025 | not_relevant | 0 | 0 | The paper is a case report on post-COVID-19 syndrome and does not report any pharmacogenomic effect of the mentioned gene variants on the pharmacokinetic or pharmacodynamic parameters of trimetazidine. |
| popPK | McCarthy_2016 | irrelevant | 0 | 0 | The paper is a review article discussing the clinical role and mechanisms of trimetazidine, containing no original pharmacokinetic data or quantitative disposition parameters. |
| PD | McCarthy_2016 | not_relevant | 1 | 0 | The text is a review article discussing clinical efficacy and mechanisms of trimetazidine but does not report any specific pharmacokinetic or pharmacodynamic data, exposure-response relationships, or numeric PD parameters. |
| popPK | Morin_1998 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of mitochondrial binding sites and does not report pharmacokinetic disposition parameters for trimetazidine. |
| popPK | Nenchev_2020 | relevant | 8 | 2 | The study reports PK ratios (AUC, Cmax) for trimetazidine in humans, but lacks absolute quantitative disposition parameters like clearance (CL) or volume (V). |
| popPK | Onay-Besikci_2008 | irrelevant | 2 | 0 | The paper is a comprehensive review of pharmacological effects and analytical techniques, and the provided evidence contains no original quantitative pharmacokinetic parameter values. |
| popPK | Othman_2021 | relevant | 8 | 4 | The study reports pharmacokinetic parameters (Cmax, Tmax, relative bioavailability) for trimetazidine in rabbits, but specific disposition parameters like clearance (CL) or volume (V) are not explicitly listed in the provided text. |
| popPK | Rosano_2004 | irrelevant | 0 | 0 | The paper is a clinical review discussing quality of life and therapeutic management in elderly patients, containing no quantitative pharmacokinetic parameters for trimetazidine. |
| popPK | Seecheran_2019 | irrelevant | 0 | 0 | The study is a pharmacodynamic assessment of trimetazidine's effect on clopidogrel platelet reactivity and does not report any pharmacokinetic parameters for trimetazidine. |
| PD | Seecheran_2019 | not_relevant | 3 | 2 | The study reports a qualitative change in platelet reactivity (PRU) after trimetazidine administration but does not provide concentration-effect data, dose-response curves, or specific PD parameters (e.g., Emax, EC50) for trimetazidine itself. |
| popPK | Sharma_2025 | irrelevant | 0 | 0 | The paper describes a genetically encoded fluorescent reporter for polyamines and is unrelated to trimetazidine pharmacokinetics. |
| PD | Sharma_2025 | not_relevant | 0 | 0 | The paper describes a genetically encoded fluorescent reporter for polyamines and does not investigate trimetazidine or report any pharmacodynamic parameters for it. |
| popPK | Shirahase_1988 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of platelet aggregation and does not report any pharmacokinetic parameters for trimetazidine. |
| popPK | Silveira_2008 | irrelevant | 0 | 0 | The study is a hemodynamic and metabolic assessment of myocardial protection in a swine model, not a pharmacokinetic study, and reports no disposition parameters for trimetazidine. |
| PD | Silveira_2008 | not_relevant | 0 | 0 | The study is a comparative clinical/experimental trial (3 groups) assessing hemodynamic outcomes, not a pharmacokinetic/pharmacodynamic modeling study; it does not report drug concentrations or fit a dose-response curve to derive PD parameters like Emax or EC50. |
| popPK | Simon_1997 | irrelevant | 0 | 0 | The study is a mechanistic investigation of trimetazidine's effect on mitochondrial function and cyclosporin A nephrotoxicity, reporting no pharmacokinetic parameters. |
| popPK | Simon_2001 | irrelevant | 0 | 0 | no_text gate: only 85 chars of text extracted (&lt; 400) |
| PGx | Sternberg_2025 | not_relevant | 0 | 0 | The paper investigates in vitro metabolism of trimetazidine by seminal vesicle and liver fractions but does not report any pharmacogenomic effects (gene variants/genotypes) on PK or PD parameters. |
| popPK | Tan_2025 | relevant | 8 | 0 | The study reports pharmacokinetic parameters for trimetazidine in humans, but the specific numeric values are not present in the provided evidence text. |
| popPK | Wang_2023 | relevant | 8 | 2 | The study reports pharmacokinetic parameters for trimetazidine, but the specific numeric values (Cmax, AUC, t1/2, etc.) are not present in the provided abstract text. |
| popPK | Won_2018 | irrelevant | 0 | 0 | The study is a retrospective analysis of medication dosing errors and does not report any pharmacokinetic parameters for trimetazidine. |
| popPK | Yang_2019 | irrelevant | 0 | 0 | The study investigates the cardioprotective mechanism of trimetazidine in sunitinib-induced cardiotoxicity and does not report any pharmacokinetic parameters. |
| PD | Yang_2019 | not_relevant | 2 | 1 | The study reports qualitative cardioprotective effects and an IC50 for sunitinib toxicity, but does not provide a quantitative exposure-response or dose-response model (e.g., Emax, EC50) for trimetazidine. |
| popPK | Zaouali_2010 | irrelevant | 0 | 0 | The study is a mechanistic investigation of liver preservation using trimetazidine as an additive, and it does not report any pharmacokinetic parameters for trimetazidine. |
| popPK | Zhang_2014 | irrelevant | 0 | 0 | The study investigates the clinical effect of trimetazidine on renal function parameters (creatinine, BUN, etc.) in shock patients and does not report any pharmacokinetic disposition parameters (CL, V, ka, etc.) for the drug. |
| popPK | Zhang_2021 | irrelevant | 0 | 0 | The study is a clinical trial assessing the efficacy of trimetazidine in preventing contrast-induced nephropathy, not a pharmacokinetic study reporting disposition parameters. |
| PGx | Zhou_2022 | not_relevant | 0 | 0 | The paper investigates the effect of a gene deletion (BSCL2) on cardiac function and metabolism, using trimetazidine as a therapeutic intervention, but does not report how a gene variant affects the pharmacokinetics or pharmacodynamics of trimetazidine itself. |
| popPK | Zini_1996 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of mitochondrial respiration, not a pharmacokinetic study reporting disposition parameters. |
| popPK | van_2025 | irrelevant | 0 | 0 | The study is a Phase 2a clinical trial focused on safety and pharmacodynamic outcomes (oxidative stress markers) in ALS patients, with no pharmacokinetic parameters reported. |
| PD | van_2025 | not_relevant | 2 | 1 | The study reports mean changes in biomarkers (MDA, 8-OHdG, energy expenditure) during treatment but does not provide drug concentrations or fit a concentration-effect/dose-response model, so no numeric PD parameters (Emax, EC50, etc.) are extractable. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
