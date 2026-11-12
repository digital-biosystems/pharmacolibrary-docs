<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Animal toxins&quot;,&quot;href&quot;:&quot;toxins/ANIM.md&quot;},{&quot;label&quot;:&quot;Melittin (Apis mellifera)&quot;}]"></div>

# Melittin (Apis mellifera)

- **generic name:** Melittin (Apis mellifera)
- **T3DB:** [T3D2624](http://www.t3db.ca/toxins/T3D2624) · **PubChem:** [CID 16129627](https://pubchem.ncbi.nlm.nih.gov/compound/16129627)

## About

Melittin is the main component of bee venom. It is a powerful stimulator of phospholipase A2 and also exhibits potent anti-microbial activity.

- **Category:** Protein, Natural Toxin, Animal Toxin
- **Route of exposure:** injection (sting/bite)
- **Sources and uses:** Melittin is the main component of bee venom.
- **Mechanism of toxicity:** Melittin has strong haemolytic activity. It integrates into cell membranes and has multiple effects, probably, as a result of its interaction with negatively charged phospholipids. …
- **Health effects:** Melittin poisoning may cause development of optic neuritis and atrophy. Serious cases may lead to atrial fibrillation, cerebral infarction, acute myocardial infarction, Fisher's syndrome, Guillain-Barre syndrome, claw hand caused by Ulnar nerve entrapment, and haemorrhaging in the lungs.
- **Acute toxicity:** LD50: 6.00 mg/kg (Intravenous, Mouse)

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D2624">T3DB T3D2624</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 20449-79-0 · <a href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:25520">ChEBI 25520</a></small></p>

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-11 06:13 | 14:37 | 0/0/0 | 0/0/0 | 0/0/0 | 328,908/10,421 | einfracz / qwen3.8-27b | 12 | 1/11 | 12/0 | 0 |

## Coverage

- **PubMed hits:** 18 matched, 33 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Tian_2011.pdf` | Tian JL et al., Melittin liposomes surface modified wit…, Die Pharmazie (2011) | popPK | 9 |  | [21699070](https://pubmed.ncbi.nlm.nih.gov/21699070) | The paper explicitly states that pharmacokinetics were determined for the different melittin preparations in vivo, indicating quantitative kinetic parameters are reported, but the specific numeric values are not included in the provided evidence. |
| `Jia_2021.pdf` | Jia F et al., Bottlebrush Polymer-Conjugated Melittin…, ACS applied materials & int… (2021) | popPK | 6 | [10.1021/acsami.1c14285](https://doi.org/10.1021/acsami.1c14285) | [34472829](https://pubmed.ncbi.nlm.nih.gov/34472829) | The paper reports pharmacokinetic improvements (AUC) for a melittin conjugate in preclinical models, but specific numeric parameter values are not provided in the text. |

<sub>queue written 2026-11-11 06:13 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Attali_2004 | irrelevant | 0 | 0 | The paper uses melittin as a pore-former to study cell lysis in apoptosis, not as a subject for toxicokinetic parameter measurement. |
| popPK | Barbosa_2021 | relevant | 5 | 1 | The paper reports qualitative time-course data for melittin concentration (0.25-1.479 ng/mL initial range, presence at 30 days) but lacks specific half-life, clearance, or rate constant values in the provided text. |
| popPK | Centeio_2020 | irrelevant | 0 | 0 | The paper investigates melittin as a pharmacological activator of the ion channel TMEM16A in cell lines, reporting no toxicokinetic parameters (half-life, clearance, etc.) for the substance. |
| popPK | Dezfuli_2014 | irrelevant | 0 | 0 | The paper investigates melittin's role as an immunological adjuvant for a hepatitis B vaccine, reporting immune response data (cytokines, antibodies) rather than toxicokinetic parameters. |
| popPK | Dinata_2025 | irrelevant | 0 | 0 | The paper uses in silico predictions (ADMETlab) to profile bee antimicrobial peptides, including melittin, but does not report experimentally measured quantitative toxicokinetic parameters (e.g., half-life, clearance) for melittin in a biological system. |
| popPK | Dosler_2013 | irrelevant | 0 | 0 | The paper focuses on the in vitro antimicrobial efficacy (MICs and time-kill curves) of peptides against bacteria, not on the toxicokinetic parameters (absorption, distribution, metabolism, elimination) of melittin in a biological host. |
| popPK | Enayathullah_2022 | irrelevant | 0 | 0 | The paper reports antiviral efficacy (EC50, viral load reduction) and proteomic changes of melittin in Vero cells, but contains no toxicokinetic parameters such as half-life, clearance, volume of distribution, or partition coefficients. |
| popPK | Fieck_2010 | irrelevant | 0 | 0 | The paper reports cytotoxicity data on Trypanosoma cruzi but contains no quantitative toxicokinetic parameters (e.g., half-life, clearance, rate constants) for melittin. |
| popPK | Fletcher_1993 | irrelevant | 0 | 0 | The paper is a mechanistic review of cellular actions and protein interactions without reporting any quantitative toxicokinetic parameters (such as half-life, clearance, or partition coefficients) for melittin. |
| popPK | Gui_2020 | irrelevant | 1 | 0 | The paper reports pharmacodynamic outcomes (glucose levels, survival) and formulation characteristics, but contains no quantitative toxicokinetic parameters (half-life, clearance, volume) for melittin. |
| popPK | Hafez_2026 | irrelevant | 0 | 0 | The paper investigates the anti-psoriatic efficacy and molecular mechanisms (oxidative stress, inflammation, autophagy) of melittin in mice, but reports no toxicokinetic parameters such as half-life, clearance, or volume of distribution. |
| popPK | Halling_2008 | irrelevant | 0 | 0 | The paper studies the susceptibility of Brucella abortus to melittin (antibiotic activity) and bacterial colonization kinetics in mice, not the toxicokinetic disposition of melittin itself. |
| popPK | Hamed_2025 | irrelevant | 0 | 0 | The paper studies melittin's therapeutic effects on glyphosate-induced nephrotoxicity (renal function biomarkers like urea and creatinine) but does not report kinetic parameters (half-life, clearance, volume of distribution) for melittin itself. |
| popPK | Hoshino_2010 | irrelevant | 3 | 0 | The paper describes a therapeutic intervention (polymer nanoparticles) for melittin clearance in mice but does not report specific quantitative kinetic parameters (e.g., half-life, rate constants, clearance values) for melittin itself; it only states that clearance was accelerated. |
| popPK | Hu_2026 | irrelevant | 2 | 1 | The paper is primarily a mechanistic and efficacy study of melittin in a pulmonary fibrosis model, reporting qualitative clearance times (e.g., "within 6 h") rather than specific quantitative pharmacokinetic parameters like half-life, clearance rates, or volume of distribution. |
| popPK | Jentsch_1969 | irrelevant | 0 | 0 | no_text gate: only 54 chars of text extracted (&lt; 400) |
| popPK | Jia_2018 | irrelevant | 0 | 0 | The paper discusses qualitative in vivo delivery and clearance of a melittin nanocomplex but provides no quantitative kinetic parameters (e.g., half-life, rate constants, clearance values) for melittin. |
| popPK | Jia_2021 | relevant | 6 | 1 | The paper reports pharmacokinetic improvements (AUC) for a melittin conjugate in preclinical models, but specific numeric parameter values are not provided in the text. |
| popPK | Jin_2013 | irrelevant | 0 | 0 | The paper reports on the construction of a fusion protein for immunosuppression and cytotoxicity assays, but contains no toxicokinetic parameters (half-life, clearance, partition coefficients, etc.) for melittin. |
| popPK | Lee_2014 | irrelevant | 0 | 0 | The paper is an immunological study focusing on immune response and bacterial clearance, containing no toxicokinetic parameters for melittin. |
| popPK | Li_2026 | irrelevant | 2 | 0 | The paper reports qualitative observations of BBB permeability changes and therapeutic outcomes (fungal burden, inflammation) but provides no quantitative kinetic parameters (e.g., half-life, clearance, partition coefficients, or specific permeability constants) for melittin. |
| popPK | Lubawy_2019 | irrelevant | 0 | 0 | The paper reports acute physiological effects (apoptosis, heart rate) and an in vitro EC50, but contains no toxicokinetic parameters such as half-life, clearance, or partition coefficients. |
| popPK | Morillo_2025 | irrelevant | 0 | 0 | The paper focuses on the engineering of an antibody-peptide hybrid for drug delivery and reports no quantitative toxicokinetic parameters (half-life, clearance, etc.) for melittin. |
| popPK | Oren_1997 | irrelevant | 0 | 0 | The paper investigates the structural and mechanistic basis of melittin's cytolytic activity in vitro (membrane interactions and lysis), reporting no quantitative toxicokinetic parameters (half-life, clearance, partition coefficients for disposition, etc.) for the whole organism. |
| popPK | Rishi_2018 | irrelevant | 0 | 0 | The paper focuses on the efficacy of a hybrid peptide K11 (containing melittin) for wound healing in mice, reporting clinical outcomes (wound closure, bacterial clearance) rather than quantitative toxicokinetic parameters (half-life, clearance, etc.) for melittin. |
| popPK | Rizkallah_2025 | irrelevant | 0 | 0 | The paper is a review of melittin-based nanomedicines for cancer therapy and does not report quantitative toxicokinetic parameters for the substance melittin_apis_mellifera. |
| popPK | Sylvestre_2021 | irrelevant | 0 | 0 | The paper focuses on the immunological response (anti-PEG antibodies) and toxicity of melittin-conjugated polymers in mice, but reports no quantitative toxicokinetic parameters such as half-life, clearance, or volume of distribution. |
| popPK | Tian_2011 | relevant | 9 | 0 | The paper explicitly states that pharmacokinetics were determined for the different melittin preparations in vivo, indicating quantitative kinetic parameters are reported, but the specific numeric values are not included in the provided evidence. |
| popPK | Vergis_2021 | irrelevant | 0 | 0 | The paper focuses on the antimicrobial efficacy of a melittin-derived peptide in a Galleria mellonella model and does not report quantitative toxicokinetic parameters (e.g., half-life, clearance, partition coefficients) for melittin. |
| popPK | Walsh_2011 | irrelevant | 0 | 0 | The paper reports on cytotoxicity screening (high content analysis) of melittin but does not provide any quantitative toxicokinetic parameters (e.g., half-life, clearance, rate constants). |
| popPK | Xie_2026 | irrelevant | 0 | 0 | The paper describes a DNA nanoswitch for the controlled activation of melittin in infection models and reports efficacy/hemolysis outcomes, but contains no quantitative toxicokinetic parameters (half-life, clearance, partition coefficients, etc.) for melittin itself. |
| popPK | Zhang_2024 | irrelevant | 0 | 0 | The paper describes the design and therapeutic efficacy of melittin-loaded nanoparticles for cancer treatment but does not report quantitative toxicokinetic parameters (e.g., half-life, clearance rates) for melittin itself. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmelittin_apis_mellifera%5D&body=Drug%3A%20melittin_apis_mellifera%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_melittin_apis_mellifera/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
