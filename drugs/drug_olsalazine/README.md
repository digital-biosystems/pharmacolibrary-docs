<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A07E&quot;,&quot;href&quot;:&quot;atc/A07E.md&quot;},{&quot;label&quot;:&quot;olsalazine&quot;}]"></div>

# olsalazine

- **generic name:** olsalazine
- **ATC codes:** `A07EC03`
- **DrugBank:** [DB01250](https://go.drugbank.com/drugs/DB01250) · **PubChem:** [CID 6003770](https://pubchem.ncbi.nlm.nih.gov/compound/6003770)
- **molar mass:** 302.239 g/mol (C14H10N2O6) — DrugBank
- **groups:** approved

## About

Olsalazine is an aminosalicylate anti-inflammatory drug used to treat ulcerative colitis. It is an approved medicine, though it is not authorised centrally in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q347621](https://www.wikidata.org/wiki/Q347621) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 19:48 | 2:57 | 0/0/0 | 0/0/0 | 0/0/0 | 109,091/2,731 | ollama / qwen3.8:27b-mtp-q8_0 | 6 | 2/6 | 6/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=olsalazine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | blood | `TPMT` inhibitor | DrugBank actor |
| metabolism | liver | `TPMT` inhibitor, `XDH` inhibitor | DrugBank actor |
| metabolism | small intestine | `XDH` inhibitor | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | `SLC22A6` upregulator, `SLC22A8` upregulator | DrugBank actor |

<sub>Actors without a tissue in the table: ATP1A1 (inhibitor), PTGS1 (inhibitor), SLC20A1 (upregulator), SLC2A9 (downregulator).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 51 matched, 59 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_11 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Banda_2016.pdf` | Banda J et al., Determination of mesalazine, a low bioa…, Journal of chromatography.… (2016) | popPK | 9 | [10.1016/j.jchromb.2015.11.001](https://doi.org/10.1016/j.jchromb.2015.11.001) | [26606108](https://pubmed.ncbi.nlm.nih.gov/26606108) | The paper describes a PK study of olsalazine in humans, but the specific quantitative parameter values (CL, V, etc.) are not present in the provided evidence text. |
| `Knoll_2002.pdf` | Knoll U et al., Study of the plasma pharmacokinetics an…, Journal of veterinary pharm… (2002) | popPK | 9 | [10.1046/j.1365-2885.2002.00395.x](https://doi.org/10.1046/j.1365-2885.2002.00395.x) | [12000534](https://pubmed.ncbi.nlm.nih.gov/12000534) | The study reports pharmacokinetic data for olsalazine in horses, including specific concentration values (Cmax, Tmax) and bioavailability, but lacks explicit clearance or volume parameters in the provided text. |
| `Li_2022.pdf` | Li Z et al., Pharmacokinetic and gut microbiota anal…, European journal of pharmac… (2022) | popPK | 9 | [10.1016/j.ejps.2022.106235](https://doi.org/10.1016/j.ejps.2022.106235) | [35697287](https://pubmed.ncbi.nlm.nih.gov/35697287) | The study reports pharmacokinetic parameters for olsalazine in rats, but the specific numeric values are not present in the provided evidence text. |
| `Ryde_1988.pdf` | Ryde EM et al., The pharmacokinetics of olsalazine sodi…, European journal of clinica… (1988) | popPK | 9 | [10.1007/BF01046706](https://doi.org/10.1007/BF01046706) | [3203708](https://pubmed.ncbi.nlm.nih.gov/3203708) | The study reports quantitative PK parameters (half-life, bioavailability, MRT) for olsalazine in humans, though specific clearance and volume values are not explicitly listed in the provided text. |
| `Allgayer_1992.pdf` | Allgayer H et al., Superoxide, hydroxyl and fatty acid rad…, Biochemical pharmacology (1992) | pd | 4 | [10.1016/0006-2952(92)90286-r](https://doi.org/10.1016/0006-2952(92)90286-r) | [1310851](https://www.ncbi.nlm.nih.gov/pubmed/1310851) | metadata signals extractable PD data (IC50) |
| `Grisham_1994.pdf` | Grisham MB et al., Effects of aminosalicylates and immunos…, Biochemical pharmacology (1994) | pd | 4 | [10.1016/0006-2952(94)90320-4](https://doi.org/10.1016/0006-2952(94)90320-4) | [8204107](https://www.ncbi.nlm.nih.gov/pubmed/8204107) | metadata signals extractable PD data (IC50) |
| `Meyers_1987.pdf` | Meyers S et al., Olsalazine sodium in the treatment of u…, Gastroenterology (1987) | pd | 4 | [10.1016/0016-5085(87)90253-8](https://doi.org/10.1016/0016-5085(87)90253-8) | [2890550](https://www.ncbi.nlm.nih.gov/pubmed/2890550) | metadata signals extractable PD data (sigmoid) |
| `Nielsen_1988.pdf` | Nielsen OH et al., Inhibition of intestinal macrophage che…, Alimentary pharmacology & t… (1988) | pd | 4 | [10.1111/j.1365-2036.1988.tb00689.x](https://doi.org/10.1111/j.1365-2036.1988.tb00689.x) | [2908754](https://www.ncbi.nlm.nih.gov/pubmed/2908754) | metadata signals extractable PD data (IC50) |
| `Niu_2017.pdf` | Niu Y et al., Old drug, new indication: Olsalazine so…, Journal of pharmacological… (2017) | pd | 4 | [10.1016/j.jphs.2017.10.007](https://doi.org/10.1016/j.jphs.2017.10.007) | [29132796](https://www.ncbi.nlm.nih.gov/pubmed/29132796) | metadata signals extractable PD data (IC50) |
| `Scheurlen_1993.pdf` | Scheurlen C et al., Effect of olsalazine and mesalazine on…, The Clinical investigator (1993) | pd | 4 | [10.1007/BF00184728](https://doi.org/10.1007/BF00184728) | [8386034](https://www.ncbi.nlm.nih.gov/pubmed/8386034) | metadata signals extractable PD data (IC50) |
| `Lewis_1997.pdf` | Lewis LD et al., Olsalazine and 6-mercaptopurine-related…, Clinical pharmacology and t… (1997) | pgx | 8 | [10.1016/S0009-9236(97)90125-9](https://doi.org/10.1016/S0009-9236(97)90125-9) | [9357398](https://www.ncbi.nlm.nih.gov/pubmed/9357398) | metadata signals extractable PGX data (TPMT, PK/PD-context) |

<sub>queue written 2026-10-04T19:47:25.291524+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Allgayer_1992 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of radical scavenging properties using ESR spectroscopy and does not report any pharmacokinetic parameters for olsalazine. |
| popPK | Asl_2021 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of gene expression and cytotoxicity, not a pharmacokinetic study, and reports no disposition parameters. |
| popPK | Axelsson_1998 | irrelevant | 0 | 0 | The study is a pharmacodynamic/efficacy trial in mice measuring therapeutic outcomes (survival, inflammation markers) rather than pharmacokinetic parameters. |
| popPK | Banda_2016 | relevant | 9 | 0 | The paper describes a PK study of olsalazine in humans, but the specific quantitative parameter values (CL, V, etc.) are not present in the provided evidence text. |
| popPK | Bankole_2021 | irrelevant | 0 | 0 | The study investigates the in vitro enzymatic degradation of olsalazine by a fungus, not its pharmacokinetics in a biological subject. |
| popPK | Christensen_1994 | irrelevant | 2 | 1 | The study compares bioavailability of 5-ASA from Pentasa and Olsalazine, reporting concentrations and excretion percentages rather than compartmental PK parameters (CL, V, ka) for Olsalazine itself. |
| popPK | Crotty_1992 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of receptor binding inhibition, not a pharmacokinetic study reporting disposition parameters. |
| popPK | G_2020 | irrelevant | 0 | 0 | The paper is an in silico study on drug repurposing for Alzheimer's disease and does not report any pharmacokinetic parameters for olsalazine. |
| popPK | Grisham_1994 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of N-nitrosation inhibition and does not report any pharmacokinetic parameters for olsalazine. |
| popPK | Hanauer_2006 | irrelevant | 0 | 0 | The paper is a clinical review of efficacy and tolerability, containing no pharmacokinetic parameters or quantitative disposition data for olsalazine. |
| PD | Hanauer_2006 | not_relevant | 2 | 0 | The text is a qualitative review discussing general dose-response trends and toxicity thresholds for aminosalicylates, but it does not provide specific numeric PD parameters (e.g., EC50, Emax) or an extractable concentration-effect curve for olsalazine. |
| popPK | Kedia_2007 | irrelevant | 0 | 0 | The paper is a review of mesalamine formulations for ulcerative colitis and does not report any quantitative pharmacokinetic parameters for olsalazine. |
| PD | Kedia_2007 | not_relevant | 0 | 0 | The text is a review/overview of MMX mesalamine and mentions olsalazine only as a related drug in the context of treatment options, without reporting any specific pharmacodynamic data, exposure-response relationships, or numeric PD parameters for olsalazine. |
| popPK | Kennel_2025 | irrelevant | 0 | 0 | The study investigates xenobiotic transporter gene expression in mosquitoes using olsalazine as a probe dye, not pharmacokinetic parameters (CL, V, ka) for the drug. |
| popPK | Knoll_2002 | relevant | 9 | 4 | The study reports pharmacokinetic data for olsalazine in horses, including specific concentration values (Cmax, Tmax) and bioavailability, but lacks explicit clearance or volume parameters in the provided text. |
| popPK | Lauritsen_1988 | irrelevant | 2 | 0 | The study describes qualitative pharmacokinetic observations (no accumulation, complete azoreduction) and local eicosanoid effects but does not report quantitative disposition parameters (CL, V, ka, t1/2) for olsalazine. |
| popPK | Lauritsen_1988_2 | irrelevant | 2 | 0 | The study focuses on efficacy and faecal metabolite concentrations rather than reporting quantitative systemic pharmacokinetic parameters (CL, V, ka) for olsalazine. |
| popPK | Lauritsen_1990 | irrelevant | 1 | 0 | The paper is a review article that explicitly states olsalazine will be dealt with in Part II, and no quantitative pharmacokinetic parameters for olsalazine are present in the provided text. |
| PD | Lauritsen_1990 | not_relevant | 1 | 0 | The text is an abstract for a review article that mentions olsalazine and PK/PD relationships in general terms but provides no specific numeric PD parameters or exposure-response data. |
| popPK | Lennard_2001 | irrelevant | 0 | 0 | The paper is a review of therapeutic drug monitoring for cytotoxic drugs and does not mention olsalazine or provide any pharmacokinetic parameters for it. |
| PD | Lennard_2001 | not_relevant | 0 | 0 | The paper is a review of therapeutic drug monitoring for cytotoxic drugs (methotrexate, mercaptopurine, fluorouracil, Ara-C) and does not mention olsalazine or report any pharmacodynamic parameters for it. |
| popPK | Lewis_1997 | irrelevant | 0 | 0 | no_text gate: only 97 chars of text extracted (&lt; 400) |
| PGx | Lewis_1997 | not_relevant | 0 | 0 | The paper discusses a drug-drug interaction between olsalazine and 6-mercaptopurine, not a pharmacogenomic effect on olsalazine's PK/PD. |
| popPK | Li_2022 | relevant | 9 | 0 | The study reports pharmacokinetic parameters for olsalazine in rats, but the specific numeric values are not present in the provided evidence text. |
| PD | Li_2022 | not_relevant | 0 | 0 | The study focuses on the effect of probiotics on the pharmacokinetics and gut microbiota of olsalazine, reporting no concentration-effect or dose-response relationship for the drug itself. |
| popPK | Meyers_1987 | irrelevant | 0 | 0 | no_text gate: only 189 chars of text extracted (&lt; 400) |
| PD | Meyers_1987 | not_relevant | 0 | 0 | The paper is a clinical trial evaluating efficacy and safety, not a pharmacokinetic or pharmacodynamic modeling study, and does not report exposure-response or dose-response numeric parameters. |
| popPK | Murray_2020 | irrelevant | 0 | 0 | This is a clinical efficacy review of 5-ASA formulations for ulcerative colitis and does not report pharmacokinetic parameters for olsalazine. |
| PD | Murray_2020 | not_relevant | 2 | 0 | The paper is a Cochrane review that mentions a qualitative dose-response trend for 5-ASA but does not provide specific numeric PD parameters (e.g., Emax, EC50) or an extractable concentration-effect curve for olsalazine. |
| popPK | Nesbitt_2025 | irrelevant | 0 | 0 | The study focuses on BLVRB inhibitors (BCT1028, etc.) in mice, and olsalazine is only mentioned as a co-crystallized ligand in a PDB structure used for docking, not as the subject of pharmacokinetic analysis. |
| popPK | Nielsen_1988 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of macrophage chemotaxis inhibition, not a pharmacokinetic study, and reports no disposition parameters for olsalazine. |
| popPK | Nielsen_1993 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of superoxide generation in neutrophils and does not report any pharmacokinetic parameters for olsalazine. |
| popPK | Niu_2017 | irrelevant | 0 | 0 | The study focuses on the mechanism of action (xanthine oxidoreductase inhibition) and efficacy in mice, reporting no pharmacokinetic disposition parameters such as clearance, volume, or half-life. |
| popPK | Niu_2020 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic effects of olsalazine on urate excretion and transporter expression in rats and mice, but does not report pharmacokinetic parameters (CL, V, ka, t1/2) for olsalazine itself. |
| popPK | Nugent_2001 | irrelevant | 0 | 0 | The paper is a review of intestinal luminal pH and its implications for drug release, containing no quantitative pharmacokinetic parameters for olsalazine. |
| popPK | Rasmussen_1995 | irrelevant | 0 | 0 | The paper is a review discussing mesalazine and olsalazine generally without reporting any quantitative pharmacokinetic parameters for olsalazine. |
| PGx | Russell_2024 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (olsalazine inhibiting TPMT) but does not report a pharmacogenomic effect (gene variant/genotype) on the PK/PD of olsalazine. |
| popPK | Ryde_1991 | irrelevant | 2 | 0 | The study reports bioequivalence metrics (AUC, Cmax, Ae) for the metabolite ac-5-ASA and absorption of olsalazine, but does not provide specific compartmental PK parameters (CL, V, ka, t1/2) for olsalazine itself. |
| popPK | Sandborn_2003 | irrelevant | 2 | 2 | This is a systematic review reporting only urinary and fecal excretion percentages, lacking specific compartmental PK parameters like clearance, volume, or half-life. |
| PD | Sandborn_2003 | not_relevant | 1 | 0 | The paper is a systematic review of pharmacokinetic profiles (excretion data) and does not report any pharmacodynamic or exposure-response relationships with numeric parameters. |
| popPK | Sandborn_2006 | irrelevant | 0 | 0 | The paper is a clinical review of efficacy and formulation for ulcerative colitis treatments and does not report quantitative pharmacokinetic parameters for olsalazine. |
| PD | Sandborn_2006 | not_relevant | 1 | 0 | The text is a review summarizing qualitative dose-response findings (e.g., no response above 1.5g) without providing specific numeric PD parameters or concentration-effect curves for olsalazine. |
| popPK | Scheurlen_1993 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of enzyme inhibition (ATPase) and does not report pharmacokinetic parameters for olsalazine. |
| popPK | Schroeder_2002 | irrelevant | 0 | 0 | The paper is a clinical review of mesalazine and its prodrugs for ulcerative colitis treatment and does not report any quantitative pharmacokinetic parameters for olsalazine. |
| PD | Schroeder_2002 | not_relevant | 1 | 0 | The text is a general review of mesalazine/olsalazine that mentions a qualitative dose-response benefit but provides no numeric PD parameters, concentration-effect curves, or PK/PD modeling data. |
| popPK | Segars_1992 | irrelevant | 2 | 0 | This is a clinical review article that discusses pharmacokinetics qualitatively but does not report specific quantitative disposition parameters (CL, V, ka, etc.) for olsalazine. |
| popPK | Smith_2004 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of GABA(A) receptor modulation, not a pharmacokinetic study, and contains no disposition parameters for olsalazine. |
| PD | Smith_2004 | not_relevant | 0 | 0 | The paper reports in vitro receptor pharmacology (EC50 for GABA and other modulators) but provides no numeric PD parameters or exposure-response relationship for olsalazine, which is only qualitatively described as a weak potentiator. |
| popPK | Vertzoni_2011 | irrelevant | 1 | 2 | The study reports in-vitro/ex-vivo bacterial degradation half-lives, not systemic pharmacokinetic disposition parameters (CL, V, ka) for the drug. |
| popPK | Vertzoni_2018 | irrelevant | 0 | 0 | The study is an in vitro methodological paper optimizing fecal material for bacterial degradation assays, and olsalazine is only mentioned as a reference compound for optimization, not as the subject of a pharmacokinetic parameter estimation. |
| popPK | Wadworth_1991 | irrelevant | 1 | 0 | The paper is a review of pharmacodynamic and pharmacokinetic properties, but the provided evidence contains no quantitative PK parameter values (CL, V, ka, etc.) for olsalazine. |
| PD | Wadworth_1991 | not_relevant | 2 | 1 | The text is a qualitative review summarizing clinical efficacy rates and dose-dependent side effects (diarrhea) without providing specific numeric PD parameters (e.g., EC50, Emax) or concentration-effect curves. |
| popPK | Wang_2026 | irrelevant | 0 | 0 | The study focuses on the synthesis and in vitro/in vivo efficacy of a nanocarrier for MRI-guided therapy, not on the quantitative pharmacokinetic parameters (CL, V, ka) of olsalazine. |
| popPK | Yamada_1991 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of lipid peroxidation inhibition and does not report any pharmacokinetic parameters for olsalazine. |
| popPK | Yang_2026 | irrelevant | 0 | 0 | The paper describes a drug delivery system for olsalazine and reports release/efficacy data, but does not provide quantitative pharmacokinetic parameters (CL, V, ka, etc.) for olsalazine. |
| PGx | Zhao_2025 | not_relevant | 0 | 0 | The paper investigates the association between gene expression of anti-inflammatory drug targets and psychiatric disorders using Mendelian randomization; it does not report pharmacokinetic or pharmacodynamic parameters for olsalazine. |
| popPK | unknown_2022 | irrelevant | 0 | 0 | no_text gate: only 37 chars of text extracted (&lt; 400) |
| PD | unknown_2022 | not_relevant | 0 | 0 | The provided text is a conference title and contains no information regarding olsalazine, pharmacodynamics, or exposure-response relationships. |
| popPK | van_1988 | irrelevant | 2 | 0 | The abstract describes qualitative pharmacokinetic properties (low serum concentration, steady state duration, metabolism) but does not report specific quantitative disposition parameters (CL, V, ka, t1/2 values) for olsalazine. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
