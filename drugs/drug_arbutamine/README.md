<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01C&quot;,&quot;href&quot;:&quot;atc/C01C.md&quot;},{&quot;label&quot;:&quot;arbutamine&quot;}]"></div>

# arbutamine

- **generic name:** arbutamine
- **ATC codes:** `C01CA22`
- **DrugBank:** [DB01102](https://go.drugbank.com/drugs/DB01102)
- **groups:** approved

## About

**Description.** Arbutamine, administered through a closed-loop, computer-controlled drug-delivery system, is indicated to elicit acute cardiovascular responses, similar to those produced by exercise, in order to aid in diagnosing the presence or absence of coronary artery disease in patients who cannot exercise adequately .

**Indication.** Used to elicit acute cardiovascular responses (cardiac stumulant), similar to those produced by exercise, in order to aid in diagnosing the presence or absence of coronary artery disease (CAD) in patients who cannot exercise adequately.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-20 17:28 | 0:53 | 0/0/0 | 0/0/0 | 0/0/0 | 8,836/840 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=arbutamine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: ADRB1 (target), ADRB2 (target), ADRB3 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Abou-Mohamed_1996.pdf` | Abou-Mohamed G et al., Characterization of the adrenergic acti…, Cardiovascular drugs and th… (1996) | pd | 4 | [10.1007/BF00051129](https://doi.org/10.1007/BF00051129) | [8723169](https://www.ncbi.nlm.nih.gov/pubmed/8723169) | metadata signals extractable PD data (concentration-effect) |

<sub>queue written 2026-09-20T17:28:18.275664+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abou-Mohamed_1996 | irrelevant | 0 | 0 | no_text gate: only 107 chars of text extracted (&lt; 400) |
| PD | Abou-Mohamed_1996 | not_relevant | 0 | 0 | The provided text is only the title of the paper and does not contain the full text, data, or numeric PD parameters required to assess the exposure-response relationship. |
| popPK | Cramer_1995 | irrelevant | 0 | 0 | The study focuses on the safety and efficacy of arbutamine for myocardial stress testing (pharmacodynamics/diagnostic utility) and does not report quantitative pharmacokinetic parameters such as clearance or volume. |
| PD | Cramer_1995 | not_relevant | 2 | 1 | The paper reports clinical efficacy (sensitivity) and time-to-maximum effects for two dosing regimens but does not provide concentration-effect data, dose-response curves, or numeric PD parameters like Emax or EC50. |
| popPK | Kisanuki_2001 | irrelevant | 0 | 0 | The study is a pharmacodynamic assessment of myocardial viability using arbutamine as a diagnostic agent, reporting no pharmacokinetic parameters. |
| popPK | Nagarajan_1996 | irrelevant | 1 | 0 | The study reports pharmacodynamic effects (hemodynamics, ischemia) rather than quantitative pharmacokinetic parameters (CL, V, t1/2) for arbutamine. |
| popPK | Valcke_1997 | irrelevant | 2 | 0 | The paper focuses on pharmacodynamic modeling and control algorithms for heart rate response, not pharmacokinetic disposition parameters (CL, V, etc.) for arbutamine. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
