<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;o-Xylene&quot;}]"></div>

# o-Xylene

- **generic name:** o-Xylene
- **T3DB:** [T3D0864](http://www.t3db.ca/toxins/T3D0864) · **DrugBank:** [DB03029](https://go.drugbank.com/drugs/DB03029) · **PubChem:** [CID 7237](https://pubchem.ncbi.nlm.nih.gov/compound/7237)

## About

O-xylene is an aromatic hydrocarbon based on benzene with two methyl substituents. It is a isomer of xylene. Xylene occurs naturally in petroleum and coal tar, and is major component of gasoline and fuel oil. …

- **Category:** Household Toxin, Industrial/Workplace Toxin, Pollutant, Airborne Pollutant, Food Toxin, Natural Toxin
- **Route of exposure:** oral, inhalation, dermal
- **Sources and uses:** Xylene is used as a solvent and in the printing, rubber, and leather industries. It is also used as a cleaning agent, a thinner for paint, and in paints and varnishes. …
- **Mechanism of toxicity:** o-Xylene is a cholinesterase or acetylcholinesterase (AChE) inhibitor. A cholinesterase inhibitor (or 'anticholinesterase') suppresses the action of acetylcholinesterase. …
- **Health effects:** Acute exposure to cholinesterase inhibitors can cause a cholinergic crisis characterized by severe nausea/vomiting, salivation, sweating, bradycardia, hypotension, collapse, and convulsions. Increasing muscle weakness is a possibility and may result in death if respiratory muscles are involved. …
- **Carcinogenicity:** IARC group 3, not classifiable as to its carcinogenicity to humans.
- **Minimal risk levels (ATSDR):** Acute Inhalation: 2 ppm 
Intermediate Inhalation: 0.6 ppm 
Chronic Inhalation: 0.05 ppm 
Acute Oral: 1 mg/kg/day 
Intermediate Oral: 0.4 mg/kg/day 
Chronic Oral: 0.2 mg/kg/day
- **Acute toxicity:** LD50: 4595 ppm (Inhalation, Mouse)
- **Treatment:** If the compound has been ingested, rapid gastric lavage should be performed using 5% sodium bicarbonate. …
- **Detected in:** blood

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D0864">T3DB T3D0864</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 95-47-6 · <a href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:28063">ChEBI 28063</a></small></p>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| o-Xylene (o_xylene) | parent | 106.168 | C8H10 | PubChem | [7237](https://pubchem.ncbi.nlm.nih.gov/compound/7237) | Thrall_2003 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="rat" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Mortensen_2000_reference](drugs/toxin_o_xylene/OXylene_Mortensen2000_reference.md) | — | 1-compartment (no model) | 0 | Mortensen B et al., Prediction of in vivo metabolic clearan…, Archives of toxicology (2000) | [10.1007/s002040000135](https://doi.org/10.1007/s002040000135) |
| <span class="pk-rf" hidden data-species="human + animal" data-age="mixed" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.60).">human + animal</span><br><sub>blocking: no kinetic quantity — no half-life, rate constant, volume or clearance (exposur…</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter — unit dimension conflicts with…</sub> | [Thrall_2003_reference](drugs/toxin_o_xylene/OXylene_Thrall2003_reference.md) | — | 1-compartment (no model) | 1 | Thrall K et al., Evaluation of the dermal bioavailabilit…, Journal of toxicology and e… (2003) | [10.1080/15287390306407](https://doi.org/10.1080/15287390306407) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Li_2022_HR](drugs/toxin_o_xylene/pd_Li_2022_HR.md) | total mortality ← o-xylene · time-to-event model | — | Li W et al., Blood volatile organic aromatic compoun…, Chemosphere 286(Pt 1):131590 (2022) | [10.1016/j.chemosphere.2021.131590](https://doi.org/10.1016/j.chemosphere.2021.131590) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Li_2022_HR_2](drugs/toxin_o_xylene/pd_Li_2022_HR_2.md) | cause specific mortality (cancer) ← o-xylene · time-to-event model | — | Li W et al., Blood volatile organic aromatic compoun…, Chemosphere 286(Pt 1):131590 (2022) | [10.1016/j.chemosphere.2021.131590](https://doi.org/10.1016/j.chemosphere.2021.131590) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-16 01:55 | 25:49 | 0/2/0 | 1/0/0 | 0/0/0 | 629,235/39,601 | einfracz / qwen3.8-flash-next | 9 | 1/6 | 9/0 | 0 |

## Coverage

- **PubMed hits:** 57 matched, 57 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_7 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Dennison_2003.pdf` | Dennison JE et al., Characterization of the pharmacokinetic…, Inhalation toxicology (2003) | popPK | 9 | [10.1080/08958370390215749](https://doi.org/10.1080/08958370390215749) | [12928975](https://pubmed.ncbi.nlm.nih.gov/12928975) | The paper describes a PBPK model for o-xylene in rats, but no numeric kinetic parameter values are provided in the evidence; they are implied to be in the full model or results not included here. |
| `Mortensen_2000.pdf` | Mortensen B et al., Prediction of in vivo metabolic clearan…, Archives of toxicology (2000) | popPK | 9 | [10.1007/s002040000135](https://doi.org/10.1007/s002040000135) | [11005676](https://pubmed.ncbi.nlm.nih.gov/11005676) | The paper explicitly mentions the determination of Michaelis-Menten constants (Km) and in vitro metabolic rates for o-xylene in rat liver slices. |
| `Price_2011.pdf` | Price K et al., An integrated QSAR-PBPK modelling appro…, SAR and QSAR in environment… (2011) | popPK | 9 | [10.1080/1062936X.2010.548350](https://doi.org/10.1080/1062936X.2010.548350) | [21391144](https://pubmed.ncbi.nlm.nih.gov/21391144) | The paper presents a QSAR-PBPK model for o-xylene toxicokinetics in rats, providing model structure and validation statistics, but specific numeric parameter values (Vmax, Km, partition coefficients) are not explicitly listed in the provided text. |
| `Thrall_2002.pdf` | Thrall KD et al., Route-of-entry and brain tissue partiti…, Journal of toxicology and e… (2002) | popPK | 9 | [10.1080/00984100290071838](https://doi.org/10.1080/00984100290071838) | [12515587](https://pubmed.ncbi.nlm.nih.gov/12515587) | The paper describes a study determining partition coefficients for o-xylene, which are key toxicokinetic parameters, but the specific numeric values are not present in the provided evidence snippet. |
| `Thrall_2003.pdf` | Thrall K et al., Evaluation of the dermal bioavailabilit…, Journal of toxicology and e… (2003) | popPK | 9 | [10.1080/15287390306407](https://doi.org/10.1080/15287390306407) | [12851123](https://pubmed.ncbi.nlm.nih.gov/12851123) | The paper reports quantitative dermal permeability coefficients (Kp) for o-xylene in rats and humans, with specific numerical values provided in the text. |
| `Dennison_2004.pdf` | Dennison JE et al., PBPK modeling of complex hydrocarbon mi…, Environmental toxicology an… (2004) | popPK | 8 | [10.1016/j.etap.2003.10.003](https://doi.org/10.1016/j.etap.2003.10.003) | [21782697](https://pubmed.ncbi.nlm.nih.gov/21782697) | The paper describes a PBPK model for o-xylene within a gasoline mixture, confirming kinetic data exists, but no specific numeric kinetic parameters (rates, volumes, etc.) are present in the provided text. |
| `Morris_1993.pdf` | Morris JB et al., A physiologically based pharmacokinetic…, Toxicology and applied phar… (1993) | popPK | 8 | [10.1006/taap.1993.1228](https://doi.org/10.1006/taap.1993.1228) | [8236250](https://pubmed.ncbi.nlm.nih.gov/8236250) | The paper describes a PBPK model for nasal uptake/metabolism of o-xylene in rats, which is highly relevant, but the specific numeric parameter values (partition coefficients, metabolic rates, etc.) are not present in the provided text. |

<sub>queue written 2026-11-16 01:39 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Adetunji_2025 | irrelevant | 0 | 0 | The paper is an epidemiological exposure-outcome study (NHANES) analyzing associations between chemical concentrations and kidney function (eGFR) in humans, but it reports no toxicokinetic parameters such as half-lives, partition coefficients, clearance, or rate constants for o-xylene. |
| popPK | Aranda-Rodriguez_2015 | irrelevant | 2 | 1 | The paper describes an analytical method for measuring VOCs in blood; while it mentions exposure studies, it does not report quantitative toxicokinetic parameters (e.g., half-lives, clearance) for o-xylene, and the pharmacokinetic data cited are for a different mixture (CTEX: chloroform, ethylbenzene, toluene, m-xylene) not including o-xylene. |
| popPK | Ashley_1995 | irrelevant | 1 | 0 | The paper is an epidemiological/exposure study measuring blood concentrations to assess smoking confounders, reporting no kinetic parameters (half-lives, clearance, partition coefficients, etc.) for o-xylene. |
| popPK | Baathulaa_2011 | irrelevant | 0 | 0 | The paper describes a chemical synthesis where o_xylene is used as a starting material/reagent, not a toxicokinetic study of the substance itself. |
| popPK | Blount_2010 | irrelevant | 0 | 0 | The paper describes analytical methods for detecting VOCs in breast milk and reports median concentrations, but provides no quantitative toxicokinetic parameters (such as half-lives, clearance rates, or partition coefficients) for o-xylene. |
| popPK | Careghini_2015 | irrelevant | 0 | 10 | The paper reports biodegradation kinetic constants for environmental remediation in groundwater, not toxicokinetic parameters in biological organisms. |
| popPK | Cattaneo_2021 | irrelevant | 1 | 0 | The paper is an exposure and epidemiological study measuring environmental concentrations and urinary biomarker levels in humans, but it reports no toxicokinetic parameters (rates, half-lives, partition coefficients, or model parameters) for o-xylene. |
| popPK | Chao_2020 | irrelevant | 1 | 0 | The paper reports population exposure trends (air concentrations) for o-xylene, not quantitative toxicokinetic parameters like half-lives or clearance rates. |
| popPK | Choi_2026 | irrelevant | 2 | 8 | The paper reports exposure concentrations and internal biomarker levels but lacks specific toxicokinetic parameters (such as rate constants, half-lives, or partition coefficients) for o-xylene. |
| popPK | Delfino_2003 | irrelevant | 0 | 0 | The paper is an epidemiological study measuring o-xylene concentrations in breath and ambient air to assess health outcomes, but it does not report any quantitative toxicokinetic parameters (e.g., half-lives, clearance rates, or partition coefficients) for o-xylene. |
| popPK | Dennison_2003 | relevant | 9 | 0 | The paper describes a PBPK model for o-xylene in rats, but no numeric kinetic parameter values are provided in the evidence; they are implied to be in the full model or results not included here. |
| popPK | Dennison_2004 | relevant | 8 | 2 | The paper describes a PBPK model for o-xylene within a gasoline mixture, confirming kinetic data exists, but no specific numeric kinetic parameters (rates, volumes, etc.) are present in the provided text. |
| popPK | Dennison_2005 | irrelevant | 1 | 0 | The paper discusses experimental methodology and system losses (leakage, adsorption) rather than reporting specific quantitative toxicokinetic parameters for o-xylene. |
| popPK | Di_2006 | irrelevant | 0 | 0 | The paper reports acute toxicity endpoints (EC50/LC50) and QSAR models for multiple substances including o-xylene, but does not report any toxicokinetic parameters (rates, half-lives, partition coefficients, etc.). |
| popPK | Dudek_2002 | irrelevant | 0 | 0 | The paper reports analytical partition coefficients for air sampling devices, not biological toxicokinetic parameters in humans or animals. |
| popPK | Gao_2009 | irrelevant | 0 | 10 | The paper reports environmental partitioning coefficients (Henry's Law, cyclodextrin-water) for chemical remediation, not biological toxicokinetic parameters for o_xylene. |
| popPK | He_2024 | irrelevant | 1 | 0 | The paper is an epidemiological study reporting associations between blood BTEX levels and cardiovascular outcomes, without measuring or reporting any quantitative toxicokinetic parameters (e.g., half-lives, partition coefficients, clearance). |
| popPK | Hoseini_2023 | irrelevant | 0 | 0 | The paper is a systematic review of biomonitoring data reporting urinary concentrations but provides no quantitative toxicokinetic parameters (rates, coefficients, volumes) for o-xylene. |
| popPK | Jo_2001 | irrelevant | 1 | 1 | This is an occupational exposure study reporting environmental and breath concentrations, not toxicokinetic parameters like rate constants or partition coefficients. |
| popPK | Koenigsmark_2025 | irrelevant | 0 | 0 | The paper is an epidemiological study associating measured blood concentrations with hypertension outcomes and contains no kinetic parameters (rates, half-lives, partition coefficients) for o-xylene. |
| popPK | Liu_2026 | irrelevant | 1 | 0 | The paper is an epidemiological cross-sectional study of associations between toxicant levels and sleep apnea, reporting no toxicokinetic parameters. |
| popPK | Moridzadeh_2020 | irrelevant | 1 | 9 | The study reports urinary biomarker concentrations as exposure indicators but does not derive or report any quantitative toxicokinetic parameters (such as half-lives, clearance rates, or partition coefficients) for o-xylene. |
| popPK | Morris_1993 | relevant | 8 | 2 | The paper describes a PBPK model for nasal uptake/metabolism of o-xylene in rats, which is highly relevant, but the specific numeric parameter values (partition coefficients, metabolic rates, etc.) are not present in the provided text. |
| popPK | Njei_2026 | irrelevant | 0 | 0 | The paper is an epidemiological exposure-outcome association study using machine learning and reports no quantitative toxicokinetic parameters for o-xylene. |
| popPK | Parvez_2008 | irrelevant | 0 | 0 | The paper reports ecotoxicological mixture effects using a bacterial assay (Vibrio fischeri) and does not report any toxicokinetic parameters for o-xylene. |
| popPK | Parvez_2009 | irrelevant | 0 | 0 | The paper is an ecotoxicology study on mixture toxicity using Vibrio fischeri, not a toxicokinetic study of o_xylene. |
| popPK | Price_2011 | relevant | 9 | 2 | The paper presents a QSAR-PBPK model for o-xylene toxicokinetics in rats, providing model structure and validation statistics, but specific numeric parameter values (Vmax, Km, partition coefficients) are not explicitly listed in the provided text. |
| popPK | Rafiee_2018 | irrelevant | 1 | 8 | The study reports only urinary concentrations of o-xylene in exposed humans as an exposure biomarker, with no quantitative toxicokinetic parameters such as rate constants, half-lives, or partition coefficients. |
| popPK | Rafiee_2019 | irrelevant | 2 | 0 | The study reports urinary concentrations as exposure biomarkers but does not provide toxicokinetic parameters such as half-lives, clearance rates, or volume of distribution. |
| popPK | Tabatabaei_2022 | irrelevant | 0 | 0 | The paper is an epidemiological biomonitoring study reporting urinary concentrations of o-xylene in children as markers of exposure, but it contains no quantitative toxicokinetic parameters (e.g., half-life, clearance, partition coefficients, or metabolic rate constants). |
| popPK | Tanada_1999 | irrelevant | 0 | 0 | The paper investigates environmental removal of xylenes from soil/water using cyclodextrins, reporting solubility changes rather than biological toxicokinetic parameters. |
| popPK | Thrall_2002 | relevant | 9 | 0 | The paper describes a study determining partition coefficients for o-xylene, which are key toxicokinetic parameters, but the specific numeric values are not present in the provided evidence snippet. |
| popPK | Tsangari_2017 | irrelevant | 1 | 0 | The paper reports observational exposure biomarkers (urinary concentrations) in a population but no kinetic parameters like half-lives, clearance, or partition coefficients. |
| popPK | Varona-Torres_2023 | irrelevant | 0 | 0 | The paper reports thermodynamic partition coefficients between ionic liquids and the gas phase for analytical chemistry purposes, not biological toxicokinetic parameters. |
| popPK | Wang_2024 | irrelevant | 1 | 1 | The paper reports physical emission parameters (diffusion and partition coefficients from building materials) rather than biological toxicokinetic parameters for o-xylene. |
| popPK | Werder_2018 | irrelevant | 0 | 0 | The paper reports blood concentrations of o-xylene as exposure biomarkers in humans, not toxicokinetic parameters like half-lives, clearance, or partition coefficients for o-xylene itself. |
| popPK | Yoshida_2010 | irrelevant | 1 | 0 | The reported value is an absorbed amount (dose) in micrograms, not a kinetic parameter like half-life or clearance, and the specific kinetic constants are not provided in the evidence. |
| PGx | Younan_2026 | not_relevant | 0 | 0 | The paper describes bacterial enzyme engineering to improve drug metabolism, not pharmacogenomic effects of human gene variants on drug PK/PD parameters for o_xylene. |
| popPK | Yu_2025 | irrelevant | 0 | 0 | This is an epidemiological cohort study assessing cancer risk associated with ambient BTEX exposure, reporting hazard ratios but containing no quantitative toxicokinetic parameters (such as half-lives, partition coefficients, or clearance rates) for o-xylene. |
| popPK | Zhou_2025 | irrelevant | 0 | 0 | The paper is an epidemiological study assessing the association between ambient BTEX exposure and mortality, reporting no toxicokinetic parameters for o-xylene. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bo_xylene%5D&body=Drug%3A%20o_xylene%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_o_xylene/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-16 01:39 UTC</sub>
