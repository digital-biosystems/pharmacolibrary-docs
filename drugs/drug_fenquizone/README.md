<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C03B&quot;,&quot;href&quot;:&quot;atc/C03B.md&quot;},{&quot;label&quot;:&quot;fenquizone&quot;}]"></div>

# fenquizone

- **generic name:** fenquizone
- **ATC codes:** `C03BA13`
- **DrugBank:** [DB13708](https://go.drugbank.com/drugs/DB13708) · **PubChem:** not captured
- **molar mass:** 337.78 g/mol (C14H12ClN3O3S) — DrugBank
- **groups:** investigational

## About

Fenquizone is a diuretic, a type of drug that increases urine production and is used to treat conditions involving fluid retention such as swelling and high blood pressure. It is considered investigational and does not appear to be an approved medicine in major markets such as the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3742488](https://www.wikidata.org/wiki/Q3742488) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| fenquizone | parent | 337.78 | C14H12ClN3O3S | DrugBank | — | Maggi_1985 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 17:17 | 1:49 | 0/1/0 | 0/0/0 | 0/0/0 | 20,134/4,348 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.636), gpt-oss:120b (not confirmed, agreement 0.143). The first reading is what the record holds.">cross-check: disputed 0/2</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Maggi_1985_reference](drugs/drug_fenquizone/Fenquizone_Maggi1985_reference.md) | — | 1-compartment (no model) | 5 | Maggi GC et al., Single-dose pharmacokinetics of fenquiz…, Arzneimittel-Forschung (1985) | — |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 1
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Maggi_1985.pdf` | Maggi GC et al., Single-dose pharmacokinetics of fenquiz…, Arzneimittel-Forschung (1985) | popPK | 10 | not captured | [4026929](https://pubmed.ncbi.nlm.nih.gov/4026929) | The study reports quantitative pharmacokinetic parameters (half-life, volume, clearance, Ka) for fenquizone in humans, with all values explicitly stated in the text. |

<sub>queue written 2026-10-06T17:15:44.937191+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Beermann_1987 | irrelevant | 2 | 5 | This is a review article summarizing published knowledge, not an original study reporting new quantitative disposition parameters or a compartmental/population-PK model for fenquizone. |
| popPK | Ferrando_1981 | irrelevant | 0 | 0 | The study investigates the pharmacological actions and site of action of fenquizone in animals but does not report quantitative pharmacokinetic parameters such as clearance, volume, or half-life. |
| PD | Maggi_1985 | not_relevant | 0 | 0 | The paper reports only pharmacokinetic parameters (Cmax, tmax, half-life, clearance) and contains no pharmacodynamic or exposure-response data. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 17:15 UTC</sub>
