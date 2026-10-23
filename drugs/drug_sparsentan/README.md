<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C09X&quot;,&quot;href&quot;:&quot;atc/C09X.md&quot;},{&quot;label&quot;:&quot;sparsentan&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Sparsentan_Wada2023_reference&quot;,&quot;label&quot;:&quot;Wada_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sparsentan/Sparsentan_Wada2023_reference.md&quot;,&quot;status&quot;:&quot;Reproduces with caveats&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# sparsentan

- **generic name:** sparsentan
- **ATC codes:** `C09XX01`
- **DrugBank:** [DB12548](https://go.drugbank.com/drugs/DB12548) · **PubChem:** [CID 10257882](https://pubchem.ncbi.nlm.nih.gov/compound/10257882)
- **molar mass:** 592.76 g/mol (C32H40N4O5S) — DrugBank
- **groups:** approved, investigational

## About

Sparsentan is used to treat IgA glomerulonephritis, a kidney disease. It is approved and authorised in the European Union, though it remains under investigation for other uses and carries a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27088845](https://www.wikidata.org/wiki/Q27088845) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| sparsentan | parent | 592.76 | C32H40N4O5S | DrugBank | [10257882](https://pubchem.ncbi.nlm.nih.gov/compound/10257882) | Wada_2023 |

## Start here

> **Wada_2023_reference** — <span class="pk-badge pk-badge--green">Reproduces with caveats</span> healthy volunteers and patients with focal segmental glomerulosclerosis. [Run it in the simulator](drugs/drug_sparsentan/Sparsentan_Wada2023_reference.md?tab=Simulation) · [record](drugs/drug_sparsentan/Sparsentan_Wada2023_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | species | status | record |
|---|---|---|---|---|---|---|---|---|
| CL | CL | 1.23 | L/h | 1.23 L/h | healthy volunteers and patients with focal segmental glomerulosclerosis | human | <span class="pk-badge pk-badge--green">Reproduces with caveats</span> | [Wada_2023_reference](drugs/drug_sparsentan/Sparsentan_Wada2023_reference.md) |
| CL | CL/F | 3.88 | L/h | 3.88 L/h | healthy volunteers and patients with focal segmental glomerulosclerosis | human | <span class="pk-badge pk-badge--green">Reproduces with caveats</span> | [Wada_2023_reference](drugs/drug_sparsentan/Sparsentan_Wada2023_reference.md) |
| V | V1/F | 49.3 | L | 49.3 L | healthy volunteers and patients with focal segmental glomerulosclerosis | human | <span class="pk-badge pk-badge--green">Reproduces with caveats</span> | [Wada_2023_reference](drugs/drug_sparsentan/Sparsentan_Wada2023_reference.md) |
| ka | kabs | 0.74 | 1/h | 0.740 1/h | healthy volunteers and patients with focal segmental glomerulosclerosis | human | <span class="pk-badge pk-badge--green">Reproduces with caveats</span> | [Wada_2023_reference](drugs/drug_sparsentan/Sparsentan_Wada2023_reference.md) |
| t½ | t1/2z | 9.6 | h | 9.6 h | healthy volunteers and patients with focal segmental glomerulosclerosis | human | <span class="pk-badge pk-badge--green">Reproduces with caveats</span> | [Wada_2023_reference](drugs/drug_sparsentan/Sparsentan_Wada2023_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

<div class="pk-forest-row"><svg class="pk-forest" xmlns="http://www.w3.org/2000/svg" width="560" height="80" viewBox="0 0 560 80" role="img" aria-label="CL across studies"><text x="190" y="14" font-size="12" font-weight="600">CL (L/h, log scale)</text><line x1="190.0" y1="18" x2="190.0" y2="58" stroke="#ddd"/><text x="190.0" y="72" font-size="10" text-anchor="middle">1</text><line x1="540.0" y1="18" x2="540.0" y2="58" stroke="#ddd"/><text x="540.0" y="72" font-size="10" text-anchor="middle">10</text><text x="184" y="34.0" font-size="11" text-anchor="end">Wada_2023 · CL</text><circle cx="221.5" cy="30.0" r="4" fill="#66bb6a"><title>Wada_2023 · CL: 1.23 L/h</title></circle><text x="184" y="50.0" font-size="11" text-anchor="end">Wada_2023 · CL/F</text><circle cx="396.1" cy="46.0" r="4" fill="#66bb6a"><title>Wada_2023 · CL/F: 3.88 L/h</title></circle></svg></div>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Reproduces with caveats" data-sim="yes"></span><span class="pk-badge pk-badge--green">Reproduces with caveats</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub> | [Wada_2023_reference](drugs/drug_sparsentan/Sparsentan_Wada2023_reference.md) | ▶ model + simulator | 2-compartment, oral | 8 (+3 cov.) | Wada R et al., Population pharmacokinetic analysis of…, CPT: pharmacometrics & syst… (2023) | [10.1002/psp4.12996](https://doi.org/10.1002/psp4.12996) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 09:51 | 8:11 | 1/0/0 | 0/0/0 | 0/0/0 | 130,759/27,416 | ollama / qwen3.8:27b-mtp-q8_0 | 3 | 0/2 | 3/0 | 0 |

## Coverage

- **PubMed hits:** 3 matched, 3 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 1  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ngai_2025 | irrelevant | 0 | 0 | The paper is a matching-adjusted indirect comparison of kidney function outcomes (eGFR, proteinuria) and does not report any pharmacokinetic parameters for sparsentan. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 09:44 UTC</sub>
