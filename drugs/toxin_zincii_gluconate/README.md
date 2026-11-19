<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Zinc(II) gluconate&quot;}]"></div>

# Zinc(II) gluconate

- **generic name:** Zinc(II) gluconate
- **T3DB:** [T3D0729](http://www.t3db.ca/toxins/T3D0729) · **PubChem:** [CID 158040](https://pubchem.ncbi.nlm.nih.gov/compound/158040)

## About

Zinc(II) gluconate is a dietary zinc supplement.

- **Category:** Household Toxin, Food Toxin, Synthetic Toxin
- **Route of exposure:** inhalation, oral, dermal
- **Sources and uses:** Zinc gluconate is used in dietary supplements.
- **Mechanism of toxicity:** Anaemia results from the excessive absorption of zinc suppressing copper and iron absorption, most likely through competitive binding of intestinal mucosal cells. Unbalanced levels of copper and zinc binding to Cu,Zn-superoxide dismutase has been linked to amyotrophic lateral sclerosis (ALS). …
- **Health effects:** Chronic exposure to zinc causes anemia, atazia, lethargy, and decreases the level of good cholesterol in the body. It is also believed to cause pancreatic and reproductive damage.
- **Minimal risk levels (ATSDR):** Intermediate Oral: 0.3 mg/kg/day 
Chronic Oral: 0.3 mg/kg/day
- **Treatment:** Zinc poisoning is treated symptomatically, often by administering fluids such as water or milk, or with gastric lavage.

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D0729">T3DB T3D0729</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 4468-02-04</small></p>

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
| 2026-11-15 01:53 | 1:38 | 0/0/0 | 0/0/0 | 0/0/0 | 30,786/2,354 | ollama / glm-5.3-flash | 1 | 0/1 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 3 matched, 3 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Siepmann_2005.pdf` | Siepmann M et al., The pharmacokinetics of zinc from zinc…, International journal of cl… (2005) | popPK | 8 | [10.5414/cpp43562](https://doi.org/10.5414/cpp43562) | [16372518](https://pubmed.ncbi.nlm.nih.gov/16372518) | Human crossover study reporting quantitative PK differences for zinc gluconate (Cmax, AUC, tmax); only relative % differences and percentages appear, not absolute Cmax/AUC values. |

<sub>queue written 2026-11-15 01:53 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Araujo-Lima_2017 | relevant | 5 | 3 | In silico pkCSM ADMET predictions for zinc gluconate (e.g., total clearance 4.06 ml/min/kg) count as kinetic parameters, but the full Table 1 values appear only partially in the evidence. |
| popPK | Slinko_2014 | irrelevant | 1 | 0 | Zinc gluconate appears only as a treatment intervention dose (1.3 mg/kg i.p.) in an efficacy study; no toxicokinetic parameters (half-life, clearance, partitioning, etc.) of zinc gluconate are reported. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bzincii_gluconate%5D&body=Drug%3A%20zincii_gluconate%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_zincii_gluconate/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
