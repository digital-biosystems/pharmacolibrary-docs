<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Dimethylethanolamine&quot;}]"></div>

# Dimethylethanolamine

- **generic name:** Dimethylethanolamine
- **T3DB:** [T3D4841](http://www.t3db.ca/toxins/T3D4841) · **PubChem:** [CID 7902](https://pubchem.ncbi.nlm.nih.gov/compound/7902)
- **groups:** experimental

## About

Dimethylethanolamine is used as a food additive [EAFUS] ("EAFUS: Everything Added to Food in the United States. [http://www.eafus.com/]"). Dimethylethanolamine belongs to the family of Alkylamines. These are organic compounds containing an alkylamine group.

- **Category:** Household Toxin, Food Toxin, Synthetic Toxin

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D4841">T3DB T3D4841</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 108-01-0 · <a href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:271436">ChEBI 271436</a></small></p>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| dimethylethanolamine | parent | — (mass units only) | — | — | [7902](https://pubchem.ncbi.nlm.nih.gov/compound/7902) | — |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="rat" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Magyar_2002_reference](drugs/toxin_dimethylethanolamine/Dimethylethanolamine_Magyar2002_reference.md) | — | 1-compartment (no model) | 0 | Magyar K et al., Studies of the side chain cleavage of d…, European journal of pharmac… (2002) | [10.1016/s0928-0987(02)00003-9](https://doi.org/10.1016/s0928-0987(02)00003-9) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-18 03:58 | 4:07 | 0/1/0 | 0/0/0 | 0/0/0 | 126,560/6,447 | einfracz / qwen3.8-flash-next | 3 | 1/2 | 3/0 | 0 |

## Coverage

- **PubMed hits:** 15 matched, 15 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Magyar_2002.pdf` | Magyar K et al., Studies of the side chain cleavage of d…, European journal of pharmac… (2002) | popPK | 9 | [10.1016/s0928-0987(02)00003-9](https://doi.org/10.1016/s0928-0987(02)00003-9) | [11849919](https://pubmed.ncbi.nlm.nih.gov/11849919) | The paper reports the terminal half-life (99 h) of the dimethylethanolamine side chain metabolite in rats, along with qualitative data on AUC and MRT. |
| `Dormard_1975.pdf` | Dormard Y et al., Pharmacokinetic study of maleate acid o…, Arzneimittel-Forschung (1975) | popPK | 7 |  | [1173032](https://pubmed.ncbi.nlm.nih.gov/1173032) | The paper reports quantitative excretion percentages for DMAE-14C in rats, which constitutes kinetic data, but lacks full numeric tables for half-lives or other parameters, with much detail likely in non-provided figures/supplements. |

<sub>queue written 2026-11-18 03:57 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ballantyne_1996 | irrelevant | 0 | 0 | The paper reports acute toxicity LD50/LC50 values and irritancy endpoints, which are hazard classifications rather than quantitative toxicokinetic parameters such as half-lives or clearance rates. |
| popPK | Broad_1976 | irrelevant | 0 | 0 | Dimethylethanolamine is mentioned only as a negative control substitute for choline in a growth medium, with no toxicokinetic parameters reported. |
| popPK | Domańska_2005 | irrelevant | 0 | 0 | The paper focuses on physicochemical properties and synthesis of quaternary ammonium salts using dimethylethanolamine as a precursor, reporting no toxicokinetic parameters or biological disposition data. |
| popPK | Domańska_2008 | irrelevant | 0 | 0 | The paper reports thermophysical properties of an ionic liquid synthesized using dimethylethanolamine as a reagent, with no toxicokinetic parameters. |
| popPK | Dormard_1975 | relevant | 7 | 2 | The paper reports quantitative excretion percentages for DMAE-14C in rats, which constitutes kinetic data, but lacks full numeric tables for half-lives or other parameters, with much detail likely in non-provided figures/supplements. |
| popPK | Fernández-Ceballos_2026 | irrelevant | 0 | 0 | The paper focuses on the synthesis and antiproliferative activity of naphthalene sulfonamide-phospholipid hybrids, with dimethylethanolamine appearing only as a chemical reagent in synthesis, not as a subject of toxicokinetic study. |
| popPK | Hanna_1984 | irrelevant | 0 | 0 | The paper describes an analytical assay method for diphenhydramine hydrochloride in pharmaceutical dosage forms, not a toxicokinetic study of dimethylethanolamine or its metabolites. |
| popPK | Khan_2021 | irrelevant | 0 | 0 | The paper reports on the synthesis of a dimethylethanolamine-grafted membrane for dye adsorption and contains no toxicokinetic data for dimethylethanolamine in humans or animals. |
| popPK | Klonne_1987 | irrelevant | 0 | 0 | The paper reports inhalation toxicity and lethality endpoints (LC50, NOEL) but contains no quantitative toxicokinetic parameters such as half-lives, clearance rates, or partition coefficients. |
| popPK | Kukuk_2011 | irrelevant | 0 | 0 | The paper studies PET tracers (choline, FDG, FLT) in prostate cancer mice; dimethylethanolamine is only mentioned in the conclusion as a competing endogenous precursor with no kinetic data reported. |
| popPK | Leung_1996 | irrelevant | 0 | 0 | The paper reports only developmental toxicity endpoints (weights, malformations) and exposure levels, with no quantitative toxicokinetic parameters measured. |
| popPK | Shekh-Ahmad_2012 | irrelevant | 2 | 0 | The paper focuses on anticonvulsant potency and notes that DEVA is hydrolyzed to VPA, with only VPA levels monitored, providing no quantitative kinetic parameters for dimethylethanolamine itself. |
| popPK | Slaets_2010 | irrelevant | 1 | 1 | DMAE is analyzed only as an analytical impurity/contaminant interfering with a radiotracer's uptake, not as a subject for kinetic parameter extraction. |
| popPK | Uppal_2011 | irrelevant | 0 | 0 | Dimethylethanolamine is merely a starting reagent for synthesizing a choline-based imaging agent, with no toxicokinetic parameters reported for it. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdimethylethanolamine%5D&body=Drug%3A%20dimethylethanolamine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_dimethylethanolamine/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-18 03:58 UTC</sub>
