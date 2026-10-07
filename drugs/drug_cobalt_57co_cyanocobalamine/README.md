<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V09X&quot;,&quot;href&quot;:&quot;atc/V09X.md&quot;},{&quot;label&quot;:&quot;cobalt (57Co) cyanocobalamine&quot;}]"></div>

# cobalt (57Co) cyanocobalamine

- **generic name:** cobalt (57Co) cyanocobalamine
- **ATC codes:** `V09XX01`
- **DrugBank:** not captured · **PubChem:** not captured
- **groups:** not captured

## About

It is classified among other diagnostic radiopharmaceuticals and is used only in specialised nuclear medicine settings rather than as a routine medicine.

<small>⚠️ **Unverified** — written by `glm-5.3-flash` from general knowledge (no Wikidata entry found) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 16:27 | 0:27 | 0/0/0 | 0/0/0 | 0/0/0 | 3,332/405 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 3 matched, 3 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Amin_1980.pdf` | Amin S et al., Long-term clearance of [57Co]cyanocobal…, Clinical science (London, E… (1980) | popPK | 8 | [10.1042/cs0580101](https://doi.org/10.1042/cs0580101) | [6766367](https://pubmed.ncbi.nlm.nih.gov/6766367) | The study reports a monoexponential clearance model for [57Co]cyanocobalamin in humans, but the specific numeric clearance rates are not provided in the extracted evidence. |

<sub>queue written 2026-10-07T16:27:26.073334+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Amin_1980 | relevant | 8 | 2 | The study reports a monoexponential clearance model for [57Co]cyanocobalamin in humans, but the specific numeric clearance rates are not provided in the extracted evidence. |
| popPK | Egan_1984 | irrelevant | 0 | 0 | The study investigates lung fluid absorption and permeability in fetal lambs using cobalt-57 cyanocobalamin as a tracer, not a pharmacokinetic study of the drug's disposition parameters. |
| popPK | Hastings_1992 | irrelevant | 2 | 2 | The study measures alveolar clearance of [57Co]cyanocobalamin as a size-standard tracer in rabbits and humans, but does not report standard systemic pharmacokinetic parameters (CL, V, t1/2) for the drug as a therapeutic subject. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
