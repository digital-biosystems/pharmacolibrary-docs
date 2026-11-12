<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Animal toxins&quot;,&quot;href&quot;:&quot;toxins/ANIM.md&quot;},{&quot;label&quot;:&quot;Tyramine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Tyramine_Rafehi2019_4_hpaa&quot;,&quot;label&quot;:&quot;Rafehi_2019_4_hpaa&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_tyramine/Tyramine_Rafehi2019_4_hpaa.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# Tyramine

- **generic name:** Tyramine
- **T3DB:** [T3D4435](http://www.t3db.ca/toxins/T3D4435) · **PubChem:** [CID 5610](https://pubchem.ncbi.nlm.nih.gov/compound/5610)
- **groups:** investigational, nutraceutical

## About

Tyramine is a monoamine compound derived from the amino acid tyrosine. Tyramine is metabolized by the enzyme monoamine oxidase. In foods, it is often produced by the decarboxylation of tyrosine during fermentation or decay. …

- **Category:** Food Toxin, Natural Toxin, Animal Toxin
- **Mechanism of toxicity:** Tyramine is a cholinesterase or acetylcholinesterase (AChE) inhibitor. A cholinesterase inhibitor (or 'anticholinesterase') suppresses the action of acetylcholinesterase. …
- **Health effects:** Acute exposure to cholinesterase inhibitors can cause a cholinergic crisis characterized by severe nausea/vomiting, salivation, sweating, bradycardia, hypotension, collapse, and convulsions. Increasing muscle weakness is a possibility and may result in death if respiratory muscles are involved. …

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D4435">T3DB T3D4435</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 51-67-2 · <a href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:15760">ChEBI 15760</a></small></p>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| tyramine | parent | 137.182 | C8H11NO | PubChem | [5610](https://pubchem.ncbi.nlm.nih.gov/compound/5610) | Akanuma_2018, Faraj_1977, Rafehi_2019 |
| 4-hydroxyphenylacetic acid | metabolite | 152.149 | C8H8O3 | PubChem | [127](https://pubchem.ncbi.nlm.nih.gov/compound/127) | Rafehi_2019 |

## Start here

> **Rafehi_2019_4_hpaa** — <span class="pk-badge pk-badge--green">Reproduces paper</span> healthy volunteers, n = 88. [Run it in the simulator](drugs/toxin_tyramine/Tyramine_Rafehi2019_4_hpaa.md?tab=Simulation) · [record](drugs/toxin_tyramine/Tyramine_Rafehi2019_4_hpaa.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Reproduces paper" data-sim="yes"></span><span class="pk-badge pk-badge--green">Reproduces paper</span> | [Rafehi_2019_4_hpaa](drugs/toxin_tyramine/Tyramine_Rafehi2019_4_hpaa.md) | ▶ model + simulator | retention, 1 pool | 6 | Rafehi M et al., Highly Variable Pharmacokinetics of Tyr…, Frontiers in pharmacology (2019) | [10.3389/fphar.2019.01297](https://doi.org/10.3389/fphar.2019.01297) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub> | [↳ tyramine](drugs/toxin_tyramine/Tyramine_Rafehi2019_tyramine.md) | — | 1-compartment (no model) | 8 |  |  |
| <span class="pk-rf" hidden data-species="rat" data-age="unknown" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q22 — no SI value to build from</sub> | [Akanuma_2018_reference](drugs/toxin_tyramine/Tyramine_Akanuma2018_reference.md) | held back | 1-compartment, IV | 2 | Akanuma SI et al., Role of cationic drug-sensitive transpo…, Fluids and barriers of the… (2018) | [10.1186/s12987-017-0087-9](https://doi.org/10.1186/s12987-017-0087-9) |
| <span class="pk-rf" hidden data-species="dog" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [Faraj_1977_reference](drugs/toxin_tyramine/Tyramine_Faraj1977_reference.md) | held back | 1-compartment, IV | 2 | Faraj BA et al., Studies of the fate of tyramine in dogs…, The Journal of pharmacology… (1977) | — |
| <span class="pk-rf" hidden data-species="rabbit" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rabbit</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub> | [Lee_2024_reference](drugs/toxin_tyramine/Tyramine_Lee2024_reference.md) | — | 1-compartment (no model) | 2 | Lee S et al., Intravitreal long-term sustained ranibi…, Asian journal of pharmaceut… (2024) | [10.1016/j.ajps.2024.100947](https://doi.org/10.1016/j.ajps.2024.100947) |
| <span class="pk-rf" hidden data-species="rat" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Tchercansky_1994_reference](drugs/toxin_tyramine/Tyramine_Tchercansky1994_reference.md) | — | 1-compartment (no model) | 0 | Tchercansky DM et al., Studies of tyramine transfer and metabo…, Journal of pharmaceutical s… (1994) | [10.1002/jps.2600830421](https://doi.org/10.1002/jps.2600830421) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by qwen3.8-27b, p(non-human) 1.00).">in vitro</span> | **CYP2D6** | `Q1` · Km | metabolism | [Niwa_2019](drugs/toxin_tyramine/pgx_Niwa_2019_CYP2D6_Q1.md) | Niwa T et al., Inhibitory and Stimulatory Effects of S…, Journal of pharmacy & pharm… (2019) | [10.18433/jpps30622](https://doi.org/10.18433/jpps30622) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=tyramine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | brain | `CYP2D6` metabolism | PGx paper |
| metabolism | liver | `CYP2D6` metabolism | PGx paper |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-11 04:41 | 43:09 | 3/3/0 | 0/0/0 | 0/0/1 | 839,886/52,037 | einfracz / qwen3.8-27b | 28 | 11/12 | 28/0 | 0 |

## Coverage

- **PubMed hits:** 297 matched, 220 returned
- **screened:** 6  ·  **relevant:** 6
- **records:** 6  ·  extracted 1  ·  needs review 2  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_7 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Faraj_1977.pdf` | Faraj BA et al., Studies of the fate of tyramine in dogs…, The Journal of pharmacology… (1977) | popPK | 10 |  | [839443](https://pubmed.ncbi.nlm.nih.gov/839443) | The paper reports specific quantitative kinetic parameters for tyramine in dogs, including half-life (4.3 min), AUC, and clearance values directly in the evidence text. |
| `VanDenBerg_2003.pdf` | VanDenBerg CM et al., Tyramine pharmacokinetics and reduced b…, Journal of clinical pharmac… (2003) | popPK | 10 |  | [12817523](https://pubmed.ncbi.nlm.nih.gov/12817523) | The paper reports quantitative toxicokinetic parameters for tyramine in humans, including clearance (135 L/min), Cmax (37.7 ng/mL), and elimination half-life (0.533 hours), all present in the text. |
| `Ke_2018.pdf` | Ke R et al., Profiling wines in China for the biogen…, Food chemistry (2018) | popPK | 9 | [10.1016/j.foodchem.2018.01.040](https://doi.org/10.1016/j.foodchem.2018.01.040) | [29412921](https://pubmed.ncbi.nlm.nih.gov/29412921) | The paper reports using a PBPK model for tyramine in humans, but the evidence provided contains only the abstract; no numeric kinetic parameters (clearance, half-life, etc.) are visible in the text. |
| `Tchercansky_1994.pdf` | Tchercansky DM et al., Studies of tyramine transfer and metabo…, Journal of pharmaceutical s… (1994) | popPK | 9 | [10.1002/jps.2600830421](https://doi.org/10.1002/jps.2600830421) | [8046612](https://pubmed.ncbi.nlm.nih.gov/8046612) | The study reports quantitative in vitro kinetic parameters for tyramine in rats, including extraction rates (30-40%) and effects of flow rate, although specific rate constants are not explicitly listed. |
| `Van_1995.pdf` | Van Huysse JW et al., In vivo renal production and tubular se…, The Journal of pharmacology… (1995) | popPK | 9 |  | [7891331](https://pubmed.ncbi.nlm.nih.gov/7891331) | The paper provides quantitative renal clearance rates and excretion data for para-tyramine (a tyramine isomer) in rabbits, which constitutes toxicokinetic parameters. |
| `Antal_2001.pdf` | Antal EJ et al., Linezolid, a novel oxazolidinone antibi…, Journal of clinical pharmac… (2001) | popPK | 7 | [10.1177/00912700122010294](https://doi.org/10.1177/00912700122010294) | [11361052](https://pubmed.ncbi.nlm.nih.gov/11361052) | The abstract reports that linezolid and moclobemide significantly decreased tyramine oral clearance compared to placebo, indicating quantitative kinetic parameters are available, though specific numeric values are likely in the full text tables rather than this abstract. |
| `Huebert_1994.pdf` | Huebert ND et al., Kinetics and metabolism of p-tyramine d…, Clinical pharmacology and t… (1994) | popPK | 5 | [10.1038/clpt.1994.175](https://doi.org/10.1038/clpt.1994.175) | [7955818](https://pubmed.ncbi.nlm.nih.gov/7955818) | The paper investigates p-tyramine (a distinct isomer from the target tyramine, which is 3,4-dihydroxyphenylethylamine), and no specific numeric kinetic values are provided in the text. |

<sub>queue written 2026-11-11 04:27 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Agnieszka_2022 | irrelevant | 0 | 0 | The paper is a systematic review on drug-food interactions for Parkinson's disease medications (primarily levodopa), and tyramine is mentioned only in the context of MAO-B inhibitor selectivity or dietary protein composition, with no quantitative toxicokinetic parameters provided for tyramine itself. |
| popPK | Ajavon_2010 | irrelevant | 0 | 0 | The study investigates the renal excretion of clofarabine, using tyramine only as a co-perfused inhibitor/comparator, not as the subject substance. |
| popPK | Ali_1984 | irrelevant | 2 | 0 | The paper describes a radiopharmaceutical conjugate (99mTc-Tyramine Iminodiacetic acid) for imaging, not the toxicokinetics of tyramine itself, and provides no specific numeric kinetic parameters. |
| popPK | Ali_1988 | irrelevant | 0 | 0 | The paper describes the synthesis and labeling of antibodies with a tyramine cellobiose adduct, not the toxicokinetics of tyramine itself. |
| popPK | Ali_1990 | irrelevant | 0 | 0 | Tyramine is used solely as a component of a radio-iodination reagent (tyramine cellobiose/glucose) for labeling antibodies, and no kinetic parameters for tyramine itself are reported. |
| PGx | Anari_1997 | not_relevant | 0 | 0 | The paper describes general CYP activation mechanisms using tyramine as a MAO substrate to generate H2O2, not the pharmacokinetics or pharmacodynamics of tyramine as a drug. |
| popPK | Antal_2001 | relevant | 7 | 3 | The abstract reports that linezolid and moclobemide significantly decreased tyramine oral clearance compared to placebo, indicating quantitative kinetic parameters are available, though specific numeric values are likely in the full text tables rather than this abstract. |
| popPK | Bashore_2019 | irrelevant | 0 | 0 | Tyramine is used solely as a chemical moiety in the radiolabel (125I-tyramine cellobiose) for HDL proteins, not as the subject substance for toxicokinetic analysis. |
| PGx | Bashore_2019 | not_relevant | 0 | 0 | The paper investigates the role of Abca1 in cholesterol transport using 125I-tyramine as a radiolabel for HDL proteins, not as a pharmacological agent; it does not report pharmacogenomic effects on tyramine PK/PD. |
| popPK | Benedetti_2001 | irrelevant | 0 | 0 | The paper is a review of amine oxidases in xenobiotic metabolism and does not report specific quantitative toxicokinetic parameters for tyramine itself. |
| PGx | Benedetti_2001 | not_relevant | 0 | 0 | The paper is a general review on the metabolism of xenobiotics by amine oxidases and does not report any specific pharmacogenomic effects on the PK/PD parameters of tyramine. |
| popPK | Bertolotti_2001 | irrelevant | 0 | 0 | Tyramine is used solely as a chemical label for the lipid marker (tyramine-cellobiose lipoprotein) to measure LDL clearance, not as the subject substance for toxicokinetic analysis. |
| popPK | Bichler_1993 | irrelevant | 0 | 0 | The paper studies the catabolism of hirudin using a radiolabel containing tyramine, meaning tyramine is an analytical reagent/co-exposure rather than the subject substance. |
| popPK | Bied_2015 | irrelevant | 0 | 0 | The paper is a review of selegiline's clinical efficacy and safety, mentioning tyramine only in the context of drug interaction risk, without providing any quantitative toxicokinetic parameters for tyramine. |
| popPK | Blumenstock_1993 | irrelevant | 0 | 0 | The paper studies the kinetics of a gelatin conjugate (125I-DLT-gelatin) as a model for collagen debris, not tyramine as a subject substance. |
| popPK | Bomzon_1975 | irrelevant | 0 | 0 | The paper studies the hemodynamic effect of tyramine infusion on renal blood flow distribution in baboons, reporting no toxicokinetic parameters (half-life, clearance, etc.) for tyramine. |
| PGx | Bonnet_2003 | not_relevant | 0 | 0 | The paper discusses moclobemide, a MAO-A inhibitor, and its metabolic interactions with tyramine, but does not report how genetic variants affect the PK/PD of tyramine itself. |
| popPK | Briant_1974 | irrelevant | 0 | 0 | The paper studies a tricyclic antidepressant (Ciba 34276-Ba), and tyramine is only used as a diagnostic probe to assess drug interactions (tyramine responsiveness), with no kinetic parameters reported for tyramine itself. |
| PGx | Bromek_2010 | not_relevant | 0 | 0 | The study investigates CYP2D-mediated synthesis of dopamine (a physiological pathway) in vitro rather than the pharmacokinetic or pharmacodynamic profile of tyramine as an administered drug. |
| popPK | Bunzow_2001 | irrelevant | 0 | 0 | The paper characterizes the pharmacology of a receptor (agonism) and does not report any quantitative toxicokinetic parameters (e.g., half-life, clearance) for tyramine. |
| popPK | Cain_2005 | irrelevant | 0 | 0 | Tyramine is used only as a radiolabel for lipoprotein [a], not as the subject substance for kinetic parameter extraction. |
| popPK | Cao_2020 | irrelevant | 0 | 0 | Tyramine is used solely as an experimental agent to validate the norepinephrine transporter (NET) assay, and no toxicokinetic parameters for tyramine itself are reported. |
| popPK | Cardona_1999 | irrelevant | 0 | 0 | The paper is a general review of drug-food interactions that mentions tyramine only as a historical example of an interaction with MAOIs, providing no quantitative toxicokinetic parameters for tyramine. |
| PGx | Cardona_1999 | not_relevant | 0 | 0 | The text discusses general drug-food interactions and historical examples but does not report any pharmacogenomic effects on tyramine. |
| PGx | Cashman_1997 | not_relevant | 0 | 0 | The paper investigates the impact of FMO3 gene variants on the metabolism of trimethylamine and tyramine, but tyramine is a probe substrate in this context, not a drug for which a clinical PK/PD pharmacogenomic effect is being reported for human therapeutic use. |
| popPK | Chang_1991 | irrelevant | 0 | 0 | The study focuses on the toxicokinetics of norepinephrine (NE), using tyramine only as a pharmacological tool to displace NE from neuronal stores, rather than measuring tyramine's own disposition parameters. |
| popPK | Chang_2020 | irrelevant | 0 | 0 | The paper is a study on the physiological effects of tyramine in prawns and does not report quantitative toxicokinetic parameters such as half-life, clearance, or partition coefficients for tyramine. |
| popPK | Chen_2006 | irrelevant | 0 | 0 | The paper is a review of rasagiline's pharmacokinetics, and tyramine is mentioned only in the context of dietary restriction, not as the subject of kinetic analysis. |
| popPK | Cohen_1981 | irrelevant | 0 | 0 | The paper investigates hemodynamic responses to various agents, using tyramine only as a tool to induce sympathetic vasoconstriction, and reports no toxicokinetic parameters (half-life, clearance, etc.) for tyramine. |
| popPK | Coleman_1998 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for LY309887, not tyramine, which is only mentioned as part of the tracer preparation (adduct of LY309887 with p-tyramine). |
| popPK | Coppen_1979 | irrelevant | 0 | 0 | The paper focuses on amitriptyline pharmacokinetics and uses tyramine only as a functional probe for noradrenaline reuptake, reporting no kinetic parameters for tyramine itself. |
| popPK | Darney_2021 | irrelevant | 0 | 0 | The paper is a meta-analysis of CYP2D6 probe substrates and mentions tyramine only as an endogenous substrate in the background, without providing any specific quantitative kinetic parameters for tyramine itself. |
| PGx | Darney_2021 | not_relevant | 1 | 0 | The paper focuses on risk assessment frameworks and CYP2D6 probe substrates, mentioning tyramine only as a general example without providing specific pharmacokinetic data or variant effects for tyramine itself. |
| popPK | Demignot_1991 | irrelevant | 0 | 0 | The paper studies the kinetics of a monoclonal antibody and its Fab fragment in mice, using tyramine only as a component of a residualizing radiolabel (dilactitol-125I-tyramine) to track degradation, not as the subject substance for toxicokinetic parameter extraction. |
| popPK | Dierig_2023 | irrelevant | 0 | 0 | The paper is a clinical trial protocol for delpazolid (an anti-TB drug) where tyramine is mentioned only in the context of a safety exclusion (pressor response) and dietary restriction, with no kinetic parameters reported for tyramine itself. |
| popPK | Dingemanse_1997 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for the subject substance lazabemide, while tyramine is used only as a challenge agent in a pharmacodynamic test. |
| popPK | Dingemanse_1998 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of moclobemide, using tyramine only as a probe for pressor response in an interaction study, with no kinetic parameters reported for tyramine itself. |
| popPK | Dollery_1983 | irrelevant | 2 | 3 | The paper reports concentration-effect relationships (pressor thresholds) and qualitative changes in absorption/clearance, but does not provide quantitative pharmacokinetic parameters (half-life, clearance values, Vd, rate constants) for tyramine itself. |
| popPK | Dostert_1997 | irrelevant | 0 | 0 | The paper is a review of reboxetine pharmacokinetics, with tyramine mentioned only as a substance whose induced reactions reboxetine might protect against, without reporting any kinetic parameters for tyramine. |
| popPK | Dueland_1990 | irrelevant | 0 | 0 | Tyramine is used solely as a chemical moiety in the radiolabel (tyramine-cellobiose) to tag vitamin D binding protein, not as the subject substance for toxicokinetic study. |
| popPK | FRANZEN_1963 | irrelevant | 0 | 0 | no_text gate: only 92 chars of text extracted (&lt; 400) |
| popPK | Findlay_1984 | irrelevant | 0 | 0 | The paper reports kinetic parameters for triprolidine, while tyramine is used only as a chemical linker to create the radioiodinated hapten for the immunoassay. |
| popPK | Flanagan_2013 | irrelevant | 0 | 0 | The study focuses on the MAO inhibitory properties and pressor response to tyramine (a probe), not the quantitative toxicokinetic parameters of tyramine itself. |
| PGx | Funae_2003 | not_relevant | 0 | 0 | The paper describes the enzyme kinetics of CYP2D4/2D6 metabolizing tyramine in brain tissue but does not report how genetic variants or phenotypes alter a specific PK/PD parameter of a drug. |
| PGx | Garland_2002 | not_relevant | 2 | 0 | The text discusses tyramine resistance in a patient with a NET mutation as a diagnostic/phenotypic marker, but does not report the effect of the genotype on the PK/PD parameters of tyramine itself. |
| PGx | George_1981 | not_relevant | 0 | 0 | The paper is a review of general GI drug metabolism and mentions tyramine only as an example of oxidative deamination, without reporting any pharmacogenomic effects on its PK or PD parameters. |
| popPK | Ghose_1980 | irrelevant | 0 | 0 | Tyramine is used as a probe in a pharmacodynamic test for amitriptyline, but no quantitative kinetic parameters for tyramine itself are reported. |
| popPK | Goodnick_1994 | irrelevant | 0 | 0 | The paper discusses pharmacokinetics of antidepressants and mentions tyramine only in the context of drug interactions with MAOIs, without providing any quantitative kinetic parameters for tyramine itself. |
| popPK | Guay_2006 | irrelevant | 0 | 0 | The paper is a review of rasagiline pharmacokinetics where tyramine is mentioned only in the context of dietary restrictions, with no kinetic parameters reported for tyramine itself. |
| PGx | Guay_2006 | not_relevant | 0 | 0 | The paper describes the general pharmacokinetics and pharmacodynamics of rasagiline and mentions the CYP1A2 enzyme involved in its metabolism, but it does not report specific pharmacogenomic effects (gene variants) on tyramine parameters. |
| popPK | Gulley_2002 | irrelevant | 0 | 0 | The paper investigates the functional down-regulation of the dopamine transporter by substrates (including tyramine) but does not report quantitative toxicokinetic parameters (such as half-life, clearance, or partition coefficients) for tyramine itself. |
| popPK | Gurel_2001 | irrelevant | 0 | 0 | Tyramine is used solely as a chemical reagent to create a radiolabel for surfactant protein A, not as the subject of toxicokinetic investigation. |
| popPK | Heinonen_1991 | irrelevant | 0 | 0 | The paper is a review of selegiline, and tyramine is mentioned only as a comparator for hypertensive effects, with no kinetic parameters reported for tyramine. |
| PGx | Hemmann_2016 | not_relevant | 0 | 0 | The paper describes the structural characterization of a bacterial cofactor (methylofuran) and makes no mention of pharmacokinetics or pharmacodynamics for the drug tyramine. |
| popPK | Hepburn_1995 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of recombinant soluble CD4 (sT4) in rats, using tyramine only as a tracer label for the protein, not as the subject substance. |
| popPK | Herth_2009 | irrelevant | 0 | 0 | Tyramine is used as a chemical reagent to synthesize polymer precursors, not as the subject substance for toxicokinetic analysis. |
| PGx | Hiroi_1998 | not_relevant | 0 | 0 | The paper describes the metabolic activity of the CYP2D6 enzyme on the endogenous trace amine tyramine but does not report pharmacogenomic effects on PK/PD parameters for tyramine as a drug. |
| popPK | Hsu_2024 | irrelevant | 0 | 0 | The paper studies the expression of octopamine/tyramine receptors in shrimp under thermal stress, not the toxicokinetic disposition of tyramine. |
| PGx | Hu_1992 | not_relevant | 0 | 0 | The paper discusses tyramine only as a chemical label for radiolabeling, not as a drug, and does not report pharmacogenomic effects on its pharmacokinetics or pharmacodynamics. |
| popPK | Huebert_1994 | irrelevant | 5 | 2 | The paper investigates p-tyramine (a distinct isomer from the target tyramine, which is 3,4-dihydroxyphenylethylamine), and no specific numeric kinetic values are provided in the text. |
| popPK | Hugues_1988 | irrelevant | 0 | 0 | The paper is a review of antitubercular drug interactions, mentioning tyramine only as a dietary compound involved in a qualitative drug-food interaction (with MAOI) without reporting any quantitative toxicokinetic parameters. |
| popPK | Hunt_1992 | irrelevant | 0 | 0 | Tyramine is used here only as an iodinating reagent for the LDL tracer (tyramine-cellobiose-LDL), and the kinetic parameters measured are for LDL metabolism, not for tyramine itself. |
| popPK | Hutchinson_1994 | irrelevant | 0 | 0 | Tyramine is used only as a chemical component of the radiotracer (125I-tyramine cellobiose) for labeling proteins, not as the subject substance for toxicokinetic study. |
| popPK | Hysing_1992 | irrelevant | 0 | 0 | Tyramine is used solely as a labeling reagent (residualizing label) for insulin, and the kinetic parameters reported pertain to insulin, not tyramine. |
| popPK | Jacob_1999 | irrelevant | 0 | 0 | Tyramine is used as a pharmacological provocation agent to assess norepinephrine kinetics and autonomic function, not as the subject substance for toxicokinetic parameter extraction. |
| popPK | Jalessi_2024 | irrelevant | 0 | 0 | Tyramine is used as a chemical modifier for the polymer carrier, not as the subject substance for toxicokinetic study. |
| popPK | Jiang_1978 | irrelevant | 0 | 0 | The paper studies radioiodinated beta-adrenoceptor blockers that contain tyramine as a structural moiety, not tyramine itself as the subject substance. |
| popPK | Kaczmarczyk_2005 | irrelevant | 0 | 0 | The paper studies the toxicokinetics of bikunin, using 125I-tyramine cellobiose only as a radiolabeling reagent, not as the subject substance. |
| popPK | Kalsner_1969 | irrelevant | 0 | 0 | The study focuses on noradrenaline disposition and the effects of GD-131 on sympathomimetic responses, using tyramine only as a secondary functional probe without reporting specific kinetic parameters for it. |
| popPK | Kaneo_2005 | irrelevant | 0 | 0 | The paper studies the toxicokinetics of poly(vinyl alcohol) (PVA), using tyramine only as a chemical linker for radiolabeling (125I-labeled tyramine residues), not as the subject substance. |
| popPK | Ke_2018 | relevant | 9 | 0 | The paper reports using a PBPK model for tyramine in humans, but the evidence provided contains only the abstract; no numeric kinetic parameters (clearance, half-life, etc.) are visible in the text. |
| popPK | Kuiper_1995 | irrelevant | 0 | 0 | The paper reports the pharmacokinetics of the plasminogen activator reteplase (BM 06.022) in rats, using 125I-tyramine cellobiose merely as a radioactive label, not studying tyramine itself. |
| popPK | Kuo_2019 | irrelevant | 0 | 0 | The paper studies tyramine's immunomodulatory effects in shrimp and reports no quantitative toxicokinetic parameters (e.g., clearance, half-life, distribution). |
| popPK | Kuo_2021 | irrelevant | 0 | 0 | The paper investigates the function of tyrosine decarboxylase in shrimp immune response and biogenic amine synthesis, reporting no toxicokinetic parameters (such as half-life, clearance, or partition coefficients) for tyramine. |
| popPK | Kuo_2022 | irrelevant | 0 | 0 | The study reports haemolymph concentrations of tyramine and immune/metabolic outcomes in prawns but provides no quantitative toxicokinetic parameters (e.g., half-life, clearance, partition coefficients). |
| popPK | Lang_1991 | irrelevant | 0 | 0 | The paper investigates the renal natriuretic response to a pressor dose of tyramine, but contains no quantitative toxicokinetic parameters (such as half-life, clearance, or concentration) for tyramine itself. |
| popPK | Lang_1993 | irrelevant | 0 | 0 | The paper is a physiological study on renal sodium handling using tyramine as a pharmacological tool, and it reports no toxicokinetic parameters (e.g., clearance, half-life, or distribution volume) for tyramine itself. |
| PGx | Larsen_2015 | not_relevant | 0 | 0 | The paper discusses the safety and dosing of isocarboxazide in depression but does not report a pharmacogenomic effect on the PK or PD of tyramine. |
| popPK | Ledonne_2011 | irrelevant | 0 | 0 | The paper is a review of electrophysiological mechanisms of trace amines on neurons and does not report quantitative toxicokinetic parameters (e.g., clearance, half-life, Vd) for tyramine disposition in vivo. |
| popPK | Lee_2005 | irrelevant | 0 | 0 | Tyramine is used only as part of the radiolabel (tyramine cellobiose) to track HDL particles, not as the subject substance for toxicokinetic analysis. |
| popPK | Lee_2024 | irrelevant | 0 | 0 | The paper reports kinetic parameters for ranibizumab, with tyramine appearing only as a chemical crosslinker for the hydrogel formulation, not as the subject substance. |
| popPK | Leite_2023 | irrelevant | 0 | 0 | The paper develops an analytical method to quantify tyramine in plant tissues and contains no toxicokinetic parameters such as half-life, clearance, or distribution volume for tyramine. |
| popPK | Lelievre_1993 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for the drug S 12363, not tyramine, which appears only as a chemical moiety in the radiolabel. |
| popPK | Li_2012 | irrelevant | 0 | 0 | Tyramine is used solely as a chemical moiety for labeling the nanoparticles, not as the subject substance for toxicokinetic analysis. |
| popPK | Li_2017 | irrelevant | 0 | 0 | Tyramine appears only as a co-exposure or comparator (specifically 3-Methoxy-p-tyramine Hydrochloride) alongside other alkaloids; the paper does not report specific quantitative kinetic parameters for tyramine itself as the primary subject. |
| PGx | Li_2018 | not_relevant | 0 | 0 | The study evaluates the safety and safety of a bacterial strain (Enterococcus durans) rather than pharmacogenomics of a drug; while tyramine production is mentioned, it is a bacterial metabolite, not the PK/PD of a drug in humans or animals influenced by host genetics. |
| popPK | Liu_2024 | irrelevant | 0 | 0 | The paper uses tyramine only as a chemical modifier for platinum nanoclusters to enhance tumor retention and does not report any kinetic parameters (half-life, clearance, etc.) for tyramine itself. |
| popPK | Ly_1992 | irrelevant | 0 | 0 | Tyramine is used only as an analytical reagent (in tyramine-cellobiose iodination) to label chylomicrons, and the kinetic parameters reported refer to the clearance of chylomicrons, not tyramine itself. |
| popPK | Ma_2025 | irrelevant | 0 | 0 | The paper describes tyramine as a component of a hydrogel matrix for extracellular vesicle delivery, not as a subject substance for toxicokinetic parameter measurement. |
| popPK | Malsch_1995 | irrelevant | 0 | 0 | Tyramine appears only as a conjugated component (tag) for a low molecular mass heparin derivative, not as the subject substance with its own independent kinetic parameters. |
| popPK | Mamo_1994 | irrelevant | 0 | 0 | Tyramine appears solely as part of the radiolabel "tyramine cellobiose" used to tag lipoproteins, not as the subject substance. |
| popPK | Maxwell_1988 | irrelevant | 0 | 0 | The paper uses tyramine solely as part of a residualizing label (inulin-125I-tyramine) for protein catabolism studies, and reports kinetics for the labeled proteins (asialofetuin, albumin) rather than the tyramine substance itself. |
| PGx | Mayersohn_1995 | not_relevant | 0 | 0 | The paper discusses the clinical pharmacokinetics of moclobemide, not tyramine, and reports no pharmacogenomic data or gene variant effects. |
| PGx | McFadden_1996 | not_relevant | 1 | 0 | The paper discusses impaired sulfation as a potential cause of intolerance to tyramine but does not report specific pharmacogenomic effects on tyramine PK or PD parameters. |
| popPK | Mergenhagen_2020 | irrelevant | 0 | 0 | The paper is a review of alcohol-antibiotic interactions where tyramine is mentioned only as a dietary component of alcohol, with no kinetic parameters for tyramine reported. |
| popPK | Mesileya_2025 | irrelevant | 0 | 0 | The paper reports in silico ADMET predictions for Tinospora cordifolia phytochemicals (including tyramine conjugates like N-trans-caffeoyl tyramine) against a parasite enzyme, not measured toxicokinetic parameters for tyramine itself in a biological system. |
| popPK | Minja_2025 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for delpazolid, not tyramine, which is only mentioned regarding potential adverse events (pressor response). |
| popPK | Moerlein_1988 | irrelevant | 0 | 0 | Tyramine is present only as a chemical moiety (tyramine-cellobiose) within a radiolabeled LDL complex, not as the subject substance for kinetic analysis. |
| popPK | Moldoveanu_1990 | irrelevant | 0 | 0 | Tyramine is used solely as an analytical radioiodination reagent (label) for IgA proteins, not as the subject substance for kinetic parameter determination. |
| popPK | Morin_2002 | irrelevant | 2 | 0 | The paper describes the metabolic pathway and glucose uptake effects of tyramine but does not report quantitative toxicokinetic parameters such as half-life, clearance, or rate constants for tyramine disposition. |
| PGx | Niwa_2004 | not_relevant | 0 | 0 | The paper studies the metabolism of endogenous substrates (like p-tyramine and progesterone) by CYP2D6 variants, not the pharmacokinetic or pharmacodynamic parameters of the exogenous drug tyramine. |
| popPK | Niwa_2009 | irrelevant | 2 | 0 | The paper is a review summarizing CYP450 kinetic parameters (Km, Vmax) for tyramine metabolism but does not provide specific numeric values or in vivo toxicokinetic data in the text. |
| PGx | Niwa_2009 | not_relevant | 0 | 0 | The paper is a review summarizing the metabolic kinetics of endogenous substrates like tyramine by P450 enzymes but does not report specific pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters. |
| PGx | Niwa_2016 | not_relevant | 0 | 0 | The paper investigates the inhibition of CYP enzymes by penicillin antibiotics using p-tyramine as a probe substrate, but it does not report any effect of a gene variant/genotype on the pharmacokinetic or pharmacodynamic parameters of tyramine. |
| PGx | Niwa_2017 | not_relevant | 0 | 0 | The paper investigates the effect of CYP2D6 polymorphisms on the metabolism of p-tyramine to dopamine, not the pharmacokinetics or pharmacodynamics of tyramine itself as a drug or substance of interest in the requested context. |
| PGx | Niwa_2018 | not_relevant | 1 | 8 | The study investigates the effect of CYP2D6 polymorphisms on the metabolism of a substrate (p-tyramine) and the inhibitory effects of antidepressants on that reaction, rather than reporting the PK/PD profile of the drug tyramine itself. |
| PGx | Niwa_2021 | not_relevant | 0 | 0 | The paper focuses on p-tyramine as a substrate for enzyme kinetics (CYP2D6), not the pharmacokinetics or pharmacodynamics of tyramine itself. |
| PGx | Niwa_2021_2 | not_relevant | 0 | 0 | The paper investigates the metabolism of endogenous steroids and tyramine, but does not report a pharmacogenomic effect on the PK/PD of a specific pharmaceutical drug. |
| PGx | Niwa_2024 | not_relevant | 0 | 0 | The paper discusses the interaction between adrenaline and antipsychotic drugs, not the pharmacokinetics or pharmacodynamics of tyramine, and does not report pharmacogenomic effects. |
| PGx | Niwa_2024_2 | not_relevant | 4 | 6 | The paper studies CYP2D6 variants' effect on dopamine formation from p-tyramine in vitro, which is a metabolic/biochemical interaction study, not a clinical pharmacokinetic or pharmacodynamic parameter of tyramine in humans. |
| popPK | Ord_1992 | irrelevant | 0 | 0 | Tyramine appears only as a chemical component of the radiolabel (dilactitol tyramine), not as the subject of toxicokinetic investigation. |
| PGx | Orosco_1992 | not_relevant | 0 | 0 | The study investigates insulin's effect on striatal dopamine levels, not the pharmacokinetics or pharmacodynamics of the drug tyramine. |
| popPK | Out_2004 | irrelevant | 0 | 0 | Tyramine is used solely as a radiolabeling reagent (tyramine cellobiose) for HDL tracking in a lipid metabolism study, not as the subject substance. |
| PGx | Palacios_2020 | not_relevant | 0 | 0 | The paper investigates the association between plasma metabolites (including tyramine O-sulfate) and cognitive function, not how a genetic variant affects the pharmacokinetics or pharmacodynamics of tyramine. |
| popPK | Parhofer_1990 | irrelevant | 0 | 0 | Tyramine is used only as an analytical reagent (part of the radioiodinated dilactitol tyramine label) for studying lipoprotein kinetics, not as the subject substance. |
| popPK | Piazolo_1994 | irrelevant | 0 | 0 | Tyramine appears solely as a chemical linker in a fluorescent-labeled heparin conjugate, not as the subject substance for toxicokinetic parameter extraction. |
| popPK | Pizzinat_1999 | relevant | 4 | 8 | The paper reports Vmax and Km for the uptake of the MAO substrate tyramine into human adipocytes, providing quantitative metabolic parameters for tyramine as the subject substance. |
| popPK | Pyakurel_2016 | irrelevant | 0 | 0 | The study focuses on octopamine release in Drosophila, using tyramine only as a precursor mentioned in the context of ensuring signal specificity, not as the subject of toxicokinetic analysis. |
| PGx | Rafehi_2019 | not_relevant | 0 | 0 | The study found that genetic polymorphisms in OCT1, CYP2D6, and MAO-A did not significantly affect tyramine pharmacokinetics or pharmacodynamics. |
| popPK | Reagan_1990 | irrelevant | 0 | 0 | Tyramine is used solely as an analytical reagent to create the radiolabel (125I-tyramine cellobiose) for LDL, and no kinetic parameters for tyramine itself are reported. |
| popPK | Ren_2026 | irrelevant | 0 | 0 | The paper is a review of CYP enzymes in Parkinson's disease and mentions tyramine only as a substrate for CYP2D6 in a mechanistic context without providing any quantitative toxicokinetic parameters (half-life, clearance, etc.). |
| PGx | Ren_2026 | not_relevant | 1 | 0 | The paper is a review of Parkinson's disease pathogenesis and CYP roles, not a pharmacogenomic study reporting quantitative changes in the PK or PD parameters of the drug tyramine based on genotype. |
| PGx | Ribeiro_2019 | not_relevant | 0 | 0 | The study investigates the association between CYP2D6 genotype and pain scores, hypothesizing a link via tyramine metabolism, but does not report measured pharmacokinetic or pharmacodynamic parameters of tyramine itself. |
| popPK | Ricken_2017 | irrelevant | 0 | 0 | The paper focuses on the clinical pharmacology and meta-analysis of tranylcypromine (TCP), mentioning tyramine only in the context of dietary restrictions due to drug interactions, without providing any quantitative toxicokinetic parameters for tyramine itself. |
| PGx | Robertson_2001 | not_relevant | 5 | 1 | The paper describes a genetic defect in the norepinephrine transporter (NET) that affects endogenous norepinephrine handling and tyramine *responsiveness* (PD), but it does not report a pharmacogenomic effect on the PK or PD parameters of the drug tyramine itself (tyramine is used here as a diagnostic probe for NET function, not as the drug of interest whose PK/PD is being modulated by the genotype in a pharmacogenomic context). |
| popPK | Rosendorff_1976 | irrelevant | 1 | 0 | The paper investigates the effect of tyramine on local cerebral blood flow (a physiological/pharmacodynamic outcome) rather than reporting quantitative kinetic parameters (such as clearance, half-life, or distribution) for the disposition of tyramine. |
| popPK | Rosenzweig_1998 | irrelevant | 0 | 0 | The paper reports the pharmacokinetics of befloxatone, while tyramine is only used as a co-exposure to test the drug's MAO-A inhibitory properties and safety. |
| popPK | Rovei_1994 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics and pharmacodynamics of befloxatone, using tyramine only as a behavioral probe for MAO inhibition rather than reporting kinetic parameters for tyramine itself. |
| popPK | Rudnicki_2024 | irrelevant | 0 | 0 | The paper focuses on electrochemical analysis of phenylethylamine (PEA) in milk and tyramine serves only as a co-exposure/comparator for interference checks, providing no toxicokinetic parameters for tyramine. |
| popPK | Schreyer_1994 | irrelevant | 0 | 0 | Tyramine appears only as a radiochemical label (tyramine cellobiose) for apolipoprotein A-I, not as the subject substance for which kinetic parameters are reported. |
| PGx | Schyman_2011 | not_relevant | 0 | 0 | The paper describes the molecular mechanism of tyramine conversion by CYP2D6 but does not report pharmacogenomic associations or clinical PK/PD data. |
| popPK | Schömig_2006 | irrelevant | 2 | 0 | The paper is a review that only reports relative transport efficiency ranges for tyramine (20-70% relative to MPP+) without providing the absolute numeric clearance values or kinetic parameters. |
| popPK | Shafi_2000 | irrelevant | 0 | 0 | Tyramine is only used as a label (tyramine cellobiose) for LDL tracking, not as the subject substance for kinetic parameter extraction. |
| popPK | Shafi_2000_2 | irrelevant | 0 | 0 | Tyramine cellobiose is used as a radioactive label for LDL, not as the subject substance, and the paper reports lipid/cholesterol kinetics, not tyramine toxicokinetics. |
| popPK | Shafi_2002 | irrelevant | 0 | 0 | Tyramine is used only as a chemical label for LDL in this study on reserpine's effects in rabbits; no kinetic parameters for tyramine itself are reported. |
| popPK | Shih_2000 | irrelevant | 0 | 0 | Tyramine is mentioned only as a chemical linker component in a radiolabel (131I-dilactitol-tyramine) for an antibody, not as the subject substance for kinetic parameter measurement. |
| popPK | Smedsrød_1990 | irrelevant | 0 | 0 | The study investigates the kinetics of C-terminal propeptide of type I procollagen (PICP), using tyramine cellobiose merely as a labelling reagent, not as the subject substance. |
| popPK | Solomon_1975 | irrelevant | 0 | 0 | Tyramine is used only as a comparator agonist to characterize mercury-induced catecholamine release; no kinetic parameters for tyramine are reported. |
| popPK | Stehle_1992 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of heparin labeled with tyramine, where tyramine serves merely as a chemical linker for radiolabeling, not as the subject of toxicokinetic investigation. |
| popPK | Stein_1997 | irrelevant | 0 | 0 | Tyramine appears only as a component of a control radiolabel (125I-dilactitol-tyramine) and the paper focuses on antibody kinetics, not tyramine toxicokinetics. |
| popPK | Strobel_1985 | irrelevant | 0 | 0 | The paper focuses on the kinetics of a radioactive label (125I-tyramine glycoconjugate) used to track protein catabolism in rats; tyramine is not the subject of the toxicokinetic study but a component of the tracer, and no specific kinetic parameters for tyramine as a xenobiotic are reported. |
| popPK | Strobel_1986 | irrelevant | 0 | 0 | Tyramine is used solely as an analytical reagent (radioactive label) for albumin, not as the subject substance for toxicokinetic evaluation. |
| popPK | Tao_2024 | irrelevant | 0 | 0 | The paper is a general review of the plant *Lindera aggregata* and its various isolated compounds, with no specific toxicokinetic parameters reported for tyramine. |
| popPK | Tsai_2025 | irrelevant | 0 | 0 | The paper reports immunological and metabolic responses (gene expression, survival, glucose levels) to tyramine administration, but does not provide quantitative toxicokinetic parameters such as half-life, clearance, or distribution coefficients. |
| popPK | Ulrich_2017 | irrelevant | 0 | 0 | The paper is a review of the pharmacology of tranylcypromine, and tyramine is mentioned only in the context of dietary restrictions for drug interactions, not as the subject substance for kinetic parameter extraction. |
| popPK | Valoti_1992 | irrelevant | 0 | 0 | The paper studies enzymatic oxidation kinetics (substrate specificity) of tyramine by intestinal peroxidase, not toxicokinetic disposition parameters (half-life, clearance, partition coefficients) in an organism. |
| popPK | Versluis_1996 | irrelevant | 0 | 0 | Tyramine appears solely as a chemical moiety within the radiolabel "tyramine cellobiose" used to track LDL, not as the subject substance being studied for toxicokinetics. |
| PGx | Vincent_2002 | not_relevant | 4 | 1 | The text describes tyramine's physiological effect in orthostatic intolerance and the effect of tyramine resistance as a general clinical feature, not as a pharmacokinetic or pharmacodynamic parameter modified by a specific gene variant for the purpose of assessing a therapeutic drug's response. |
| popPK | Wang_1997 | irrelevant | 0 | 0 | The paper investigates the effects of ethanol on dopamine dynamics, using tyramine only as an agent to induce dopamine overflow rather than as the subject of toxicokinetic analysis. |
| PGx | Wassenberg_2010 | not_relevant | 0 | 0 | The paper studies metabolic pathways in a genetic disease (AADC deficiency) and does not report pharmacokinetic or pharmacodynamic parameters of tyramine as a drug. |
| popPK | Wu_1975 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of beta-phenylethylamine, not tyramine, which is only mentioned as a minor detected metabolite. |
| popPK | Xu_2013 | irrelevant | 0 | 0 | Tyramine is used solely as a chemical monomer for hydrogel crosslinking, and the pharmacokinetic data reported are for the drug interferon-α2a, not tyramine. |
| PGx | Yu_2003 | not_relevant | 2 | 2 | The paper investigates endogenous substrate metabolism (5-methoxyindolethylamine) by CYP2D6, not the pharmacokinetic or pharmacodynamic parameters of the exogenous compound tyramine. |
| popPK | Zalutsky_1999 | irrelevant | 0 | 0 | The paper investigates the radiochemical labeling of antibodies using tyramine as a reagent, not the toxicokinetics of tyramine as a subject substance. |
| popPK | Zeng_2013 | irrelevant | 0 | 0 | The paper reports chromatographic partition coefficients for tyramine in organic-aqueous solvent systems for separation purposes, not toxicokinetic parameters in a biological system. |
| popPK | Zhanel_2015 | irrelevant | 0 | 0 | The paper is about the antibiotic tedizolid, and tyramine is only mentioned as a reagent in a challenge study to test MAO inhibition, with no kinetic parameters for tyramine reported. |
| popPK | Zhang_2017 | irrelevant | 0 | 0 | The paper uses tyramine-modified β-cyclodextrin as a delivery vehicle to treat bile acid toxicity, rather than reporting toxicokinetic parameters for tyramine itself. |
| popPK | Zhu_1997 | irrelevant | 0 | 0 | Tyramine is used only as a radiolabeling reagent for lipoprotein particles, not as the subject of toxicokinetic study. |
| PGx | Zhu_2005 | not_relevant | 0 | 0 | The study investigates the metabolic conversion of tyramine to dopamine in marine invertebrates, not the pharmacokinetics or pharmacodynamics of tyramine as a drug in humans or relevant mammalian models involving genetic variation. |
| PGx | Zhu_2025 | not_relevant | 0 | 0 | The paper investigates the effect of a traditional Chinese medicine on bone metabolism in a rat model and does not study the influence of gene variants on the pharmacokinetics or pharmacodynamics of tyramine. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btyramine%5D&body=Drug%3A%20tyramine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_tyramine/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-11 04:28 UTC</sub>
