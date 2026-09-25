<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02B&quot;,&quot;href&quot;:&quot;atc/N02B.md&quot;},{&quot;label&quot;:&quot;imidazole salicylate&quot;}]"></div>

# imidazole salicylate

- **generic name:** imidazole salicylate
- **ATC codes:** `N02BA16`
- **DrugBank:** [DB13860](https://go.drugbank.com/drugs/DB13860)
- **groups:** experimental

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-21 00:10 | 2:55 | 0/0/0 | 0/0/0 | 0/0/0 | 58,943/1,241 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 0/2 | 2/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 5 matched, 6 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Kuemmerle_1986.pdf` | Kuemmerle HP et al., Pharmacokinetic profile of imidazole 2-…, International journal of cl… (1986) | popPK | 9 | not captured | [3793293](https://pubmed.ncbi.nlm.nih.gov/3793293) | The paper reports quantitative pharmacokinetic parameters (half-life, bioavailability, protein binding) for the components of imidazole salicylate (imidazole and salicylic acid) in humans. |

<sub>queue written 2026-09-21T00:10:23.443826+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Khanppnavar_2022 | irrelevant | 0 | 0 | The paper is a structural biology study on the organic cation transporter OCT3 and does not report pharmacokinetic parameters for imidazole_salicylate. |
| PD | Khanppnavar_2022 | not_relevant | 0 | 0 | The paper focuses on the structural basis of OCT3 inhibition using cryo-EM and does not report pharmacodynamic parameters for imidazole salicylate. |
| popPK | Kuemmerle_1984 | irrelevant | 2 | 0 | The study is a pilot method evaluation that reports metabolites were below detection limits and does not provide quantitative PK parameters for the parent drug. |
| popPK | Lorenzano_1992 | irrelevant | 0 | 0 | The study focuses on renal safety and function (RPF, GFR) rather than pharmacokinetic disposition parameters (CL, V, ka) for imidazole salicylate. |
| popPK | McCune_2023 | irrelevant | 0 | 0 | The study focuses on busulfan pharmacokinetics and metabolomic prediction, not imidazole_salicylate. |
| PD | McCune_2023 | not_relevant | 0 | 0 | The paper focuses on predicting busulfan clearance using metabolomics and reports a population PK model for busulfan, but contains no pharmacodynamic (PD) or exposure-response analysis for imidazole salicylate or any other drug. |
| popPK | Salerno_1993 | irrelevant | 0 | 0 | The study investigates renal function and prostaglandin effects, not pharmacokinetic disposition parameters (CL, V, etc.) for imidazole-salicylate. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
