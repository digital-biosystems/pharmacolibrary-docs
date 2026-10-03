<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V10X&quot;,&quot;href&quot;:&quot;atc/V10X.md&quot;},{&quot;label&quot;:&quot;tositumomab/iodine (131I) tositumomab&quot;}]"></div>

# tositumomab/iodine (131I) tositumomab

- **generic name:** tositumomab/iodine (131I) tositumomab
- **ATC codes:** `V10XA53`
- **DrugBank:** not captured · **PubChem:** not captured
- **groups:** not captured

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-01 20:27 | 0:51 | 0/0/0 | 0/0/0 | 0/0/0 | 1,894/232 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 1/0 | 0/1 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 24 matched, 20 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Beeson_2003 | irrelevant | 2 | 0 | The paper describes a novel conditionally cleavable radioimmunoconjugate (RIC) using tositumomab as a model in mice, reporting biodistribution percentages (%ID/g) rather than quantitative PK parameters (CL, V, t1/2) for the standard drug tositumomab_iodine_131i_tositumomab. |
| popPK | Bischof_2003 | irrelevant | 1 | 0 | The paper is a general review of radioimmunotherapy in NHL that discusses the mechanism and dosimetry requirements for 131I-tositumomab but does not report specific quantitative pharmacokinetic parameters (e.g., clearance, volume, half-life values) for the drug. |
| popPK | Chamarthy_2011 | irrelevant | 1 | 0 | The paper is a review article discussing radioimmunotherapy generally and does not provide original quantitative pharmacokinetic parameter values for tositumomab_iodine_131i_tositumomab. |
| popPK | Davies_2005 | irrelevant | 1 | 0 | The paper is a review of clinical efficacy and safety without reporting original quantitative pharmacokinetic parameter values. |
| popPK | Guleria_2017 | irrelevant | 0 | 0 | The study focuses on 177Lu-Rituximab, not tositumomab_iodine_131i_tositumomab, and does not report quantitative PK parameters for the target drug. |
| popPK | Kaminski_2000 | irrelevant | 2 | 0 | The paper is a clinical efficacy study reporting response rates and survival, not a pharmacokinetic study with quantitative disposition parameters like clearance or volume. |
| popPK | Leonard_2005 | irrelevant | 0 | 0 | The paper is a review discussing anti-CD20 therapies and mentions tositumomab only as a context for radioimmunoconjugates without reporting any quantitative pharmacokinetic parameters. |
| popPK | Lewington_2005 | irrelevant | 1 | 0 | The paper is a review of the development and clinical efficacy of 131I-tositumomab, discussing dosing based on total-body dose rather than reporting quantitative pharmacokinetic parameters like clearance or volume of distribution. |
| popPK | Li_2015 | irrelevant | 1 | 0 | The study focuses on a novel nanocomb construct (PPRT) and only qualitatively mentions reduced clearance without providing quantitative PK parameters for tositumomab_iodine_131i_tositumomab. |
| popPK | Ren_2015 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on cell death pathways and does not report pharmacokinetic parameters for tositumomab_iodine_131i_tositumomab. |
| popPK | Roberson_2011 | irrelevant | 2 | 0 | The paper focuses on a bio-effect model for tumor response and absorbed dose estimation rather than reporting quantitative pharmacokinetic disposition parameters (CL, V, ka) for the drug. |
| popPK | Roberson_2014 | irrelevant | 2 | 0 | The study focuses on biological-effect modeling (radiation sensitivity parameters alpha and lambda) rather than reporting quantitative pharmacokinetic disposition parameters (CL, V, t1/2) for the drug. |
| popPK | Scheidhauer_2002 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of rituximab (anti-CD20 MAB IDEC-C2B8), not tositumomab, which is only mentioned as a comparator. |
| popPK | Schipper_2012 | irrelevant | 2 | 0 | The study focuses on tumor dosimetry and time-activity curve fitting rather than systemic population pharmacokinetic parameters (CL, V, Q), and no specific PK numeric values are provided in the evidence. |
| popPK | Sgouros_2003 | irrelevant | 2 | 0 | The paper focuses on dosimetry and tumor response rather than reporting quantitative pharmacokinetic parameters (CL, V, ka) for tositumomab. |
| popPK | Smith-Jones_2004 | irrelevant | 0 | 0 | The paper is a review focusing on (177)Lu-huJ591 for prostate cancer, mentioning tositumomab only as a background example without providing any quantitative PK parameters. |
| popPK | Wahl_2003 | irrelevant | 2 | 0 | The paper is a review discussing the clinical importance of dosimetry and mentions qualitative variability in clearance but does not report specific quantitative PK parameter values (CL, V, t1/2) for tositumomab_iodine_131i_tositumomab. |
| popPK | Wahl_2005 | irrelevant | 2 | 0 | The paper is a clinical review of efficacy and safety that mentions pharmacokinetics only in the context of dosimetric calculations (residence time) without reporting specific quantitative PK parameters like clearance or volume. |
| popPK | Wu_2005 | irrelevant | 1 | 0 | The paper is a review of immunoconjugates that mentions tositumomab-131I only as an approved agent without reporting any original quantitative pharmacokinetic parameters (CL, V, etc.) for it. |
| popPK | Zelenetz_2020 | irrelevant | 2 | 0 | The study reports total body residence time (a dosimetric parameter) but does not provide standard compartmental PK parameters (CL, V, Q, ka) or a population PK model for tositumomab_iodine_131i_tositumomab. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
