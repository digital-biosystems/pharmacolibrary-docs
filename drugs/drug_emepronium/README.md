<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A03C&quot;,&quot;href&quot;:&quot;atc/A03C.md&quot;},{&quot;label&quot;:&quot;emepronium&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Emepronium_Pilbrant1985_reference&quot;,&quot;label&quot;:&quot;Pilbrant_1985_reference&quot;,&quot;href&quot;:&quot;drugs/drug_emepronium/Emepronium_Pilbrant1985_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# emepronium

- **generic name:** emepronium
- **ATC codes:** `A03CA30`, `G04BD01`
- **DrugBank:** [DB13505](https://go.drugbank.com/drugs/DB13505)
- **groups:** experimental

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-18 10:38 | 0:24 | 0/1/0 | 0/0/0 | 0/0/0 | 4,659/376 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.75). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Pilbrant_1985_reference](drugs/drug_emepronium/Emepronium_Pilbrant1985_reference.md) | Pilbrant A et al., Pharmacokinetics and pharmacodynamics o…, Acta pharmacologica et toxi… (1985) | [10.1111/j.1600-0773.1985.tb01292.x](https://doi.org/10.1111/j.1600-0773.1985.tb01292.x) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=emepronium) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: CHRM5 (modulator).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Pilbrant_1985.pdf` | Pilbrant A et al., Pharmacokinetics and pharmacodynamics o…, Acta pharmacologica et toxi… (1985) | popPK | 10 | [10.1111/j.1600-0773.1985.tb01292.x](https://doi.org/10.1111/j.1600-0773.1985.tb01292.x) | [4024956](https://pubmed.ncbi.nlm.nih.gov/4024956) | The study reports quantitative PK parameters (half-lives, central volume, clearance) for emepronium in humans, and all numeric values are explicitly present in the provided text. |
| `Alberts_1995.pdf` | Alberts P, Classification of the presynaptic musca…, The Journal of pharmacology… (1995) | pd | 4 | not captured | [7616431](https://www.ncbi.nlm.nih.gov/pubmed/7616431) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-09-18T10:38:33.055091+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PD | Abbiati_1988 | not_relevant | 1 | 2 | The paper reports in vitro receptor binding affinities (IC50) for emepronium, which are pharmacological properties but do not constitute a pharmacodynamic exposure-response or dose-response relationship for the drug's therapeutic effect. |
| popPK | Alberts_1995 | irrelevant | 0 | 0 | no_text gate: only 146 chars of text extracted (&lt; 400) |
| PD | Alberts_1995 | not_relevant | 0 | 0 | The paper focuses on receptor subtype classification in guinea pig bladder and does not mention emepronium or report any exposure-response or dose-response data for it. |
| popPK | Hallén_1979 | irrelevant | 0 | 0 | no_text gate: only 96 chars of text extracted (&lt; 400) |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-18 10:38 UTC</sub>
