<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Household toxins&quot;,&quot;href&quot;:&quot;toxins/HOUS.md&quot;},{&quot;label&quot;:&quot;S-Bioallethrin&quot;}]"></div>

# S-Bioallethrin

- **generic name:** S-Bioallethrin
- **T3DB:** [T3D3920](http://www.t3db.ca/toxins/T3D3920) · **PubChem:** [CID 62829](https://pubchem.ncbi.nlm.nih.gov/compound/62829)

## About

Bioallethrin is a brand name for an ectoparasiticide. It consists of two of the eight stereosiomers of allethrin I in an approximate ratio of 1:1. Esbioallethrin or S-bioallethrin s the pure S-form of the pesticide. …

- **Category:** Household Toxin, Synthetic Toxin

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D3920">T3DB T3D3920</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 28434-00-6 · <a href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:39115">ChEBI 39115</a></small></p>

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
| 2026-11-15 16:36 | 1:36 | 0/0/0 | 0/0/0 | 0/0/0 | 15,097/1,323 | ollama / glm-5.3-flash | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 10 matched, 10 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Scollon_2009.pdf` | Scollon EJ et al., In vitro metabolism of pyrethroid pesti…, Drug metabolism and disposi… (2009) | popPK | 7 | [10.1124/dmd.108.022343](https://doi.org/10.1124/dmd.108.022343) | [18948380](https://pubmed.ncbi.nlm.nih.gov/18948380) | S-bioallethrin CL(int) measured in rat and human hepatic microsomes (in vitro clearance = kinetic parameter), but the actual numeric values appear in tables/figures not included in the evidence. |

<sub>queue written 2026-11-15 16:36 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Mauck_1976 | irrelevant | 0 | 0 | Acute toxicity (LC50) study in fish with no kinetic parameters; S-bioallethrin appears only as a comparator for degradation rates. |
| popPK | Scollon_2009 | relevant | 7 | 3 | S-bioallethrin CL(int) measured in rat and human hepatic microsomes (in vitro clearance = kinetic parameter), but the actual numeric values appear in tables/figures not included in the evidence. |
| popPK | Weiner_2009 | irrelevant | 0 | 0 | This is a neurobehavioral (FOB) toxicity study in rats with no kinetic parameters for S-bioallethrin of any kind reported. |
| popPK | Wolansky_2006 | irrelevant | 2 | 3 | This is an acute dose-response (ED30/relative potency) neurotoxicity study in rats, not toxicokinetics; ED30 values are dose-response potencies, not kinetic absorption/excretion/biotransformation half-life parameters, and S-bioallethrin appears as one of eleven comparator substances. |
| popPK | Wolansky_2008 | irrelevant | 1 | 0 | A review with only dose-response/neurobehavioral outcomes; no toxicokinetic parameters for S-bioallethrin, and no numeric kinetic values appear in the evidence. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bs_bioallethrin%5D&body=Drug%3A%20s_bioallethrin%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_s_bioallethrin/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
