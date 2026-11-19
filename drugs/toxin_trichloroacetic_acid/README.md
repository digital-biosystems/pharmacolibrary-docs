<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Household toxins&quot;,&quot;href&quot;:&quot;toxins/HOUS.md&quot;},{&quot;label&quot;:&quot;Trichloroacetic acid&quot;}]"></div>

# Trichloroacetic acid

- **generic name:** Trichloroacetic acid
- **T3DB:** [T3D4870](http://www.t3db.ca/toxins/T3D4870) · **PubChem:** [CID 6421](https://pubchem.ncbi.nlm.nih.gov/compound/6421)
- **groups:** approved, investigational

## About

Trichloroacetic acid (TCA; also known as trichloroethanoic acid) is an analogue of acetic acid in which the three hydrogen atoms of the methyl group have all been replaced by chlorine atoms.

- **Category:** Household Toxin, Synthetic Toxin
- **Carcinogenicity:** IARC group 2B, possibly carcinogenic to humans.

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D4870">T3DB T3D4870</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 76-03-9 · <a href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:30956">ChEBI 30956</a></small></p>

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
| not captured | not captured | 0/0/0 | 0/0/0 | 0/0/0 | not captured | not captured | 20 | 5/15 | 20/0 | 0 |

## Coverage

- **PubMed hits:** 189 matched, 92 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_5 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Rivera-Núñez_2018.pdf` | Rivera-Núñez Z et al., Exposure to disinfectant by-products an…, Occupational and environmen… (2018) | pd | 5 | [10.1136/oemed-2017-104861](https://doi.org/10.1136/oemed-2017-104861) | [30061312](https://www.ncbi.nlm.nih.gov/pubmed/30061312) | metadata signals extractable PD data (exposure-response) |
| `Zhu_2026.pdf` | Zhu JQ et al., Haloacetic Acid Disinfection Byproducts…, Environmental science & tec… (2026) | pd | 5 | [10.1021/acs.est.6c08680](https://doi.org/10.1021/acs.est.6c08680) | [42916018](https://www.ncbi.nlm.nih.gov/pubmed/42916018) | metadata signals extractable PD data (exposure-response) |
| `Wang_2020.pdf` | Wang H et al., Increased risk of occupational trichlor…, Environmental research (2020) | pgx | 8 | [10.1016/j.envres.2020.109972](https://doi.org/10.1016/j.envres.2020.109972) | [32758551](https://www.ncbi.nlm.nih.gov/pubmed/32758551) | metadata signals extractable PGX data (HLA-B*13, PK/PD-context) |
| `Yang_2019.pdf` | Yang P et al., Urinary Biomarker of Prenatal Exposure…, Environmental science & tec… (2019) | pgx | 8 | [10.1021/acs.est.9b03847](https://doi.org/10.1021/acs.est.9b03847) | [31525872](https://www.ncbi.nlm.nih.gov/pubmed/31525872) | metadata signals extractable PGX data (CYP2E1, PK/PD-context) |
| `Indjova_2003.pdf` | Indjova D et al., Determination of thiopurine methyltrans…, Therapeutic drug monitoring (2003) | pgx | 5 | [10.1097/00007691-200310000-00014](https://doi.org/10.1097/00007691-200310000-00014) | [14508388](https://www.ncbi.nlm.nih.gov/pubmed/14508388) | metadata signals extractable PGX data (TPMT) |

<sub>queue written 2026-11-15 17:36 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Zhu_2026 | irrelevant | 0 | 0 | no_text gate: only 132 chars of text extracted (&lt; 400) |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btrichloroacetic_acid%5D&body=Drug%3A%20trichloroacetic_acid%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_trichloroacetic_acid/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
