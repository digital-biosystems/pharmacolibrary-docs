<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10X&quot;,&quot;href&quot;:&quot;atc/A10X.md&quot;},{&quot;label&quot;:&quot;tolrestat&quot;}]"></div>

# tolrestat

- **generic name:** tolrestat
- **ATC codes:** `A10XA01`
- **DrugBank:** [DB02383](https://go.drugbank.com/drugs/DB02383)
- **groups:** approved, withdrawn

## About

**Description.** Tolrestat (INN) (AY-27773) is an aldose reductase inhibitor which was approved for the control of certain diabetic complications. While it was approved for marketed in several countries, it failed a Phase III trial in the U.S. due to toxicity and never received FDA approval. It was sold under the tradename Alredase but was discontinued by Wyeth in 1997 because of the risk of severe liver toxicity and death.

**Indication.** For the pharmacological control of certain diabetic complications.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-16 01:08 | 8:15 | 0/0/0 | 0/0/0 | 0/0/0 | 46,025/2,979 | ollama / qwen3.8:27b-mtp-q8_0 | 3 | 2/1 | 3/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=tolrestat) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: AKR1A1 (unknown), AKR1B1 (inhibitor), AKR1B10 (unknown), SIGMAR1 (binder).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 24 matched, 31 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_9 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Cayen_1985.pdf` | Cayen MN et al., Metabolic disposition and pharmacokinet…, Drug metabolism and disposi… (1985) | popPK | 10 | not captured | [2863103](https://pubmed.ncbi.nlm.nih.gov/2863103) | The abstract explicitly reports quantitative pharmacokinetic parameters including bioavailability, half-life, clearance, and volume of distribution for tolrestat in multiple animal species. |
| `Troy_1992.pdf` | Troy SM et al., The effect of renal disease on tolresta…, Clinical pharmacology and t… (1992) | popPK | 10 | [10.1038/clpt.1992.22](https://doi.org/10.1038/clpt.1992.22) | [1544287](https://pubmed.ncbi.nlm.nih.gov/1544287) | The abstract explicitly reports quantitative pharmacokinetic parameters for tolrestat, including clearance (30 +/- 3 ml/hr/kg in normals, 15 +/- 5 ml/hr/kg in dialysis) and half-life (11 to 16 hours). |
| `Fruncillo_1996.pdf` | Fruncillo R et al., Pharmacokinetics of the aldose reductas…, Clinical pharmacology and t… (1996) | popPK | 9 | [10.1016/S0009-9236(96)90000-4](https://doi.org/10.1016/S0009-9236(96)90000-4) | [8681485](https://pubmed.ncbi.nlm.nih.gov/8681485) | The paper reports quantitative pharmacokinetic parameters for tolrestat, including specific values for apparent oral clearance (30 vs 18 ml/hr/kg) and steady-state plasma concentrations (1.2 vs 1.9 micrograms/ml) in the abstract text. |
| `Dvornik_1994.pdf` | Dvornik D et al., Tolrestat pharmacokinetics in rat perip…, Journal of diabetes and its… (1994) | popPK | 8 | [10.1016/1056-8727(94)90006-x](https://doi.org/10.1016/1056-8727(94)90006-x) | [8167382](https://pubmed.ncbi.nlm.nih.gov/8167382) | The study reports the half-life of tolrestat in rat nerve (53 h), but lacks other quantitative disposition parameters like clearance or volume of distribution. |
| `Gunn_1989.pdf` | Gunn RB et al., Inhibition of erythrocyte anion exchang…, Metabolism: clinical and ex… (1989) | pd | 5 | [10.1016/0026-0495(89)90070-x](https://doi.org/10.1016/0026-0495(89)90070-x) | [2503683](https://www.ncbi.nlm.nih.gov/pubmed/2503683) | metadata signals extractable PD data (IC50) |
| `van_1995.pdf` | van Griensven JM et al., Tolrestat pharmacokinetic and pharmacod…, Clinical pharmacology and t… (1995) | pd | 5 | [10.1016/0009-9236(95)90019-5](https://doi.org/10.1016/0009-9236(95)90019-5) | [8529328](https://www.ncbi.nlm.nih.gov/pubmed/8529328) | metadata signals extractable PD data (pharmacodynamicmodel) |
| `Barski_1995.pdf` | Barski OA et al., Mechanism of human aldehyde reductase:…, Biochemistry (1995) | pd | 4 | [10.1021/bi00035a036](https://doi.org/10.1021/bi00035a036) | [7669785](https://www.ncbi.nlm.nih.gov/pubmed/7669785) | metadata signals extractable PD data (IC50) |
| `Colciago_2002.pdf` | Colciago A et al., Pathogenesis of diabetic neuropathy--do…, Experimental and clinical e… (2002) | pd | 4 | [10.1055/s-2002-19990](https://doi.org/10.1055/s-2002-19990) | [11835121](https://www.ncbi.nlm.nih.gov/pubmed/11835121) | metadata signals extractable PD data (IC50) |
| `Simard-Duquesne_1985.pdf` | Simard-Duquesne N et al., The effects of a new aldose reductase i…, Metabolism: clinical and ex… (1985) | pd | 4 | [10.1016/0026-0495(85)90133-7](https://doi.org/10.1016/0026-0495(85)90133-7) | [3930915](https://www.ncbi.nlm.nih.gov/pubmed/3930915) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-09-16T01:07:38.501772+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bank_1989 | irrelevant | 0 | 0 | The study focuses on glomerular hemodynamics and renal physiology in rats, using tolrestat as a therapeutic agent to prevent hyperperfusion, rather than reporting pharmacokinetic parameters for tolrestat. |
| popPK | Barski_1995 | irrelevant | 0 | 0 | no_text gate: only 81 chars of text extracted (&lt; 400) |
| PD | Barski_1995 | not_relevant | 0 | 0 | The paper focuses on the structural and mechanistic characterization of the aldehyde reductase active site, not on pharmacodynamic or exposure-response modeling of tolrestat. |
| popPK | Benfield_1986 | irrelevant | 1 | 0 | The paper is a review of aldose reductase inhibitors that mentions tolrestat only as a comparator for half-life, without providing original quantitative PK parameters or a compartmental model for tolrestat. |
| popPK | Bruno_2002 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on the synthesis and in-vitro inhibitory activity of new aldose reductase inhibitors, with tolrestat used only as a comparator for potency (IC50), and no pharmacokinetic parameters are reported. |
| PD | Bruno_2002 | not_relevant | 1 | 1 | The paper reports a single in vitro IC50 value for a new compound compared to tolrestat, but does not provide a concentration-effect curve, dose-response relationship, or PK/PD model for tolrestat itself. |
| popPK | Carbone_2009 | irrelevant | 0 | 0 | The paper is an in-vitro molecular modeling and binding study, not a pharmacokinetic study, and reports no disposition parameters for tolrestat. |
| popPK | Chang_1997 | irrelevant | 0 | 0 | The study focuses on sciatic nerve blood flow in diabetic rats and uses tolrestat only as a pharmacological intervention to test its effect on blood flow, without reporting any pharmacokinetic parameters for tolrestat. |
| popPK | Colciago_2002 | irrelevant | 0 | 0 | no_text gate: only 149 chars of text extracted (&lt; 400) |
| PD | Colciago_2002 | not_relevant | 0 | 0 | The paper investigates the pathogenesis of diabetic neuropathy and the effect of aldose reductase inhibitors on neuroactive steroids, but does not report a pharmacodynamic or exposure-response relationship for tolrestat with numeric PD parameters. |
| popPK | Da_2003 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study reporting in-vitro IC50 values and efficacy in a disease model, with no pharmacokinetic parameters for tolrestat. |
| PD | Da_2003 | not_relevant | 1 | 1 | The paper reports in vitro IC50 values for enzyme inhibition and qualitative in vivo efficacy, but does not provide an exposure-response or dose-response analysis with numeric PD parameters (e.g., Emax, EC50) for tolrestat. |
| popPK | Da_2005 | irrelevant | 0 | 0 | The paper focuses on the synthesis and in vitro/in vivo efficacy of new aldose reductase inhibitors, using tolrestat only as a comparator for cataract prevention without reporting any pharmacokinetic parameters for tolrestat. |
| PD | Da_2005 | not_relevant | 1 | 0 | The paper reports in vitro IC50 values for new spirohydantoin derivatives and mentions tolrestat only as a qualitative comparator for in vivo cataract prevention, without providing any numeric PD parameters or exposure-response data for tolrestat. |
| popPK | Dvornik_1994 | relevant | 8 | 2 | The study reports the half-life of tolrestat in rat nerve (53 h), but lacks other quantitative disposition parameters like clearance or volume of distribution. |
| popPK | El-Kabbani_2000 | irrelevant | 0 | 0 | The paper is a mechanistic study on enzyme-inhibitor binding using molecular modeling and mass spectrometry, not a pharmacokinetic study. |
| PD | El-Kabbani_2000 | not_relevant | 3 | 0 | The paper reports IC50 values for tolrestat in the context of molecular modeling and mass spectrometry, but does not provide the specific numeric values or a concentration-effect curve in the provided text, nor does it describe a PK/PD model. |
| popPK | Endo_2009 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study of enzyme kinetics (AKR1B10) where tolrestat is used only as an inhibitor, not a pharmacokinetic study of tolrestat disposition. |
| popPK | Gunn_1989 | irrelevant | 0 | 0 | no_text gate: only 87 chars of text extracted (&lt; 400) |
| PD | Gunn_1989 | not_relevant | 0 | 0 | The paper describes the mechanism of action (inhibition of erythrocyte anion exchange) but does not report a quantitative exposure-response or dose-response relationship with numeric PD parameters. |
| popPK | Lo_2018 | irrelevant | 0 | 0 | The paper is a systematic review of glucose-lowering agents in diabetes and CKD and does not mention tolrestat or report any pharmacokinetic parameters. |
| PD | Lo_2018 | not_relevant | 0 | 0 | The paper is a systematic review of clinical trials for glucose-lowering agents in CKD and does not contain any pharmacokinetic or pharmacodynamic modeling, nor does it report specific exposure-response or dose-response parameters for tolrestat. |
| popPK | Lou_1996 | irrelevant | 0 | 0 | The study is a mechanistic/efficacy evaluation of cataract prevention in rats and does not report any pharmacokinetic parameters for tolrestat. |
| PD | Lou_1996 | not_relevant | 2 | 1 | The paper reports a qualitative dose-response for AL01576 and states Tolrestat was inactive at a single dose, but provides no numeric PD parameters or extractable concentration-effect curve for Tolrestat. |
| popPK | Malamas_1994 | irrelevant | 0 | 0 | The paper focuses on the synthesis and pharmacodynamic characterization of novel aldose reductase inhibitors, with tolrestat serving only as a comparator in an ex vivo experiment without reporting any quantitative pharmacokinetic parameters for it. |
| PD | Malamas_1994 | not_relevant | 2 | 1 | The paper reports in vivo ED50 values for a new compound (41) and qualitatively compares its ex vivo plasma effect to tolrestat, but it does not provide numeric PD parameters (EC50, Emax, etc.) or an exposure-response curve for tolrestat itself. |
| popPK | Mavel_1992 | irrelevant | 0 | 0 | The provided evidence contains only software metadata and no scientific content regarding tolrestat pharmacokinetics. |
| PD | Mavel_1992 | not_relevant | 0 | 0 | The provided text is metadata from a document processing tool (GROBID) and does not contain any scientific content, data, or analysis regarding tolrestat or pharmacodynamics. |
| PGx | Rojas_2025 | not_relevant | 0 | 0 | The paper is a computational drug discovery study identifying new aldose reductase inhibitors and does not report any pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of tolrestat. |
| popPK | Ruiz_2013 | irrelevant | 0 | 0 | The paper is a structural biology study focusing on X-ray crystallography and inhibitor binding, containing no pharmacokinetic parameters for tolrestat. |
| PD | Ruiz_2013 | not_relevant | 2 | 2 | The paper reports a single IC50 value for fidarestat (not tolrestat) and focuses on structural biology, lacking a full exposure-response or dose-response curve for tolrestat. |
| popPK | Sharma_1998 | irrelevant | 0 | 0 | The paper is a review of indirect pharmacodynamic (PD) response models and does not report quantitative pharmacokinetic parameters for tolrestat. |
| PD | Sharma_1998 | not_relevant | 1 | 0 | The paper is a review of indirect pharmacodynamic models and does not report specific numeric PD parameters for tolrestat, only citing a study on it in the references. |
| popPK | Simard-Duquesne_1985 | irrelevant | 0 | 0 | no_text gate: only 93 chars of text extracted (&lt; 400) |
| PD | Simard-Duquesne_1985 | not_relevant | 0 | 0 | The provided text is only the title of the paper and does not contain the full text, data, or numeric PD parameters required to assess the exposure-response relationship. |
| popPK | Srivastava_1998 | irrelevant | 0 | 0 | The study is a mechanistic in-vitro investigation of aldose reductase metabolism of HNE, where tolrestat is used only as a comparator inhibitor, and no pharmacokinetic parameters for tolrestat are reported. |
| PD | Srivastava_1998 | not_relevant | 1 | 2 | The paper reports an IC50 value for tolrestat against a modified enzyme in an in vitro biochemical assay, which is not a pharmacodynamic exposure-response relationship for the drug in a biological system. |
| popPK | Sun_2003 | irrelevant | 0 | 0 | The paper is a structure-activity relationship (SAR) and docking study reporting in-vitro IC50 values, not a pharmacokinetic study with disposition parameters. |
| PD | Sun_2003 | not_relevant | 1 | 1 | The paper reports a single in vitro IC50 value for tolrestat (16 µM) as a reference standard for a new compound, but does not report a dose-response curve, PK/PD model, or exposure-response relationship for tolrestat. |
| popPK | van_1995 | irrelevant | 0 | 0 | no_text gate: only 156 chars of text extracted (&lt; 400) |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
