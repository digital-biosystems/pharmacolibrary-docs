<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01B&quot;,&quot;href&quot;:&quot;atc/P01B.md&quot;},{&quot;label&quot;:&quot;halofantrine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Halofantrine_Klein2012_reference&quot;,&quot;label&quot;:&quot;Klein_2012_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_halofantrine/Halofantrine_Klein2012_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# halofantrine

- **generic name:** halofantrine
- **ATC codes:** `P01BX01`
- **DrugBank:** [DB01218](https://go.drugbank.com/drugs/DB01218) · **PubChem:** [CID 37393](https://pubchem.ncbi.nlm.nih.gov/compound/37393)
- **molar mass:** 500.424 g/mol (C26H30Cl2F3NO) — DrugBank
- **groups:** approved, withdrawn

## About

Halofantrine is an antimalarial drug used to treat malaria caused by Plasmodium falciparum and Plasmodium vivax. It is no longer in general use, having been withdrawn, largely because of safety concerns about heart rhythm disturbances.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q947595](https://www.wikidata.org/wiki/Q947595) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| halofantrine | parent | 500.424 | C26H30Cl2F3NO | DrugBank | [37393](https://pubchem.ncbi.nlm.nih.gov/compound/37393) | Klein_2012 |

## Start here

> **Klein_2012_reference** — <span class="pk-badge pk-badge--orange">Needs review</span> healthy volunteers and patients with symptomatic falciparum malaria, n = 194. [Run it in the simulator](drugs/drug_halofantrine/Halofantrine_Klein2012_reference.md?tab=Simulation) · [record](drugs/drug_halofantrine/Halofantrine_Klein2012_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL/F | 102.2 | L/h | 2453 l/day | healthy volunteers and patients with symptomatic falciparum malaria | 194 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Klein_2012_reference](drugs/drug_halofantrine/Halofantrine_Klein2012_reference.md) |
| V | V1 | 2386 | L | 2386 l | healthy volunteers and patients with symptomatic falciparum malaria | 194 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Klein_2012_reference](drugs/drug_halofantrine/Halofantrine_Klein2012_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="yes"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: unreported model parameter default(s): ka</sub> | [Klein_2012_reference](drugs/drug_halofantrine/Halofantrine_Klein2012_reference.md) | ▶ model + simulator | 2-compartment, oral | 4 | Klein K et al., Population pharmacokinetics of halofant…, The Journal of pharmacy and… (2012) | [10.1111/j.2042-7158.2012.01554.x](https://doi.org/10.1111/j.2042-7158.2012.01554.x) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Krishna_1993_reference](drugs/drug_halofantrine/Halofantrine_Krishna1993_reference.md) | — | 1-compartment (no model) | 0 | Krishna S et al., Pharmacokinetics, efficacy and toxicity…, British journal of clinical… (1993) | [10.1111/j.1365-2125.1993.tb00419.x](https://doi.org/10.1111/j.1365-2125.1993.tb00419.x) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (pig), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">pig</span> | [Kinoshita_2010_QaTc](drugs/drug_halofantrine/pd_Kinoshita_2010_QaTc.md) | change in heart rate-corrected QaTc interval ← halofantrine · direct Emax (saturable) effect | — | Kinoshita A et al., Effects of anti-malarial drugs on the e…, Malaria journal (2010) | [10.1186/1475-2875-9-318](https://doi.org/10.1186/1475-2875-9-318) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=halofantrine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | brain | `CYP2D6` inhibitor | DrugBank actor |
| metabolism | kidney | `CYP3A5` substrate | DrugBank actor |
| metabolism | liver | `CYP2C8` substrate, `CYP2D6` inhibitor, `CYP3A4` substrate, `CYP3A5` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate, `CYP3A5` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: CALM1 (modulator), CALM2 (modulator), CALM3 (modulator), KCNH2 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 07:01 | 1:19 | 1/1/0 | 1/0/0 | 0/0/0 | 52,920/3,984 | ollama / glm-5.3-flash | 2 | 1/1 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 4 matched, 4 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Klein_2012.pdf` | Klein K et al., Population pharmacokinetics of halofant…, The Journal of pharmacy and… (2012) | popPK | 10 | [10.1111/j.2042-7158.2012.01554.x](https://doi.org/10.1111/j.2042-7158.2012.01554.x) | [23058047](https://pubmed.ncbi.nlm.nih.gov/23058047) | Population PK (two-compartment, NONMEM) of halofantrine with full numeric CL, V1, CLD, V2 estimates reported directly in the abstract. |

<sub>queue written 2026-10-07 07:00 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Kinoshita_2010 | irrelevant | 0 | 0 | In-vitro isolated guinea pig heart pharmacodynamics (QT prolongation EC50) study, not a PK study reporting halofantrine disposition parameters. |
| popPK | Philipps_1998 | irrelevant | 0 | 0 | In vitro parasite susceptibility study reporting EC50 values, not pharmacokinetic disposition parameters for halofantrine. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bhalofantrine%5D&body=Drug%3A%20halofantrine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_halofantrine/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · newest extraction 2026-10-07 07:00 UTC</sub>
