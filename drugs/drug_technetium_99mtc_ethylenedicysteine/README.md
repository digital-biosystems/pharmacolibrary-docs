<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V09C&quot;,&quot;href&quot;:&quot;atc/V09C.md&quot;},{&quot;label&quot;:&quot;technetium (99mTc) ethylenedicysteine&quot;}]"></div>

# technetium (99mTc) ethylenedicysteine

- **generic name:** technetium (99mTc) ethylenedicysteine
- **ATC codes:** `V09CA06`
- **DrugBank:** not captured · **PubChem:** not captured
- **groups:** not captured

## About

Technetium-99m ethylenedicysteine is a diagnostic radiopharmaceutical used for imaging of the kidneys. It is classified under technetium compounds for the renal system and remains in diagnostic use.

<small>⚠️ **Unverified** — written by `glm-5.3-flash` from general knowledge (no Wikidata entry found) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 19:04 | 2:15 | 0/0/0 | 0/0/0 | 0/0/0 | 42,107/7,533 | openai / gpt-6-luna | 4 | 3/1 | 4/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 35 matched, 12 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Kabasakal_1995.pdf` | Kabasakal L et al., Evaluation of technetium-99m-ethylenedi…, Journal of nuclear medicine… (1995) | popPK | 10 | not captured | [7629584](https://pubmed.ncbi.nlm.nih.gov/7629584) | Human study reports a two-compartment model and numeric distribution volume and clearance half-life for technetium-99m-EC. |
| `Kabasakal_1995_2.pdf` | Kabasakal L et al., Clinical comparison of technetium-99m-E…, Journal of nuclear medicine… (1995) | popPK | 10 | not captured | [7830118](https://pubmed.ncbi.nlm.nih.gov/7830118) | Reports numeric renal clearance ratios and distribution volumes for technetium-99m-EC in patients. |
| `Kabasakal_1999.pdf` | Kabasakal L et al., Reproducibility of technetium-99m ethyl…, European journal of nuclear… (1999) | popPK | 9 | [10.1007/s002590050465](https://doi.org/10.1007/s002590050465) | [10436204](https://pubmed.ncbi.nlm.nih.gov/10436204) | Reports numeric plasma clearance values for technetium-99m ethylenedicysteine in patients. |

<sub>queue written 2026-10-07T19:03:31.414829+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Das_2000 | irrelevant | 1 | 0 | The study reports biodistribution of 188Re-EC, not quantitative pharmacokinetic parameters for 99mTc-EC. |
| popPK | Filipczak_2020 | irrelevant | 2 | 1 | This is a human renal-scintigraphy study using 99mTc-EC as a diagnostic tracer, and it reports no readable numeric K or clearance values. |
| popPK | Kabasakal_2000 | irrelevant | 2 | 8 | This is a review summarizing reported EC disposition values, not an original pharmacokinetic study. |
| popPK | Kuśmierek_2017 | irrelevant | 1 | 0 | Technetium-99m EC is used as a diagnostic tracer, and no numeric drug-disposition parameters are reported; referenced table values are not provided. |
| popPK | Moran_1999 | irrelevant | 1 | 0 | This is a review and provides no numeric disposition parameters for technetium-99m-EC. |
| popPK | Pagou_2009 | irrelevant | 0 | 0 | This review discusses gallium-68 imaging agents, not technetium-99m ethylenedicysteine, and reports no relevant quantitative PK values. |
| popPK | Pietrzak-Stelasiak_2017 | irrelevant | 0 | 0 | This human diagnostic imaging study reports no quantitative pharmacokinetic disposition parameters for technetium-99m EC. |
| popPK | Schechter_2009 | irrelevant | 1 | 0 | This studies 99mTc-EC-DG, not technetium-99m ethylenedicysteine itself, and provides no readable numeric PK parameters; residence times are referred to in a table not provided. |
| popPK | Yanagi_2013 | irrelevant | 1 | 0 | Tc-EC is only a comparator, and no numeric disposition parameters are provided. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
