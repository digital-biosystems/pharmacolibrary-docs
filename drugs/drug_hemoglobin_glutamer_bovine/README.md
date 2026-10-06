<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B05A&quot;,&quot;href&quot;:&quot;atc/B05A.md&quot;},{&quot;label&quot;:&quot;hemoglobin glutamer (bovine)&quot;}]"></div>

# hemoglobin glutamer (bovine)

- **generic name:** hemoglobin glutamer (bovine)
- **ATC codes:** `B05AA10`
- **DrugBank:** not captured · **PubChem:** not captured
- **groups:** not captured

## About

Hemoglobin glutamer (bovine), sold as Hemopure, is a blood substitute made from bovine hemoglobin, intended to carry oxygen in situations where transfusion may be needed. It is not an approved medicine in most countries; it remains an investigational oxygen therapeutic, with limited availability in a few markets such as South Africa.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q305143](https://www.wikidata.org/wiki/Q305143) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 22:44 | 0:39 | 0/0/0 | 0/0/0 | 0/0/0 | 15,536/1,102 | ollama / qwen3.8:27b-mtp-q8_0 | 5 | 3/2 | 5/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 10 matched, 16 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Anderson_1992 | relevant | 8 | 2 | The study reports quantitative disposition data (percent clearance, linear kinetics) for polymerized hemoglobin (hemoglobin_glutamer_bovine) in dogs, but lacks explicit compartmental PK parameters like CL, V, or half-life. |
| popPK | Bakker_1992 | irrelevant | 2 | 0 | The study reports qualitative changes in half-life (folds increase) and oxygen affinity (P50) for hemoglobin derivatives in rats, but does not provide quantitative PK parameters (CL, V, Q, ka) for the specific drug hemoglobin_glutamer_bovine. |
| popPK | Baylis_2006 | irrelevant | 0 | 0 | The study focuses on the physiological effects (blood pressure, renal function) of HBOC-201 in a rat model of CKD and does not report pharmacokinetic parameters such as clearance, volume of distribution, or half-life. |
| popPK | Berbers_1991 | irrelevant | 2 | 0 | The study reports qualitative vascular retention times and clearance mechanisms for a hemoglobin polymer in rats, but does not provide quantitative PK parameters (CL, V, ka) for hemoglobin_glutamer_bovine. |
| popPK | Bleeker_1986 | irrelevant | 2 | 3 | The study investigates a different hemoglobin derivative (HbNFPLP) rather than hemoglobin glutamer bovine, and only reports half-disappearance times without full compartmental PK parameters. |
| popPK | Bonegio_2006 | irrelevant | 2 | 0 | The study compares Hemolink and Hemopure (different HBOCs) and does not report specific PK parameters for hemoglobin_glutamer_bovine. |
| popPK | Bronkhorst-van_2023 | irrelevant | 0 | 0 | The study investigates laboratory interference of HBOC-201 on hematology analyzers and does not report pharmacokinetic parameters such as clearance, volume of distribution, or compartmental models. |
| popPK | Buehler_2010 | relevant | 8 | 2 | The paper describes pharmacokinetic studies of polymerized bovine hemoglobins (related to the subject drug) in guinea pigs and reports qualitative differences in clearance and half-life, but specific numeric parameter values are not present in the provided evidence. |
| popPK | Burlage_2022 | irrelevant | 0 | 0 | The study focuses on tissue preservation and transplantation of vascularized composite allografts, not the pharmacokinetics of hemoglobin_glutamer_bovine. |
| popPK | Feola_1988 | irrelevant | 0 | 0 | The study focuses on complement activation and toxicity mechanisms of hemoglobin solutions, not on pharmacokinetic disposition parameters like clearance or volume of distribution. |
| popPK | Feola_1988_2 | irrelevant | 0 | 0 | The paper is a toxicity study focusing on impurities and morbidity, not a pharmacokinetic study reporting quantitative disposition parameters like clearance or volume. |
| popPK | Figueroa_2022 | irrelevant | 0 | 0 | The study evaluates the feasibility of limb preservation using a hemoglobin-based oxygen carrier (HBOC-201) and reports physiological/metabolic outcomes, but does not provide pharmacokinetic parameters (CL, V, ka, etc.) for hemoglobin_glutamer_bovine. |
| popPK | Freitag_2005 | irrelevant | 0 | 0 | The study investigates tissue oxygenation and hemodynamics, not pharmacokinetic parameters (CL, V, ka) for hemoglobin_glutamer_bovine. |
| popPK | Gottschalk_2005 | irrelevant | 0 | 0 | The study assesses tissue oxygenation effects (tpO2) rather than pharmacokinetic disposition parameters (CL, V, etc.) for hemoglobin_glutamer_bovine. |
| popPK | Gu_2022 | irrelevant | 0 | 0 | The paper describes the synthesis and biophysical characterization (oxygen affinity, haptoglobin binding) of a new hemoglobin-based oxygen carrier, but does not report quantitative pharmacokinetic parameters (CL, V, t1/2) from in vivo dosing studies. |
| popPK | Gurney_2004 | irrelevant | 0 | 0 | The paper is a hemodynamic and survival study in a swine hemorrhagic shock model, not a pharmacokinetic study, and reports no quantitative disposition parameters (CL, V, etc.) for the drug. |
| popPK | Horn_1998 | irrelevant | 0 | 0 | The study investigates hemodynamic and tissue oxygenation effects of HBOC-201 in a stenosis model, not pharmacokinetic disposition parameters. |
| popPK | Hughes_1995 | irrelevant | 2 | 1 | The study is primarily pharmacodynamic (exercise capacity) and only reports a single half-life value without a compartmental model or other quantitative disposition parameters (CL, V). |
| popPK | Hughes_1995_2 | irrelevant | 4 | 2 | The study reports only a single plasma half-life value (~20 hours) without associated volume of distribution or clearance parameters, and lacks a compartmental or population PK model. |
| popPK | Jahr_2002 | irrelevant | 0 | 0 | The study investigates the interference of hemoglobin glutamer-250 (bovine) on coagulation analyzers and does not report any pharmacokinetic parameters. |
| popPK | Jahr_2008 | irrelevant | 1 | 0 | The paper is a literature review and market analysis of HBOC-201 (hemoglobin glutamer-250 bovine) that does not report original quantitative pharmacokinetic parameters. |
| popPK | Jahr_2010 | irrelevant | 0 | 0 | The study focuses on platelet function (PFA-100) and does not report any pharmacokinetic parameters such as clearance, volume, or half-life for hemoglobin_glutamer_bovine. |
| popPK | Keipert_2017 | irrelevant | 0 | 0 | The paper is a review of HBOC development and regulatory history, does not focus on hemoglobin_glutamer_bovine, and contains no quantitative pharmacokinetic parameters. |
| popPK | King_2005 | irrelevant | 0 | 0 | The paper is a clinical/animal outcome study focusing on resuscitation efficacy and hemodynamics, not a pharmacokinetic study reporting quantitative disposition parameters like clearance or volume of distribution. |
| popPK | Korte_2018 | irrelevant | 0 | 0 | The paper investigates analytical interference of Hemopure on clinical chemistry platforms and does not report any pharmacokinetic parameters. |
| popPK | Laccetti_2005 | irrelevant | 0 | 0 | no_text gate: only 55 chars of text extracted (&lt; 400) |
| popPK | Laing_2017 | irrelevant | 0 | 0 | The study evaluates Hemopure (HBOC) as a perfusate component in a liver preservation model, not as a drug subject to pharmacokinetic analysis, and reports no PK parameters for the drug itself. |
| popPK | Levy_2003 | irrelevant | 0 | 0 | The text is a general overview of the drug's clinical use and approval status, containing no quantitative pharmacokinetic parameters or disposition data. |
| popPK | Li_2014 | irrelevant | 0 | 0 | The paper is a mechanistic study on the cardiovascular toxicity of hemoglobin-based oxygen carriers (HBOCs) and the protective effects of captopril, not a pharmacokinetic study reporting quantitative disposition parameters for hemoglobin_glutamer_bovine. |
| popPK | Mackenzie_2019 | irrelevant | 2 | 0 | The paper is a clinical management review of HBOC-201 (a polymerized bovine hemoglobin) that mentions a half-life of 19 hours but does not report quantitative population pharmacokinetic parameters (CL, V, Q, ka) or a compartmental model. |
| popPK | Mahboub_2020 | irrelevant | 1 | 0 | The study is an ex situ organ perfusion experiment assessing renal function, not a pharmacokinetic study, and does not report quantitative disposition parameters (CL, V, etc.) for the drug. |
| popPK | Meiser_2021 | irrelevant | 2 | 0 | The paper is a clinical case report describing the use of Hemopure (bovine hemoglobin) for oxygen transport in a patient with extreme anemia, but it does not report quantitative pharmacokinetic parameters (CL, V, Q, ka) or a compartmental model. |
| popPK | Munoz_2026 | irrelevant | 0 | 0 | The study focuses on the vascular function and hemodynamic effects of hemoglobin-based oxygen carriers (HBOCs) in animal models, not on the pharmacokinetic parameters (CL, V, etc.) of the specific drug hemoglobin_glutamer_bovine. |
| popPK | Ortegon_2003 | irrelevant | 0 | 0 | The study is an in-vitro immunological investigation of neutrophil activation and does not report any pharmacokinetic parameters for hemoglobin_glutamer_bovine. |
| popPK | Ortegon_2006 | irrelevant | 0 | 0 | The study is a surgical efficacy trial measuring flap necrosis area, not a pharmacokinetic study, and reports no disposition parameters for the drug. |
| popPK | Philbin_2005 | irrelevant | 0 | 0 | The study is a clinical efficacy trial in a swine hemorrhagic shock model reporting hemodynamic and survival outcomes, not a pharmacokinetic study with quantitative disposition parameters for hemoglobin_glutamer_bovine. |
| popPK | Pool_2024 | irrelevant | 0 | 0 | The study is an ex-vivo organ perfusion experiment assessing renal function and oxygen carrier suitability, not a pharmacokinetic study reporting disposition parameters (CL, V, etc.) for the drug. |
| popPK | Rice_2006 | irrelevant | 0 | 0 | The study focuses on hemodynamic responses (blood pressure) and survival outcomes in a hemorrhagic shock model, not on pharmacokinetic parameters like clearance or volume of distribution. |
| popPK | Rivera-Chávez_2014 | irrelevant | 0 | 0 | The study focuses on neutrophil activation and inflammatory markers, not pharmacokinetic parameters for hemoglobin_glutamer_bovine. |
| popPK | Said_2020 | irrelevant | 0 | 0 | The study is a feasibility trial for ex-vivo limb perfusion using HBOC-201 as a perfusate, not a pharmacokinetic study, and reports no quantitative PK parameters (CL, V, etc.) for the drug. |
| popPK | Sehgal_1983 | irrelevant | 0 | 0 | The paper describes in vitro preparation and characteristics (P50, viscosity, molecular weight) of polymerized hemoglobin, not in vivo pharmacokinetic parameters (CL, V, t1/2) for hemoglobin_glutamer_bovine. |
| popPK | Standl_1997 | irrelevant | 2 | 1 | The study reports hemodynamic and oxygen transport parameters rather than quantitative pharmacokinetic disposition parameters (CL, V, Q, ka) for the drug. |
| popPK | Standl_2001 | irrelevant | 0 | 0 | The paper is a narrative review of haemoglobin-based oxygen carriers and does not report original quantitative pharmacokinetic parameters for hemoglobin_glutamer_bovine. |
| popPK | Taverne_2017 | irrelevant | 0 | 0 | The study focuses on the hemodynamic and vasoconstrictive mechanisms of HBOC-201 in swine, not on pharmacokinetic parameters like clearance or volume of distribution. |
| popPK | Veronese_2008 | irrelevant | 0 | 0 | The paper is a general review of PEGylation chemistry and does not report specific quantitative pharmacokinetic parameters for hemoglobin_glutamer_bovine. |
| popPK | Wicks_2003 | irrelevant | 0 | 0 | The study investigates hemoglobin raffimer (Hemolink), not hemoglobin glutamer bovine. |
| popPK | Williams_2020 | irrelevant | 2 | 0 | The study is a toxicity/pharmacodynamic comparison in guinea pigs that mentions half-life qualitatively but does not report quantitative PK parameters (CL, V, Q, ka) for hemoglobin_glutamer_bovine. |
| popPK | York_2003 | irrelevant | 0 | 0 | The study is a physiological resuscitation trial in pigs that reports hemodynamic and tissue oxygenation outcomes, not quantitative pharmacokinetic parameters (CL, V, ka) for the drug. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
