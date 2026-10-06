<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C02A&quot;,&quot;href&quot;:&quot;atc/C02A.md&quot;},{&quot;label&quot;:&quot;guanfacine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Guanfacine_Knebel2015_reference&quot;,&quot;label&quot;:&quot;Knebel_2015_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_guanfacine/Guanfacine_Knebel2015_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# guanfacine

- **generic name:** guanfacine
- **ATC codes:** `C02AC02`
- **DrugBank:** [DB01018](https://go.drugbank.com/drugs/DB01018) · **PubChem:** [CID 3519](https://pubchem.ncbi.nlm.nih.gov/compound/3519)
- **molar mass:** 246.093 g/mol (C9H9Cl2N3O) — DrugBank
- **groups:** approved, investigational

## About

Guanfacine is used to treat high blood pressure and attention deficit hyperactivity disorder. It is an approved medicine, with products authorised in the European Union for ADHD, and it is also being studied for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5613599](https://www.wikidata.org/wiki/Q5613599) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| guanfacine | parent | 246.093 | C9H9Cl2N3O | DrugBank | [3519](https://pubchem.ncbi.nlm.nih.gov/compound/3519) | Knebel_2015 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 12:18 | 5:10 | 1/1/0 | 0/0/1 | 0/0/0 | 106,192/9,835 | ollama / qwen3.8:27b-mtp-q8_0 | 6 | 0/6 | 6/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.167). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Knebel_2015_reference](drugs/drug_guanfacine/Guanfacine_Knebel2015_reference.md) | ▶ model + simulator | 1-compartment, oral | 4 | Knebel W et al., Population Pharmacokinetic Modeling of…, Clinical pharmacokinetics (2015) | [10.1007/s40262-015-0245-7](https://doi.org/10.1007/s40262-015-0245-7) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.5). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Li_2018_reference](drugs/drug_guanfacine/Guanfacine_Li2018_reference.md) | — | 1-compartment (no model) | 0 | Li A et al., Correction to: Development of Guanfacin…, Paediatric drugs (2018) | [10.1007/s40272-017-0275-8](https://doi.org/10.1007/s40272-017-0275-8) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> | [Knebel_2015_2_ADHD_RS_IV](drugs/drug_guanfacine/pd_Knebel_2015_2_ADHD_RS_IV.md) | ADHD Rating Scale-IV score ← guanfacine extended-release · direct linear effect | model (no simulator) | Knebel W et al., Modeling and simulation of the exposure…, Journal of pharmacokinetics… (2015) | [10.1007/s10928-014-9397-6](https://doi.org/10.1007/s10928-014-9397-6) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=guanfacine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP2C19` substrate, `CYP3A4` substrate, `SLC22A1` inhibitor/substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | kidney | `SLC22A2` substrate, `SLC47A1` inhibitor | DrugBank actor |
| excretion | liver | `SLC47A1` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: ADRA2A (target), ADRA2B (binder).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 40 matched, 37 returned
- **screened:** 5  ·  **relevant:** 1
- **records:** 2  ·  extracted 1  ·  needs_review 0  ·  rejected 1  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full text wanted

_14 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Knebel_2015.pdf` | Knebel W et al., Population Pharmacokinetic Modeling of…, Clinical pharmacokinetics (2015) | popPK | 10 | [10.1007/s40262-015-0245-7](https://doi.org/10.1007/s40262-015-0245-7) | [25724291](https://pubmed.ncbi.nlm.nih.gov/25724291) | The paper reports quantitative population PK parameters (CL/F, V/F, ka, lag time) for guanfacine in pediatric patients with specific numeric values and confidence intervals in the abstract. |
| `Tsuda_2019.pdf` | Tsuda Y et al., Population pharmacokinetic and exposure…, Drug metabolism and pharmac… (2019) | popPK | 10 | [10.1016/j.dmpk.2019.07.001](https://doi.org/10.1016/j.dmpk.2019.07.001) | [31563330](https://pubmed.ncbi.nlm.nih.gov/31563330) | The paper describes a population PK model for guanfacine, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| `Cherruault_1986.pdf` | Cherruault Y et al., A three-compartment open model with fir…, International journal of bi… (1986) | popPK | 9 | [10.1016/0020-7101(86)90023-1](https://doi.org/10.1016/0020-7101(86)90023-1) | [3721608](https://pubmed.ncbi.nlm.nih.gov/3721608) | The paper describes a PK model for guanfacine but the provided evidence contains no numeric parameter values. |
| `Kiechel_1986.pdf` | Kiechel JR, Pharmacokinetics of guanfacine in patie…, The American journal of car… (1986) | popPK | 9 | [10.1016/0002-9149(86)90718-6](https://doi.org/10.1016/0002-9149(86)90718-6) | [3513525](https://pubmed.ncbi.nlm.nih.gov/3513525) | The study reports quantitative PK parameters for guanfacine in humans, but specific numeric values for clearance, volume, or rate constants are not explicitly listed in the provided abstract text. |
| `Weiss_1979.pdf` | Weiss YA et al., Guanfacine kinetics in patients with hy…, Clinical pharmacology and t… (1979) | popPK | 9 | [10.1002/cpt1979253283](https://doi.org/10.1002/cpt1979253283) | [761440](https://pubmed.ncbi.nlm.nih.gov/761440) | The study reports a compartmental PK model for guanfacine in humans with specific half-lives, but lacks explicit numeric values for clearance, volume, or absorption rate constants in the provided text. |
| `Cherruault_1985.pdf` | Cherruault Y et al., Identification of pharmacokinetic param…, International journal of bi… (1985) | popPK | 8 | [10.1016/0020-7101(85)90013-3](https://doi.org/10.1016/0020-7101(85)90013-3) | [3840124](https://pubmed.ncbi.nlm.nih.gov/3840124) | The paper describes a PK model for guanfacine but the provided evidence contains no numeric parameter values, only a description of the method and comparison to SAMM. |
| `Matsuo_2017.pdf` | Matsuo Y et al., Pharmacokinetics, Safety, and Tolerabil…, Clinical drug investigation (2017) | popPK | 8 | [10.1007/s40261-017-0527-y](https://doi.org/10.1007/s40261-017-0527-y) | [28421383](https://pubmed.ncbi.nlm.nih.gov/28421383) | The study reports pharmacokinetic parameters for guanfacine, but the specific numeric values (CL, V, t1/2) are not present in the provided text, only relative exposure differences. |
| `Knebel_2014.pdf` | Knebel W et al., Population pharmacokinetic/pharmacodyna…, The AAPS journal (2014) | pd | 5 | [10.1208/s12248-014-9645-0](https://doi.org/10.1208/s12248-014-9645-0) | [25135837](https://www.ncbi.nlm.nih.gov/pubmed/25135837) | metadata signals extractable PD data (pharmacodynamicmodel) |
| `Butterworth_1993.pdf` | Butterworth JF et al., The alpha 2-adrenergic agonists clonidi…, Anesthesia and analgesia (1993) | pd | 4 | not captured | [8093828](https://www.ncbi.nlm.nih.gov/pubmed/8093828) | metadata signals extractable PD data (EC50) |
| `Pineda_1993.pdf` | Pineda J et al., Stimulatory effects of clonidine, ciraz…, Naunyn-Schmiedeberg's archi… (1993) | pd | 4 | [10.1007/BF00164789](https://doi.org/10.1007/BF00164789) | [7901773](https://www.ncbi.nlm.nih.gov/pubmed/7901773) | metadata signals extractable PD data (Emax) |
| `Brown_2022.pdf` | Brown JT, The Pharmacogenetic Impact on the Pharm…, Methods in molecular biolog… (2022) | pgx | 8 | [10.1007/978-1-0716-2573-6_15](https://doi.org/10.1007/978-1-0716-2573-6_15) | [36068472](https://www.ncbi.nlm.nih.gov/pubmed/36068472) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Schoretsanitis_2019.pdf` | Schoretsanitis G et al., Clinically Significant Drug-Drug Intera…, CNS drugs (2019) | pgx | 8 | [10.1007/s40263-019-00683-7](https://doi.org/10.1007/s40263-019-00683-7) | [31776871](https://www.ncbi.nlm.nih.gov/pubmed/31776871) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Kibitov_2016.pdf` | Kibitov АО et al., [A pharmacogenetic analysis of dopamine…, Zhurnal nevrologii i psikhi… (2016) | pgx | 5 | [10.17116/jnevro201611611236-48](https://doi.org/10.17116/jnevro201611611236-48) | [28300812](https://www.ncbi.nlm.nih.gov/pubmed/28300812) | metadata signals extractable PGX data (COMT) |
| `McCracken_2010.pdf` | McCracken JT et al., Possible influence of variant of the P-…, Journal of child and adoles… (2010) | pgx | 5 | [10.1089/cap.2009.0059](https://doi.org/10.1089/cap.2009.0059) | [20166790](https://www.ncbi.nlm.nih.gov/pubmed/20166790) | metadata signals extractable PGX data (ABCB1) |

<sub>queue written 2026-10-06T12:13:56.128742+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Brown_2022 | not_relevant | 0 | 0 | The paper discusses pharmacogenetics for atomoxetine and methylphenidate but does not report any specific pharmacokinetic or pharmacodynamic effects of gene variants on guanfacine. |
| popPK | Butterworth_1993 | irrelevant | 0 | 0 | no_text gate: only 129 chars of text extracted (&lt; 400) |
| PD | Butterworth_1993 | not_relevant | 0 | 0 | The paper describes electrophysiological conduction block in rat sciatic nerves, which is a pharmacological mechanism study, not a pharmacodynamic exposure-response or dose-response analysis with numeric PD parameters (e.g., Emax, EC50) in the context of drug efficacy or safety endpoints. |
| popPK | Cherruault_1985 | relevant | 8 | 0 | The paper describes a PK model for guanfacine but the provided evidence contains no numeric parameter values, only a description of the method and comparison to SAMM. |
| popPK | Cherruault_1986 | relevant | 9 | 0 | The paper describes a PK model for guanfacine but the provided evidence contains no numeric parameter values. |
| popPK | Dash_2026 | irrelevant | 0 | 0 | The paper is a medicinal chemistry review focusing on the structure-activity relationships of TAAR-1 agonists and does not report pharmacokinetic parameters for guanfacine. |
| PD | Dash_2026 | not_relevant | 1 | 0 | The paper is a medicinal chemistry review focusing on Structure-Activity Relationships (SAR) and binding modes, not a pharmacokinetic/pharmacodynamic study reporting exposure-response or dose-response data for guanfacine. |
| PGx | De_2012 | not_relevant | 0 | 0 | The paper is a general review of ADHD pharmacotherapy and does not report specific pharmacogenomic effects on guanfacine PK/PD parameters. |
| PGx | Kibitov_2016 | not_relevant | 0 | 0 | The study reports associations between genetic variants and clinical outcomes (treatment retention/relapse) rather than specific pharmacokinetic or pharmacodynamic parameters of guanfacine. |
| popPK | Kiechel_1986 | relevant | 9 | 2 | The study reports quantitative PK parameters for guanfacine in humans, but specific numeric values for clearance, volume, or rate constants are not explicitly listed in the provided abstract text. |
| popPK | Knebel_2014 | irrelevant | 0 | 0 | no_text gate: only 117 chars of text extracted (&lt; 400) |
| popPK | Knebel_2015_2 | irrelevant | 2 | 0 | The study focuses on exposure-response and dropout modeling, reporting efficacy metrics (ADHD score decrease) rather than quantitative pharmacokinetic disposition parameters (CL, V, ka) for guanfacine. |
| popPK | Labarrera_2018 | irrelevant | 0 | 0 | The study is an in-vivo electrophysiology investigation of neuronal excitability in mice, not a pharmacokinetic study, and reports no disposition parameters for guanfacine. |
| PGx | Law_2022 | not_relevant | 0 | 0 | The paper characterizes the metabolic enzymes (CYP3A4/5) for guanfacine using pooled in vitro systems but does not report any pharmacogenomic effects of specific gene variants or genotypes on PK/PD parameters. |
| PGx | Li_2018 | not_relevant | 0 | 0 | The text is a correction notice regarding copyright and licensing, containing no pharmacogenomic data or PK/PD results. |
| PGx | Li_2018_2 | not_relevant | 0 | 0 | The paper focuses on drug-drug interactions (DDIs) with CYP3A4 inhibitors/inducers, not on pharmacogenomic effects of gene variants. |
| popPK | Liu_1997 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological characterization of alpha-adrenoceptors in rat ileum, not a pharmacokinetic study of guanfacine. |
| popPK | Matsuo_2017 | relevant | 8 | 2 | The study reports pharmacokinetic parameters for guanfacine, but the specific numeric values (CL, V, t1/2) are not present in the provided text, only relative exposure differences. |
| popPK | Newman-Tancredi_1998 | irrelevant | 0 | 0 | The study is an in-vitro receptor binding and functional assay examining selectivity, not a pharmacokinetic study reporting disposition parameters for guanfacine. |
| PD | Newman-Tancredi_1998 | not_relevant | 0 | 0 | The paper reports in vitro receptor binding affinities (pKi) and relative efficacies (Emax) for guanfacine at 5-HT1A receptors, but does not report a pharmacodynamic exposure-response or dose-response relationship for the drug's clinical or systemic effect. |
| popPK | Parsley_1999 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological characterization of alpha2C-adrenoceptors using guanfacine as an agonist, not a pharmacokinetic study. |
| PGx | Patel_2013 | not_relevant | 0 | 0 | The paper is a general review of ADHD pharmacology and mentions guanfacine only as a treatment for aggression, without reporting any specific pharmacogenomic effects on its PK or PD parameters. |
| popPK | Pineda_1993 | irrelevant | 0 | 0 | no_text gate: only 160 chars of text extracted (&lt; 400) |
| PD | Pineda_1993 | not_relevant | 0 | 0 | The paper focuses on clonidine, cirazoline, and rilmenidine, and does not report any pharmacodynamic or exposure-response data for guanfacine. |
| PGx | Rizwan_2022 | not_relevant | 0 | 0 | The paper is a general review of treatments for Tourette's syndrome and does not report any pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of guanfacine. |
| PGx | Schoretsanitis_2019 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions (DDIs) involving CYP3A4 for guanfacine, not pharmacogenomic effects (gene variants) on PK/PD parameters. |
| PGx | Shim_2016 | not_relevant | 0 | 0 | The paper is a general review of treatment-refractory ADHD and mentions guanfacine only as a therapeutic option, without reporting any specific pharmacogenomic effects on its PK or PD parameters. |
| popPK | Tsuda_2019 | relevant | 10 | 0 | The paper describes a population PK model for guanfacine, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| PD | Tsuda_2019 | not_relevant | 4 | 2 | The paper reports a qualitative exposure-response trend (reduction in ADHD RS-IV score) but does not provide numeric PD parameters (e.g., Emax, EC50) or a quantitative effect-concentration curve in the provided text. |
| popPK | Weiss_1979 | relevant | 9 | 2 | The study reports a compartmental PK model for guanfacine in humans with specific half-lives, but lacks explicit numeric values for clearance, volume, or absorption rate constants in the provided text. |
| PGx | Yakhchalian_2024 | not_relevant | 0 | 0 | The paper is a case report on serotonin syndrome management and does not report any pharmacogenomic effects on guanfacine PK or PD parameters. |
| popPK | Yocca_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacology and behavior of dexmedetomidine, with guanfacine serving only as a comparator in in vitro receptor binding assays, and no pharmacokinetic parameters for guanfacine are reported. |
| PD | Yocca_2025 | not_relevant | 3 | 2 | The paper focuses on dexmedetomidine; guanfacine is only used as a comparator in in vitro binding assays (Tables 1-2) without providing specific numeric PD parameters (EC50/Emax) in the text, and no in vivo PK/PD relationship is established for guanfacine. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 12:14 UTC</sub>
