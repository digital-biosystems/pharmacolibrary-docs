<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Bacterial toxins&quot;,&quot;href&quot;:&quot;toxins/BACT.md&quot;},{&quot;label&quot;:&quot;Anatoxin-a(s)&quot;}]"></div>

# Anatoxin-a(s)

- **generic name:** Anatoxin-a(s)
- **T3DB:** [T3D4138](http://www.t3db.ca/toxins/T3D4138) · **PubChem:** [CID 114989](https://pubchem.ncbi.nlm.nih.gov/compound/114989)

## About

Anatoxin-a(s) is a natural organophosphate found in <i>Anabaena flos-aquae</i>. It irreversibly inhibits acetylcholinesterase (AChE), similar to organophosphorous and carbamate insecticides and some chemical warfare agents. When AChE is inhibited, the neurotransmitter acetylcholine is no longer hydrolyzed in the synapse, the postsynaptic membrane cannot be repolarized, and nerve influx is blocked. Anatoxin-a(s) is highly toxic for mammals when the toxigenic cyanobacteria produce mass populations in drinking water.

- **Category:** Pesticide, Bacterial Toxin, Natural Toxin
- **Mechanism of toxicity:** Anatoxin-a(s) is a cholinesterase or acetylcholinesterase (AChE) inhibitor. A cholinesterase inhibitor (or 'anticholinesterase') suppresses the action of acetylcholinesterase. …
- **Health effects:** Acute exposure to cholinesterase inhibitors can cause a cholinergic crisis characterized by severe nausea/vomiting, salivation, sweating, bradycardia, hypotension, collapse, and convulsions. Increasing muscle weakness is a possibility and may result in death if respiratory muscles are involved. …

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D4138">T3DB T3D4138</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 103170-78-1</small></p>

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
| 2026-11-10 22:03 | 2:07 | 0/0/0 | 0/0/0 | 0/0/0 | 32,010/1,759 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 5 matched, 8 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Freitas_2014.pdf` | Freitas EC et al., Acute effects of Anabaena spiroides ext…, Aquatic toxicology (Amsterd… (2014) | pd | 4 | [10.1016/j.aquatox.2013.11.007](https://doi.org/10.1016/j.aquatox.2013.11.007) | [24291085](https://www.ncbi.nlm.nih.gov/pubmed/24291085) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-11-10 22:02 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Baden_1992 | irrelevant | 0 | 0 | The paper focuses on detection methods for brevetoxins and ciguatoxin, with no quantitative toxicokinetic parameters for anatoxin_as. |
| popPK | Dos_2019 | irrelevant | 0 | 0 | The paper reports acute neurotoxic effects (AChE inhibition, locomotor activity, heart rate) but does not provide quantitative toxicokinetic parameters such as half-life, clearance, or volume of distribution. |
| popPK | Fiore_2020 | irrelevant | 0 | 0 | The paper is a nomenclature proposal discussing the chemical structure and mechanism of anatoxin-a(S) (guanitoxin) and contains no quantitative toxicokinetic parameters. |
| popPK | Freitas_2014 | irrelevant | 0 | 0 | The paper reports acute toxicity (LC50, IC50) and dose-response data, but contains no quantitative toxicokinetic parameters (e.g., half-life, clearance, partition coefficients). |
| popPK | Ledreux_2013 | irrelevant | 0 | 0 | The paper reports kinetic parameters for ciguatoxin P-CTX-1, not anatoxin-as. |
| popPK | Legrand_2019 | irrelevant | 0 | 0 | The paper is an environmental study on cyanobacterial recurrence in lake sediments and does not report any toxicokinetic parameters for anatoxin-a. |
| popPK | Mahmood_1986 | irrelevant | 0 | 0 | The paper reports acute toxicity (LD50) and pharmacological mechanism of action, but provides no quantitative toxicokinetic parameters such as half-life, clearance, or partition coefficients. |
| popPK | Metcalf_2012 | irrelevant | 0 | 0 | The paper is an environmental exposure and risk assessment study of desert crusts that reports cyanotoxin concentrations and potential inhalation doses, but provides no quantitative toxicokinetic parameters (half-life, clearance, partition coefficients, etc.) for anatoxin_as. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Banatoxin_as%5D&body=Drug%3A%20anatoxin_as%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_anatoxin_as/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
