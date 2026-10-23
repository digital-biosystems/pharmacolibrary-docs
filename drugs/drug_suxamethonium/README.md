<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M03A&quot;,&quot;href&quot;:&quot;atc/M03A.md&quot;},{&quot;label&quot;:&quot;suxamethonium&quot;}]"></div>

# suxamethonium

- **generic name:** suxamethonium
- **ATC codes:** `M03AB01`
- **DrugBank:** [DB00202](https://go.drugbank.com/drugs/DB00202) · **PubChem:** [CID 5314](https://pubchem.ncbi.nlm.nih.gov/compound/5314)
- **molar mass:** 290.399 g/mol (C14H30N2O4) — DrugBank
- **groups:** approved, investigational

## About

Suxamethonium (succinylcholine) is a depolarizing neuromuscular blocking agent used as a muscle relaxant, for example to relax muscles during medical procedures. It remains an approved medicine and is included on the WHO list of essential medicines, though it carries a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q424378](https://www.wikidata.org/wiki/Q424378) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| suxamethonium (succinylcholine) | parent | 290.399 | C14H30N2O4 | DrugBank | [5314](https://pubchem.ncbi.nlm.nih.gov/compound/5314) | Roy_2002 |

## Parameters across studies

| parameter | as named | value | unit | as reported | population | species | status | record |
|---|---|---|---|---|---|---|---|---|
| CL | CL | 37 | L/h | 37 L/h | anesthetized patients | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Roy_2002_reference](drugs/drug_suxamethonium/Suxamethonium_Roy2002_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [Roy_2002_reference](drugs/drug_suxamethonium/Suxamethonium_Roy2002_reference.md) | — | 1-compartment (no model) | 1 | Roy JJ et al., Concentration-effect relation of succin…, Anesthesiology (2002) | [10.1097/00000542-200211000-00009](https://doi.org/10.1097/00000542-200211000-00009) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Torda_1997_2_reference](drugs/drug_suxamethonium/Suxamethonium_Torda1997v2_reference.md) | — | 1-compartment (no model) | 0 | Torda TA et al., Pharmacokinetics and pharmacodynamics o…, Anaesthesia and intensive c… (1997) | [10.1177/0310057X9702500312](https://doi.org/10.1177/0310057X9702500312) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Roy_2002_twitch](drugs/drug_suxamethonium/pd_Roy_2002_twitch.md) | force of contraction of the adductor pollicis ← succinylcholine · delayed effect through an effect compartment | — | Roy JJ et al., Concentration-effect relation of succin…, Anesthesiology (2002) | [10.1097/00000542-200211000-00009](https://doi.org/10.1097/00000542-200211000-00009) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Torda_1997_2_response_to_supramaximal_stimulation_of_the_ulnar_nerve](drugs/drug_suxamethonium/pd_Torda_1997_2_response_to_supramaximal_stimulation_of_the_uln.md) | response to supramaximal stimulation of the ulnar nerve ← suxamethonium · delayed effect through an effect compartment | — | Torda TA et al., Pharmacokinetics and pharmacodynamics o…, Anaesthesia and intensive c… (1997) | [10.1177/0310057X9702500312](https://doi.org/10.1177/0310057X9702500312) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=suxamethonium).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | blood | `BCHE` substrate | DrugBank actor |
| metabolism | liver | `BCHE` substrate | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: CHRM2 (target), CHRM3 (target), CHRNA10 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 02:53 | 0:11 | 1/1/0 | 2/0/0 | 0/0/0 | 23,088/2,518 | einfracz / qwen3.8-27b | 12 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Roy_2002.pdf` | Roy JJ et al., Concentration-effect relation of succin…, Anesthesiology (2002) | popPK | 10 | [10.1097/00000542-200211000-00009](https://doi.org/10.1097/00000542-200211000-00009) | [12411790](https://pubmed.ncbi.nlm.nih.gov/12411790) | The study reports quantitative pharmacokinetic parameters (clearance, rate constants) for succinylcholine in human subjects with values explicitly stated in the text. |
| `Torda_1997_2.pdf` | Torda TA et al., Pharmacokinetics and pharmacodynamics o…, Anaesthesia and intensive c… (1997) | popPK | 9 | [10.1177/0310057X9702500312](https://doi.org/10.1177/0310057X9702500312) | [9209610](https://pubmed.ncbi.nlm.nih.gov/9209610) | The study reports quantitative pharmacokinetic parameters for suxamethonium, including mean half-life of elimination (47 s) and a single-compartment model, derived from patient data. |

<sub>queue written 2026-10-07 02:53 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Allahyary_2008_2 | irrelevant | 0 | 0 | The study evaluates the depth of anesthesia using auditory evoked potentials in patients undergoing cesarean sections, using suxamethonium only for induction without reporting any pharmacokinetic parameters for the drug. |
| popPK | Fragen_1983 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of drug interactions on the rat diaphragm and does not report quantitative pharmacokinetic disposition parameters (CL, V, etc.) for suxamethonium. |
| popPK | Okada_2015 | irrelevant | 0 | 0 | The study measures neuromuscular function (tugging force) in mice and does not report any pharmacokinetic parameters (CL, V, etc.) for suxamethonium. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bsuxamethonium%5D&body=Drug%3A%20suxamethonium%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_suxamethonium/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · newest extraction 2026-10-07 02:53 UTC</sub>
