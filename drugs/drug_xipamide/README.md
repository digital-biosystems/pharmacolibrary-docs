<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C03B&quot;,&quot;href&quot;:&quot;atc/C03B.md&quot;},{&quot;label&quot;:&quot;xipamide&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Xipamide_Diembeck1982_reference&quot;,&quot;label&quot;:&quot;Diembeck_1982_reference&quot;,&quot;href&quot;:&quot;drugs/drug_xipamide/Xipamide_Diembeck1982_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# xipamide

- **generic name:** xipamide
- **ATC codes:** `C03BA10`
- **DrugBank:** [DB13803](https://go.drugbank.com/drugs/DB13803) · **PubChem:** not captured
- **molar mass:** 354.81 g/mol (C15H15ClN2O4S) — DrugBank
- **groups:** investigational

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-28 08:09 | 2:43 | 0/1/0 | 0/0/0 | 0/0/0 | 16,504/2,566 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 1/1 | 2/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.5). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Diembeck_1982_reference](drugs/drug_xipamide/Xipamide_Diembeck1982_reference.md) | — | 1-compartment (no model) | 0 | Diembeck W et al., [Pharmacokinetics of xipamide and triam…, Arzneimittel-Forschung (1982) | — |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Diembeck_1982.pdf` | Diembeck W et al., [Pharmacokinetics of xipamide and triam…, Arzneimittel-Forschung (1982) | popPK | 8 | not captured | [6891256](https://pubmed.ncbi.nlm.nih.gov/6891256) | The study reports quantitative pharmacokinetic parameters for xipamide, specifically terminal elimination half-lives (5.3 h and 4.0 h) and peak urine elimination rates, derived from a two-compartment model. |

<sub>queue written 2026-09-28T08:07:49.326267+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PD | Abd_2016 | not_relevant | 0 | 0 | The paper describes an analytical HPLC method for quantifying drug concentrations in bulk and dosage forms, containing no pharmacodynamic, exposure-response, or dose-response data. |
| PD | Abd_2023 | not_relevant | 0 | 0 | The paper describes analytical methods (spectrophotometry) for quantifying drug concentrations in mixtures, not pharmacodynamic or exposure-response relationships. |
| PD | Barakat_2023 | not_relevant | 0 | 0 | The paper describes a spectrofluorimetric analytical method for quantifying xipamide concentration, not a pharmacodynamic or exposure-response relationship. |
| PD | Fares_2022 | not_relevant | 0 | 0 | The paper describes analytical methods (UPLC and TLC) for quantifying xipamide and triamterene in dosage forms, containing no pharmacodynamic or exposure-response data. |
| PD | Hutcheon_1986 | not_relevant | 1 | 0 | The text is a qualitative review stating that responses generally follow concentration-time curves but provides no numeric PD parameters, dose-response data, or specific exposure-response analysis for xipamide. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-28 08:07 UTC</sub>
