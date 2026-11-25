<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;droperidol&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Droperidol_Foo2016_reference&quot;,&quot;label&quot;:&quot;Foo_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_droperidol/Droperidol_Foo2016_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Radke_1998_time_averaged_single_channel_conductance&quot;,&quot;label&quot;:&quot;Radke_1998 \u00b7 time averaged single channel conductance&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_droperidol/pd_Radke_1998_time_averaged_single_channel_conductance.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# droperidol

- **generic name:** droperidol
- **ATC codes:** `N05AD08`
- **DrugBank:** [DB00450](https://go.drugbank.com/drugs/DB00450) · **PubChem:** [CID 3168](https://pubchem.ncbi.nlm.nih.gov/compound/3168)
- **molar mass:** 379.4274 g/mol (C22H22FN3O2) — DrugBank
- **groups:** approved, investigational, vet_approved

## About

Droperidol is a butyrophenone antipsychotic used to treat pain and schizophreniform disorder, as well as nausea and agitation. It is usually given by intramuscular or intravenous injection. The drug is approved for human and veterinary use.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q174259](https://www.wikidata.org/wiki/Q174259), [Wikipedia](https://en.wikipedia.org/wiki/Droperidol?oldid=1384038718) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| droperidol | parent | 379.427 | C22H22FN3O2 | DrugBank | [3168](https://pubchem.ncbi.nlm.nih.gov/compound/3168) | Cooper_2018, Fischler_1986, Foo_2016 |

## Start here

> **Foo_2016_reference** — <span class="pk-badge pk-badge--blue">Simulated</span> acutely agitated patients. [Run it in the simulator](drugs/drug_droperidol/Droperidol_Foo2016_reference.md?tab=Simulation) · [record](drugs/drug_droperidol/Droperidol_Foo2016_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

<div class="pk-forest-row"><svg class="pk-forest" xmlns="http://www.w3.org/2000/svg" width="560" height="80" viewBox="0 0 560 80" role="img" aria-label="V across studies"><text x="190" y="14" font-size="12" font-weight="600">V (L, log scale)</text><line x1="190.0" y1="18" x2="190.0" y2="58" stroke="#ddd"/><text x="190.0" y="72" font-size="10" text-anchor="middle">10</text><line x1="365.0" y1="18" x2="365.0" y2="58" stroke="#ddd"/><text x="365.0" y="72" font-size="10" text-anchor="middle">100</text><line x1="540.0" y1="18" x2="540.0" y2="58" stroke="#ddd"/><text x="540.0" y="72" font-size="10" text-anchor="middle">1000</text><text x="184" y="34.0" font-size="11" text-anchor="end">Foo_2016 · V</text><circle cx="341.7" cy="30.0" r="4" fill="#78909c"><title>Foo_2016 · V: 73.6 L</title></circle><text x="184" y="50.0" font-size="11" text-anchor="end">Fischler_1986 · V/F ·/kg</text><circle cx="392.1" cy="46.0" r="4" fill="#ef6c00"><title>Fischler_1986 · V/F ·/kg: 142.8 L</title></circle></svg></div>

<sub>One dot per record, coloured by status; values converted from the record's SI value to one unit per parameter. ·/kg: given per kg in the paper, shown for a 70 kg adult. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Simulated" data-sim="yes"></span><span class="pk-badge pk-badge--blue">Simulated</span> | [Foo_2016_reference](drugs/drug_droperidol/Droperidol_Foo2016_reference.md) | ▶ model + simulator | 1-compartment, IV | 5 | Foo LK et al., Population pharmacokinetics of intramus…, British journal of clinical… (2016) | [10.1111/bcp.13093](https://doi.org/10.1111/bcp.13093) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q22 — no SI value to build from</sub> | [Fischler_1986_reference](drugs/drug_droperidol/Droperidol_Fischler1986_reference.md) | — | 1-compartment (no model) | 3 | Fischler M et al., The pharmacokinetics of droperidol in a…, Anesthesiology (1986) | [10.1097/00000542-198604000-00012](https://doi.org/10.1097/00000542-198604000-00012) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter — unit dimension conflicts with…</sub> | [Cooper_2018_reference](drugs/drug_droperidol/Droperidol_Cooper2018_reference.md) | — | 2-compartment (no model) | 5 | Cooper I et al., The pharmacokinetics of intranasal drop…, SAGE open medicine (2018) | [10.1177/2050312118813283](https://doi.org/10.1177/2050312118813283) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Flood_2002_activation_of_the_alpha7_nAChR](drugs/drug_droperidol/pd_Flood_2002_activation_of_the_alpha7_nAChR.md) | activation of the alpha7 nAChR ← droperidol · direct sigmoid Emax (Hill) effect | — | Flood P et al., Droperidol inhibits GABA(A) and neurona…, Anesthesiology (2002) | [10.1097/00000542-200204000-00029](https://doi.org/10.1097/00000542-200204000-00029) |
| <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Flood_2002_GABA_response](drugs/drug_droperidol/pd_Flood_2002_GABA_response.md) | GABA response ← droperidol · direct sigmoid Emax (Hill) effect | model (no simulator) | Flood P et al., Droperidol inhibits GABA(A) and neurona…, Anesthesiology (2002) | [10.1097/00000542-200204000-00029](https://doi.org/10.1097/00000542-200204000-00029) |
| <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Radke_1998_time_averaged_single_channel_conductance](drugs/drug_droperidol/pd_Radke_1998_time_averaged_single_channel_conductance.md) | time averaged single channel conductance ← droperidol · direct sigmoid Emax (Hill) effect | ▶ model + simulator | Radke PW et al., Molecular actions of droperidol on huma…, European journal of anaesth… (1998) | [10.1046/j.1365-2346.1998.00221.x](https://doi.org/10.1046/j.1365-2346.1998.00221.x) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-23 21:37 | 0:04 | 2/1/0 | 3/0/0 | 0/0/0 | 3,954/162 | einfracz / qwen3.8-27b | 1 | 0/1 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 3  ·  extracted 1  ·  needs review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Behne_1987 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of midazolam, with droperidol serving only as a co-administered anesthetic agent in one group. |
| PGx | Behne_1987 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics of midazolam under different anesthetic regimens, not droperidol. |
| PGx | Fischler_1986 | not_relevant | 0 | 10 | The paper reports general pharmacokinetic parameters for droperidol in anesthetized patients but does not investigate any gene variants, genotypes, or pharmacogenomic effects. |
| popPK | Flood_2002 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of receptor binding in Xenopus oocytes and does not report any pharmacokinetic parameters (clearance, volume, etc.) for droperidol. |
| PGx | Flood_2002 | not_relevant | 0 | 0 | The study investigates the molecular mechanisms of droperidol on GABA and nicotinic receptors in Xenopus oocytes and does not report any pharmacogenomic effects (gene variants) on PK or PD parameters in humans. |
| PGx | Foo_2016 | not_relevant | 0 | 0 | The paper reports standard population pharmacokinetics of droperidol but does not mention or test for any genetic variants, genotypes, or phenotypes. |
| popPK | Hu_1996 | irrelevant | 0 | 0 | Droperidol is used only as a non-analgesic control/comparator agent in a pain model study, and no pharmacokinetic parameters for droperidol are reported. |
| PGx | Hu_1996 | not_relevant | 0 | 0 | The paper reports general pharmacokinetic and pharmacodynamic properties of drugs in an animal model, with no mention of gene variants or pharmacogenomic effects. |
| popPK | Radke_1998 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study of ion channel kinetics, not a pharmacokinetic study. |
| PGx | Radke_1998 | not_relevant | 0 | 0 | The paper investigates the in vitro molecular actions of droperidol on ion channels and does not report any gene variants or genotypes affecting pharmacokinetic or pharmacodynamic parameters. |
| popPK | Sampson_1977 | irrelevant | 0 | 0 | The study is an in vitro pharmacological investigation of dopamine effects on carotid bodies, using droperidol only as a pharmacological antagonist/probe, not as a subject for PK analysis. |
| PGx | Sampson_1977 | not_relevant | 0 | 0 | The paper investigates the neurophysiological effects of dopamine on carotid bodies using droperidol as a pharmacological antagonist, but does not report any pharmacogenomic effects (gene variants influencing drug PK/PD). |
| popPK | Schuh_1981 | irrelevant | 0 | 0 | The study focuses on the dose-response curves of neuromuscular blocking agents, and droperidol is only mentioned as part of the general anesthesia regimen, with no pharmacokinetic parameters for droperidol reported. |
| PGx | Schuh_1981 | not_relevant | 0 | 0 | The paper focuses on the pharmacodynamics of neuromuscular blocking drugs and does not investigate any pharmacogenomic effects on droperidol. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdroperidol%5D&body=Drug%3A%20droperidol%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_droperidol/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-23 21:35 UTC</sub>
