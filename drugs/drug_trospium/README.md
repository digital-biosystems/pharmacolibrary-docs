<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A03D&quot;,&quot;href&quot;:&quot;atc/A03D.md&quot;},{&quot;label&quot;:&quot;trospium&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Trospium_Doroshyenko2005_reference&quot;,&quot;label&quot;:&quot;Doroshyenko_2005_reference&quot;,&quot;href&quot;:&quot;drugs/drug_trospium/Trospium_Doroshyenko2005_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Trospium_Oefelein2013_reference&quot;,&quot;label&quot;:&quot;Oefelein_2013_reference&quot;,&quot;href&quot;:&quot;drugs/drug_trospium/Trospium_Oefelein2013_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# trospium

- **generic name:** trospium
- **ATC codes:** `A03DA06`, `G04BD09`
- **DrugBank:** [DB00209](https://go.drugbank.com/drugs/DB00209)
- **groups:** approved, investigational

## About

**Description.** Trospium is an antispasmodic agent used to treat the symptoms of overactive bladder, a condition that causes the bladder muscles to contract uncontrollably.[L6208] An overactive bladder leads to an increased urge to urinate, frequent urination, and sometimes, loss of control over urination.[L6208]  Trospium is manufactured by _Indevus Pharmaceutical Inc._ and was granted FDA approval in 2007.[L6211]

**Indication.** Trospium is indicated for the treatment of overactive bladder with symptoms of urge urinary incontinence, urgency, and urinary frequency.[L36823] It is also indicated in combination with [xanomeline] for the treatment of adult patients with schizophrenia.[L51629]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-18 11:16 | 7:44 | 1/0/1 | 0/1/0 | 0/0/0 | 241,251/16,531 | ollama / qwen3.8:27b-mtp-q8_0 | 18 | 2/11 | 18/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Doroshyenko_2005_reference](drugs/drug_trospium/Trospium_Doroshyenko2005_reference.md) | Doroshyenko O et al., Clinical pharmacokinetics of trospium c…, Clinical pharmacokinetics (2005) | [10.2165/00003088-200544070-00003](https://doi.org/10.2165/00003088-200544070-00003) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: T6_deviations</sub><br><sub>route_to: `engineer`</sub> | [Oefelein_2013_reference](drugs/drug_trospium/Trospium_Oefelein2013_reference.md) | Oefelein MG et al., Effect of concomitant administration of…, Clinical drug investigation (2013) | [10.1007/s40261-012-0049-6](https://doi.org/10.1007/s40261-012-0049-6) |

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | [Rönnpagel_2025](drugs/drug_trospium/pd_R_nnpagel_2025_OCT1_mediated_uptake.md) | Rönnpagel V et al., Substrate-specific inhibition of organi…, Drug metabolism and disposi… (2025) | [10.1016/j.dmd.2025.100074](https://doi.org/10.1016/j.dmd.2025.100074) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=trospium) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | brain | `CYP2D6` inhibitor | DrugBank actor |
| metabolism | liver | `CYP2D6` inhibitor | DrugBank actor |
| excretion | bile duct | <sub>“…chloride, the majority of the dose (85.2%) was recovered in feces and a smaller amount (5.…”</sub> | prose |
| excretion | kidney | <sub>“…es and a smaller amount (5.8% of the dose) was recovered in urine; 60% of the radioactivit…”</sub> | prose |

<sub>Actors without a tissue in the table: CHRM1 (target), CHRM3 (target), CHRM5 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 127 matched, 84 returned
- **screened:** 4  ·  **relevant:** 3
- **records:** 2  ·  extracted 0  ·  needs_review 2  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_6 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Abebe_2019.pdf` | Abebe BT et al., Effects of the P-Glycoprotein Inhibitor…, Journal of clinical pharmac… (2019) | popPK | 9 | [10.1002/jcph.1421](https://doi.org/10.1002/jcph.1421) | [30973998](https://pubmed.ncbi.nlm.nih.gov/30973998) | The study reports quantitative PK parameters (bioavailability, distribution volume changes, renal clearance ratios) for trospium, but specific absolute values for clearance, volume, or half-life are not explicitly listed in the provided text. |
| `Abebe_2020.pdf` | Abebe BT et al., Pharmacokinetic Drug-Drug Interactions…, Journal of clinical pharmac… (2020) | popPK | 9 | [10.1002/jcph.1523](https://doi.org/10.1002/jcph.1523) | [31542894](https://pubmed.ncbi.nlm.nih.gov/31542894) | The study is a PK/DDI study for trospium involving population modeling, but the evidence only provides renal clearance values and lacks the specific compartmental parameters (CL, V, Q, ka) or full population model estimates required for extraction. |
| `Doroshyenko_2005.pdf` | Doroshyenko O et al., Clinical pharmacokinetics of trospium c…, Clinical pharmacokinetics (2005) | popPK | 9 | [10.2165/00003088-200544070-00003](https://doi.org/10.2165/00003088-200544070-00003) | [15966754](https://pubmed.ncbi.nlm.nih.gov/15966754) | The text is a clinical pharmacokinetics review that explicitly reports quantitative disposition parameters for trospium, including volume of distribution (350-800 L), renal clearance (29 L/h), and elimination half-life (10-20 hours). |
| `Zhang_2012.pdf` | Zhang R et al., Pharmacokinetic and bioequivalence stud…, Arzneimittel-Forschung (2012) | popPK | 8 | [10.1055/s-0032-1304649](https://doi.org/10.1055/s-0032-1304649) | [22382787](https://pubmed.ncbi.nlm.nih.gov/22382787) | The study reports quantitative PK parameters (t1/2, Cmax, AUC) for trospium in humans, though it is a bioequivalence study rather than a population PK modeling study. |
| `Bexten_2015.pdf` | Bexten M et al., Expression of drug transporters and dru…, Molecular pharmaceutics (2015) | pd | 5 | [10.1021/mp500532x](https://doi.org/10.1021/mp500532x) | [25466967](https://www.ncbi.nlm.nih.gov/pubmed/25466967) | metadata signals extractable PD data (IC50) |
| `Dahlinger_2017.pdf` | Dahlinger D et al., Assessment of inhibitory effects on maj…, Therapeutic advances in uro… (2017) | pd | 5 | [10.1177/1756287217708951](https://doi.org/10.1177/1756287217708951) | [28747995](https://www.ncbi.nlm.nih.gov/pubmed/28747995) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-09-18T11:09:57.437061+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abebe_2019 | relevant | 9 | 4 | The study reports quantitative PK parameters (bioavailability, distribution volume changes, renal clearance ratios) for trospium, but specific absolute values for clearance, volume, or half-life are not explicitly listed in the provided text. |
| popPK | Abebe_2020 | relevant | 9 | 2 | The study is a PK/DDI study for trospium involving population modeling, but the evidence only provides renal clearance values and lacks the specific compartmental parameters (CL, V, Q, ka) or full population model estimates required for extraction. |
| popPK | Al-Hasani_2026 | irrelevant | 0 | 0 | The paper is a systematic review and meta-analysis of dopaminergic modulation of insulin secretion in pancreatic beta-cells and does not involve the drug trospium or report any pharmacokinetic parameters. |
| PD | Al-Hasani_2026 | not_relevant | 0 | 0 | The paper is a systematic review and meta-analysis of preclinical studies on dopamine and pancreatic beta-cells, and does not report any pharmacodynamic or exposure-response data for trospium. |
| PD | Beckmann-Knopp_1999 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition (IC50/Ki) of CYP450 by trospium, which is a pharmacokinetic interaction mechanism, not a pharmacodynamic exposure-response or dose-response relationship for the drug's therapeutic effect. |
| PD | Bexten_2015 | not_relevant | 0 | 0 | The paper focuses on the expression of transporters/enzymes in bladder urothelium and in vitro binding affinities, not on pharmacodynamic exposure-response or dose-response relationships in humans. |
| PD | Biastre_2009 | not_relevant | 1 | 0 | The paper is a narrative review that summarizes clinical efficacy and PK properties but does not report specific numeric PD parameters (e.g., Emax, EC50) or an exposure-response model. |
| PD | Cetinel_2013 | not_relevant | 2 | 1 | The paper is a qualitative review discussing mechanisms and general properties of anticholinergics, lacking specific numeric PD parameters or exposure-response models for trospium. |
| PD | Chapple_2008 | not_relevant | 1 | 0 | The paper is a systematic review and meta-analysis of clinical efficacy and safety outcomes, not a pharmacokinetic/pharmacodynamic study, and does not report numeric PD parameters like Emax or EC50 for trospium. |
| popPK | Cvijić_2014 | irrelevant | 2 | 0 | The study focuses on mechanistic in silico modeling of absorption (permeability, gastric emptying) rather than reporting quantitative population PK parameters like clearance or volume, and no numeric values are present in the evidence. |
| PD | Dahlinger_2017 | not_relevant | 0 | 0 | The paper focuses on in vitro CYP450 inhibition by spasmolytics, not on pharmacodynamic exposure-response or dose-response relationships for trospium in vivo. |
| PD | Fahmy_2016 | not_relevant | 1 | 0 | The paper reports clinical outcomes (incontinence episodes, bladder capacity) for a combination therapy but does not provide drug concentrations or fit a pharmacodynamic model to derive numeric PD parameters like Emax or EC50. |
| PD | Furukawa_2026 | not_relevant | 0 | 0 | The paper explicitly states that there were not enough studies to conduct a dose-response meta-analysis for xanomeline/trospium. |
| PD | Ganguly_2023 | not_relevant | 1 | 0 | The text is a qualitative review discussing mechanisms and general concentration gradients for intravesical antimuscarinics, but it does not report specific numeric PD parameters (e.g., Emax, EC50) or an extractable exposure-response curve for trospium. |
| popPK | Harnett_2013 | irrelevant | 0 | 0 | no_text gate: only 179 chars of text extracted (&lt; 400) |
| PD | Hegde_2006 | not_relevant | 3 | 2 | The paper is a review that qualitatively discusses PK/PD concepts and receptor occupancy for trospium but does not report a specific concentration-effect curve or numeric PD parameters (like Emax or EC50) derived from a direct analysis in this text. |
| popPK | Heinen_2013 | irrelevant | 1 | 0 | The study is an in-vitro mechanistic investigation of ion pairing and permeability, reporting no quantitative pharmacokinetic disposition parameters (CL, V, ka, etc.) for trospium. |
| popPK | Heinen_2013_2 | irrelevant | 2 | 0 | The study focuses on the mechanism of absorption enhancement using carrageenan complexes and reports qualitative observations of plasma concentration variations rather than quantitative population pharmacokinetic parameters (CL, V, ka) for trospium. |
| PD | Kachru_2021 | not_relevant | 0 | 0 | The paper is a retrospective cohort study comparing clinical outcomes (falls/hospitalizations) between drug classes, reporting hazard ratios rather than pharmacodynamic parameters like Emax or EC50. |
| PD | Kaul_2026 | not_relevant | 0 | 0 | The paper is a long-term safety and efficacy extension trial reporting clinical outcomes (PANSS, CGI-S) and adverse events, but it does not contain any pharmacokinetic data, exposure-response analysis, or numeric pharmacodynamic parameters for trospium. |
| popPK | Li_2025 | irrelevant | 0 | 0 | The paper is a retrospective cohort study on dementia risk associated with OAB medications, not a pharmacokinetic study, and contains no PK parameters for trospium. |
| PD | Li_2025 | not_relevant | 0 | 0 | The paper is an observational cohort study analyzing the association between OAB medication use and dementia risk using administrative data; it does not report any pharmacokinetic or pharmacodynamic modeling, concentration-effect relationships, or numeric PD parameters for trospium. |
| PD | Madersbacher_2006 | not_relevant | 1 | 0 | The text is a qualitative review comparing pharmacokinetic and pharmacodynamic profiles of anticholinergics without providing specific numeric PD parameters or exposure-response data for trospium. |
| PD | Malcher_2022 | not_relevant | 0 | 0 | The study is an epidemiological nested case-control analysis using administrative data (DDDs) to assess dementia risk, not a pharmacodynamic or exposure-response study with numeric PD parameters for trospium. |
| popPK | Meyer_2022 | irrelevant | 1 | 0 | The study is an in-vitro mechanistic analysis of transporter kinetics (vmax, KM) in cell lines, not a pharmacokinetic study reporting disposition parameters (CL, V, t1/2) for trospium in vivo. |
| PD | Michel_2006 | not_relevant | 1 | 0 | The text is a qualitative review discussing the role of metabolites in the pharmacodynamics of muscarinic antagonists and does not report any numeric PD parameters or exposure-response data for trospium. |
| PD | Miron_2025 | not_relevant | 1 | 0 | The text is a qualitative review of the drug mechanism and clinical trial outcomes, containing no numeric PD parameters, concentration-effect curves, or dose-response data. |
| PD | Preskorn_2025 | not_relevant | 1 | 0 | The text is a qualitative review of combination products and does not provide specific numeric PD parameters or exposure-response data for trospium. |
| popPK | Radwan_2012 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of disintegration and dissolution, not a pharmacokinetic study reporting quantitative disposition parameters for trospium. |
| PD | Rahman-Yildir_2022 | not_relevant | 0 | 0 | The paper focuses on in vitro dissolution modeling and drug release kinetics, not pharmacodynamics or exposure-response relationships. |
| popPK | Rovner_2004 | irrelevant | 1 | 0 | The text is a clinical review/overview that lacks quantitative pharmacokinetic parameters (CL, V, ka) and only provides qualitative descriptions of absorption timing. |
| PD | Rovner_2004 | not_relevant | 1 | 0 | The text is a general review of trospium chloride's pharmacology and clinical efficacy, containing no quantitative exposure-response or dose-response data, curves, or PD parameters. |
| popPK | Sandage_2006 | irrelevant | 2 | 0 | The study focuses on the pharmacokinetics of digoxin as the subject drug to assess drug-drug interactions, with trospium acting as the perpetrator, and no quantitative PK parameters for trospium are reported in the evidence. |
| popPK | Schladitz-Keil_1986 | irrelevant | 0 | 0 | no_text gate: only 116 chars of text extracted (&lt; 400) |
| popPK | Schröder_2004 | relevant | 4 | 2 | The study reports absorption parameters (Cmax, AUC, Tmax) for trospium but lacks explicit clearance, volume, or compartmental model parameters required for population PK. |
| popPK | Siafis_2024 | irrelevant | 0 | 0 | The paper is a protocol for a systematic review of muscarinic agonists in animal models of psychosis, and trospium is mentioned only as a co-administered peripheral antagonist for xanomeline, with no PK parameters reported. |
| PD | Siafis_2024 | not_relevant | 0 | 0 | The paper is a protocol for a systematic review of muscarinic agonists in animal models and does not report any pharmacodynamic data or parameters for trospium. |
| popPK | Singh-Franco_2005 | irrelevant | 2 | 1 | This is a review article that summarizes efficacy and general pharmacokinetic properties (bioavailability, elimination) without reporting specific quantitative disposition parameters like clearance, volume, or half-life. |
| popPK | Song_2017 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of Salvianolic Acid B (Sal B) in rats, not trospium. |
| popPK | Tannenbaum_2020 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for solifenacin, not trospium. |
| PD | Tannenbaum_2020 | not_relevant | 0 | 0 | The paper reports population pharmacokinetic (PK) modeling for solifenacin, not trospium, and contains no pharmacodynamic (PD) or exposure-response analysis. |
| popPK | Walter_1999 | irrelevant | 2 | 0 | The study reports only sparse plasma concentrations (ng/ml) without deriving quantitative pharmacokinetic parameters such as clearance, volume of distribution, or half-life. |
| popPK | Weiss_2023 | irrelevant | 2 | 0 | The paper is a methodological simulation study comparing model fits for AUC and MAT, and while it uses trospium data, it does not report the specific quantitative disposition parameters (CL, V, Q, ka) for trospium in the provided text. |
| PD | Wenge_2011 | not_relevant | 0 | 0 | The paper reports in vitro transporter kinetics (Km, Vmax, IC50 for OCT inhibition) rather than a pharmacodynamic exposure-response or dose-response relationship for the drug's therapeutic effect. |
| PD | Yamada_2018 | not_relevant | 1 | 0 | The text is a general review of antimuscarinic agents that qualitatively mentions dose-dependent adverse events but does not provide specific numeric PD parameters or concentration-effect data for trospium. |
| popPK | Zaheer_2019 | irrelevant | 0 | 0 | The study is a formulation and dissolution/disintegration analysis using trospium as a model drug, not a pharmacokinetic study reporting disposition parameters. |
| PD | Zubiaur_1997 | not_relevant | 0 | 0 | The paper is a retrospective clinical study on oxybutynin and imipramine; trospium is only mentioned as a second-line drug with no response, and no PK/PD data or numeric parameters are provided. |
| popPK | unknown_2016 | irrelevant | 0 | 0 | no_text gate: only 300 chars of text extracted (&lt; 400) |
| PD | unknown_2016 | not_relevant | 0 | 0 | The provided text is only the title of a conference abstract collection and contains no specific data, models, or parameters for trospium. |
| popPK | unknown_2021 | irrelevant | 0 | 0 | The paper contains abstracts on clinical pharmacy, nutrition, and ruxolitinib PK, but does not mention trospium or report any pharmacokinetic parameters for it. |
| PD | unknown_2021 | not_relevant | 0 | 0 | The text consists of abstracts regarding geriatric prescribing patterns, polypharmacy, and malabsorption, with no mention of trospium or any pharmacodynamic modeling. |
| popPK | unknown_2021_2 | irrelevant | 0 | 0 | no_text gate: only 65 chars of text extracted (&lt; 400) |
| PD | unknown_2021_2 | not_relevant | 0 | 0 | The provided text is only a header for a conference poster abstract section and contains no scientific content, data, or PD parameters for trospium. |
| PD | unknown_2022 | not_relevant | 0 | 0 | The text is a title for a review on BPH drugs and does not contain specific pharmacodynamic data or numeric parameters for trospium. |
| PD | unknown_2023 | not_relevant | 1 | 0 | The text is a title for a review article on drugs for overactive bladder and does not contain specific data, models, or numeric PD parameters for trospium. |
| PD | unknown_2024 | not_relevant | 0 | 0 | The provided text is only a title and does not contain any data, analysis, or numeric parameters regarding pharmacodynamics or exposure-response relationships. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-18 11:10 UTC</sub>
