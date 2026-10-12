<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V09G&quot;,&quot;href&quot;:&quot;atc/V09G.md&quot;},{&quot;label&quot;:&quot;rubidium (82Rb) chloride&quot;}]"></div>

# rubidium (82Rb) chloride

- **generic name:** rubidium (82Rb) chloride
- **ATC codes:** `V09GX04`
- **DrugBank:** not captured · **PubChem:** not captured
- **groups:** not captured

## About

Rubidium chloride is a diagnostic radiopharmaceutical used for imaging of the cardiovascular system, particularly the heart. It is classified as a cardiovascular diagnostic radiopharmaceutical and is used in nuclear medicine imaging procedures.

<small>⚠️ **Unverified** — written by `glm-5.3-flash` from general knowledge (no Wikidata entry found) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 19:54 | 1:47 | 0/0/0 | 0/0/0 | 0/0/0 | 16,533/3,819 | openai / gpt-6-luna | 1 | 0/1 | 1/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 24 matched, 10 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Tahari_2014.pdf` | Tahari AK et al., Initial human experience with Rubidium-…, Journal of medical imaging… (2014) | popPK | 8 | [10.1111/1754-9485.12079](https://doi.org/10.1111/1754-9485.12079) | [24529052](https://pubmed.ncbi.nlm.nih.gov/24529052) | Human renal imaging reports numeric K1 and k2 values from a two-compartment kinetic model. |
| `Jarden_1994.pdf` | Jarden JO, Pathophysiological aspects of malignant…, Acta neurologica Scandinavi… (1994) | popPK | 7 | not captured | [7941966](https://pubmed.ncbi.nlm.nih.gov/7941966) | Human 82Rb transport and permeability parameters were determined, but their numeric values are not provided in the evidence. |

<sub>queue written 2026-10-07T19:54:05.638838+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Fujita_2021 | irrelevant | 1 | 0 | Rubidium-82 is used as a diagnostic PET tracer, and no numeric parameter values are provided. |
| popPK | Gregg_2021 | irrelevant | 1 | 0 | This human imaging study reports myocardial blood-flow and tracer-uptake measures, not rubidium-82 pharmacokinetic disposition parameters. |
| popPK | Jarden_1994 | relevant | 7 | 0 | Human 82Rb transport and permeability parameters were determined, but their numeric values are not provided in the evidence. |
| popPK | Knešaurek_2009 | irrelevant | 1 | 1 | This human PET perfusion study uses 82Rb as a diagnostic tracer and reports blood-flow repeatability, not drug disposition parameters. |
| popPK | Maddahi_2014 | irrelevant | 0 | 0 | This is a review and reports no quantitative pharmacokinetic disposition parameters for rubidium-82. |
| popPK | Rigo_1986 | irrelevant | 0 | 0 | Rubidium-82 is used as a perfusion tracer, with no quantitative pharmacokinetic disposition parameters reported. |
| popPK | Yu_2016 | irrelevant | 2 | 6 | Rubidium-82 is used as a diagnostic tracer, and only percentage changes in modeled K1 are reported. |
| popPK | Zünkeler_1996 | irrelevant | 2 | 1 | Rubidium-82 is used as a PET tracer to measure BBB permeability, not to report its own pharmacokinetic disposition parameters. |
| popPK | vom_2001 | irrelevant | 0 | 0 | This overview mentions Rb-82 as a perfusion tracer but reports no quantitative pharmacokinetic parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
