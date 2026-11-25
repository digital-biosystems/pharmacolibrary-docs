<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;copanlisib&quot;}]"></div>

# copanlisib

- **generic name:** copanlisib
- **ATC codes:** `L01EM02`
- **DrugBank:** [DB12483](https://go.drugbank.com/drugs/DB12483) · **PubChem:** [CID 24989044](https://pubchem.ncbi.nlm.nih.gov/compound/24989044)
- **molar mass:** 480.529 g/mol (C23H28N8O4) — DrugBank
- **groups:** approved, investigational

## About

Copanlisib is a protein kinase inhibitor used to treat adults with relapsed follicular lymphoma who have received prior systemic therapies. It is given as an intravenous injection in the form of a lyophilized powder for solution. The drug is no longer available in the United States because a clinical trial failed to confirm its benefits, and its European application was withdrawn.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q19903876](https://www.wikidata.org/wiki/Q19903876), [Wikipedia](https://en.wikipedia.org/wiki/Copanlisib?oldid=1375363519) (CC BY-SA 4.0), DrugBank's routes and dosage forms, the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| copanlisib | parent | 480.529 | C23H28N8O4 | DrugBank | [24989044](https://pubchem.ncbi.nlm.nih.gov/compound/24989044) | Morcos_2023 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C2 negative clearance/volume in a covariate scenario or base (implausible — bas…</sub> | [Morcos_2023_reference](drugs/drug_copanlisib/Copanlisib_Morcos2023_reference.md) | — | 2-compartment (no model) | 7 | Morcos PN et al., Copanlisib population pharmacokinetics…, CPT: pharmacometrics & syst… (2023) | [10.1002/psp4.13000](https://doi.org/10.1002/psp4.13000) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-23 11:32 | 0:09 | 0/1/0 | 0/0/0 | 0/0/0 | 20,120/201 | einfracz / qwen3.8-27b | 2 | 0/2 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 3 matched, 3 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Morcos_2023 | not_relevant | 2 | 2 | The paper reports population pharmacokinetics and exposure-response relationships based on demographic and laboratory covariates, but does not investigate the impact of specific gene variants or genotypes (pharmacogenomics) on PK or PD. |
| popPK | Morcos_2023_2 | relevant | 9 | 3 | The paper reports a PBPK and popPK model for copanlisib with specific parameter values (binding partner concentration, typical BSA) and model descriptions, but primary quantitative disposition parameters (CL, V) are referenced from an external adult model or figures rather than listed as standalone numeric values in the text. |
| PGx | Morcos_2023_2 | not_relevant | 0 | 0 | The paper focuses on physiological and age-based pharmacokinetic modeling (PBPK and PopPK) for pediatric dosing and does not report any effects of genetic variants or genotypes on PK/PD parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcopanlisib%5D&body=Drug%3A%20copanlisib%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_copanlisib/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-23 11:31 UTC</sub>
