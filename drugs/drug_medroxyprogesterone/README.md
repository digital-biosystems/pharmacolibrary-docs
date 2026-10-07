<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;G03A&quot;,&quot;href&quot;:&quot;atc/G03A.md&quot;},{&quot;label&quot;:&quot;medroxyprogesterone&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Medroxyprogesterone_Francis2021_reference&quot;,&quot;label&quot;:&quot;Francis_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_medroxyprogesterone/Medroxyprogesterone_Francis2021_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# medroxyprogesterone

- **generic name:** medroxyprogesterone
- **ATC codes:** `G03AA08`, `G03AA17`, `G03AC06`, `G03DA02`, `G03FA12`, `G03FB06`, `L02AB02`
- **DrugBank:** [DB00603](https://go.drugbank.com/drugs/DB00603) · **PubChem:** [CID 6279](https://pubchem.ncbi.nlm.nih.gov/compound/6279)
- **molar mass:** 386.5244 g/mol (C24H34O4) — DrugBank
- **groups:** approved, investigational

## About

Medroxyprogesterone is a synthetic progestin used for hormonal contraception, in combination preparations, and to treat endometriosis, and also as endocrine cancer therapy. It is widely used and approved, though it carries a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q416667](https://www.wikidata.org/wiki/Q416667) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| medroxyprogesterone (medroxyprogesterone acetate) | parent | 386.524 | C24H34O4 | DrugBank | [6279](https://pubchem.ncbi.nlm.nih.gov/compound/6279) | Engel_2026, Francis_2021, Taylor_2022 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 08:50 | 11:42 | 1/4/0 | 1/1/0 | 0/0/0 | 254,320/10,261 | einfracz / qwen3.8-27b | 11 | 0/5 | 11/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Francis_2021_reference](drugs/drug_medroxyprogesterone/Medroxyprogesterone_Francis2021_reference.md) | ▶ model + simulator | 1-compartment, oral | 5 (+3 cov.) | Francis J et al., A Semimechanistic Pharmacokinetic Model…, Clinical pharmacology and t… (2021) | [10.1002/cpt.2324](https://doi.org/10.1002/cpt.2324) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Engel_2026_cab_estimates](drugs/drug_medroxyprogesterone/Medroxyprogesterone_Engel2026_cab_estimates.md) | — | 1-compartment (no model) | 2 | Engel N et al., Intravenous and Subcutaneous Pharmacoki…, Biomedicines (2026) | [10.3390/biomedicines14040873](https://doi.org/10.3390/biomedicines14040873) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Engel_2026_mpa_estimates](drugs/drug_medroxyprogesterone/Medroxyprogesterone_Engel2026_mpa_estimates.md) | — | 1-compartment (no model) | 2 | Engel N et al., Intravenous and Subcutaneous Pharmacoki…, Biomedicines (2026) | [10.3390/biomedicines14040873](https://doi.org/10.3390/biomedicines14040873) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Johansson_1986_reference](drugs/drug_medroxyprogesterone/Medroxyprogesterone_Johansson1986_reference.md) | — | 1-compartment (no model) | 0 | Johansson ED et al., Medroxyprogesterone acetate pharmacokin…, Acta pharmacologica et toxi… (1986) | [10.1111/j.1600-0773.1986.tb00115.x](https://doi.org/10.1111/j.1600-0773.1986.tb00115.x) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Taylor_2022_reference](drugs/drug_medroxyprogesterone/Medroxyprogesterone_Taylor2022_reference.md) | — | 1-compartment (no model) | 2 | Taylor DJ et al., Return to ovulation after Sayana Press…, Contraception: X (2022) | [10.1016/j.conx.2022.100080](https://doi.org/10.1016/j.conx.2022.100080) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Taylor_2022_ovulation](drugs/drug_medroxyprogesterone/pd_Taylor_2022_ovulation.md) | ovulation ← medroxyprogesterone acetate · inhibition effect | — | Taylor DJ et al., Return to ovulation after Sayana Press…, Contraception: X (2022) | [10.1016/j.conx.2022.100080](https://doi.org/10.1016/j.conx.2022.100080) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Zhang_2000_ALP](drugs/drug_medroxyprogesterone/pd_Zhang_2000_ALP.md) | alkaline phosphatase activity ← MPA · direct Emax (saturable) effect | — | Zhang Z et al., In vitro characterization of trimegesto…, Steroids (2000) | [10.1016/s0039-128x(00)00120-3](https://doi.org/10.1016/s0039-128x(00)00120-3) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Zhang_2000_HRE_tk_luc](drugs/drug_medroxyprogesterone/pd_Zhang_2000_HRE_tk_luc.md) | HRE-tk-luciferase activity ← MPA · direct Emax (saturable) effect | — | Zhang Z et al., In vitro characterization of trimegesto…, Steroids (2000) | [10.1016/s0039-128x(00)00120-3](https://doi.org/10.1016/s0039-128x(00)00120-3) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Zhang_2000_HRE_tk_luc_2](drugs/drug_medroxyprogesterone/pd_Zhang_2000_HRE_tk_luc_2.md) | HRE-tk-luciferase activity ← MPA · direct Emax (saturable) effect | — | Zhang Z et al., In vitro characterization of trimegesto…, Steroids (2000) | [10.1016/s0039-128x(00)00120-3](https://doi.org/10.1016/s0039-128x(00)00120-3) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Zhang_2000_HRE_tk_luc_3](drugs/drug_medroxyprogesterone/pd_Zhang_2000_HRE_tk_luc_3.md) | HRE-tk-luciferase activity ← MPA · direct Emax (saturable) effect | — | Zhang Z et al., In vitro characterization of trimegesto…, Steroids (2000) | [10.1016/s0039-128x(00)00120-3](https://doi.org/10.1016/s0039-128x(00)00120-3) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Zhang_2000_PR_binding](drugs/drug_medroxyprogesterone/pd_Zhang_2000_PR_binding.md) | competitive binding affinity for human and rabbit progesterone receptor (PR) ← MPA · inhibition effect | — | Zhang Z et al., In vitro characterization of trimegesto…, Steroids (2000) | [10.1016/s0039-128x(00)00120-3](https://doi.org/10.1016/s0039-128x(00)00120-3) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Zhang_2000_cell_proliferation](drugs/drug_medroxyprogesterone/pd_Zhang_2000_cell_proliferation.md) | cell proliferation ← MPA · direct Emax (saturable) effect | — | Zhang Z et al., In vitro characterization of trimegesto…, Steroids (2000) | [10.1016/s0039-128x(00)00120-3](https://doi.org/10.1016/s0039-128x(00)00120-3) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=medroxyprogesterone) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor | DrugBank actor |
| absorption | skeletal muscle | <sub>named in DrugBank's ADME text</sub> | prose |
| absorption | small intestine | `ABCB1` inhibitor | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor | DrugBank actor |
| distribution | blood | `ALB` binder | DrugBank actor |
| metabolism | liver | `CYP2C8` inhibitor, `CYP2C9` inhibitor, `CYP3A4` inducer/substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer/substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: ESR1 (target), GABRA1 (inhibitor), HSD3B2 (inhibitor), PGR (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 273 matched, 98 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 5  ·  extracted 1  ·  needs_review 0  ·  rejected 4  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Johansson_1986.pdf` | Johansson ED et al., Medroxyprogesterone acetate pharmacokin…, Acta pharmacologica et toxi… (1986) | popPK | 10 | [10.1111/j.1600-0773.1986.tb00115.x](https://doi.org/10.1111/j.1600-0773.1986.tb00115.x) | [2943134](https://pubmed.ncbi.nlm.nih.gov/2943134) | The study reports quantitative pharmacokinetic parameters including absorption half-life, elimination half-life, and AUC values for medroxyprogesterone acetate in humans, though specific clearance and volume values are not explicitly listed in the text provided. |
| `Pannuti_1982.pdf` | Pannuti F et al., Medroxyprogesterone acetate (MAP) relat…, Cancer treatment reports (1982) | popPK | 10 | not captured | [7139647](https://pubmed.ncbi.nlm.nih.gov/7139647) | The study describes a pharmacokinetic evaluation of medroxyprogesterone acetate in cancer patients with a two-compartment model, but no specific numeric parameter values are provided in the evidence. |
| `Cohn_2007.pdf` | Cohn SE et al., Depo-medroxyprogesterone in women on an…, Clinical pharmacology and t… (2007) | popPK | 8 | [10.1038/sj.clpt.6100040](https://doi.org/10.1038/sj.clpt.6100040) | [17192768](https://pubmed.ncbi.nlm.nih.gov/17192768) | The study reports a steady-state PK interaction study for medroxyprogesterone in humans with specific parameters (AUC, Cmax, Cl) mentioned, but no quantitative numeric values are provided in the evidence. |
| `Haas_2022.pdf` | Haas DW et al., Pharmacogenetics of interaction between…, Pharmacogenetics and genomi… (2022) | popPK | 8 | [10.1097/FPC.0000000000000448](https://doi.org/10.1097/FPC.0000000000000448) | [34369424](https://pubmed.ncbi.nlm.nih.gov/34369424) | The study involves a population pharmacokinetic model of medroxyprogesterone acetate in humans, but the specific numeric parameter values are not listed in the provided evidence, only statistical associations and qualitative descriptors. |
| `Garza-Flores_1987.pdf` | Garza-Flores J et al., A multicentered pharmacokinetic, pharma…, Contraception (1987) | popPK | 5 | [10.1016/0010-7824(87)90093-x](https://doi.org/10.1016/0010-7824(87)90093-x) | [2964992](https://pubmed.ncbi.nlm.nih.gov/2964992) | The study investigates the pharmacokinetics of medroxyprogesterone acetate, but the specific quantitative parameter values are not present in the provided evidence. |

<sub>queue written 2026-10-07T08:46:50.833021+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Armstrong_2020 | irrelevant | 0 | 0 | The study analyzes cognitive decline and is not a pharmacokinetic study, nor does it report any PK parameters for medroxyprogesterone. |
| popPK | Beacroft_2019 | irrelevant | 0 | 0 | The paper is an epidemiological mathematical model regarding HIV transmission and DMPA use, containing no pharmacokinetic disposition parameters (CL, V, etc.). |
| popPK | Bovee_2004 | irrelevant | 0 | 0 | The study is an in-vitro estrogen bioassay where medroxyprogesterone is used only as a negative control, containing no pharmacokinetic parameters. |
| popPK | Cohn_2007 | relevant | 8 | 2 | The study reports a steady-state PK interaction study for medroxyprogesterone in humans with specific parameters (AUC, Cmax, Cl) mentioned, but no quantitative numeric values are provided in the evidence. |
| popPK | Couture_1993 | irrelevant | 0 | 0 | This is an in-vitro mechanistic study investigating enzyme activity, not a pharmacokinetic study of medroxyprogesterone. |
| popPK | Dorai_1991 | irrelevant | 0 | 0 | The study investigates in-vitro lipolytic activity of medroxyprogesterone acetate on rat adipocytes, not pharmacokinetic disposition parameters. |
| popPK | Garza-Flores_1987 | relevant | 5 | 0 | The study investigates the pharmacokinetics of medroxyprogesterone acetate, but the specific quantitative parameter values are not present in the provided evidence. |
| popPK | Guller_1994 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of placental fibronectin expression and does not report pharmacokinetic parameters for medroxyprogesterone. |
| popPK | Haas_2022 | relevant | 8 | 2 | The study involves a population pharmacokinetic model of medroxyprogesterone acetate in humans, but the specific numeric parameter values are not listed in the provided evidence, only statistical associations and qualitative descriptors. |
| popPK | Helguero_2003 | irrelevant | 0 | 0 | This is an in-vitro receptor binding and dose-response study for medroxyprogesterone acetate, not a pharmacokinetic study reporting disposition parameters like clearance or volume of distribution. |
| popPK | Jensen_2023 | irrelevant | 0 | 0 | The paper describes a method for measuring compliance in a trial and does not report pharmacokinetic parameters for medroxyprogesterone. |
| popPK | Lundeen_2001 | irrelevant | 0 | 0 | The study is an in-vivo pharmacodynamic assay measuring uterine complement C3 expression, not a pharmacokinetic study, and provides no PK parameters for medroxyprogesterone. |
| popPK | Markiewicz_1992 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic assessment of intrinsic estrogenic activity, not a pharmacokinetic study, and reports no disposition parameters for medroxyprogesterone. |
| popPK | Markiewicz_1994 | irrelevant | 0 | 0 | The study is an in vitro bioassay evaluating receptor potency (EC50) rather than in vivo pharmacokinetic disposition parameters like clearance or volume. |
| popPK | McNeill_2002 | irrelevant | 0 | 0 | The study is a mechanistic investigation of estrogen's effect on nitric oxide synthase using medroxyprogesterone only as a co-treatment, and it does not report any pharmacokinetic parameters for medroxyprogesterone. |
| popPK | McTiernan_2005 | irrelevant | 0 | 0 | The study assesses the effect of hormone therapy on mammographic density and does not report any pharmacokinetic parameters for medroxyprogesterone. |
| popPK | Nolten_1976 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters (MCR, PR) for testosterone and dihydrotestosterone, not for medroxyprogesterone acetate itself. |
| popPK | Pannuti_1982 | relevant | 10 | 0 | The study describes a pharmacokinetic evaluation of medroxyprogesterone acetate in cancer patients with a two-compartment model, but no specific numeric parameter values are provided in the evidence. |
| popPK | Pedersen_2004 | irrelevant | 0 | 0 | The study is a pharmacodynamic assessment of vascular effects (tension/relaxation) in rabbits and does not report any pharmacokinetic parameters for medroxyprogesterone. |
| popPK | Pedersen_2004_2 | irrelevant | 0 | 0 | This is a mechanistic study on cerebrovascular reactivity in rabbits, reporting no pharmacokinetic parameters (CL, V, t1/2) for medroxyprogesterone acetate. |
| popPK | Richardson_2007 | irrelevant | 0 | 0 | The study is a clinical cohort study assessing the impact of DMPA on HIV-1 disease progression, not a pharmacokinetic study, and it reports no PK parameters. |
| popPK | Sasagawa_2008 | irrelevant | 0 | 0 | The study focuses on dienogest as the subject drug, with medroxyprogesterone acetate serving only as a comparator in receptor profiling and efficacy tests without reporting quantitative PK parameters for it. |
| popPK | Tan_1996 | irrelevant | 0 | 0 | The study investigates pharmacodynamic effects on lymphocyte beta-2-adrenoceptors rather than pharmacokinetic disposition parameters. |
| popPK | Tan_1997 | irrelevant | 0 | 0 | The study is a receptor binding/pharmacodynamic study measuring beta2-adrenoceptor density and response, not a pharmacokinetic study reporting disposition parameters like clearance or volume for medroxyprogesterone. |
| popPK | Tan_1997_2 | irrelevant | 1 | 0 | The study investigates the pharmacological effect of medroxyprogesterone on beta 2-adrenoceptors in healthy males and does not report any pharmacokinetic parameters (e.g., clearance, volume, half-life) for the drug. |
| popPK | Tegley_1998 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on novel nonsteroidal progestins, using medroxyprogesterone acetate (MPA) only as a comparator for binding affinity, with no PK parameters for MPA reported. |
| popPK | Wagenaar_2000 | irrelevant | 0 | 0 | The study measures respiratory physiological responses (ventilation, CO2 sensitivity) to medroxyprogesterone, not its pharmacokinetic disposition parameters (CL, V, t1/2). |
| popPK | Wernick_2024 | irrelevant | 0 | 0 | The study evaluates BMI changes in a clinical cohort using etonogestrel and DMPA, containing no pharmacokinetic parameters or disposition data for medroxyprogesterone. |
| popPK | Xiang_2007 | irrelevant | 0 | 0 | The study investigates the metabolic side effects (lipids, blood pressure) of contraception and does not report pharmacokinetic parameters for medroxyprogesterone. |
| popPK | Young_2025 | irrelevant | 0 | 0 | The study investigates immunological and HIV-related outcomes in humans using medroxyprogesterone as a contraceptive, not its pharmacokinetic parameters. |
| popPK | Zhang_2000 | irrelevant | 0 | 0 | The study is an in vitro receptor binding and selectivity characterization of trimegestone using medroxyprogesterone as a comparator, reporting no pharmacokinetic parameters. |
| popPK | Zhang_2005 | irrelevant | 0 | 0 | The paper focuses on the molecular and pharmacological properties of tanaproget, using medroxyprogesterone acetate only as a comparator in in vitro and animal efficacy assays, with no PK parameters reported. |
| popPK | Zhang_2007 | irrelevant | 0 | 0 | The paper describes a novel compound (14) and uses medroxyprogesterone acetate only as a comparative reference for potency; no pharmacokinetic parameters for medroxyprogesterone are reported. |
| popPK | van_1993 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on receptor affinity and down-regulation, reporting no pharmacokinetic parameters for medroxyprogesterone. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 08:47 UTC</sub>
