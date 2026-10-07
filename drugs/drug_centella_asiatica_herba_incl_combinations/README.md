<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D03A&quot;,&quot;href&quot;:&quot;atc/D03A.md&quot;},{&quot;label&quot;:&quot;Centella asiatica herba, incl. combinations&quot;}]"></div>

# Centella asiatica herba, incl. combinations

- **generic name:** Centella asiatica herba, incl. combinations
- **ATC codes:** `D03AX14`
- **DrugBank:** not captured · **PubChem:** not captured
- **groups:** not captured

## About

Centella asiatica herb is a topical cicatrizant used to help heal wounds and ulcers. It is classified under dermatological preparations for wound and ulcer treatment and remains in use.

<small>⚠️ **Unverified** — written by `glm-5.3-flash` from general knowledge (no Wikidata entry found) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 13:35 | 3:06 | 0/0/0 | 0/0/0 | 0/0/0 | 42,054/7,208 | openai / gpt-6-luna | 5 | 1/4 | 4/1 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 25 matched, 10 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Anukunwithaya_2017.pdf` | Anukunwithaya T et al., Pharmacokinetics of a Standardized Extr…, Planta medica (2017) | popPK | 9 | [10.1055/s-0042-122344](https://doi.org/10.1055/s-0042-122344) | [27992940](https://pubmed.ncbi.nlm.nih.gov/27992940) | Rat pharmacokinetics of Centella asiatica extract are studied, but no numeric clearance, volume, half-life, or model parameters are provided. |

<sub>queue written 2026-10-07T13:35:03.795614+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ajani_2023 | irrelevant | 1 | 0 | The paper reports predicted ADME descriptors and enzyme inhibition, not quantitative disposition parameters. |
| popPK | Anukunwithaya_2017 | relevant | 9 | 1 | Rat pharmacokinetics of Centella asiatica extract are studied, but no numeric clearance, volume, half-life, or model parameters are provided. |
| popPK | Bertollo_2026 | irrelevant | 0 | 0 | This review provides no quantitative pharmacokinetic parameters for Centella asiatica; the numeric values concern other plants or drugs. |
| popPK | Chen_2020 | irrelevant | 2 | 0 | This study measures isolated asiatic acid formulations rather than Centella herb, and no numeric disposition parameter values are present. |
| popPK | Jayathirtha_2004 | irrelevant | 0 | 0 | This immunomodulatory study reports no pharmacokinetic disposition parameters for Centella asiatica. |
| popPK | Jiang_2025 | irrelevant | 2 | 5 | This is a review with a numeric half-life in the text, but no original quantitative PK model or qualifying disposition parameters. |
| popPK | Leng_2013 | irrelevant | 2 | 1 | Rat disposition is studied, but no quantitative PK parameters are reported; only dose and excretion percentages appear. |
| popPK | Taleb_2023 | irrelevant | 0 | 0 | Centella is only discussed as a co-administered herb, and no numeric Centella-related PK values are provided. |
| popPK | Wang_2015 | irrelevant | 0 | 0 | The study focuses on intestinal anti-arthritis effects and provides no quantitative pharmacokinetic parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
