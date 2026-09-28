<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A12C&quot;,&quot;href&quot;:&quot;atc/A12C.md&quot;},{&quot;label&quot;:&quot;magnesium orotate&quot;}]"></div>

# magnesium orotate

- **generic name:** magnesium orotate
- **ATC codes:** `A12CC09`
- **DrugBank:** [DB13786](https://go.drugbank.com/drugs/DB13786) · **PubChem:** [CID 3036905](https://pubchem.ncbi.nlm.nih.gov/compound/3036905)
- **molar mass:** 334.483 g/mol (C10H6MgN4O8) — DrugBank
- **groups:** experimental

## About

**Description.** Magnesium orotate is a magnesium salt of orotic acid and is poorly soluble in water. It is a source of magnesium and is used as a mineral supplement to treat Mg deficiency. Orotic acid acts as a transporter that carries magnesium into the cells. It also exhibits antioxidant properties, since it is a key intermediate in the biosynthetic pathway of pyrimidines that promotes the synthesis of enzymes which act as free radical scavengers. Experiments investigating the potential cardioprotective actions of orotic acid in pathological heart conditions are still ongoing.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-26 16:23 | 2:47 | 0/0/0 | 0/0/0 | 0/0/0 | 4,756/571 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Verma_2021.pdf` | Verma H et al., Development, optimization and character…, Magnesium research (2021) | popPK | 6 | [10.1684/mrh.2021.0487](https://doi.org/10.1684/mrh.2021.0487) | [34463282](https://pubmed.ncbi.nlm.nih.gov/34463282) | The study reports basic non-compartmental PK parameters (Tmax, Cmax, AUC) for magnesium orotate in rats, but lacks specific disposition parameters like clearance, volume of distribution, or half-life. |

<sub>queue written 2026-09-26T16:23:40.263926+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Verma_2022 | irrelevant | 0 | 0 | no_text gate: only 121 chars of text extracted (&lt; 400) |
| popPK | Verma_2022_2 | irrelevant | 2 | 0 | The study focuses on dissolution method development and IVIVC, reporting only qualitative PK metrics like Tmax and relative absorption extent, without providing quantitative disposition parameters (CL, V, ka) for magnesium orotate. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
