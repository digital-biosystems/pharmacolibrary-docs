<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V09G&quot;,&quot;href&quot;:&quot;atc/V09G.md&quot;},{&quot;label&quot;:&quot;technetium (99mTc) teboroxime&quot;}]"></div>

# technetium (99mTc) teboroxime

- **generic name:** technetium (99mTc) teboroxime
- **ATC codes:** `V09GA03`
- **DrugBank:** not captured · **PubChem:** not captured
- **groups:** not captured

## About

Technetium-99m teboroxime is a diagnostic radiopharmaceutical used for imaging the heart, particularly myocardial perfusion. It is no longer in routine clinical use, having been largely discontinued after its brief period on the market.

<small>⚠️ **Unverified** — written by `glm-5.3-flash` from general knowledge (no Wikidata entry found) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 20:04 | 1:58 | 0/0/0 | 0/0/0 | 0/0/0 | 21,384/6,847 | openai / gpt-6-luna | 1 | 0/1 | 1/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 34 matched, 12 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Johnson_1993.pdf` | Johnson G et al., Early myocardial clearance kinetics of…, Journal of nuclear medicine… (1993) | popPK | 8 | not captured | [8455080](https://pubmed.ncbi.nlm.nih.gov/8455080) | Canine myocardial teboroxime clearance is modeled biexponentially with numeric half-lives reported. |
| `Yamagami_1994.pdf` | Yamagami H et al., Detection of coronary artery disease by…, European journal of nuclear… (1994) | popPK | 7 | [10.1007/BF00182303](https://doi.org/10.1007/BF00182303) | [8088283](https://pubmed.ncbi.nlm.nih.gov/8088283) | Reports numeric technetium-99m teboroxime myocardial clearance rate constants in patients. |

<sub>queue written 2026-10-07T20:04:18.070996+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Berman_1991 | irrelevant | 1 | 0 | This review reports no quantitative pharmacokinetic disposition parameters for technetium-99mtc-teboroxime. |
| popPK | Fang_2019 | irrelevant | 1 | 0 | This is a review and provides no numeric pharmacokinetic parameter values for technetium-99m teboroxime. |
| popPK | Johnson_1990 | irrelevant | 2 | 1 | Reports myocardial washout half-lives, but no quantitative pharmacokinetic model or disposition parameters for teboroxime. |
| popPK | Johnson_1991 | irrelevant | 0 | 0 | This clinical review gives only qualitative imaging and washout information, with no numeric pharmacokinetic parameter values. |
| popPK | Johnson_1992 | irrelevant | 0 | 0 | This is a human diagnostic imaging study and reports no quantitative pharmacokinetic disposition parameters. |
| popPK | Johnson_1994 | irrelevant | 0 | 0 | This is a clinical imaging overview with no quantitative pharmacokinetic parameters reported. |
| popPK | Li_1991 | irrelevant | 1 | 0 | This anesthetized-dog imaging study reports perfusion findings but no quantitative pharmacokinetic disposition parameters. |
| popPK | Links_1991 | irrelevant | 1 | 3 | This is a SPECT simulation using numeric washout half-times, not a PK study reporting disposition parameters. |
| popPK | Nickles_1993 | irrelevant | 1 | 0 | Reports clearance for 94mTc-teboroxime, not the target 99mTc-teboroxime. |
| popPK | Okada_2014 | irrelevant | 1 | 0 | Canine tracer-clearance study, but it reports no quantitative PK disposition parameters; clearance curves are in a figure not provided. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
