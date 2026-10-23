<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D08A&quot;,&quot;href&quot;:&quot;atc/D08A.md&quot;},{&quot;label&quot;:&quot;silver&quot;}]"></div>

# silver

- **generic name:** silver
- **ATC codes:** `D08AL30`
- **DrugBank:** [DB12965](https://go.drugbank.com/drugs/DB12965) · **PubChem:** [CID 23954](https://pubchem.ncbi.nlm.nih.gov/compound/23954)
- **molar mass:** 107.8682 g/mol (Ag) — DrugBank
- **groups:** approved, investigational

## About

Silver is used as an antiseptic, mainly in topical preparations for the skin such as wound and burn care. It remains in use as a dermatological antiseptic and disinfectant, though it is not an authorised EU medicine under EMA records.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q1090](https://www.wikidata.org/wiki/Q1090) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=silver).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| absorption | lung | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| absorption | skin | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| distribution | blood | `ALB` binder | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: A2M (binder), CP (binder), MTF1 (binder).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 07:43 | 1:36 | 0/0/0 | 0/0/0 | 0/0/0 | 163,451/1,826 | einfracz / qwen3.8-27b | 11 | 1/10 | 11/0 | 0 |

## Coverage

- **PubMed hits:** 234 matched, 20 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ellenikiotis_2022.pdf` | Ellenikiotis H et al., Pharmacokinetics of 38 Percent Silver D…, Pediatric dentistry (2022) | popPK | 10 | not captured | [35484770](https://pubmed.ncbi.nlm.nih.gov/35484770) | The study is a population PK study of silver, but specific numeric values for clearance, volume, and rate constants are not listed in the text, only simulated peak concentrations and half-lives. |

<sub>queue written 2026-10-07T07:42:52.139268+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Alcívar_2021 | irrelevant | 0 | 0 | The paper is an ecotoxicology review focusing on species sensitivity distributions and avoidance behavior for silver nanoparticles, not a pharmacokinetic study of silver disposition parameters. |
| popPK | Bibi_2024 | irrelevant | 0 | 0 | The paper studies the behavior of pheasants (including Silver Pheasants) in response to visitors, not the pharmacokinetics of the drug silver. |
| popPK | Boros_2020 | irrelevant | 0 | 0 | The paper is a review of ecotoxicology assessment methods for nanomaterials (including silver nanoparticles) and does not report population pharmacokinetic parameters (CL, V, etc.) for silver. |
| popPK | Calisi_2022 | irrelevant | 0 | 0 | The study focuses on ecotoxicology (LC50/EC50) and bioaccumulation in marine mussels, not on quantitative pharmacokinetic disposition parameters (CL, V, ka) for the drug silver. |
| popPK | Dong_2019 | irrelevant | 0 | 0 | The study focuses on the uptake and biodistribution of silver in bacteria (Escherichia coli) using analytical chemistry methods, not on pharmacokinetic modeling (CL, V, t1/2) in an animal or human subject. |
| popPK | Elkhateb_2025 | irrelevant | 0 | 0 | The paper is a retrospective study on the use of neuromuscular blocking agents (rocuronium, cisatracurium) and antagonists (sugammadex, neostigmine); silver is only mentioned as part of the location name "Silver Spring, Maryland" in the FDA reference and is not the subject drug. |
| popPK | Ellenikiotis_2022 | relevant | 10 | 2 | The study is a population PK study of silver, but specific numeric values for clearance, volume, and rate constants are not listed in the text, only simulated peak concentrations and half-lives. |
| popPK | Fekri_2025 | irrelevant | 0 | 0 | The study is an in vitro mechanistic analysis of the anticancer effects of silver nanoparticles and does not report pharmacokinetic parameters. |
| popPK | Grosell_2002 | irrelevant | 0 | 0 | The paper is a review on the mechanisms of acute metal toxicity and sodium turnover in freshwater animals, containing no pharmacokinetic parameter modeling or quantitative disposition values for silver. |
| popPK | Kamphof_2023 | irrelevant | 0 | 0 | This is a systematic review of the antimicrobial activity of ion-substituted calcium phosphates in vitro, containing no pharmacokinetic parameters (CL, V, t1/2) for silver as a drug. |
| popPK | Kawada_2015 | irrelevant | 0 | 0 | The paper describes the fabrication and properties of piezoelectric ceramics and does not contain any pharmacokinetic data or silver drug administration studies. |
| popPK | Moreno-Garrido_2015 | irrelevant | 0 | 0 | no_text gate: only 156 chars of text extracted (&lt; 400) |
| popPK | Peterson_2022 | irrelevant | 0 | 0 | This is an in vitro release study measuring the elution of silver nanoparticles from carrier media, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Sharpee_2016 | irrelevant | 0 | 0 | The paper is a program for the Computational Neuroscience Meeting 2016 and contains no pharmacokinetic data for silver. |
| popPK | Sterner_2024 | irrelevant | 0 | 0 | The paper is a clinical diabetes study where "SILVER" is a trial name, not the drug silver, and contains no pharmacokinetic data for the element silver. |
| popPK | Tiwari_2024 | irrelevant | 0 | 0 | The study evaluates the antimalarial activity and mechanism of action of silver nanoparticles in vitro, but does not report any pharmacokinetic parameters (clearance, volume, half-life, etc.) for silver in humans or animals. |
| popPK | Wang_2016 | irrelevant | 0 | 0 | The paper is a meta-analysis of ecotoxicology (LC50/EC50) for silver in freshwater organisms, not a pharmacokinetic study of silver disposition. |
| popPK | Wartman_2023 | irrelevant | 0 | 0 | The paper concerns electromagnetic modeling and adaptive mesh refinement, and the word "silver" is used as an idiom for "high-quality" ("silver-standard"), not the chemical element. |
| popPK | Xiao_2020 | irrelevant | 0 | 0 | The paper is a study on gender diversity in higher education and contains no pharmacokinetic data for the drug silver. |
| popPK | Yan_2025 | irrelevant | 0 | 0 | The study is a clinical trial of silver diamine fluoride for dental caries arrest and does not report pharmacokinetic parameters (e.g., clearance, volume) for silver. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
