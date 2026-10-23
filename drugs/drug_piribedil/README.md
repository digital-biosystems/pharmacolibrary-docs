<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N04B&quot;,&quot;href&quot;:&quot;atc/N04B.md&quot;},{&quot;label&quot;:&quot;piribedil&quot;}]"></div>

# piribedil

- **generic name:** piribedil
- **ATC codes:** `N04BC08`
- **DrugBank:** [DB12478](https://go.drugbank.com/drugs/DB12478) · **PubChem:** [CID 4850](https://pubchem.ncbi.nlm.nih.gov/compound/4850)
- **molar mass:** 298.346 g/mol (C16H18N4O2) — DrugBank
- **groups:** investigational

## About

Piribedil is a dopamine agonist that has been used to treat Parkinson's disease. It is considered investigational and is not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q413976](https://www.wikidata.org/wiki/Q413976) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 14:19 | 1:44 | 0/0/0 | 0/0/0 | 0/0/0 | 12,587/683 | ollama / glm-5.3-flash | 1 | 1/0 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Simon_2005.pdf` | Simon N et al., End-of-dose akinesia after a single int…, Movement disorders : offici… (2005) | popPK | 6 | [10.1002/mds.20400](https://doi.org/10.1002/mds.20400) | [15726579](https://pubmed.ncbi.nlm.nih.gov/15726579) | Human PK/PD study of piribedil with IV infusion, but no numeric disposition parameters (CL, V, t½) appear in the provided evidence; values likely in figures/supplement not included. |

<sub>queue written 2026-10-06T14:19:23.908117+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Li_2025 | not_relevant | 3 | 4 | Piribedil appears only as a covariate/dosage adjustment; no gene variant is linked to a piribedil-specific PK or PD parameter. |
| popPK | Martinez-Mir_1987 | irrelevant | 0 | 0 | In-vitro pharmacodynamic study of dopamine agonists in guinea-pig atria with no PK parameters for piribedil. |
| popPK | Mueller_1976 | irrelevant | 0 | 0 | Endocrine pharmacodynamic study of piribedil in rats with no pharmacokinetic parameters or numeric disposition values. |
| popPK | Riffee_1981 | irrelevant | 0 | 0 | Pharmacodynamic seizure-threshold study in mice with no PK disposition parameters for piribedil. |
| popPK | Simon_2005 | relevant | 6 | 2 | Human PK/PD study of piribedil with IV infusion, but no numeric disposition parameters (CL, V, t½) appear in the provided evidence; values likely in figures/supplement not included. |
| popPK | Thornburg_1975 | irrelevant | 0 | 0 | Piribedil is only used as a dopaminergic agonist probe in a behavioral pharmacology study; no PK parameters reported. |
| popPK | Yamada_1986 | irrelevant | 0 | 0 | Behavioral pharmacology study in rats with no PK parameters for piribedil. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
