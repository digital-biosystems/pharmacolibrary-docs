<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Masoprocol&quot;}]"></div>

# Masoprocol

- **generic name:** Masoprocol
- **T3DB:** [T3D4813](http://www.t3db.ca/toxins/T3D4813) · **DrugBank:** [DB00179](https://go.drugbank.com/drugs/DB00179) · **PubChem:** [CID 71398](https://pubchem.ncbi.nlm.nih.gov/compound/71398)
- **groups:** investigational

## About

A potent lipoxygenase inhibitor that interferes with arachidonic acid metabolism. The compound also inhibits formyltetrahydrofolate synthetase, carboxylesterase, and cyclooxygenase to a lesser extent. It also serves as an antioxidant in fats and oils.

- **Category:** Drug, Food Toxin, Synthetic Toxin
- **Route of exposure:** less than 1%-2% is absorbed through the skin over a 4-day period following application.
- **Sources and uses:** Used for the treatment of actinic keratoses (precancerous skin growths that can become malignant if left untreated).
- **Mechanism of toxicity:** Although the exact mechanism of action is not known, studies have shown that masoprocol is a potent 5-lipoxygenase inhibitor and has antiproliferative activity against keratinocytes in tissue culture, but the relationship between this activity and its effectiveness in actinic keratoses is unknown. Masoprocol also inhibits prostaglandins but the significance of this action is not yet known.

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D4813">T3DB T3D4813</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 500-38-9</small></p>

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=masoprocol).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | skin | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: ALOX5 (inhibitor), ERBB2 (modulator), SHBG (unknown), TRPM7 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-18 12:07 | 5:47 | 0/0/0 | 0/0/0 | 0/0/0 | 82,076/3,871 | einfracz / qwen3.8-flash-next | 3 | 0/2 | 3/0 | 0 |

## Coverage

- **PubMed hits:** 18 matched, 18 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Lambert_2001.pdf` | Lambert JD et al., Pharmacokinetic analysis by high-perfor…, Journal of chromatography.… (2001) | popPK | 10 | [10.1016/s0378-4347(00)00592-2](https://doi.org/10.1016/s0378-4347(00)00592-2) | [11318430](https://pubmed.ncbi.nlm.nih.gov/11318430) | The paper explicitly reports the terminal half-life and clearance values for masoprocol (Nordihydroguaiaretic acid) following intravenous administration in mice. |

<sub>queue written 2026-11-18 12:07 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Al-Shuhaib_2024 | irrelevant | 0 | 0 | The paper reports in silico docking and MD simulations with no quantitative toxicokinetic parameters or experimental disposition data for masoprocol. |
| popPK | Anjaneyulu_2004 | irrelevant | 0 | 0 | The paper reports on the efficacy of NDGA in treating diabetic nephropathy in rats, providing only dose-response and physiological outcome data without any quantitative toxicokinetic parameters. |
| popPK | Argenzio_1989 | irrelevant | 0 | 0 | The paper studies colonic damage in pigs using masoprocol (nordihydroguaiaretic acid) only as an ineffective lipoxygenase inhibitor, with no toxicokinetic parameters reported. |
| popPK | Dempsey_1986 | irrelevant | 0 | 0 | The paper discusses arachidonic acid metabolites and cerebral edema in gerbils using NDGA, with no mention or data regarding masoprocol. |
| popPK | Dhanabalan_2024 | irrelevant | 0 | 0 | The paper concerns Nordihydroguaiaretic acid (NDGA), not masoprocol, and reports no kinetic parameters for masoprocol. |
| popPK | Fourie_2017 | irrelevant | 0 | 0 | The paper focuses on microbial eicosanoid production and does not report quantitative toxicokinetic parameters for masoprocol. |
| popPK | Jeong_2017 | irrelevant | 0 | 0 | The paper focuses on Larrea nitida and its lignans (NDGA, MNDGA) and does not mention masoprocol as a subject or report any toxicokinetic parameters for masoprocol. |
| popPK | Kishioka_1999 | irrelevant | 0 | 0 | The paper studies perflubron and its effect on mucin secretion, with no mention of masoprocol or any toxicokinetic parameters for masoprocol. |
| popPK | Ley-Martínez_2022 | irrelevant | 0 | 0 | The paper discusses 6-gingerol and 6-shogaol from ginger, not masoprocol, and contains no toxicokinetic data for masoprocol. |
| popPK | Lü_2010 | irrelevant | 0 | 0 | The paper is a general review of NDGA (masoprocol) pharmacology and mentions pharmacokinetics qualitatively but contains no quantitative kinetic parameters in the provided text. |
| popPK | Reed_1999 | irrelevant | 0 | 0 | The paper reports metabolic outcomes (glucose, triglycerides) but contains no quantitative toxicokinetic parameters (such as half-life, clearance, or partition coefficients) for masoprocol. |
| popPK | Ryan_2008 | irrelevant | 0 | 0 | The paper focuses on NDGA (nordihydroguaretic acid), a different substance from masoprocol, and reports no toxicokinetic parameters for masoprocol. |
| popPK | Scribner_2000 | irrelevant | 3 | 9 | The paper reports a triglyceride half-time (a pharmacodynamic outcome of lipid metabolism), not a toxicokinetic parameter of masoprocol itself (e.g., masoprocol half-life, clearance, or partition coefficients). |
| popPK | Suchý_2016 | irrelevant | 0 | 0 | The paper studies the release of vancomycin from a collagen composite; masoprocol (nordihydroguaiaretic acid) is used only as a cross-linking agent, with no kinetic parameters reported. |
| popPK | Zhang_2016 | irrelevant | 1 | 0 | The paper is a gene expression and metabolic outcome study in rats regarding NDGA effects on lipid metabolism, reporting no quantitative toxicokinetic parameters (e.g., half-life, clearance, partition coefficients) for masoprocol or its metabolites. |
| popPK | el_1985 | irrelevant | 0 | 0 | The paper focuses on indomethacin and prostaglandin pathways, with no mention of masoprocol. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmasoprocol%5D&body=Drug%3A%20masoprocol%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_masoprocol/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
