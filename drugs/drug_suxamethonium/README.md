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

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 02:53 | 0:11 | 0/1/1 | 2/0/0 | 0/0/0 | 23,088/2,518 | einfracz / qwen3.8-27b | 12 | 0/0 | 0/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Roy_2002_reference](drugs/drug_suxamethonium/Suxamethonium_Roy2002_reference.md) | — | 1-compartment (no model) | 1 | Roy JJ et al., Concentration-effect relation of succin…, Anesthesiology (2002) | [10.1097/00000542-200211000-00009](https://doi.org/10.1097/00000542-200211000-00009) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (primary re-run, agreement 0.8). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Torda_1997_2_reference](drugs/drug_suxamethonium/Suxamethonium_Torda1997v2_reference.md) | — | 1-compartment (no model) | 0 | Torda TA et al., Pharmacokinetics and pharmacodynamics o…, Anaesthesia and intensive c… (1997) | [10.1177/0310057X9702500312](https://doi.org/10.1177/0310057X9702500312) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Roy_2002_twitch](drugs/drug_suxamethonium/pd_Roy_2002_twitch.md) | force of contraction of the adductor pollicis ← succinylcholine · delayed effect through an effect compartment | — | Roy JJ et al., Concentration-effect relation of succin…, Anesthesiology (2002) | [10.1097/00000542-200211000-00009](https://doi.org/10.1097/00000542-200211000-00009) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Torda_1997_2_response_to_supramaximal_stimulation_of_the_ulnar_nerve](drugs/drug_suxamethonium/pd_Torda_1997_2_response_to_supramaximal_stimulation_of_the_uln.md) | response to supramaximal stimulation of the ulnar nerve ← suxamethonium · delayed effect through an effect compartment | — | Torda TA et al., Pharmacokinetics and pharmacodynamics o…, Anaesthesia and intensive c… (1997) | [10.1177/0310057X9702500312](https://doi.org/10.1177/0310057X9702500312) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs_review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Roy_2002.pdf` | Roy JJ et al., Concentration-effect relation of succin…, Anesthesiology (2002) | popPK | 10 | [10.1097/00000542-200211000-00009](https://doi.org/10.1097/00000542-200211000-00009) | [12411790](https://pubmed.ncbi.nlm.nih.gov/12411790) | The study reports quantitative pharmacokinetic parameters (clearance, rate constants) for succinylcholine in human subjects with values explicitly stated in the text. |
| `Torda_1997_2.pdf` | Torda TA et al., Pharmacokinetics and pharmacodynamics o…, Anaesthesia and intensive c… (1997) | popPK | 9 | [10.1177/0310057X9702500312](https://doi.org/10.1177/0310057X9702500312) | [9209610](https://pubmed.ncbi.nlm.nih.gov/9209610) | The study reports quantitative pharmacokinetic parameters for suxamethonium, including mean half-life of elimination (47 s) and a single-compartment model, derived from patient data. |

<sub>queue written 2026-10-07T02:53:21.285167+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Allahyary_2008_2 | irrelevant | 0 | 0 | The study evaluates the depth of anesthesia using auditory evoked potentials in patients undergoing cesarean sections, using suxamethonium only for induction without reporting any pharmacokinetic parameters for the drug. |
| popPK | Fragen_1983 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of drug interactions on the rat diaphragm and does not report quantitative pharmacokinetic disposition parameters (CL, V, etc.) for suxamethonium. |
| popPK | Okada_2015 | irrelevant | 0 | 0 | The study measures neuromuscular function (tugging force) in mice and does not report any pharmacokinetic parameters (CL, V, etc.) for suxamethonium. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 02:53 UTC</sub>
