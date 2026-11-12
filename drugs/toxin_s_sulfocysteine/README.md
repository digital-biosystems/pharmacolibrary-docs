<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Animal toxins&quot;,&quot;href&quot;:&quot;toxins/ANIM.md&quot;},{&quot;label&quot;:&quot;S-Sulfocysteine&quot;}]"></div>

# S-Sulfocysteine

- **generic name:** S-Sulfocysteine
- **T3DB:** [T3D4434](http://www.t3db.ca/toxins/T3D4434) · **DrugBank:** [DB04370](https://go.drugbank.com/drugs/DB04370) · **PubChem:** [CID 115015](https://pubchem.ncbi.nlm.nih.gov/compound/115015)
- **groups:** experimental

## About

S-Sulfocysteine (SSC) is produced by reaction of inorganic sulfite and cystine by a yet unknown pathway and is a very potent NMDA-receptor agonist. Electrophysiological studies have shown that SSC displays depolarizing properties similar to glutamate. Patients affected with either Molybdenum cofactor deficiency (MOCOD, an autosomal recessive disease that leads to a combined deficiency of the enzymes sulphite oxidase, an enzyme that catalyzes the conversion of sulfite to inorganic sulfate, xanthine dehydrogenase and aldehyde oxidase) or isolated sulphite oxidase deficiency (ISOD, an extremely rare autosomal recessive disorder with identical clinical manifestations to MOCOD) excrete elevated levels of SSC. …

- **Category:** Animal Toxin, Food Toxin, Natural Toxin
- **Sources and uses:** S-Sulfocysteine is produced by reaction of inorganic sulfite and cystine by a yet unknown pathway.
- **Mechanism of toxicity:** S-Sulfocysteine (SSC) is a very potent NMDA-receptor agonist. Electrophysiological studies have shown that SSC displays depolarizing properties similar to glutamate. …
- **Health effects:** Neurotoxicity.

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D4434">T3DB T3D4434</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 1637-71-4 · <a href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:27891">ChEBI 27891</a></small></p>

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
| 2026-11-10 21:56 | 3:46 | 0/0/0 | 0/0/0 | 0/0/0 | 20,409/1,257 | einfracz / qwen3.8-27b | 2 | 0/2 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Nahum-Levy_2001.pdf` | Nahum-Levy R et al., Desensitization of NMDA receptor channe…, Biophysical journal (2001) | pd | 4 | [10.1016/S0006-3495(01)76188-7](https://doi.org/10.1016/S0006-3495(01)76188-7) | [11325718](https://www.ncbi.nlm.nih.gov/pubmed/11325718) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-11-10 21:56 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Atwal_2016 | not_relevant | 0 | 0 | The paper reviews Molybdenum cofactor deficiency where S-sulfocysteine is a toxic metabolite, not a drug, and does not report pharmacogenomic effects on its PK/PD. |
| PGx | Crenshaw_2026 | not_relevant | 0 | 0 | The paper is a case report on a neonate with molybdenum cofactor deficiency where S-sulfocysteine is a diagnostic biomarker of the metabolic defect, not a pharmacokinetic or pharmacodynamic parameter of a drug. |
| popPK | Jala_2023 | irrelevant | 0 | 0 | The paper is an epidemiological metabolomics study of phenol exposure, and while it mentions cysteine-s-sulfate, it reports no kinetic parameters (half-life, clearance, etc.) for S-sulfocysteine. |
| popPK | Nahum-Levy_2001 | irrelevant | 0 | 0 | no_text gate: only 76 chars of text extracted (&lt; 400) |
| PGx | Spiegel_2022 | not_relevant | 0 | 0 | The paper is a natural history study of a genetic metabolic disorder and does not report pharmacokinetic or pharmacodynamic effects of a specific drug like s-sulfocysteine. |
| popPK | Tekin_2025 | irrelevant | 0 | 0 | The paper is a mechanistic cell toxicity study reporting only an LC50 value, with no quantitative toxicokinetic parameters (e.g., half-life, clearance, rate constants) for s_sulfocysteine. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bs_sulfocysteine%5D&body=Drug%3A%20s_sulfocysteine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_s_sulfocysteine/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
