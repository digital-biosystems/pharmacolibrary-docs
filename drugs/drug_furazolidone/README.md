<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;G01A&quot;,&quot;href&quot;:&quot;atc/G01A.md&quot;},{&quot;label&quot;:&quot;furazolidone&quot;}]"></div>

# furazolidone

- **generic name:** furazolidone
- **ATC codes:** `G01AX06`, `P01AB51`
- **DrugBank:** [DB00614](https://go.drugbank.com/drugs/DB00614) · **PubChem:** [CID 3435](https://pubchem.ncbi.nlm.nih.gov/compound/3435)
- **molar mass:** 225.16 g/mol (C8H7N3O5) — DrugBank
- **groups:** investigational, vet_approved

## About

Furazolidone is a nitrofuran antimicrobial used against protozoal and bacterial infections such as giardiasis, cholera, shigellosis, and staphylococcal or gram-negative infections. It is no longer approved for human use and is now used mainly in veterinary medicine, with no European Union authorisation.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2467555](https://www.wikidata.org/wiki/Q2467555) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 08:02 | 0:07 | 0/1/0 | 0/0/0 | 0/0/0 | 6,393/475 | einfracz / qwen3.8-27b | 9 | 0/0 | 0/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (primary re-run, agreement 0.5). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (fish), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">fish</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Plakas_1994_2_reference](drugs/drug_furazolidone/Furazolidone_Plakas1994v2_reference.md) | — | 1-compartment (no model) | 0 | Plakas SM et al., Furazolidone disposition after intravas…, Xenobiotica; the fate of fo… (1994) | [10.3109/00498259409038669](https://doi.org/10.3109/00498259409038669) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=furazolidone).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | brain | `MAOA` inhibitor, `MAOB` inhibitor | DrugBank actor |
| metabolism | liver | `MAOA` inhibitor | DrugBank actor |
| metabolism | platelet | `MAOB` inhibitor | DrugBank actor |
| metabolism | small intestine | `MAOA` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: DNA (cross-linking/alkylation).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 2 matched, 2 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Plakas_1994_2.pdf` | Plakas SM et al., Furazolidone disposition after intravas…, Xenobiotica; the fate of fo… (1994) | popPK | 10 | [10.3109/00498259409038669](https://doi.org/10.3109/00498259409038669) | [7701851](https://pubmed.ncbi.nlm.nih.gov/7701851) | The study reports quantitative PK parameters (clearance, half-life, bioavailability) for furazolidone in channel catfish, with values explicitly stated in the text. |

<sub>queue written 2026-10-07T08:02:42.116112+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Canton_1976 | irrelevant | 0 | 0 | The study reports short-term toxicity (LC50/EC50) of furazolidone to freshwater organisms, not pharmacokinetic disposition parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 08:02 UTC</sub>
