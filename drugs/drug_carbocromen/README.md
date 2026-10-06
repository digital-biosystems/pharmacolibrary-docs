<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01D&quot;,&quot;href&quot;:&quot;atc/C01D.md&quot;},{&quot;label&quot;:&quot;carbocromen&quot;}]"></div>

# carbocromen

- **generic name:** carbocromen
- **ATC codes:** `C01DX05`
- **DrugBank:** [DB13279](https://go.drugbank.com/drugs/DB13279) · **PubChem:** not captured
- **molar mass:** 361.438 g/mol (C20H27NO5) — DrugBank
- **groups:** approved, withdrawn

## About

Carbocromen (chromonar) is a vasodilator that was used to treat coronary artery disease. It has been withdrawn and is no longer in use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5037872](https://www.wikidata.org/wiki/Q5037872) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 09:57 | 0:58 | 0/0/0 | 0/0/0 | 0/0/0 | 24,280/1,494 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 1/0 | 0/1 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 4 matched, 24 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Allard_1983 | irrelevant | 0 | 0 | The study investigates myocardial blood flow in dogs using chromonar (a vasodilator) and phenformin, and does not report pharmacokinetic parameters for carbocromen. |
| PD | Armand_1973 | not_relevant | 0 | 0 | The paper focuses on the development of a spectrofluorometric assay and the distribution (PK) of carbocromen in dogs, with no mention of pharmacodynamic effects or exposure-response relationships. |
| popPK | Baky_1975 | irrelevant | 0 | 0 | The study investigates the antianginal effects of chromonar (a different drug) and other agents on ECG changes in rabbits, containing no pharmacokinetic data for carbocromen. |
| popPK | Banai_1994 | irrelevant | 0 | 0 | The study investigates the effect of VEGF on collateral blood flow in dogs and does not involve carbocromen or any pharmacokinetic parameters. |
| popPK | Carp_1980 | irrelevant | 0 | 0 | The study investigates the hemodynamic effects of verapamil in dogs, and carbocromen is only mentioned as a rescue agent for AV block, with no pharmacokinetic parameters reported. |
| popPK | Dell_1982 | irrelevant | 0 | 0 | The study investigates morocromen, a different drug, and only mentions carbocromen as a comparator without providing its specific PK parameters. |
| popPK | Fiedler_1981 | irrelevant | 0 | 0 | The study investigates hemodynamic effects (coronary flow, oxygen consumption) in isolated dog hearts and does not report pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Fiedler_1982 | irrelevant | 0 | 0 | The study is a pharmacodynamic assessment of infarct size and hemodynamics in dogs, reporting no pharmacokinetic parameters (CL, V, t1/2) for carbocromene. |
| popPK | Fleckenstein-Grün_1981 | irrelevant | 0 | 0 | The paper discusses coronary smooth muscle physiology and vasodilators (Ca-antagonists, nitrites) but does not report pharmacokinetic parameters for carbocromen. |
| popPK | Fleckenstein_1977 | irrelevant | 0 | 0 | The paper discusses the pharmacodynamics of calcium antagonists and glycosides in coronary disease and does not report pharmacokinetic parameters for carbocromen. |
| popPK | Gross_1977 | irrelevant | 0 | 0 | The study investigates the hemodynamic effects of nitroglycerin on coronary blood flow in dogs and does not involve carbocromen or its pharmacokinetics. |
| popPK | Hecker_1996 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of antioxidant effects on gene expression, not a pharmacokinetic study. |
| popPK | Kleinert_1983 | irrelevant | 0 | 0 | The study investigates microregional blood flow and high energy phosphates in rabbits using chromonar (a different drug) and does not report pharmacokinetic parameters for carbocromen. |
| popPK | Kreye_1980 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of calcium uptake in sarcolemmal microsomes, using carbocromen only as a test compound to assess direct effects on pumps, with no pharmacokinetic parameters reported. |
| popPK | Scholz_1990 | irrelevant | 0 | 0 | The study investigates myocardial oxygen supply and consumption in dogs with left ventricular hypertrophy and does not involve carbocromen or pharmacokinetic parameters. |
| popPK | Shabani_2025 | irrelevant | 0 | 0 | The study investigates the hemodynamic effects of chromonar (a coronary vasodilator) on myocardial blood flow in mice, not the pharmacokinetic parameters of carbocromen. |
| PD | Sirbulescu_1976 | not_relevant | 2 | 0 | The paper describes qualitative dose-response observations (improvement at low doses, no aggravation at high doses) but provides no numeric concentration-effect data, PK parameters, or quantitative PD model. |
| popPK | Talafih_1983 | irrelevant | 0 | 0 | The study investigates thyroid hormone effects on rabbit heart physiology and does not involve carbocromen or pharmacokinetic parameters. |
| popPK | Verrier_1986 | irrelevant | 0 | 0 | The study investigates left ventricular mechanics in dogs using chromonar (a vasodilator) and does not involve carbocromen or pharmacokinetic parameters. |
| popPK | Vlahakes_1994 | irrelevant | 0 | 0 | The study investigates coronary hemodynamics in dogs using chromonar (a vasodilator), not the pharmacokinetics of carbocromen. |
| popPK | Warltier_1980 | irrelevant | 0 | 0 | The study investigates the hemodynamic effects of chromonar (a different drug) on myocardial infarct size in dogs and does not report pharmacokinetic parameters for carbocromen. |
| popPK | Warltier_1981 | irrelevant | 0 | 0 | The study investigates coronary hemodynamics and vasodilation in dogs using chromonar, not the pharmacokinetics of carbocromen. |
| popPK | Wolfkiel_1987 | irrelevant | 0 | 0 | The study measures myocardial blood flow in dogs using CT and microspheres, and does not report pharmacokinetic parameters for carbocromen. |
| popPK | Zommer-Urbańska_1985 | irrelevant | 0 | 0 | The paper describes an analytical method for quantifying carbocromen in pharmaceutical preparations, not a pharmacokinetic study. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
