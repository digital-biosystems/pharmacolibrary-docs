<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R03A&quot;,&quot;href&quot;:&quot;atc/R03A.md&quot;},{&quot;label&quot;:&quot;olodaterol and tiotropium bromide&quot;}]"></div>

# olodaterol and tiotropium bromide

- **generic name:** olodaterol and tiotropium bromide
- **ATC codes:** `R03AL06`
- **DrugBank:** none · **PubChem:** none
- **groups:** not captured

## About

This inhaled combination of a long-acting beta-agonist and a long-acting anticholinergic is used to treat chronic obstructive pulmonary disease. It is an authorised combination inhaler for obstructive airway disease and is used in routine care for this condition.

<small>⚠️ **Unverified** — written by `glm-5.3-flash` from general knowledge (no Wikidata entry found) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| olodaterol | metabolite | 386.448 | C21H26N2O5 | PubChem | [11504295](https://pubchem.ncbi.nlm.nih.gov/compound/11504295) | Borghardt_2016 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub> | [Borghardt_2016_reference](drugs/drug_olodaterol_and_tiotropium_bromide/OlodaterolAndTiotropiumBromide_Borghardt2016_reference.md) | — | 1-compartment (no model) | 2 | Borghardt JM et al., Model-based evaluation of pulmonary pha…, British journal of clinical… (2016) | [10.1111/bcp.12999](https://doi.org/10.1111/bcp.12999) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 14:26 | 4:41 | 0/1/0 | 0/0/0 | 0/0/0 | 128,362/7,353 | ollama / glm-5.3-flash | 4 | 0/4 | 4/0 | 0 |

## Coverage

- **PubMed hits:** 68 matched, 10 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Borghardt_2016.pdf` | Borghardt JM et al., Model-based evaluation of pulmonary pha…, British journal of clinical… (2016) | popPK | 9 | [10.1111/bcp.12999](https://doi.org/10.1111/bcp.12999) | [27145733](https://pubmed.ncbi.nlm.nih.gov/27145733) | Population PK model of inhaled olodaterol with quantitative absorption parameters (PBIO, absorption half-lives) reported directly in the abstract; note it covers olodaterol only, not tiotropium. |

<sub>queue written 2026-10-07 14:24 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Barker_2017 | irrelevant | 0 | 0 | This is a prescribing/survey study on sputum clearance devices in COPD; tiotropium is only mentioned as prescription volume, with no PK parameters. |
| popPK | Berlinski_2020 | irrelevant | 0 | 0 | A narrative year-in-review with no PK parameters for olodaterol/tiotropium; tiotropium only mentioned as a comparator. |
| popPK | Borghardt_2018 | irrelevant | 2 | 0 | This is a narrative review of pulmonary PK processes; olodaterol is only mentioned as an example, with no numeric PK parameters (CL, V, ka, half-life) reported. |
| popPK | Pleasants_2016 | irrelevant | 0 | 0 | Review/meta-analysis of umeclidinium, a different drug; no quantitative PK parameters for olodaterol/tiotropium. |
| popPK | Rabe_2010 | irrelevant | 0 | 0 | Review of roflumilast, a different drug; tiotropium only mentioned as co-administered comparator, no PK parameters for olodaterol/tiotropium. |
| popPK | Ramadan_2016 | irrelevant | 1 | 0 | This is a narrative review of olodaterol's pharmacology and efficacy with no original quantitative PK parameters reported. |
| popPK | Sims_2011 | irrelevant | 1 | 1 | This is a review of aclidinium bromide; tiotropium is only a comparator with scattered half-life/excretion values, no population-PK parameters for olodaterol/tiotropium combination. |
| popPK | Wang_2020 | irrelevant | 0 | 0 | In vitro study of tiotropium/fluticasone effects on rhinovirus-induced mucin production in airway epithelial cells; no PK parameters for olodaterol/tiotropium reported. |
| popPK | Wang_2022 | irrelevant | 0 | 0 | This is a review of bronchiectasis literature with no PK parameters for olodaterol/tiotropium; tiotropium is only mentioned as a studied treatment. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bolodaterol_and_tiotropium_bromide%5D&body=Drug%3A%20olodaterol_and_tiotropium_bromide%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_olodaterol_and_tiotropium_bromide/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · newest extraction 2026-10-07 14:24 UTC</sub>
