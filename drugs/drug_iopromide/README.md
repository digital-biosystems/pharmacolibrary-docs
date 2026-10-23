<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V08A&quot;,&quot;href&quot;:&quot;atc/V08A.md&quot;},{&quot;label&quot;:&quot;iopromide&quot;}]"></div>

# iopromide

- **generic name:** iopromide
- **ATC codes:** `V08AB05`
- **DrugBank:** [DB09156](https://go.drugbank.com/drugs/DB09156) · **PubChem:** [CID 3736](https://pubchem.ncbi.nlm.nih.gov/compound/3736)
- **molar mass:** 791.1119 g/mol (C18H24I3N3O8) — DrugBank
- **groups:** approved

## About

Iopromide is an iodinated X-ray contrast agent used to make body structures visible during imaging examinations. It is an approved, low-osmolar water-soluble contrast medium used in medical imaging practice.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q4202805](https://www.wikidata.org/wiki/Q4202805) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| iopromide | parent | 791.112 | C18H24I3N3O8 | DrugBank | [3736](https://pubchem.ncbi.nlm.nih.gov/compound/3736) | Hackstein_2002 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub> | [Hackstein_2002_reference](drugs/drug_iopromide/Iopromide_Hackstein2002_reference.md) | — | 1-compartment (no model) | 3 | Hackstein N et al., Lopromide one-sample clearance as a mea…, Clinical physiology and fun… (2002) | [10.1046/j.1365-2281.2002.00394.x](https://doi.org/10.1046/j.1365-2281.2002.00394.x) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=iopromide).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 23:07 | 9:05 | 0/1/0 | 0/0/0 | 0/0/0 | 97,714/1,981 | ollama / glm-5.3-flash | 5 | 0/0 | 5/0 | 0 |

## Coverage

- **PubMed hits:** 33 matched, 33 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Hackstein_2002.pdf` | Hackstein N et al., Lopromide one-sample clearance as a mea…, Clinical physiology and fun… (2002) | popPK | 8 | [10.1046/j.1365-2281.2002.00394.x](https://doi.org/10.1046/j.1365-2281.2002.00394.x) | [12005162](https://pubmed.ncbi.nlm.nih.gov/12005162) | Reports iopromide two-compartment PK in 62 patients with numeric Vd (0.242 L/kg) and clearance estimation error, though full CL values are partly implicit. |
| `Kugoev_1999.pdf` | Kugoev AI et al., Pharmacokinetics and tolerability of io…, Investigative radiology (1999) | popPK | 8 | [10.1097/00004424-199911000-00005](https://doi.org/10.1097/00004424-199911000-00005) | [10548381](https://pubmed.ncbi.nlm.nih.gov/10548381) | Human intrathecal iopromide PK study with numeric half-lives (14.9 h mean, 17.3 h one-compartment), lag time, and urine recovery reported directly in the abstract; no CL/V values given. |

<sub>queue written 2026-10-07T23:00:28.851660+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Gaspari_1995 | irrelevant | 2 | 1 | The study's subject drug is iohexol; iopromide appears only as a comparator in a subgroup, and no numeric PK parameter values are present in the evidence. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 23:00 UTC</sub>
