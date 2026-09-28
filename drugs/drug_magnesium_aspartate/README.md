<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A12C&quot;,&quot;href&quot;:&quot;atc/A12C.md&quot;},{&quot;label&quot;:&quot;magnesium aspartate&quot;}]"></div>

# magnesium aspartate

- **generic name:** magnesium aspartate
- **ATC codes:** `A12CC05`
- **DrugBank:** [DB13359](https://go.drugbank.com/drugs/DB13359) · **PubChem:** not captured
- **molar mass:** 360.555 g/mol (C8H20MgN2O12) — DrugBank
- **groups:** investigational

## About

**Description.** Magnesium aspartate is a magnesium salt of aspartic acid that is commonly used as a mineral supplement. It displays high oral bioavailability and water solubiltiy compared to other magnesium salts such as magnesium citrate, magnesium carbonate and magnesium oxide.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-26 14:14 | 5:07 | 0/0/0 | 0/0/0 | 0/0/0 | 12,960/700 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/1 | 1/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `He_2020.pdf` | He G et al., Type 2 diabetes mellitus caused by Gite…, Medicine (2020) | pgx | 5 | [10.1097/MD.0000000000021123](https://doi.org/10.1097/MD.0000000000021123) | [32702863](https://www.ncbi.nlm.nih.gov/pubmed/32702863) | metadata signals extractable PGX data (SLC12A3) |

<sub>queue written 2026-09-26T14:14:07.401028+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Attinger_2025 | irrelevant | 1 | 0 | The study investigates the pharmacokinetics of levothyroxine (the subject drug) in the presence of magnesium aspartate (a co-administered agent), rather than reporting disposition parameters for magnesium aspartate itself. |
| PGx | He_2020 | not_relevant | 0 | 0 | The paper reports a case of Gitelman syndrome and T2DM, mentioning magnesium aspartate as a supplement, but does not report pharmacogenomic effects on the PK or PD parameters of the drug itself. |
| popPK | Langbein_2019 | irrelevant | 0 | 0 | The study evaluates the efficacy of a zeolite-based adsorbent (Detoxsan) for diarrhea, where magnesium aspartate is merely an excipient, and no pharmacokinetic parameters are reported. |
| PD | Langbein_2019 | not_relevant | 1 | 0 | The paper reports qualitative clinical efficacy (70% satisfaction) and mentions magnesium aspartate as an ingredient, but provides no concentration-effect data, dose-response curve, or numeric PD parameters. |
| popPK | Miah_2026 | irrelevant | 0 | 0 | The paper is a scoping review on dietary effects on blood pressure and does not report pharmacokinetic parameters for magnesium aspartate. |
| PD | Miah_2026 | not_relevant | 1 | 0 | The paper is a scoping review of dietary interactions with antihypertensive drugs and does not report a pharmacokinetic or pharmacodynamic model for magnesium aspartate, nor does it provide numeric PD parameters (e.g., Emax, EC50) for the drug itself. |
| popPK | Zhao_2023 | irrelevant | 0 | 0 | The paper is a clinical case report describing the treatment of a genetic disorder with magnesium aspartate, but it does not contain any pharmacokinetic studies or quantitative disposition parameters (CL, V, etc.) for the drug. |
| PD | Zhao_2023 | not_relevant | 0 | 0 | The paper is a clinical case report describing the treatment of a patient with hypomagnesemia; it does not contain any pharmacodynamic modeling, exposure-response analysis, or numeric PD parameters for magnesium aspartate. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
