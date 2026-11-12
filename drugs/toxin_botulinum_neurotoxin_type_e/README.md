<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Bacterial toxins&quot;,&quot;href&quot;:&quot;toxins/BACT.md&quot;},{&quot;label&quot;:&quot;Botulinum neurotoxin type E&quot;}]"></div>

# Botulinum neurotoxin type E

- **generic name:** Botulinum neurotoxin type E
- **T3DB:** [T3D3123](http://www.t3db.ca/toxins/T3D3123) · **PubChem:** none

## About

Botulinum toxin is a neurotoxic protein produced by the bacterium Clostridium botulinum. Though it is the most toxic protein known, it may be used in minute doses to treat muscle spasms and in cosmetic treatment, under the brand name Botox.

- **Category:** Protein, Bacterial Toxin, Natural Toxin
- **Route of exposure:** oral, inhalation, dermal
- **Sources and uses:** Botulinum toxin is a neurotoxic protein produced by the bacterium Clostridium botulinum. Though it is the most toxic protein known, it may be used in minute doses to treat muscle spasms and in cosmetic treatment, under the brand name Botox.
- **Mechanism of toxicity:** Botulinum toxin is a two-chain polypeptide with a 100-kDa heavy chain joined by a disulfide bond to a 50-kDa light chain. Following the attachment of the toxin heavy chain to proteins on the surface of axon terminals, the toxin can be taken into neurons by endocytosis. …
- **Health effects:** Botulinum toxin is an extremely potent neurotoxin that causes paralysis. Death may result from respiratory failure following paralysis of the respiratory muscles.

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D3123">T3DB T3D3123</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (fish), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">fish</span> | [Chatla_2016_ID50](drugs/toxin_botulinum_neurotoxin_type_e/pd_Chatla_2016_ID50.md) | immobilization biomarker turnover ← BoNT/E | — | Chatla K et al., Zebrafish Sensitivity to Botulinum Neur…, Toxins (2016) | [10.3390/toxins8050132](https://doi.org/10.3390/toxins8050132) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-11 04:11 | 7:53 | 0/0/0 | 1/0/0 | 0/0/0 | 210,740/4,298 | einfracz / qwen3.8-27b | 7 | 0/7 | 7/0 | 0 |

## Coverage

- **PubMed hits:** 28 matched, 28 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Adler_1996 | irrelevant | 1 | 0 | The study focuses on the pharmacological reversal of paralysis by 3,4-diaminopyridine rather than the toxicokinetic disposition (half-life, clearance, volume) of botulinum neurotoxin type E, and specific kinetic parameters for BoNT/E are not provided. |
| popPK | Adler_2001 | irrelevant | 1 | 0 | The paper reports pharmacodynamic recovery times (percentage of muscle tension) rather than toxicokinetic parameters like half-life or clearance for the substance. |
| popPK | Agarwal_2005 | irrelevant | 0 | 0 | The paper reports the structural analysis of botulinum neurotoxin serotype F, not type E, and contains no toxicokinetic parameters. |
| popPK | Agarwal_2005_2 | irrelevant | 0 | 0 | The paper focuses on structural and functional analysis of mutations affecting the catalytic mechanism and active site, not on toxicokinetic parameters like half-life or clearance. |
| popPK | Ben_2013 | irrelevant | 0 | 0 | The paper focuses on the protective efficacy and immunogenicity of a vaccine candidate (H(C)/A) against botulism in mice and rabbits, reporting survival rates and neutralizing titers rather than quantitative toxicokinetic parameters (half-life, clearance, volume of distribution) for botulinum neurotoxin type E. |
| popPK | Chatla_2016 | irrelevant | 0 | 0 | The paper reports ID50 (dose-response/toxicity) values for zebrafish, which is a potency measure, not a quantitative toxicokinetic parameter (such as half-life, clearance, or volume of distribution) for botulinum neurotoxin type E. |
| popPK | Derman_2016 | irrelevant | 1 | 0 | The paper focuses on the development and neutralization efficacy of a humanized antibody against BoNT/E, reporting no quantitative toxicokinetic parameters (e.g., half-life, clearance, volume of distribution) for the toxin itself. |
| popPK | Diamant_2018 | irrelevant | 0 | 0 | The paper focuses on the development of a spirometry model and antitoxin efficacy (survival/symptom onset) rather than reporting quantitative toxicokinetic parameters like half-life, clearance, or partition coefficients. |
| popPK | Dux_2006 | irrelevant | 0 | 0 | The paper focuses on the production and purification of a botulinum neurotoxin type E vaccine fragment and immunogenicity in mice, reporting no toxicokinetic parameters. |
| popPK | Kalb_2006 | irrelevant | 0 | 0 | The paper describes an analytical detection method (Endopep-MS) and reports limits of detection, not toxicokinetic parameters such as half-life, clearance, or volume of distribution. |
| popPK | Lalaurie_2022 | irrelevant | 0 | 0 | The paper focuses on structural biology (pH-dependent conformational changes) via MD and SAXS, reporting no quantitative toxicokinetic parameters such as half-life, clearance, or partition coefficients. |
| popPK | Luo_2014 | irrelevant | 0 | 0 | The paper describes the development of a fusion protein substrate for *in vitro* assay of botulinum neurotoxin types, not toxicokinetic parameters. |
| popPK | Lévêque_2015 | irrelevant | 0 | 0 | The paper describes an in vitro Surface Plasmon Resonance (SPR) assay for detecting the enzymatic activity of botulinum neurotoxin type E and reports detection limits/sensitivities, but it does not report quantitative toxicokinetic parameters (e.g., half-life, clearance, distribution volume) for the toxin in any biological system. |
| popPK | Moga_2018 | irrelevant | 0 | 0 | The paper is a review of therapeutic applications of Botulinum Toxin Type A in gynecology and contains no quantitative toxicokinetic parameters for Botulinum Neurotoxin Type E. |
| popPK | Mukkawali_2026 | irrelevant | 0 | 0 | The paper investigates the mechanism of a neurotoxin-associated protein (P80) on intestinal epithelial cells in vitro, focusing on barrier integrity rather than reporting quantitative toxicokinetic parameters (half-life, clearance, etc.) for the botulinum neurotoxin itself. |
| popPK | Nicholson_2025 | irrelevant | 0 | 0 | The paper reports pharmacodynamic effects (DAS scores, onset, duration) rather than quantitative toxicokinetic parameters (e.g., clearance, half-life, concentration-time data) for botulinum_neurotoxin_type_e. |
| popPK | Nowakowska_2022 | irrelevant | 0 | 0 | The paper reports construction and safety validation of a surrogate strain producing inactive BoNT/E toxoid, not quantitative toxicokinetic parameters of active BoNT/E. |
| popPK | Raja_2022 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for the therapeutic monoclonal antibody mixture (NTM-1633), not for the subject substance botulinum neurotoxin type e. |
| popPK | Rani_2017 | irrelevant | 0 | 0 | The paper is a study on antibody neutralization and toxicity (LD50) in mice, with no quantitative toxicokinetic parameters (such as half-life, clearance, or volume of distribution) reported for botulinum neurotoxin type E. |
| popPK | Schenke_2026 | irrelevant | 0 | 0 | The paper reports in vitro potency (IC50) and substrate cleavage data for botulinum neurotoxin type E, not quantitative toxicokinetic parameters such as half-life, clearance, or distribution volumes. |
| popPK | Schwartz_2021 | irrelevant | 1 | 0 | The paper reports on a behavioral mouse model and antitoxin efficacy (LD50s and time to symptom onset) rather than quantitative toxicokinetic parameters like half-life or clearance for BoNT/E. |
| popPK | Sharma_2006 | irrelevant | 0 | 0 | The paper describes an ELISA method for detecting botulinum neurotoxin in food matrices and provides detection limits/sensitivities, but reports no pharmacokinetic or toxicokinetic parameters (e.g., half-life, clearance, distribution volume). |
| popPK | Simpson_1983 | irrelevant | 0 | 0 | The paper focuses on mechanism of action and structure-activity relationships (binding, translocation, enzymatic activity) rather than quantitative toxicokinetic parameters like half-life, clearance, or distribution. |
| popPK | Wang_2014 | irrelevant | 0 | 0 | The paper describes an analytical method for detecting botulinum neurotoxins and does not report any toxicokinetic parameters such as half-life, clearance, or distribution. |
| popPK | Wang_2015 | irrelevant | 0 | 0 | The paper focuses on analytical detection methods (Endopep-MS) and peptide substrates, reporting no toxicokinetic parameters such as half-life, clearance, or distribution. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bbotulinum_neurotoxin_type_e%5D&body=Drug%3A%20botulinum_neurotoxin_type_e%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_botulinum_neurotoxin_type_e/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
