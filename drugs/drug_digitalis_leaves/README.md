<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01A&quot;,&quot;href&quot;:&quot;atc/C01A.md&quot;},{&quot;label&quot;:&quot;digitalis leaves&quot;}]"></div>

# digitalis leaves

- **generic name:** digitalis leaves
- **ATC codes:** `C01AA03`
- **DrugBank:** not captured · **PubChem:** not captured
- **groups:** not captured

## About

Digitalis leaves are a cardiac glycoside preparation used for heart conditions such as heart failure and atrial fibrillation. They are classified for cardiac therapy, but today they have largely been replaced by purified digitalis glycosides such as digoxin.

<small>⚠️ **Unverified** — written by `glm-5.3-flash` from general knowledge (no Wikidata entry found) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 02:01 | 2:26 | 0/0/0 | 0/0/0 | 0/0/0 | 76,657/3,131 | ollama / qwen3.8:27b-mtp-q8_0 | 7 | 1/6 | 7/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 1544 matched, 53 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Aronson_1976 | irrelevant | 2 | 0 | The study focuses on digoxin (a different drug) rather than digitalis leaves, and reports only plasma concentrations without specific PK parameter values like clearance or volume. |
| popPK | Bigger_1985 | irrelevant | 0 | 0 | The text describes the mechanisms of digitalis toxicity and electrophysiological effects, but contains no pharmacokinetic parameters or quantitative disposition data. |
| popPK | Carroll_2023 | irrelevant | 0 | 0 | The paper is a mechanistic study on the biosynthesis of digoxin in plants (identifying the P450scc enzyme) and does not report pharmacokinetic parameters for digitalis leaves. |
| popPK | Dasgupta_2023 | irrelevant | 0 | 0 | The paper is a review of digoxin immunoassay interference and does not report pharmacokinetic parameters for digitalis leaves. |
| popPK | Doherty_1977 | irrelevant | 2 | 0 | The paper is a review of digoxin (a specific glycoside, not the plant digitalis leaves) and lacks original quantitative PK parameter values for the subject drug. |
| popPK | Doherty_1985 | irrelevant | 0 | 0 | The paper is a clinical review discussing the use of digitalis glycosides and does not report original quantitative pharmacokinetic parameters for digitalis leaves. |
| popPK | FRASER_1964 | irrelevant | 0 | 0 | no_text gate: only 22 chars of text extracted (&lt; 400) |
| popPK | Fisch_1985 | irrelevant | 0 | 0 | The paper is a review of the clinical manifestations and electrophysiologic mechanisms of digitalis toxicity, containing no pharmacokinetic parameters or quantitative disposition data. |
| popPK | Gerakaris_2022 | irrelevant | 0 | 0 | The paper is a clinical review of digoxin's safety and efficacy in heart failure and atrial fibrillation, containing no pharmacokinetic parameter estimates (CL, V, ka, etc.). |
| popPK | Goldman_2001 | irrelevant | 0 | 0 | The paper is a historical review of digitalis standardization and does not report any quantitative pharmacokinetic parameters. |
| popPK | Gozalpour_2014 | irrelevant | 0 | 0 | The study focuses on the transport mechanism of convallatoxin (a Lily of the Valley toxin) via P-glycoprotein, not the pharmacokinetics of digitalis leaves. |
| popPK | Gu_2025 | irrelevant | 0 | 0 | The study focuses on digoxin, not digitalis leaves, and does not report specific PK parameters for the target drug. |
| popPK | Halkin_1975 | irrelevant | 2 | 2 | The study focuses on digoxin (a specific glycoside), not digitalis leaves (the crude plant material), and reports renal clearance rather than a full population PK model for the subject drug. |
| popPK | Hauptman_1999 | irrelevant | 0 | 0 | The paper is a review of the molecular and clinical pharmacology of digitalis without reporting original quantitative pharmacokinetic parameters. |
| popPK | Haustein_1981 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of digitoxin and digoxin, not digitalis leaves. |
| popPK | Hinderling_1991 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of digoxin, not digitalis leaves. |
| popPK | Hirai_2022 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for digoxin, not digitalis leaves. |
| popPK | Iacuone_1976 | irrelevant | 1 | 0 | The paper describes a case of accidental digitoxin poisoning and focuses on clinical management and diagnosis, without reporting quantitative pharmacokinetic parameters like clearance or volume of distribution. |
| popPK | Iisalo_1977 | irrelevant | 0 | 0 | The paper discusses the pharmacokinetics of digoxin, not digitalis leaves, and is a review without specific quantitative parameter values for the target drug. |
| popPK | Iten_2018 | irrelevant | 0 | 0 | no_text gate: only 15 chars of text extracted (&lt; 400) |
| popPK | Johnson_1999 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of digoxin (a cardiac glycoside) and sparfloxacin, not digitalis leaves (the plant material). |
| popPK | Komatsu_2015 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for digoxin, not digitalis leaves. |
| popPK | Kramer_1977 | irrelevant | 0 | 0 | The study investigates cross-reactivity of digitoxin in digoxin assays and does not report pharmacokinetic parameters for digitalis leaves. |
| popPK | Kuhlmann_1985 | irrelevant | 0 | 0 | The study investigates digitoxin, which is a different drug from digitalis_leaves (the specified subject drug). |
| popPK | Kuhlmann_1986 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of digitoxin, not digitalis leaves (the plant material), and thus does not report parameters for the specified subject drug. |
| popPK | Lely_1970 | irrelevant | 0 | 0 | The paper describes clinical symptoms of digitoxin/digoxin intoxication and does not report any pharmacokinetic parameters. |
| popPK | Lien_2018 | irrelevant | 0 | 0 | The study reports serum concentration levels and therapeutic ranges for digoxin/digitoxin in humans but does not provide quantitative pharmacokinetic parameters (CL, V, ka, t1/2) or a PK model for digitalis leaves. |
| popPK | Luxford_1983 | irrelevant | 0 | 0 | The study investigates digoxin, which is a different drug from digitalis leaves (the parent plant material). |
| popPK | Martin-Suarez_2017 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for digoxin, not digitalis leaves. |
| popPK | Martin_2002 | irrelevant | 2 | 0 | The study focuses on a drug-drug interaction with rosuvastatin and reports only relative changes (ratios/percentages) rather than absolute quantitative disposition parameters (CL, V, ka) for digoxin. |
| popPK | Miyazawa_1990 | irrelevant | 1 | 0 | The study investigates digoxin and digitoxin, which are specific cardiac glycosides, rather than the plant material "digitalis leaves" itself. |
| popPK | Nishihara_1999 | irrelevant | 0 | 0 | The study investigates digoxin, not digitalis leaves, as the subject drug. |
| popPK | Ochs_1981 | irrelevant | 0 | 0 | The study investigates digoxin, not digitalis leaves, which is a different drug entity. |
| popPK | Ochs_1982 | irrelevant | 0 | 0 | The study investigates digitoxin, which is a different drug from digitalis leaves (the specified subject). |
| popPK | Pedersen_1981 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of digoxin, not digitalis leaves. |
| popPK | Pellegrino_2019 | irrelevant | 0 | 0 | The paper is a review of treatment strategies for digitalis intoxication and does not report quantitative pharmacokinetic parameters for digitalis leaves. |
| popPK | Perrier_1977 | irrelevant | 0 | 0 | no_text gate: only 38 chars of text extracted (&lt; 400) |
| popPK | Petersen_1985 | irrelevant | 0 | 0 | The study investigates digoxin, not digitalis leaves, and reports no quantitative PK parameters for the target drug. |
| popPK | Rambausek_1985 | irrelevant | 0 | 0 | The paper is a review discussing digitalis steroids (digoxin, digitoxin, strophanthin) in renal failure, not a PK study of digitalis leaves, and contains no quantitative parameter values. |
| popPK | Rameis_1984 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of digoxin, not digitalis leaves. |
| popPK | Ravis_1987 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of digoxin, not digitalis leaves. |
| popPK | Renard_1997 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of digoxin-specific Fab (DS-Fab), an antidote, rather than the pharmacokinetic parameters of digitalis leaves (digoxin/digitoxin) itself. |
| popPK | Salcedo-Mingoarranz_2023 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of digoxin, not digitalis leaves. |
| popPK | Sawada_1990 | irrelevant | 0 | 0 | The paper describes the production and characterization of antibodies for digoxin immunoassays, not the pharmacokinetics of digitalis leaves. |
| popPK | Sciatti_2026 | irrelevant | 2 | 1 | The paper is a clinical review of the DIGIT-HF trial focusing on efficacy and safety, not a pharmacokinetic study reporting quantitative disposition parameters (CL, V, Q, ka) for digitalis leaves. |
| popPK | Slaughter_1978 | irrelevant | 0 | 0 | The paper is a clinical audit of the appropriateness of digoxin/digitoxin assay usage and does not report any pharmacokinetic parameters. |
| popPK | Storstein_1977 | irrelevant | 0 | 0 | The study focuses on the metabolic profile (conjugation and hydroxylation percentages) of digitoxin, not on quantitative pharmacokinetic disposition parameters like clearance, volume of distribution, or half-life. |
| popPK | Sumner_1976 | irrelevant | 0 | 0 | The study investigates digoxin, not digitalis leaves, which is a different drug entity. |
| popPK | Verstuyft_2003 | irrelevant | 0 | 0 | The study investigates digoxin, which is a different drug from digitalis_leaves (the plant source), and does not report PK parameters for the plant extract itself. |
| popPK | Volp_1982 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of digitoxin metabolism in liver homogenates, not a pharmacokinetic study of digitalis leaves. |
| popPK | Vyas_2016 | irrelevant | 0 | 0 | The paper is a clinical case report describing ECG findings of digitalis toxicity and does not report any pharmacokinetic parameters (CL, V, ka, etc.). |
| popPK | Walker_1987 | irrelevant | 0 | 0 | The study investigates the interference of digoxin-like immunoreactive substances with digitoxin radioimmunoassay in hemodialysis patients and does not report any pharmacokinetic parameters (CL, V, ka, etc.) for digitalis leaves or digitoxin. |
| popPK | Zhao_2014 | irrelevant | 2 | 0 | The study focuses on digoxin (a specific glycoside), not digitalis leaves (the plant material), and does not report quantitative PK parameters like CL or V for the subject drug. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
