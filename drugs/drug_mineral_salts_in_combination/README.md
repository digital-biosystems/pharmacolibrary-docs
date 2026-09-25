<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A06A&quot;,&quot;href&quot;:&quot;atc/A06A.md&quot;},{&quot;label&quot;:&quot;mineral salts in combination&quot;}]"></div>

# mineral salts in combination

- **generic name:** mineral salts in combination
- **ATC codes:** `A06AD10`
- **DrugBank:** not captured
- **groups:** not captured

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-16 14:41 | 2:55 | 0/0/0 | 0/0/0 | 0/0/0 | 63,346/2,271 | ollama / qwen3.8:27b-mtp-q8_0 | 23 | 1/3 | 23/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 1020 matched, 56 returned
- **screened:** 7  ·  **relevant:** 7
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Brookfield_2016.pdf` | Brookfield KF et al., Pharmacokinetics and placental transfer…, American journal of obstetr… (2016) | popPK | 10 | [10.1016/j.ajog.2015.12.060](https://doi.org/10.1016/j.ajog.2015.12.060) | [26767791](https://pubmed.ncbi.nlm.nih.gov/26767791) | The study reports quantitative population pharmacokinetic parameters (clearance, steady-state concentration) for magnesium sulfate, which is a mineral salt, in pregnant women. |
| `Biesenbach_2018.pdf` | Biesenbach P et al., Pharmacokinetics of Magnesium Bolus The…, Journal of cardiothoracic a… (2018) | popPK | 9 | [10.1053/j.jvca.2017.08.049](https://doi.org/10.1053/j.jvca.2017.08.049) | [29169799](https://pubmed.ncbi.nlm.nih.gov/29169799) | The study reports quantitative pharmacokinetic parameters (clearance, volume of distribution) for magnesium sulfate, which falls under the category of mineral salts. |
| `Biesenbach_2018_2.pdf` | Biesenbach P et al., Magnesium supplementation: Pharmacokine…, Journal of critical care (2018) | popPK | 9 | [10.1016/j.jcrc.2018.01.011](https://doi.org/10.1016/j.jcrc.2018.01.011) | [29353118](https://pubmed.ncbi.nlm.nih.gov/29353118) | The study reports quantitative pharmacokinetic parameters (volume of distribution and half-life context) for magnesium, which is a mineral salt, in a human population. |
| `Ko_2023.pdf` | Ko J et al., Pharmacokinetic Analyses of Liposomal a…, Nutrients (2023) | popPK | 9 | [10.3390/nu15133073](https://doi.org/10.3390/nu15133073) | [37447400](https://pubmed.ncbi.nlm.nih.gov/37447400) | The study reports quantitative PK parameters (clearance, volume, half-life) for minerals (iron, calcium) in a combination formulation, but the specific numeric values are not present in the provided text, only the statistical significance and parameter names. |

<sub>queue written 2026-09-16T14:40:48.593224+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Aperia_1975 | irrelevant | 0 | 0 | The study investigates renal hemodynamics and sodium excretion in lambs, not the pharmacokinetic parameters of mineral salts as a drug subject. |
| popPK | Arnold_1980 | irrelevant | 2 | 0 | The study focuses on urinary excretion and bioavailability of potassium chloride (a single mineral salt) rather than a combination product, and it does not report compartmental PK parameters like clearance or volume. |
| popPK | Atehortúa-López_2018 | irrelevant | 0 | 0 | The study compares hypertonic and normal saline solutions for fluid resuscitation and does not report pharmacokinetic parameters for mineral salts as a subject drug. |
| popPK | Beal_1979 | irrelevant | 0 | 0 | The study investigates renal excretion of calcium and magnesium in sheep during vasopressin administration and does not report pharmacokinetic parameters (CL, V, ka, etc.) for mineral salts as the subject drug. |
| popPK | Betlach_1987 | irrelevant | 2 | 0 | The study focuses on potassium chloride (a single mineral salt) rather than a combination, and reports only urinary excretion data (bioavailability) without compartmental PK parameters like clearance or volume. |
| popPK | Britzi_2014 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of ampicillin, not mineral_salts_in_combination, which is only the vehicle/co-administered agent. |
| popPK | Brookfield_2023 | irrelevant | 0 | 0 | The paper is a review of magnesium sulfate regimens and does not report original quantitative pharmacokinetic parameters for mineral salts in combination. |
| popPK | Chen_2022 | irrelevant | 0 | 0 | The paper is a clinical imaging study evaluating the feasibility of Ringer's solution as a flushing medium for OCT, not a pharmacokinetic study, and reports no disposition parameters for mineral salts. |
| popPK | Esposito_1995 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of cis-diamminedichloroplatinum(II) (DDP), not mineral_salts_in_combination. |
| popPK | Hahn_2020 | irrelevant | 0 | 0 | The study analyzes the volume kinetics of Ringer's lactate (a crystalloid fluid), not the pharmacokinetics of mineral salts in combination as a drug. |
| popPK | Hahn_2024 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of Ringer's solution and 20% albumin, not mineral salts in combination as the subject drug. |
| popPK | Hahn_2024_2 | irrelevant | 0 | 0 | The study analyzes the pharmacokinetics of Ringer's solution (fluid volume shifts), not the drug mineral_salts_in_combination, and does not report standard PK parameters (CL, V, ka) for a specific mineral salt drug. |
| popPK | Hiyama_1989 | irrelevant | 0 | 0 | The study investigates urea and creatinine clearance during hemodiafiltration in dogs, not the pharmacokinetics of mineral salts in combination. |
| popPK | Hsu_2026 | irrelevant | 0 | 0 | The study investigates hydration and performance recovery using electrolyte solutions, not the pharmacokinetics of mineral salts as a drug. |
| popPK | Huang_2023 | irrelevant | 0 | 0 | The paper investigates the role of autophagy in host defense against Talaromyces marneffei infection and does not report pharmacokinetic parameters for mineral salts in combination. |
| popPK | Ko_2023 | relevant | 9 | 2 | The study reports quantitative PK parameters (clearance, volume, half-life) for minerals (iron, calcium) in a combination formulation, but the specific numeric values are not present in the provided text, only the statistical significance and parameter names. |
| popPK | Kontoudios_2024 | irrelevant | 0 | 0 | The study is an in-vitro aerosol delivery comparison using technetium as a tracer, not a pharmacokinetic study of mineral salts in combination. |
| popPK | Kovač_2018 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of praziquantel, not mineral_salts_in_combination. |
| popPK | Li_2020 | irrelevant | 0 | 0 | The study investigates risk factors for sub-therapeutic serum magnesium levels using logistic regression and ROC analysis, but does not report quantitative pharmacokinetic parameters (CL, V, ka, etc.) or a compartmental model for magnesium sulfate. |
| popPK | Li_2024 | irrelevant | 0 | 0 | The study is a clinical trial comparing fluid resuscitation outcomes (vital signs, blood gas) in traumatic shock, not a pharmacokinetic study reporting disposition parameters for mineral salts. |
| popPK | Liu_2025 | irrelevant | 0 | 0 | The paper is a mechanistic study on intracerebral hemorrhage in mice focusing on inflammation and ferroptosis, and does not report pharmacokinetic parameters for mineral salts. |
| popPK | M_2022 | irrelevant | 0 | 0 | The paper is a clinical study on wound healing using vacuum vs. normal saline dressings and contains no pharmacokinetic data for mineral salts. |
| popPK | Mackersie_1987 | irrelevant | 0 | 0 | The study investigates pulmonary lymphatic clearance of edema in sheep and does not report pharmacokinetic parameters for mineral salts in combination. |
| popPK | Masood_2025 | irrelevant | 0 | 0 | The paper is a clinical review on the interventional management of acute pancreatitis and does not report pharmacokinetic parameters for mineral salts in combination. |
| popPK | Mottet-Auselo_1993 | irrelevant | 0 | 0 | The paper is a clinical review of carboplatin efficacy in urothelial tumors and does not report quantitative pharmacokinetic parameters for mineral salts in combination. |
| popPK | Nagwekar_1981 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of p-methylbenzoylformic acid, not mineral_salts_in_combination. |
| popPK | Nel_2026 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for ceftriaxone, not mineral_salts_in_combination. |
| popPK | Ogino_1994 | irrelevant | 0 | 0 | The study investigates the renal effects of urea-induced osmotic diuresis in rats and does not report pharmacokinetic parameters for mineral salts in combination. |
| popPK | Olofsson_1992 | irrelevant | 0 | 0 | The study investigates the effect of magnesium sulfate on renal function (GFR) in preeclamptic women and does not report pharmacokinetic parameters (CL, V, ka, etc.) for mineral salts in combination. |
| popPK | Ozols_1984 | irrelevant | 0 | 0 | The paper is a clinical oncology study focusing on cisplatin efficacy and toxicity, not a pharmacokinetic study of mineral salts. |
| popPK | Porter_1985 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of phenobarbital, not mineral_salts_in_combination. |
| popPK | Pypendop_2021 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of butorphanol, not mineral_salts_in_combination. |
| popPK | Pypendop_2023 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for buprenorphine and norbuprenorphine, not mineral_salts_in_combination. |
| popPK | Rabinowitz_1985 | irrelevant | 0 | 0 | The study focuses on renal physiology and electrolyte excretion in sheep, not the pharmacokinetic disposition parameters (CL, V, etc.) of mineral salts as a drug subject. |
| popPK | Riff_2018 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for lidocaine, not mineral_salts_in_combination. |
| popPK | Roberts_1989 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of D-lactate, not mineral salts in combination. |
| popPK | Rower_2017 | irrelevant | 0 | 0 | The study focuses on magnesium sulfate, which is a single mineral salt, not a combination of mineral salts as required by the target drug class. |
| popPK | Rower_2025 | irrelevant | 2 | 0 | The study investigates magnesium sulfate, which is a single mineral salt, not a combination of mineral salts as required by the target drug class. |
| popPK | Senel_1991 | irrelevant | 2 | 0 | The study focuses on potassium chloride (a single mineral salt, not a combination) and reports only urinary recovery/bioavailability data without compartmental PK parameters (CL, V, ka) for the subject drug. |
| popPK | Shrewsbury_1986 | irrelevant | 0 | 0 | The study investigates ampicillin kinetics, not mineral_salts_in_combination. |
| popPK | Sundqvist_2021 | irrelevant | 0 | 0 | The study investigates the renal handling of nitrate (an inorganic anion/NO metabolite), not the pharmacokinetics of the drug class "mineral_salts_in_combination". |
| popPK | Suzuki_2009 | irrelevant | 0 | 0 | The study investigates oral clearance of potassium chloride from a gel in the mouth, which is a local dissolution/diffusion study, not a systemic pharmacokinetic study of mineral salts as a drug. |
| popPK | Tarssanen_1980 | irrelevant | 0 | 0 | The paper is a clinical case report on amiloride-induced hyponatremia and does not report any pharmacokinetic parameters for mineral salts. |
| popPK | Vinel_1988 | irrelevant | 0 | 0 | The study investigates the effect of propranolol on liver function using ICG and galactose as probes, not the pharmacokinetics of mineral salts in combination. |
| popPK | Wang_2008 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of gamma-hydroxybutyrate (GHB), not mineral salts in combination, which are only used as co-administered agents to modify GHB clearance. |
| popPK | Yi_2019 | irrelevant | 0 | 0 | The study investigates the volume kinetics of IV fluid solutions (Ringer's lactate, dextrose, starches), not the pharmacokinetics of the drug mineral_salts_in_combination. |
| popPK | Yoon_2014 | irrelevant | 0 | 0 | The study investigates the therapeutic effects of a traditional herbal medication (Oryeongsan) on diabetic nephropathy in mice and does not report pharmacokinetic parameters for mineral salts in combination. |
| popPK | Yu_1994 | irrelevant | 0 | 0 | The provided evidence contains no text, data, or pharmacokinetic parameters, only library service headers. |
| popPK | Zhao_2016 | irrelevant | 0 | 0 | The study investigates the therapeutic effects of oridonin on sepsis in mice and does not report pharmacokinetic parameters for mineral salts in combination. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
