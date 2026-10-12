<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D04A&quot;,&quot;href&quot;:&quot;atc/D04A.md&quot;},{&quot;label&quot;:&quot;tripelennamine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Tripelennamine_Wasfi2000_reference&quot;,&quot;label&quot;:&quot;Wasfi_2000_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tripelennamine/Tripelennamine_Wasfi2000_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# tripelennamine

- **generic name:** tripelennamine
- **ATC codes:** `D04AA04`, `R06AC04`
- **DrugBank:** [DB00792](https://go.drugbank.com/drugs/DB00792) · **PubChem:** [CID 5587](https://pubchem.ncbi.nlm.nih.gov/compound/5587)
- **molar mass:** 255.358 g/mol (C16H21N3) — DrugBank
- **groups:** approved, vet_approved

## About

Tripelennamine is an antihistamine used to treat allergic conditions such as urticaria. It is an approved drug, used both systemically for allergies and topically on the skin to relieve itching, and is also approved for veterinary use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q415203](https://www.wikidata.org/wiki/Q415203) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| tripelennamine | parent | 255.358 | C16H21N3 | DrugBank | [5587](https://pubchem.ncbi.nlm.nih.gov/compound/5587) | Wasfi_2000 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 15:13 | 1:07 | 1/0/0 | 0/0/0 | 0/0/0 | 25,846/4,303 | openai / gpt-6-luna | 0 | 0/0 | 0/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.7). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">horse</span> | [Wasfi_2000_reference](drugs/drug_tripelennamine/Tripelennamine_Wasfi2000_reference.md) | ▶ model + simulator | 1-compartment, IV | 5 | Wasfi IA et al., Comparative disposition of tripelennami…, Journal of veterinary pharm… (2000) | [10.1046/j.1365-2885.2000.00261.x](https://doi.org/10.1046/j.1365-2885.2000.00261.x) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=tripelennamine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| distribution | blood | `ALB` binder/regulator | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor | DrugBank actor |
| metabolism | liver | `CYP2D6` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: HRH1 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 8 matched, 8 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 1  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Wasfi_2000.pdf` | Wasfi IA et al., Comparative disposition of tripelennami…, Journal of veterinary pharm… (2000) | popPK | 10 | [10.1046/j.1365-2885.2000.00261.x](https://doi.org/10.1046/j.1365-2885.2000.00261.x) | [11110101](https://pubmed.ncbi.nlm.nih.gov/11110101) | Numeric disposition parameters for tripelennamine are reported directly for horses and camels. |
| `He_2002.pdf` | He N et al., Inhibitory effects of H1-antihistamines…, European journal of clinica… (2002) | pgx | 8 | [10.1007/s00228-001-0399-0](https://doi.org/10.1007/s00228-001-0399-0) | [11936702](https://www.ncbi.nlm.nih.gov/pubmed/11936702) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |

<sub>queue written 2026-10-07T15:12:34.311026+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Hamelin_1998 | not_relevant | 0 | 0 | The study measures tripelennamine inhibition of CYP2D6 in vitro, not a gene variant or phenotype effect on tripelennamine PK or PD. |
| PGx | He_2002 | not_relevant | 0 | 0 | The study tests tripelennamine’s in vitro inhibition of CYP2D6, not how a genetic variant or phenotype changes a PK/PD parameter of tripelennamine. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 15:12 UTC</sub>
