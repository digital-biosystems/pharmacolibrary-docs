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
| 2026-10-05 16:20 | 2:22 | 0/0/0 | 1/0/0 | 0/0/0 | 84,519/2,454 | ollama / qwen3.8:27b-mtp-q8_0 | 15 | 5/10 | 14/1 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 0.99).">in vitro</span> | [Masola_2012_HPSE](drugs/drug_sulodexide/pd_Masola_2012_HPSE.md) | Heparanase-1 activity ← sulodexide · direct Emax (saturable) effect | — | Masola V et al., A new mechanism of action of sulodexide…, Journal of translational me… (2012) | [10.1186/1479-5876-10-213](https://doi.org/10.1186/1479-5876-10-213) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=sulodexide) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood | <sub>named in DrugBank's ADME text</sub> | prose |
| absorption | skeletal muscle | <sub>named in DrugBank's ADME text</sub> | prose |
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: SERPINC1 (potentiator), SERPIND1 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 423 matched, 45 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Zhang_2022.pdf` | Zhang F et al., Potential Anti-SARS-CoV-2 Activity of P…, Pharmaceuticals (Basel, Swi… (2022) | pd | 4 | [10.3390/ph15020258](https://doi.org/10.3390/ph15020258) | [35215371](https://www.ncbi.nlm.nih.gov/pubmed/35215371) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-05T16:19:44.298638+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Andreozzi_2012 | irrelevant | 0 | 0 | The paper is a narrative review of clinical efficacy in chronic venous disease and does not report any quantitative pharmacokinetic parameters for sulodexide. |
| popPK | Ban_2026 | irrelevant | 0 | 0 | The paper is a clinical efficacy study for livedoid vasculopathy and does not report any pharmacokinetic parameters for sulodexide. |
| popPK | Belcaro_2019 | irrelevant | 0 | 0 | The study is a clinical registry evaluating the efficacy of sulodexide in preventing retinal vein thrombosis, not a pharmacokinetic study, and contains no PK parameters. |
| popPK | Bentivegna_2015 | irrelevant | 0 | 0 | The paper is a clinical case report regarding the treatment of osteomyelitis and does not contain any pharmacokinetic data or quantitative disposition parameters for sulodexide. |
| popPK | Bontor_2024 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of sulodexide's antioxidant effects on endothelial cells and does not report any pharmacokinetic parameters. |
| popPK | Böhm_2025 | irrelevant | 0 | 0 | The paper is a review of pharmacological properties and therapeutic effects without original quantitative pharmacokinetic parameter values. |
| popPK | Capone-Braga_1987 | irrelevant | 0 | 0 | The provided evidence contains only a title and no quantitative pharmacokinetic parameters or study data for sulodexide. |
| popPK | Castelluccio_1991 | irrelevant | 0 | 0 | The study measures hemorheological parameters (blood viscosity, fibrinogen) rather than pharmacokinetic disposition parameters (CL, V, ka, etc.). |
| popPK | Chen_2021 | irrelevant | 0 | 0 | The paper is a network meta-analysis of tinnitus treatments and does not involve sulodexide or pharmacokinetic parameters. |
| popPK | Coccheri_2014 | irrelevant | 0 | 0 | The paper is a review of biological and clinical effects of sulodexide and does not report any quantitative pharmacokinetic parameters. |
| popPK | Crepaldi_1990 | irrelevant | 0 | 0 | The paper is a clinical efficacy trial reporting therapeutic outcomes (lipids, viscosity) rather than pharmacokinetic disposition parameters for sulodexide. |
| popPK | Critello_2019 | irrelevant | 0 | 0 | The study investigates the physical stability of sclerosing foams, not the pharmacokinetic disposition parameters of sulodexide. |
| popPK | De_2019 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of sulodexide's effect on endothelial cells and does not report any pharmacokinetic parameters. |
| popPK | Diaz_2024 | irrelevant | 0 | 0 | The paper is a review of the pathophysiology of chronic venous disease and mentions sulodexide's therapeutic benefits but contains no pharmacokinetic data or quantitative disposition parameters. |
| popPK | Dini_1995 | irrelevant | 0 | 0 | The paper is a clinical study on the tolerability and feasibility of sulodexide for lymphedema prevention, reporting no pharmacokinetic parameters. |
| popPK | Dou_2019 | irrelevant | 0 | 0 | The paper is a review of the chemical characteristics and clinical use of heparinoids, containing no original pharmacokinetic data or quantitative disposition parameters for sulodexide. |
| popPK | Duan_2021 | irrelevant | 0 | 0 | The study is a mechanistic investigation of sulodexide's effect on peritoneal fibrosis in rats and does not report any pharmacokinetic parameters. |
| popPK | Ferrari_2015 | irrelevant | 0 | 0 | The paper is a clinical efficacy study for tinnitus treatment and does not report any pharmacokinetic parameters for sulodexide. |
| popPK | Frati-Munari_2013 | irrelevant | 0 | 0 | The paper is a review of the endothelial glycocalyx and mentions sulodexide only as a therapeutic agent that restores glycocalyx dimensions, without reporting any pharmacokinetic parameters. |
| PD | Gaddi_2010 | not_relevant | 1 | 0 | The text is a qualitative review discussing the mechanism of action and clinical evidence for sulodexide but does not report any specific numeric PD parameters, concentration-effect curves, or dose-response data. |
| popPK | Gloviczki_2025 | irrelevant | 0 | 0 | The paper is a clinical review of venoactive compounds for chronic venous disease and does not report any pharmacokinetic parameters (CL, V, ka, etc.) for sulodexide. |
| popPK | Gonzalez_2021 | irrelevant | 0 | 0 | The study is a clinical trial evaluating the efficacy of sulodexide in reducing hyperpigmentation, not a pharmacokinetic study, and contains no PK parameters. |
| popPK | González-Larrocha_2017 | irrelevant | 0 | 0 | The provided evidence contains only the title of a review article and no quantitative pharmacokinetic data or original study values for sulodexide. |
| popPK | Harenberg_1998 | irrelevant | 1 | 0 | The paper is a review of pharmacodynamics and therapeutic properties that mentions a prolonged half-life qualitatively but provides no quantitative pharmacokinetic parameter values. |
| PD | Harenberg_1998 | not_relevant | 1 | 0 | The text is a qualitative review summarizing pharmacological effects and clinical efficacy without providing specific numeric PD parameters, concentration-effect curves, or PK/PD modeling data. |
| popPK | Heerspink_2008 | irrelevant | 0 | 0 | The study is a clinical trial evaluating the efficacy of sulodexide on albuminuria and does not report any pharmacokinetic parameters. |
| popPK | Hoppensteadt_2014 | irrelevant | 0 | 0 | The text is a qualitative pharmacological review describing mechanisms and clinical indications without reporting any quantitative pharmacokinetic parameters. |
| PD | Hu_2026 | not_relevant | 1 | 0 | The text is a review discussing translational barriers and mentions sulodexide as an example of a failed program, but it does not report any specific pharmacodynamic data, exposure-response relationships, or numeric PD parameters for the drug. |
| popPK | Huang_2023 | irrelevant | 0 | 0 | The paper is a mechanistic study on liver fibrosis in mice and does not report any pharmacokinetic parameters for sulodexide. |
| popPK | Huo_2026 | irrelevant | 0 | 0 | The study investigates the mechanism of microplastic-induced vascular injury where sulodexide is used only as a therapeutic agent to restore glycocalyx, with no pharmacokinetic parameters reported. |
| popPK | Hána_2023 | irrelevant | 0 | 0 | The paper is a review of the endothelial glycocalyx and mentions sulodexide only for its protective effects, without reporting any pharmacokinetic parameters. |
| PD | Jee_2012 | not_relevant | 3 | 1 | The paper describes a qualitative observation that increasing LMWH dose led to higher lipase activity, but it does not provide numeric concentration-effect data, dose-response curves, or specific PD parameters (Emax, EC50) for sulodexide. |
| popPK | Kamaev_2025 | irrelevant | 0 | 0 | The study evaluates clinical outcomes and biomarker changes (MMPs, cytokines) rather than pharmacokinetic parameters (CL, V, t1/2) for sulodexide. |
| popPK | Lambers_2007 | irrelevant | 0 | 0 | The paper describes the rationale and design of clinical trials for sulodexide's renoprotective efficacy, not its pharmacokinetics, and contains no PK parameters. |
| popPK | Lauver_2006 | irrelevant | 0 | 0 | The paper is a general review of sulodexide's properties and clinical applications without reporting any quantitative pharmacokinetic parameters or original disposition data. |
| popPK | Mannello_2013 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of sulodexide's effect on MMP-9 activity and does not report any pharmacokinetic parameters. |
| popPK | Mauro_1993 | irrelevant | 0 | 0 | The study reports pharmacodynamic effects (fibrinolysis and coagulation parameters) rather than quantitative pharmacokinetic disposition parameters (CL, V, ka, etc.). |
| PD | Mauro_1993 | not_relevant | 3 | 1 | The study reports qualitative confirmation of pro-fibrinolytic activity at two doses but does not provide numeric PD parameters (Emax, EC50) or a quantitative concentration-effect curve in the provided text. |
| popPK | Melkumyants_2022 | irrelevant | 0 | 0 | The study is a clinical trial assessing hematological effects (blood cells, platelets) and does not report any pharmacokinetic parameters for sulodexide. |
| popPK | Messa_1995 | irrelevant | 0 | 0 | The study reports pharmacodynamic effects (t-PA, PAI-1, viscosity) rather than pharmacokinetic parameters (CL, V, ka, t1/2). |
| popPK | Musil_2022 | irrelevant | 0 | 0 | The paper is a clinical review of venofarmaka for chronic venous disease and mentions sulodexide only in the context of ulcer healing efficacy, containing no pharmacokinetic parameters. |
| popPK | Navratil_2025 | irrelevant | 0 | 0 | The study is a mechanistic/physiological investigation of endothelial protection in pigs, not a pharmacokinetic study, and reports no PK parameters for sulodexide. |
| popPK | Nelson_2008 | irrelevant | 0 | 0 | This is a systematic review of clinical interventions for venous leg ulcers that lists sulodexide as a treatment option but does not report any pharmacokinetic parameters or quantitative disposition data. |
| popPK | Nelson_2011 | irrelevant | 0 | 0 | This is a systematic review of clinical interventions for venous leg ulcers that lists sulodexide as a treatment option but does not report any pharmacokinetic parameters or quantitative disposition data. |
| popPK | Nenci_2002 | irrelevant | 0 | 0 | The paper is a review of dermatan sulphate and its derivatives, mentioning sulodexide only as a clinically studied compound without providing any quantitative pharmacokinetic parameters. |
| popPK | Ofosu_1998 | irrelevant | 1 | 0 | The paper is a review summarizing pharmacological actions and clinical outcomes without reporting specific quantitative pharmacokinetic parameter values (e.g., CL, V, t1/2) for sulodexide. |
| PD | Ofosu_1998 | not_relevant | 2 | 1 | The text is a qualitative summary/review of pharmacological actions and clinical outcomes without providing specific numeric PD parameters (e.g., Emax, EC50) or concentration-effect curves. |
| popPK | Olde_2016 | irrelevant | 0 | 0 | The paper is a letter to the editor critiquing a meta-analysis on the renoprotective effects of sulodexide and contains no pharmacokinetic data or disposition parameters. |
| popPK | Ors_2024 | irrelevant | 0 | 0 | The study is a mechanistic investigation of sulodexide's effect on arterial contraction and nitric oxide pathways, reporting no pharmacokinetic parameters. |
| popPK | Pompilio_2023 | irrelevant | 0 | 0 | The paper is a correction to a meta-analysis regarding the clinical efficacy of sulodexide in preventing post-thrombotic syndrome, containing no pharmacokinetic data. |
| popPK | Radhakrishnamurthy_1986 | irrelevant | 0 | 0 | The paper is a mechanistic study of chemical and biologic properties (anticoagulant activity, lipoprotein lipase release) and does not report any pharmacokinetic parameters. |
| popPK | Raffetto_2020 | irrelevant | 0 | 0 | The paper is a review of venous leg ulcer pathophysiology and treatment, mentioning sulodexide only as a therapeutic agent without providing any pharmacokinetic data. |
| popPK | Rajewska-Tabor_2023 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of sulodexide's protective effects on endothelial cells, reporting no pharmacokinetic parameters. |
| popPK | Rossini_2010 | irrelevant | 0 | 0 | The study is a mechanistic/efficacy trial in animal models focusing on renal pathology and proteinuria, not a pharmacokinetic study reporting disposition parameters for sulodexide. |
| popPK | Ruggeri_1985 | irrelevant | 2 | 0 | The study describes qualitative tissue distribution (fluorescence location) rather than quantitative pharmacokinetic parameters like clearance or volume. |
| popPK | Schulman_2021 | irrelevant | 0 | 0 | The paper is a review of clinical trials for COVID-19 treatment and does not report any pharmacokinetic parameters for sulodexide. |
| popPK | Siddiqui_2020 | irrelevant | 0 | 0 | The study is an in-vitro pharmacodynamic assessment of anticoagulant activity (clotting assays, thrombin generation) and does not report any pharmacokinetic disposition parameters (CL, V, ka, etc.) for sulodexide. |
| popPK | Sohn_2021 | irrelevant | 0 | 0 | The study evaluates anti-thrombotic and anti-inflammatory histopathological effects, not pharmacokinetic parameters. |
| popPK | Souza_2022 | irrelevant | 0 | 0 | The study is a pharmacodynamic assessment of leukocyte-endothelium interaction and tissue perfusion, reporting no quantitative pharmacokinetic parameters (CL, V, ka, etc.) for sulodexide. |
| popPK | Tang_2025 | irrelevant | 0 | 0 | The study is a clinical trial evaluating the therapeutic effect of sulodexide on sepsis markers and does not report any pharmacokinetic parameters (CL, V, ka, etc.) for sulodexide. |
| popPK | Tardieu_1994 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on the biological activity of sulodexide on growth factors, containing no pharmacokinetic data. |
| popPK | Tiozzo_1989 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of cell proliferation and protein synthesis, not a pharmacokinetic study, and reports no disposition parameters for sulodexide. |
| popPK | Urbanek_2015 | irrelevant | 0 | 0 | The study evaluates the anti-inflammatory effects of sulodexide on biomarkers and cell function, not its pharmacokinetic disposition parameters. |
| popPK | Veraldi_2018 | irrelevant | 0 | 0 | The paper focuses on the fine structural and chemical characterization of sulodexide (molecular weight, composition) and does not report any pharmacokinetic parameters. |
| popPK | Vilnits_2019 | irrelevant | 0 | 0 | The study is a clinical trial assessing therapeutic outcomes in children with meningitis and does not report any pharmacokinetic parameters for sulodexide. |
| popPK | Wei_2024 | irrelevant | 0 | 0 | The paper focuses on the structural elucidation of sulodexide using chromatography and mass spectrometry, not on pharmacokinetic parameters. |
| popPK | Xu_2025 | irrelevant | 0 | 0 | The paper is a structural biology/enzymology study using sulodexide as a substrate for heparinase characterization, not a pharmacokinetic study. |
| popPK | Yin_2017 | irrelevant | 0 | 0 | The study is a mechanistic investigation of renal ischemia-reperfusion injury and does not report any pharmacokinetic parameters for sulodexide. |
| popPK | Ying_2023 | irrelevant | 0 | 0 | The study investigates the mechanistic effects of sulodexide on endothelial glycocalyx and permeability in sepsis models, but does not report any pharmacokinetic parameters (CL, V, ka, etc.) for sulodexide. |
| popPK | Yu_2017 | irrelevant | 0 | 0 | The paper is a meta-analysis of clinical efficacy outcomes (mortality, albuminuria) for heparinoids in diabetic kidney disease and does not report any pharmacokinetic parameters (CL, V, ka, etc.) for sulodexide. |
| popPK | Zaza_2015 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of sulodexide's effect on epithelial-to-mesenchymal transition in cell lines, reporting no pharmacokinetic parameters. |
| popPK | Zhang_2022 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of antiviral activity and binding affinity, not a pharmacokinetic study, and sulodexide is only one of several compounds tested. |
| PD | Zhang_2022 | not_relevant | 1 | 0 | The paper reports IC50 values for PPS and MPS, but only provides qualitative descriptions for sulodexide without numeric PD parameters. |
| popPK | Zhong_2025 | irrelevant | 0 | 0 | The study is a clinical cohort analysis of IgA nephropathy where sulodexide is only a co-administered therapeutic agent, with no pharmacokinetic parameters reported. |
| popPK | Zilişteanu_2015 | irrelevant | 0 | 0 | The study is a clinical efficacy trial evaluating proteinuria and renal function, not a pharmacokinetic study, and reports no PK parameters (CL, V, t1/2, etc.). |
| popPK | unknown_2010 | irrelevant | 0 | 0 | no_text gate: only 39 chars of text extracted (&lt; 400) |
| PD | unknown_2010 | not_relevant | 0 | 0 | The provided text is only a header for a poster session and contains no scientific content, data, or mention of sulodexide or pharmacodynamics. |
| popPK | unknown_2015 | irrelevant | 0 | 0 | no_text gate: only 106 chars of text extracted (&lt; 400) |
| PD | unknown_2015 | not_relevant | 0 | 0 | The provided text is only a header for a conference abstract collection and contains no specific data, results, or PD parameters for sulodexide. |
| popPK | unknown_2022 | irrelevant | 0 | 0 | no_text gate: only 89 chars of text extracted (&lt; 400) |
| PD | unknown_2022 | not_relevant | 0 | 0 | The provided text is only a conference title and contains no data, analysis, or mention of sulodexide pharmacodynamics. |
| popPK | unknown_2023 | irrelevant | 0 | 0 | no_text gate: only 16 chars of text extracted (&lt; 400) |
| PD | unknown_2023 | not_relevant | 0 | 0 | The provided text is only a conference header and contains no data, analysis, or mention of sulodexide pharmacodynamics. |
| popPK | van_2017 | irrelevant | 0 | 0 | The study investigates the effect of sulodexide on cardiac microvascular perfusion and glycocalyx integrity in rats, not its pharmacokinetic parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
