<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;luseogliflozin&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Luseogliflozin_Samukawa2017_reference&quot;,&quot;label&quot;:&quot;Samukawa_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_luseogliflozin/Luseogliflozin_Samukawa2017_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Sasaki_2015_UGE&quot;,&quot;label&quot;:&quot;Sasaki_2015 \u00b7 UGE&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_luseogliflozin/pd_Sasaki_2015_UGE.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Sato_2024_HbA1c&quot;,&quot;label&quot;:&quot;Sato_2024 \u00b7 HbA1c&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_luseogliflozin/pd_Sato_2024_HbA1c.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# luseogliflozin

- **generic name:** luseogliflozin
- **ATC codes:** `A10BK07`
- **DrugBank:** [DB12214](https://go.drugbank.com/drugs/DB12214) · **PubChem:** [CID 11988953](https://pubchem.ncbi.nlm.nih.gov/compound/11988953)
- **molar mass:** 434.55 g/mol (C23H30O6S) — DrugBank
- **groups:** investigational

## About

Luseogliflozin is an SGLT2 inhibitor studied for the treatment of type 2 diabetes. It is not authorised in the European Union and remains investigational.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27275212](https://www.wikidata.org/wiki/Q27275212) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 23:51 | 0:28 | 0/0/1 | 1/0/2 | 0/0/0 | 114,483/2,514 | einfracz / qwen3.8-27b | 9 | 2/8 | 8/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.727). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: T1_t_half_terminal</sub><br><sub>route_to: `scholar`</sub> | [Samukawa_2017_reference](drugs/drug_luseogliflozin/Luseogliflozin_Samukawa2017_reference.md) | ▶ model + simulator | 1-compartment, oral | 4 | Samukawa Y et al., Mechanism-Based Pharmacokinetic-Pharmac…, Biological & pharmaceutical… (2017) | [10.1248/bpb.b16-00998](https://doi.org/10.1248/bpb.b16-00998) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.2). Primary extraction retained.">cross-check: disputed</span> | [Samukawa_2017_UGE](drugs/drug_luseogliflozin/pd_Samukawa_2017_UGE.md) | UGE ← luseogliflozin · target-mediated drug disposition | — | Samukawa Y et al., Mechanism-Based Pharmacokinetic-Pharmac…, Biological & pharmaceutical… (2017) | [10.1248/bpb.b16-00998](https://doi.org/10.1248/bpb.b16-00998) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.714). Primary extraction retained.">cross-check: disputed</span> | [Sasaki_2015_UGE](drugs/drug_luseogliflozin/pd_Sasaki_2015_UGE.md) | urinary glucose excretion ← luseogliflozin · direct sigmoid Emax (Hill) effect | ▶ model + simulator | Sasaki T et al., Pharmacokinetics, Pharmacodynamics, and…, Advances in therapy (2015) | [10.1007/s12325-015-0200-x](https://doi.org/10.1007/s12325-015-0200-x) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Sato_2024_HbA1c](drugs/drug_luseogliflozin/pd_Sato_2024_HbA1c.md) | HbA1c change ← Luseogliflozin (normalized dose) · direct sigmoid Emax (Hill) effect | ▶ model + simulator | Sato H et al., Model-based meta-analysis of HbA1c redu…, Scientific reports (2024) | [10.1038/s41598-024-76256-6](https://doi.org/10.1038/s41598-024-76256-6) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 28 matched, 28 returned
- **screened:** 5  ·  **relevant:** 3
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Mizuno-Yasuhira_2014.pdf` | Mizuno-Yasuhira A et al., A Strategy for assessing potential drug…, Drug metabolism and disposi… (2014) | pd | 5 | [10.1124/dmd.114.058305](https://doi.org/10.1124/dmd.114.058305) | [25005603](https://www.ncbi.nlm.nih.gov/pubmed/25005603) | metadata signals extractable PD data (IC50) |
| `Chino_2017.pdf` | Chino Y et al., In vitro evaluation of potential drug i…, Xenobiotica; the fate of fo… (2017) | pgx | 7 | [10.1080/00498254.2016.1193913](https://doi.org/10.1080/00498254.2016.1193913) | [27324291](https://www.ncbi.nlm.nih.gov/pubmed/27324291) | metadata signals extractable PGX data (CYP2C19, PK/PD-context) |
| `Miyata_2017.pdf` | Miyata A et al., Metabolite profiling and enzyme reactio…, Xenobiotica; the fate of fo… (2017) | pgx | 7 | [10.1080/00498254.2016.1193263](https://doi.org/10.1080/00498254.2016.1193263) | [27347703](https://www.ncbi.nlm.nih.gov/pubmed/27347703) | metadata signals extractable PGX data (UGT1A1, PK/PD-context) |

<sub>queue written 2026-10-14T23:51:27.524664+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chino_2017 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study evaluating CYP inhibition/induction and transporter interactions, not a pharmacokinetic study reporting quantitative disposition parameters like clearance or volume. |
| PD | Chino_2017 | not_relevant | 0 | 0 | The paper reports in vitro CYP inhibition/induction and transporter interaction data (IC50s for enzyme/transporter inhibition), which are pharmacokinetic interaction parameters, not pharmacodynamic exposure-response or dose-response relationships for the drug's therapeutic effect. |
| PGx | Chino_2017 | not_relevant | 0 | 0 | The paper reports in vitro CYP and transporter interactions for luseogliflozin, not pharmacogenomic effects of gene variants on PK/PD parameters. |
| popPK | Inoue_2019 | irrelevant | 0 | 0 | This is a model-based meta-analysis of pharmacodynamic effects (HbA1c/FPG) in T2DM, not a pharmacokinetic study of luseogliflozin. |
| PD | Inoue_2019 | not_relevant | 0 | 0 | The paper is a model-based meta-analysis of antidiabetic drug classes (DPP-4i, GLP-1r, SGLT2i) and does not report specific pharmacodynamic parameters or exposure-response relationships for luseogliflozin. |
| popPK | Kobuchi_2017 | irrelevant | 2 | 0 | The paper describes a bioanalytical method validation for luseogliflozin in rats and does not report quantitative pharmacokinetic parameters (CL, V, etc.) in the provided evidence. |
| PD | Kobuchi_2017 | not_relevant | 0 | 0 | The paper describes the development and validation of an LC-MS/MS method for luseogliflozin quantitation and mentions its application to PK studies, but it does not report any pharmacodynamic data, exposure-response relationships, or numeric PD parameters. |
| popPK | Kong_2023 | irrelevant | 0 | 0 | The paper is an in silico molecular docking study where luseogliflozin is used only as a reference compound for IC50 comparison, with no pharmacokinetic disposition parameters reported. |
| PD | Kong_2023 | not_relevant | 0 | 0 | The paper is an in silico study using molecular docking and dynamics; it cites a literature IC50 for luseogliflozin but does not report any experimental exposure-response, dose-response, or PK/PD analysis for the drug. |
| popPK | Lo_2018 | irrelevant | 0 | 0 | The paper is a systematic review of glucose-lowering therapies in chronic kidney disease and does not report specific quantitative pharmacokinetic parameters (CL, V, ka, etc.) for luseogliflozin. |
| PD | Lo_2018 | not_relevant | 0 | 0 | The paper is a systematic review of clinical trials in CKD and does not report any pharmacokinetic or pharmacodynamic modeling, exposure-response analysis, or numeric PD parameters for luseogliflozin. |
| PGx | Miyata_2017 | not_relevant | 1 | 1 | The paper describes general metabolic pathways and enzymes (CYP/UGT) in humans but does not report specific gene variant effects on pharmacokinetic parameters. |
| popPK | Mizuno-Yasuhira_2014 | irrelevant | 0 | 0 | no_text gate: only 144 chars of text extracted (&lt; 400) |
| PD | Mizuno-Yasuhira_2014 | not_relevant | 0 | 0 | The paper focuses on a strategy for assessing drug-drug interactions involving intestinal transporters and does not report any pharmacodynamic or exposure-response data for luseogliflozin. |
| popPK | Nakashima_2022 | irrelevant | 0 | 0 | The study is a clinical trial analyzing the effect of luseogliflozin on estimated plasma volume and heart failure parameters, not a pharmacokinetic study reporting disposition parameters like clearance, volume of distribution, or half-life. |
| popPK | Nishimura_2015 | irrelevant | 0 | 0 | The study reports pharmacodynamic effects (glucose levels, insulin, glucagon) and safety, but does not report quantitative pharmacokinetic parameters (CL, V, ka, etc.) for luseogliflozin. |
| popPK | Ortiz-Seller_2026 | irrelevant | 0 | 0 | The paper is a network meta-analysis of clinical trials focusing on diabetic retinopathy outcomes, not a pharmacokinetic study, and contains no PK parameters for luseogliflozin. |
| PD | Ortiz-Seller_2026 | not_relevant | 1 | 0 | The paper is a network meta-analysis of clinical trial outcomes (diabetic retinopathy) and reports no pharmacokinetic or pharmacodynamic parameters (e.g., Emax, EC50) or exposure-response relationships for luseogliflozin. |
| popPK | Samukawa_2016 | irrelevant | 0 | 0 | The paper is a pharmacodynamic subanalysis of glycemic variability and does not report any pharmacokinetic parameters (CL, V, ka, etc.) for luseogliflozin. |
| PD | Samukawa_2016 | not_relevant | 3 | 2 | The paper reports descriptive pharmacodynamic changes (glucose, UGE, insulin) in responder/non-responder groups but does not provide a concentration-effect or dose-response model with numeric PD parameters like Emax or EC50. |
| popPK | Samukawa_2017 | relevant | 8 | 3 | The study models luseogliflozin PK (2-compartment, ka, lag) as part of a PK-PD model, but specific quantitative PK parameter estimates (CL, V, ka) are not present in the provided text or tables, which focus on PD (UGE) and inhibition constants. |
| popPK | Samukawa_2017_2 | relevant | 8 | 2 | The study is a PK study of luseogliflozin, but the evidence only provides summary statistics (Cmax, AUC ratios) and lacks specific compartmental parameters like clearance (CL), volume (V), or half-life (t1/2). |
| PD | Samukawa_2017_2 | not_relevant | 0 | 0 | The study is a pharmacokinetic evaluation in hepatic impairment subjects and does not report any pharmacodynamic parameters, exposure-response relationships, or dose-effect data for luseogliflozin. |
| popPK | Sasaki_2015 | relevant | 5 | 2 | The study reports non-compartmental PK parameters (Cmax, Tmax, AUC, t1/2) for luseogliflozin, but the specific numeric values are contained in Table 2 which is not included in the provided evidence. |
| popPK | Sato_2024 | irrelevant | 1 | 0 | The study is a model-based meta-analysis of HbA1c reduction (pharmacodynamics) and explicitly states that luseogliflozin was excluded from the quantitative modeling because its data were not publicly available. |
| popPK | Tahara_2016 | irrelevant | 2 | 0 | The study is an animal (mouse) investigation comparing SGLT2 inhibitors, and the provided evidence contains no quantitative pharmacokinetic parameter values (e.g., CL, V, ka) for luseogliflozin. |
| PD | Tahara_2016 | not_relevant | 2 | 1 | The text is an abstract describing a comparative study in mice that classifies drugs by duration and onset of effect but does not provide specific numeric PD parameters (e.g., Emax, EC50) or explicit concentration-effect curves for luseogliflozin. |
| popPK | Tahara_2016_2 | irrelevant | 1 | 0 | The paper focuses on antidiabetic pharmacodynamic effects in mice and does not report quantitative pharmacokinetic parameters for luseogliflozin. |
| PD | Tahara_2016_2 | not_relevant | 2 | 1 | The paper describes qualitative antidiabetic effects and relative potency comparisons in mice but does not provide numeric PD parameters (e.g., EC50, Emax) or extractable concentration-effect curves for luseogliflozin. |
| popPK | Wang_2022 | irrelevant | 0 | 0 | The study analyzes the pharmacodynamic effect of SGLT-2 inhibitors on body weight using Emax models, not pharmacokinetic disposition parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-14 23:51 UTC</sub>
