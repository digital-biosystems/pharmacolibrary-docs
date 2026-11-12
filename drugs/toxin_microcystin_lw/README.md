<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Bacterial toxins&quot;,&quot;href&quot;:&quot;toxins/BACT.md&quot;},{&quot;label&quot;:&quot;Microcystin-LW&quot;}]"></div>

# Microcystin-LW

- **generic name:** Microcystin-LW
- **T3DB:** [T3D3614](http://www.t3db.ca/toxins/T3D3614) · **PubChem:** [CID 16760564](https://pubchem.ncbi.nlm.nih.gov/compound/16760564)

## About

Microcystin-LW is a hydrophobic microcystin. Microcystins (also known as cyanoginosins) are a class of toxins produced by certain freshwater cyanobacteria. Microcystins are chemically stable over a wide range of temperature and pH, possibly as a result of their cyclic structure. …

- **Category:** Bacterial Toxin, Natural Toxin
- **Route of exposure:** oral
- **Sources and uses:** Microcystins are produced by the cyanobacterial cells. When the algae dies, the cell walls burst, releasing the toxin into the water.
- **Mechanism of toxicity:** The site of action of microcystins is the hepatocyte, the commonest cell type in the liver. They act by disrupting the cytoskeleton, the adaptable protein framework that constantly shapes and reshapes the cell as it responds to the environment. …
- **Health effects:** Liver damage. While microcystin-LR does not cause cancer, microcystin may stimulate the growth of cancer cells.
- **Carcinogenicity:** Microcystis extracts: Group 3, not classifiable as to their carcinogenicity to humans.
- **Minimal risk levels (ATSDR):** WHO developed a drinking water concentration limit of 1.5 μg/L for microcystin LR. They assumed that a 60 kg (132 lbs.) person drinks two liters of water each day and that 80% of the two liters is from a contaminated source.
- **Acute toxicity:** LD50 for rats and mice are in the range 36-122 micrograms/kg with the inhalation toxicity 180 mg/min/m3 or 43 micrograms/kg.

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D3614">T3DB T3D3614</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 157622-02-1</small></p>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| covalently bound microcystin-PP1/PP2A complex | metabolite | — (mass units only) | — | — | — | — |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="other animal" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">other animal</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Williams_1997_2_reference](drugs/toxin_microcystin_lw/MicrocystinLw_Williams1997v2_reference.md) | — | 1-compartment (no model) | 0 | Williams DE et al., Bioaccumulation and clearance of microc…, Toxicon : official journal… (1997) | [10.1016/s0041-0101(97)00039-1](https://doi.org/10.1016/s0041-0101(97)00039-1) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-11 10:47 | 4:57 | 0/1/0 | 0/0/0 | 0/0/0 | 65,343/9,935 | ollama / glm-5.3-flash | 2 | 1/1 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 23 matched, 23 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 1  ·  extracted 0  ·  needs review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Clarke_2019.pdf` | Clarke JD et al., Nonalcoholic fatty liver disease alters…, Toxicon : official journal… (2019) | popPK | 10 | [10.1016/j.toxicon.2019.03.002](https://doi.org/10.1016/j.toxicon.2019.03.002) | [30849452](https://pubmed.ncbi.nlm.nih.gov/30849452) | Rat toxicokinetic study with AUC and biliary clearance parameters for MCLR, but the explicit numeric values appear in text/tables not fully provided in the evidence shown. |
| `Williams_1997_2.pdf` | Williams DE et al., Bioaccumulation and clearance of microc…, Toxicon : official journal… (1997) | popPK | 8 | [10.1016/s0041-0101(97)00039-1](https://doi.org/10.1016/s0041-0101(97)00039-1) | [9428108](https://pubmed.ncbi.nlm.nih.gov/9428108) | Reports quantitative uptake and clearance time courses of microcystins (incl. microcystin-LR from Microcystis aeruginosa) in mussel tissues with numeric values, though microcystin-LW is not specifically identified. |
| `Henri_2014.pdf` | Henri J et al., Low in vitro permeability of the cyanot…, Toxicon : official journal… (2014) | popPK | 7 | [10.1016/j.toxicon.2014.07.023](https://doi.org/10.1016/j.toxicon.2014.07.023) | [25110175](https://pubmed.ncbi.nlm.nih.gov/25110175) | Mathematical transport modelling of MC-LR across Caco-2 yields kinetic parameters (permeability, clearance), but full numeric coefficients likely reside in figures/tables not fully quoted in the abstract. |

<sub>queue written 2026-11-11 10:47 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Breidenbach_2022 | irrelevant | 0 | 0 | An in vitro airway epithelium exposure/functional study with deposition doses and transcriptomic/protein endpoints only — no half-life, clearance, rate constant, partition coefficient or other toxicokinetic parameter for microcystin-LR. |
| popPK | Choudhuri_2020 | irrelevant | 0 | 0 | Microcystin-LR is only mentioned qualitatively as an OATP substrate; no kinetic parameters of any substance, and it is microcystin-LR not LW. |
| popPK | Clarke_2019 | relevant | 10 | 4 | Rat toxicokinetic study with AUC and biliary clearance parameters for MCLR, but the explicit numeric values appear in text/tables not fully provided in the evidence shown. |
| popPK | Dionisio_2005 | irrelevant | 0 | 0 | Clearance rates refer to grazing/filtering of seston by mussels and Daphnia, not kinetic parameters of microcystin-lw itself; microcystin is only a toxin content measurement. |
| popPK | Hu_2016 | irrelevant | 1 | 3 | Microcystin tissue contents are mentioned but no kinetic parameters (half-life, rate constants, partitioning) are reported numerically in the evidence. |
| popPK | Ikema_2015 | irrelevant | 0 | 0 | The paper's subject is okadaic acid, not microcystin_lw; microcystin-LR appears only as an uptake probe substrate for OATP transporters, with no kinetic parameters for microcystin_lw. |
| popPK | Ito_2001 | irrelevant | 3 | 4 | Data are for microcystin-LR, a different congener from microcystin-LW; only rough descriptive time-course values (60 min lag, ~2 weeks clearance) are given rather than formal kinetic parameters. |
| popPK | Legrand_2019 | irrelevant | 0 | 0 | This is a paleolimnological study of cyanobacterial blooms in lake sediment with no toxicokinetic parameters for microcystin-LW; microcystin appears only as a biosynthesis gene marker (mcyB). |
| popPK | Lei_2008 | irrelevant | 2 | 2 | Quantitative tissue distribution and depuration data are present, but they concern MC-LR and MC-RR; microcystin-LW is never reported as a specific subject in the measured values. |
| popPK | Lürling_2003 | irrelevant | 0 | 0 | The paper is a Daphnia feeding/growth (life-history) study with microcystin-LR, not microcystin-LW, and reports no toxicokinetic parameters such as half-lives, rate constants, or partition coefficients. |
| popPK | Malandrucco_2026 | irrelevant | 2 | 3 | The substance studied is microcystin-LR, not microcystin-LW, and the underlying Km/Vmax/cl values are not given numerically in the evidence (only summary ratios). |
| popPK | McKindles_2019 | irrelevant | 0 | 0 | Environmental monitoring study of cyanobacteria/toxin concentrations in Lake Winnipeg water; no toxicokinetic parameters (half-lives, rate constants, clearance) for microcystin-LR in any organism are reported. |
| popPK | Pires_2004 | irrelevant | 3 | 6 | The kinetic uptake/depuration data are for microcystin-LR, a different congener than microcystin-LW, though numeric tissue concentrations (µg g DW⁻¹) over time are reported in the text. |
| popPK | Straquadine_2022 | irrelevant | 3 | 1 | Uptake/accumulation study of total microcystins in bivalves; microcystin-LR not specifically the subject, no kinetic rate constants or half-lives quantified, and tissue concentrations are exposure measurements rather than TK parameters. |
| popPK | Williams_1995 | irrelevant | 1 | 1 | The study reports quantitative tissue distribution and clearance, but for tritiated dihydromicrocystin-LR (a microcystin-LR derivative), not microcystin-LW as the subject substance; the numeric retention/clearance values are present in the abstract but apply to the wrong congener. |
| popPK | Williams_1997 | irrelevant | 0 | 0 | The paper concerns microcystin-LR, not microcystin-LW, so kinetic parameters (if any) belong to a different substance, and no numeric values appear in the evidence anyway. |
| popPK | Woźny_2026 | irrelevant | 0 | 0 | no_text gate: only 294 chars of text extracted (&lt; 400) |
| popPK | Woźny_2026_2 | irrelevant | 1 | 0 | Transcriptional and histopathological outcome study of MC-LR (not MC-LW) in fish with no kinetic parameters, compartment model, or numeric toxicokinetic values anywhere in the evidence. |
| popPK | Yang_2025 | irrelevant | 0 | 0 | This is a toxic-effect study of Microcystis exposure on benthic animals with no kinetic parameters (half-lives, rate constants, partition coefficients, clearance, etc.) for microcystin. |
| popPK | da_2017 | irrelevant | 0 | 0 | Effects study on cladoceran fitness/antioxidant defenses with no toxicokinetic parameters for microcystin-LW. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmicrocystin_lw%5D&body=Drug%3A%20microcystin_lw%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_microcystin_lw/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-11 10:47 UTC</sub>
