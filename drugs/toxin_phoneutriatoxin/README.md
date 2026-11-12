<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Animal toxins&quot;,&quot;href&quot;:&quot;toxins/ANIM.md&quot;},{&quot;label&quot;:&quot;Phoneutriatoxin&quot;}]"></div>

# Phoneutriatoxin

- **generic name:** Phoneutriatoxin
- **T3DB:** [T3D2503](http://www.t3db.ca/toxins/T3D2503) · **PubChem:** none

## About

Phoneutriatoxin is a peptide toxin produced by the Banana spider (Phoneutria nigriventer). It acts as an antagonist at certain calcium channels, causing rapid paralysis leading to death.

- **Category:** Protein, Natural Toxin, Animal Toxin
- **Route of exposure:** injection (sting/bite)
- **Sources and uses:** Phoneutriatoxin is a peptide toxin produced by the Banana spider (Phoneutria nigriventer).
- **Mechanism of toxicity:** Phoneutriatoxin acts as an antagonist at certain calcium channels.
- **Health effects:** Phoneutriatoxin is neurotoxic.

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D2503">T3DB T3D2503</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

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
| 2026-11-11 05:44 | 2:14 | 0/0/0 | 0/0/0 | 0/0/0 | 12,208/809 | ollama / glm-5.3-flash | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Burckart_2014.pdf` | Burckart GJ et al., Multi-institutional Study of Outcomes A…, The journal of pediatric ph… (2014) | pgx | 8 | [10.5863/1551-6776-19.1.16](https://doi.org/10.5863/1551-6776-19.1.16) | [24782687](https://www.ncbi.nlm.nih.gov/pubmed/24782687) | metadata signals extractable PGX data (ABCC2, PK/PD-context) |

<sub>queue written 2026-11-11 05:43 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Albensi_2000 | irrelevant | 0 | 0 | Paper studies other arylalkylamine spider toxins (argiotoxin, JSTX, agatoxins, philanthotoxin) as NMDAR antagonists in rat hippocampal slices, with no kinetic parameters and no mention of phoneutriatoxin. |
| popPK | Burckart_2014 | irrelevant | 0 | 0 | no_text gate: only 122 chars of text extracted (&lt; 400) |
| PGx | Burckart_2014 | not_relevant | 0 | 0 | Paper concerns gene polymorphisms affecting outcomes after pediatric heart transplantation, not phoneutriatoxin PK/PD parameters. |
| popPK | Jaroszewski_1996 | irrelevant | 0 | 0 | The paper studies philanthotoxin-343, a wasp polyamine toxin, not phoneutriatoxin, and reports only NMR-derived pKa values with no kinetic parameters. |
| popPK | Rozental_1989 | irrelevant | 0 | 0 | The substance is philanthotoxin, not phoneutriatoxin, and the paper reports only receptor inhibitory concentrations, with no toxicokinetic parameters of any kind. |
| PGx | Xie_2010 | not_relevant | 0 | 0 | The paper discusses pharmacogenomics of immunosuppressants in pediatric heart transplantation, not phoneutriatoxin; the drug is not mentioned. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bphoneutriatoxin%5D&body=Drug%3A%20phoneutriatoxin%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_phoneutriatoxin/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
