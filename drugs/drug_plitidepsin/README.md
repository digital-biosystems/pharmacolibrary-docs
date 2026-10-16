<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;plitidepsin&quot;}]"></div>

# plitidepsin

- **generic name:** plitidepsin
- **ATC codes:** `L01XX57`
- **DrugBank:** [DB04977](https://go.drugbank.com/drugs/DB04977) · **PubChem:** [CID 9812534](https://pubchem.ncbi.nlm.nih.gov/compound/9812534)
- **molar mass:** 1110.357 g/mol (C57H87N7O15) — DrugBank
- **groups:** investigational

## About

Plitidepsin is an investigational anticancer drug that was studied for the treatment of multiple myeloma. Its marketing application in the European Union was withdrawn, so it is not an approved medicine there.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q4779975](https://www.wikidata.org/wiki/Q4779975) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 22:47 | 0:25 | 0/1/0 | 0/0/0 | 0/0/0 | 10,713/437 | einfracz / qwen3.8-27b | 1 | 0/1 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Nalda-Molina_2009_reference](drugs/drug_plitidepsin/Plitidepsin_NaldaMolina2009_reference.md) | — | 1-compartment (no model) | 0 | Nalda-Molina R et al., Population pharmacokinetics meta-analys…, Cancer chemotherapy and pha… (2009) | [10.1007/s00280-008-0841-4](https://doi.org/10.1007/s00280-008-0841-4) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=plitidepsin).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP2A6` substrate, `CYP2E1` substrate, `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: CYP4A11 (substrate), EEF1A2 (unknown), PPT1 (modulator).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Nalda-Molina_2009.pdf` | Nalda-Molina R et al., Population pharmacokinetics meta-analys…, Cancer chemotherapy and pha… (2009) | popPK | 10 | [10.1007/s00280-008-0841-4](https://doi.org/10.1007/s00280-008-0841-4) | [18941750](https://pubmed.ncbi.nlm.nih.gov/18941750) | The paper reports explicit quantitative population PK parameters (CL, Vss, binding constants) for plitidepsin in human cancer patients within the abstract. |

<sub>queue written 2026-10-06T22:47:01.493172+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Jimeno_2006 | not_relevant | 0 | 0 | The paper does not report pharmacogenomic effects on the PK or PD parameters of plitidepsin. |
| PGx | Nalda-Molina_2009 | not_relevant | 0 | 0 | The study identifies no clinically relevant covariates affecting pharmacokinetics and does not report any gene variants, genotypes, or pharmacogenomic effects. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 22:47 UTC</sub>
