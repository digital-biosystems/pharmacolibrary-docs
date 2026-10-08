<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C02A&quot;,&quot;href&quot;:&quot;atc/C02A.md&quot;},{&quot;label&quot;:&quot;Methyldopa&quot;}]"></div>

# Methyldopa

- **generic name:** Methyldopa
- **ATC codes:** `C02AB01`
- **DrugBank:** [DB00968](https://go.drugbank.com/drugs/DB00968) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Methyldopa is a centrally acting antihypertensive drug used to treat high blood pressure. It is an approved medicine and is included on the WHO list of essential medicines, so it remains in use worldwide.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q412621](https://www.wikidata.org/wiki/Q412621) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| methyldopa | parent | 211.217 | C10H13NO4 | PubChem | [38853](https://pubchem.ncbi.nlm.nih.gov/compound/38853) | Barnett_1977 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-08 11:29 | 1:06 | 0/2/0 | 0/0/0 | 0/0/0 | 66,035/6,639 | einfracz / qwen3.8-27b | 4 | 1/2 | 3/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.222), gpt-oss:120b (partly confirmed, agreement 0.857). The first reading is what the record holds.">cross-check: disputed 0/2</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Barnett_1977_reference](drugs/drug_methyldopa/Methyldopa_Barnett1977_reference.md) | — | 1-compartment (no model) | 3 | Barnett AJ et al., Pharmacokinetics of methyldopa. Plasma…, Clinical and experimental p… (1977) | [10.1111/j.1440-1681.1977.tb02670.x](https://doi.org/10.1111/j.1440-1681.1977.tb02670.x) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Liu_2025_reference](drugs/drug_methyldopa/Methyldopa_Liu2025_reference.md) | — | 1-compartment (no model) | 0 | Liu X et al., Determining the Optimal Dosing of Methy…, Clinical pharmacokinetics (2025) | [10.1007/s40262-025-01523-2](https://doi.org/10.1007/s40262-025-01523-2) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=methyldopa) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | `SLC15A1` inhibitor | DrugBank actor |
| distribution | blood | `ALB` binder | DrugBank actor |
| metabolism | brain | `COMT` substrate | DrugBank actor |
| metabolism | kidney | `COMT` substrate | DrugBank actor |
| metabolism | liver | `COMT` substrate, `SULT1A1` substrate | DrugBank actor |
| metabolism | small intestine | `SULT1A1` substrate | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: ADRA2A (target), DBH (substrate), DDC (inhibitor), DDC (substrate), DRD2 (target), PNMT (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 112 matched, 73 returned
- **screened:** 3  ·  **relevant:** 1
- **records:** 2  ·  extracted 0  ·  needs_review 0  ·  rejected 2  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full text wanted

_10 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Barnett_1977.pdf` | Barnett AJ et al., Pharmacokinetics of methyldopa. Plasma…, Clinical and experimental p… (1977) | popPK | 10 | [10.1111/j.1440-1681.1977.tb02670.x](https://doi.org/10.1111/j.1440-1681.1977.tb02670.x) | [908178](https://pubmed.ncbi.nlm.nih.gov/908178) | The paper reports quantitative disposition parameters (Ke1, V, Cl, half-life) for methyldopa in humans. |
| `Kwan_1976.pdf` | Kwan KC et al., Pharmacokinetics of methyldopa in man, The Journal of pharmacology… (1976) | popPK | 10 | not captured | [781212](https://pubmed.ncbi.nlm.nih.gov/781212) | The study reports a two-compartment PK model for methyldopa in humans, but the specific numeric parameter values (CL, V, ka, t1/2) are not listed in the provided abstract/evidence text. |
| `Dingemanse_1996.pdf` | Dingemanse J et al., Multiple-dose clinical pharmacology of…, European journal of clinica… (1996) | pd | 5 | [10.1007/s002280050068](https://doi.org/10.1007/s002280050068) | [8739811](https://www.ncbi.nlm.nih.gov/pubmed/8739811) | metadata signals extractable PD data (concentration-effect) |
| `Trocóniz_1998.pdf` | Trocóniz IF et al., Population pharmacodynamic modeling of…, Clinical pharmacology and t… (1998) | pd | 5 | [10.1016/S0009-9236(98)90028-5](https://doi.org/10.1016/S0009-9236(98)90028-5) | [9695725](https://www.ncbi.nlm.nih.gov/pubmed/9695725) | metadata signals extractable PD data (pharmacodynamicmodel) |
| `Nissinen_1992.pdf` | Nissinen E et al., Biochemical and pharmacological propert…, Naunyn-Schmiedeberg's archi… (1992) | pd | 4 | [10.1007/BF00173538](https://doi.org/10.1007/BF00173538) | [1407012](https://www.ncbi.nlm.nih.gov/pubmed/1407012) | metadata signals extractable PD data (IC50) |
| `Schultz_1990.pdf` | Schultz E, L-dopa as substrate for human duodenal…, Biomedical chromatography :… (1990) | pd | 4 | [10.1002/bmc.1130040607](https://doi.org/10.1002/bmc.1130040607) | [2289048](https://www.ncbi.nlm.nih.gov/pubmed/2289048) | metadata signals extractable PD data (IC50) |
| `Wu_1999.pdf` | Wu G et al., Pharmacodynamic modelling of levodopa,…, Pharmacological research (1999) | pd | 4 | [10.1006/phrs.1998.0435](https://doi.org/10.1006/phrs.1998.0435) | [10094845](https://www.ncbi.nlm.nih.gov/pubmed/10094845) | metadata signals extractable PD data (Pharmacodynamicmodel) |
| `Schwartz_2004.pdf` | Schwartz GL et al., Pharmacogenetics of antihypertensive dr…, American journal of pharmac… (2004) | pgx | 8 | [10.2165/00129785-200404030-00002](https://doi.org/10.2165/00129785-200404030-00002) | [15174896](https://www.ncbi.nlm.nih.gov/pubmed/15174896) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Yamamoto_2021.pdf` | Yamamoto J et al., Impact of the catechol-O-methyltransfer…, Journal of neural transmiss… (2021) | pgx | 8 | [10.1007/s00702-020-02267-y](https://doi.org/10.1007/s00702-020-02267-y) | [33136226](https://www.ncbi.nlm.nih.gov/pubmed/33136226) | metadata signals extractable PGX data (COMT, PK/PD-context) |
| `Weinshilboum_1984.pdf` | Weinshilboum RM, Human pharmacogenetics of methyl conjug…, Federation proceedings (1984) | pgx | 5 | not captured | [6714437](https://www.ncbi.nlm.nih.gov/pubmed/6714437) | metadata signals extractable PGX data (COMT) |

<sub>queue written 2026-10-08T11:29:04.408070+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Adamiak-Giera_2021 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of levodopa and its metabolite 3-O-methyldopa, not the drug methyldopa. |
| popPK | Adamiak_2010 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of levodopa, not methyldopa, which is the required subject drug. |
| PD | Adamiak_2010 | not_relevant | 0 | 0 | The paper reports pharmacodynamic modeling for levodopa, not methyldopa. |
| PGx | Ameyaw_2000 | not_relevant | 2 | 0 | The paper reports the frequency of a COMT genotype allele in a Ghanaian population but does not present data on how this genotype affects the pharmacokinetic or pharmacodynamic parameters of methyldopa. |
| PD | Amro_2016 | not_relevant | 1 | 0 | The text is a general review of treatment options and guidelines for hypertension in pregnancy, mentioning pharmacodynamics qualitatively but providing no specific numeric PD parameters or exposure-response data for Methyldopa. |
| PGx | Atwal_2015 | not_relevant | 0 | 0 | The paper reports on a diagnosis method for AADC deficiency involving 3-methoxytyrosine, not the pharmacokinetics or pharmacodynamics of the drug methyldopa. |
| popPK | Baas_2001 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of levodopa (subject drug), and 3-O-methyldopa is mentioned only as a metabolite of levodopa, not methyldopa. |
| PGx | Brennenstuhl_2020 | not_relevant | 0 | 0 | The paper reports on 3-O-methyldopa as a biomarker for AADC deficiency, not on the pharmacokinetics or pharmacodynamics of the drug methyldopa. |
| PD | Brogden_1988 | not_relevant | 0 | 0 | The paper is a review of Captopril and only mentions Methyldopa qualitatively in a comparative context without providing any pharmacodynamic data, exposure-response analysis, or numeric PD parameters for Methyldopa. |
| PD | Brogden_1990 | not_relevant | 0 | 0 | The paper is a review of Ketanserin and only mentions Methyldopa in a qualitative comparison of antihypertensive efficacy without providing any specific PD parameters or exposure-response data for Methyldopa. |
| PGx | Desir_2012 | not_relevant | 2 | 0 | The paper identifies a-methyldopa as a substrate for renalase in an in vitro screen, but it does not report a pharmacogenomic association where a specific genotype variant alters the pharmacokinetics or pharmacodynamics of methyldopa in vivo. |
| popPK | Dingemanse_1995 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of tolcapone and levodopa; 3-O-methyldopa is only a minor metabolite used to measure COMT activity and is not the subject drug. |
| popPK | Dingemanse_1996 | irrelevant | 0 | 0 | no_text gate: only 112 chars of text extracted (&lt; 400) |
| PD | Dingemanse_1996 | not_relevant | 0 | 0 | The paper focuses on the pharmacology of tolcapone, not methyldopa, and does not report PD parameters for methyldopa. |
| PD | Entezari_2023 | not_relevant | 3 | 2 | The paper reports qualitative effects of alpha-methyldopa on steroidogenesis (increased E2/T) at specific concentrations but does not provide numeric PD parameters (e.g., EC50, Emax) or a fitted dose-response curve for the drug. |
| popPK | Grange_2001 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of L-dopa and benserazide in rats, not methyldopa. |
| popPK | Harder_1995 | irrelevant | 0 | 0 | The paper focuses on levodopa pharmacokinetics and dynamics in Parkinson's disease, and methyldopa is not the subject drug. |
| PD | Harder_1995 | not_relevant | 1 | 0 | The paper discusses levodopa, not methyldopa, and provides only qualitative descriptions of concentration-effect relationships without specific numeric PD parameters for the target drug. |
| PGx | Hyland_2020 | not_relevant | 0 | 0 | The paper investigates AADC deficiency prevalence and DDC gene variants, not the pharmacogenomics of methyldopa pharmacokinetics or pharmacodynamics. |
| popPK | Jorga_2000 | irrelevant | 1 | 0 | The study focuses on the pharmacokinetics of levodopa (and its metabolite 3-O-methyldopa), not methyldopa. |
| PD | KIRKENDALL_1962 | not_relevant | 1 | 0 | The paper is a general review of clinical use and pharmacodynamics without specific numeric exposure-response or dose-response parameters for methyldopa. |
| PD | Kang_2010 | not_relevant | 0 | 0 | The paper investigates the effects of EGCG on Levodopa metabolism and neuroprotection, but does not report any pharmacodynamic or exposure-response relationship for Methyldopa. |
| popPK | Kwan_1976 | relevant | 10 | 2 | The study reports a two-compartment PK model for methyldopa in humans, but the specific numeric parameter values (CL, V, ka, t1/2) are not listed in the provided abstract/evidence text. |
| PGx | Luizon_2017 | not_relevant | 2 | 0 | The paper is a review discussing the concept of pharmacogenetics in pre-eclampsia and mentions methyldopa only in the context of drug resistance, without reporting specific genetic variants or quantitative PK/PD parameters. |
| PD | Nissinen_1992 | not_relevant | 0 | 0 | The paper focuses on the biochemical and pharmacological properties of entacapone, not methyldopa, and does not report PD parameters for methyldopa. |
| popPK | Nunes_2009 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of levodopa and nebicapone in healthy subjects, not methyldopa. |
| PD | Nunes_2009 | not_relevant | 0 | 0 | The paper investigates the pharmacokinetics and pharmacodynamics of nebicapone and levodopa, not methyldopa. |
| PD | ONESTI_1962 | not_relevant | 1 | 0 | The provided text is only the title of a paper and does not contain the full text, data, or numeric PD parameters required to assess the relationship. |
| PD | ONESTI_1964 | not_relevant | 0 | 0 | The provided text is only a title and does not contain the full text, data, or numeric PD parameters required to assess the relationship. |
| PGx | Ozsvár_2010 | not_relevant | 2 | 2 | The paper discusses CYP3A4 phenotyping to adjust the dose of nifedipine (a different drug), but does not report genetic variants altering the PK or PD of methyldopa itself. |
| popPK | Porto_2021 | irrelevant | 0 | 0 | The study evaluates the in vitro antiparasitic activity (EC50/EC90) of methyldopa against Schistosoma mansoni, not its pharmacokinetic disposition parameters. |
| PD | Ripka_1965 | not_relevant | 0 | 0 | The provided text contains only the title of the paper and lacks the full text, abstract, or data required to determine if numeric PD parameters or exposure-response relationships are reported. |
| PD | Schultz_1990 | not_relevant | 0 | 0 | The paper focuses on the enzymatic metabolism of L-dopa by human duodenal enzymes and does not report any pharmacodynamic or exposure-response data for Methyldopa. |
| PGx | Schwartz_2004 | not_relevant | 5 | 0 | The paper states that COMT polymorphisms affect methyldopa PK but explicitly notes they do not influence the antihypertensive effect, and it is a review without specific quantitative effect sizes. |
| popPK | Trocóniz_1998 | irrelevant | 0 | 0 | no_text gate: only 105 chars of text extracted (&lt; 400) |
| PD | Trocóniz_1998 | not_relevant | 0 | 0 | The paper focuses on levodopa and entacapone, not methyldopa. |
| popPK | Vaz-da-Silva_2008 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of levodopa and its metabolite 3-O-methyldopa (a distinct compound from methyldopa), with methyldopa not being the subject drug. |
| PD | WEIL_1963 | not_relevant | 0 | 0 | The provided text is only the title of the paper and does not contain the full text, abstract, or any data to verify the presence of numeric PD parameters or exposure-response relationships. |
| PGx | Weinshilboum_1984 | not_relevant | 2 | 0 | The text states that COMT activity correlates with the methyl conjugation of methyldopa but does not report specific pharmacokinetic or pharmacodynamic parameter changes for methyldopa in the provided text. |
| popPK | Wu_1999 | irrelevant | 0 | 0 | no_text gate: only 109 chars of text extracted (&lt; 400) |
| PD | Wu_1999 | not_relevant | 0 | 0 | The paper focuses on levodopa and 3-O-methyldopa, not Methyldopa. |
| PGx | Yamamoto_2021 | not_relevant | 1 | 2 | The study investigates the effect of the COMT Val158Met polymorphism on the pharmacokinetics of L-dopa, not methyldopa. |
| PGx | de_2017 | not_relevant | 0 | 0 | The paper characterizes autoimmune features of drug-induced liver injury and reports HLA allele frequencies, but does not report genetic effects on methyldopa pharmacokinetics or pharmacodynamics. |
| PD | van_1988 | not_relevant | 4 | 2 | The paper describes a dose-response relationship and antagonist shift but does not provide numeric PD parameters (e.g., ED50, Emax) or data points in the text to derive them. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-08 11:29 UTC</sub>
