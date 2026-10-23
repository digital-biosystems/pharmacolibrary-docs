<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01D&quot;,&quot;href&quot;:&quot;atc/C01D.md&quot;},{&quot;label&quot;:&quot;serelaxin&quot;}]"></div>

# serelaxin

- **generic name:** serelaxin
- **ATC codes:** `C01DX21`
- **DrugBank:** [DB05794](https://go.drugbank.com/drugs/DB05794) · **PubChem:** not captured
- **groups:** investigational

## About

Serelaxin, a recombinant form of human relaxin, was investigated as a treatment for heart failure. It remains investigational; a marketing application in the European Union was refused, so it is not authorised there.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7453086](https://www.wikidata.org/wiki/Q7453086) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| serelaxin | parent | 5963 | C256H408N74O74S8 | PubChem | [71300755](https://pubchem.ncbi.nlm.nih.gov/compound/71300755) | Soubret_2018 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Rejected</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub> | [Soubret_2018_reference](drugs/drug_serelaxin/Serelaxin_Soubret2018_reference.md) | — | 1-compartment (no model) | 2 | Soubret A et al., Population pharmacokinetics of serelaxi…, British journal of clinical… (2018) | [10.1111/bcp.13714](https://doi.org/10.1111/bcp.13714) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 10:30 | 2:13 | 0/1/0 | 0/0/0 | 0/0/0 | 22,087/6,484 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 3 matched, 3 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Soubret_2018.pdf` | Soubret A et al., Population pharmacokinetics of serelaxi…, British journal of clinical… (2018) | popPK | 10 | [10.1111/bcp.13714](https://doi.org/10.1111/bcp.13714) | [30014598](https://pubmed.ncbi.nlm.nih.gov/30014598) | The paper reports a population PK model for serelaxin in humans with specific numeric values for Vss and clearance covariate impacts provided in the abstract. |

<sub>queue written 2026-10-06T10:28:36.343664+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Liu_2003 | irrelevant | 0 | 0 | The paper identifies relaxin-3 (INSL7) as a ligand for GPCR135 and reports binding affinities (Kd, EC50), but does not report pharmacokinetic parameters (CL, V, t1/2) for serelaxin. |
| PD | Liu_2003 | not_relevant | 0 | 0 | The paper reports pharmacological parameters (EC50, Kd) for relaxin-3/INSL7, not serelaxin. |
| popPK | Petrie_2018 | irrelevant | 0 | 0 | The study analyzes hemodynamic correlations (cardiac index and pulse pressure) in heart failure patients and does not report any pharmacokinetic parameters for serelaxin. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-06 10:28 UTC</sub>
