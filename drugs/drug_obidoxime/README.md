<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V03A&quot;,&quot;href&quot;:&quot;atc/V03A.md&quot;},{&quot;label&quot;:&quot;obidoxime&quot;}]"></div>

# obidoxime

- **generic name:** obidoxime
- **ATC codes:** `V03AB13`
- **DrugBank:** [DB13750](https://go.drugbank.com/drugs/DB13750) · **PubChem:** none
- **molar mass:** 288.3018 g/mol (C14H16N4O3) — DrugBank
- **groups:** experimental

## About

Obidoxime is an antidote classified as an experimental chemical compound.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q27284629](https://www.wikidata.org/wiki/Q27284629) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Marquart_2019_AChE](drugs/drug_obidoxime/pd_Marquart_2019_AChE.md) | AChE activity ← obidoxime · direct sigmoid Emax (Hill) effect | — | Marquart K et al., Human small bowel as model for poisonin…, Toxicology in vitro : an in… (2019) | [10.1016/j.tiv.2019.02.010](https://doi.org/10.1016/j.tiv.2019.02.010) |
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span> | [Marquart_2018_SM_relaxation](drugs/drug_obidoxime/pd_Marquart_2018_SM_relaxation.md) | smooth muscle relaxation ← obidoxime · direct sigmoid Emax (Hill) effect | — | Marquart K et al., Human small bowel as a useful tool to i…, Toxicology letters (2018) | [10.1016/j.toxlet.2017.11.012](https://doi.org/10.1016/j.toxlet.2017.11.012) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 02:37 | 0:03 | 0/0/0 | 1/1/0 | 0/0/0 | 4,394/163 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Marquart_2019.pdf` | Marquart K et al., Human small bowel as model for poisonin…, Toxicology in vitro : an in… (2019) | pd | 5 | [10.1016/j.tiv.2019.02.010](https://doi.org/10.1016/j.tiv.2019.02.010) | [30763608](https://www.ncbi.nlm.nih.gov/pubmed/30763608) | metadata signals extractable PD data (EC50) |
| `Tränkle_1996.pdf` | Tränkle C et al., Search for lead structures to develop n…, The Journal of pharmacology… (1996) | pd | 5 |  | [8930201](https://www.ncbi.nlm.nih.gov/pubmed/8930201) | metadata signals extractable PD data (EC50) |
| `Marquart_2018.pdf` | Marquart K et al., Human small bowel as a useful tool to i…, Toxicology letters (2018) | pd | 4 | [10.1016/j.toxlet.2017.11.012](https://doi.org/10.1016/j.toxlet.2017.11.012) | [29154801](https://www.ncbi.nlm.nih.gov/pubmed/29154801) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-11-24 02:37 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Alioth-Streichenberg_1991 | relevant | 8 | 4 | The study reports obidoxime PK in rats with a two-compartment model and provides half-life and excretion percentages, but specific clearance (CL), volume (V), and rate constants (ka, Q) values are not explicitly listed in the evidence text. |
| PGx | Alioth-Streichenberg_1991 | not_relevant | 0 | 0 | The study investigates the effect of sarin poisoning (pathological state) on obidoxime pharmacokinetics and pharmacodynamics in rats, not the effect of genetic variants or genotypes (pharmacogenomics). |
| popPK | Chiou_1994 | irrelevant | 1 | 0 | The study is an in-vitro mechanistic investigation of neuromuscular antagonism in mouse phrenic nerve/diaphragm preparations, reporting EC50 values rather than pharmacokinetic disposition parameters. |
| PGx | Chiou_1994 | not_relevant | 0 | 0 | The study investigates mechanisms of action in mouse preparations and contains no data on gene variants or pharmacogenomic effects on PK/PD parameters. |
| popPK | Eyer_2007 | irrelevant | 2 | 0 | The text is a review/clinical summary focusing on AChE reactivity and qualitative effectiveness; it mentions dosing and target plasma concentrations but does not report quantitative PK disposition parameters (CL, V, t1/2) for obidoxime. |
| PGx | Eyer_2007 | not_relevant | 5 | 0 | The text mentions that the PON1 (192)arginine phenotype affects the reactivation of AChE (a PD parameter) due to the hydrolysis of phosphorylated obidoxime, but no specific quantitative effect sizes or fitted parameters are reported in the provided text. |
| popPK | Horn_2023 | irrelevant | 0 | 0 | The study is an in vitro toxicity assay measuring cytotoxicity and enzyme release, not a pharmacokinetic study reporting disposition parameters. |
| PGx | Horn_2023 | not_relevant | 0 | 0 | The paper investigates oxime-induced hepatotoxicity in an in vitro HepaRG model but does not report any pharmacogenomic variants or their effects on PK/PD parameters. |
| popPK | Marquart_2018 | irrelevant | 0 | 0 | The study reports in vitro pharmacodynamics (smooth muscle relaxation and cholinesterase activity) rather than pharmacokinetic parameters (CL, V, t1/2) for obidoxime. |
| PGx | Marquart_2018 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamic effects of obidoxime on smooth muscle tissue in different species but does not report any pharmacogenomic effects. |
| popPK | Marquart_2019 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic spasmolytic and cholinesterase reactivation effects of obidoxime in human small bowel tissue, reporting EC50 values rather than pharmacokinetic disposition parameters like clearance or volume. |
| PGx | Marquart_2019 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamic effects of obidoxime in a tissue model but does not report any pharmacogenomic effects involving gene variants or genotypes. |
| popPK | Thiermann_2009 | irrelevant | 2 | 0 | The study focuses on PK/PD relationships and biochemical effects (AChE activity) rather than reporting quantitative pharmacokinetic disposition parameters (CL, V, ka) for obidoxime, and no numeric PK values are present in the evidence. |
| PGx | Thiermann_2009 | not_relevant | 0 | 0 | The paper describes the general pharmacokinetic and pharmacodynamic relationships of obidoxime in organophosphate poisoning but does not investigate the impact of specific gene variants or genotypes on these parameters. |
| popPK | Tränkle_1996 | irrelevant | 0 | 0 | The study is an in-vitro receptor binding assay investigating allosteric modulation, containing no pharmacokinetic parameters for obidoxime. |
| PGx | Tränkle_1996 | not_relevant | 0 | 0 | The paper investigates the allosteric modulation of muscarinic receptors by various compounds, including obidoxime, but does not report any pharmacogenomic effects on its pharmacokinetic or pharmacodynamic parameters. |
| popPK | Tränkle_1998 | irrelevant | 0 | 0 | The study is an in vitro receptor binding investigation using obidoxime as a reference allosteric agent, not a pharmacokinetic study reporting disposition parameters for obidoxime. |
| PGx | Tränkle_1998 | not_relevant | 0 | 0 | The paper reports receptor binding data and pharmacology of muscarinic M2 receptors, with no genetic variants or pharmacogenomic effects on obidoxime PK/PD. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bobidoxime%5D&body=Drug%3A%20obidoxime%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_obidoxime/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
