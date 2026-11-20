<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Industrial and workplace toxins&quot;,&quot;href&quot;:&quot;toxins/IND.md&quot;},{&quot;label&quot;:&quot;Tris(2-chloroethyl)phosphate&quot;}]"></div>

# Tris(2-chloroethyl)phosphate

- **generic name:** Tris(2-chloroethyl)phosphate
- **T3DB:** [T3D4950](http://www.t3db.ca/toxins/T3D4950) · **PubChem:** none

## About

Tris(2-chloroethyl) phosphate (TCEP) is a chemical compound used as a flame retardant, plasticizer, and viscosity regulator in various types of polymers including polyurethanes, polyester resins, and polyacrylates. It was included in January 2011 in the European Chemicals Agency (ECHA) list of Substances of Very High Concern (SVHC) due to its being toxic for reproduction. Substances in the list of SVHCs are those for which ECHA is considering imposing a requirement for authorization for some or all uses.

- **Category:** Industrial/Workplace Toxin, Synthetic Toxin
- **Sources and uses:** Tris(2-chloroethyl) phosphate is used as a flame retardant, plasticizer, and viscosity regulator in various types of polymers including polyurethanes, polyester resins, and polyacrylates.
- **Carcinogenicity:** IARC group 3, not classifiable as to its carcinogenicity to humans.

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D4950">T3DB T3D4950</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 115-96-8</small></p>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| bis(1,3-dichloro-2-propyl) phosphate | metabolite | — (mass units only) | — | — | — | — |
| bis(1-chloropropyl) phosphate | metabolite | — (mass units only) | — | — | — | — |
| bis(2-chloroethyl) hydrogen phosphate | metabolite | — (mass units only) | — | — | — | — |
| tris2_chloroethylphosphate (Tris(2-chloroethyl)phosphate) | metabolite | 285.482 | C6H12Cl3O4P | PubChem | [8295](https://pubchem.ncbi.nlm.nih.gov/compound/8295) | Liu_2022, Wang_2020_2 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="rat" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Deepika_2023_reference](drugs/toxin_tris2_chloroethylphosphate/Tris2ChloroethylPhosphate_Deepika2023_reference.md) | — | nonlinear / manual (no model) | 0 | Deepika D et al., Development of a rat physiologically ba…, Toxicology letters (2023) | [10.1016/j.toxlet.2023.06.006](https://doi.org/10.1016/j.toxlet.2023.06.006) |
| <span class="pk-rf" hidden data-species="other animal" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">other animal</span><br><sub>blocking: no kinetic quantity — no half-life, rate constant, volume or clearance (exposur…</sub> | [Liu_2022_reference](drugs/toxin_tris2_chloroethylphosphate/Tris2ChloroethylPhosphate_Liu2022_reference.md) | — | 1-compartment (no model) | 1 | Liu W et al., Waterborne and Dietary Bioaccumulation…, International journal of en… (2022) | [10.3390/ijerph19159382](https://doi.org/10.3390/ijerph19159382) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: no kinetic quantity — no half-life, rate constant, volume or clearance (exposur…</sub> | [Wang_2020_2_reference](drugs/toxin_tris2_chloroethylphosphate/Tris2ChloroethylPhosphate_Wang2020v2_reference.md) | — | 1-compartment (no model) | 1 | Wang X et al., Estimating renal and hepatic clearance…, Environment international (2020) | [10.1016/j.envint.2019.105321](https://doi.org/10.1016/j.envint.2019.105321) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-19 17:38 | 14:00 | 0/3/0 | 0/0/0 | 0/0/0 | 244,630/11,502 | einfracz / qwen3.8-flash-next | 10 | 2/5 | 10/0 | 0 |

## Coverage

- **PubMed hits:** 62 matched, 61 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 3  ·  extracted 0  ·  needs review 0  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Van_2013.pdf` | Van den Eede N et al., First insights in the metabolism of pho…, Toxicology letters (2013) | popPK | 9 | [10.1016/j.toxlet.2013.08.012](https://doi.org/10.1016/j.toxlet.2013.08.012) | [23994729](https://pubmed.ncbi.nlm.nih.gov/23994729) | The paper provides qualitative metabolic pathway information for TCEP in human liver fractions but lacks quantitative kinetic parameters (e.g., Vmax, Km, clearance rates) in the provided evidence. |
| `Wang_2020_2.pdf` | Wang X et al., Estimating renal and hepatic clearance…, Environment international (2020) | popPK | 9 | [10.1016/j.envint.2019.105321](https://doi.org/10.1016/j.envint.2019.105321) | [31783242](https://pubmed.ncbi.nlm.nih.gov/31783242) | The paper reports quantitative renal clearance rates (50.9 mL/kg/day) and estimates half-lives for tris(2-chloroethyl) phosphate (TCEP) in humans. |
| `Wang_2020_3.pdf` | Wang X et al., Estimation of internal human daily inta…, Environmental research (2020) | popPK | 7 | [10.1016/j.envres.2020.109493](https://doi.org/10.1016/j.envres.2020.109493) | [32325292](https://pubmed.ncbi.nlm.nih.gov/32325292) | The paper uses a one-compartment toxicokinetic model for TCEP, but the specific numeric values for clearance rates and partition coefficients are not present in the provided text. |

<sub>queue written 2026-11-19 17:35 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abdollahi_2017 | irrelevant | 0 | 0 | The paper describes environmental passive air sampling rates and foam-air partition coefficients, not biological toxicokinetic parameters in humans or animals. |
| popPK | Alzualde_2018 | irrelevant | 2 | 0 | The paper focuses on developmental toxicity assays and only mentions a high throughput toxicokinetic model for risk assessment comparison, without reporting specific quantitative kinetic parameters for TCEP in the provided text. |
| popPK | Been_2017 | irrelevant | 0 | 0 | The paper is an analytical chemistry study developing a method for wastewater analysis and reports only exposure concentrations in sewage, with no toxicokinetic parameters. |
| popPK | Beser_2019 | irrelevant | 0 | 0 | The paper is an analytical method development and exposure study reporting detection limits and concentrations in breast milk, but reports no toxicokinetic parameters (such as half-life, clearance, or volume of distribution) for tris(2-chloroethyl) phosphate. |
| popPK | Dodson_2014 | irrelevant | 1 | 1 | The paper is a biomonitoring exposure study reporting urinary metabolite concentrations and correlation with house dust levels, but contains no quantitative toxicokinetic parameters (e.g., half-lives, clearance, partition coefficients) for tris(2-chloroethyl) phosphate. |
| popPK | Gao_2020 | irrelevant | 0 | 0 | The paper reports exposure levels/concentrations in a population but provides no toxicokinetic parameters (half-lives, rate constants, partition coefficients, etc.). |
| popPK | Gravel_2025 | irrelevant | 2 | 0 | The paper reports exposure metrics (air concentrations and urinary metabolite associations) but explicitly states a lack of toxicokinetic data and does not report any quantitative kinetic parameters such as half-lives, clearance, or partition coefficients for the substance. |
| popPK | He_2018 | irrelevant | 1 | 1 | The paper reports environmental exposure concentrations and estimated daily intakes in humans but does not report any toxicokinetic parameters such as half-lives, clearance, volumes of distribution, or compartmental model parameters. |
| popPK | Henríquez-Hernández_2017 | irrelevant | 0 | 0 | The paper reports static serum concentrations of TCEP in cats and humans to assess exposure levels, but contains no toxicokinetic parameters (such as half-life, clearance, partition coefficients, or rate constants). |
| popPK | Kreutz_2024 | irrelevant | 1 | 0 | The paper describes an integrated approach using in vitro assays and mentions PBK models in the abstract, but the provided text contains no numeric toxicokinetic parameters for TCEP, referring instead to external literature or supplementary data not included here. |
| popPK | Kucharska_2015 | irrelevant | 0 | 0 | The paper is an exposure biomonitoring study reporting concentrations of PFRs in hair, dust, and air, with no toxicokinetic parameters (half-lives, rate constants, etc.) for tris(2-chloroethyl) phosphate. |
| popPK | Lao_2024 | irrelevant | 2 | 0 | The paper reports qualitative uptake mechanisms and relative translocation rates in plants but lacks quantitative kinetic parameters (e.g., half-life, rate constants, partition coefficients) for the substance. |
| popPK | Lim_2023 | irrelevant | 0 | 0 | The paper reports urinary metabolite concentrations and estimated daily intakes (exposure data) but no toxicokinetic parameters such as half-lives, clearance, or partition coefficients. |
| popPK | Liu_2015 | irrelevant | 0 | 0 | The paper reports analytical method validation and exposure concentrations in human hair/nails, not quantitative toxicokinetic parameters (rates, half-lives, partition coefficients, etc.). |
| popPK | Liu_2019 | irrelevant | 2 | 8 | The paper reports bioaccumulation and trophic transfer factors in wildlife from an environmental study, but does not provide quantitative toxicokinetic parameters (e.g., rate constants, half-lives, volumes) for TCEP disposition. |
| popPK | Luo_2014 | irrelevant | 0 | 0 | The paper is a review on micropollutants in wastewater treatment and does not report toxicokinetic parameters for tris2_chloroethylphosphate. |
| popPK | Maddela_2020 | irrelevant | 0 | 0 | The paper is a review focusing on environmental emissions, exposure, and toxicity without reporting original quantitative kinetic parameters. |
| popPK | Mayer_2021 | irrelevant | 3 | 3 | The paper measures urinary concentrations of a metabolite (BCEtP) at discrete time points to assess exposure, but does not derive or report specific quantitative toxicokinetic parameters (such as half-lives, rate constants, or clearance) for tris(2-chloroethyl) phosphate. |
| popPK | Phillips_2018 | irrelevant | 0 | 0 | The paper is an exposure study focusing on associations between environmental concentrations and urinary metabolite levels, without reporting quantitative toxicokinetic parameters such as half-lives, clearance, or volume of distribution for TCEP. |
| popPK | Plichta_2022 | irrelevant | 2 | 2 | The paper is an exposure risk assessment using biomonitoring data, citing a general half-life range for OPFRs from other sources rather than reporting specific kinetic parameters for TCEP derived from this study. |
| popPK | Tsai_2024 | irrelevant | 1 | 1 | The paper reports exposure estimates and clinical outcome associations (hazard ratios, risk correlations) in a human population but contains no quantitative toxicokinetic parameters (e.g., half-life, clearance, partition coefficients, rate constants) for the substance itself. |
| popPK | Van_2013 | relevant | 9 | 1 | The paper provides qualitative metabolic pathway information for TCEP in human liver fractions but lacks quantitative kinetic parameters (e.g., Vmax, Km, clearance rates) in the provided evidence. |
| popPK | Wang_2017 | irrelevant | 4 | 1 | The paper reports qualitative metabolism pathways and tissue distribution trends but provides no specific quantitative toxicokinetic parameters (e.g., rate constants, half-lives, partition coefficients) for TCEP. |
| popPK | Wang_2020 | irrelevant | 0 | 0 | The paper reports exposure metrics (uptake rates and doses) for a mixture of flame retardants using silicone passive samplers, but contains no quantitative toxicokinetic parameters (such as half-lives, clearance, or partition coefficients) for TCEP disposition in humans or animals. |
| popPK | Wang_2020_3 | relevant | 7 | 0 | The paper uses a one-compartment toxicokinetic model for TCEP, but the specific numeric values for clearance rates and partition coefficients are not present in the provided text. |
| popPK | Wang_2021 | irrelevant | 2 | 0 | This is a review article summarizing metabolic pathways and biomarkers of multiple OPEs without reporting new quantitative kinetic parameters for TCEP in the provided text. |
| popPK | Wannomai_2021 | irrelevant | 1 | 0 | The paper measures inhalation bioaccessibility of TCEP from dust in an environmental/occupational study, but reports no quantitative toxicokinetic parameters (e.g., half-life, clearance, partition coefficients) for the substance. |
| popPK | Yang_2018 | irrelevant | 0 | 0 | The paper reports environmental migration and release characteristics of organophosphate esters in soil and water, focusing on physical-chemical properties like partition coefficients (Kow, Koc), not biological toxicokinetic parameters in organisms. |
| popPK | Zhang_2022 | irrelevant | 0 | 0 | The paper describes an environmental analytical model for material emissions and transition temperatures, not biological toxicokinetic parameters like half-life or clearance. |
| popPK | Zhang_2024 | irrelevant | 2 | 1 | The paper reports environmental concentrations and bioaccumulation factors (BAFs) of organophosphate esters, including TCEP, in marine fish tissues, which describes environmental exposure levels rather than toxicokinetic parameters like half-lives, clearance, or partition coefficients. |
| popPK | Zhang_2024_2 | irrelevant | 2 | 0 | The paper discusses trophic transfer and fugacity in environmental food webs, not human or animal toxicokinetic parameters for tris(2-chloroethyl)phosphate. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btris2_chloroethylphosphate%5D&body=Drug%3A%20tris2_chloroethylphosphate%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_tris2_chloroethylphosphate/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-19 17:36 UTC</sub>
