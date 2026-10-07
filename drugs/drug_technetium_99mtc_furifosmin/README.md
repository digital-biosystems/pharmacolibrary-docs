<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V09G&quot;,&quot;href&quot;:&quot;atc/V09G.md&quot;},{&quot;label&quot;:&quot;technetium (99mTc) furifosmin&quot;}]"></div>

# technetium (99mTc) furifosmin

- **generic name:** technetium (99mTc) furifosmin
- **ATC codes:** `V09GA05`
- **DrugBank:** not captured · **PubChem:** not captured
- **groups:** not captured

## About

Technetium (99mTc) furifosmin is a diagnostic radiopharmaceutical used for imaging of the cardiovascular system, such as heart perfusion studies. Its current availability and extent of use are unclear, as no regulatory or marketing information is available.

<small>⚠️ **Unverified** — written by `glm-5.3-flash` from general knowledge (no Wikidata entry found) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 19:57 | 2:38 | 0/0/0 | 0/0/0 | 0/0/0 | 37,756/3,361 | openai / gpt-6-luna | 4 | 0/4 | 4/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 101 matched, 14 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Schaefer_2002.pdf` | Schaefer WM et al., 201Tl, 99mTc-MIBI, 99mTc-tetrofosmin an…, Nuclear medicine and biology (2002) | popPK | 8 | [10.1016/s0969-8051(01)00288-8](https://doi.org/10.1016/s0969-8051(01)00288-8) | [11823130](https://pubmed.ncbi.nlm.nih.gov/11823130) | This is a furifosmin clearance-kinetics study, but no numeric parameter values are provided in the evidence. |

<sub>queue written 2026-10-07T19:57:45.054700+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Birbeck_2019 | irrelevant | 0 | 0 | The study reports levetiracetam pharmacokinetics, not technetium-99m furifosmin. |
| popPK | Cristinacce_2019 | irrelevant | 0 | 0 | This antibiotic PTA analysis does not study technetium-99m furifosmin or report its disposition parameters. |
| popPK | Damle_2008 | irrelevant | 0 | 0 | This healthy-volunteer interaction study reports pharmacokinetics of voriconazole and efavirenz, not technetium_99mtc_furifosmin. |
| popPK | De_2020 | irrelevant | 0 | 0 | The quantitative PK values are for tigecycline, not technetium-99m furifosmin. |
| popPK | Holazo_1986 | irrelevant | 0 | 0 | The paper reports ceftriaxone pharmacokinetics, not technetium_99mtc_furifosmin. |
| popPK | KuKanich_2014 | irrelevant | 0 | 0 | This study reports minocycline pharmacokinetics in dogs, not technetium_99mtc_furifosmin. |
| popPK | Magréault_2025 | irrelevant | 0 | 0 | The study models clindamycin, not technetium_99mtc_furifosmin. |
| popPK | Okada_1995 | irrelevant | 0 | 0 | The study reports retention kinetics for technetium-99m-Q12, not technetium-99m-furifosmin. |
| popPK | Pendyala_1988 | irrelevant | 0 | 0 | The paper reports pharmacokinetics of nilutamide, not technetium_99mtc_furifosmin. |
| popPK | Rossetti_1994 | irrelevant | 2 | 1 | Human biodistribution is described, but no numeric clearance, volume, or model parameters are reported. |
| popPK | Schaefer_2002 | relevant | 8 | 1 | This is a furifosmin clearance-kinetics study, but no numeric parameter values are provided in the evidence. |
| popPK | Tremoulet_2007 | irrelevant | 0 | 0 | This is a human infant population-PK study of lamivudine, not technetium_99mtc_furifosmin. |
| popPK | Wu_2018 | irrelevant | 0 | 0 | This is a tigecycline case report, not a study of technetium_99mtc_furifosmin. |
| popPK | Yang_2022 | irrelevant | 0 | 0 | This human pharmacokinetic study reports values for omadacycline, not technetium_99mtc_furifosmin. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
