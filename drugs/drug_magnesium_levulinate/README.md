<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A12C&quot;,&quot;href&quot;:&quot;atc/A12C.md&quot;},{&quot;label&quot;:&quot;magnesium levulinate&quot;}]"></div>

# magnesium levulinate

- **generic name:** magnesium levulinate
- **ATC codes:** `A12CC07`
- **DrugBank:** [DB14514](https://go.drugbank.com/drugs/DB14514) · **PubChem:** not captured
- **molar mass:** 254.521 g/mol (C10H14MgO6) — DrugBank
- **groups:** investigational, nutraceutical

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-30 00:24 | 0:48 | 0/0/0 | 0/0/0 | 0/0/0 | 1,716/142 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 1/2 | 0/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=magnesium_levulinate) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: ATP1A1 (unknown).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 28 matched, 25 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Bagheri_2026.pdf` | Bagheri M et al., Engineered phytic acid-lignin networks:…, Bioresource technology (2026) | pd | 4 | [10.1016/j.biortech.2026.133937](https://doi.org/10.1016/j.biortech.2026.133937) | [41490672](https://www.ncbi.nlm.nih.gov/pubmed/41490672) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-09-30T00:24:39.676826+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Agúndez_2017 | not_relevant | 0 | 0 | The paper investigates the association between ALAD/HMOX gene variants and the risk of essential tremor, not the pharmacokinetics or pharmacodynamics of magnesium_levulinate. |
| popPK | Ahmed_2015 | irrelevant | 0 | 0 | The paper is an in-vitro cytotoxicity study of Boswellia serrata extracts and does not report pharmacokinetic parameters for magnesium_levulinate. |
| PD | Ahmed_2015 | not_relevant | 0 | 0 | The paper investigates Boswellia serrata extracts and does not report any pharmacodynamic or exposure-response data for magnesium levulinate. |
| popPK | Alani_2010 | irrelevant | 0 | 0 | The paper focuses on paclitaxel delivery via polymeric micelles using levulinic acid as a linker, not on the pharmacokinetics of magnesium_levulinate. |
| PD | Alani_2010 | not_relevant | 0 | 0 | The paper focuses on the formulation and in vitro release kinetics of paclitaxel micelles, not on magnesium levulinate, and does not report any pharmacodynamic or exposure-response parameters. |
| popPK | Andree_1987 | irrelevant | 0 | 0 | no_text gate: only 64 chars of text extracted (&lt; 400) |
| PD | Andree_1987 | not_relevant | 0 | 0 | The paper discusses oral contraceptives and liver function, not magnesium levulinate, and contains no PD or exposure-response data. |
| popPK | Anwer_1976 | irrelevant | 0 | 0 | The study focuses on bilirubin kinetics in rat liver, and magnesium_levulinate is not the subject drug (levulinic acid is used as a tracer for bilirubin reflux). |
| popPK | Bagheri_2026 | irrelevant | 0 | 0 | The paper describes the synthesis of bio-based materials using ethyl levulinate as a crosslinker, not the pharmacokinetics of magnesium levulinate. |
| PD | Bagheri_2026 | not_relevant | 0 | 0 | The paper describes the synthesis and material properties of phytic acid-lignin nanoparticles, not the pharmacodynamics of magnesium levulinate. |
| PGx | Brämer_2001 | not_relevant | 0 | 0 | The paper describes bacterial metabolism of levulinic acid in Ralstonia eutropha, not human pharmacogenomics of magnesium_levulinate. |
| popPK | Cable_1993 | irrelevant | 0 | 0 | The paper studies the enzymatic repression of delta-aminolevulinate synthase by porphyrins and does not report pharmacokinetic parameters for magnesium_levulinate. |
| PD | Cable_1993 | not_relevant | 0 | 0 | The paper studies the effects of metalloporphyrins and heme on delta-aminolevulinate synthase, not magnesium levulinate. |
| popPK | Chanda_2021 | irrelevant | 0 | 0 | The paper studies fungal tolerance to lignocellulosic inhibitors (including levulinic acid) and is not a pharmacokinetic study of magnesium_levulinate. |
| PD | Chanda_2021 | not_relevant | 0 | 0 | The paper reports IC50 values for levulinic acid (not magnesium levulinate) on fungal growth and enzyme activity, which is a toxicological/biochemical assay, not a pharmacodynamic exposure-response relationship for the specified drug. |
| popPK | Gacond_2007 | irrelevant | 0 | 0 | The paper describes the synthesis and in-vitro inhibition of an enzyme (PBGS) by levulinic acid derivatives, not the pharmacokinetics of magnesium_levulinate. |
| PD | Gacond_2007 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition (IC50/Ki) for bisubstrate inhibitors of porphobilinogen synthase, not a pharmacodynamic or exposure-response relationship for the drug magnesium levulinate. |
| popPK | Grandchamp_1981 | irrelevant | 0 | 0 | The paper studies heme formation kinetics in rat hepatocytes using delta-amino[3H]levulinic acid, not the pharmacokinetics of magnesium_levulinate. |
| popPK | Gregory_2021 | irrelevant | 0 | 0 | The paper describes the antimicrobial efficacy of a levulinic acid disinfectant on bacterial surfaces and contains no pharmacokinetic data for magnesium_levulinate. |
| PD | Gregory_2021 | not_relevant | 0 | 0 | The paper reports the antimicrobial efficacy of a surface disinfectant (MoWa) against bacteria, not a pharmacodynamic relationship for a drug in a biological host. |
| popPK | Holzgartner_1990 | irrelevant | 0 | 0 | The paper is a clinical observational study on the efficacy of magnesium therapy in arrhythmias and does not report any pharmacokinetic parameters for magnesium_levulinate. |
| PD | Holzgartner_1990 | not_relevant | 2 | 1 | The paper reports clinical efficacy percentages (82% success) at a fixed dose threshold (300 mg/day) in an observational study, but does not provide a concentration-effect curve, Emax/EC50 parameters, or a formal PK/PD model. |
| popPK | Indira_2023 | irrelevant | 0 | 0 | The paper is an in-vitro study on Citrus medica leaf extract and does not involve magnesium_levulinate or pharmacokinetic parameters. |
| PD | Indira_2023 | not_relevant | 0 | 0 | The paper studies Citrus medica leaf extract, not magnesium levulinate, and reports no pharmacodynamic parameters for the target drug. |
| popPK | Knies_2015 | irrelevant | 0 | 0 | The paper is an in-vitro study on the antitumor activity of nucleolipids and does not report pharmacokinetic parameters for magnesium_levulinate. |
| PD | Knies_2015 | not_relevant | 0 | 0 | The paper investigates the antitumor activity of nucleolipids (nucleosides) and does not mention magnesium levulinate or report any pharmacodynamic parameters for it. |
| popPK | Lenzi_2023 | irrelevant | 0 | 0 | The paper describes the synthesis and material properties of a bioplasticizer (glycerol trilevulinate), not the pharmacokinetics of magnesium levulinate. |
| PD | Lenzi_2023 | not_relevant | 0 | 0 | The paper describes the synthesis and material properties of a bioplasticizer (glycerol trilevulinate) and reports a single IC50 value for cytotoxicity, but does not report a pharmacodynamic exposure-response or dose-response relationship for magnesium levulinate. |
| popPK | Lomba_2014 | irrelevant | 0 | 0 | The paper is an ecotoxicology study on levulinate esters and does not report pharmacokinetic parameters for magnesium_levulinate. |
| PD | Lomba_2014 | not_relevant | 0 | 0 | The paper studies the ecotoxicity of levulinate esters (methyl, ethyl, butyl) and does not mention or analyze magnesium levulinate. |
| PGx | Louis_2005 | not_relevant | 0 | 0 | The paper studies the interaction between lead exposure and ALAD gene polymorphisms in essential tremor, not the pharmacokinetics or pharmacodynamics of magnesium_levulinate. |
| popPK | Rünger_2000 | irrelevant | 0 | 0 | The paper investigates DNA damage and repair mechanisms in lymphoblasts exposed to UV light and is unrelated to the pharmacokinetics of magnesium_levulinate. |
| PD | Rünger_2000 | not_relevant | 0 | 0 | The paper investigates the effects of UV radiation on DNA damage and repair in lymphoblasts and does not involve magnesium levulinate or any pharmacodynamic modeling of a drug. |
| popPK | Tang_2025 | irrelevant | 0 | 0 | The paper is a metabolomics study comparing breath and blood metabolites and does not report pharmacokinetic parameters for magnesium_levulinate. |
| PD | Tang_2025 | not_relevant | 0 | 0 | The paper is a comparative metabolomics study of breath and blood in healthy volunteers and does not report any pharmacodynamic or exposure-response relationship for magnesium levulinate. |
| popPK | Witkowski_1988 | irrelevant | 0 | 0 | The paper studies the mechanism of action of the herbicide acifluorfen-methyl on plant tetrapyrrole synthesis and does not involve the drug magnesium_levulinate or pharmacokinetic parameters. |
| PD | Witkowski_1988 | not_relevant | 0 | 0 | The paper studies the mechanism of action of the herbicide acifluorfen-methyl in plants, not the pharmacodynamics of magnesium levulinate. |
| popPK | Xie_2016 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of cefadroxil, not magnesium_levulinate. |
| PD | Xie_2016 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model for cefadroxil, not magnesium levulinate, and contains no pharmacodynamic (PD) or exposure-response analysis. |
| popPK | Zhang_2026 | irrelevant | 0 | 0 | The paper focuses on the extraction of flavonoids from Artemisia argyi using a deep eutectic solvent and reports in vitro bioactivity, containing no pharmacokinetic data for magnesium_levulinate. |
| PD | Zhang_2026 | not_relevant | 0 | 0 | The paper focuses on the extraction of flavonoids from Artemisia argyi and reports in vitro bioactivity (IC50s for enzymes and cell lines), but does not report any pharmacodynamic or exposure-response relationship for magnesium levulinate. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
