<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C02D&quot;,&quot;href&quot;:&quot;atc/C02D.md&quot;},{&quot;label&quot;:&quot;minoxidil&quot;}]"></div>

# minoxidil

- **generic name:** minoxidil
- **ATC codes:** `C02DC01`, `D11AX01`
- **DrugBank:** [DB00350](https://go.drugbank.com/drugs/DB00350) · **PubChem:** [CID 4201](https://pubchem.ncbi.nlm.nih.gov/compound/4201)
- **molar mass:** 209.2483 g/mol (C9H15N5O) — DrugBank
- **groups:** approved, investigational

## About

**Description.** A potent direct-acting peripheral vasodilator (vasodilator agents) that reduces peripheral resistance and produces a fall in blood pressure.

**Indication.** For the treatment of severe hypertension and in the topical treatment (regrowth) of androgenic alopecia in males and females and stabilisation of hair loss in patients with androgenic alopecia.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-30 06:27 | 2:52 | 0/0/0 | 0/0/0 | 0/0/0 | 7,491/369 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 0/6 | 2/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=minoxidil) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>“…at least 90% absorbed from the GI tract…”</sub> | prose |
| metabolism | liver | `UGT1A1` substrate | DrugBank actor |
| metabolism | small intestine | `UGT1A1` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: KCNJ1 (inducer), PTGS1 (inducer).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 106 matched, 80 returned
- **screened:** 2  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_14 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Adams_1998.pdf` | Adams MH et al., Pharmacokinetics of minoxidil in patien…, Biopharmaceutics & drug dis… (1998) | popPK | 9 | [10.1002/(sici)1099-081x(1998110)19:8&lt;501::aid-bdd127&gt;3.0.co;2-g](https://doi.org/10.1002/(sici)1099-081x(1998110)19:8<501::aid-bdd127>3.0.co;2-g) | [9840212](https://pubmed.ncbi.nlm.nih.gov/9840212) | The study is a direct PK investigation of minoxidil in humans, but the provided evidence contains only qualitative descriptions of parameter changes (e.g., "significantly smaller") without specific numeric values for clearance, volume, or half-life. |
| `Ngampanya_2021.pdf` | Ngampanya A et al., Development and Qualification of a Phys…, Journal of pharmaceutical s… (2021) | popPK | 8 | [10.1016/j.xphs.2021.02.016](https://doi.org/10.1016/j.xphs.2021.02.016) | [33609522](https://pubmed.ncbi.nlm.nih.gov/33609522) | The paper describes a PBPK model for minoxidil, but the specific numeric parameter values are not present in the provided evidence text. |
| `Noh_2021.pdf` | Noh K et al., Use of Intravenous Infusion Study Desig…, Drug metabolism and disposi… (2021) | popPK | 8 | [10.1124/dmd.120.000242](https://doi.org/10.1124/dmd.120.000242) | [33262223](https://pubmed.ncbi.nlm.nih.gov/33262223) | The study reports PK parameters for minoxidil in rats, but the specific numeric values are not present in the provided evidence text. |
| `Vietri_2000.pdf` | Vietri M et al., Differential inhibition of hepatic and…, European journal of clinica… (2000) | pd | 5 | [10.1007/s002280000168](https://doi.org/10.1007/s002280000168) | [11049010](https://www.ncbi.nlm.nih.gov/pubmed/11049010) | metadata signals extractable PD data (IC50) |
| `Angel_1991.pdf` | Angel I et al., The binding site for [3H]glibenclamide…, Fundamental & clinical phar… (1991) | pd | 4 | [10.1111/j.1472-8206.1991.tb00704.x](https://doi.org/10.1111/j.1472-8206.1991.tb00704.x) | [1649112](https://www.ncbi.nlm.nih.gov/pubmed/1649112) | metadata signals extractable PD data (IC50) |
| `Fischli_1991.pdf` | Fischli W et al., Ro 42-5892 is a potent orally active re…, Hypertension (Dallas, Tex.… (1991) | pd | 4 | [10.1161/01.hyp.18.1.22](https://doi.org/10.1161/01.hyp.18.1.22) | [1830563](https://www.ncbi.nlm.nih.gov/pubmed/1830563) | metadata signals extractable PD data (IC50) |
| `Kudlacek_1997.pdf` | Kudlacek PE et al., Characterization of recombinant human l…, Biochemical pharmacology (1997) | pd | 4 | [10.1016/s0006-2952(96)00728-9](https://doi.org/10.1016/s0006-2952(96)00728-9) | [9037254](https://www.ncbi.nlm.nih.gov/pubmed/9037254) | metadata signals extractable PD data (IC50) |
| `Marchetti_2001.pdf` | Marchetti F et al., Differential inhibition of human liver…, Xenobiotica; the fate of fo… (2001) | pd | 4 | [10.1080/00498250110069159](https://doi.org/10.1080/00498250110069159) | [11780759](https://www.ncbi.nlm.nih.gov/pubmed/11780759) | metadata signals extractable PD data (IC50) |
| `Meisheri_1993.pdf` | Meisheri KD et al., Vascular pharmacology of ATP-sensitive…, Journal of vascular research (1993) | pd | 4 | [10.1159/000158969](https://doi.org/10.1159/000158969) | [8435468](https://www.ncbi.nlm.nih.gov/pubmed/8435468) | metadata signals extractable PD data (IC50) |
| `Ohrnberger_1993.pdf` | Ohrnberger CE et al., Synergistic effects of glyburide and U-…, The Journal of pharmacology… (1993) | pd | 4 | not captured | [8229751](https://www.ncbi.nlm.nih.gov/pubmed/8229751) | metadata signals extractable PD data (IC50) |
| `Quast_1995.pdf` | Quast U et al., Ba2+ differentially inhibits the Rb+ ef…, Naunyn-Schmiedeberg's archi… (1995) | pd | 4 | [10.1007/BF00168920](https://doi.org/10.1007/BF00168920) | [8750921](https://www.ncbi.nlm.nih.gov/pubmed/8750921) | metadata signals extractable PD data (IC50) |
| `Winquist_1989.pdf` | Winquist RJ et al., Glyburide blocks the relaxation respons…, The Journal of pharmacology… (1989) | pd | 4 | not captured | [2464055](https://www.ncbi.nlm.nih.gov/pubmed/2464055) | metadata signals extractable PD data (IC50) |
| `Schwartz_2004.pdf` | Schwartz GL et al., Pharmacogenetics of antihypertensive dr…, American journal of pharmac… (2004) | pgx | 8 | [10.2165/00129785-200404030-00002](https://doi.org/10.2165/00129785-200404030-00002) | [15174896](https://www.ncbi.nlm.nih.gov/pubmed/15174896) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Enokizono_2007.pdf` | Enokizono J et al., Regional expression and activity of bre…, Drug metabolism and disposi… (2007) | pgx | 7 | [10.1124/dmd.106.011239](https://doi.org/10.1124/dmd.106.011239) | [17353350](https://www.ncbi.nlm.nih.gov/pubmed/17353350) | metadata signals extractable PGX data (Abcg2, PK/PD-context) |

<sub>queue written 2026-09-30T06:27:32.453910+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Adams_1998 | relevant | 9 | 2 | The study is a direct PK investigation of minoxidil in humans, but the provided evidence contains only qualitative descriptions of parameter changes (e.g., "significantly smaller") without specific numeric values for clearance, volume, or half-life. |
| PD | Adams_1998 | not_relevant | 0 | 0 | The paper reports only pharmacokinetic parameters (elimination rate, residence time) and explicitly states that no pharmacodynamic studies were conducted in this population. |
| popPK | Angel_1991 | irrelevant | 0 | 0 | The study is an in-vitro binding assay for glibenclamide where minoxidil is used only as a non-interacting comparator agent, with no pharmacokinetic parameters reported. |
| PD | Angel_1991 | not_relevant | 0 | 0 | The paper reports that minoxidil failed to interact with the binding site (IC50 &gt; 100 µM) and does not provide a quantitative exposure-response or dose-response relationship for minoxidil. |
| popPK | Bray_1991 | irrelevant | 0 | 0 | The study is a mechanistic pharmacological investigation of K+ channel opening in isolated rat aorta, not a pharmacokinetic study, and reports no disposition parameters for minoxidil. |
| popPK | Buchheit_2000 | irrelevant | 0 | 0 | The study is a pharmacological investigation of K(ATP) channel activity in airways and vessels, reporting potency (pD2, pIC50) and efficacy, but contains no pharmacokinetic disposition parameters (CL, V, ka, t1/2) for minoxidil. |
| popPK | Cabré_2026 | irrelevant | 0 | 0 | The paper is a narrative review of cardiovascular pharmacotherapy that does not report any quantitative pharmacokinetic parameters for minoxidil. |
| PD | Cabré_2026 | not_relevant | 0 | 0 | The text is a narrative review of cardiovascular pharmacotherapy and does not contain specific data, models, or numeric parameters for minoxidil. |
| popPK | Clemente_2008 | irrelevant | 0 | 0 | The study investigates the pharmacological mechanism of sildenafil on duodenal contractility in rats, using minoxidil only as a K+ channel opener comparator, and reports no pharmacokinetic parameters for minoxidil. |
| PD | Clemente_2008 | not_relevant | 0 | 0 | The paper focuses on the pharmacodynamics of sildenafil; minoxidil is only mentioned as a tool compound to test K+ channel involvement and no PD parameters for minoxidil are reported. |
| popPK | Clissold_1987 | irrelevant | 0 | 0 | The paper is a review of pharmacodynamic properties and therapeutic efficacy, containing no quantitative pharmacokinetic parameters for minoxidil. |
| PD | Clissold_1987 | not_relevant | 1 | 0 | The text is a qualitative review of therapeutic efficacy and clinical outcomes, containing no numeric concentration-effect data, dose-response curves, or PD parameters. |
| popPK | Deng_2021 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of cedrol, with minoxidil serving only as a comparator for hair growth efficacy. |
| PD | Deng_2021 | not_relevant | 0 | 0 | The paper focuses on cedrol nanoemulsion and only uses minoxidil as a qualitative positive control without reporting any exposure-response or dose-response data for minoxidil. |
| PGx | Dooley_1998 | not_relevant | 2 | 0 | The paper describes the cloning and sequencing of phenol sulfotransferase genes and mentions minoxidil as a substrate, but it does not report specific pharmacokinetic or pharmacodynamic parameter changes associated with gene variants. |
| PGx | Enokizono_2007 | not_relevant | 2 | 5 | The study investigates transporter expression and activity in mice using a metabolite (minoxidil sulfate) and a probe substrate, but does not report a pharmacogenomic effect on the PK/PD of minoxidil itself in a clinical or relevant pharmacogenomic context. |
| popPK | Ersland_2022 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic/toxicology assay using a microfluidic model and does not report pharmacokinetic parameters for minoxidil. |
| PD | Ersland_2022 | not_relevant | 4 | 2 | The paper describes a dose-response test (3-30 μM) and qualitative effects (barrier injury, VSMC damage) but does not provide numeric PD parameters (Emax, EC50) or quantitative effect-vs-concentration data in the text. |
| popPK | Fiedler-Weiss_1986 | irrelevant | 0 | 0 | The paper is a clinical efficacy study on hair regrowth and does not report any pharmacokinetic parameters for minoxidil. |
| PD | Fiedler-Weiss_1986 | not_relevant | 3 | 1 | The paper reports a qualitative dose-response comparison between 1% and 5% minoxidil but provides no numeric PD parameters (e.g., EC50, Emax) or concentration-effect curves. |
| popPK | Fiedler-Weiss_1987 | irrelevant | 0 | 0 | The paper is a clinical efficacy study for alopecia areata that only qualitatively states systemic absorption was minimal, without reporting any quantitative pharmacokinetic parameters. |
| PD | Fiedler-Weiss_1987 | not_relevant | 3 | 2 | The paper reports a qualitative dose-response comparison (response rates for 1% vs 5%) but lacks numeric PD parameters (Emax, EC50) or concentration-effect data. |
| popPK | Fischer_2012 | irrelevant | 0 | 0 | The paper is a clinical study on topical melatonin for hair loss, where minoxidil is only mentioned as a comparator agent, and no pharmacokinetic parameters are reported. |
| PD | Fischer_2012 | not_relevant | 0 | 0 | The paper investigates topical melatonin, not minoxidil, and reports clinical efficacy outcomes without any exposure-response or dose-response modeling. |
| popPK | Fischli_1991 | irrelevant | 0 | 0 | no_text gate: only 64 chars of text extracted (&lt; 400) |
| PD | Fischli_1991 | not_relevant | 0 | 0 | The paper focuses on Ro 42-5892, a renin inhibitor, and does not contain any data or analysis regarding minoxidil. |
| PGx | Francès_2024 | not_relevant | 2 | 0 | The study correlates SNPs with the diagnosis of androgenetic alopecia, not with specific pharmacokinetic or pharmacodynamic parameters of minoxidil. |
| popPK | Guo_2025 | irrelevant | 0 | 0 | The paper is a proteome-wide Mendelian randomization study identifying lymphoma drug targets and does not involve minoxidil or report any pharmacokinetic parameters. |
| PD | Guo_2025 | not_relevant | 0 | 0 | The paper focuses on Mendelian randomization for lymphoma targets and does not mention minoxidil or report any pharmacodynamic parameters for it. |
| popPK | Gupta_2022 | irrelevant | 2 | 1 | The paper is a review comparing efficacy and safety, providing only a general half-life value without quantitative disposition parameters like clearance or volume. |
| PD | Gupta_2022 | not_relevant | 2 | 0 | The text is a qualitative review comparing mechanisms and general efficacy rankings without providing specific numeric PD parameters, concentration-effect curves, or PK/PD model fits for minoxidil. |
| popPK | Gupta_2022_2 | irrelevant | 0 | 0 | The paper is a review of topical finasteride for hair loss, and minoxidil is only mentioned as a co-administered agent without any pharmacokinetic data. |
| PD | Gupta_2022_2 | not_relevant | 1 | 0 | The paper is a review of topical finasteride and only qualitatively mentions minoxidil in the context of combination therapy without providing any numeric PD parameters or exposure-response data for minoxidil. |
| popPK | Gupta_2025 | irrelevant | 0 | 0 | The paper is a review of dutasteride for alopecia, and minoxidil is only mentioned as a comparator or alternative treatment without any original pharmacokinetic data. |
| PD | Gupta_2025 | not_relevant | 1 | 0 | The paper is a comprehensive review of dutasteride that only qualitatively mentions minoxidil as a treatment option without providing any specific pharmacodynamic data, exposure-response analysis, or numeric PD parameters for minoxidil. |
| popPK | Hadjipavlou-Litina_2013 | irrelevant | 0 | 0 | The paper is a mechanistic study on the synthesis and antioxidant properties of minoxidil conjugates, containing no pharmacokinetic data. |
| PD | Hadjipavlou-Litina_2013 | not_relevant | 3 | 4 | The paper reports IC50 values for lipoxygenase inhibition, which are pharmacodynamic parameters, but it is a medicinal chemistry study on conjugates rather than a PK/PD or exposure-response analysis of minoxidil itself. |
| popPK | Hajhashemi_2024 | irrelevant | 0 | 0 | Minoxidil is used only as a positive control/comparator in a hair growth efficacy study, with no pharmacokinetic parameters reported. |
| PD | Hajhashemi_2024 | not_relevant | 0 | 0 | The paper is a formulation study comparing hair growth scores between groups; it does not report any concentration-effect or dose-response analysis, nor any numeric PD parameters for minoxidil or the test compounds. |
| popPK | Harmon_1997 | irrelevant | 0 | 0 | The study is a mechanistic in-vitro investigation of PKC inhibitors on hair follicle DNA synthesis, with minoxidil serving only as a comparator agent and no pharmacokinetic parameters reported. |
| PD | Harmon_1997 | not_relevant | 1 | 0 | The paper focuses on PKC inhibitors and only provides a qualitative comparison of potency (IC50) and maximal effect for minoxidil without reporting specific numeric PD parameters or a dose-response curve for minoxidil. |
| PGx | Karaoui_2009 | not_relevant | 0 | 0 | The paper is a case report of a severe adverse reaction (TEN) and does not report any pharmacogenomic analysis or genotype-specific changes in PK/PD parameters. |
| popPK | Khan_1997 | irrelevant | 0 | 0 | The study is a pharmacological characterization of KATP channel blockers in isolated tissues, and minoxidil is used only as a comparator agent, with no PK parameters reported. |
| PD | Khan_1997 | not_relevant | 0 | 0 | The paper characterizes KATP channel blockers (PNU-99963) and mentions minoxidil sulfate only as a reference KATP opener for selectivity testing, without reporting any pharmacodynamic or exposure-response parameters for minoxidil itself. |
| popPK | Kim_2020 | irrelevant | 0 | 0 | The paper is a review of AI in drug discovery and does not contain any pharmacokinetic data or parameters for minoxidil. |
| PD | Kim_2020 | not_relevant | 0 | 0 | The paper is a general review of AI in drug discovery and does not contain any specific pharmacodynamic or exposure-response data for minoxidil. |
| popPK | Kpanou_2021 | irrelevant | 0 | 0 | The paper is a computational study on deep learning models for drug-drug interaction prediction and does not report any pharmacokinetic parameters for minoxidil. |
| PD | Kpanou_2021 | not_relevant | 0 | 0 | The paper focuses on deep learning models for predicting drug-drug interactions based on molecular structure and does not contain any pharmacokinetic or pharmacodynamic data, exposure-response analysis, or numeric PD parameters for minoxidil. |
| popPK | Kubilus_1987 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on keratinocytes and does not report any pharmacokinetic parameters for minoxidil. |
| popPK | Kudlacek_1997 | irrelevant | 0 | 0 | no_text gate: only 115 chars of text extracted (&lt; 400) |
| PD | Kudlacek_1997 | not_relevant | 0 | 0 | The paper characterizes the enzymatic metabolism (sulfation) of minoxidil by recombinant liver enzymes, focusing on kinetic parameters (Km, Vmax) for the metabolic reaction, not pharmacodynamic exposure-response or dose-effect relationships. |
| popPK | Lawson_1989 | irrelevant | 0 | 0 | The study is a mechanistic pharmacology investigation of vascular smooth muscle contraction in rat aorta, not a pharmacokinetic study, and minoxidil is used only as a comparator agent. |
| PD | Lawson_1989 | not_relevant | 2 | 1 | The paper reports a single fixed concentration (10 µM) of minoxidil sulfate in an isolated tissue assay, providing no concentration-response curve or numeric PD parameters (e.g., EC50, Emax) for minoxidil itself. |
| popPK | Lee_1983 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of postural hypotension in rats and does not report any pharmacokinetic parameters for minoxidil. |
| PD | Lee_1983 | not_relevant | 3 | 1 | The paper describes qualitative dose-response characteristics (e.g., "virtually free of PH effects") for minoxidil but does not provide numeric PD parameters or extractable concentration-effect curves in the provided text. |
| popPK | Löffler-Walz_1998 | irrelevant | 0 | 0 | The study is an in-vitro binding assay for K(ATP) channel modulators, not a pharmacokinetic study, and minoxidil is only used as a comparator agent. |
| PD | Löffler-Walz_1998 | not_relevant | 3 | 2 | The paper reports receptor binding affinity (IC50, KD) for minoxidil sulfate in a membrane preparation, which is a pharmacological binding assay, not a pharmacodynamic (exposure-response or dose-response) analysis of drug effect in a biological system. |
| popPK | Marchetti_2001 | irrelevant | 0 | 0 | no_text gate: only 144 chars of text extracted (&lt; 400) |
| PD | Marchetti_2001 | not_relevant | 0 | 0 | The paper focuses on the inhibition of sulphotransferase activities by quercetin and does not mention minoxidil or report any pharmacodynamic parameters for it. |
| popPK | McCoy_2016 | irrelevant | 0 | 0 | The study is a clinical efficacy trial for hair loss treatment and does not report any pharmacokinetic parameters (CL, V, ka, etc.) for minoxidil. |
| PD | McCoy_2016 | not_relevant | 3 | 2 | The paper reports a clinical dose-response outcome (60% response rate at 15% vs 5%) but lacks numeric pharmacodynamic parameters (e.g., Emax, EC50) or concentration-effect data. |
| popPK | Meisheri_1993 | irrelevant | 0 | 0 | The study characterizes a KATP channel antagonist (U-37883A) using minoxidil only as a pharmacological probe/comparator, and reports no pharmacokinetic parameters for minoxidil. |
| popPK | Meisheri_1993_2 | irrelevant | 0 | 0 | The study is an in-vitro vascular pharmacology investigation of K+ channel interactions, not a pharmacokinetic study, and reports no disposition parameters for minoxidil. |
| popPK | Middeke_2008 | irrelevant | 0 | 0 | The paper is a clinical review on dosing strategies for hypertension and mentions minoxidil only as a reserve medication, providing no pharmacokinetic parameters or quantitative disposition data. |
| PD | Middeke_2008 | not_relevant | 1 | 0 | The text is a general review of dosing strategies and withdrawal phenomena for antihypertensives, including minoxidil, but provides no numeric PD parameters, concentration-effect data, or specific dose-response curves. |
| popPK | Mitchell_1981 | irrelevant | 0 | 0 | The study focuses on the hemodynamic and catecholamine effects of clonidine and prazosin in patients already taking minoxidil, with no pharmacokinetic parameters reported for minoxidil. |
| PD | Mitchell_1981 | not_relevant | 0 | 0 | The paper reports dose-response relationships for clonidine and prazosin, not minoxidil; minoxidil is only mentioned as part of the baseline background therapy. |
| popPK | Mitchell_1981_2 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamic effects of clonidine on catecholamines in patients taking minoxidil, with no pharmacokinetic parameters for minoxidil reported. |
| popPK | Moianos_2024 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on HBV RNase H inhibitors where minoxidil derivatives are only mentioned as structural analogs, with no pharmacokinetic data reported. |
| PD | Moianos_2024 | not_relevant | 0 | 0 | The paper reports in vitro EC50 values for HBV RNase H inhibitors (including minoxidil derivatives) but does not provide pharmacokinetic data, exposure-response relationships, or in vivo pharmacodynamic modeling for minoxidil. |
| popPK | Ngampanya_2021 | relevant | 8 | 0 | The paper describes a PBPK model for minoxidil, but the specific numeric parameter values are not present in the provided evidence text. |
| PD | Ngampanya_2021 | not_relevant | 0 | 0 | The paper focuses on PBPK modeling for minoxidil and only reports PD modeling for finasteride; no PD parameters or exposure-response relationship are provided for minoxidil. |
| popPK | Noh_2021 | relevant | 8 | 0 | The study reports PK parameters for minoxidil in rats, but the specific numeric values are not present in the provided evidence text. |
| popPK | Nureye_2025 | irrelevant | 0 | 0 | The paper is a review of medicinal plants for hypertension and mentions minoxidil only as a standard drug comparator, providing no pharmacokinetic parameters for it. |
| PD | Nureye_2025 | not_relevant | 0 | 0 | The paper is a review of medicinal plants for hypertension in Ethiopia and does not contain any pharmacodynamic or exposure-response analysis for minoxidil. |
| popPK | Ohrnberger_1993 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of KATP channel antagonism where minoxidil is used only as a vasodilator probe, not as the subject of pharmacokinetic analysis. |
| PD | Ohrnberger_1993 | not_relevant | 0 | 0 | The paper investigates the synergistic interaction of glyburide and U-37883A, using minoxidil only as a fixed-concentration vasodilator to establish the baseline effect, and does not report a dose-response or exposure-response relationship for minoxidil itself. |
| popPK | Olsen_1986 | irrelevant | 0 | 0 | The paper is a clinical efficacy study of topical minoxidil for hair growth and does not report any pharmacokinetic parameters. |
| popPK | Phillips_2020 | irrelevant | 0 | 0 | The study is a clinical assessment of radiation-induced alopecia treatment outcomes and does not report any pharmacokinetic parameters for minoxidil. |
| PD | Phillips_2020 | not_relevant | 0 | 0 | The paper reports a dose-response relationship for radiation-induced alopecia (radiation dose vs. severity) and a clinical response rate to minoxidil, but it does not report any pharmacodynamic parameters (e.g., Emax, EC50) or concentration-effect relationship for minoxidil itself. |
| popPK | Quast_1995 | irrelevant | 0 | 0 | The study is a mechanistic pharmacology investigation of K+ channel opening and vasorelaxation in rat aorta, not a pharmacokinetic study, and reports no disposition parameters for minoxidil. |
| popPK | Russ_1997 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of KATP channel binding and electrophysiology in cell lines, not a pharmacokinetic study, and minoxidil is used only as a pharmacological modulator. |
| popPK | Russ_2003 | irrelevant | 0 | 0 | The paper is a mechanistic study on K_ATP channel binding and activation, not a pharmacokinetic study, and reports no disposition parameters for minoxidil. |
| popPK | Sasindran_2020 | irrelevant | 0 | 0 | The study is an in-vitro cytotoxicity and histopathology evaluation where minoxidil is used only as a standard comparator, not as the subject of a pharmacokinetic analysis. |
| PD | Sasindran_2020 | not_relevant | 2 | 1 | The paper reports a single IC50 value for minoxidil in a cytotoxicity assay, which is a toxicity endpoint rather than a pharmacodynamic exposure-response or dose-response relationship for the drug's therapeutic effect. |
| popPK | Sato_2004 | irrelevant | 0 | 0 | The study is a mechanistic investigation of minoxidil's effect on mitochondrial K(ATP) channels in isolated cells, reporting pharmacodynamic EC50 values rather than pharmacokinetic disposition parameters. |
| popPK | Schumacher_1979 | irrelevant | 2 | 0 | The paper is a review discussing the application of pharmacokinetic theory to antihypertensives and does not report original quantitative PK parameter values for minoxidil. |
| PD | Schumacher_1979 | not_relevant | 2 | 1 | The paper is a theoretical review that explicitly states the derived dose-response values from retrospective data have "little reliability or predictive value" and does not provide specific numeric PD parameters for minoxidil. |
| popPK | Schwartz_2004 | irrelevant | 0 | 0 | The paper is a review of pharmacogenetics and mentions minoxidil only in the context of metabolic polymorphisms without reporting any quantitative pharmacokinetic parameters. |
| PD | Schwartz_2004 | not_relevant | 1 | 0 | The text is a review of pharmacogenetics and mentions minoxidil only in the context of metabolic polymorphisms (SULT1A1) without providing any numeric PD parameters or exposure-response data. |
| PGx | Schwartz_2004 | not_relevant | 2 | 0 | The paper mentions that SULT1A1 polymorphisms affect minoxidil pharmacokinetics but explicitly states they have not been shown to influence the antihypertensive effect, and provides no quantitative data or specific PK parameter changes. |
| popPK | Shackcloth_2008 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of vasoconstriction in human radial artery rings, not a pharmacokinetic study, and reports no disposition parameters for minoxidil. |
| PD | Shackcloth_2008 | not_relevant | 0 | 0 | The study reports that minoxidil sulfate had no discernable effect on vasoconstriction, providing no numeric PD parameters or concentration-effect relationship. |
| popPK | Shameer_2018 | irrelevant | 0 | 0 | The paper is a database description for drug repositioning and does not report any pharmacokinetic parameters for minoxidil. |
| PD | Shameer_2018 | not_relevant | 0 | 0 | The paper describes a database for drug repositioning and does not report any pharmacodynamic or exposure-response data for minoxidil. |
| popPK | Shen_1975 | irrelevant | 2 | 0 | The study focuses on pharmacodynamics (dose-response and duration of effect) rather than pharmacokinetic disposition parameters like clearance or volume of distribution. |
| popPK | Shupack_1987 | irrelevant | 0 | 0 | The study is a clinical efficacy trial for hair growth and does not report any pharmacokinetic parameters for minoxidil. |
| popPK | Specht_2024 | irrelevant | 0 | 0 | The paper focuses on the repurposing of H1-receptor antagonists (cetirizine, loratadine, etc.) and does not involve minoxidil or report any pharmacokinetic parameters. |
| PD | Specht_2024 | not_relevant | 0 | 0 | The paper is a systematic review of clinical trial metadata for H1-receptor antagonists (cetirizine, loratadine, etc.) and does not contain any pharmacokinetic or pharmacodynamic data, nor does it mention minoxidil. |
| popPK | Taira_2017 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of PAK1 inhibitors where minoxidil is used only as a comparator for hair cell proliferation, with no pharmacokinetic parameters reported. |
| PD | Taira_2017 | not_relevant | 0 | 0 | The paper studies PAK1 inhibitors from Alpinia zerumbet and only uses minoxidil as a qualitative positive control without reporting any specific concentration-effect data or PD parameters for minoxidil. |
| popPK | Tantiyavarong_2024 | irrelevant | 0 | 0 | The study is a clinical trial of LED light therapy for hair loss where minoxidil is only mentioned as a background comparator, with no pharmacokinetic data reported. |
| popPK | Thomas_2022 | irrelevant | 0 | 0 | The paper is a review of dimethyl fumarate, not minoxidil, and contains no pharmacokinetic data for the target drug. |
| PD | Thomas_2022 | not_relevant | 0 | 0 | The paper is a review of Dimethyl Fumarate (DMF) and does not contain any data, analysis, or mention of minoxidil. |
| PGx | Torres_2026 | not_relevant | 2 | 0 | The paper is a narrative review discussing genetic associations with treatment response and disease mechanisms, but it does not report specific quantitative pharmacokinetic or pharmacodynamic parameter changes for minoxidil. |
| popPK | Towart_1982 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of smooth muscle contractions, not a pharmacokinetic study, and minoxidil is used only as a reference compound. |
| popPK | Vietri_2000 | irrelevant | 0 | 0 | no_text gate: only 107 chars of text extracted (&lt; 400) |
| PD | Vietri_2000 | not_relevant | 0 | 0 | The paper focuses on the inhibition of sulfation metabolism by mefenamic acid, not on the pharmacodynamic (exposure-response or dose-response) effects of minoxidil itself. |
| popPK | Wester_1984 | irrelevant | 0 | 0 | The study is a pharmacodynamic assessment of cutaneous blood flow using laser Doppler velocimetry and does not report any pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Winquist_1989 | irrelevant | 0 | 0 | no_text gate: only 125 chars of text extracted (&lt; 400) |
| popPK | Xiang_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacological mechanism of Terminalia bellirica for alopecia, using minoxidil only as a comparator for hair regrowth efficacy without reporting any pharmacokinetic parameters. |
| PD | Xiang_2025 | not_relevant | 0 | 0 | The paper focuses on the pharmacological mechanism of Terminalia bellirica for alopecia; minoxidil is only mentioned as a positive control in a qualitative comparison, with no exposure-response or dose-response data provided for it. |
| popPK | Zhang_2022 | irrelevant | 0 | 0 | The paper focuses on the discovery of a nanozyme for hair loss and uses minoxidil only as a comparator for efficacy, providing no pharmacokinetic parameters. |
| PD | Zhang_2022 | not_relevant | 0 | 0 | The paper focuses on a novel nanozyme (MnPS3) and only qualitatively compares its efficacy to minoxidil without providing any pharmacokinetic or pharmacodynamic data, exposure-response curves, or numeric PD parameters for minoxidil. |
| PGx | de_2026 | not_relevant | 3 | 2 | The text is a review that mentions SULT1A1 variability affects response but does not report specific quantitative PK/PD parameter changes or fitted effect sizes for minoxidil. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
