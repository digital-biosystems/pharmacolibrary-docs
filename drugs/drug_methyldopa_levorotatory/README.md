<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C02A&quot;,&quot;href&quot;:&quot;atc/C02A.md&quot;},{&quot;label&quot;:&quot;methyldopa (levorotatory)&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;MethyldopaLevorotatory_Barnett1977_reference&quot;,&quot;label&quot;:&quot;Barnett_1977_reference&quot;,&quot;href&quot;:&quot;drugs/drug_methyldopa_levorotatory/MethyldopaLevorotatory_Barnett1977_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# methyldopa (levorotatory)

- **generic name:** methyldopa (levorotatory)
- **ATC codes:** `C02AB01`
- **DrugBank:** [DB00968](https://go.drugbank.com/drugs/DB00968) · **PubChem:** [CID 38853](https://pubchem.ncbi.nlm.nih.gov/compound/38853)
- **molar mass:** 211.2145 g/mol (C10H13NO4) — DrugBank
- **groups:** approved, investigational

## About

**Description.** Methyldopa, or α-methyldopa, is a centrally acting sympatholytic agent and an antihypertensive agent.[A231784] It is an analog of DOPA (3,4‐hydroxyphenylanine), and it is a prodrug, meaning that the drug requires biotransformation to an active metabolite for therapeutic effects. Methyldopa works by binding to alpha(α)-2 adrenergic receptors as an agonist, leading to the inhibition of adrenergic neuronal outflow and reduction of vasoconstrictor adrenergic signals.[A1499] Methyldopa exists in two isomers D-α-methyldopa and L-α-methyldopa, which is the active form.[A232224]

First introduced in 1960 as an antihypertensive agent, methyldopa was considered to be useful in certain patient populations, such as pregnant women and patients with renal insufficiency. Since then, methyldopa was largely replaced by newer, better-tolerated antihypertensive agents;[A231784] however, it is still used as monotherapy [L32614] or in combination with [hydrochlorothiazide].[L32619] Methyldopa is also available as intravenous injection, which is used to manage hypertension when oral therapy is unfeasible and to treat hypertensive crisis.[L32624]

**Indication.** Methyldopa is indicated for the management of hypertension as monotherapy [L32614] or in combination with hydrochlorothiazide.[L32619] Methyldopa injection is used to manage hypertensive crises.[L32624]

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| methyldopa_levorotatory (methyldopa) | metabolite | 211.214 | C10H13NO4 | DrugBank | [38853](https://pubchem.ncbi.nlm.nih.gov/compound/38853) | Barnett_1977 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-27 19:49 | 11:01 | 0/1/0 | 0/0/0 | 0/0/0 | 36,051/5,538 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

## popPK records

| status | detail | model structure | params | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.222). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Barnett_1977_reference](drugs/drug_methyldopa_levorotatory/MethyldopaLevorotatory_Barnett1977_reference.md) | 1-compartment (no model) | 3 | Barnett AJ et al., Pharmacokinetics of methyldopa. Plasma…, Clinical and experimental p… (1977) | [10.1111/j.1440-1681.1977.tb02670.x](https://doi.org/10.1111/j.1440-1681.1977.tb02670.x) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=methyldopa_levorotatory) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | `SLC15A1` inhibitor | DrugBank actor |
| distribution | blood | `ALB` binder | DrugBank actor |
| metabolism | brain | `COMT` substrate | DrugBank actor |
| metabolism | kidney | `COMT` substrate | DrugBank actor |
| metabolism | liver | `COMT` substrate, `SULT1A1` substrate | DrugBank actor |
| metabolism | small intestine | `SULT1A1` substrate | DrugBank actor |
| excretion | bile duct | <sub>“…reted in urine.[A232219] Unabsorbed drug is excreted in feces as the unchanged parent comp…”</sub> | prose |
| excretion | kidney | <sub>“…Approximately 70% of absorbed methyldopa is excreted in the urine as unchanged parent drug…”</sub> | prose |

<sub>Actors without a tissue in the table: ADRA2A (target), DBH (substrate), DDC (inhibitor), DDC (substrate), DRD2 (target), PNMT (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 32 matched, 32 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_8 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Barnett_1977.pdf` | Barnett AJ et al., Pharmacokinetics of methyldopa. Plasma…, Clinical and experimental p… (1977) | popPK | 10 | [10.1111/j.1440-1681.1977.tb02670.x](https://doi.org/10.1111/j.1440-1681.1977.tb02670.x) | [908178](https://pubmed.ncbi.nlm.nih.gov/908178) | The paper reports quantitative pharmacokinetic parameters (clearance, volume of distribution, elimination constant, half-life) for methyldopa in human subjects, with all numeric values explicitly present in the evidence. |
| `Kwan_1976.pdf` | Kwan KC et al., Pharmacokinetics of methyldopa in man, The Journal of pharmacology… (1976) | popPK | 9 | not captured | [781212](https://pubmed.ncbi.nlm.nih.gov/781212) | The paper describes a PK study of methyldopa with a two-compartment model, but the specific numeric values for clearance, volume, and half-life are not present in the provided evidence, only qualitative descriptions and bioavailability fractions. |
| `Dingemanse_1996.pdf` | Dingemanse J et al., Multiple-dose clinical pharmacology of…, European journal of clinica… (1996) | pd | 5 | [10.1007/s002280050068](https://doi.org/10.1007/s002280050068) | [8739811](https://www.ncbi.nlm.nih.gov/pubmed/8739811) | metadata signals extractable PD data (concentration-effect) |
| `Trocóniz_1998.pdf` | Trocóniz IF et al., Population pharmacodynamic modeling of…, Clinical pharmacology and t… (1998) | pd | 5 | [10.1016/S0009-9236(98)90028-5](https://doi.org/10.1016/S0009-9236(98)90028-5) | [9695725](https://www.ncbi.nlm.nih.gov/pubmed/9695725) | metadata signals extractable PD data (pharmacodynamicmodel) |
| `Wu_1999.pdf` | Wu G et al., Pharmacodynamic modelling of levodopa,…, Pharmacological research (1999) | pd | 4 | [10.1006/phrs.1998.0435](https://doi.org/10.1006/phrs.1998.0435) | [10094845](https://www.ncbi.nlm.nih.gov/pubmed/10094845) | metadata signals extractable PD data (Pharmacodynamicmodel) |
| `Schwartz_2004.pdf` | Schwartz GL et al., Pharmacogenetics of antihypertensive dr…, American journal of pharmac… (2004) | pgx | 8 | [10.2165/00129785-200404030-00002](https://doi.org/10.2165/00129785-200404030-00002) | [15174896](https://www.ncbi.nlm.nih.gov/pubmed/15174896) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Yamamoto_2021.pdf` | Yamamoto J et al., Impact of the catechol-O-methyltransfer…, Journal of neural transmiss… (2021) | pgx | 8 | [10.1007/s00702-020-02267-y](https://doi.org/10.1007/s00702-020-02267-y) | [33136226](https://www.ncbi.nlm.nih.gov/pubmed/33136226) | metadata signals extractable PGX data (COMT, PK/PD-context) |
| `Weinshilboum_1984.pdf` | Weinshilboum RM, Human pharmacogenetics of methyl conjug…, Federation proceedings (1984) | pgx | 5 | not captured | [6714437](https://www.ncbi.nlm.nih.gov/pubmed/6714437) | metadata signals extractable PGX data (COMT) |

<sub>queue written 2026-09-27T19:45:41.497837+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Adamiak-Giera_2021 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of levodopa and its metabolite 3-O-methyldopa, not the subject drug methyldopa_levorotatory. |
| popPK | Adamiak_2010 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of levodopa, not methyldopa_levorotatory. |
| PD | Adamiak_2010 | not_relevant | 0 | 0 | The paper reports PK/PD modeling for levodopa, not methyldopa. |
| PGx | Ameyaw_2000 | not_relevant | 0 | 0 | The paper reports the frequency of a COMT genotype in a Ghanaian population but does not measure or report any pharmacokinetic or pharmacodynamic parameters for methyldopa. |
| PGx | Atwal_2015 | not_relevant | 0 | 0 | The paper reports on the diagnosis of AADC deficiency via metabolomics and does not investigate the pharmacokinetics or pharmacodynamics of methyldopa_levorotatory. |
| popPK | Baas_2001 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of levodopa and its metabolite 3-O-methyldopa, not methyldopa_levorotatory. |
| PGx | Brennenstuhl_2020 | not_relevant | 0 | 0 | The paper analyzes 3-O-methyldopa as a biomarker for AADC deficiency, not the pharmacokinetics or pharmacodynamics of the drug methyldopa_levorotatory. |
| PGx | Desir_2012 | not_relevant | 0 | 0 | The paper identifies alpha-methyldopa as a substrate for renalase but does not report pharmacogenomic effects of gene variants on the PK or PD parameters of methyldopa_levorotatory. |
| popPK | Dingemanse_1995 | irrelevant | 0 | 0 | The study focuses on tolcapone and levodopa, and methyldopa is not the subject drug (only 3-O-methyldopa, a metabolite of levodopa, is mentioned). |
| PD | Dingemanse_1995 | not_relevant | 0 | 0 | The paper investigates the PK/PD interaction between tolcapone and levodopa, not methyldopa. |
| popPK | Dingemanse_1996 | irrelevant | 0 | 0 | no_text gate: only 112 chars of text extracted (&lt; 400) |
| PD | Dingemanse_1996 | not_relevant | 0 | 0 | The paper focuses on the pharmacology of tolcapone, not methyldopa, and does not report PD parameters for the specified drug. |
| popPK | Grange_2001 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of L-dopa and benserazide in rats, not methyldopa_levorotatory. |
| popPK | Harder_1995 | irrelevant | 0 | 0 | The paper focuses on the concentration-effect relationship of levodopa in Parkinson's disease and does not report pharmacokinetic parameters for methyldopa_levorotatory. |
| PD | Harder_1995 | not_relevant | 1 | 0 | The text is a qualitative review of levodopa (not methyldopa) pharmacodynamics and does not provide specific numeric PD parameters or extractable concentration-effect curves. |
| PGx | Hyland_2020 | not_relevant | 0 | 0 | The paper reports the prevalence of AADC deficiency and DDC gene variants, but does not study the pharmacokinetics or pharmacodynamics of methyldopa_levorotatory. |
| popPK | Jorga_2000 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of levodopa and its metabolite 3-O-methyldopa, not methyldopa_levorotatory. |
| popPK | Kwan_1976 | relevant | 9 | 2 | The paper describes a PK study of methyldopa with a two-compartment model, but the specific numeric values for clearance, volume, and half-life are not present in the provided evidence, only qualitative descriptions and bioavailability fractions. |
| PGx | Luizon_2017 | not_relevant | 2 | 1 | The paper is a review discussing the general concept of pharmacogenetics in pre-eclampsia and mentions methyldopa non-response, but it does not report specific quantitative pharmacokinetic or pharmacodynamic effects of gene variants on methyldopa. |
| popPK | Nunes_2009 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of levodopa and nebicapone, not methyldopa_levorotatory. |
| PD | Nunes_2009 | not_relevant | 0 | 0 | The paper investigates the pharmacokinetics and pharmacodynamics of nebicapone and levodopa, not methyldopa. |
| PGx | Ozsvár_2010 | not_relevant | 0 | 0 | The paper reports a case of methyldopa-induced hepatitis and mentions CYP3A4 phenotyping for nifedipine dosing, but does not report a pharmacogenomic effect on the PK or PD of methyldopa. |
| popPK | Porto_2021 | irrelevant | 0 | 0 | The paper is an in-vitro and in-vivo antiparasitic efficacy study, not a pharmacokinetic study, and does not report any PK parameters for methyldopa. |
| PGx | Schwartz_2004 | not_relevant | 2 | 0 | The paper is a review that explicitly states that while COMT polymorphisms affect methyldopa pharmacokinetics, they have not been shown to influence the antihypertensive effect (PD) at conventional doses, and it provides no specific quantitative data or fitted effect sizes. |
| popPK | Trocóniz_1998 | irrelevant | 0 | 0 | no_text gate: only 105 chars of text extracted (&lt; 400) |
| PD | Trocóniz_1998 | not_relevant | 0 | 0 | The paper focuses on levodopa and entacapone, not methyldopa. |
| popPK | Vaz-da-Silva_2008 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of levodopa and nebicapone, not methyldopa_levorotatory. |
| PD | Vaz-da-Silva_2008 | not_relevant | 0 | 0 | The paper investigates the pharmacokinetic-pharmacodynamic interaction of nebicapone and levodopa, not methyldopa; while it mentions 3-O-methyldopa as a metabolite, it does not report a PD relationship for methyldopa itself. |
| PGx | Weinshilboum_1984 | not_relevant | 2 | 0 | The paper discusses the genetic regulation of methyltransferase enzymes and mentions a correlation with methyldopa metabolism, but it does not report specific pharmacokinetic or pharmacodynamic parameter changes for methyldopa_levorotatory linked to a specific genotype. |
| popPK | Wu_1999 | irrelevant | 0 | 0 | no_text gate: only 109 chars of text extracted (&lt; 400) |
| PD | Wu_1999 | not_relevant | 0 | 0 | The paper focuses on levodopa and 3-O-methyldopa, not methyldopa (levorotatory). |
| PGx | Yamamoto_2021 | not_relevant | 0 | 0 | The paper studies the pharmacokinetics of L-dopa and its metabolite 3-O-methyldopa, not the drug methyldopa_levorotatory. |
| PGx | de_2017 | not_relevant | 0 | 0 | The paper investigates autoimmune features and HLA associations in drug-induced liver injury, not pharmacokinetic or pharmacodynamic parameters of methyldopa. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-27 19:45 UTC</sub>
