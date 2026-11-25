<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D03A&quot;,&quot;href&quot;:&quot;atc/D03A.md&quot;},{&quot;label&quot;:&quot;trolamine&quot;}]"></div>

# trolamine

- **generic name:** trolamine
- **ATC codes:** `D03AX12`
- **DrugBank:** [DB13747](https://go.drugbank.com/drugs/DB13747) · **PubChem:** [CID 7618](https://pubchem.ncbi.nlm.nih.gov/compound/7618)
- **molar mass:** 149.1882 g/mol (C6H15NO3) — DrugBank
- **groups:** approved

## About

Trolamine is a cicatrizing topical agent indicated for the treatment of wounds and ulcers. It is administered topically in forms such as cream, gel, or lotion, and may also be used via extracorporeal application. The drug is approved for use.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q424314](https://www.wikidata.org/wiki/Q424314), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

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
| 2026-11-24 08:07 | 0:03 | 0/0/0 | 0/0/0 | 0/0/0 | 3,995/168 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 14 matched, 14 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ochs_1984.pdf` | Ochs DL et al., Ca2+-stimulated, Mg2+-dependent ATPase…, The Journal of biological c… (1984) | pd | 4 |  | [6142882](https://www.ncbi.nlm.nih.gov/pubmed/6142882) | metadata signals extractable PD data (EC50) |
| `Główka_2007.pdf` | Główka F et al., Enantioselective CE method for pharmaco…, Electrophoresis (2007) | pgx | 8 | [10.1002/elps.200600736](https://doi.org/10.1002/elps.200600736) | [17657761](https://www.ncbi.nlm.nih.gov/pubmed/17657761) | metadata signals extractable PGX data (CYP450, PK/PD-context) |

<sub>queue written 2026-11-24 08:07 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chien_1980 | irrelevant | 0 | 0 | The paper reports on the oxygen equilibrium of carp hemoglobin and is unrelated to the pharmacokinetics of trolamine. |
| PGx | Chien_1980 | not_relevant | 0 | 0 | The paper investigates the oxygen equilibrium of carp hemoglobin and is unrelated to the pharmacokinetics or pharmacodynamics of trolamine. |
| popPK | Findlay_1987 | irrelevant | 0 | 0 | The paper is an in-vitro biochemistry study on enzyme dissociation in triethanolamine buffer, not a pharmacokinetic study of trolamine. |
| PGx | Findlay_1987 | not_relevant | 0 | 0 | The paper concerns the structural dissociation of the enzyme formiminotransferase-cyclodeaminase and has no relation to trolamine or pharmacogenomics. |
| popPK | Guse_1994 | irrelevant | 0 | 0 | The study is an in vitro mechanistic study on Calcium signaling in T-lymphocytes and does not report pharmacokinetic parameters for trolamine. |
| PGx | Guse_1994 | not_relevant | 0 | 0 | The paper does not mention trolamine and focuses on the cellular mechanisms of 4-AP induced calcium signaling in Jurkat T-cells. |
| popPK | Główka_2007 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of ibuprofen, not trolamine. |
| PGx | Główka_2007 | not_relevant | 0 | 0 | The paper concerns the pharmacokinetics of ibuprofen, not trolamine. |
| popPK | Lee_2013 | irrelevant | 0 | 0 | The paper describes an in vitro enzymatic reaction (P450-catalyzed O-dealkylation) and does not involve trolamine or any pharmacokinetic studies. |
| PGx | Lee_2013 | not_relevant | 0 | 0 | The paper discusses P450 catalysis and NADPH regeneration in a synthetic biology context and does not mention trolamine or any human pharmacogenomic analysis. |
| popPK | Libralato_2010 | irrelevant | 0 | 0 | The paper is an ecotoxicity study of amine compounds (MEA, DEA, TEA) in aquatic species, not a pharmacokinetic study of trolamine. |
| PGx | Libralato_2010 | not_relevant | 0 | 0 | The paper focuses on the ecotoxicology of alkanolamines in seawater and contains no information regarding trolamine or pharmacogenomic effects on PK/PD parameters. |
| popPK | Lu_2007 | irrelevant | 0 | 0 | The paper focuses on the analysis of fluoxetine and its metabolite, not trolamine. |
| PGx | Lu_2007 | not_relevant | 0 | 0 | The paper describes an analytical method for fluoxetine and does not report any pharmacogenomic effects for trolamine or any other drug. |
| popPK | Macri_2009 | irrelevant | 0 | 0 | The paper studies dendritic amphiphiles for antimicrobial properties and does not involve the drug trolamine or any pharmacokinetic modeling. |
| PGx | Macri_2009 | not_relevant | 0 | 0 | The paper focuses on the antimicrobial and cytotoxic properties of dendritic amphiphiles and does not involve pharmacogenomics or pharmacokinetics/pharmacodynamics of trolamine. |
| popPK | Müller-Decker_1994 | irrelevant | 0 | 0 | The study is an in vitro irritancy assay using surfactants and unrelated compounds; trolamine is not the subject drug and no PK parameters are reported. |
| PGx | Müller-Decker_1994 | not_relevant | 0 | 0 | The paper focuses on in vitro skin irritation assays and does not report pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of trolamine. |
| popPK | Ochs_1984 | irrelevant | 0 | 0 | The study investigates the mechanism of Ca2+-stimulated ATPase activity in neutrophils and does not report pharmacokinetic parameters for trolamine. |
| PGx | Ochs_1984 | not_relevant | 0 | 0 | The paper studies Ca2+-stimulated ATPase activity in neutrophils and does not mention the drug trolamine or any pharmacogenomic analysis. |
| popPK | Qusa_2024 | irrelevant | 0 | 0 | The study is an in-vitro metabolism and transporter inhibition assay where trolamine is a probe compound, not a study of its pharmacokinetic disposition parameters. |
| PGx | Qusa_2024 | not_relevant | 0 | 0 | The paper investigates in vitro drug-drug interactions (inhibition of CYP2C9 and transporters) caused by trolamine, but does not report any pharmacogenomic effects (gene variants) on trolamine's PK or PD. |
| popPK | Spalding_1999 | irrelevant | 0 | 0 | The paper describes a carcinogenesis bioassay in transgenic mice using six chemicals (including triethanolamine, not trolamine) and does not report any pharmacokinetic parameters for trolamine. |
| PGx | Spalding_1999 | not_relevant | 0 | 0 | The paper discusses a transgenic mouse model for carcinogenesis using various chemicals, but does not mention trolamine or any pharmacogenomic effects on PK/PD parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btrolamine%5D&body=Drug%3A%20trolamine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_trolamine/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
