<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Chloroprocaine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Chloroprocaine_Togioka2022_reference&quot;,&quot;label&quot;:&quot;Togioka_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_chloroprocaine/Chloroprocaine_Togioka2022_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

# Chloroprocaine

- **generic name:** Chloroprocaine
- **T3DB:** [T3D3003](http://www.t3db.ca/toxins/T3D3003) · **DrugBank:** [DB01161](https://go.drugbank.com/drugs/DB01161) · **PubChem:** [CID 8612](https://pubchem.ncbi.nlm.nih.gov/compound/8612)
- **groups:** approved, investigational

## About

Chloroprocaine hydrochloride is a local anesthetic given by injection during surgical procedures and labor and delivery. Chloroprocaine, like other local anesthetics, blocks the generation and the conduction of nerve impulses, presumably by increasing the threshold for electrical excitation in the nerve, by slowing the propagation of the nerve impulse and by reducing the rate of rise of the action potential.

- **Category:** Drug, Synthetic Toxin
- **Route of exposure:** parenteral (intravenous injection). The rate of systemic absorption of local anesthetic drugs is dependent upon the total dose and concentration of drug administered, the route of administration, the vascularity of the administration site, and the presence or absence of epinephrine in the anesthetic injection.
- **Sources and uses:** For the production of local anesthesia by infiltration and peripheral nerve block. They are not to be used for lumbar or caudal epidural anesthesia.
- **Mechanism of toxicity:** Chloroprocaine acts mainly by inhibiting sodium influx through voltage gated sodium channels in the neuronal cell membrane of peripheral nerves. When the influx of sodium is interrupted, an action potential cannot arise and signal conduction is thus inhibited. …
- **Health effects:** Central Nervous System Effects: These are characterized by excitation and/or depression. Restlessness, anxiety, dizziness, tinnitus, blurred vision or tremors may occur, possibly proceeding to convulsions. …
- **Acute toxicity:** LD50: 97 mg/kg (Intravenous, Mouse)
LD50: 950 mg/kg (Subcutaneous, Mouse)

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D3003">T3DB T3D3003</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 133-16-4 · <a href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:3636">ChEBI 3636</a></small></p>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| chloroprocaine | parent | 270.757 | C13H19ClN2O2 | PubChem | [8612](https://pubchem.ncbi.nlm.nih.gov/compound/8612) | Togioka_2022 |

## Start here

> **Togioka_2022_reference** — <span class="pk-badge pk-badge--neutral">Not simulated</span> women undergoing cesarean delivery with spinal anesthesia, n = 15. [Run it in the simulator](drugs/toxin_chloroprocaine/Chloroprocaine_Togioka2022_reference.md?tab=Simulation) · [record](drugs/toxin_chloroprocaine/Chloroprocaine_Togioka2022_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Not simulated" data-sim="yes"></span><span class="pk-badge pk-badge--neutral">Not simulated</span> | [Togioka_2022_reference](drugs/toxin_chloroprocaine/Chloroprocaine_Togioka2022_reference.md) | ▶ model + simulator | retention, 1 pool | 1 | Togioka BM et al., Pharmacokinetics and Tolerability of In…, Anesthesia and analgesia (2022) | [10.1213/ANE.0000000000006064](https://doi.org/10.1213/ANE.0000000000006064) |
| <span class="pk-rf" hidden data-species="pig" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (pig), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">pig</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Allegri_2017_reference](drugs/toxin_chloroprocaine/Chloroprocaine_Allegri2017_reference.md) | — | 1-compartment (no model) | 0 | Allegri M et al., Continuous wound infusion with chloropr…, Journal of pain research (2017) | [10.2147/JPR.S139856](https://doi.org/10.2147/JPR.S139856) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=chloroprocaine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | blood | `BCHE` substrate | DrugBank actor |
| metabolism | liver | `BCHE` substrate | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: ATP1A1 (blocker), SCN1A (inhibitor), SLC6A3 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-13 04:43 | 6:38 | 1/1/0 | 0/0/0 | 0/0/0 | 294,392/23,630 | ollama / glm-5.3-flash | 8 | 1/7 | 8/0 | 0 |

## Coverage

- **PubMed hits:** 32 matched, 32 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 2  ·  extracted 1  ·  needs review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Togioka_2022.pdf` | Togioka BM et al., Pharmacokinetics and Tolerability of In…, Anesthesia and analgesia (2022) | popPK | 10 | [10.1213/ANE.0000000000006064](https://doi.org/10.1213/ANE.0000000000006064) | [35544759](https://pubmed.ncbi.nlm.nih.gov/35544759) | Human pharmacokinetic study of chloroprocaine with directly reported in vivo half-life (5.3 min) and peak plasma concentrations for the subject substance; values present in the evidence itself. |
| `Johnson_1996.pdf` | Johnson RF et al., Effects of fetal pH on local anesthetic…, Anesthesiology (1996) | popPK | 6 | [10.1097/00000542-199609000-00021](https://doi.org/10.1097/00000542-199609000-00021) | [8853092](https://pubmed.ncbi.nlm.nih.gov/8853092) | Chloroprocaine is a subject drug with maternal-to-fetal placental transfer clearances measured in an isolated human placental perfusion model, but the abstract gives no numeric values (they presumably appear in figures/tables not provided). |

<sub>queue written 2026-11-13 04:40 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Camann_1991 | irrelevant | 0 | 0 | This is an analgesia outcome study of epidural nalbuphine in post-cesarean patients, with chloroprocaine only as a local anesthetic comparator; no toxicokinetic parameters (half-life, clearance, rate constants, etc.) for chloroprocaine are reported anywhere, so it is neither relevant nor extractable. |
| popPK | Casati_2006 | irrelevant | 1 | 3 | Clinical efficacy/dose-response study of spinal anesthesia with block-duration times but no toxicokinetic parameters (no half-life, clearance, or plasma data); the times present are clinical outcomes, not kinetic parameters. |
| popPK | Columb_1997 | irrelevant | 1 | 2 | This is a pharmacodynamic efficacy study reporting an analgesic EC50/MLAC, not any toxicokinetic parameter (half-life, clearance, partitioning, metabolism); the numeric value present is an effect concentration, not a TK parameter. |
| popPK | Eng_2014 | irrelevant | 1 | 0 | Review of local anesthetic clinical use mentioning 2-chloroprocaine only qualitatively, with no kinetic parameters. |
| popPK | Grant_2000 | irrelevant | 1 | 2 | Paper reports pharmacodynamic anesthesia duration times in mice, not kinetic parameters (no half-life, clearance, rate constants) for chloroprocaine. |
| popPK | Guntz_2022 | irrelevant | 0 | 5 | This is a clinical dose-finding (ED95) efficacy study with no toxicokinetic parameters; the ED95 is pharmacodynamic dose, not a kinetic parameter. |
| popPK | Johnson_1996 | relevant | 6 | 2 | Chloroprocaine is a subject drug with maternal-to-fetal placental transfer clearances measured in an isolated human placental perfusion model, but the abstract gives no numeric values (they presumably appear in figures/tables not provided). |
| popPK | Lai_2025 | irrelevant | 2 | 5 | This is a clinical dose-finding efficacy study reporting chloroprocaine ED50/ED95 for propofol injection pain prevention, not toxicokinetic parameters (no half-life, clearance, volume of distribution, partition coefficient, Vmax/Km, or kinetic model). |
| popPK | M_2022 | irrelevant | 0 | 0 | Clinical efficacy/outcome study of spinal blockade times, not toxicokinetic parameters (no half-life, clearance, rate constants, or PK/PBPK values). |
| popPK | Mangla_2019 | irrelevant | 1 | 2 | A case report with only administered doses and qualitative PK remarks; no measured kinetic parameters or numeric concentration/time data. |
| popPK | Nau_1985 | irrelevant | 2 | 0 | A review discussing chloroprocaine qualitatively (rapid hydrolysis, short duration) with no numeric kinetic parameters for it; fetal/maternal ratios given only for amide agents. |
| popPK | Shah_2018 | irrelevant | 2 | 0 | A book chapter abstract about local anesthetics in general; no numeric chloroprocaine kinetic parameters are present, only a promise to summarize pharmacokinetics. |
| popPK | Siddaiah_2019 | irrelevant | 1 | 0 | Clinical spinal anesthesia efficacy study reporting block regression and analgesia times, not toxicokinetic parameters (no half-life, clearance, Vd, or metabolic constants for chloroprocaine). |
| popPK | Smith_2004 | irrelevant | 2 | 3 | A clinical dose-ranging anesthetic efficacy study; regression/duration times are pharmacodynamic outcomes, not toxicokinetic parameters, though values are present. |
| popPK | Snoeck_2012 | irrelevant | 0 | 0 | This is a review of articaine; chloroprocaine appears only as a clinical comparator with no kinetic parameters of its own. |
| popPK | Tucker_1979 | irrelevant | 3 | 0 | A narrative review of local anaesthetic clinical pharmacokinetics with no numeric kinetic parameters for any substance, including chloroprocaine. |
| popPK | de_1980 | irrelevant | 1 | 1 | Toxicity dose-comparison study with no kinetic parameters for chloroprocaine; only relative lethal/convulsant doses reported. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bchloroprocaine%5D&body=Drug%3A%20chloroprocaine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_chloroprocaine/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-13 04:40 UTC</sub>
