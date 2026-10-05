<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V10B&quot;,&quot;href&quot;:&quot;atc/V10B.md&quot;},{&quot;label&quot;:&quot;strontium (89Sr) chloride&quot;}]"></div>

# strontium (89Sr) chloride

- **generic name:** strontium (89Sr) chloride
- **ATC codes:** `V10BX01`
- **DrugBank:** [DB09498](https://go.drugbank.com/drugs/DB09498) · **PubChem:** not captured
- **groups:** approved

## About

Strontium-89 chloride is a bone-seeking radiopharmaceutical used to relieve pain from cancer that has spread to the bones. It is an approved medicine and is used in hospitals with nuclear medicine facilities for pain palliation.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27262770](https://www.wikidata.org/wiki/Q27262770) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-01 19:53 | 1:22 | 0/1/0 | 0/0/0 | 0/0/0 | 6,713/2,883 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (primary re-run, agreement 0.4). The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Blake_1986_reference](drugs/drug_strontium_89sr_chloride/Strontium89srChloride_Blake1986_reference.md) | — | 1-compartment (no model) | 0 | Blake GM et al., Sr-89 therapy: strontium kinetics in di…, European journal of nuclear… (1986) | [10.1007/BF00254749](https://doi.org/10.1007/BF00254749) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=strontium_89sr_chloride) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: ALPG (cofactor), ALPL (cofactor), Adenosine triphosphate (ATP) (cofactor), CACNA1I (inducer), SLC8A1 (inducer).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Sips_1996.pdf` | Sips AJ et al., Intestinal absorption of strontium chlo…, British journal of clinical… (1996) | popPK | 9 | [10.1046/j.1365-2125.1996.33411.x](https://doi.org/10.1046/j.1365-2125.1996.33411.x) | [8799520](https://pubmed.ncbi.nlm.nih.gov/8799520) | The paper is a PK study of strontium chloride (stable isotope, same chemical entity) reporting bioavailability and model structure, but specific numeric values for clearance, volume, or rate constants are not present in the provided text. |
| `Blake_1986.pdf` | Blake GM et al., Sr-89 therapy: strontium kinetics in di…, European journal of nuclear… (1986) | popPK | 8 | [10.1007/BF00254749](https://doi.org/10.1007/BF00254749) | [3102236](https://pubmed.ncbi.nlm.nih.gov/3102236) | The paper reports quantitative pharmacokinetic parameters (renal plasma clearance range 1.6-11.6 l/day and retention percentages) for strontium-89 in patients, with values explicitly stated in the abstract. |

<sub>queue written 2026-10-01T19:51:56.116532+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Dahl_2001 | irrelevant | 2 | 0 | The paper is a qualitative review of strontium distribution and incorporation mechanisms without reporting specific quantitative pharmacokinetic parameters (CL, V, t1/2) for strontium-89 chloride. |
| popPK | Giammarile_2001 | irrelevant | 0 | 0 | The paper is a clinical review of pain palliation outcomes and does not report quantitative pharmacokinetic parameters (e.g., clearance, volume, half-life) for strontium-89. |
| PD | Giammarile_2001 | not_relevant | 1 | 0 | The text is a qualitative review that explicitly states there is no clear dose-response relationship and provides no numeric PD parameters or concentration-effect data. |
| popPK | Sips_1996 | relevant | 9 | 2 | The paper is a PK study of strontium chloride (stable isotope, same chemical entity) reporting bioavailability and model structure, but specific numeric values for clearance, volume, or rate constants are not present in the provided text. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-25 05:24 UTC</sub>
