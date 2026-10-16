<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;sulodexide&quot;}]"></div>

# sulodexide

- **generic name:** sulodexide
- **ATC codes:** `B01AB11`
- **DrugBank:** [DB06271](https://go.drugbank.com/drugs/DB06271) · **PubChem:** not captured
- **groups:** approved, investigational, withdrawn

## About

Sulodexide is an antithrombotic medicine of the heparin group, acting as an anticoagulant, and has also been described as having anti-diabetic and lipid-lowering roles. It is an approved medicine and has also been studied investigationally, though it does not appear to be authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7636496](https://www.wikidata.org/wiki/Q7636496) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 18:04 | 3:59 | 0/0/0 | 1/0/0 | 0/0/0 | 256,467/7,877 | einfracz / qwen3.8-27b | 15 | 5/10 | 14/1 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.6). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 0.99).">in vitro</span> | [Masola_2012_HPSE](drugs/drug_sulodexide/pd_Masola_2012_HPSE.md) | Heparanase-1 (HPSE) activity ← sulodexide · direct Emax (saturable) effect | — | Masola V et al., A new mechanism of action of sulodexide…, Journal of translational me… (2012) | [10.1186/1479-5876-10-213](https://doi.org/10.1186/1479-5876-10-213) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=sulodexide).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| absorption | skeletal muscle | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: SERPINC1 (potentiator), SERPIND1 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 23 matched, 51 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Cristofori_1985.pdf` | Cristofori M et al., Pharmacokinetics and distribution of a…, Arzneimittel-Forschung (1985) | popPK | 10 | not captured | [4074405](https://pubmed.ncbi.nlm.nih.gov/4074405) | The study reports sulodexide pharmacokinetics in rats, but specific quantitative parameter values (CL, V, t1/2) are not included in the provided evidence text. |
| `Zhang_2022.pdf` | Zhang F et al., Potential Anti-SARS-CoV-2 Activity of P…, Pharmaceuticals (Basel, Swi… (2022) | pd | 4 | [10.3390/ph15020258](https://doi.org/10.3390/ph15020258) | [35215371](https://www.ncbi.nlm.nih.gov/pubmed/35215371) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-14T18:04:47.485421+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Adiguzel_2009 | irrelevant | 0 | 0 | The study focuses on in vitro anticoagulant and platelet modulatory effects (PT, APTT, IC50) and does not report pharmacokinetic disposition parameters. |
| popPK | Andreozzi_2012 | irrelevant | 0 | 0 | The paper is a narrative review of clinical efficacy in chronic venous disease and does not report any quantitative pharmacokinetic parameters for sulodexide. |
| popPK | Ban_2026 | irrelevant | 0 | 0 | The paper is a clinical efficacy study for livedoid vasculopathy and does not report any pharmacokinetic parameters for sulodexide. |
| popPK | Belcaro_2019 | irrelevant | 0 | 0 | The study is a clinical registry evaluating the efficacy of sulodexide in preventing recurrent retinal vein thrombosis, reporting no pharmacokinetic parameters. |
| popPK | Bentivegna_2015 | irrelevant | 0 | 0 | This is a clinical case report regarding osteomyelitis treatment where sulodexide is a co-administered drug, not a pharmacokinetic study. |
| popPK | Bontor_2024 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of sulodexide's antioxidant effects on endothelial cells and contains no pharmacokinetic parameters (CL, V, t1/2, etc.). |
| popPK | Böhm_2025 | irrelevant | 0 | 0 | The paper is a review of pharmacological properties and therapeutic effects without original quantitative pharmacokinetic parameter values. |
| popPK | Capone-Braga_1987 | irrelevant | 0 | 0 | The provided evidence contains only a title and no quantitative pharmacokinetic parameters or study data for sulodexide. |
| popPK | Castelluccio_1991 | irrelevant | 0 | 0 | The study measures hemorheological parameters (blood viscosity, fibrinogen) rather than pharmacokinetic disposition parameters (CL, V, ka, etc.). |
| popPK | Chen_2021 | irrelevant | 0 | 0 | The paper is a network meta-analysis of tinnitus treatments and does not involve sulodexide or pharmacokinetic parameters. |
| popPK | Coccheri_2014 | irrelevant | 0 | 0 | The paper is a narrative review discussing the biological and clinical effects of sulodexide in arterial disorders, but it does not report any pharmacokinetic parameters or disposition data. |
| popPK | Crepaldi_1990 | irrelevant | 0 | 0 | The paper is a clinical efficacy trial reporting therapeutic outcomes (lipids, viscosity) rather than pharmacokinetic disposition parameters for sulodexide. |
| popPK | Cristofori_1985 | relevant | 10 | 2 | The study reports sulodexide pharmacokinetics in rats, but specific quantitative parameter values (CL, V, t1/2) are not included in the provided evidence text. |
| popPK | Critello_2019 | irrelevant | 0 | 0 | The study investigates the physical stability of sclerosing foams, not the pharmacokinetic disposition parameters of sulodexide. |
| popPK | De_2019 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on endothelial cells and does not report any quantitative pharmacokinetic parameters for sulodexide. |
| popPK | Diaz_2024 | irrelevant | 0 | 0 | The paper is a review on the mechanisms of chronic venous disease and mentions sulodexide's therapeutic effects but contains no pharmacokinetic data or quantitative disposition parameters. |
| popPK | Dini_1995 | irrelevant | 0 | 0 | The paper is a clinical study on the tolerability and feasibility of sulodexide for lymphedema prevention, reporting no pharmacokinetic parameters. |
| popPK | Dou_2019 | irrelevant | 0 | 0 | The paper is a review focusing on the chemical characteristics and clinical uses of heparinoids, with no original pharmacokinetic data or quantitative disposition parameters for sulodexide. |
| popPK | Duan_2021 | irrelevant | 0 | 0 | The study is a mechanistic investigation of sulodexide's effect on peritoneal fibrosis in rats and does not report any pharmacokinetic parameters. |
| popPK | Ferrari_2015 | irrelevant | 0 | 0 | The paper is a clinical efficacy study for tinnitus treatment and does not report any pharmacokinetic parameters for sulodexide. |
| popPK | Frati-Munari_2013 | irrelevant | 0 | 0 | The paper is a review of the vascular endothelial glycocalyx where sulodexide is mentioned as a therapeutic agent to restore glycocalyx structure, not as a subject of pharmacokinetic analysis. |
| popPK | Gaddi_2010 | irrelevant | 1 | 0 | The paper is a review of sulodexide's pharmacodynamics and nephroprotective mechanisms, providing no quantitative pharmacokinetic parameters such as clearance, volume, or half-life. |
| PD | Gaddi_2010 | not_relevant | 1 | 0 | The text is a qualitative review discussing the mechanism of action and clinical evidence for sulodexide but does not report any specific numeric PD parameters, concentration-effect curves, or dose-response data. |
| popPK | Gloviczki_2025 | irrelevant | 0 | 0 | This is a clinical review of venoactive compounds for chronic venous disease that does not report any pharmacokinetic parameters or disposition data for sulodexide. |
| popPK | Gonzalez_2021 | irrelevant | 0 | 0 | The study is a clinical trial evaluating the efficacy of sulodexide in reducing hyperpigmentation, not a pharmacokinetic study, and contains no PK parameters. |
| popPK | González-Larrocha_2017 | irrelevant | 0 | 0 | The provided evidence contains only the title of a review article and no quantitative pharmacokinetic data or original study values for sulodexide. |
| popPK | Harenberg_1998 | irrelevant | 1 | 0 | The paper is a review summarizing general pharmacological properties and clinical efficacy without reporting specific quantitative PK parameter values (CL, V, etc.) for sulodexide. |
| PD | Harenberg_1998 | not_relevant | 1 | 0 | The text is a qualitative review summarizing pharmacological effects and clinical efficacy without providing specific numeric PD parameters, concentration-effect curves, or PK/PD modeling data. |
| popPK | Heerspink_2008 | irrelevant | 0 | 0 | The study is a clinical trial evaluating the efficacy of sulodexide on albuminuria and does not report any pharmacokinetic parameters. |
| popPK | Hoppensteadt_2014 | irrelevant | 0 | 0 | The text is a qualitative pharmacological review describing mechanisms and clinical indications without reporting any quantitative pharmacokinetic parameters. |
| popPK | Hu_2026 | irrelevant | 0 | 0 | This is a qualitative review of drug development failures in diabetic kidney disease and does not report any quantitative pharmacokinetic parameters or models for sulodexide. |
| PD | Hu_2026 | not_relevant | 1 | 0 | The text is a review discussing translational barriers and mentions sulodexide as an example of a failed program, but it does not report any specific pharmacodynamic data, exposure-response relationships, or numeric PD parameters for the drug. |
| popPK | Huang_2023 | irrelevant | 0 | 0 | The paper is a mechanistic study on liver fibrosis in mice and does not report any pharmacokinetic parameters for sulodexide. |
| popPK | Huo_2026 | irrelevant | 0 | 0 | The study investigates the mechanism of microplastic-induced vascular injury where sulodexide is used only as a therapeutic agent to restore glycocalyx, with no pharmacokinetic parameters reported. |
| popPK | Hána_2023 | irrelevant | 0 | 0 | The paper is a review of the endothelial glycocalyx and mentions sulodexide only for its protective effects, without reporting any pharmacokinetic parameters. |
| popPK | Jee_2012 | irrelevant | 0 | 0 | The study measures lipoprotein lipase activity (pharmacodynamics/biochemistry) rather than the pharmacokinetic parameters (CL, V, etc.) of sulodexide itself. |
| PD | Jee_2012 | not_relevant | 3 | 1 | The paper describes a qualitative observation that increasing LMWH dose led to higher lipase activity, but it does not provide numeric concentration-effect data, dose-response curves, or specific PD parameters (Emax, EC50) for sulodexide. |
| popPK | Kamaev_2025 | irrelevant | 0 | 0 | The study is a clinical trial evaluating the pharmacodynamic effects (biomarkers) of sulodexide and contains no pharmacokinetic parameters. |
| popPK | Lambers_2007 | irrelevant | 0 | 0 | The paper describes the design of clinical trials for renoprotection endpoints and does not report any pharmacokinetic parameters (e.g., CL, Vd, half-life) for sulodexide. |
| popPK | Lauver_2006 | irrelevant | 0 | 0 | The paper is a general review of sulodexide's properties and clinical applications without reporting any quantitative pharmacokinetic parameters or original disposition data. |
| popPK | Mannello_2013 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of sulodexide's effect on MMP-9 activity and does not report any pharmacokinetic parameters. |
| popPK | Masola_2012 | irrelevant | 0 | 0 | The study is a mechanistic in-vitro investigation of sulodexide's effect on heparanase-1 and epithelial-mesenchymal transition, reporting no pharmacokinetic parameters. |
| popPK | Mauro_1993 | irrelevant | 0 | 0 | The study reports pharmacodynamic effects (fibrinolysis/coagulation parameters) rather than quantitative pharmacokinetic disposition parameters for sulodexide. |
| PD | Mauro_1993 | not_relevant | 3 | 1 | The study reports qualitative confirmation of pro-fibrinolytic activity at two doses but does not provide numeric PD parameters (Emax, EC50) or a quantitative concentration-effect curve in the provided text. |
| popPK | Melkumyants_2022 | irrelevant | 0 | 0 | The study is a clinical trial assessing hematological effects (blood cells, platelets) and does not report any pharmacokinetic parameters for sulodexide. |
| popPK | Messa_1995 | irrelevant | 1 | 0 | The study reports pharmacodynamic effects (t-PA, PAI-1, viscosity) rather than pharmacokinetic parameters like clearance or half-life. |
| popPK | Musil_2022 | irrelevant | 0 | 0 | The paper is a clinical review of venofarmaka for chronic venous disease and mentions sulodexide only in the context of ulcer healing efficacy, containing no pharmacokinetic parameters. |
| popPK | Navratil_2025 | irrelevant | 0 | 0 | The study investigates the protective effects of sulodexide on endothelial glycocalyx in a porcine kidney transplant model and does not report any quantitative pharmacokinetic parameters such as clearance or volume. |
| popPK | Nelson_2008 | irrelevant | 0 | 0 | The paper is a clinical systematic review of treatments for venous leg ulcers that mentions sulodexide as an oral treatment option but contains no pharmacokinetic data or disposition parameters. |
| popPK | Nelson_2011 | irrelevant | 0 | 0 | This is a clinical systematic review on venous leg ulcer treatments that lists sulodexide as a comparator/agent but does not report any quantitative pharmacokinetic parameters. |
| popPK | Nenci_2002 | irrelevant | 0 | 0 | The paper is a review of dermatan sulphate and its derivatives, mentioning sulodexide only as a clinically studied compound without providing any quantitative pharmacokinetic parameters. |
| popPK | Ofosu_1998 | irrelevant | 2 | 0 | The paper is a review/summary of pharmacological actions and does not contain specific quantitative disposition parameters (CL, V, t1/2) in the provided evidence. |
| PD | Ofosu_1998 | not_relevant | 2 | 1 | The text is a qualitative summary/review of pharmacological actions and clinical outcomes without providing specific numeric PD parameters (e.g., Emax, EC50) or concentration-effect curves. |
| popPK | Olde_2016 | irrelevant | 0 | 0 | The paper is a letter to the editor critiquing a meta-analysis on the renoprotective effects of sulodexide and contains no pharmacokinetic data or disposition parameters. |
| popPK | Ors_2024 | irrelevant | 0 | 0 | This is a mechanistic study investigating the vascular pharmacodynamic effects (arterial contraction/relaxation) of sulodexide, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Pompilio_2023 | irrelevant | 0 | 0 | The evidence is an author correction regarding a typo in a meta-analysis of clinical outcomes (post-thrombotic syndrome incidence) for sulodexide, containing no pharmacokinetic parameters or models. |
| popPK | Radhakrishnamurthy_1986 | irrelevant | 0 | 0 | The paper is a mechanistic study of chemical and biologic properties (anticoagulant activity, lipoprotein lipase release) and does not report any pharmacokinetic parameters. |
| popPK | Raffetto_2020 | irrelevant | 0 | 0 | The paper is a pathophysiology review that mentions sulodexide only as a potential therapeutic agent, without reporting any pharmacokinetic parameters or values. |
| popPK | Rajewska-Tabor_2023 | irrelevant | 0 | 0 | This is an in vitro mechanistic study on endothelial cells, not a pharmacokinetic study reporting disposition parameters for sulodexide. |
| popPK | Rossini_2010 | irrelevant | 0 | 0 | This is a pharmacodynamic study investigating the renal protective effects of sulodexide, not a pharmacokinetic study, and it reports no quantitative disposition parameters (CL, V, ka, t1/2) for sulodexide. |
| popPK | Ruggeri_1985 | irrelevant | 2 | 0 | The study describes qualitative tissue distribution using fluorescence microscopy without reporting quantitative PK parameters like clearance, volume, or half-life. |
| popPK | Schulman_2021 | irrelevant | 0 | 0 | The paper is a review/perspective on anticoagulant therapy for COVID-19 and does not report any quantitative pharmacokinetic parameters for sulodexide. |
| popPK | Siddiqui_2020 | irrelevant | 0 | 0 | The study is an in-vitro pharmacodynamic assessment of anticoagulant activity (clotting assays, thrombin generation) and does not report any pharmacokinetic disposition parameters (CL, V, ka, etc.) for sulodexide. |
| popPK | Sohn_2021 | irrelevant | 0 | 0 | The study is a histopathological evaluation of anti-thrombotic and anti-inflammatory effects in rats, reporting no quantitative pharmacokinetic parameters. |
| popPK | Souza_2022 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic effects (leukocyte-endothelium interaction and perfusion) of sulodexide, not its pharmacokinetics. |
| popPK | Tang_2025 | irrelevant | 0 | 0 | This is a clinical efficacy study assessing the effect of sulodexide on endothelial markers in sepsis, not a pharmacokinetic study, and it reports no disposition parameters. |
| popPK | Tardieu_1994 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on the biological activity of sulodexide on growth factors, containing no pharmacokinetic data. |
| popPK | Tiozzo_1989 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of cell proliferation and protein synthesis, not a pharmacokinetic study, and reports no disposition parameters for sulodexide. |
| popPK | Urbanek_2015 | irrelevant | 0 | 0 | The study evaluates the anti-inflammatory effects of sulodexide on biomarkers and cell function, not its pharmacokinetic disposition parameters. |
| popPK | Veraldi_2018 | irrelevant | 0 | 0 | The paper focuses on the fine structural and chemical characterization of sulodexide (molecular weight, composition) and does not report any pharmacokinetic parameters. |
| popPK | Vilnits_2019 | irrelevant | 0 | 0 | The paper is a clinical efficacy study of sulodexide for purulent meningitis and does not report any pharmacokinetic parameters. |
| popPK | Wei_2024 | irrelevant | 0 | 0 | The paper focuses on the structural elucidation and analytical methodology of sulodexide, not on its pharmacokinetic disposition parameters. |
| popPK | Xu_2025 | irrelevant | 0 | 0 | The paper is a structural biology/enzymology study using sulodexide as a substrate for heparinase characterization, not a pharmacokinetic study. |
| popPK | Yin_2017 | irrelevant | 0 | 0 | The study is a mechanistic investigation of renal ischemia-reperfusion injury and does not report any pharmacokinetic parameters for sulodexide. |
| popPK | Ying_2023 | irrelevant | 0 | 0 | The study investigates the mechanistic effects of sulodexide on endothelial glycocalyx and permeability, not its pharmacokinetic parameters. |
| popPK | Yu_2017 | irrelevant | 0 | 0 | This is a clinical meta-analysis evaluating the therapeutic efficacy of sulodexide in diabetic kidney disease, not a pharmacokinetic study, and it contains no PK parameters like clearance or volume. |
| popPK | Zaza_2015 | irrelevant | 0 | 0 | This is an in-vitro mechanistic study investigating the effect of sulodexide on epithelial-to-mesenchymal transition in cells, containing no pharmacokinetic or disposition parameters. |
| popPK | Zhang_2022 | irrelevant | 0 | 0 | no_text gate: only 93 chars of text extracted (&lt; 400) |
| PD | Zhang_2022 | not_relevant | 1 | 0 | The paper reports IC50 values for PPS and MPS, but only provides qualitative descriptions for sulodexide without numeric PD parameters. |
| popPK | Zhong_2025 | irrelevant | 0 | 0 | The study is a clinical cohort analysis of IgA nephropathy where sulodexide is only a co-administered therapeutic agent, with no pharmacokinetic parameters reported. |
| popPK | Zilişteanu_2015 | irrelevant | 0 | 0 | The study evaluates the clinical efficacy of sulodexide on proteinuria and renal function but does not report any pharmacokinetic parameters (CL, V, ka, etc.). |
| popPK | unknown_2010 | irrelevant | 0 | 0 | no_text gate: only 39 chars of text extracted (&lt; 400) |
| PD | unknown_2010 | not_relevant | 0 | 0 | The provided text is only a header for a poster session and contains no scientific content, data, or mention of sulodexide or pharmacodynamics. |
| popPK | unknown_2015 | irrelevant | 0 | 0 | no_text gate: only 106 chars of text extracted (&lt; 400) |
| PD | unknown_2015 | not_relevant | 0 | 0 | The provided text is only a header for a conference abstract collection and contains no specific data, results, or PD parameters for sulodexide. |
| popPK | unknown_2022 | irrelevant | 0 | 0 | no_text gate: only 89 chars of text extracted (&lt; 400) |
| PD | unknown_2022 | not_relevant | 0 | 0 | The provided text is only a conference title and contains no data, analysis, or mention of sulodexide pharmacodynamics. |
| popPK | unknown_2023 | irrelevant | 0 | 0 | no_text gate: only 16 chars of text extracted (&lt; 400) |
| PD | unknown_2023 | not_relevant | 0 | 0 | The provided text is only a conference header and contains no data, analysis, or mention of sulodexide pharmacodynamics. |
| popPK | van_2017 | irrelevant | 0 | 0 | The study assesses the effect of sulodexide on cardiac microvascular perfusion and glycocalyx function in rats, but does not report any pharmacokinetic parameters (clearance, volume, half-life) for the drug. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
