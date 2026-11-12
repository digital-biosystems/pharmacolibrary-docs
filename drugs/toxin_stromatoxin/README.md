<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Animal toxins&quot;,&quot;href&quot;:&quot;toxins/ANIM.md&quot;},{&quot;label&quot;:&quot;Stromatoxin&quot;}]"></div>

# Stromatoxin

- **generic name:** Stromatoxin
- **T3DB:** [T3D2502](http://www.t3db.ca/toxins/T3D2502) · **PubChem:** none

## About

Stromatoxin is a peptide spider toxin produced by the Featherleg baboon tarantula (Stromatopelma calceatum). This spider lives high in the canopy tops of tropical forests in West Africa. Stromatoxin blocks certain delayed-rectifier and A-type voltage-gated potassium channels. …

- **Category:** Protein, Natural Toxin, Animal Toxin
- **Route of exposure:** injection (sting/bite)
- **Sources and uses:** Stromatoxin is a peptide toxin produced by the Featherleg baboon tarantula (Stromatopelma calceatum).
- **Mechanism of toxicity:** Stromatoxin blocks the delayed-rectifier type potassium channels Kv2.1, Kv2.2, Kv2.1/9.3 and the A-type potassium channel Kv4.2, with affinity of 12.7 nM, 21.4 nM, 7.2 nM and 1.2 nM, respectively. No activity on Kv4.1 and Kv4.3 has been observed. …
- **Health effects:** Bites from the Featherleg baboon tarantula are very painful. There is only one recorded death from a featherleg baboon tarantula bite (a soldier in South Africa).

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D2502">T3DB T3D2502</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 1262235-00-6</small></p>

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
| 2026-11-11 00:18 | 0:47 | 0/0/0 | 0/0/0 | 0/0/0 | 10,062/586 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 3 matched, 3 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Baeyens_2014.pdf` | Baeyens N et al., Extracellular calcium modulates the inh…, European journal of pharmac… (2014) | pd | 4 | [10.1016/j.ejphar.2013.11.042](https://doi.org/10.1016/j.ejphar.2013.11.042) | [24333216](https://www.ncbi.nlm.nih.gov/pubmed/24333216) | metadata signals extractable PD data (concentration-effect) |

<sub>queue written 2026-11-11 00:18 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Baeyens_2014 | irrelevant | 0 | 0 | The study focuses on the electrophysiological mechanism of 4-aminopyridine on Kv channels, using stromatoxin only as a specific Kv2 blocker for comparative pharmacological characterization, without reporting any toxicokinetic parameters (half-life, clearance, etc.) for stromatoxin. |
| popPK | Kiernan_2010 | irrelevant | 0 | 0 | The paper uses stromatoxin-1 as a pharmacological tool to block potassium channels and does not report any toxicokinetic parameters for stromatoxin. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bstromatoxin%5D&body=Drug%3A%20stromatoxin%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_stromatoxin/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
