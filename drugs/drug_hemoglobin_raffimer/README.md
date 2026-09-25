<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B05A&quot;,&quot;href&quot;:&quot;atc/B05A.md&quot;},{&quot;label&quot;:&quot;hemoglobin raffimer&quot;}]"></div>

# hemoglobin raffimer

- **generic name:** hemoglobin raffimer
- **ATC codes:** `B05AA09`
- **DrugBank:** [DB13658](https://go.drugbank.com/drugs/DB13658)
- **groups:** investigational

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-19 07:11 | 0:42 | 0/0/0 | 0/0/0 | 0/0/0 | 5,752/427 | ollama / qwen3.8:27b-mtp-q8_0 | 6 | 0/6 | 6/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 2 matched, 2 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Wicks_2003.pdf` | Wicks D et al., The intravascular persistence and methe…, Artificial cells, blood sub… (2003) | popPK | 9 | [10.1081/bio-120018000](https://doi.org/10.1081/bio-120018000) | [12602813](https://pubmed.ncbi.nlm.nih.gov/12602813) | The study reports quantitative pharmacokinetic parameters (half-life and volume of distribution) for hemoglobin raffimer in dogs, with all numeric values explicitly present in the text. |

<sub>queue written 2026-09-19T07:11:47.271880+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bray_2006 | irrelevant | 0 | 0 | The paper discusses the pharmacokinetics of exenatide, not hemoglobin_raffimer. |
| popPK | Brooks_2024 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for linezolid, not hemoglobin_raffimer. |
| popPK | Chen_2025 | irrelevant | 0 | 0 | The paper investigates the role of aquaporin-4 in hematoma clearance after intracerebral hemorrhage and does not report pharmacokinetic parameters for hemoglobin_raffimer. |
| popPK | Cheng_2004 | irrelevant | 0 | 0 | The paper is a clinical efficacy/safety study reporting transfusion rates and adverse events, with no pharmacokinetic parameters (CL, V, t1/2) reported. |
| PD | Cheng_2004 | not_relevant | 3 | 1 | The study is a clinical dose-response trial reporting categorical outcomes (transfusion rates, adverse events) rather than a pharmacodynamic model with numeric parameters like Emax or EC50. |
| popPK | Fan_2022 | irrelevant | 0 | 0 | The paper is a mechanistic study on renal injury and heme clearance in mice, not a pharmacokinetic study of hemoglobin_raffimer. |
| popPK | Gao_2022 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for cyclosporine, not hemoglobin_raffimer. |
| popPK | Guan_2022 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for cotadutide, not hemoglobin_raffimer. |
| popPK | Hirai_2021 | irrelevant | 0 | 0 | The paper studies roxadustat, not hemoglobin_raffimer, and reports clinical outcomes rather than pharmacokinetic parameters. |
| popPK | Hughes_1995 | irrelevant | 2 | 1 | The study investigates a different drug (HBOC-201) rather than hemoglobin_raffimer, and only reports a single half-life value without a compartmental model or other disposition parameters. |
| popPK | Kameyama_1995 | irrelevant | 0 | 0 | The paper is a clinical study on wound infection risk factors and cefazolin prophylaxis, with no mention of hemoglobin_raffimer or its pharmacokinetics. |
| popPK | Lau_2023 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of decitabine and tetrahydrouridine, not hemoglobin_raffimer. |
| popPK | Monke_1940 | irrelevant | 1 | 0 | The study investigates renal clearance of native hemoglobin in dogs, not the pharmacokinetics of the specific drug hemoglobin_raffimer. |
| popPK | Nikolic_2024 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of tamsulosin, not hemoglobin_raffimer. |
| popPK | Ostlund_1993 | irrelevant | 0 | 0 | The paper studies D-chiro-inositol metabolism in diabetes and does not involve the drug hemoglobin_raffimer. |
| popPK | Poortmans_1979 | irrelevant | 0 | 0 | The paper studies biochemical changes in plasma proteins during a 100 km run and does not involve the drug hemoglobin_raffimer or report any pharmacokinetic parameters for it. |
| popPK | Rabiner_1967 | irrelevant | 2 | 1 | The study focuses on renal function and safety of a stroma-free hemoglobin solution in dogs, reporting renal clearance metrics (urea/creatinine) rather than the specific population pharmacokinetic parameters (CL, V, ka) for hemoglobin_raffimer. |
| popPK | Ramis_1982 | irrelevant | 0 | 0 | The paper studies iron metabolism in birds using phenylhydrazine and does not involve the drug hemoglobin_raffimer. |
| popPK | Selam_1989 | irrelevant | 0 | 0 | The paper studies insulin pharmacokinetics and safety, not hemoglobin_raffimer. |
| popPK | Takahashi_1993 | irrelevant | 0 | 0 | The study focuses on renal safety and physiological effects (GFR, RPF) of a hemoglobin conjugate in dogs, not on pharmacokinetic disposition parameters like clearance or volume of distribution. |
| popPK | Wattanakul_2026 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for paracetamol, not hemoglobin_raffimer. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
