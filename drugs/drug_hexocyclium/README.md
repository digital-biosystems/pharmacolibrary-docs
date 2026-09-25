<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A03A&quot;,&quot;href&quot;:&quot;atc/A03A.md&quot;},{&quot;label&quot;:&quot;hexocyclium&quot;}]"></div>

# hexocyclium

- **generic name:** hexocyclium
- **ATC codes:** `A03AB10`
- **DrugBank:** [DB06787](https://go.drugbank.com/drugs/DB06787)
- **groups:** approved

## About

**Description.** Hexocyclium is a muscarinic acetylcholine receptor antagonist which was presumably used in the treatment of gastric ulcer or diarrhea. It was once available under the tradename Tral marketed by Abbvie Inc. but has been discontinued. Proton pump inhibitors like [DB00338] and opiate anti-diarrheal agents like [DB00836] have largely replaced the use of anti-muscarinics in the treatment of gastric ulcers and diarrhea due to their more favorable side effect profiles.

**Indication.** The World Health Organization classifies hexocyclium as a drug for functional gastrointestinal disorders [L876]. Like other anti-muscarinic agents, hexocyclium was likely used to treat peptic ulcers or diarrhea.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-18 09:03 | 0:49 | 0/0/0 | 1/0/0 | 0/0/0 | 25,921/514 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 1/0 | 1/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.75). The first reading is what the record holds.">cross-check: disputed</span> | [Verspohl_1990](drugs/drug_hexocyclium/pd_Verspohl_1990_unknown.md) | Verspohl EJ et al., Muscarinic receptor subtypes in rat pan…, European journal of pharmac… (1990) | [10.1016/0014-2999(90)90109-j](https://doi.org/10.1016/0014-2999(90)90109-j) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=hexocyclium) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: CHRM1 (target), CHRM2 (target), CHRM3 (target), CHRM4 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 4 matched, 4 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Milovanović_1997.pdf` | Milovanović DR et al., Pharmacologic characterization of musca…, The Indian journal of medic… (1997) | pd | 4 | not captured | [9183081](https://www.ncbi.nlm.nih.gov/pubmed/9183081) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-09-18T09:03:37.285363+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Milovanović_1997 | irrelevant | 0 | 0 | no_text gate: only 115 chars of text extracted (&lt; 400) |
| PD | Milovanović_1997 | not_relevant | 0 | 0 | The paper characterizes muscarine receptor subtypes in rat gastric fundus and does not mention hexocyclium or report any exposure-response or dose-response data for it. |
| popPK | Verspohl_1990 | irrelevant | 0 | 0 | The paper is an in-vitro receptor binding and functional study using sila-hexocyclium as a probe ligand, not a pharmacokinetic study of hexocyclium. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
