<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;lisocabtagene maraleucel&quot;}]"></div>

# lisocabtagene maraleucel

- **generic name:** lisocabtagene maraleucel
- **ATC codes:** `L01XL08`
- **DrugBank:** [DB16582](https://go.drugbank.com/drugs/DB16582) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Lisocabtagene maraleucel is a cell and gene therapy used to treat certain B-cell lymphomas, including diffuse large B-cell lymphoma, follicular lymphoma, and mediastinal tumours. It is an authorised medicine in the European Union.

<small>⚠️ **Unverified** — written by `glm-5.3-flash` from general knowledge (no Wikidata entry found) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 20:51 | 0:32 | 0/1/0 | 0/0/0 | 0/0/0 | 31,258/2,033 | einfracz / qwen3.8-27b | 2 | 0/1 | 2/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Ogasawara_2021_reference](drugs/drug_lisocabtagene_maraleucel/LisocabtageneMaraleucel_Ogasawara2021_reference.md) | — | 1-compartment (no model) | 4 | Ogasawara K et al., Population Cellular Kinetics of Lisocab…, Clinical pharmacokinetics (2021) | [10.1007/s40262-021-01039-5](https://doi.org/10.1007/s40262-021-01039-5) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=lisocabtagene_maraleucel).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: CD19 (binder).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 3 matched, 3 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Cheng_2025.pdf` | Cheng Y et al., Integrative population pharmacokinetic…, Journal of pharmaceutical s… (2025) | popPK | 7 | [10.1016/j.xphs.2025.103925](https://doi.org/10.1016/j.xphs.2025.103925) | [40714188](https://pubmed.ncbi.nlm.nih.gov/40714188) | The study performs a population pharmacokinetic modeling of lisocabtagene_maraleucel (liso-cel) to determine cellular kinetic parameters, but the provided evidence consists only of the abstract and methodology description, lacking the specific numeric parameter values which are likely in the results tables or figures not included. |

<sub>queue written 2026-10-06T20:51:25.778735+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Cheng_2025 | relevant | 7 | 0 | The study performs a population pharmacokinetic modeling of lisocabtagene_maraleucel (liso-cel) to determine cellular kinetic parameters, but the provided evidence consists only of the abstract and methodology description, lacking the specific numeric parameter values which are likely in the results tables or figures not included. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 20:51 UTC</sub>
