<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B05X&quot;,&quot;href&quot;:&quot;atc/B05X.md&quot;},{&quot;label&quot;:&quot;potassium acetate&quot;}]"></div>

# potassium acetate

- **generic name:** potassium acetate
- **ATC codes:** `B05XA17`
- **DrugBank:** [DB14498](https://go.drugbank.com/drugs/DB14498) · **PubChem:** not captured
- **molar mass:** 98.1423 g/mol (C2H3KO2) — DrugBank
- **groups:** approved

## About

Potassium acetate is used to treat low potassium levels in the blood (hypokalemia). It is an approved intravenous electrolyte solution additive, used in clinical settings to replenish potassium.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q409199](https://www.wikidata.org/wiki/Q409199) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 00:48 | 1:29 | 0/0/0 | 0/0/0 | 0/0/0 | 48,460/1,309 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 0/15 | 2/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=potassium_acetate) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | skin | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: ATP1A1 (unknown).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 23 matched, 26 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Yu_1994.pdf` | Yu B et al., Interleukin-1 beta inhibits synaptic tr…, The Journal of pharmacology… (1994) | pd | 4 | not captured | [7525939](https://www.ncbi.nlm.nih.gov/pubmed/7525939) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-06T00:48:28.044010+00:00</sub>

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

---
<sub>Generated by `docs.py` (scholarv2)</sub>
