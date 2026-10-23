<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;gliquidone&quot;}]"></div>

# gliquidone

- **generic name:** gliquidone
- **ATC codes:** `A10BB08`
- **DrugBank:** [DB01251](https://go.drugbank.com/drugs/DB01251) · **PubChem:** [CID 91610](https://pubchem.ncbi.nlm.nih.gov/compound/91610)
- **molar mass:** 527.632 g/mol (C27H33N3O6S) — DrugBank
- **groups:** approved

## About

Gliquidone is a sulfonylurea used to lower blood sugar in people with diabetes. It is an approved anti-diabetic medication, though it is not authorised in the European Union and is used only in some countries.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5569924](https://www.wikidata.org/wiki/Q5569924) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=gliquidone).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP2C9` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: ABCC8 (inhibitor), KCNJ10 (binder), KCNJ8 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 21:16 | 0:14 | 0/0/0 | 0/0/0 | 0/0/0 | 35,094/662 | einfracz / qwen3.8-27b | 2 | 0/2 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 26 matched, 26 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_6 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `von_1997.pdf` | von Nicolai H et al., Duration of action and pharmacokinetics…, Arzneimittel-Forschung (1997) | popPK | 10 | not captured | [9105542](https://pubmed.ncbi.nlm.nih.gov/9105542) | The study reports quantitative pharmacokinetic parameters (Cmax, tmax, AUC, half-lives) for gliquidone in humans, with values explicitly stated in the provided abstract/text. |
| `Liu_2015.pdf` | Liu SY et al., The effect of gliquidone on KATP channe…, Diabetes research and clini… (2015) | pd | 4 | [10.1016/j.diabres.2015.05.036](https://doi.org/10.1016/j.diabres.2015.05.036) | [26044612](https://www.ncbi.nlm.nih.gov/pubmed/26044612) | metadata signals extractable PD data (IC50) |
| `Yang_2024.pdf` | Yang C et al., Inhibition of Cardiac Kv4.3/KChIP2 Chan…, Molecular pharmacology (2024) | pd | 4 | [10.1124/molpharm.123.000787](https://doi.org/10.1124/molpharm.123.000787) | [38164605](https://www.ncbi.nlm.nih.gov/pubmed/38164605) | metadata signals extractable PD data (IC50) |
| `Zini_1991.pdf` | Zini S et al., Characterization of sulfonylurea recept…, The Journal of pharmacology… (1991) | pd | 4 | not captured | [1658303](https://www.ncbi.nlm.nih.gov/pubmed/1658303) | metadata signals extractable PD data (IC50) |
| `He_2014.pdf` | He F et al., Contribution of cytochrome P450 isoform…, Xenobiotica; the fate of fo… (2014) | pgx | 7 | [10.3109/00498254.2013.831957](https://doi.org/10.3109/00498254.2013.831957) | [23987740](https://www.ncbi.nlm.nih.gov/pubmed/23987740) | metadata signals extractable PGX data (CYP450, PK/PD-context) |
| `Huang_2022.pdf` | Huang L et al., Effects of high-altitude environment on…, Zhejiang da xue xue bao. Yi… (2022) | pgx | 7 | [10.3724/zdxbyxb-2022-0129](https://doi.org/10.3724/zdxbyxb-2022-0129) | [37202102](https://www.ncbi.nlm.nih.gov/pubmed/37202102) | metadata signals extractable PGX data (CYP2C9, PK/PD-context) |

<sub>queue written 2026-10-07T21:16:14.882568+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Cerasi_1979 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamic effect of gliquidone on insulin secretion and does not report pharmacokinetic disposition parameters such as clearance or volume. |
| popPK | Decker_2009 | irrelevant | 0 | 0 | The study focuses on prednisolone pharmacokinetics and dosing, with gliquidone mentioned only as a co-administered antidiabetic drug without any PK parameters reported. |
| PD | Decker_2009 | not_relevant | 0 | 0 | The paper studies prednisolone dosing and only mentions gliquidone as a comorbidity medication (antidiabetic) without reporting any pharmacodynamic or exposure-response data for it. |
| popPK | Hartmann_2010 | irrelevant | 0 | 0 | The paper is a general review of drug therapy in renal failure that mentions gliquidone only as a recommended alternative agent, without reporting any quantitative pharmacokinetic parameters. |
| PD | Hartmann_2010 | not_relevant | 1 | 0 | The paper is a general review of drug therapy in renal failure that mentions gliquidone only as a qualitative alternative to glibenclamide, without providing any numeric PD parameters or exposure-response data. |
| popPK | Haupt_1977 | irrelevant | 0 | 0 | The study focuses on pharmacodynamics (blood glucose and insulin levels) rather than pharmacokinetic disposition parameters. |
| popPK | He_2014 | irrelevant | 0 | 0 | no_text gate: only 83 chars of text extracted (&lt; 400) |
| PD | He_2014 | not_relevant | 0 | 0 | The paper focuses on the metabolic pathways and CYP450 isoform contribution to gliquidone clearance, not on pharmacodynamic or exposure-response relationships. |
| PGx | He_2014 | not_relevant | 1 | 1 | The paper focuses on cytochrome P450 isoform contributions in rats and humans but does not report a pharmacogenomic effect (gene variant/genotype) on a PK/PD parameter. |
| PGx | Holstein_2011 | not_relevant | 2 | 5 | The study reports an association between genotype and dose (PK surrogate) rather than a measured change in pharmacokinetic or pharmacodynamic parameters for gliquidone. |
| PGx | Huang_2022 | not_relevant | 0 | 0 | The study investigates environmental effects (high altitude) on pharmacokinetics in rats, not genetic variants or pharmacogenomic effects. |
| popPK | Liu_2015 | irrelevant | 0 | 0 | no_text gate: only 113 chars of text extracted (&lt; 400) |
| popPK | Lueangaramkul_2026 | irrelevant | 0 | 0 | The paper reports in vitro antiviral activity and IC50 values for gliquidone against a viral protease, not pharmacokinetic disposition parameters. |
| popPK | Ocaña_1993 | irrelevant | 0 | 0 | The study is a pharmacological investigation of antinociception in mice where gliquidone is used as a K+ channel blocker, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Ocaña_1993_2 | irrelevant | 0 | 0 | The study is a pharmacological investigation of gliquidone's mechanism of action on morphine-induced hypermotility in mice and does not report any pharmacokinetic parameters. |
| popPK | Ocaña_1994 | irrelevant | 0 | 0 | The study is a pharmacological investigation of antinociception in mice where gliquidone is used as a KATP channel blocker, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Ocaña_1996 | irrelevant | 0 | 0 | The study is a pharmacological investigation of antinociception in mice where gliquidone is used as a KATP channel blocker (comparator/antagonist), not as the subject drug for PK analysis, and no PK parameters are reported. |
| PD | Ocaña_1996 | not_relevant | 3 | 2 | The paper reports a qualitative dose-dependent antagonism of cromakalim's effect by gliquidone, but does not provide numeric PD parameters (e.g., IC50, Emax) or a quantitative concentration-effect curve for gliquidone. |
| popPK | Procacci_1988 | irrelevant | 0 | 0 | no_text gate: only 107 chars of text extracted (&lt; 400) |
| popPK | Vázquez_2024 | irrelevant | 0 | 0 | The study focuses on the antiparasitic efficacy of gliquidone in vitro and in vivo, not on its pharmacokinetic disposition parameters. |
| popPK | Yang_2024 | irrelevant | 0 | 0 | no_text gate: only 75 chars of text extracted (&lt; 400) |
| PGx | Zeng_2017 | not_relevant | 0 | 0 | The paper does not report a pharmacogenomic effect of gene variants on the PK/PD parameters of gliquidone; instead, gliquidone is merely used as an internal standard for a method validating TKIs, and the pharmacogenomic data is limited to imatinib with no significant differences found. |
| popPK | Zhou_2025 | irrelevant | 1 | 0 | The study investigates the pharmacokinetics of tofacitinib as the subject drug, with gliquidone serving only as a co-administered inhibitor/comparator agent. |
| popPK | Zini_1991 | irrelevant | 0 | 0 | no_text gate: only 158 chars of text extracted (&lt; 400) |
| PD | Zini_1991 | not_relevant | 0 | 0 | The paper focuses on the mechanism of action of potassium channel openers on cholinergic neurotransmission in guinea pig intestine and does not report pharmacokinetic or pharmacodynamic exposure-response data for gliquidone. |
| PD | von_1997 | not_relevant | 0 | 0 | The provided text is only the title of the paper and does not contain the full text, abstract, or data required to determine if numeric PD parameters or exposure-response relationships are reported. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
