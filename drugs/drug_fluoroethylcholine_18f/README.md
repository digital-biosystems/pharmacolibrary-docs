<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V09I&quot;,&quot;href&quot;:&quot;atc/V09I.md&quot;},{&quot;label&quot;:&quot;fluoroethylcholine (18F)&quot;}]"></div>

# fluoroethylcholine (18F)

- **generic name:** fluoroethylcholine (18F)
- **ATC codes:** `V09IX08`
- **DrugBank:** not captured · **PubChem:** not captured
- **groups:** not captured

## About

Fluoroethylcholine F-18 is a radioactive imaging agent used to help detect tumours in the body. It is used as a diagnostic radiopharmaceutical in nuclear medicine imaging.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27265805](https://www.wikidata.org/wiki/Q27265805) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 16:10 | 5:57 | 0/1/0 | 0/0/0 | 0/0/0 | 94,472/11,058 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/1 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (primary re-run, agreement 0.333). The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Takesh_2013_reference](drugs/drug_fluoroethylcholine_18f/Fluoroethylcholine18f_Takesh2013_reference.md) | — | 1-compartment (no model) | 0 | Takesh M, Kinetic Modeling Application to (18)F-f…, World journal of nuclear me… (2013) | [10.4103/1450-1147.136734](https://doi.org/10.4103/1450-1147.136734) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 3 matched, 3 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Kristian_2014.pdf` | Kristian A et al., Positron emission tomography and pharma…, Acta oncologica (Stockholm,… (2014) | popPK | 8 | [10.3109/0284186X.2014.934398](https://doi.org/10.3109/0284186X.2014.934398) | [25017377](https://pubmed.ncbi.nlm.nih.gov/25017377) | The study reports quantitative PK parameters (k1, k2, k3, KP, vb) for fluoroethylcholine_18f in a compartmental model, but the specific numeric values are not present in the provided text. |

<sub>queue written 2026-10-07T16:05:03.780827+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Kristian_2014 | relevant | 8 | 2 | The study reports quantitative PK parameters (k1, k2, k3, KP, vb) for fluoroethylcholine_18f in a compartmental model, but the specific numeric values are not present in the provided text. |
| popPK | Kukuk_2011 | irrelevant | 2 | 0 | The study reports PET imaging metrics (%ID/cm3, T/M) for tumor uptake rather than quantitative population pharmacokinetic parameters (CL, V, Q, ka) for fluoroethylcholine_18f. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 16:05 UTC</sub>
