<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01F&quot;,&quot;href&quot;:&quot;atc/J01F.md&quot;},{&quot;label&quot;:&quot;miocamycin&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Miocamycin_Litterio2000_reference&quot;,&quot;label&quot;:&quot;Litterio_2000_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_miocamycin/Miocamycin_Litterio2000_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

# miocamycin

- **generic name:** miocamycin
- **ATC codes:** `J01FA11`
- **DrugBank:** [DB13287](https://go.drugbank.com/drugs/DB13287) · **PubChem:** none
- **groups:** approved

## About

Miocamycin (midecamycin acetate) is a macrolide antibiotic used to treat bacterial infections. It is an approved macrolide antibacterial, but it does not appear to be authorised in the European Union and its use today is limited to certain countries.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3858659](https://www.wikidata.org/wiki/Q3858659) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| miocamycin | parent | 898.053 | C45H71NO17 | PubChem | [5282188](https://pubchem.ncbi.nlm.nih.gov/compound/5282188) | Litterio_2000 |

## Start here

> **Litterio_2000_reference** — <span class="pk-badge pk-badge--neutral">Not simulated</span> Holando Argentino cattle, n = 5. [Run it in the simulator](drugs/drug_miocamycin/Miocamycin_Litterio2000_reference.md?tab=Simulation) · [record](drugs/drug_miocamycin/Miocamycin_Litterio2000_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="cattle" data-age="adult" data-status="Not simulated" data-sim="yes"></span><span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (cattle), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">cattle</span> | [Litterio_2000_reference](drugs/drug_miocamycin/Miocamycin_Litterio2000_reference.md) | ▶ model + simulator | 1-compartment, IV | 4 | Litterio NJ et al., Pharmacokinetics of miocamycin followin…, Journal of veterinary medic… (2000) | [10.1046/j.1439-0442.2000.00260.x](https://doi.org/10.1046/j.1439-0442.2000.00260.x) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by qwen3.8-27b, p(non-human) 1.00).">rat</span> | [Yokota_1984_5_MOM_toxicity](drugs/drug_miocamycin/pd_Yokota_1984_5_MOM_toxicity.md) | Toxicity ← miocamycin · model not identified | — | Yokota M et al., Toxicological studies on a new macrolid…, The Japanese journal of ant… (1984) | — |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=miocamycin).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP3A4` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor | DrugBank actor |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-13 11:22 | 2:27 | 1/0/0 | 1/0/0 | 0/0/0 | 19,638/35,454 | einfracz / qwen3.8-27b | 1 | 1/0 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 24 matched, 23 returned
- **screened:** 2  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Litterio_2000.pdf` | Litterio NJ et al., Pharmacokinetics of miocamycin followin…, Journal of veterinary medic… (2000) | popPK | 10 | [10.1046/j.1439-0442.2000.00260.x](https://doi.org/10.1046/j.1439-0442.2000.00260.x) | [10841461](https://pubmed.ncbi.nlm.nih.gov/10841461) | The study reports specific quantitative pharmacokinetic parameters (t1/2, Vss, CL) for miocamycin in cattle. |

<sub>queue written 2026-10-13 11:20 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Kasahara_2000 | not_relevant | 0 | 0 | The study characterizes the metabolic pathways (CYP3A4 involvement) of miocamycin but does not report changes in PK/PD parameters based on specific gene variants, genotypes, or phenotypes. |
| PGx | Upton_1991 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions and mentions miocamycin only as a medication that does NOT influence theophylline's pharmacokinetics, with no pharmacogenomic data. |
| PGx | von_1995 | not_relevant | 0 | 0 | The text discusses pharmacokinetic drug interactions of miocamycin via CYP3A4 inhibition but does not report any pharmacogenomic effects (gene variants) on its PK or PD parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmiocamycin%5D&body=Drug%3A%20miocamycin%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_miocamycin/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-10-13 11:22 UTC</sub>
