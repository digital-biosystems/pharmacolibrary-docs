<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C02C&quot;,&quot;href&quot;:&quot;atc/C02C.md&quot;},{&quot;label&quot;:&quot;urapidil&quot;}]"></div>

# urapidil

- **generic name:** urapidil
- **ATC codes:** `C02CA06`
- **DrugBank:** [DB12661](https://go.drugbank.com/drugs/DB12661) · **PubChem:** [CID 5639](https://pubchem.ncbi.nlm.nih.gov/compound/5639)
- **molar mass:** 387.484 g/mol (C20H29N5O3) — DrugBank
- **groups:** investigational

## About

**Description.** Urapidil has been investigated for the treatment of Hypertension During Pre-Eclampsia.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-30 06:31 | 5:48 | 0/0/0 | 0/0/0 | 0/0/0 | 17,345/1,233 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/4 | 0/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=urapidil) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: HTR1A (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 109 matched, 97 returned
- **screened:** 5  ·  **relevant:** 5
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_17 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Bottorff_1988.pdf` | Bottorff MB et al., Pharmacokinetics and pharmacodynamics o…, Journal of clinical pharmac… (1988) | popPK | 10 | [10.1002/j.1552-4604.1988.tb05753.x](https://doi.org/10.1002/j.1552-4604.1988.tb05753.x) | [3392239](https://pubmed.ncbi.nlm.nih.gov/3392239) | The abstract explicitly reports quantitative pharmacokinetic parameters (Vz, CL, t1/2) for urapidil in human patients. |
| `Nirogi_2011.pdf` | Nirogi R et al., Quantification of urapidil, α-1-adrenor…, Biomedical chromatography :… (2011) | popPK | 9 | [10.1002/bmc.1604](https://doi.org/10.1002/bmc.1604) | [21308707](https://pubmed.ncbi.nlm.nih.gov/21308707) | The paper reports quantitative pharmacokinetic parameters (Cmax, Tmax, AUC, t1/2, Cl) for urapidil in rats, with all numeric values explicitly present in the text. |
| `Shepherd_1988.pdf` | Shepherd AM, Human pharmacology of urapidil, Drugs 35 Suppl (1988) | popPK | 9 | [10.2165/00003495-198800356-00005](https://doi.org/10.2165/00003495-198800356-00005) | [3042359](https://pubmed.ncbi.nlm.nih.gov/3042359) | The text explicitly reports quantitative pharmacokinetic parameters for urapidil, including plasma clearance (12 L/h), renal clearance (1.8 L/h), bioavailability (78%), and half-lives (35 min, 3 h). |
| `Gielsdorf_1986.pdf` | Gielsdorf W et al., [The pharmacokinetics and bioavailabili…, Arzneimittel-Forschung (1986) | popPK | 8 | not captured | [3778565](https://pubmed.ncbi.nlm.nih.gov/3778565) | The study is a pharmacokinetic evaluation of urapidil, but the provided evidence contains only qualitative descriptions and relative bioavailability percentages without specific numeric values for clearance, volume, or half-life. |
| `Kirsten_1986.pdf` | Kirsten R et al., Pharmacodynamics and pharmacokinetics o…, European journal of clinica… (1986) | popPK | 8 | [10.1007/BF00542413](https://doi.org/10.1007/BF00542413) | [3758142](https://pubmed.ncbi.nlm.nih.gov/3758142) | The study reports pharmacokinetics of urapidil in humans, but the evidence only provides qualitative concentration ranges (e.g., 100-200 ng/ml) and lacks specific quantitative disposition parameters like clearance, volume, or half-life. |
| `Kirsten_1989.pdf` | Kirsten R et al., Influence of food intake on the bioavai…, International journal of cl… (1989) | popPK | 8 | not captured | [2737799](https://pubmed.ncbi.nlm.nih.gov/2737799) | The study reports PK parameters (AUC, Cmax, t1/2) for urapidil, but the evidence text only provides qualitative descriptions and relative percentages (e.g., 28% lower AUC) without listing the specific numeric values for clearance, volume, or absolute concentration units. |
| `Kirsten_1989_2.pdf` | Kirsten R et al., Improved orthostatic dysregulation reco…, International journal of cl… (1989) | popPK | 8 | not captured | [2777422](https://pubmed.ncbi.nlm.nih.gov/2777422) | The study reports pharmacokinetic data for urapidil, but the evidence only provides relative changes (percentages) and fluctuation metrics, lacking absolute quantitative parameters like clearance, volume, or half-life. |
| `Sun_2015.pdf` | Sun S et al., Capillary electrophoresis with end-colu…, Journal of chromatography.… (2015) | popPK | 8 | [10.1016/j.jchromb.2015.10.011](https://doi.org/10.1016/j.jchromb.2015.10.011) | [26551206](https://pubmed.ncbi.nlm.nih.gov/26551206) | The study reports quantitative pharmacokinetic parameters (Cmax, T1/2, Tmax) for urapidil in rats, with numeric values explicitly provided in the text. |
| `Wambach_1987.pdf` | Wambach G et al., [Renal and adrenal function following a…, Arzneimittel-Forschung (1987) | popPK | 8 | not captured | [3675693](https://pubmed.ncbi.nlm.nih.gov/3675693) | The study reports quantitative pharmacokinetic parameters (plasma half-life) for urapidil in human subjects, with specific numeric values provided in the text. |
| `Toklucu_2025.pdf` | Toklucu I et al., α-Adrenoreceptor blocker phentolamine i…, British journal of pharmaco… (2025) | pd | 5 | [10.1111/bph.17450](https://doi.org/10.1111/bph.17450) | [39888002](https://www.ncbi.nlm.nih.gov/pubmed/39888002) | metadata signals extractable PD data (IC50) |
| `Borbe_1991.pdf` | Borbe HO et al., 5-HT1A-agonistic properties of naftopid…, European journal of pharmac… (1991) | pd | 4 | [10.1016/0014-2999(91)90779-p](https://doi.org/10.1016/0014-2999(91)90779-p) | [1839829](https://www.ncbi.nlm.nih.gov/pubmed/1839829) | metadata signals extractable PD data (IC50) |
| `Bültmann_1994.pdf` | Bültmann R et al., Alpha 1-adrenoceptors and calcium sourc…, British journal of pharmaco… (1994) | pd | 4 | [10.1111/j.1476-5381.1994.tb14037.x](https://doi.org/10.1111/j.1476-5381.1994.tb14037.x) | [7912153](https://www.ncbi.nlm.nih.gov/pubmed/7912153) | metadata signals extractable PD data (concentration-effect) |
| `George_2004.pdf` | George OK et al., Moxonidine, an antihypertensive agent,…, Journal of cardiovascular p… (2004) | pd | 4 | [10.1097/00005344-200402000-00022](https://doi.org/10.1097/00005344-200402000-00022) | [14716222](https://www.ncbi.nlm.nih.gov/pubmed/14716222) | metadata signals extractable PD data (EC50) |
| `Gross_1989.pdf` | Gross G et al., Demonstration of alpha 1A- and alpha 1B…, European journal of pharmac… (1989) | pd | 4 | [10.1016/0014-2999(89)90032-0](https://doi.org/10.1016/0014-2999(89)90032-0) | [2572438](https://www.ncbi.nlm.nih.gov/pubmed/2572438) | metadata signals extractable PD data (IC50) |
| `Schoeffter_1988.pdf` | Schoeffter P et al., Centrally acting hypotensive agents wit…, British journal of pharmaco… (1988) | pd | 4 | [10.1111/j.1476-5381.1988.tb11728.x](https://doi.org/10.1111/j.1476-5381.1988.tb11728.x) | [3207999](https://www.ncbi.nlm.nih.gov/pubmed/3207999) | metadata signals extractable PD data (EC50) |
| `Schwietert_1991.pdf` | Schwietert HR et al., Differences between full and partial al…, Naunyn-Schmiedeberg's archi… (1991) | pd | 4 | [10.1007/BF00167220](https://doi.org/10.1007/BF00167220) | [1682821](https://www.ncbi.nlm.nih.gov/pubmed/1682821) | metadata signals extractable PD data (EC50) |
| `Williams_1995.pdf` | Williams TJ et al., Characterization of alpha 1-adrenocepto…, British journal of pharmaco… (1995) | pd | 4 | [10.1111/j.1476-5381.1995.tb13259.x](https://doi.org/10.1111/j.1476-5381.1995.tb13259.x) | [7881752](https://www.ncbi.nlm.nih.gov/pubmed/7881752) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-09-30T06:31:54.590291+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bertolissi_1996 | irrelevant | 0 | 0 | The study focuses on nifedipine's effects on renal function, and urapidil is only used as a rescue medication for blood pressure control without any pharmacokinetic parameter reporting. |
| popPK | Blue_1995 | irrelevant | 0 | 0 | The study is a receptor pharmacology investigation using 5-methyl-urapidil as a tool compound to characterize alpha-1 adrenoceptors, not a pharmacokinetic study of urapidil. |
| popPK | Borbe_1991 | irrelevant | 0 | 0 | The paper focuses on the pharmacodynamic properties (5-HT1A agonism) of naftopidil, with urapidil serving only as a comparator in a blood pressure study, and no pharmacokinetic parameters are reported. |
| PD | Borbe_1991 | not_relevant | 1 | 0 | The text focuses on the pharmacology of naftopidil and only qualitatively mentions urapidil's blood pressure reduction without providing any numeric PD parameters or exposure-response data for urapidil. |
| PD | Bottorff_1988 | not_relevant | 2 | 1 | The paper reports PK parameters and mean blood pressure changes but does not provide a concentration-effect model, Emax/EC50, or individual-level data linking drug exposure to hemodynamic response. |
| PGx | Brüss_2005 | not_relevant | 2 | 8 | The study reports a pharmacodynamic effect (impaired signal transduction) of a 5-HT1A receptor variant on urapidil in a cell line, but does not report a pharmacokinetic parameter or a clinical pharmacodynamic endpoint in humans. |
| popPK | Bültmann_1994 | irrelevant | 0 | 0 | no_text gate: only 99 chars of text extracted (&lt; 400) |
| PD | Bültmann_1994 | not_relevant | 0 | 0 | The paper focuses on the mechanism of adrenergic contractions in rat vas deferens and does not report pharmacodynamic or exposure-response data for urapidil. |
| popPK | Chen_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of remimazolam, not urapidil. |
| PD | Chen_2025 | not_relevant | 0 | 0 | The paper reports a PK/PD model for remimazolam, not urapidil. |
| popPK | Chi_2018 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of propofol, not urapidil. |
| PD | Chi_2018 | not_relevant | 0 | 0 | The paper analyzes the pharmacokinetics of propofol, not urapidil, and does not report any pharmacodynamic or exposure-response relationships. |
| popPK | Chidlow_2001 | irrelevant | 0 | 0 | The study focuses on the intraocular pressure-lowering effects and mechanism of action of flesinoxan, with urapidil serving only as a comparator agent in potency rankings, and no pharmacokinetic parameters are reported. |
| PD | Chidlow_2001 | not_relevant | 2 | 1 | The paper reports qualitative dose-related effects and in vitro IC50 values for flesinoxan and urapidil, but does not provide numeric PD parameters (Emax, EC50, slope) or an extractable concentration-effect curve for urapidil in vivo. |
| popPK | Chrisp_1990 | irrelevant | 0 | 0 | The paper is a review of dilevalol, and urapidil is only mentioned as a comparator agent without any pharmacokinetic parameters reported. |
| PD | Chrisp_1990 | not_relevant | 0 | 0 | The paper is a review of dilevalol and only mentions urapidil qualitatively as a comparator without providing any pharmacodynamic data, exposure-response analysis, or numeric PD parameters for urapidil. |
| popPK | Doods_1988 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of central hypotensive mechanisms and receptor binding, not a pharmacokinetic study, and reports no disposition parameters for urapidil. |
| popPK | Fagura_1997 | irrelevant | 0 | 0 | The study is a pharmacological receptor classification experiment using 5-methyl urapidil as a tool compound, not a pharmacokinetic study reporting disposition parameters for urapidil. |
| popPK | George_2004 | irrelevant | 0 | 0 | no_text gate: only 113 chars of text extracted (&lt; 400) |
| PD | George_2004 | not_relevant | 0 | 0 | The paper focuses on moxonidine and alpha1-adrenergic pathways in rat-tail arteries, with no mention of urapidil or its pharmacodynamic parameters. |
| popPK | Gielsdorf_1986 | relevant | 8 | 0 | The study is a pharmacokinetic evaluation of urapidil, but the provided evidence contains only qualitative descriptions and relative bioavailability percentages without specific numeric values for clearance, volume, or half-life. |
| popPK | Gross_1987 | irrelevant | 0 | 0 | The study investigates receptor binding affinities (IC50) in vitro, not pharmacokinetic disposition parameters. |
| PD | Gross_1987 | not_relevant | 3 | 5 | The paper reports in vitro binding affinities (IC50) for urapidil and analogues, which are pharmacological potency data, but does not report an in vivo pharmacodynamic (exposure-response or dose-response) relationship for the drug's clinical effect (e.g., blood pressure). |
| popPK | Gross_1989 | irrelevant | 0 | 0 | The study is a radioligand binding assay investigating adrenoceptor subtypes in brain tissue, not a pharmacokinetic study, and reports no disposition parameters for urapidil. |
| PD | Gross_1989 | not_relevant | 0 | 0 | The paper reports in vitro radioligand binding affinity (IC50) for urapidil analogs, which is a pharmacological binding study, not a pharmacodynamic exposure-response or dose-response relationship in a biological system. |
| popPK | Gruber_1998 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of alpha-adrenergic receptors using 5-methyl urapidil as a tool compound, not a pharmacokinetic study of urapidil. |
| popPK | Hanft_1989 | irrelevant | 0 | 0 | The paper is an in-vitro receptor binding study characterizing alpha-1 adrenoceptor subtypes, not a pharmacokinetic study reporting disposition parameters for urapidil. |
| popPK | Hellberg_1983 | irrelevant | 0 | 0 | no_text gate: only 84 chars of text extracted (&lt; 400) |
| popPK | Hirschl_1995 | irrelevant | 0 | 0 | The paper is a clinical guideline for treating hypertensive crises and does not report any pharmacokinetic parameters for urapidil. |
| PD | Hirschl_1995 | not_relevant | 1 | 0 | The text is a clinical guideline discussing the qualitative pharmacodynamic properties of urapidil for hypertensive crises but does not provide any numeric PD parameters, concentration-effect curves, or dose-response data. |
| popPK | Jamieson_1986 | irrelevant | 0 | 0 | The study assesses beta-blocking activity (pharmacodynamics) rather than pharmacokinetic disposition parameters, and no PK values are reported. |
| PD | Jamieson_1986 | not_relevant | 2 | 1 | The study reports a qualitative lack of beta-blocking activity (no significant shift in isoproterenol dose-response) and describes a method for analyzing curves, but does not provide numeric PD parameters (e.g., EC50, Emax) or a quantitative concentration-effect relationship for urapidil. |
| popPK | Kaczor_2023 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study focusing on the synthesis and pharmacological activity (affinity, selectivity, hypotensive effect) of new compounds, with urapidil serving only as a comparator, and it contains no pharmacokinetic parameters. |
| PD | Kaczor_2023 | not_relevant | 3 | 2 | The paper reports qualitative comparisons of hypotensive activity and effective doses in rats relative to urapidil, but does not provide numeric PD parameters (e.g., ED50, Emax) or concentration-effect curves for urapidil itself. |
| popPK | Kennedy_2006 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of receptor subtypes in rat tail arteries, not a pharmacokinetic study, and urapidil is used only as a comparator antagonist. |
| popPK | Kirsten_1986 | relevant | 8 | 2 | The study reports pharmacokinetics of urapidil in humans, but the evidence only provides qualitative concentration ranges (e.g., 100-200 ng/ml) and lacks specific quantitative disposition parameters like clearance, volume, or half-life. |
| popPK | Kirsten_1987 | irrelevant | 2 | 0 | The study reports serum concentration-time data and pharmacodynamic effects but does not provide quantitative disposition parameters such as clearance, volume of distribution, or half-life. |
| popPK | Kirsten_1988 | irrelevant | 2 | 0 | The paper is a review of clinical pharmacokinetics without original quantitative parameter values or specific numeric data for urapidil. |
| PD | Kirsten_1988 | not_relevant | 1 | 0 | The text is a review abstract that qualitatively mentions PK/PD relationships but provides no numeric PD parameters, curves, or specific dose-response data. |
| popPK | Kirsten_1989 | relevant | 8 | 2 | The study reports PK parameters (AUC, Cmax, t1/2) for urapidil, but the evidence text only provides qualitative descriptions and relative percentages (e.g., 28% lower AUC) without listing the specific numeric values for clearance, volume, or absolute concentration units. |
| popPK | Kirsten_1989_2 | relevant | 8 | 2 | The study reports pharmacokinetic data for urapidil, but the evidence only provides relative changes (percentages) and fluctuation metrics, lacking absolute quantitative parameters like clearance, volume, or half-life. |
| popPK | Kirsten_1998 | irrelevant | 0 | 0 | The paper is a general review of vasodilators that mentions urapidil only as a therapeutic option for hypertensive emergencies without reporting any quantitative pharmacokinetic parameters. |
| popPK | Kobrin_1985 | irrelevant | 0 | 0 | The study reports hemodynamic effects (blood pressure, resistance, cardiac index) rather than pharmacokinetic disposition parameters (CL, V, t1/2). |
| popPK | Kolassa_1989 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of receptor mechanisms in anesthetized cats and does not report any pharmacokinetic parameters for urapidil. |
| PD | Kolassa_1989 | not_relevant | 4 | 2 | The paper describes a dose-response relationship for urapidil in an animal model, but the provided text only contains qualitative descriptions of the curve shifts and does not report specific numeric PD parameters (e.g., ED50, Emax) or the underlying data points required to derive them. |
| popPK | Korstanje_2011 | irrelevant | 0 | 0 | The study focuses on tamsulosin, not urapidil, and does not report PK parameters for the target drug. |
| PD | Korstanje_2011 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics of tamsulosin (tissue vs. plasma distribution) and does not report any pharmacodynamic or exposure-response relationship for urapidil. |
| popPK | Langtry_1989 | irrelevant | 2 | 0 | The paper is a review of pharmacodynamic and pharmacokinetic properties, but the provided evidence contains no quantitative PK parameter values (CL, V, t1/2, etc.) for urapidil. |
| PD | Langtry_1989 | not_relevant | 2 | 0 | The text is a qualitative review summarizing clinical effects and general pharmacodynamic properties without providing specific numeric PD parameters, concentration-effect curves, or dose-response data. |
| popPK | Le_1994 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of alpha-1 adrenoceptor antagonists in rat atria and does not report any pharmacokinetic parameters for urapidil. |
| PD | Le_1994 | not_relevant | 0 | 0 | The paper reports that urapidil (specifically 5-methyl-urapidil) showed no protective activity against veratrine contractures at 10 microM, providing no numeric PD parameters or dose-response curve for urapidil. |
| popPK | Lewek_2020 | irrelevant | 0 | 0 | The paper is a review of pharmacological management of malignant hypertension and does not report original quantitative pharmacokinetic parameters for urapidil. |
| popPK | Li_2000 | irrelevant | 0 | 0 | The study is a mechanistic pharmacology investigation of adrenoceptor subtypes in rabbit ear microvasculature using 5-methyl-urapidil as a selective antagonist, not a pharmacokinetic study of urapidil. |
| popPK | Ludwig_1977 | irrelevant | 0 | 0 | no_text gate: only 89 chars of text extracted (&lt; 400) |
| popPK | Minushkina_2012 | irrelevant | 1 | 0 | The paper is a review of urapidil's clinical use and mechanism of action without reporting original quantitative pharmacokinetic parameter values. |
| PD | Minushkina_2012 | not_relevant | 1 | 0 | The text is a qualitative review of urapidil's mechanism and clinical features without reporting specific numeric PD parameters or exposure-response data. |
| popPK | Minushkina_2014 | irrelevant | 1 | 0 | The paper is a clinical review of urapidil's therapeutic use in hypertensive emergencies and does not report original quantitative pharmacokinetic parameter values. |
| PD | Minushkina_2014 | not_relevant | 1 | 0 | The text is a review summarizing the mechanism and clinical efficacy of urapidil without providing specific numeric PD parameters or exposure-response data. |
| popPK | Penjišević_2022 | irrelevant | 0 | 0 | The study is an in silico and in vitro investigation of novel compounds, with urapidil serving only as a structural comparator and no quantitative pharmacokinetic parameters for urapidil are reported. |
| popPK | Petry_1995 | irrelevant | 0 | 0 | The study focuses on haemodynamic and renal effects (creatinine clearance) rather than pharmacokinetic disposition parameters (CL, V, t1/2) for urapidil. |
| popPK | Prichard_1988 | irrelevant | 2 | 2 | The paper is a review of clinical pharmacology that mentions general PK properties (bioavailability, t1/2) but lacks quantitative compartmental parameters (CL, V, Q) or population PK modeling required for extraction. |
| PD | Prichard_1988 | not_relevant | 2 | 0 | The text is a qualitative review summarizing mechanisms and general PK properties without providing specific numeric PD parameters or extractable concentration-effect data. |
| popPK | Prichard_1989 | irrelevant | 2 | 1 | The paper is a review of pharmacological actions and provides only general qualitative PK descriptors (bioavailability, tmax, half-life) without quantitative compartmental parameters (CL, V, Q) or population PK model values. |
| PD | Prichard_1989 | not_relevant | 2 | 0 | The text is a qualitative review summarizing pharmacological actions and general PK properties without providing specific numeric PD parameters or extractable concentration-effect data. |
| popPK | Pönicke_2001 | irrelevant | 0 | 0 | The study is a mechanistic in-vitro investigation of adrenoceptor signaling in rat cardiomyocytes using 5-methyl-urapidil as a pharmacological tool, not a pharmacokinetic study of urapidil. |
| PD | Pönicke_2001 | not_relevant | 0 | 0 | The paper reports pharmacological characterization of noradrenaline and antagonist potencies (pKi) in isolated cardiomyocytes, not a pharmacokinetic-pharmacodynamic (PK/PD) or exposure-response relationship for the drug urapidil. |
| popPK | Queiroz-Neto_1993 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of alpha-1 adrenoceptor subtypes in rat vas deferens and does not report any pharmacokinetic parameters for urapidil. |
| PD | Queiroz-Neto_1993 | not_relevant | 0 | 0 | The paper investigates the pharmacology of norepinephrine in rat vas deferens using 5-methyl-urapidil as a tool compound, but does not report a pharmacodynamic or exposure-response relationship for urapidil itself. |
| popPK | Ramage_1989 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation in anaesthetized cats focusing on sympathetic nerve activity and blood pressure, with no pharmacokinetic parameters reported. |
| popPK | Sanders_1988 | irrelevant | 0 | 0 | The study is a mechanistic pharmacological investigation in cats focusing on receptor interactions and blood pressure response, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Sanders_1990 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of blood pressure effects in cats and does not report any pharmacokinetic parameters for urapidil. |
| popPK | Sanjuliani_1995 | irrelevant | 0 | 0 | The study evaluates clinical efficacy (blood pressure, renal hemodynamics, lipids) and does not report any pharmacokinetic parameters for urapidil. |
| popPK | Schoeffter_1988 | irrelevant | 0 | 0 | no_text gate: only 150 chars of text extracted (&lt; 400) |
| PD | Schoeffter_1988 | not_relevant | 0 | 0 | The paper describes an in vitro biochemical assay (adenylate cyclase inhibition) and does not report pharmacokinetic or pharmacodynamic exposure-response relationships for urapidil in vivo. |
| popPK | Schwietert_1991 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of smooth muscle contraction where urapidil is used only as a competitive antagonist for Schild analysis, not as a subject drug for PK parameter estimation. |
| PD | Schwietert_1991 | not_relevant | 0 | 0 | The paper studies alpha-adrenoceptor agonists (e.g., phenylephrine, UK-14,304) and uses 5-methyl-urapidil only as a competitive antagonist for Schild analysis; it does not report a pharmacodynamic or exposure-response relationship for urapidil itself. |
| popPK | Schütz_1986 | irrelevant | 0 | 0 | The study is a clinical pharmacological investigation of receptor subtypes using urapidil as a probe drug, and it does not report any pharmacokinetic parameters. |
| popPK | Smith_1997 | irrelevant | 0 | 0 | The study is a pharmacological investigation of alpha-adrenoceptor subtypes in rabbit arteries using 5-methyl-urapidil as a competitive antagonist, not a pharmacokinetic study of urapidil. |
| popPK | Sponer_1992 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics and receptor binding of naftopidil, with urapidil serving only as a comparator agent, and no pharmacokinetic parameters are reported. |
| popPK | Studer_1993 | irrelevant | 0 | 0 | The paper is a review of antihypertensive therapy that mentions urapidil only as a class example without reporting any quantitative pharmacokinetic parameters. |
| popPK | Széll_2000 | irrelevant | 0 | 0 | The study is a pharmacological investigation of adrenoceptor subtypes in rat bladder tissue using 5-methyl urapidil as a tool compound, not a pharmacokinetic study of urapidil. |
| popPK | Taniguchi_1985 | irrelevant | 2 | 0 | The study reports only qualitative pharmacokinetic observations (time to peak, relative concentration at 8 hours) without quantitative disposition parameters like clearance, volume, or half-life. |
| popPK | Testa_1993 | irrelevant | 0 | 0 | The paper is a receptor binding and functional study characterizing alpha 1-adrenoceptor subtypes, not a pharmacokinetic study, and urapidil is used only as a pharmacological tool to assess receptor affinity. |
| PD | Testa_1993 | not_relevant | 1 | 0 | The paper characterizes receptor subtypes using binding assays and qualitative functional correlations, but does not report numeric PD parameters (e.g., EC50, Emax) or an exposure-response model for urapidil. |
| popPK | Toklucu_2025 | irrelevant | 0 | 0 | no_text gate: only 115 chars of text extracted (&lt; 400) |
| PD | Toklucu_2025 | not_relevant | 0 | 0 | The paper focuses on the mechanism of phentolamine (sodium channel inhibition) and does not report pharmacodynamic or exposure-response data for urapidil. |
| popPK | Tomlinson_1991 | irrelevant | 1 | 0 | The study is a pharmacodynamic assessment of adrenoceptor blocking activity and does not report quantitative pharmacokinetic parameters such as clearance or volume of distribution. |
| popPK | Van_1995 | irrelevant | 0 | 0 | The paper is a review discussing pharmacological backgrounds and general PK changes in the elderly, without reporting specific quantitative PK parameters for urapidil. |
| popPK | Verscheijden_2021 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of morphine, not urapidil. |
| PD | Verscheijden_2021 | not_relevant | 0 | 0 | The paper reports a PBPK/PD model for morphine, not urapidil. |
| popPK | Williams_1995 | irrelevant | 0 | 0 | no_text gate: only 149 chars of text extracted (&lt; 400) |
| PD | Williams_1995 | not_relevant | 0 | 0 | The paper characterizes alpha-1 adrenoceptors in rat mesentery using noradrenaline and nerve stimulation, and does not mention urapidil or report any PD parameters for it. |
| popPK | Xia_2026 | irrelevant | 0 | 0 | The paper is a review of magnesium sulfate pharmacokinetics and does not study urapidil. |
| PD | Xia_2026 | not_relevant | 2 | 1 | The paper is a narrative review of magnesium sulfate (not urapidil) and provides only qualitative/schematic PK-PD descriptions without extractable numeric PD parameters. |
| popPK | Yanai-Inamura_2012 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of salivary secretion and intraurethral pressure in rats, not a pharmacokinetic study, and reports no disposition parameters for urapidil. |
| popPK | Zech_1986 | irrelevant | 2 | 0 | The paper describes an analytical method for quantifying urapidil and mentions its application in PK studies, but it does not report any quantitative pharmacokinetic parameter values (CL, V, t1/2, etc.) for urapidil. |
| popPK | Zitta_1990 | irrelevant | 0 | 0 | no_text gate: only 69 chars of text extracted (&lt; 400) |
| popPK | unknown_2023 | irrelevant | 0 | 0 | no_text gate: only 62 chars of text extracted (&lt; 400) |
| PD | unknown_2023 | not_relevant | 0 | 0 | The provided text is a placeholder for a large PDF file and contains no scientific content, data, or parameters regarding urapidil or any pharmacodynamic relationship. |
| popPK | van_1985 | irrelevant | 0 | 0 | The paper describes pharmacodynamic effects (blood pressure, receptor binding) and does not report any quantitative pharmacokinetic parameters for urapidil. |
| PD | van_1985 | not_relevant | 2 | 1 | The paper describes qualitative pharmacological effects and receptor selectivity but does not provide numeric PD parameters (e.g., EC50, Emax) or quantitative concentration-effect curves for urapidil. |
| popPK | van_1988 | irrelevant | 0 | 0 | The paper is a pharmacological review discussing the mechanism of action of alpha-adrenoceptor antagonists and contains no pharmacokinetic data or quantitative disposition parameters for urapidil. |
| PD | van_1988 | not_relevant | 1 | 0 | The text is a qualitative review of the pharmacological mechanisms of urapidil and other alpha-adrenoceptor antagonists, containing no numeric PD parameters, concentration-effect data, or PK/PD modeling. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
