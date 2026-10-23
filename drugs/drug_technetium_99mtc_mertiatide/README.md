<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V09C&quot;,&quot;href&quot;:&quot;atc/V09C.md&quot;},{&quot;label&quot;:&quot;technetium (99mTc) mertiatide&quot;}]"></div>

# technetium (99mTc) mertiatide

- **generic name:** technetium (99mTc) mertiatide
- **ATC codes:** `V09CA03`
- **DrugBank:** not captured · **PubChem:** not captured
- **groups:** not captured

## About

Technetium-99m mertiatide is a diagnostic radiopharmaceutical used for imaging of the kidneys. It is classified for renal system diagnostics and remains an established imaging agent.

<small>⚠️ **Unverified** — written by `glm-5.3-flash` from general knowledge (no Wikidata entry found) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| technetium_99mtc_mertiatide | metabolite | 417.207 | C8H8N3Na2O6STc | PubChem | [168313563](https://pubchem.ncbi.nlm.nih.gov/compound/168313563) | Peters_1994 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub> | [Peters_1994_reference](drugs/drug_technetium_99mtc_mertiatide/Technetium99mtcMertiatide_Peters1994_reference.md) | — | 1-compartment (no model) | 2 | Peters AM et al., Measurement of the extravascular concen…, Nuclear medicine communicat… (1994) | [10.1097/00006231-199402000-00002](https://doi.org/10.1097/00006231-199402000-00002) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 19:08 | 3:09 | 0/1/0 | 0/0/0 | 0/0/0 | 28,058/9,881 | openai / gpt-6-luna | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 359 matched, 18 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Peters_1994.pdf` | Peters AM et al., Measurement of the extravascular concen…, Nuclear medicine communicat… (1994) | popPK | 9 | [10.1097/00006231-199402000-00002](https://doi.org/10.1097/00006231-199402000-00002) | [8170640](https://pubmed.ncbi.nlm.nih.gov/8170640) | MAG3 has a reported numerical plasma clearance in the evidence. |
| `Piepsz_1994.pdf` | Piepsz A et al., Improving the accuracy of 99Tcm-mercapt…, Nuclear medicine communicat… (1994) | popPK | 9 | [10.1097/00006231-199407000-00006](https://doi.org/10.1097/00006231-199407000-00006) | [7970429](https://pubmed.ncbi.nlm.nih.gov/7970429) | The study models MAG3 clearance, but reports sample times and estimation errors rather than numeric clearance parameter values. |
| `Russell_1995.pdf` | Russell CD et al., Comparison of single-injection multisam…, Journal of nuclear medicine… (1995) | popPK | 8 | not captured | [7699449](https://pubmed.ncbi.nlm.nih.gov/7699449) | Human renal-clearance methods are compared, but only the difference between methods is reported, not the MAG3 clearance values themselves. |

<sub>queue written 2026-10-07T19:07:21.887388+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Beyer-Enke_1991 | irrelevant | 1 | 0 | Technetium-99m-MAG3 is a comparator, and no numeric disposition parameter values are reported. |
| popPK | Boss_2006 | irrelevant | 0 | 0 | This pediatric imaging study uses gadolinium and only compares results with MAG3 scintigraphy, reporting no mertiatide pharmacokinetic parameters. |
| popPK | Cayir_2016 | irrelevant | 1 | 0 | Technetium-99m mertiatide is used as a diagnostic agent, and no numeric disposition parameters are reported. |
| popPK | Dubovsky_1988 | irrelevant | 0 | 0 | This is a review of renal-transplant imaging and reports no quantitative pharmacokinetic parameter values. |
| popPK | Eshima_1990 | irrelevant | 2 | 0 | This is a review reporting only relative plasma clearance, with no numeric disposition parameter values. |
| popPK | Faure_2016 | irrelevant | 0 | 0 | This pediatric renography study reports urinary drainage and renal-function outcomes, not pharmacokinetic disposition parameters for technetium-99m mertiatide. |
| popPK | Ismaili_2005 | irrelevant | 0 | 0 | MAG3 is used as a diagnostic renogram; the reported values are renal-function measures, not its pharmacokinetic parameters. |
| popPK | Marboeuf_2010 | irrelevant | 0 | 0 | Technetium-99m MAG3 is used for renal scintigraphy, with no pharmacokinetic disposition parameters reported. |
| popPK | Piepsz_1994 | relevant | 9 | 2 | The study models MAG3 clearance, but reports sample times and estimation errors rather than numeric clearance parameter values. |
| popPK | Reiners_1993 | irrelevant | 0 | 0 | This clinical diagnostic review gives no quantitative pharmacokinetic disposition parameters for technetium-99m mertiatide. |
| popPK | Rossleigh_2001 | irrelevant | 0 | 0 | This review discusses diagnostic imaging in children and reports no quantitative pharmacokinetic parameters. |
| popPK | Russell_1995 | relevant | 8 | 3 | Human renal-clearance methods are compared, but only the difference between methods is reported, not the MAG3 clearance values themselves. |
| popPK | Szabo_2011 | irrelevant | 0 | 0 | This is a review that mentions Tc99m MAG3 but reports no quantitative disposition parameters. |
| popPK | Thorson_1992 | irrelevant | 0 | 0 | This is a kit-stability study with no quantitative pharmacokinetic disposition parameters. |
| popPK | Verdera_1994 | irrelevant | 1 | 0 | MAG3 is only a comparator, and no numeric disposition parameter values for it are provided. |
| popPK | Vranken_2005 | irrelevant | 0 | 0 | Technetium-99m MAG3 is used as a diagnostic tracer, with no quantitative pharmacokinetic disposition parameters reported. |
| popPK | Weber_1990 | irrelevant | 0 | 0 | This is a mouse study of a radiolabeled antibody conjugate, not technetium_99mtc_mertiatide, and reports no quantitative PK parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 19:07 UTC</sub>
