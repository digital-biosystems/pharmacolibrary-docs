<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B05X&quot;,&quot;href&quot;:&quot;atc/B05X.md&quot;},{&quot;label&quot;:&quot;potassium acetate&quot;}]"></div>

# potassium acetate

- **generic name:** potassium acetate
- **ATC codes:** `B05XA17`
- **DrugBank:** [DB14498](https://go.drugbank.com/drugs/DB14498) · **PubChem:** none
- **molar mass:** 98.1423 g/mol (C2H3KO2) — DrugBank
- **groups:** approved

## About

Potassium acetate is used to treat low potassium levels in the blood (hypokalemia). It is an approved intravenous electrolyte solution additive, used in clinical settings to replenish potassium.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q409199](https://www.wikidata.org/wiki/Q409199) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=potassium_acetate).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | skin | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: ATP1A1 (unknown).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 00:48 | 1:29 | 0/0/0 | 0/0/0 | 0/0/0 | 48,460/1,309 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 0/15 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 23 matched, 26 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Yu_1994.pdf` | Yu B et al., Interleukin-1 beta inhibits synaptic tr…, The Journal of pharmacology… (1994) | pd | 4 |  | [7525939](https://www.ncbi.nlm.nih.gov/pubmed/7525939) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-06 00:48 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Arif_2026 | irrelevant | 0 | 0 | The paper is a study on rooster semen quality and selenium methionine, where potassium acetate is merely an ingredient in the semen extender, not the subject of pharmacokinetic analysis. |
| PD | Arif_2026 | not_relevant | 0 | 0 | The paper studies selenium methionine, not potassium acetate. |
| popPK | Garlid_1983 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on mitochondrial uncoupling by local anesthetics, not a pharmacokinetic study of potassium acetate. |
| PD | Garlid_1983 | not_relevant | 0 | 0 | The paper studies the mechanism of uncoupling by amine local anesthetics and does not report any pharmacodynamic or exposure-response data for potassium acetate. |
| popPK | Hauseman_2025 | irrelevant | 0 | 0 | The paper describes a structural biology and mechanistic study of RAS-mutant cancers and SHOC2 inhibitors, with no pharmacokinetic data for potassium acetate. |
| PD | Hauseman_2025 | not_relevant | 0 | 0 | The paper focuses on the discovery of SHOC2 inhibitors for RAS-mutant cancers and does not mention or analyze potassium acetate. |
| popPK | He_2004 | irrelevant | 0 | 0 | The paper is about enzymatic hydrolysis of phosphorus in swine manure and soil, where potassium acetate is used only as a buffer, not as a drug subject to pharmacokinetic analysis. |
| popPK | Hoke_1988 | irrelevant | 0 | 0 | The study investigates the mechanism of mitochondrial dysfunction induced by a gold complex in rat liver mitochondria, using potassium acetate only as a buffer, and does not report pharmacokinetic parameters for potassium acetate. |
| PD | Hoke_1988 | not_relevant | 0 | 0 | The paper studies the mechanism of action of a gold complex (Au(DPPE)+2) on rat liver mitochondria, not the pharmacodynamics of potassium acetate (which is used only as a buffer). |
| popPK | Hossain_2025 | irrelevant | 0 | 0 | The paper describes the synthesis and biological activity of silver nanoparticles, not the pharmacokinetics of potassium acetate. |
| PD | Hossain_2025 | not_relevant | 0 | 0 | The paper studies silver nanoparticles synthesized from plant extract, not potassium acetate, and does not report any pharmacodynamic or exposure-response relationship for the target drug. |
| popPK | Hua_1993 | irrelevant | 0 | 0 | The paper describes a ribonuclease mechanism in cell lines and mentions potassium acetate only as a buffer component, not as a drug subject to pharmacokinetic analysis. |
| popPK | Imani_2025 | irrelevant | 0 | 0 | The study focuses on the extraction of lawsone for wound dressings and does not involve potassium acetate or pharmacokinetic modeling. |
| PD | Imani_2025 | not_relevant | 0 | 0 | The paper focuses on the extraction of lawsone and the physicochemical characterization of a wound dressing; it does not report any pharmacodynamic or exposure-response analysis for potassium acetate. |
| popPK | Jacobs_2025 | irrelevant | 0 | 0 | The paper is a catalysis study on vinyl acetate synthesis using potassium acetate as a promoter, not a pharmacokinetic study of potassium acetate as a drug. |
| PD | Jacobs_2025 | not_relevant | 0 | 0 | The paper investigates heterogeneous catalysis and surface chemistry of palladium acetate species, not pharmacodynamics or drug exposure-response relationships. |
| popPK | Jiang_2015 | irrelevant | 0 | 0 | The study is a microbiological investigation of bacterial bioreporters where potassium acetate is used as a carbon source, not a pharmacokinetic study of the drug. |
| popPK | Lee_2019 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of engineered antibodies (IgG) in mice, not potassium acetate. |
| PD | Lee_2019 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics (PK) of an engineered antibody Fc variant and its binding affinity to FcRn, but does not report a pharmacodynamic (PD) or exposure-response relationship for potassium acetate or any other drug. |
| popPK | Liang_2026 | irrelevant | 0 | 0 | The paper describes the optimization of BMX kinase inhibitors and does not involve potassium acetate or its pharmacokinetics. |
| PD | Liang_2026 | not_relevant | 0 | 0 | The paper focuses on the medicinal chemistry and molecular modeling of covalent BMX kinase inhibitors, reporting in vitro potency (IC50/EC50) and binding kinetics, but contains no pharmacokinetic data, exposure-response analysis, or pharmacodynamic modeling for potassium acetate or any other drug. |
| popPK | Lin_2025 | irrelevant | 0 | 0 | The paper describes the production and purification of the radioisotope Pb-203, and potassium acetate is used only as a chemical reagent for resin elution, not as a subject drug for pharmacokinetic analysis. |
| popPK | Naji_2025 | irrelevant | 0 | 0 | The paper investigates the phytochemical and pharmacological properties of a plant extract (Corallocarpus glomeruliflorus) and does not involve potassium acetate or any pharmacokinetic modeling. |
| PD | Naji_2025 | not_relevant | 0 | 0 | The paper investigates the phytochemical and pharmacological properties of a plant extract (Corallocarpus glomeruliflorus) and does not mention or analyze potassium acetate. |
| popPK | Osinski_2002 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of methylnaltrexone, using potassium acetate only as a buffer component in the HPLC method. |
| popPK | Pozo_2026 | irrelevant | 0 | 0 | The paper focuses on glycine's role in hepatocyte maturation and xenobiotic metabolism in cell lines, with no mention of potassium acetate or its pharmacokinetics. |
| PD | Pozo_2026 | not_relevant | 0 | 0 | The paper investigates the metabolic effects of glycine on hepatocyte maturation and does not contain any pharmacodynamic or exposure-response analysis for potassium acetate. |
| popPK | Raig_2025 | irrelevant | 0 | 0 | The paper describes the development of LRRK2 kinase inhibitors for Parkinson's disease and does not involve potassium acetate or pharmacokinetic studies. |
| PD | Raig_2025 | not_relevant | 0 | 0 | The paper reports in vitro IC50 values and dose-response curves for LRRK2 kinase inhibitors, but does not contain any data, analysis, or mention of potassium acetate. |
| popPK | Rajanikanth_2003 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of alpha,beta-arteether and dihydroartemisinin in rats, using potassium acetate only as a mobile phase buffer component, not as the subject drug. |
| popPK | Rehan_2023 | irrelevant | 0 | 0 | The paper describes the structural biology and mechanism of action of KZR-8445, a Sec61 inhibitor, and does not involve potassium acetate or report its pharmacokinetic parameters. |
| popPK | Tulloch_2023 | irrelevant | 0 | 0 | The paper describes a genomics method for assessing drug resistance in Leishmania donovani and does not report pharmacokinetic parameters for potassium acetate. |
| PD | Tulloch_2023 | not_relevant | 0 | 0 | The paper describes a barcoding method for assessing cross-resistance in Leishmania and does not report any pharmacodynamic or exposure-response analysis for potassium acetate. |
| popPK | Yaeger_2021 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of tulathromycin in ewes, not potassium acetate. |
| PD | Yaeger_2021 | not_relevant | 0 | 0 | The paper reports pharmacokinetics of tulathromycin, not potassium acetate, and contains no pharmacodynamic or exposure-response analysis. |
| popPK | Yu_1994 | irrelevant | 0 | 0 | no_text gate: only 108 chars of text extracted (&lt; 400) |
| PD | Yu_1994 | not_relevant | 0 | 0 | The paper investigates the neurophysiological effects of Interleukin-1 beta on amygdala neurons and does not mention potassium acetate or report any pharmacodynamic parameters for it. |
| popPK | Zahiruddin_2021 | irrelevant | 0 | 0 | The study investigates the immunomodulatory effects of a polyherbal combination in mice and does not involve potassium acetate or pharmacokinetic modeling. |
| PD | Zahiruddin_2021 | not_relevant | 0 | 0 | The paper studies a polyherbal combination, not potassium acetate, and reports no pharmacodynamic or exposure-response relationship for the target drug. |
| popPK | unknown_2017 | irrelevant | 0 | 0 | no_text gate: only 7 chars of text extracted (&lt; 400) |
| PD | unknown_2017 | not_relevant | 0 | 0 | The provided text is a conference tag (EANM'17) and contains no information regarding potassium acetate, pharmacodynamics, or exposure-response relationships. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpotassium_acetate%5D&body=Drug%3A%20potassium_acetate%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_potassium_acetate/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
