<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;antithymocyte immunoglobulin (rabbit)&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;AntithymocyteImmunoglobulinRabbit_Admiraal2015v2_reference&quot;,&quot;label&quot;:&quot;Admiraal_2015_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_antithymocyte_immunoglobulin_rabbit/AntithymocyteImmunoglobulinRabbit_Admiraal2015v2_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# antithymocyte immunoglobulin (rabbit)

- **generic name:** antithymocyte immunoglobulin (rabbit)
- **ATC codes:** `L04AA04`
- **DrugBank:** [DB00098](https://go.drugbank.com/drugs/DB00098) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Rabbit anti-thymocyte globulin is an immunosuppressant antibody medicine used to suppress T cells, for example in transplant settings. It is an approved medicine, though it carries a boxed warning and is also being studied for further uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q20801777](https://www.wikidata.org/wiki/Q20801777) and the WHO ATC classification; not checked by a person.</small>

## Start here

> **Admiraal_2015_2_reference** — <span class="pk-badge pk-badge--orange">Needs review</span> children receiving allogeneic hematopoietic cell transplantation. [Run it in the simulator](drugs/drug_antithymocyte_immunoglobulin_rabbit/AntithymocyteImmunoglobulinRabbit_Admiraal2015v2_reference.md?tab=Simulation) · [record](drugs/drug_antithymocyte_immunoglobulin_rabbit/AntithymocyteImmunoglobulinRabbit_Admiraal2015v2_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | species | status | record |
|---|---|---|---|---|---|---|---|---|
| CL | CL | 2.12 | L/h | 2.12 L/h | children receiving allogeneic hematopoietic cell transplantation | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Admiraal_2015_2_reference](drugs/drug_antithymocyte_immunoglobulin_rabbit/AntithymocyteImmunoglobulinRabbit_Admiraal2015v2_reference.md) |
| V | V | 7.84 | L | 7.84 L | children receiving allogeneic hematopoietic cell transplantation | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Admiraal_2015_2_reference](drugs/drug_antithymocyte_immunoglobulin_rabbit/AntithymocyteImmunoglobulinRabbit_Admiraal2015v2_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="paediatric" data-status="Needs review" data-sim="yes"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: T1_tmax</sub> | [Admiraal_2015_2_reference](drugs/drug_antithymocyte_immunoglobulin_rabbit/AntithymocyteImmunoglobulinRabbit_Admiraal2015v2_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Admiraal R et al., Population pharmacokinetic modeling of…, Clinical pharmacokinetics (2015) | [10.1007/s40262-014-0214-6](https://doi.org/10.1007/s40262-014-0214-6) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 23:39 | 0:45 | 0/0/1 | 0/0/0 | 0/0/0 | 43,472/2,891 | einfracz / qwen3.8-27b | 1 | 1/0 | 0/1 | 0 |

## Coverage

- **PubMed hits:** 4 matched, 4 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Admiraal_2015 | irrelevant | 3 | 2 | The study uses a PK model to calculate exposure (AUC) for pharmacodynamic/outcome analysis (CD4+ reconstitution), but it does not report the underlying PK parameter values (CL, V, ka, etc.) for the drug itself, only the derived exposure metrics and their statistical association with clinical outcomes. |
| popPK | Admiraal_2017 | irrelevant | 4 | 0 | This is a pharmacodynamic/pharmacokinetic exposure-outcome analysis that references a population PK model but does not report the specific quantitative PK parameters (CL, V, Q) for antithymocyte immunoglobulin rabbit within the provided text. |
| popPK | Breitinger_2009 | irrelevant | 0 | 0 | The paper investigates the immunological composition (antibody specificity against GPI-AP) of ATG preparations using in vitro binding assays, reporting no pharmacokinetic disposition parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-06 23:39 UTC</sub>
