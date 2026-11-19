<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Pesticides&quot;,&quot;href&quot;:&quot;toxins/PEST.md&quot;},{&quot;label&quot;:&quot;Difenacoum&quot;}]"></div>

# Difenacoum

- **generic name:** Difenacoum
- **T3DB:** [T3D3104](http://www.t3db.ca/toxins/T3D3104) · **PubChem:** [CID 41735](https://pubchem.ncbi.nlm.nih.gov/compound/41735)

## About

Difenacoum is an anticoagulant and rodenticide derived from coumarin.

- **Category:** Pesticide, Synthetic Toxin
- **Route of exposure:** oral (ingestion), dermal
- **Sources and uses:** Difenacoum is a rodenticide.
- **Mechanism of toxicity:** Difenacoum inhibits the enzyme Vitamin K epoxide reductase. This enzyme is needed for the reconstitution of the vitamin K in its cycle from vitamin K-epoxide, and so difenacoum steadily decreases the level of active vitamin K in the blood. …
- **Health effects:** Difenacoum is an anticoagulant and causes internal bleeding, leading to shock, loss of consciousness, and eventually death.
- **Acute toxicity:** LD50: 0.8 mg/kg (Oral, Mouse)
LD50: 50 mg/kg (Dermal, Rat)
- **Treatment:** The primary antidote to difenacoum poisoning is immediate administration of vitamin K1 (initially slow intravenous injections of 10-25 mg repeated all 3-6 hours until normalisation of the prothrombin time; then 10 mg orally four times daily as a "maintenance dose"). …

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D3104">T3DB T3D3104</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 56073-07-5</small></p>

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
| not captured | not captured | 0/0/0 | 0/0/0 | 0/0/0 | not captured | not captured | 2 | 0/2 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Buckle_2013.pdf` | Buckle A et al., Resistance testing and the effectivenes…, Pest management science (2013) | pgx | 5 | [10.1002/ps.3373](https://doi.org/10.1002/ps.3373) | [23208747](https://www.ncbi.nlm.nih.gov/pubmed/23208747) | metadata signals extractable PGX data (vkorc1) |
| `Esther_2014.pdf` | Esther A et al., [Rodenticide resistance and consequence…, Bundesgesundheitsblatt, Ges… (2014) | pgx | 5 | [10.1007/s00103-013-1930-z](https://doi.org/10.1007/s00103-013-1930-z) | [24781908](https://www.ncbi.nlm.nih.gov/pubmed/24781908) | metadata signals extractable PGX data (VKORC1) |
| `Pelz_2012.pdf` | Pelz HJ et al., Distribution and frequency of VKORC1 se…, Pest management science (2012) | pgx | 5 | [10.1002/ps.2254](https://doi.org/10.1002/ps.2254) | [21898757](https://www.ncbi.nlm.nih.gov/pubmed/21898757) | metadata signals extractable PGX data (VKORC1) |

<sub>queue written 2026-11-15 23:36 UTC</sub>


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdifenacoum%5D&body=Drug%3A%20difenacoum%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_difenacoum/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
