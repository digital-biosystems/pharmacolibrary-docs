<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A03A&quot;,&quot;href&quot;:&quot;atc/A03A.md&quot;},{&quot;label&quot;:&quot;methantheline&quot;}]"></div>

# methantheline

- **generic name:** methantheline
- **ATC codes:** `A03AB07`
- **DrugBank:** [DB00940](https://go.drugbank.com/drugs/DB00940)
- **groups:** approved

## About

**Description.** Methantheline is a synthetic antispasmodic. Antispasmodics are used to relieve cramps or spasms of the stomach, intestines, and bladder. Methantheline is used to treat intestine or stomach ulcers (peptic ulcer disease), intestine problems (irritable bowel syndrome), pancreatitis, gastritis, biliary dyskinesia, pylorosplasm, or urinary problems (reflex neurogenic bladder in children).

**Indication.** For the treatment of peptic ulcer disease, irritable bowel syndrome, pancreatitis, gastritis, biliary dyskinesia, pylorosplasm, and reflex neurogenic bladder in children.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-18 09:23 | 0:50 | 0/0/0 | 0/0/0 | 0/0/0 | 6,818/671 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=methantheline) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | <sub>“…Hepatic, by enzymatic hydrolysis.…”</sub> | prose |
| target | blood | `ACHE` inhibitor | DrugBank actor |
| target | neuromuscular junction | `ACHE` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: CHRM1 (target), CHRM2 (unknown), CHRM3 (unknown), CHRM4 (unknown), CHRM5 (target), HRH2 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 6 matched, 7 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Müller_2012.pdf` | Müller C et al., Relative bioavailability and pharmacody…, European journal of clinica… (2012) | pd | 5 | [10.1007/s00228-012-1286-6](https://doi.org/10.1007/s00228-012-1286-6) | [22527350](https://www.ncbi.nlm.nih.gov/pubmed/22527350) | metadata signals extractable PD data (sigmoid) |

<sub>queue written 2026-09-18T09:23:46.588005+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | DEBRAY_1954 | irrelevant | 0 | 0 | no_text gate: only 118 chars of text extracted (&lt; 400) |
| PD | DEBRAY_1954 | not_relevant | 0 | 0 | The paper describes the use of methantheline as a pharmacodynamic agent to induce esophageal spasm for radiological diagnosis of hiatal hernias, but it does not report any quantitative exposure-response or dose-response analysis, nor does it provide numeric PD parameters such as Emax or EC50. |
| popPK | Hallek_1995 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of enzyme inhibition and reactivation, not a pharmacokinetic study reporting disposition parameters for methantheline. |
| popPK | Hough_1981 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of histamine H2-receptor antagonism and does not report any pharmacokinetic parameters for methantheline. |
| PD | Hough_1981 | not_relevant | 2 | 1 | The text describes qualitative inhibition and competitive antagonism but does not provide numeric PD parameters (e.g., IC50, Ki) or extractable concentration-effect curves for methantheline. |
| popPK | Müller_2012 | irrelevant | 0 | 0 | no_text gate: only 112 chars of text extracted (&lt; 400) |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
