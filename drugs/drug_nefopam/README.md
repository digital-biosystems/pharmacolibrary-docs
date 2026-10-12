<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02B&quot;,&quot;href&quot;:&quot;atc/N02B.md&quot;},{&quot;label&quot;:&quot;nefopam&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Nefopam_Djerada2014_reference&quot;,&quot;label&quot;:&quot;Djerada_2014_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_nefopam/Nefopam_Djerada2014_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

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

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 06:37 | 0:20 | 1/2/0 | 0/0/0 | 0/0/0 | 30,911/2,017 | einfracz / qwen3.8-27b | 1 | 1/0 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.167), gpt-oss:120b (not confirmed, agreement 0.375). Primary extraction retained.">cross-check: disputed 0/2</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Djerada_2014_reference](drugs/drug_nefopam/Nefopam_Djerada2014_reference.md) | ▶ model + simulator | 2-compartment, IV | 4 | Djerada Z et al., Population pharmacokinetics of nefopam…, British journal of clinical… (2014) | [10.1111/bcp.12291](https://doi.org/10.1111/bcp.12291) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (primary re-run, agreement 0.4), gpt-oss:120b (partly confirmed, agreement 0.667). Primary extraction retained.">cross-check: partial 0/2</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Mimoz_2010_reference](drugs/drug_nefopam/Nefopam_Mimoz2010_reference.md) | — | parent + metabolite (no model) | 0 | Mimoz O et al., Nefopam pharmacokinetics in patients wi…, Anesthesia and analgesia (2010) | [10.1213/ANE.0b013e3181f33488](https://doi.org/10.1213/ANE.0b013e3181f33488) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.333), gpt-oss:120b (partly confirmed, agreement 0.556). Primary extraction retained.">cross-check: disputed 0/2</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Podranski_2012_reference](drugs/drug_nefopam/Nefopam_Podranski2012_reference.md) | — | 1-compartment (no model) | 1 | Podranski T et al., Compartmental pharmacokinetics of nefop…, British journal of anaesthe… (2012) | [10.1093/bja/aer517](https://doi.org/10.1093/bja/aer517) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

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

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 06:36 UTC</sub>
