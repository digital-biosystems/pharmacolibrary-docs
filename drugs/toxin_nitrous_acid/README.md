<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Industrial and workplace toxins&quot;,&quot;href&quot;:&quot;toxins/IND.md&quot;},{&quot;label&quot;:&quot;Nitrous acid&quot;}]"></div>

# Nitrous acid

- **generic name:** Nitrous acid
- **T3DB:** [T3D3549](http://www.t3db.ca/toxins/T3D3549) · **PubChem:** [CID 24529](https://pubchem.ncbi.nlm.nih.gov/compound/24529)
- **groups:** approved, investigational

## About

Nitrous acid is a weak and monobasic acid known only in solution and in the form of nitrite salts. It is prepared by adding any mineral acid to sodium nitrite and is used in chemical synthesis. Nitrite is a toxic compound known to cause methemoglobinemia.

- **Category:** Industrial/Workplace Toxin, Synthetic Toxin
- **Route of exposure:** oral, inhalation
- **Sources and uses:** Nitrous acid is used in chemical synthesis.
- **Mechanism of toxicity:** Nitrite causes the autocatalytic oxidation of oxyhemoglobin to hydrogen peroxide and methemoglobin. This elevation of methemoglobin levels is a condition known as methemoglobinemia, and is characterized by tissue hypoxia, as methemoglobin cannot bind oxygen.
- **Health effects:** Nitrite poisoning causes methemoglobinemia. Nitrites may cause pregnancy complications and developmental effects. …
- **Lethal dose:** 10 to 100 mg/kg for an adult human.
- **Carcinogenicity:** Ingested nitrate or nitrite under conditions that result in endogenous nitrosation is probably carcinogenic to humans (Group 2A).
- **Treatment:** Methemoglobinemia can be treated with supplemental oxygen and methylene blue 1% solution administered intravenously slowly over five minutes followed by IV flush with normal saline. …

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D3549">T3DB T3D3549</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 7782-77-6 · <a href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:25567">ChEBI 25567</a></small></p>

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-19 13:56 | 4:33 | 0/0/0 | 0/0/0 | 0/0/0 | 70,031/2,907 | einfracz / qwen3.8-flash-next | 1 | 0/1 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 16 matched, 16 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Zhang_2022.pdf` | Zhang J et al., High crop yield losses induced by poten…, The Science of the total en… (2022) | pd | 5 | [10.1016/j.scitotenv.2021.149929](https://doi.org/10.1016/j.scitotenv.2021.149929) | [34478900](https://www.ncbi.nlm.nih.gov/pubmed/34478900) | metadata signals extractable PD data (exposure-response) |

<sub>queue written 2026-11-19 13:56 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | BARNHART_1965 | irrelevant | 0 | 0 | Nitrous acid is used solely as a mutagenic reagent/chemical treatment to test DNA susceptibility, with no toxicokinetic data or parameters reported for it. |
| popPK | Fareed_1988 | irrelevant | 0 | 0 | Nitrous acid is mentioned only as a reagent used for the depolymerization of heparin in the preparation of a standard, with no toxicokinetic data reported for nitrous acid itself. |
| popPK | Felts_1983 | irrelevant | 0 | 0 | Nitrous acid is used solely as a chemical reagent to degrade glycosaminoglycans, with no toxicokinetic parameters reported for it. |
| popPK | Helling_1969 | irrelevant | 0 | 0 | The paper reports biological kinetics of phage transduction in bacteria (E. coli) treated with nitrous acid, which is a genetic/mutagenesis study and not toxicokinetics (ADME) in humans or animals. |
| popPK | Hmani_2018 | irrelevant | 0 | 0 | The paper uses nitrous acid as a mutagen to treat bacteria, reporting no toxicokinetic parameters for the substance itself in any species. |
| popPK | Kerbrat_2010 | irrelevant | 0 | 0 | The paper reports adsorption partition coefficients of nitrous acid on ice in a flow tube, which are abiotic atmospheric chemistry parameters, not biological toxicokinetic parameters. |
| popPK | Kjaergaard_1996 | irrelevant | 1 | 0 | The paper is a review/summary of health effects (dose-response, NOEL, meta-analyses) with no quantitative toxicokinetic parameters for nitrous acid. |
| popPK | Maickel_1979 | irrelevant | 0 | 0 | The paper reports acute toxicity (LD50) for butyl nitrites, not toxicokinetic parameters for nitrous acid, which appears only as a reagent in synthesis. |
| popPK | Ohyama_2020 | irrelevant | 0 | 0 | The paper reports histopathological outcomes (emphysema, tissue thickness) and exposure concentrations to determine a LOAEL, but contains no quantitative toxicokinetic parameters (half-life, clearance, partition coefficients, etc.). |
| popPK | Pan_2002 | irrelevant | 0 | 0 | The paper concerns the treatment of leukemia using liposomal doxorubicin and nitrous acid is mentioned only as a reagent to test GPI-anchor sensitivity in an assay, with no kinetic parameters reported. |
| popPK | Pannala_2003 | irrelevant | 0 | 0 | The paper studies nitrate pharmacokinetics and mentions nitrous acid only as a theoretical intermediate in the stomach without measuring its kinetics. |
| popPK | Postlethwait_1994 | irrelevant | 3 | 0 | The paper discusses NO2 absorption mechanisms and mentions HNO2 as a reaction product, but reports no quantitative toxicokinetic parameters for nitrous_acid, and the substance of primary interest is NO2. |
| popPK | Romanin_1988 | irrelevant | 0 | 0 | The study focuses on pharmacological mechanisms of organic nitrates and nitrites, mentioning nitrous acid only as an intermediate in a failed mechanistic hypothesis, with no quantitative toxicokinetic parameters provided. |
| popPK | Smith_1990 | irrelevant | 0 | 0 | The paper is a study on lung morphogenesis where nitrous acid is used only as a chemical reagent for digestion in autoradiography, with no toxicokinetic parameters reported. |
| PGx | Ul-Haq_2007 | not_relevant | 0 | 0 | The paper describes the use of nitrous acid as a chemical mutagen to improve enzyme production in bacteria, not as a drug with pharmacokinetic or pharmacodynamic parameters in humans or animals. |
| popPK | Zhang_2022 | irrelevant | 0 | 0 | The paper is an environmental modelling study on atmospheric nitrous acid and crop yield losses, containing no biological or toxicokinetic data. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bnitrous_acid%5D&body=Drug%3A%20nitrous_acid%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_nitrous_acid/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
