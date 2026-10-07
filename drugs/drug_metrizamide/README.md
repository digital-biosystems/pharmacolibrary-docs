<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V08A&quot;,&quot;href&quot;:&quot;atc/V08A.md&quot;},{&quot;label&quot;:&quot;metrizamide&quot;}]"></div>

# metrizamide

- **generic name:** metrizamide
- **ATC codes:** `V08AB01`
- **DrugBank:** [DB01578](https://go.drugbank.com/drugs/DB01578) · **PubChem:** [CID 20056604](https://pubchem.ncbi.nlm.nih.gov/compound/20056604)
- **molar mass:** 789.1 g/mol (C18H22I3N3O8) — DrugBank
- **groups:** experimental

## About

Metrizamide is an iodinated, water-soluble X-ray contrast agent used to make body structures visible during imaging. It is no longer in routine clinical use and is regarded as an experimental agent.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q6824399](https://www.wikidata.org/wiki/Q6824399) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 17:17 | 0:33 | 0/0/0 | 0/0/0 | 0/0/0 | 12,381/1,362 | openai / gpt-6-luna | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Golman_1975.pdf` | Golman K, Absorption of metrizamide from cereb ro…, Journal of pharmaceutical s… (1975) | popPK | 9 | [10.1002/jps.2600640310](https://doi.org/10.1002/jps.2600640310) | [1151624](https://pubmed.ncbi.nlm.nih.gov/1151624) | A human one-compartment PK model is reported, but the mean absorption-rate value is not stated numerically. |
| `Elliott_1999.pdf` | Elliott P et al., Ionic mechanisms underlying excitatory…, Neuroscience (1999) | pd | 4 | [10.1016/s0306-4522(98)00534-x](https://doi.org/10.1016/s0306-4522(98)00534-x) | [10338299](https://www.ncbi.nlm.nih.gov/pubmed/10338299) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-07T17:17:18.143504+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Cortijo_1997 | irrelevant | 0 | 0 | Metrizamide is only used to isolate human eosinophils; no metrizamide disposition parameters are reported. |
| popPK | Elliott_1999 | irrelevant | 0 | 0 | Metrizamide was used only for density-gradient cell isolation; no metrizamide pharmacokinetic parameters are reported. |
| popPK | Golman_1975 | relevant | 9 | 2 | A human one-compartment PK model is reported, but the mean absorption-rate value is not stated numerically. |
| popPK | Turner_1994 | irrelevant | 0 | 0 | Metrizamide was only used to isolate human granulocytes; no metrizamide disposition parameters are reported. |
| popPK | Winkler_1980 | irrelevant | 0 | 0 | This review reports no quantitative metrizamide disposition parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
