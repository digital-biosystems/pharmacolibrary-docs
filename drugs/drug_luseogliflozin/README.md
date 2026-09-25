<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;luseogliflozin&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Luseogliflozin_Samukawa2017_reference&quot;,&quot;label&quot;:&quot;Samukawa_2017_reference&quot;,&quot;href&quot;:&quot;drugs/drug_luseogliflozin/Luseogliflozin_Samukawa2017_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# luseogliflozin

- **generic name:** luseogliflozin
- **ATC codes:** `A10BK07`
- **DrugBank:** [DB12214](https://go.drugbank.com/drugs/DB12214)
- **groups:** investigational

## About

**Description.** Luseogliflozin has been used in trials studying the treatment of Diabetes Melltius, Type 2.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-22 08:47 | 15:47 | 1/0/0 | 2/1/0 | 0/0/0 | 203,900/4,408 | ollama / qwen3.8:27b-mtp-q8_0 | 10 | 1/8 | 9/1 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: T1_t_half_terminal</sub><br><sub>route_to: `scholar`</sub> | [Samukawa_2017_reference](drugs/drug_luseogliflozin/Luseogliflozin_Samukawa2017_reference.md) | Samukawa (2017) | — |

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Samukawa_2017](drugs/drug_luseogliflozin/pd_Samukawa_2017_UGE.md) | Samukawa (2017) | — |
| <span class="pk-badge pk-badge--green">extracted</span> | [Sasaki_2015](drugs/drug_luseogliflozin/pd_Sasaki_2015_UGE.md) | Sasaki T et al., Pharmacokinetics, Pharmacodynamics, and…, Advances in therapy (2015) | [10.1007/s12325-015-0200-x](https://doi.org/10.1007/s12325-015-0200-x) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Sato_2024](drugs/drug_luseogliflozin/pd_Sato_2024_HbA1c.md) | Sato H et al., Model-based meta-analysis of HbA1c redu…, Scientific reports (2024) | [10.1038/s41598-024-76256-6](https://doi.org/10.1038/s41598-024-76256-6) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 28 matched, 28 returned
- **screened:** 4  ·  **relevant:** 3
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Samukawa_2017_2.pdf` | Samukawa Y et al., Luseogliflozin, an SGLT2 Inhibitor, in…, Clinical pharmacology in dr… (2017) | popPK | 8 | [10.1002/cpdd.364](https://doi.org/10.1002/cpdd.364) | [28783873](https://pubmed.ncbi.nlm.nih.gov/28783873) | The study is a PK study of luseogliflozin, but the evidence only provides summary statistics (Cmax, AUC ratios) and lacks specific compartmental parameters like clearance (CL), volume (V), or half-life (t1/2). |
| `Mizuno-Yasuhira_2014.pdf` | Mizuno-Yasuhira A et al., A Strategy for assessing potential drug…, Drug metabolism and disposi… (2014) | pd | 5 | [10.1124/dmd.114.058305](https://doi.org/10.1124/dmd.114.058305) | [25005603](https://www.ncbi.nlm.nih.gov/pubmed/25005603) | metadata signals extractable PD data (IC50) |
| `Chino_2017.pdf` | Chino Y et al., In vitro evaluation of potential drug i…, Xenobiotica; the fate of fo… (2017) | pgx | 7 | [10.1080/00498254.2016.1193913](https://doi.org/10.1080/00498254.2016.1193913) | [27324291](https://www.ncbi.nlm.nih.gov/pubmed/27324291) | metadata signals extractable PGX data (CYP2C19, PK/PD-context) |
| `Miyata_2017.pdf` | Miyata A et al., Metabolite profiling and enzyme reactio…, Xenobiotica; the fate of fo… (2017) | pgx | 7 | [10.1080/00498254.2016.1193263](https://doi.org/10.1080/00498254.2016.1193263) | [27347703](https://www.ncbi.nlm.nih.gov/pubmed/27347703) | metadata signals extractable PGX data (UGT1A1, PK/PD-context) |

<sub>queue written 2026-09-22T08:44:41.487347+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chino_2017 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study evaluating CYP inhibition/induction and transporter interactions, not a pharmacokinetic study reporting quantitative disposition parameters like clearance or volume. |
| PD | Chino_2017 | not_relevant | 0 | 0 | The paper reports in vitro CYP inhibition/induction and transporter interaction data (IC50s for enzyme/transporter inhibition), which are pharmacokinetic interaction parameters, not pharmacodynamic exposure-response or dose-response relationships for the drug's therapeutic effect. |
| PGx | Chino_2017 | not_relevant | 0 | 0 | The paper reports in vitro drug-drug interaction potential (CYP/transporter inhibition/induction) but does not investigate the effect of genetic variants on pharmacokinetics or pharmacodynamics. |
| popPK | Inoue_2019 | irrelevant | 0 | 0 | The study is a model-based meta-analysis of efficacy (FPG/HbA1c) and does not report pharmacokinetic parameters for luseogliflozin. |
| PD | Inoue_2019 | not_relevant | 0 | 0 | The paper is a model-based meta-analysis of antidiabetic drug classes (DPP-4i, GLP-1r, SGLT2i) and does not report specific pharmacodynamic parameters or exposure-response relationships for luseogliflozin. |
| popPK | Kobuchi_2017 | irrelevant | 2 | 0 | The paper describes a bioanalytical method validation for luseogliflozin in rats and does not report quantitative pharmacokinetic parameters (CL, V, etc.) in the provided evidence. |
| PD | Kobuchi_2017 | not_relevant | 0 | 0 | The paper describes the development and validation of an LC-MS/MS method for luseogliflozin quantitation and mentions its application to PK studies, but it does not report any pharmacodynamic data, exposure-response relationships, or numeric PD parameters. |
| popPK | Kong_2023 | irrelevant | 0 | 0 | The paper is an in silico molecular docking study where luseogliflozin is used only as a reference compound for IC50 comparison, with no pharmacokinetic disposition parameters reported. |
| PD | Kong_2023 | not_relevant | 0 | 0 | The paper is an in silico study using molecular docking and dynamics; it cites a literature IC50 for luseogliflozin but does not report any experimental exposure-response, dose-response, or PK/PD analysis for the drug. |
| popPK | Lo_2018 | irrelevant | 0 | 0 | This is a systematic review of clinical efficacy and safety outcomes (HbA1c, BP, etc.) in diabetes and CKD, not a pharmacokinetic study, and it does not report any PK parameters for luseogliflozin. |
| PD | Lo_2018 | not_relevant | 0 | 0 | The paper is a systematic review of clinical trials in CKD and does not report any pharmacokinetic or pharmacodynamic modeling, exposure-response analysis, or numeric PD parameters for luseogliflozin. |
| PGx | Miyata_2017 | not_relevant | 0 | 0 | The paper describes metabolic pathways and enzymes but does not report pharmacogenomic effects of specific gene variants on PK/PD parameters. |
| popPK | Mizuno-Yasuhira_2014 | irrelevant | 0 | 0 | no_text gate: only 144 chars of text extracted (&lt; 400) |
| PD | Mizuno-Yasuhira_2014 | not_relevant | 0 | 0 | The paper focuses on a strategy for assessing drug-drug interactions involving intestinal transporters and does not report any pharmacodynamic or exposure-response data for luseogliflozin. |
| popPK | Nakashima_2022 | irrelevant | 0 | 0 | The study reports clinical outcomes (estimated plasma volume changes) rather than pharmacokinetic parameters (CL, V, ka, etc.) for luseogliflozin. |
| popPK | Nishimura_2015 | irrelevant | 0 | 0 | The study reports pharmacodynamic effects (glucose levels, insulin, glucagon) and safety, but does not report quantitative pharmacokinetic parameters (CL, V, ka, etc.) for luseogliflozin. |
| popPK | Ortiz-Seller_2026 | irrelevant | 0 | 0 | The paper is a network meta-analysis of clinical trials focusing on diabetic retinopathy outcomes, not a pharmacokinetic study, and contains no PK parameters for luseogliflozin. |
| PD | Ortiz-Seller_2026 | not_relevant | 1 | 0 | The paper is a network meta-analysis of clinical trial outcomes (diabetic retinopathy) and reports no pharmacokinetic or pharmacodynamic parameters (e.g., Emax, EC50) or exposure-response relationships for luseogliflozin. |
| popPK | Samukawa_2016 | irrelevant | 0 | 0 | The paper is a pharmacodynamic subanalysis of glycemic variability and does not report any pharmacokinetic parameters (CL, V, ka, etc.) for luseogliflozin. |
| PD | Samukawa_2016 | not_relevant | 3 | 2 | The paper reports descriptive pharmacodynamic changes (glucose, UGE, insulin) in responder/non-responder groups but does not provide a concentration-effect or dose-response model with numeric PD parameters like Emax or EC50. |
| popPK | Samukawa_2017 | relevant | 8 | 2 | The paper describes a population PK-PD model for luseogliflozin and mentions PK parameters (2-compartment model), but the specific numeric values for CL, V, or ka are not present in the provided text or tables, likely residing in the full results section or supplementary material not included here. |
| popPK | Samukawa_2017_2 | relevant | 8 | 2 | The study is a PK study of luseogliflozin, but the evidence only provides summary statistics (Cmax, AUC ratios) and lacks specific compartmental parameters like clearance (CL), volume (V), or half-life (t1/2). |
| PD | Samukawa_2017_2 | not_relevant | 0 | 0 | The study is a pharmacokinetic evaluation in hepatic impairment subjects and does not report any pharmacodynamic parameters, exposure-response relationships, or dose-effect data. |
| popPK | Sasaki_2015 | relevant | 5 | 2 | The study reports non-compartmental PK parameters (Cmax, Tmax, AUC, t1/2) for luseogliflozin, but the specific numeric values are contained in Table 2 which is not included in the provided evidence. |
| popPK | Sato_2024 | irrelevant | 0 | 0 | The paper is a model-based meta-analysis of HbA1c reduction (pharmacodynamics) and explicitly states that luseogliflozin was excluded from the analysis due to lack of public data. |
| popPK | Tahara_2016 | irrelevant | 2 | 0 | The study is an animal (mouse) investigation comparing SGLT2 inhibitors, and the provided evidence contains no quantitative pharmacokinetic parameter values (e.g., CL, V, ka) for luseogliflozin. |
| PD | Tahara_2016 | not_relevant | 2 | 1 | The text is an abstract describing a comparative study in mice that classifies drugs by duration and onset of effect but does not provide specific numeric PD parameters (e.g., Emax, EC50) or explicit concentration-effect curves for luseogliflozin. |
| popPK | Tahara_2016_2 | irrelevant | 1 | 0 | The paper focuses on antidiabetic pharmacodynamic effects in mice and does not report quantitative pharmacokinetic parameters for luseogliflozin. |
| PD | Tahara_2016_2 | not_relevant | 2 | 1 | The paper describes qualitative antidiabetic effects and relative potency comparisons in mice but does not provide numeric PD parameters (e.g., EC50, Emax) or extractable concentration-effect curves for luseogliflozin. |
| popPK | Wang_2022 | irrelevant | 0 | 0 | The study reports pharmacodynamic parameters (weight loss Emax and ET50) rather than pharmacokinetic disposition parameters (CL, V, ka, etc.) for luseogliflozin. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-22 08:43 UTC</sub>
