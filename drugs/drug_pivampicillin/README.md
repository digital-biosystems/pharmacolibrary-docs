<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01C&quot;,&quot;href&quot;:&quot;atc/J01C.md&quot;},{&quot;label&quot;:&quot;pivampicillin&quot;}]"></div>

# pivampicillin

- **generic name:** pivampicillin
- **ATC codes:** `J01CA02`
- **DrugBank:** [DB01604](https://go.drugbank.com/drugs/DB01604) · **PubChem:** [CID 33478](https://pubchem.ncbi.nlm.nih.gov/compound/33478)
- **molar mass:** 463.547 g/mol (C22H29N3O6S) — DrugBank
- **groups:** approved, withdrawn

## About

Pivampicillin is a penicillin antibiotic with an extended spectrum, an ester form of ampicillin used to treat bacterial infections. It has been withdrawn and is no longer in clinical use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3122143](https://www.wikidata.org/wiki/Q3122143) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| ampicillin | metabolite | — (mass units only) | — | — | — | — |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 10:20 | 1:13 | 0/1/0 | 1/0/0 | 0/0/0 | 31,050/1,118 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (primary re-run, agreement 0.333). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Ehrnebo_1979_reference](drugs/drug_pivampicillin/Pivampicillin_Ehrnebo1979_reference.md) | — | 1-compartment (no model) | 0 | Ehrnebo M et al., Pharmacokinetics of ampicillin and its…, Journal of pharmacokinetics… (1979) | [10.1007/BF01062386](https://doi.org/10.1007/BF01062386) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> | [Sjövall_1979_AUC](drugs/drug_pivampicillin/pd_Sj_vall_1979_AUC.md) | Area under the serum concentration time curve of ampicillin ← Ampicillin · direct linear effect | — | Sjövall J, Dose dependence in human absorption of…, Infection 7 Suppl (1979) | [10.1007/BF01659771](https://doi.org/10.1007/BF01659771) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> | [Sjövall_1979_Cmax](drugs/drug_pivampicillin/pd_Sj_vall_1979_Cmax.md) | Peak serum concentration of ampicillin ← Ampicillin · direct linear effect | — | Sjövall J, Dose dependence in human absorption of…, Infection 7 Suppl (1979) | [10.1007/BF01659771](https://doi.org/10.1007/BF01659771) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=pivampicillin).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 17 matched, 15 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ehrnebo_1979.pdf` | Ehrnebo M et al., Pharmacokinetics of ampicillin and its…, Journal of pharmacokinetics… (1979) | popPK | 9 | [10.1007/BF01062386](https://doi.org/10.1007/BF01062386) | [529016](https://pubmed.ncbi.nlm.nih.gov/529016) | The study reports quantitative pharmacokinetic parameters (bioavailability, absorption rates, volume of distribution) for pivampicillin and its active metabolite ampicillin in a two-compartment model, though specific clearance (CL) and half-life (t1/2) values are not explicitly listed in the text. |

<sub>queue written 2026-10-07T10:19:41.819532+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | George_1981 | not_relevant | 0 | 0 | The paper discusses general drug metabolism by GI mucosa and mentions pivampicillin only as an example of ester hydrolysis, without reporting any pharmacogenomic effects or specific PK/PD parameter changes linked to genetic variants. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 10:19 UTC</sub>
