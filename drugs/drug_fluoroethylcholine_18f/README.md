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
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (primary re-run, agreement 0.8), gpt-oss:120b (primary re-run, agreement 0.333). Primary extraction retained.">cross-check: partial 0/2</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Takesh_2013_reference](drugs/drug_fluoroethylcholine_18f/Fluoroethylcholine18f_Takesh2013_reference.md) | — | 1-compartment (no model) | 0 | Takesh M, Kinetic Modeling Application to (18)F-f…, World journal of nuclear me… (2013) | [10.4103/1450-1147.136734](https://doi.org/10.4103/1450-1147.136734) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 3 matched, 3 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

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
