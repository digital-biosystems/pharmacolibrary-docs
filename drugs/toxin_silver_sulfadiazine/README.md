<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Silver sulfadiazine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;SilverSulfadiazine_Dubey2025_reference&quot;,&quot;label&quot;:&quot;Dubey_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_silver_sulfadiazine/SilverSulfadiazine_Dubey2025_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

# Silver sulfadiazine

- **generic name:** Silver sulfadiazine
- **T3DB:** [T3D3068](http://www.t3db.ca/toxins/T3D3068) · **DrugBank:** [DB05245](https://go.drugbank.com/drugs/DB05245) · **PubChem:** [CID 441244](https://pubchem.ncbi.nlm.nih.gov/compound/441244)
- **groups:** approved, investigational, vet_approved

## About

Silver sulfadiazine is only found in individuals that have used or taken this drug. It is a sulfa derivative topical antibacterial used primarily on second- and third-degree burns. [Wikipedia] Studies utilizing radioactive micronized silver sulfadiazine, electron microscopy, and biochemical techniques have revealed that the mechanism of action of silver sulfadiazine on bacteria differs from silver nitrate and sodium sulfadiazine. Silver sulfadiazine acts only on the cell membrane and cell wall to produce its bactericidal effect. …

- **Category:** Drug, Synthetic Toxin
- **Route of exposure:** very limited penetration through the skin. Only when applied to very large area burns is absorption into the body generally an issue.
- **Sources and uses:** Indicated as an adjunct for the prevention and treatment of wound sepsis in patients with second- and third-degree burns.
- **Mechanism of toxicity:** Studies utilizing radioactive micronized silver sulfadiazine, electron microscopy, and biochemical techniques have revealed that the mechanism of action of silver sulfadiazine on bacteria differs from silver nitrate and sodium sulfadiazine. Silver sulfadiazine acts only on the cell membrane and cell wall to produce its bactericidal effect. …
- **Health effects:** Health effects include areas of dead skin, red and raised rash on the body, and argyria (Skin discoloration). [Wikipedia]
- **Acute toxicity:** LD50: 10001 mg/kg (oral, rat)

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D3068">T3DB T3D3068</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 22199-08-2 · <a href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:9142">ChEBI 9142</a></small></p>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| silver_sulfadiazine | metabolite | 357.138 | C10H9AgN4O2S | PubChem | [441244](https://pubchem.ncbi.nlm.nih.gov/compound/441244) | Harrison_1979 |

## Start here

> **Dubey_2025_reference** — <span class="pk-badge pk-badge--neutral">Not simulated</span> review reference. [Run it in the simulator](drugs/toxin_silver_sulfadiazine/SilverSulfadiazine_Dubey2025_reference.md?tab=Simulation) · [record](drugs/toxin_silver_sulfadiazine/SilverSulfadiazine_Dubey2025_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Not simulated" data-sim="yes"></span><span class="pk-badge pk-badge--neutral">Not simulated</span> | [Dubey_2025_reference](drugs/toxin_silver_sulfadiazine/SilverSulfadiazine_Dubey2025_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Dubey A et al., Repurposing Metal-Based Therapeutics fo…, Bioinorganic chemistry and… (2025) | [10.1155/bca/6680612](https://doi.org/10.1155/bca/6680612) |
| <span class="pk-rf" hidden data-species="human + animal" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span><br><sub>blocking: no kinetic quantity — no half-life, rate constant, volume or clearance (exposur…</sub> | [Harrison_1979_reference](drugs/toxin_silver_sulfadiazine/SilverSulfadiazine_Harrison1979_reference.md) | — | 1-compartment (no model) | 1 | Harrison HN, Pharmacology of sulfadiazine silver. It…, Archives of surgery (Chicag… (1979) | [10.1001/archsurg.1979.01370270051008](https://doi.org/10.1001/archsurg.1979.01370270051008) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=silver_sulfadiazine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | skin | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: DNA (binder).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-12 10:16 | 11:25 | 1/1/0 | 0/0/0 | 0/0/0 | 392,909/36,320 | ollama / glm-5.3-flash | 9 | 0/6 | 9/0 | 0 |

## Coverage

- **PubMed hits:** 35 matched, 34 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 2  ·  extracted 1  ·  needs review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Harrison_1979.pdf` | Harrison HN, Pharmacology of sulfadiazine silver. It…, Archives of surgery (Chicag… (1979) | popPK | 8 | [10.1001/archsurg.1979.01370270051008](https://doi.org/10.1001/archsurg.1979.01370270051008) | [435032](https://pubmed.ncbi.nlm.nih.gov/435032) | Reports quantitative attachment/absorption percentages and clearance time course of silver sulfadiazine in human and rat burn wounds, with numbers given in the abstract. |

<sub>queue written 2026-11-12 10:11 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Alobaid_2025 | irrelevant | 0 | 0 | This is an in vitro study of a novel silver-zinc zeolite wound dressing; silver sulfadiazine appears only as a historical comparator/mention, with no kinetic parameters (half-life, clearance, partition coefficients, etc.) for SSD itself. No toxicokinetic data for silver sulfadiazine are present. |
| popPK | Baars_1980 | irrelevant | 0 | 0 | In vitro antibacterial efficacy study with no kinetic parameters for silver sulfadiazine whatsoever. |
| popPK | Bennion_1984 | irrelevant | 0 | 0 | Silver sulfadiazine appears only as a prosthesis impregnation in an infection-resistance study with no toxicokinetic parameters (no half-life, clearance, partition coefficients, or disposition data). |
| popPK | Blanchard_2016 | irrelevant | 0 | 0 | This is an antimicrobial efficacy study of SSD ointment combinations; no toxicokinetic parameters (half-life, clearance, partition coefficients, etc.) for silver sulfadiazine are reported and no numeric PK values appear in the evidence. |
| popPK | Cambier_2006 | irrelevant | 0 | 0 | Silver sulfadiazine appears only as a topical wound-care dressing after laser treatment, with no kinetic parameters of any kind. |
| popPK | Dryden_2004 | irrelevant | 0 | 0 | Silver sulfadiazine appears only as a comparator in a clinical efficacy outcome trial; no kinetic parameters are reported. |
| popPK | Dubey_2025 | irrelevant | 2 | 5 | Purely in-silico ADMET/docking study; silver sulfadiazine's half-life (1.2 h) and bioavailability values are computational predictions, not measured toxicokinetic data in any species. |
| popPK | Hassaninejad_2023 | irrelevant | 0 | 0 | Silver sulfadiazine appears only as a comparator ointment; no kinetic parameters for it are reported. |
| popPK | Huang_2007 | irrelevant | 0 | 0 | This is a wound-healing efficacy comparison with no toxicokinetic parameters for silver sulfadiazine; it serves only as clinical comparator. |
| popPK | Huang_2026 | irrelevant | 0 | 0 | A wound-dressing hydrogel study with antibacterial/wound-healing outcomes and no toxicokinetic parameters for silver sulfadiazine. |
| PGx | Jain_2009 | not_relevant | 0 | 0 | No gene variant/genotype/phenotype effects on silver sulfadiazine PK/PD parameters are reported; paper focuses on silver nanoparticles formulation development. |
| popPK | Liu_2016 | irrelevant | 0 | 0 | Silver sulfadiazine is only mentioned as a routine dressing treatment, with no kinetic parameters reported. |
| popPK | Long_2001 | irrelevant | 0 | 0 | Silver sulfadiazine is only a vehicle for topical morphine; no kinetic parameters of silver sulfadiazine reported. |
| popPK | Mathangi_2013 | irrelevant | 0 | 0 | SSVD appears only as a comparator dressings/vehicle in a clinical burn-treatment study; no kinetic parameters reported. |
| popPK | Roman_2020 | irrelevant | 2 | 1 | Silver sulfadiazine is used only as a comparator dressing; the paper gives qualitative/semi-quantitative silver imaging in wounds with no toxicokinetic parameters (no half-life, rate constants, or clearance values). |
| popPK | Sawchuk_1980 | irrelevant | 2 | 0 | This is a qualitative review of drug kinetics in burn patients with no numeric toxicokinetic parameters for silver sulfadiazine itself. |
| popPK | Shrestha_2024 | irrelevant | 1 | 0 | This is a review of silver wound dressings with no toxicokinetic parameters for silver sulfadiazine reported in the evidence provided. |
| popPK | Turner_2024 | irrelevant | 0 | 0 | This is a biomaterials/biofilm study where silver sulfadiazine is only a coating additive against S. aureus; no toxicokinetic parameters of any kind are reported, and species is in vitro. |
| popPK | Wei_2023 | irrelevant | 1 | 0 | SSD is only an active comparator in a PL-5 efficacy trial; the sole PK data (undetectable PL-5 in blood) concern PL-5, with no kinetic parameters for silver sulfadiazine. |
| popPK | Wei_2024 | irrelevant | 0 | 0 | Silver sulfadiazine is only a comparator arm in a clinical efficacy trial with no kinetic parameters (no half-life, clearance, concentrations, or model). |
| popPK | Xie_2024 | irrelevant | 0 | 0 | Clinical efficacy trial comparing SSD vs collagenase with no pharmacokinetic parameters reported. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bsilver_sulfadiazine%5D&body=Drug%3A%20silver_sulfadiazine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_silver_sulfadiazine/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-12 10:11 UTC</sub>
