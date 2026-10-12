<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V09E&quot;,&quot;href&quot;:&quot;atc/V09E.md&quot;},{&quot;label&quot;:&quot;xenon (127Xe) gas&quot;}]"></div>

# xenon (127Xe) gas

- **generic name:** xenon (127Xe) gas
- **ATC codes:** `V09EX02`
- **DrugBank:** not captured · **PubChem:** not captured
- **groups:** not captured

## About

Xenon-127 is a radioactive isotope of xenon used as a diagnostic radiopharmaceutical for imaging of the respiratory system. It is classified in the ATC system among respiratory-system diagnostic radiopharmaceuticals, indicating use in lung ventilation imaging.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2304361](https://www.wikidata.org/wiki/Q2304361) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| xenon_127xe_gas | metabolite | 131.29 | Xe | PubChem | [166973](https://pubchem.ncbi.nlm.nih.gov/compound/166973) | Susskind_1978 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 19:32 | 1:08 | 0/1/0 | 0/0/0 | 0/0/0 | 12,814/5,059 | openai / gpt-6-luna | 0 | 0/0 | 0/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.2). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Susskind_1978_reference](drugs/drug_xenon_127xe_gas/Xenon127xeGas_Susskind1978_reference.md) | — | 1-compartment (no model) | 1 | Susskind H et al., Studies of whole-body retention and cle…, Progress in nuclear medicine (1978) | — |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 2 matched, 2 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Susskind_1977.pdf` | Susskind H et al., Whole-body retention of radioxenon, Journal of nuclear medicine… (1977) | popPK | 9 | not captured | [404402](https://pubmed.ncbi.nlm.nih.gov/404402) | Reports quantitative whole-body xenon-127 clearance half-times, with values present in the evidence. |
| `Susskind_1978.pdf` | Susskind H et al., Studies of whole-body retention and cle…, Progress in nuclear medicine (1978) | popPK | 8 | not captured | [219437](https://pubmed.ncbi.nlm.nih.gov/219437) | Reports numeric whole-body xenon-127 retention half-times and component fractions in the provided evidence. |

<sub>queue written 2026-10-07T19:31:43.576171+00:00</sub>

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 19:32 UTC</sub>
