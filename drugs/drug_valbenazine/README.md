<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N07X&quot;,&quot;href&quot;:&quot;atc/N07X.md&quot;},{&quot;label&quot;:&quot;valbenazine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Valbenazine_Nguyen2025_reference&quot;,&quot;label&quot;:&quot;Nguyen_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_valbenazine/Valbenazine_Nguyen2025_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# valbenazine

- **generic name:** valbenazine
- **ATC codes:** `N07XX13`
- **DrugBank:** [DB11915](https://go.drugbank.com/drugs/DB11915) · **PubChem:** [CID 24795069](https://pubchem.ncbi.nlm.nih.gov/compound/24795069)
- **molar mass:** 418.578 g/mol (C24H38N2O4) — DrugBank
- **groups:** approved, investigational

## About

Valbenazine is a vesicular monoamine transporter inhibitor used to treat tardive dyskinesia. It is given by mouth in capsule form. The drug is approved for medical use.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q27089118](https://www.wikidata.org/wiki/Q27089118), [Wikipedia](https://en.wikipedia.org/wiki/Valbenazine?oldid=1357688439) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| valbenazine | parent | 418.578 | C24H38N2O4 | DrugBank | [24795069](https://pubchem.ncbi.nlm.nih.gov/compound/24795069) | Nguyen_2025 |
| [+]‐α‐dihydrotetrabenazine | metabolite | 319.445 | C19H29NO3 | PubChem | [14580381](https://pubchem.ncbi.nlm.nih.gov/compound/14580381) | Nguyen_2025 |

## Start here

> **Nguyen_2025_reference** — <span class="pk-badge pk-badge--orange">Needs review</span> patients with Huntington's disease, n = 425. [Run it in the simulator](drugs/drug_valbenazine/Valbenazine_Nguyen2025_reference.md?tab=Simulation) · [record](drugs/drug_valbenazine/Valbenazine_Nguyen2025_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="yes"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub><br><sub>blocking: T3_param_coverage</sub><br><sub>blocking: T3_topology_template</sub> | [Nguyen_2025_reference](drugs/drug_valbenazine/Valbenazine_Nguyen2025_reference.md) | ▶ model + simulator | 1-compartment, oral | 10 (+6 cov.) | Nguyen HQ et al., Population Pharmacokinetic and Exposure…, Journal of clinical pharmac… (2025) | [10.1002/jcph.70092](https://doi.org/10.1002/jcph.70092) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--blue" title="The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.">Simulated</span> <span class="pk-badge pk-badge--green" title="Phenotype/genotype-specific effect on a named model parameter (θ).">quantitative</span> | **CYP2D6** | `Q27` · CL/F | formation | [Nguyen_2025](drugs/drug_valbenazine/pgx_Nguyen_2025_CYP2D6_Q27.md) | Nguyen HQ et al., Population Pharmacokinetic and Exposure…, Journal of clinical pharmac… (2025) | [10.1002/jcph.70092](https://doi.org/10.1002/jcph.70092) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 05:26 | 0:04 | 1/0/0 | 0/0/0 | 1/0/0 | 3,930/152 | einfracz / qwen3.8-27b | 1 | 0/1 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 4 matched, 4 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Furr_2023 | irrelevant | 0 | 0 | The paper is a Phase 3 clinical efficacy and safety trial for Huntington's disease chorea and does not report quantitative pharmacokinetic parameters (CL, V, t1/2, etc.) for valbenazine. |
| PGx | Furr_2023 | not_relevant | 0 | 0 | The paper reports clinical efficacy and safety of valbenazine in Huntington's disease but does not investigate pharmacogenomic effects on PK or PD parameters. |
| popPK | Nguyen_2024 | irrelevant | 1 | 0 | The paper focuses on pharmacodynamics (efficacy/exposure-response) rather than reporting quantitative pharmacokinetic parameters like clearance or volume. |
| PGx | Nguyen_2024 | not_relevant | 0 | 0 | The paper reports on Model-Informed Drug Development to justify a dose level based on exposure-response data, containing no information on genetic variants or pharmacogenomic effects. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bvalbenazine%5D&body=Drug%3A%20valbenazine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_valbenazine/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-23 16:06 UTC</sub>
