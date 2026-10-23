<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02B&quot;,&quot;href&quot;:&quot;atc/N02B.md&quot;},{&quot;label&quot;:&quot;nefopam&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Nefopam_Djerada2014_reference&quot;,&quot;label&quot;:&quot;Djerada_2014_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_nefopam/Nefopam_Djerada2014_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

# nefopam

- **generic name:** nefopam
- **ATC codes:** `N02BG06`
- **DrugBank:** [DB12293](https://go.drugbank.com/drugs/DB12293) · **PubChem:** [CID 4450](https://pubchem.ncbi.nlm.nih.gov/compound/4450)
- **molar mass:** 253.345 g/mol (C17H19NO) — DrugBank
- **groups:** approved, investigational, withdrawn

## About

Nefopam is a non-opioid painkiller used to relieve pain. It is approved in some countries and used mainly in Europe and parts of Asia, but is not available everywhere.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q599052](https://www.wikidata.org/wiki/Q599052) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| nefopam | parent | 253.345 | C17H19NO | DrugBank | [4450](https://pubchem.ncbi.nlm.nih.gov/compound/4450) | Podranski_2012 |
| desmethyl-nefopam | metabolite | — (mass units only) | — | — | — | — |

## Start here

> **Djerada_2014_reference** — <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> elderly patients with or without renal impairment, n = 48. [Run it in the simulator](drugs/drug_nefopam/Nefopam_Djerada2014_reference.md?tab=Simulation) · [record](drugs/drug_nefopam/Nefopam_Djerada2014_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL | 17.3 | L/h | 17.3 l h(-1) | elderly patients with or without renal impairment | 48 | human | <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> | [Djerada_2014_reference](drugs/drug_nefopam/Nefopam_Djerada2014_reference.md) |
| V | V | 114 | L | 114 l | elderly patients with or without renal impairment | 48 | human | <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> | [Djerada_2014_reference](drugs/drug_nefopam/Nefopam_Djerada2014_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Not simulated" data-sim="yes"></span><span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Not simulated</sub> | [Djerada_2014_reference](drugs/drug_nefopam/Nefopam_Djerada2014_reference.md) | ▶ model + simulator | 2-compartment, IV | 4 | Djerada Z et al., Population pharmacokinetics of nefopam…, British journal of clinical… (2014) | [10.1111/bcp.12291](https://doi.org/10.1111/bcp.12291) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Mimoz_2010_reference](drugs/drug_nefopam/Nefopam_Mimoz2010_reference.md) | — | parent + metabolite (no model) | 0 | Mimoz O et al., Nefopam pharmacokinetics in patients wi…, Anesthesia and analgesia (2010) | [10.1213/ANE.0b013e3181f33488](https://doi.org/10.1213/ANE.0b013e3181f33488) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Rejected</sub><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub> | [Podranski_2012_reference](drugs/drug_nefopam/Nefopam_Podranski2012_reference.md) | — | 1-compartment (no model) | 1 | Podranski T et al., Compartmental pharmacokinetics of nefop…, British journal of anaesthe… (2012) | [10.1093/bja/aer517](https://doi.org/10.1093/bja/aer517) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 06:37 | 0:20 | 1/2/0 | 0/0/0 | 0/0/0 | 30,911/2,017 | einfracz / qwen3.8-27b | 1 | 1/0 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 3  ·  extracted 1  ·  needs_review 0  ·  rejected 2  ·  stale 3
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Djerada_2014.pdf` | Djerada Z et al., Population pharmacokinetics of nefopam…, British journal of clinical… (2014) | popPK | 10 | [10.1111/bcp.12291](https://doi.org/10.1111/bcp.12291) | [24252055](https://pubmed.ncbi.nlm.nih.gov/24252055) | The abstract explicitly reports the numeric population estimates for clearance, volume of distribution, intercompartmental clearance, and peripheral volume for nefopam in a two-compartment model. |
| `Mimoz_2010.pdf` | Mimoz O et al., Nefopam pharmacokinetics in patients wi…, Anesthesia and analgesia (2010) | popPK | 10 | [10.1213/ANE.0b013e3181f33488](https://doi.org/10.1213/ANE.0b013e3181f33488) | [20971961](https://pubmed.ncbi.nlm.nih.gov/20971961) | The study reports quantitative PK parameters (clearance, volume of distribution) for nefopam in humans, with specific values provided in the abstract for both healthy volunteers and ESRD patients. |
| `Mittur_2018.pdf` | Mittur A, A Simultaneous Mixed-Effects Pharmacoki…, European journal of drug me… (2018) | popPK | 10 | [10.1007/s13318-017-0457-3](https://doi.org/10.1007/s13318-017-0457-3) | [29305813](https://pubmed.ncbi.nlm.nih.gov/29305813) | The study reports a population PK model for nefopam, but no quantitative parameter values (CL, V, etc.) are provided in the extracted evidence. |

<sub>queue written 2026-10-07T06:36:46.293885+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Mittur_2018 | relevant | 10 | 0 | The study reports a population PK model for nefopam, but no quantitative parameter values (CL, V, etc.) are provided in the extracted evidence. |
| popPK | Pérez-Gómez_2006 | irrelevant | 0 | 0 | The study is an in vitro neurotoxicity experiment on rat neurons where nefopam is used only as a sodium channel antagonist control, not as the subject drug for pharmacokinetic analysis. |
| PD | Pérez-Gómez_2006 | not_relevant | 0 | 0 | The paper reports the neurotoxicity of yessotoxin (YTX) and mentions nefopam only as an ineffective antagonist in a qualitative context, providing no PD parameters or exposure-response data for nefopam. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 06:36 UTC</sub>
