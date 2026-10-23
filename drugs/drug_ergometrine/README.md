<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;G02A&quot;,&quot;href&quot;:&quot;atc/G02A.md&quot;},{&quot;label&quot;:&quot;ergometrine&quot;}]"></div>

# ergometrine

- **generic name:** ergometrine
- **ATC codes:** `G02AB03`
- **DrugBank:** [DB01253](https://go.drugbank.com/drugs/DB01253) · **PubChem:** [CID 443884](https://pubchem.ncbi.nlm.nih.gov/compound/443884)
- **molar mass:** 325.4048 g/mol (C19H23N3O2) — DrugBank
- **groups:** approved, investigational

## About

Ergometrine is a uterotonic ergot alkaloid used to prevent and treat excessive bleeding after childbirth. It remains in clinical use and is included on the WHO list of essential medicines.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q424508](https://www.wikidata.org/wiki/Q424508) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=ergometrine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | skeletal muscle | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| absorption | small intestine | `ABCB1` inhibitor | DrugBank actor |
| distribution | blood-brain barrier | `ABCB1` inhibitor | DrugBank actor |
| distribution | placenta | `ABCB1` inhibitor | DrugBank actor |
| distribution | testis | `ABCB1` inhibitor | DrugBank actor |
| metabolism | liver | `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | `ABCB1` inhibitor | DrugBank actor |
| excretion | liver | `ABCB1` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: ADRA1A (target), DRD2 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 08:15 | 3:27 | 0/0/0 | 0/0/0 | 0/0/0 | 192,965/2,584 | einfracz / qwen3.8-27b | 6 | 0/4 | 6/0 | 0 |

## Coverage

- **PubMed hits:** 47 matched, 47 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `de_1994.pdf` | de Groot AN et al., Pharmacokinetics and bioavailability of…, Biopharmaceutics & drug dis… (1994) | popPK | 10 | [10.1002/bdd.2510150106](https://doi.org/10.1002/bdd.2510150106) | [8161717](https://pubmed.ncbi.nlm.nih.gov/8161717) | The paper reports quantitative PK parameters (CL, Vss, half-lives, ka/t1/2abs) for ergometrine in humans, with all numeric values explicitly present in the text. |

<sub>queue written 2026-10-07T08:14:33.660005+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Angus_1982 | not_relevant | 0 | 0 | The paper investigates verapamil's pharmacodynamics in coronary arteries and does not report any genetic variants or genotypes affecting the PK or PD of ergometrine. |
| popPK | Bafor_2011 | irrelevant | 0 | 0 | This is an in vitro pharmacodynamics study on isolated rat uterus examining uterine contractions, not a pharmacokinetic study reporting disposition parameters for ergometrine. |
| PGx | Benacerraf_1982 | not_relevant | 0 | 0 | The paper describes clinical cases of coronary spasm using ergometrine as a diagnostic provocation agent and reports the efficacy of calcium antagonists, but does not study the impact of gene variants on ergometrine pharmacokinetics or pharmacodynamics. |
| popPK | Brazenor_1981 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of receptor mechanisms in canine coronary arteries, not a pharmacokinetic study of disposition parameters. |
| popPK | Brown_1979 | irrelevant | 0 | 0 | The study characterizes adrenergic receptors in rat sympathetic ganglia using ergometrine as a pharmacological probe, not a pharmacokinetic analysis. |
| popPK | Cocks_1993 | irrelevant | 0 | 0 | This is an in-vitro pharmacodynamic study measuring contractile forces in isolated human coronary arteries, not a pharmacokinetic study. |
| popPK | Crankshaw_2017 | irrelevant | 0 | 0 | This is an in-vitro pharmacodynamic study investigating myometrial contractions, not a pharmacokinetic study, and ergometrine is used only as a comparative uterotonic agent. |
| popPK | Deckert_1992 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of receptor subtypes in rat basilar arteries, using ergometrine as an antagonist probe rather than reporting its pharmacokinetic disposition parameters. |
| popPK | EFSA_2024 | irrelevant | 0 | 0 | The paper is a risk assessment opinion regarding animal health and feed exposure to ergot alkaloids, not a pharmacokinetic study reporting quantitative disposition parameters for ergometrine. |
| popPK | Fanning_2017 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of ergometrine's effect on myometrial contractions and does not report pharmacokinetic parameters. |
| popPK | Goessens_2024 | irrelevant | 0 | 0 | The paper is a systematic review protocol regarding dietary mycotoxin exposure and human health, with no mention of ergometrine or pharmacokinetic parameters. |
| popPK | Liu_2025 | irrelevant | 0 | 0 | The study focuses on oxytocin for labor induction and outcomes, mentioning ergometrine only as a rescue treatment for hemorrhage without providing any pharmacokinetic parameters for it. |
| popPK | Louie_1985 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of ergometrine's effect on airway smooth muscle contractility in dogs, reporting EC50 values rather than pharmacokinetic disposition parameters (CL, V, ka, t1/2). |
| popPK | Morrison_2016 | irrelevant | 0 | 0 | This is an in vitro pharmacological study evaluating contractile effects on myometrium, not a pharmacokinetic study reporting disposition parameters for ergometrine. |
| PGx | Mulac_2012 | not_relevant | 0 | 0 | The paper investigates the permeability of ergot alkaloids across the blood-brain barrier in an in vitro model without assessing any gene variants or pharmacogenomic effects. |
| popPK | Odum_1989 | irrelevant | 0 | 0 | The study is an in-vitro pharmacodynamic assay measuring myometrial contraction, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Roon_1999 | irrelevant | 0 | 0 | This is an in-vitro pharmacodynamic study of isolated arteries, not a pharmacokinetic study. |
| popPK | Sakamoto_1989 | irrelevant | 0 | 0 | The study is an in vitro pharmacological investigation of the mechanism of ergonovine-induced airway smooth muscle contraction (receptor affinity, EC50) and does not report pharmacokinetic parameters such as clearance, volume of distribution, or half-life. |
| popPK | Weibel_2020 | irrelevant | 0 | 0 | The paper is a network meta-analysis regarding the efficacy of antiemetic drugs for preventing postoperative nausea and vomiting; ergometrine is not mentioned, studied, or reported with pharmacokinetic parameters. |
| popPK | Yonpiam_2021 | irrelevant | 0 | 0 | The study investigates the vasoactive mechanisms of ergot alkaloids (including ergometrine) in sheep tissue baths, not the pharmacokinetic disposition parameters (CL, V, ka) of the drug. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
