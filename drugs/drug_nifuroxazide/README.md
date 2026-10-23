<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A07A&quot;,&quot;href&quot;:&quot;atc/A07A.md&quot;},{&quot;label&quot;:&quot;nifuroxazide&quot;}]"></div>

# nifuroxazide

- **generic name:** nifuroxazide
- **ATC codes:** `A07AX03`
- **DrugBank:** [DB13855](https://go.drugbank.com/drugs/DB13855) · **PubChem:** none
- **molar mass:** 275.22 g/mol (C12H9N3O5) — DrugBank
- **groups:** investigational

## About

Nifuroxazide is an intestinal anti-infective that has been used to treat diarrhoea. It is not authorised in the European Union and is considered investigational in major drug databases, though it remains available in some countries as an antidiarrhoeal.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q822929](https://www.wikidata.org/wiki/Q822929) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 18:18 | 1:08 | 0/0/0 | 0/0/0 | 0/0/0 | 52,016/631 | ollama / qwen3.8:27b-mtp-q8_0 | 3 | 0/6 | 3/0 | 0 |

## Coverage

- **PubMed hits:** 24 matched, 23 returned
- **screened:** 1  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Saber_2022.pdf` | Saber S et al., Nifuroxazide-loaded cubosomes exhibit a…, Biomedicine & pharmacothera… (2022) | popPK | 8 | [10.1016/j.biopha.2022.112731](https://doi.org/10.1016/j.biopha.2022.112731) | [35220029](https://pubmed.ncbi.nlm.nih.gov/35220029) | The study reports in vivo pharmacokinetic parameters for nifuroxazide in rats, but specific numeric values (CL, V, etc.) are not present in the provided abstract text. |
| `Hayder_2008.pdf` | Hayder N et al., In vitro antioxidant and antigenotoxic…, Toxicology in vitro : an in… (2008) | pd | 4 | [10.1016/j.tiv.2007.11.015](https://doi.org/10.1016/j.tiv.2007.11.015) | [18222061](https://www.ncbi.nlm.nih.gov/pubmed/18222061) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-04 18:17 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Almulhim_2026 | irrelevant | 0 | 0 | The paper focuses on the synthesis, structural characterization, and in-vitro biological activity of metal complexes of nifuroxazide, containing no pharmacokinetic data. |
| PD | Almulhim_2026 | not_relevant | 3 | 2 | The paper reports in vitro biological activity (MIC, IC50, inhibition %) for metal complexes of nifuroxazide, but does not provide a pharmacokinetic (PK) or exposure-response (PD) model, nor does it establish a concentration-effect curve for the drug itself in a physiological context. |
| popPK | Ammar_2008 | irrelevant | 0 | 0 | The study is an in-vitro genotoxicity/antioxidant assay where nifuroxazide is used as a mutagenic agent, not a pharmacokinetic study. |
| PD | Ammar_2008 | not_relevant | 0 | 0 | The paper investigates the antimutagenic and antioxidant effects of plant extracts against nifuroxazide-induced mutagenicity, rather than characterizing the pharmacodynamic or exposure-response relationship of nifuroxazide itself. |
| popPK | Bouhlel_2007 | irrelevant | 0 | 0 | The study investigates the antimutagenic and antioxidant properties of plant extracts using nifuroxazide only as a mutagenic agent in a bacterial assay, not as a subject for pharmacokinetic analysis. |
| PD | Bouhlel_2007 | not_relevant | 0 | 0 | The paper investigates the antimutagenic and antioxidant effects of plant extracts on nifuroxazide-induced genotoxicity, not the pharmacodynamic or exposure-response relationship of nifuroxazide itself. |
| popPK | Cedillo-Rivera_1992 | irrelevant | 0 | 0 | The paper is an in-vitro susceptibility study of Giardia lamblia, not a pharmacokinetic study, and nifuroxazide is only tested for anti-parasitic activity. |
| PD | Cedillo-Rivera_1992 | not_relevant | 3 | 2 | The paper reports only a qualitative description of "modest" activity for nifuroxazide without providing specific numeric PD parameters like IC50 or Emax. |
| popPK | Ceruti_2022 | irrelevant | 4 | 2 | The study reports raw concentration-time data and a qualitative half-life estimate (40 min) in mice, but lacks formal compartmental PK parameters (CL, V, Q) or a population PK model. |
| popPK | Cevik_2017 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on the synthesis and in-vitro antimicrobial activity of nifuroxazide analogs, containing no pharmacokinetic data. |
| PD | Cevik_2017 | not_relevant | 2 | 2 | The paper reports single-point MIC90 and IC50 values for antimicrobial and cytotoxic effects, but does not provide a concentration-effect curve, dose-response model, or PK/PD analysis for nifuroxazide. |
| popPK | Delgado-Maldonado_2025 | irrelevant | 0 | 0 | The paper is an in-vitro pharmacological study evaluating the antiparasitic and antimicrobial activity of nifuroxazide derivatives, reporting IC50 and MIC values rather than pharmacokinetic parameters. |
| PD | Delgado-Maldonado_2025 | not_relevant | 3 | 3 | The paper reports in vitro IC50 and MIC values for a series of compounds, which are single-point potency metrics rather than a pharmacodynamic (exposure-response) model or curve for the specific drug nifuroxazide. |
| popPK | Elloumi-Mseddi_2019 | irrelevant | 0 | 0 | The study is an in-vitro cytotoxicity assessment of nifuroxazide on cancer cells and does not report any pharmacokinetic parameters. |
| popPK | Glupczynski_1988 | irrelevant | 0 | 0 | The study is a clinical trial evaluating the efficacy of nifuroxazide for eradicating Campylobacter pylori, not a pharmacokinetic study, and contains no PK parameters. |
| popPK | Hayder_2008 | irrelevant | 0 | 0 | no_text gate: only 217 chars of text extracted (&lt; 400) |
| PD | Hayder_2008 | not_relevant | 0 | 0 | The paper studies myricetin derivatives from Myrtus communis, not nifuroxazide. |
| popPK | Kampert_2017 | irrelevant | 0 | 0 | The paper is a mechanistic study on nanoparticle delivery and combinatorial therapy where nifuroxazide is a co-administered agent, not the subject of a pharmacokinetic analysis. |
| popPK | Li_2023 | irrelevant | 0 | 0 | The paper is a mechanistic study on nifuroxazide's effect on prostate cancer cells (in vitro/in vivo) and does not report pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Limem-Ben_2009 | irrelevant | 0 | 0 | The paper investigates the biological activity of plant extracts, using nifuroxazide only as a genotoxic agent in a mutagenicity assay, and contains no pharmacokinetic data. |
| PD | Limem-Ben_2009 | not_relevant | 0 | 0 | The paper investigates plant extracts and mentions nifuroxazide only as a genotoxic agent in a mutagenicity assay, providing no pharmacodynamic or exposure-response data for nifuroxazide itself. |
| popPK | Misra_2019 | irrelevant | 0 | 0 | The paper focuses on the synthesis, self-assembly, and anti-cancer efficacy of a nifuroxazide prodrug, reporting no pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Molina_1997 | irrelevant | 0 | 0 | The study is a clinical efficacy trial for microsporidiosis where nifuroxazide is used as a comparator agent, and no pharmacokinetic parameters are reported. |
| popPK | Palace-Berl_2013 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on anti-Trypanosoma cruzi derivatives and does not report pharmacokinetic parameters for nifuroxazide. |
| PD | Palace-Berl_2013 | not_relevant | 0 | 0 | The paper reports in vitro IC50 values for novel 5-nitro-2-furfuriliden derivatives and compares them to nifurtimox, but does not report any pharmacodynamic or exposure-response relationship for nifuroxazide. |
| popPK | Palace-Berl_2015 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study reporting in-vitro anti-trypanocidal activity (IC50) and does not contain any pharmacokinetic parameters for nifuroxazide. |
| popPK | Roquini_2023 | irrelevant | 0 | 0 | The study focuses on the antischistosomal efficacy and mechanism of action of nifuroxazide, reporting only general pharmacokinetic facts (e.g., Cmax time, bioavailability) without providing quantitative disposition parameters (CL, V, ka) or a PK model. |
| popPK | S_2026 | irrelevant | 0 | 0 | The paper is a study on the synthesis, structural characterization, and in-vitro biological activity of metal complexes, containing no pharmacokinetic data for nifuroxazide. |
| PD | S_2026 | not_relevant | 0 | 0 | The paper reports in vitro antimicrobial and anti-inflammatory assays (IC50, inhibition zones) for metal complexes, but does not report a pharmacokinetic/pharmacodynamic (PK/PD) model, exposure-response relationship, or dose-response curve for nifuroxazide itself. |
| popPK | Saber_2022 | relevant | 8 | 2 | The study reports in vivo pharmacokinetic parameters for nifuroxazide in rats, but specific numeric values (CL, V, etc.) are not present in the provided abstract text. |
| popPK | Tod_1998 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for amikacin, not nifuroxazide. |
| PD | Tod_1998 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) study of amikacin, not nifuroxazide, and contains no pharmacodynamic (PD) or exposure-response analysis. |
| popPK | Wei_2021 | irrelevant | 0 | 0 | The study focuses on the immunomodulatory effects of vincristine and uses nifuroxazide only as a mechanistic STAT3 inhibitor in in-vitro assays, reporting no pharmacokinetic parameters. |
| PD | Wei_2021 | not_relevant | 1 | 0 | The paper mentions nifuroxazide only as a qualitative inhibitor of p-STAT3/PD-L1 expression without providing any numeric concentration-effect data, IC50, or dose-response parameters for nifuroxazide. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bnifuroxazide%5D&body=Drug%3A%20nifuroxazide%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_nifuroxazide/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
