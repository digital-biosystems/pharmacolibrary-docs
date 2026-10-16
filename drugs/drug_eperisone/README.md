<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M03B&quot;,&quot;href&quot;:&quot;atc/M03B.md&quot;},{&quot;label&quot;:&quot;eperisone&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Eperisone_Kang2021_reference&quot;,&quot;label&quot;:&quot;Kang_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_eperisone/Eperisone_Kang2021_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Eperisone_Baek2021_reference&quot;,&quot;label&quot;:&quot;Baek_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_eperisone/Eperisone_Baek2021_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# eperisone

- **generic name:** eperisone
- **ATC codes:** `M03BX09`
- **DrugBank:** [DB08992](https://go.drugbank.com/drugs/DB08992) · **PubChem:** [CID 3236](https://pubchem.ncbi.nlm.nih.gov/compound/3236)
- **molar mass:** 259.3865 g/mol (C17H25NO) — DrugBank
- **groups:** investigational

## About

Eperisone is a centrally acting muscle relaxant that has been used to treat muscle spasticity and related musculoskeletal conditions. It is not authorised in the European Union and is considered investigational in major drug databases, though it has been marketed in some Asian countries.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q426401](https://www.wikidata.org/wiki/Q426401) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| eperisone | parent | 259.387 | C17H25NO | DrugBank | [3236](https://pubchem.ncbi.nlm.nih.gov/compound/3236) | Baek_2021 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 02:49 | 0:33 | 1/0/1 | 0/0/0 | 0/0/0 | 69,482/5,449 | einfracz / qwen3.8-27b | 2 | 0/1 | 2/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.556). Primary extraction retained.">cross-check: partial</span> | [Kang_2021_reference](drugs/drug_eperisone/Eperisone_Kang2021_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Kang WH et al., Population Pharmacokinetic Method to Pr…, Pharmaceuticals (Basel, Swi… (2021) | [10.3390/ph14020114](https://doi.org/10.3390/ph14020114) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.154). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: unreported model parameter default(s): k12, k21</sub><br><sub>route_to: `scholar`</sub> | [Baek_2021_reference](drugs/drug_eperisone/Eperisone_Baek2021_reference.md) | ▶ model + simulator | 2-compartment, oral | 5 | Baek IH et al., Pharmacokinetics of eperisone following…, Biopharmaceutics & drug dis… (2021) | [10.1002/bdd.2264](https://doi.org/10.1002/bdd.2264) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=eperisone).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 8 matched, 8 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 2  ·  extracted 1  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Baek_2021.pdf` | Baek IH et al., Pharmacokinetics of eperisone following…, Biopharmaceutics & drug dis… (2021) | popPK | 10 | [10.1002/bdd.2264](https://doi.org/10.1002/bdd.2264) | [33527395](https://pubmed.ncbi.nlm.nih.gov/33527395) | The study reports quantitative population PK parameters (CL/F, Vc/F, Ka, half-life) for eperisone in humans directly in the abstract. |

<sub>queue written 2026-10-07T02:49:09.592794+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Kang_2021 | irrelevant | 3 | 2 | The study uses eperisone primarily as a case study to validate a statistical method for estimating variability, and the PK parameters mentioned (CL=10 L/h, Vd=50 L) are simulation assumptions for a generic drug, not measured values for eperisone. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 02:49 UTC</sub>
