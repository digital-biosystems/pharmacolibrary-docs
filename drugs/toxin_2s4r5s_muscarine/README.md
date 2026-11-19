<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Fungal toxins&quot;,&quot;href&quot;:&quot;toxins/FUNG.md&quot;},{&quot;label&quot;:&quot;(2S,4R,5S)-Muscarine&quot;}]"></div>

# (2S,4R,5S)-Muscarine

- **generic name:** (2S,4R,5S)-Muscarine
- **T3DB:** [T3D2452](http://www.t3db.ca/toxins/T3D2452) · **PubChem:** [CID 5079496](https://pubchem.ncbi.nlm.nih.gov/compound/5079496)

## About

Main toxic constituent of the fly fungus Amanita muscaria and various Inocybe species (2S,4R,5S)-Muscarine belongs to the family of Oxolanes. These are organic compounds containing an oxolane (tetrahydrofuran) ring, which is a saturated aliphatic five-member ring containing one oxygen and five carbon atoms.

- **Category:** Fungal Toxin, Food Toxin, Natural Toxin
- **Route of exposure:** oral, dermal, inhalation, and parenteral (contaminated drugs).
- **Sources and uses:** Muscarine is only a trace compound in the fly agaric Amanita muscaria; the pharmacologically more relevant compound from this mushroom is muscimol. Mushrooms in the genera Entoloma and Mycena have also been found to contain levels of muscarine which can be dangerous if ingested. …
- **Mechanism of toxicity:** Muscarine is a competitive inhibitor. It mimics the action of the neurotransmitter acetylcholine at acetylcholine receptors.
- **Health effects:** Intoxication generally subsides within 2 hours. Death is rare, but may result from cardiac or respiratory failure in severe cases.
- **Treatment:** The specific antidote is atropine.

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D2452">T3DB T3D2452</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 300-54-9 · <a href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:522933">ChEBI 522933</a></small></p>

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
| 2026-11-15 06:49 | 7:51 | 0/0/0 | 0/0/0 | 0/0/0 | 221,267/10,565 | ollama / glm-5.3-flash | 6 | 2/4 | 6/0 | 0 |

## Coverage

- **PubMed hits:** 52 matched, 45 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Hu_1999.pdf` | Hu HZ et al., Enhancement of GABA-activated current b…, Neuroscience (1999) | pd | 4 | [10.1016/s0306-4522(98)00329-7](https://doi.org/10.1016/s0306-4522(98)00329-7) | [10199621](https://www.ncbi.nlm.nih.gov/pubmed/10199621) | metadata signals extractable PD data (EC50) |
| `DeBattista_2024.pdf` | DeBattista C et al., The Black Book of Psychotropic Dosing a…, Psychopharmacology bulletin (2024) | pgx | 7 | [10.64719/pb.4493](https://doi.org/10.64719/pb.4493) | [38993656](https://www.ncbi.nlm.nih.gov/pubmed/38993656) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |

<sub>queue written 2026-11-15 06:48 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Akaike_1989 | irrelevant | 0 | 0 | Muscarine appears only as an analytical/tool reagent that failed to induce a response; no kinetic parameters for muscarine are reported. |
| popPK | Akk_1999 | irrelevant | 1 | 7 | The numeric values are single-channel receptor activation/gating rate constants for muscarinic/nicotinic agonists at the nAChR, not toxicokinetic (ADME/disposition) parameters for muscarine itself. |
| popPK | Asano_1995 | irrelevant | 0 | 0 | The evidence contains only GROBID metadata boilerplate with no text, data, or kinetic parameters for 2s4r5s_muscarine. |
| popPK | Bungardt_1992 | irrelevant | 1 | 2 | This is a pharmacology study of muscarinic receptor subtypes in guinea-pig ileum arterioles; muscarine is an agonist tool, not a toxicokinetic subject, and no kinetic parameters (half-life, clearance, metabolism rates) are reported. |
| PGx | Cai_2004 | not_relevant | 0 | 0 | Paper characterizes neural stem cell membrane properties; muscarine response is mentioned but no gene variant effect on PK/PD parameters. |
| popPK | Castonguay_2002 | irrelevant | 0 | 0 | Muscarine appears only as an agonist applied experimentally to probe calcium stores; no kinetic parameter for muscarine is reported. |
| popPK | Chaturvedi_1978 | irrelevant | 0 | 0 | Muscarine appears only as a comparator agonist analog (5-methylfurmethide) in a chlorpromazine/calcium pharmacology study; no toxicokinetic parameters. |
| popPK | Choo_1985 | irrelevant | 0 | 0 | In vitro receptor pharmacology of muscarinic antagonists with no toxicokinetic parameters for muscarine itself; muscarine appears only in receptor nomenclature. |
| popPK | Cuevas_1997 | irrelevant | 0 | 0 | The paper reports electrophysiological receptor pharmacology (Ca2+ channel modulation by muscarine) in rat neurons, with no toxicokinetic parameters for muscarine; the only numbers are pharmacological potencies at the target receptor. |
| PGx | DeBattista_2024 | not_relevant | 0 | 0 | The paper only mentions KarXT (xanomeline/trospium) briefly; no gene variant/PGx effect on any PK/PD parameter is reported. |
| popPK | Elaeva_1997 | irrelevant | 1 | 0 | Muscarine appears only as a radioligand/receptor-binding assay reagent; no toxicokinetic parameters for muscarine itself are reported. |
| popPK | Flament_2024 | irrelevant | 1 | 5 | Concentrations measured in poisoned human cases, not toxicokinetic parameters (no half-life, clearance, rate constants etc.); only analytical validation numbers and measured concentrations are present. |
| popPK | Fuder_1985 | irrelevant | 0 | 0 | Pharmacology review of presynaptic receptor modulation with no toxicokinetic parameters for muscarine. |
| popPK | Hasselmo_1992 | irrelevant | 1 | 1 | Muscarine is used only as a pharmacological agonist in an in vitro slice electrophysiology study; no toxicokinetic parameters (half-life, clearance, partition coefficients, etc.) for muscarine are reported. |
| popPK | Hu_1999 | irrelevant | 0 | 0 | This is an electrophysiology/pharmacology study; muscarine is used as a modulator, not for toxicokinetic parameters. |
| popPK | Inoue_1991 | irrelevant | 1 | 1 | This is an in vitro electrophysiology study of muscarinic receptor currents in guinea-pig chromaffin cells; the numbers are receptor/channel pharmacology constants, not toxicokinetic parameters of muscarine disposition. |
| popPK | Inoue_1995 | irrelevant | 0 | 0 | This is an in vitro electrophysiology/pharmacology study of muscarinic receptor activation in guinea-pig chromaffin cells; all numeric values (EC50, Kd, IC50) are receptor/pharmacologic parameters, not toxicokinetic parameters of muscarine disposition (no half-life, clearance, partition coefficients, etc.). |
| popPK | Iwabuchi_1994 | irrelevant | 0 | 0 | Pharmacodynamic salivation study in rats with SNI-2011, pilocarpine and McN-A-343; no toxicokinetic parameters for 2s4r5s_muscarine. |
| popPK | Jadcherla_2002 | irrelevant | 1 | 2 | Muscarine is used as a pharmacological probe (dose-response, receptor binding) in dogs, not a toxicokinetic study; no disposition kinetic parameters for muscarine itself. |
| popPK | Kilbinger_1976 | irrelevant | 0 | 0 | Muscarine appears only as receptor type (muscarinic), not as a substance with toxicokinetic parameters. |
| popPK | Kummer_2006 | irrelevant | 0 | 0 | Muscarine is used only as an analytical standard and bronchoconstriction test agonist; no toxicokinetic parameters (half-life, clearance, rate constants, etc.) for muscarine are reported. |
| popPK | König_2009 | irrelevant | 1 | 3 | Muscarine is only used as an in vitro pharmacological stimulant of ciliary transport in mouse trachea; no toxicokinetic parameters (half-life, clearance, rate constants, etc.) for muscarine are reported. |
| popPK | Loomis_2001 | irrelevant | 0 | 0 | Muscarine appears only as an i.t. comparator with no kinetic data; parameters reported are ED50s for strychnine/bicuculline, not toxicokinetics of 2s4r5s_muscarine. |
| popPK | Matsuoka_2017 | irrelevant | 1 | 1 | Muscarine is used only as a pharmacological agonist to study channel trafficking in rat adrenal medullary cells; no toxicokinetic parameters (half-life, rate constants, clearance, etc.) are reported and no numeric values are present. |
| popPK | May_2008 | irrelevant | 0 | 0 | The paper reports PK parameters for propiverine, not 2s4r5s_muscarine, which is not the studied substance. |
| popPK | Melchiorre_1987 | irrelevant | 0 | 0 | Paper concerns methoctramine's receptor antagonism in vitro; muscarine is only an agonist tool for potency testing, with no toxicokinetic parameters for muscarine. |
| popPK | Nelson_1992 | irrelevant | 0 | 0 | Muscarine appears only as a pharmacological test agent on a snail muscle receptor; no toxicokinetic parameters for muscarine are reported. |
| popPK | Newberry_1989 | irrelevant | 0 | 0 | Pharmacological dose-response study of muscarine on isolated rat ganglion; no toxicokinetic parameters (half-life, clearance, partition coefficients, etc.) are reported. |
| popPK | Ochillo_1981 | irrelevant | 0 | 0 | Pharmacodynamic mechanism study in guinea-pig ileum with no toxicokinetic parameters for muscarine. |
| popPK | Sai_2020 | relevant | 7 | 2 | The paper reports pharmacokinetics and gamma scintigraphic biodistribution of muscarine in rabbits (plus mouse bioassays), but the numeric parameter values (blood activity time course, % injected dose per tissue) appear only in figures/tables not included in the evidence; the only half-life mentioned (6 h) belongs to 99mTc, not muscarine. |
| popPK | Sankaran_1979 | irrelevant | 1 | 1 | Pharmacodynamic/dose-response study of muscarine-induced pancreatitis in guinea pigs with no toxicokinetic parameters (no half-life, rate constants, clearance, or distribution values). |
| popPK | Shi_1997 | irrelevant | 1 | 0 | Muscarine is used as a pharmacological agonist to probe receptor-mediated contractility in dog ileum; no toxicokinetic parameters (half-life, clearance, partition coefficients, etc.) for muscarine itself are reported, and no numeric disposition values appear in the evidence. |
| popPK | Shin_2006 | irrelevant | 0 | 0 | Muscarine appears only as an experimental tool to probe muscarinic signaling; no kinetic parameters of muscarine are reported. |
| popPK | Steen_1993 | irrelevant | 0 | 0 | Muscarine appears only as a pharmacological probe applied to rat nerve fibers in vitro, with no toxicokinetic parameters of muscarine reported. |
| popPK | Strack_1976 | irrelevant | 0 | 0 | The paper concerns L-carnitine and acetylcarnitine as cholinomimetics; muscarine appears only as a pharmacological comparator, with no kinetic parameters (half-life, rate constants, partitioning, clearance) of muscarine reported. |
| popPK | Sumikawa_1983 | irrelevant | 1 | 3 | Muscarine is an agonist used to provoke responses; kinetic parameters (IC50s) belong to the anesthetics, not muscarine's toxicokinetics. |
| popPK | Tsai_1991 | irrelevant | 0 | 0 | Muscarine is only a receptor agonist comparator in an in vitro pharmacology study of berberine; no toxicokinetic parameters for muscarine. |
| popPK | Valenta_1993 | irrelevant | 0 | 0 | Muscarine appears only as a pharmacological comparator in ACh receptor studies with no toxicokinetic parameters for muscarine. |
| PGx | Vastagh_2024 | not_relevant | 2 | 5 | Muscarine effects on GnRH neuron firing/mPSC frequency are reported, but they arise from receptor subtype pharmacology, not from a gene variant/genotype/phenotype altering a PK/PD parameter of muscarine. |
| popPK | Wang_1996 | irrelevant | 0 | 3 | This is an in vitro electrophysiology/receptor pharmacology study of muscarinic modulation of ion channels, with no toxicokinetic parameters of interest (not half-life, clearance, partition coefficients etc.); the K_D is a receptor binding constant, not a TK parameter. |
| popPK | Wanke_1994 | irrelevant | 0 | 0 | Pharmacology/electrophysiology study of muscarine as an agonist in rat neurons; no toxicokinetic parameters. |
| popPK | Wessler_2007 | irrelevant | 0 | 0 | Muscarine appears only as a receptor type in a cystic fibrosis cholinergic-system study; no toxicokinetic parameters for muscarine are reported. |
| popPK | van_1993 | irrelevant | 0 | 0 | The paper is about SSRIs; 2s4r5s_muscarine appears only as a receptor name in a pharmacological context, with no kinetic parameters for it. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5B2s4r5s_muscarine%5D&body=Drug%3A%202s4r5s_muscarine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_2s4r5s_muscarine/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
