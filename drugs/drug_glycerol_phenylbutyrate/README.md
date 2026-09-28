<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A16A&quot;,&quot;href&quot;:&quot;atc/A16A.md&quot;},{&quot;label&quot;:&quot;glycerol phenylbutyrate&quot;}]"></div>

# glycerol phenylbutyrate

- **generic name:** glycerol phenylbutyrate
- **ATC codes:** `A16AX09`
- **DrugBank:** [DB08909](https://go.drugbank.com/drugs/DB08909) · **PubChem:** [CID 10482134](https://pubchem.ncbi.nlm.nih.gov/compound/10482134)
- **molar mass:** 530.6512 g/mol (C33H38O6) — DrugBank
- **groups:** approved, investigational

## About

**Description.** Glycerol phenylbutyrate is a nitrogen-binding agent. Chemically, it is a triglyceride in which three molecules of phenylbutyrate are linked to a glycerol backbone. FDA approved on February 1, 2013.

**Indication.** Glycerol phenylbutyrate is a nitrogen-binding agent for the chronic management of adult and pediatric patients ≥2 years of age with urea cycle disorders (UCDs) who cannot be managed by dietary protein restriction and/or amino acid supplementation alone.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-27 10:33 | 17:43 | 0/0/0 | 0/1/0 | 0/0/0 | 183,037/8,171 | ollama / qwen3.8:27b-mtp-q8_0 | 11 | 4/7 | 11/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.484). The first reading is what the record holds.">cross-check: disputed</span> | [Zhou_2026](drugs/drug_glycerol_phenylbutyrate/pd_Zhou_2026_VAS.md) | Zhou L et al., Gabapentin CNS exposure and analgesic r…, Frontiers in pharmacology (2026) | [10.3389/fphar.2026.1760901](https://doi.org/10.3389/fphar.2026.1760901) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=glycerol_phenylbutyrate) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>“…A) is released from the glycerol backbone by lipases in the gastrointestinal tract. PBA th…”</sub> | prose |
| metabolism | brain | `CYP2D6` inhibitor | DrugBank actor |
| metabolism | kidney | <sub>“…which is conjugated with glutamine in the liver and in the kidney through the enzyme pheny…”</sub> | prose |
| metabolism | liver | `CYP2D6` inhibitor, `CYP3A4` inducer | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer | DrugBank actor |
| excretion | kidney | <sub>“…Glycerol phenylbutyrate is mainly excreted as PAGN in the urine (68.9% in adults and 66.5%…”</sub> | prose |

<sub>Actors without a tissue in the table: PNLIP (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 42 matched, 33 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Monteleone_2013.pdf` | Monteleone JP et al., Population pharmacokinetic modeling and…, Journal of clinical pharmac… (2013) | popPK | 10 | [10.1002/jcph.92](https://doi.org/10.1002/jcph.92) | [23775211](https://pubmed.ncbi.nlm.nih.gov/23775211) | The paper describes a population PK model for glycerol phenylbutyrate, but the specific numeric parameter values are not present in the provided evidence. |
| `Jung_2021.pdf` | Jung WJ et al., Dose Optimization of Vancomycin Using a…, Clinical therapeutics (2021) | pd | 5 | [10.1016/j.clinthera.2020.10.016](https://doi.org/10.1016/j.clinthera.2020.10.016) | [33358258](https://www.ncbi.nlm.nih.gov/pubmed/33358258) | metadata signals extractable PD data (Exposure-Response) |
| `Greenberg_1996.pdf` | Greenberg JW et al., Influence of lipoteichoic acid structur…, Infection and immunity (1996) | pd | 4 | [10.1128/iai.64.8.3318-3325.1996](https://doi.org/10.1128/iai.64.8.3318-3325.1996) | [8757870](https://www.ncbi.nlm.nih.gov/pubmed/8757870) | metadata signals extractable PD data (IC50) |
| `Zernig_1988.pdf` | Zernig G et al., The mitochondrial high-capacity low-aff…, European journal of pharmac… (1988) | pd | 4 | [10.1016/0014-2999(88)90472-4](https://doi.org/10.1016/0014-2999(88)90472-4) | [2853075](https://www.ncbi.nlm.nih.gov/pubmed/2853075) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-09-27T10:29:47.933588+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Alexacou_2010 | irrelevant | 0 | 0 | The paper describes the binding of glycogen phosphorylase inhibitors and contains no pharmacokinetic data for glycerol phenylbutyrate. |
| PD | Alexacou_2010 | not_relevant | 0 | 0 | The paper studies glycogen phosphorylase inhibitors, not glycerol phenylbutyrate, and reports in vitro enzyme kinetics (IC50) rather than pharmacodynamic exposure-response relationships for the target drug. |
| popPK | Alexacou_2011 | irrelevant | 0 | 0 | The paper describes the synthesis and enzymatic inhibition of glycogen phosphorylase by halogenated hydroquinones, which is unrelated to the pharmacokinetics of glycerol phenylbutyrate. |
| PD | Alexacou_2011 | not_relevant | 0 | 0 | The paper reports IC50 values for halogen-substituted hydroquinone derivatives as inhibitors of glycogen phosphorylase, not for glycerol phenylbutyrate. |
| popPK | Barr_2019 | irrelevant | 0 | 0 | The paper studies glycogen phosphorylase inhibitors (C-β-D-glucopyranosyl azoles) and does not involve glycerol phenylbutyrate. |
| PD | Barr_2019 | not_relevant | 0 | 0 | The paper studies glycogen phosphorylase inhibitors, not glycerol phenylbutyrate, and reports in vitro/ex-vivo enzyme kinetics rather than pharmacodynamic exposure-response relationships for the target drug. |
| popPK | Batt_1992 | irrelevant | 0 | 0 | The paper is a review of 5-lipoxygenase inhibitors and does not report pharmacokinetic parameters for glycerol phenylbutyrate. |
| PD | Batt_1992 | not_relevant | 0 | 0 | The text is a review of 5-lipoxygenase inhibitors and does not report any pharmacodynamic or exposure-response data for glycerol phenylbutyrate. |
| popPK | Candel_2012 | irrelevant | 0 | 0 | The paper discusses daptomycin and other antibiotics for Gram-positive bacteria and does not mention glycerol phenylbutyrate or its pharmacokinetics. |
| PD | Candel_2012 | not_relevant | 0 | 0 | The paper discusses daptomycin and other antibiotics for Gram-positive bacteria and does not mention glycerol phenylbutyrate or report any PD parameters. |
| popPK | Chetter_2020 | irrelevant | 0 | 0 | The paper is a study on glycogen phosphorylase inhibitors (flavonoids) and does not involve glycerol phenylbutyrate or report any pharmacokinetic parameters for it. |
| PD | Chetter_2020 | not_relevant | 0 | 0 | The paper studies synthetic flavonoid derivatives as glycogen phosphorylase inhibitors and does not mention glycerol phenylbutyrate or report any pharmacodynamic modeling for it. |
| popPK | Fong_2025 | irrelevant | 0 | 0 | The paper is an in silico docking study targeting Cav3.1 channels, and glycerol phenylbutyrate is only mentioned as a ranked drug candidate without any pharmacokinetic parameter reporting. |
| PD | Fong_2025 | not_relevant | 0 | 0 | The paper focuses on in silico molecular docking and Monte Carlo simulations for montelukast targeting T-type calcium channels; it does not contain any pharmacodynamic or exposure-response data for glycerol phenylbutyrate. |
| popPK | Greenberg_1996 | irrelevant | 0 | 0 | no_text gate: only 92 chars of text extracted (&lt; 400) |
| PD | Greenberg_1996 | not_relevant | 0 | 0 | The paper discusses macrophage scavenger receptor recognition of lipoteichoic acid and does not mention glycerol phenylbutyrate or any pharmacodynamic modeling. |
| popPK | Gross_2017 | irrelevant | 0 | 0 | The study focuses on efavirenz pharmacogenetics and treatment outcomes, not glycerol phenylbutyrate pharmacokinetics. |
| PD | Gross_2017 | not_relevant | 0 | 0 | The paper focuses on CYP2B6 genotypes and efavirenz treatment outcomes, containing no data or analysis regarding glycerol phenylbutyrate or its pharmacodynamics. |
| popPK | Jung_2021 | irrelevant | 0 | 0 | no_text gate: only 120 chars of text extracted (&lt; 400) |
| PD | Jung_2021 | not_relevant | 0 | 0 | The paper focuses on vancomycin, not glycerol phenylbutyrate. |
| popPK | Kaiser_2001 | irrelevant | 0 | 0 | The paper studies the mechanism of action of flavopiridol on glycogen phosphorylase and does not involve glycerol phenylbutyrate or pharmacokinetic parameters. |
| PD | Kaiser_2001 | not_relevant | 0 | 0 | The paper studies flavopiridol, not glycerol phenylbutyrate. |
| popPK | Kantsadi_2012 | irrelevant | 0 | 0 | The paper studies glycogen phosphorylase inhibitors and does not involve glycerol phenylbutyrate or pharmacokinetic parameters. |
| PD | Kantsadi_2012 | not_relevant | 0 | 0 | The paper studies glycogen phosphorylase inhibitors, not glycerol phenylbutyrate, and reports enzyme kinetics (Ki) and cellular IC50 for unrelated compounds. |
| popPK | Kosmopoulou_2004 | irrelevant | 0 | 0 | The paper studies the binding of indirubin-5-sulphonate to glycogen phosphorylase and CDK2, and does not involve glycerol phenylbutyrate or pharmacokinetic parameters. |
| PD | Kosmopoulou_2004 | not_relevant | 0 | 0 | The paper studies the binding of indirubin-5-sulphonate, not glycerol phenylbutyrate, and reports enzyme inhibition kinetics (Ki/IC50) rather than a pharmacodynamic exposure-response relationship for the target drug. |
| popPK | Kun_2023 | irrelevant | 0 | 0 | The paper describes the synthesis and in-vitro binding assays of glycogen phosphorylase inhibitors, not the pharmacokinetics of glycerol phenylbutyrate. |
| PD | Kun_2023 | not_relevant | 0 | 0 | The paper is a medicinal chemistry study on glycogen phosphorylase inhibitors and does not involve glycerol phenylbutyrate or any pharmacodynamic modeling. |
| popPK | Longo_2021 | irrelevant | 2 | 0 | The study mentions PK analyses but only provides qualitative descriptions of metabolite stability and ratios, lacking specific quantitative disposition parameters (CL, V, ka) for glycerol phenylbutyrate. |
| PD | Longo_2021 | not_relevant | 2 | 1 | The paper reports PK parameters and clinical efficacy (ammonia reduction) but does not provide a concentration-effect or dose-response model with numeric PD parameters (e.g., EC50, Emax) linking exposure to effect. |
| popPK | Lung_1996 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on dynorphine analogues and contains no pharmacokinetic data for glycerol phenylbutyrate. |
| PD | Lung_1996 | not_relevant | 0 | 0 | The paper reports in vitro binding and functional assay data (IC50) for dynorphine analogues, not pharmacodynamic exposure-response or dose-response relationships for glycerol phenylbutyrate. |
| popPK | Mali_2019 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for vancomycin, not glycerol phenylbutyrate. |
| PD | Mali_2019 | not_relevant | 0 | 0 | The paper reports pharmacokinetics of vancomycin, not glycerol phenylbutyrate, and contains no pharmacodynamic or exposure-response analysis. |
| popPK | Mathomes_2023 | irrelevant | 0 | 0 | The paper studies baicalein as a glycogen phosphorylase inhibitor and contains no pharmacokinetic data for glycerol phenylbutyrate. |
| PD | Mathomes_2023 | not_relevant | 0 | 0 | The paper studies baicalein, not glycerol phenylbutyrate. |
| popPK | McGuire_2010 | irrelevant | 2 | 0 | The paper describes qualitative pharmacokinetic characteristics (delayed release, steady state timing) and safety, but does not report quantitative disposition parameters (CL, V, ka) or a compartmental model for glycerol phenylbutyrate. |
| PD | McGuire_2010 | not_relevant | 2 | 1 | The paper reports PK parameters (peak levels, time to steady state) and qualitative comparisons of metabolite excretion, but does not provide a quantitative exposure-response or dose-response model with numeric PD parameters (e.g., Emax, EC50) for glycerol phenylbutyrate. |
| popPK | Monteleone_2013 | relevant | 10 | 0 | The paper describes a population PK model for glycerol phenylbutyrate, but the specific numeric parameter values are not present in the provided evidence. |
| PD | Monteleone_2013 | not_relevant | 0 | 0 | The paper focuses exclusively on population pharmacokinetic (PK) modeling and dose simulations for exposure metrics (PAA, PBA, PAGN), without reporting any pharmacodynamic (PD) models, exposure-response relationships, or numeric PD parameters (e.g., Emax, EC50). |
| popPK | Oikonomakos_2000 | irrelevant | 0 | 0 | The paper studies the mechanism of flavopiridol inhibition of glycogen phosphorylase and does not involve glycerol phenylbutyrate or pharmacokinetic parameters. |
| PD | Oikonomakos_2000 | not_relevant | 0 | 0 | The paper studies flavopiridol, not glycerol phenylbutyrate, and reports in vitro enzyme kinetics (IC50) rather than a pharmacodynamic exposure-response relationship for the target drug. |
| popPK | Oikonomakos_2006 | irrelevant | 0 | 0 | The paper discusses iminosugars as inhibitors of glycogen phosphorylase and does not involve glycerol phenylbutyrate or pharmacokinetic parameters. |
| PD | Oikonomakos_2006 | not_relevant | 0 | 0 | The paper discusses iminosugars as inhibitors of glycogen phosphorylase, not glycerol phenylbutyrate, and reports enzyme IC50s rather than drug PD parameters. |
| popPK | Ramos-Guerra_2025 | irrelevant | 0 | 0 | The paper is a clinical study on immunotherapy response prediction in lung cancer and does not involve glycerol phenylbutyrate or pharmacokinetic parameters. |
| PD | Ramos-Guerra_2025 | not_relevant | 0 | 0 | The paper focuses on predicting immunotherapy response in NSCLC using peripheral blood biomarkers and does not involve glycerol phenylbutyrate or any pharmacodynamic modeling. |
| popPK | Wang_2021 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of ornithine phenylacetate (L-OPA) and its metabolite phenylacetic acid (PAA), not glycerol phenylbutyrate, which is only mentioned as a comparator in the background. |
| PD | Wang_2021 | not_relevant | 3 | 2 | The paper analyzes PK and correlates exposure with adverse events but explicitly concludes there is no correlation, and does not report a fitted PD model or numeric PD parameters (Emax, EC50, etc.). |
| popPK | Wang_2022 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of l-ornithine phenylacetate (L-OPA), not glycerol phenylbutyrate, which is only mentioned as a comparator in the background. |
| PD | Wang_2022 | not_relevant | 0 | 0 | The paper focuses on the population pharmacokinetics of l-ornithine phenylacetate (L-OPA), not glycerol phenylbutyrate, and explicitly states that ammonia (the PD marker) was omitted from the final model. |
| PGx | Xu_2010 | not_relevant | 0 | 0 | The paper investigates hematopoietic stem cell transplantation outcomes and does not mention glycerol phenylbutyrate or any pharmacogenomic effects on its PK/PD parameters. |
| popPK | Xu_2023 | irrelevant | 0 | 0 | The paper describes a computational method for antibody design and contains no pharmacokinetic data for glycerol phenylbutyrate. |
| PD | Xu_2023 | not_relevant | 0 | 0 | The paper describes a computational method (AB-Gen) for antibody library design and contains no pharmacodynamic or exposure-response data for glycerol phenylbutyrate. |
| popPK | Zamora-Díaz_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacological interaction of sulforaphane and gabapentin in a pain model and does not involve glycerol phenylbutyrate or report its pharmacokinetic parameters. |
| PD | Zamora-Díaz_2025 | not_relevant | 0 | 0 | The paper studies sulforaphane and gabapentin, not glycerol phenylbutyrate. |
| popPK | Zernig_1988 | irrelevant | 0 | 0 | The paper studies nitrendipine binding in mitochondria and does not involve glycerol phenylbutyrate or pharmacokinetic parameters. |
| PD | Zernig_1988 | not_relevant | 0 | 0 | The paper investigates the regulation of a mitochondrial binding site by nucleotides and does not involve glycerol phenylbutyrate or any pharmacodynamic modeling of that drug. |
| popPK | Zhou_2026 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of gabapentin (GBP), not glycerol phenylbutyrate. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
