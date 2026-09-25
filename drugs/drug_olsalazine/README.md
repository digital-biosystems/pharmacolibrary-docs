<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A07E&quot;,&quot;href&quot;:&quot;atc/A07E.md&quot;},{&quot;label&quot;:&quot;olsalazine&quot;}]"></div>

# olsalazine

- **generic name:** olsalazine
- **ATC codes:** `A07EC03`
- **DrugBank:** [DB01250](https://go.drugbank.com/drugs/DB01250)
- **groups:** approved

## About

**Description.** Olsalazine is an aminosalicylate and a prodrug of [mesalamine] (5-aminosalicylic acid, 5-ASA).[A257063] It was first developed for delivering mesalamine to the colon without the use of [sulfapyridine].[A257078] Olsalazine comprises two mesalamine molecules joined by an azo bridge, which is cleaved in the colon.[A257078] Olsalazine is an anti-inflammatory agent that works by inhibiting cyclooxygenase and lipoxygenase, subsequently reducing the production of pro-inflammatory factors like prostaglandin and leukotriene.[A257063] Olsalazine is used in the treatment of ulcerative colitis.[L45023,L45151]

**Indication.** In the US, olsalazine is indicated for the maintenance of remission of ulcerative colitis in adult patients who are intolerant to [sulfasalazine].[L45023]

In Canada, it is used in the treatment of acute ulcerative colitis of mild to moderate severity, with or without the concomitant use of steroids. It is also indicated for the long-term maintenance of patients with ulcerative colitis in remission.[L45151]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-22 05:27 | 10:55 | 0/0/0 | 2/0/0 | 0/0/0 | 257,487/8,088 | ollama / qwen3.8:27b-mtp-q8_0 | 8 | 2/6 | 8/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Asl_2021](drugs/drug_olsalazine/pd_Asl_2021_CDH1.md) | Asl MM et al., Comparison of the effects of olsalazine…, Research in pharmaceutical… (2021) | [10.4103/1735-5362.314826](https://doi.org/10.4103/1735-5362.314826) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Asl_2021](drugs/drug_olsalazine/pd_Asl_2021_CDH1_expression.md) | Asl MM et al., Comparison of the effects of olsalazine…, Research in pharmaceutical… (2021) | [10.4103/1735-5362.314826](https://doi.org/10.4103/1735-5362.314826) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Asl_2021](drugs/drug_olsalazine/pd_Asl_2021_Cell_viability.md) | Asl MM et al., Comparison of the effects of olsalazine…, Research in pharmaceutical… (2021) | [10.4103/1735-5362.314826](https://doi.org/10.4103/1735-5362.314826) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Asl_2021](drugs/drug_olsalazine/pd_Asl_2021_uPA.md) | Asl MM et al., Comparison of the effects of olsalazine…, Research in pharmaceutical… (2021) | [10.4103/1735-5362.314826](https://doi.org/10.4103/1735-5362.314826) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Asl_2021](drugs/drug_olsalazine/pd_Asl_2021_uPA_expression.md) | Asl MM et al., Comparison of the effects of olsalazine…, Research in pharmaceutical… (2021) | [10.4103/1735-5362.314826](https://doi.org/10.4103/1735-5362.314826) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Nesbitt_2025](drugs/drug_olsalazine/pd_Nesbitt_2025_CD41.md) | Nesbitt NM et al., Small molecule BLVRB redox inhibitor pr…, Nature communications (2025) | [10.1038/s41467-025-58497-9](https://doi.org/10.1038/s41467-025-58497-9) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Nesbitt_2025](drugs/drug_olsalazine/pd_Nesbitt_2025_CD61.md) | Nesbitt NM et al., Small molecule BLVRB redox inhibitor pr…, Nature communications (2025) | [10.1038/s41467-025-58497-9](https://doi.org/10.1038/s41467-025-58497-9) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Nesbitt_2025](drugs/drug_olsalazine/pd_Nesbitt_2025_Platelets.md) | Nesbitt NM et al., Small molecule BLVRB redox inhibitor pr…, Nature communications (2025) | [10.1038/s41467-025-58497-9](https://doi.org/10.1038/s41467-025-58497-9) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=olsalazine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | blood | `TPMT` inhibitor | DrugBank actor |
| metabolism | liver | `TPMT` inhibitor, `XDH` inhibitor | DrugBank actor |
| metabolism | small intestine | `XDH` inhibitor | DrugBank actor |
| excretion | bile duct | <sub>“…ning mesalamine is partially acetylated and excreted in the feces. From fecal dialysis, th…”</sub> | prose |
| excretion | kidney | `SLC22A6` upregulator, `SLC22A8` upregulator | DrugBank actor |
| excretion | small intestine | <sub>“…as excreted in feces as unchanged olsalazine when the whole gut transit time was decreased…”</sub> | prose |

<sub>Actors without a tissue in the table: ATP1A1 (inhibitor), PTGS1 (inhibitor), SLC20A1 (upregulator), SLC2A9 (downregulator).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 51 matched, 59 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_10 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ryde_1988.pdf` | Ryde EM et al., The pharmacokinetics of olsalazine sodi…, European journal of clinica… (1988) | popPK | 9 | [10.1007/BF01046706](https://doi.org/10.1007/BF01046706) | [3203708](https://pubmed.ncbi.nlm.nih.gov/3203708) | The study reports quantitative PK parameters for olsalazine, including elimination half-life (56 min), systemic availability, and urinary excretion percentages, though specific clearance or volume values are not explicitly listed in the provided text. |
| `Knoll_2002.pdf` | Knoll U et al., Study of the plasma pharmacokinetics an…, Journal of veterinary pharm… (2002) | popPK | 8 | [10.1046/j.1365-2885.2002.00395.x](https://doi.org/10.1046/j.1365-2885.2002.00395.x) | [12000534](https://pubmed.ncbi.nlm.nih.gov/12000534) | The study reports pharmacokinetics for olsalazine in horses but provides only qualitative descriptions and peak concentrations (Cmax) rather than specific quantitative disposition parameters like clearance (CL) or volume (V). |
| `Li_2022.pdf` | Li Z et al., Pharmacokinetic and gut microbiota anal…, European journal of pharmac… (2022) | popPK | 8 | [10.1016/j.ejps.2022.106235](https://doi.org/10.1016/j.ejps.2022.106235) | [35697287](https://pubmed.ncbi.nlm.nih.gov/35697287) | The paper is a pharmacokinetic study of olsalazine in rats, but the specific numeric parameter values are not present in the provided evidence text. |
| `Allgayer_1992.pdf` | Allgayer H et al., Superoxide, hydroxyl and fatty acid rad…, Biochemical pharmacology (1992) | pd | 4 | [10.1016/0006-2952(92)90286-r](https://doi.org/10.1016/0006-2952(92)90286-r) | [1310851](https://www.ncbi.nlm.nih.gov/pubmed/1310851) | metadata signals extractable PD data (IC50) |
| `Grisham_1994.pdf` | Grisham MB et al., Effects of aminosalicylates and immunos…, Biochemical pharmacology (1994) | pd | 4 | [10.1016/0006-2952(94)90320-4](https://doi.org/10.1016/0006-2952(94)90320-4) | [8204107](https://www.ncbi.nlm.nih.gov/pubmed/8204107) | metadata signals extractable PD data (IC50) |
| `Meyers_1987.pdf` | Meyers S et al., Olsalazine sodium in the treatment of u…, Gastroenterology (1987) | pd | 4 | [10.1016/0016-5085(87)90253-8](https://doi.org/10.1016/0016-5085(87)90253-8) | [2890550](https://www.ncbi.nlm.nih.gov/pubmed/2890550) | metadata signals extractable PD data (sigmoid) |
| `Nielsen_1988.pdf` | Nielsen OH et al., Inhibition of intestinal macrophage che…, Alimentary pharmacology & t… (1988) | pd | 4 | [10.1111/j.1365-2036.1988.tb00689.x](https://doi.org/10.1111/j.1365-2036.1988.tb00689.x) | [2908754](https://www.ncbi.nlm.nih.gov/pubmed/2908754) | metadata signals extractable PD data (IC50) |
| `Niu_2017.pdf` | Niu Y et al., Old drug, new indication: Olsalazine so…, Journal of pharmacological… (2017) | pd | 4 | [10.1016/j.jphs.2017.10.007](https://doi.org/10.1016/j.jphs.2017.10.007) | [29132796](https://www.ncbi.nlm.nih.gov/pubmed/29132796) | metadata signals extractable PD data (IC50) |
| `Scheurlen_1993.pdf` | Scheurlen C et al., Effect of olsalazine and mesalazine on…, The Clinical investigator (1993) | pd | 4 | [10.1007/BF00184728](https://doi.org/10.1007/BF00184728) | [8386034](https://www.ncbi.nlm.nih.gov/pubmed/8386034) | metadata signals extractable PD data (IC50) |
| `Lewis_1997.pdf` | Lewis LD et al., Olsalazine and 6-mercaptopurine-related…, Clinical pharmacology and t… (1997) | pgx | 8 | [10.1016/S0009-9236(97)90125-9](https://doi.org/10.1016/S0009-9236(97)90125-9) | [9357398](https://www.ncbi.nlm.nih.gov/pubmed/9357398) | metadata signals extractable PGX data (TPMT, PK/PD-context) |

<sub>queue written 2026-09-22T05:24:19.074390+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Allgayer_1992 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of radical scavenging properties using ESR spectroscopy and does not report any pharmacokinetic parameters for olsalazine. |
| popPK | Asl_2021 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of gene expression and cytotoxicity, not a pharmacokinetic study, and reports no disposition parameters. |
| popPK | Axelsson_1998 | irrelevant | 0 | 0 | The study is a pharmacological efficacy trial in mice measuring therapeutic outcomes (survival, inflammation markers) rather than reporting quantitative pharmacokinetic parameters for olsalazine. |
| popPK | Banda_2016 | irrelevant | 2 | 0 | The paper describes a bioanalytical method for mesalazine (an olsalazine metabolite) and mentions a PK study application, but no quantitative PK parameters (CL, V, ka, etc.) for olsalazine or mesalazine are provided in the evidence. |
| popPK | Bankole_2021 | irrelevant | 0 | 0 | The study investigates the environmental degradation of olsalazine by fungal laccase (in-vitro/biotechnological) and reports enzymatic kinetics (Vmax, Km) rather than pharmacokinetic disposition parameters (CL, V, ka) in a biological host. |
| popPK | Christensen_1994 | irrelevant | 2 | 0 | The study focuses on the bioavailability of 5-ASA from Pentasa with olsalazine as a comparator, reporting concentrations and excretion percentages rather than quantitative PK parameters (CL, V, ka) for olsalazine. |
| popPK | Crotty_1992 | irrelevant | 0 | 0 | The study is a mechanistic in-vitro investigation of receptor binding inhibition, not a pharmacokinetic study, and reports no disposition parameters for olsalazine. |
| popPK | G_2020 | irrelevant | 0 | 0 | The paper is an in silico study on drug repurposing for Alzheimer's disease and does not report any pharmacokinetic parameters for olsalazine. |
| popPK | Grisham_1994 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of N-nitrosation inhibition and does not report any pharmacokinetic parameters for olsalazine. |
| popPK | Hanauer_2006 | irrelevant | 0 | 0 | The paper is a clinical review of therapeutic efficacy and dosing in ulcerative colitis, containing no pharmacokinetic parameters or quantitative disposition data for olsalazine. |
| PD | Hanauer_2006 | not_relevant | 2 | 0 | The text is a qualitative review discussing general dose-response trends and toxicity thresholds for aminosalicylates, but it does not provide specific numeric PD parameters (e.g., EC50, Emax) or an extractable concentration-effect curve for olsalazine. |
| popPK | Kedia_2007 | irrelevant | 0 | 0 | The paper is a review of mesalamine formulations for ulcerative colitis and does not report any quantitative pharmacokinetic parameters for olsalazine. |
| PD | Kedia_2007 | not_relevant | 0 | 0 | The text is a review/overview of MMX mesalamine and mentions olsalazine only as a related drug in the context of treatment options, without reporting any specific pharmacodynamic data, exposure-response relationships, or numeric PD parameters for olsalazine. |
| popPK | Kennel_2025 | irrelevant | 0 | 0 | The study investigates mosquito gene expression and dye clearance in Aedes aegypti, not human or animal pharmacokinetic parameters (CL, V, ka) for olsalazine. |
| popPK | Knoll_2002 | relevant | 8 | 2 | The study reports pharmacokinetics for olsalazine in horses but provides only qualitative descriptions and peak concentrations (Cmax) rather than specific quantitative disposition parameters like clearance (CL) or volume (V). |
| popPK | Lauritsen_1988 | irrelevant | 2 | 0 | The study describes qualitative pharmacokinetic observations (no accumulation, complete azoreduction) but does not report quantitative disposition parameters (CL, V, ka, t1/2) for olsalazine. |
| popPK | Lauritsen_1988_2 | irrelevant | 2 | 0 | The study focuses on efficacy and faecal metabolite concentrations rather than reporting quantitative systemic pharmacokinetic parameters (CL, V, ka) for olsalazine. |
| popPK | Lauritsen_1990 | irrelevant | 0 | 0 | The paper is a review article that explicitly states olsalazine will be dealt with in Part II, and no quantitative pharmacokinetic parameters for olsalazine are provided in the text. |
| PD | Lauritsen_1990 | not_relevant | 1 | 0 | The text is an abstract for a review article that mentions olsalazine and PK/PD relationships in general terms but provides no specific numeric PD parameters or exposure-response data. |
| popPK | Lennard_2001 | irrelevant | 0 | 0 | The paper is a review of therapeutic drug monitoring for antimetabolites (mercaptopurine, methotrexate, etc.) and mentions olsalazine only in the context of a drug interaction case report, without providing any pharmacokinetic parameters for olsalazine. |
| PD | Lennard_2001 | not_relevant | 0 | 0 | The paper is a review of therapeutic drug monitoring for cytotoxic drugs (methotrexate, mercaptopurine, fluorouracil, Ara-C) and does not mention olsalazine or report any pharmacodynamic parameters for it. |
| popPK | Lewis_1997 | irrelevant | 0 | 0 | no_text gate: only 97 chars of text extracted (&lt; 400) |
| PGx | Lewis_1997 | not_relevant | 0 | 0 | The paper discusses a drug-drug interaction between olsalazine and 6-mercaptopurine, not a pharmacogenomic effect on olsalazine's PK/PD. |
| popPK | Li_2022 | relevant | 8 | 0 | The paper is a pharmacokinetic study of olsalazine in rats, but the specific numeric parameter values are not present in the provided evidence text. |
| PD | Li_2022 | not_relevant | 0 | 0 | The study focuses on the effect of probiotics on the pharmacokinetics and gut microbiota of olsalazine, reporting no concentration-effect or dose-response relationship for the drug itself. |
| popPK | Meyers_1987 | irrelevant | 0 | 0 | no_text gate: only 189 chars of text extracted (&lt; 400) |
| PD | Meyers_1987 | not_relevant | 0 | 0 | The paper is a clinical trial evaluating efficacy and safety, not a pharmacokinetic or pharmacodynamic modeling study, and does not report exposure-response or dose-response numeric parameters. |
| popPK | Murray_2020 | irrelevant | 0 | 0 | This is a Cochrane review of clinical efficacy for 5-ASA formulations in ulcerative colitis and does not report pharmacokinetic parameters for olsalazine. |
| PD | Murray_2020 | not_relevant | 2 | 0 | The paper is a Cochrane review that mentions a qualitative dose-response trend for 5-ASA but does not provide specific numeric PD parameters (e.g., Emax, EC50) or an extractable concentration-effect curve for olsalazine. |
| popPK | Nesbitt_2025 | irrelevant | 0 | 0 | The paper studies BLVRB inhibitors (BCT1028, etc.) and uses olsalazine only as a co-crystallized ligand in a PDB structure for docking, not as the subject of pharmacokinetic analysis. |
| popPK | Nielsen_1988 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of macrophage chemotaxis inhibition, not a pharmacokinetic study, and reports no disposition parameters for olsalazine. |
| popPK | Nielsen_1993 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of superoxide generation in neutrophils and does not report any pharmacokinetic parameters for olsalazine. |
| popPK | Niu_2017 | irrelevant | 0 | 0 | The study focuses on the mechanism of action (xanthine oxidoreductase inhibition) and efficacy in mice, reporting no pharmacokinetic disposition parameters such as clearance, volume, or half-life. |
| popPK | Niu_2020 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic effects of olsalazine on urate excretion and transporter expression, not the pharmacokinetic disposition parameters (CL, V, ka) of olsalazine itself. |
| popPK | Nugent_2001 | irrelevant | 0 | 0 | The paper is a review of intestinal luminal pH and its implications for drug release, containing no original pharmacokinetic data or quantitative disposition parameters for olsalazine. |
| popPK | Rasmussen_1995 | irrelevant | 0 | 0 | The paper is a review of mesalazine preparations and does not report quantitative pharmacokinetic parameters for olsalazine. |
| PGx | Russell_2024 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (olsalazine inhibiting TPMT) affecting thiopurine metabolism, not a pharmacogenomic effect on olsalazine's PK/PD. |
| popPK | Ryde_1991 | irrelevant | 2 | 0 | The study reports bioequivalence metrics (AUC, Cmax, Ae) for the metabolite ac-5-ASA and olsalazine absorption, but does not provide quantitative compartmental PK parameters (CL, V, ka) for olsalazine. |
| popPK | Sandborn_2003 | irrelevant | 2 | 1 | This is a systematic review reporting only urinary and fecal excretion percentages, lacking the specific quantitative disposition parameters (CL, V, ka, half-life) required for population PK modeling. |
| PD | Sandborn_2003 | not_relevant | 1 | 0 | The paper is a systematic review of pharmacokinetic profiles (excretion data) and does not report any pharmacodynamic or exposure-response relationships with numeric parameters. |
| popPK | Sandborn_2006 | irrelevant | 0 | 0 | The paper is a clinical review of efficacy and formulation for ulcerative colitis treatments and does not report any quantitative pharmacokinetic parameters for olsalazine. |
| PD | Sandborn_2006 | not_relevant | 1 | 0 | The text is a review summarizing qualitative dose-response findings (e.g., no response above 1.5g) without providing specific numeric PD parameters or concentration-effect curves for olsalazine. |
| popPK | Scheurlen_1993 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of enzyme inhibition (ATPase) and does not report pharmacokinetic parameters for olsalazine. |
| popPK | Schroeder_2002 | irrelevant | 0 | 0 | The paper is a clinical review of mesalazine and its prodrugs for ulcerative colitis treatment, containing no pharmacokinetic data or quantitative disposition parameters for olsalazine. |
| PD | Schroeder_2002 | not_relevant | 1 | 0 | The text is a general review of mesalazine/olsalazine that mentions a qualitative dose-response benefit but provides no numeric PD parameters, concentration-effect curves, or PK/PD modeling data. |
| popPK | Segars_1992 | irrelevant | 1 | 0 | The paper is a clinical review of mesalamine and olsalazine that discusses pharmacokinetics generally but does not report specific quantitative disposition parameters (CL, V, ka, etc.) for olsalazine. |
| popPK | Smith_2004 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study of GABA(A) receptor modulation and does not report any pharmacokinetic parameters for olsalazine. |
| PD | Smith_2004 | not_relevant | 0 | 0 | The paper reports in vitro receptor pharmacology (EC50 for GABA and other modulators) but provides no numeric PD parameters or exposure-response relationship for olsalazine, which is only qualitatively described as a weak potentiator. |
| popPK | Vertzoni_2011 | irrelevant | 1 | 0 | The study reports ex vivo bacterial degradation half-lives, not in vivo pharmacokinetic disposition parameters (CL, V, ka) for olsalazine. |
| popPK | Vertzoni_2018 | irrelevant | 1 | 0 | The paper is an in-vitro study on bacterial degradation methodology where olsalazine is used only as a reference compound for optimization, not as the subject of a pharmacokinetic parameter estimation. |
| popPK | Wadworth_1991 | irrelevant | 1 | 0 | The paper is a review of pharmacodynamic and pharmacokinetic properties, but the provided evidence contains no quantitative PK parameter values (CL, V, ka, etc.) for olsalazine. |
| PD | Wadworth_1991 | not_relevant | 2 | 1 | The text is a qualitative review summarizing clinical efficacy rates and dose-dependent side effects (diarrhea) without providing specific numeric PD parameters (e.g., EC50, Emax) or concentration-effect curves. |
| popPK | Wang_2026 | irrelevant | 0 | 0 | The paper focuses on the synthesis and in vitro/in vivo efficacy of a nanocarrier for MRI-guided therapy, with no report of quantitative pharmacokinetic parameters (CL, V, ka, etc.) for olsalazine. |
| popPK | Yamada_1991 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of lipid peroxidation inhibition and does not report any pharmacokinetic parameters for olsalazine. |
| popPK | Yang_2026 | irrelevant | 0 | 0 | The paper describes a drug delivery system for olsalazine and reports efficacy/release data, but does not provide quantitative pharmacokinetic parameters (CL, V, ka, etc.) for olsalazine. |
| PGx | Zhao_2025 | not_relevant | 0 | 0 | The paper investigates the causal association between gene expression of drug targets and psychiatric disorders using Mendelian randomization, not the effect of genetic variants on the pharmacokinetics or pharmacodynamics of olsalazine. |
| popPK | unknown_2022 | irrelevant | 0 | 0 | no_text gate: only 37 chars of text extracted (&lt; 400) |
| PD | unknown_2022 | not_relevant | 0 | 0 | The provided text is a conference title and contains no information regarding olsalazine, pharmacodynamics, or exposure-response relationships. |
| popPK | van_1988 | irrelevant | 2 | 0 | The text describes qualitative pharmacokinetic properties (e.g., "low" concentrations, "long" half-life) but contains no quantitative numeric parameter values for olsalazine. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
