<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;treprostinil&quot;}]"></div>

# treprostinil

- **generic name:** treprostinil
- **ATC codes:** `B01AC21`
- **DrugBank:** [DB00374](https://go.drugbank.com/drugs/DB00374) · **PubChem:** [CID 6918140](https://pubchem.ncbi.nlm.nih.gov/compound/6918140)
- **molar mass:** 390.5131 g/mol (C23H34O5) — DrugBank
- **groups:** approved, investigational

## About

Treprostinil is a prostaglandin medicine used to treat pulmonary hypertension and chronic pulmonary heart disease. It is an approved drug and one product is authorised in the European Union for pulmonary hypertension.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3495231](https://www.wikidata.org/wiki/Q3495231) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 16:56 | 2:19 | 0/0/0 | 1/0/0 | 1/0/4 | 55,364/4,720 | ollama / qwen3.8:27b-mtp-q8_0 | 6 | 0/12 | 6/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.6). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Chapman_2018_PAP](drugs/drug_treprostinil/pd_Chapman_2018_PAP.md) | pulmonary arterial pressure ← treprostinil · direct Emax (saturable) effect | — | Chapman RW et al., Inhaled hexadecyl-treprostinil provides…, Pulmonary pharmacology & th… (2018) | [10.1016/j.pupt.2018.02.002](https://doi.org/10.1016/j.pupt.2018.02.002) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Chapman_2018_RVPP](drugs/drug_treprostinil/pd_Chapman_2018_RVPP.md) | right ventricular pulse pressure ← treprostinil · direct Emax (saturable) effect | — | Chapman RW et al., Inhaled hexadecyl-treprostinil provides…, Pulmonary pharmacology & th… (2018) | [10.1016/j.pupt.2018.02.002](https://doi.org/10.1016/j.pupt.2018.02.002) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Adverse-reaction risk allele; no quantitative PK/PD parameter effect.">safety allele</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0), gpt-oss:120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓ 2/2</span> | **CYP2C9** | `safety` — adverse-reaction risk (HLA / safety allele) — no parameter shift | safety_allele | [Coons_2023](drugs/drug_treprostinil/pgx_Coons_2023_CYP2C9_safety.md) | Coons JC et al., Pharmacogenomics in the Management of P…, Pharmacogenomics and person… (2023) | [10.2147/PGPM.S361222](https://doi.org/10.2147/PGPM.S361222) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (?, agreement 0.25), gpt-oss:120b (?, agreement 0.25). Primary extraction retained.">cross-check: partial 0/2</span> | **CAMK2D** | `Q321` · EC50 | target | [Coons_2023](drugs/drug_treprostinil/pgx_Coons_2023_CAMK2D_Q321.md) | Coons JC et al., Pharmacogenomics in the Management of P…, Pharmacogenomics and person… (2023) | [10.2147/PGPM.S361222](https://doi.org/10.2147/PGPM.S361222) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (?, agreement 0.25), gpt-oss:120b (confirmed, agreement 1.0). Primary extraction retained.">cross-check: partial 1/2</span> | **CYP2C8** | `Q27` · CL/F | metabolism | [Coons_2023](drugs/drug_treprostinil/pgx_Coons_2023_CYP2C8_Q27.md) | Coons JC et al., Pharmacogenomics in the Management of P…, Pharmacogenomics and person… (2023) | [10.2147/PGPM.S361222](https://doi.org/10.2147/PGPM.S361222) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (?, agreement 0.25), gpt-oss:120b (?, agreement 0.25). Primary extraction retained.">cross-check: partial 0/2</span> | **GNG2** | `Q321` · EC50 | target | [Coons_2023](drugs/drug_treprostinil/pgx_Coons_2023_GNG2_Q321.md) | Coons JC et al., Pharmacogenomics in the Management of P…, Pharmacogenomics and person… (2023) | [10.2147/PGPM.S361222](https://doi.org/10.2147/PGPM.S361222) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (?, agreement 0.25), gpt-oss:120b (?, agreement 0.25). Primary extraction retained.">cross-check: partial 0/2</span> | **PFAS** | `Q321` · EC50 | target | [Coons_2023](drugs/drug_treprostinil/pgx_Coons_2023_PFAS_Q321.md) | Coons JC et al., Pharmacogenomics in the Management of P…, Pharmacogenomics and person… (2023) | [10.2147/PGPM.S361222](https://doi.org/10.2147/PGPM.S361222) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 42 matched, 41 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Gotzkowsky_2010.pdf` | Gotzkowsky SK et al., Lack of a pharmacokinetic interaction b…, Journal of clinical pharmac… (2010) | pgx | 7 | [10.1177/0091270009351173](https://doi.org/10.1177/0091270009351173) | [20133511](https://www.ncbi.nlm.nih.gov/pubmed/20133511) | metadata signals extractable PGX data (CYP2C9, PK/PD-context) |

<sub>queue written 2026-10-05T16:54:34.201378+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Almazroo_2022 | not_relevant | 0 | 0 | The study investigates the effect of treprostinil on hepatic transporter expression in an animal model of ischemia-reperfusion injury, not the effect of genetic variants on treprostinil pharmacokinetics or pharmacodynamics. |
| popPK | Axelsen_2021 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of selexipag and its metabolite, not treprostinil. |
| PD | Axelsen_2021 | not_relevant | 0 | 0 | The paper reports a pharmacokinetic drug-drug interaction study for selexipag (not treprostinil) and contains no pharmacodynamic or exposure-response modeling. |
| popPK | Briand_2019 | irrelevant | 0 | 0 | The paper is an in-silico and in-vitro enzyme inhibition study (CES1) and does not report pharmacokinetic disposition parameters (CL, V, etc.) for treprostinil. |
| PD | Briand_2019 | not_relevant | 0 | 0 | The paper reports an in vitro enzyme inhibition IC50 for treprostinil against CES1, which is a pharmacological potency metric, not a pharmacodynamic (exposure-response or dose-response) relationship for the drug's therapeutic effect. |
| popPK | Bubb_2014 | irrelevant | 0 | 0 | The study is a mechanistic/pharmacodynamic investigation of PDE2 inhibition in pulmonary hypertension where treprostinil is used only as a co-administered agent to test synergy, with no pharmacokinetic parameters reported. |
| PD | Bubb_2014 | not_relevant | 1 | 0 | The paper describes qualitative pharmacodynamic interactions (augmentation of relaxation) between a PDE2 inhibitor and treprostinil but does not provide numeric PD parameters or concentration-effect curves for treprostinil. |
| popPK | Chapman_2018 | irrelevant | 2 | 0 | The study is a pharmacodynamic assessment of pulmonary vasodilation in rats and dogs, reporting EC50 values for plasma treprostinil concentrations rather than quantitative pharmacokinetic disposition parameters (CL, V, t1/2). |
| popPK | Chapman_2021 | irrelevant | 2 | 0 | The study is a pharmacodynamic assessment of tachyphylaxis in rats and reports only qualitative concentration ranges rather than quantitative PK parameters like clearance or volume. |
| popPK | Coons_2018 | irrelevant | 2 | 1 | This is a clinical review that cites general PK properties (half-life, bioavailability) but does not report original quantitative disposition parameters (CL, V, Q, ka) or population-PK model estimates for treprostinil. |
| PD | Coons_2018 | not_relevant | 2 | 0 | The paper is a clinical review that qualitatively mentions the existence of a dose-response relationship but does not provide specific numeric PD parameters or data curves. |
| popPK | Galiè_2003 | irrelevant | 0 | 0 | The paper is a clinical review of prostanoids for PAH that discusses therapeutic outcomes and general pharmacokinetic properties (e.g., half-life) qualitatively but does not report quantitative PK parameters for treprostinil. |
| PD | Galiè_2003 | not_relevant | 1 | 0 | The text is a qualitative review of prostanoids in PAH and contains no numeric PD parameters, concentration-effect curves, or dose-response data for treprostinil. |
| popPK | Gatfield_2017 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics of selexipag and its metabolite, with treprostinil serving only as a comparator in in vitro assays without reporting PK parameters. |
| PD | Gatfield_2017 | not_relevant | 0 | 0 | The paper focuses on the pharmacology of selexipag's metabolite (ACT-333679) and only mentions treprostinil as a comparator for full agonism in cAMP assays without providing specific numeric PD parameters or exposure-response data for treprostinil. |
| PGx | Gotzkowsky_2010 | not_relevant | 0 | 0 | The study evaluates a drug-drug interaction between treprostinil and bosentan, not a pharmacogenomic effect based on gene variants. |
| PGx | Gotzkowsky_2013 | not_relevant | 0 | 0 | The study evaluates a drug-drug interaction between treprostinil and sildenafil, not a pharmacogenomic effect based on genetic variants. |
| popPK | Honorato_2017 | irrelevant | 1 | 0 | The paper is a pharmacology review of selexipag that mentions treprostinil only as a comparator without providing original quantitative PK parameter values. |
| PD | Honorato_2017 | not_relevant | 1 | 0 | The text is a qualitative pharmacology review of selexipag and other prostacyclin pathway drugs, containing no numeric PD parameters or exposure-response data for treprostinil. |
| popPK | Isoherranen_2025 | irrelevant | 0 | 0 | This is a general review of PBPK modeling methodology and does not report specific quantitative pharmacokinetic parameters for treprostinil. |
| PD | Isoherranen_2025 | not_relevant | 0 | 0 | The paper is a review of PBPK modeling methodology and does not report specific pharmacodynamic or exposure-response data for treprostinil. |
| popPK | Lawrence_2018 | irrelevant | 0 | 0 | The study is a clinical efficacy and safety evaluation of treprostinil in infants with CDH, reporting no pharmacokinetic parameters. |
| popPK | LeVarge_2012 | irrelevant | 2 | 0 | The paper is a review article that discusses pharmacokinetics qualitatively but does not provide original quantitative disposition parameters or numeric values for treprostinil. |
| PD | LeVarge_2012 | not_relevant | 2 | 0 | The text is a review summary that qualitatively describes the pharmacodynamics and clinical efficacy of inhaled treprostinil but does not provide specific numeric PD parameters, concentration-effect curves, or detailed PK/PD modeling results. |
| popPK | Lindegaard_2020 | irrelevant | 1 | 0 | The paper is a MiniReview discussing clinical benefits and general properties without reporting original quantitative pharmacokinetic parameter values. |
| PD | Lindegaard_2020 | not_relevant | 2 | 0 | The text is a mini-review summarizing clinical outcomes and general pharmacological properties without providing specific numeric PD parameters or exposure-response data. |
| popPK | Liu_2021 | irrelevant | 0 | 0 | The paper is a narrative review of inhaled pulmonary vasodilators that discusses treprostinil's clinical efficacy and safety but does not report any quantitative pharmacokinetic parameters (e.g., clearance, volume, half-life). |
| PD | Liu_2021 | not_relevant | 1 | 0 | The paper is a narrative review that qualitatively discusses inhaled pulmonary vasodilators, including treprostinil, but does not report any specific numeric pharmacodynamic parameters, exposure-response curves, or dose-response data for treprostinil. |
| popPK | Mubarak_2010 | irrelevant | 1 | 0 | The paper is a review article discussing the physiology and clinical studies of prostaglandin analogs, and the provided evidence contains no original quantitative pharmacokinetic parameter values for treprostinil. |
| PD | Mubarak_2010 | not_relevant | 2 | 0 | The text is a review article summarizing clinical studies and general pharmacological distinctions without providing specific numeric PD parameters or exposure-response data for treprostinil. |
| popPK | Oriaku_2020 | irrelevant | 0 | 0 | The paper is a clinical case report describing hemodynamic improvements and drug transition, containing no pharmacokinetic parameters or quantitative disposition data for treprostinil. |
| PD | Oriaku_2020 | not_relevant | 1 | 0 | The paper is a single case report describing clinical improvement after switching drugs but explicitly states that pharmacodynamic data comparing the agents are lacking and provides no concentration-effect or dose-response analysis. |
| popPK | Paci_2026 | irrelevant | 0 | 0 | The paper describes a drug delivery device and does not report pharmacokinetic parameters for treprostinil. |
| PD | Paci_2026 | not_relevant | 0 | 0 | The paper describes a drug delivery device mechanism and release rates, but does not report any pharmacodynamic or exposure-response relationship for treprostinil. |
| popPK | Ramani_2020 | irrelevant | 0 | 0 | The paper is a dose-response analysis of clinical outcomes (hospitalization, 6MWD) and does not report pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Tella_2020 | irrelevant | 0 | 0 | The study is a clinical retrospective cohort analyzing hemodynamic response and dose-effect relationships, not a pharmacokinetic study reporting quantitative disposition parameters like clearance or volume. |
| popPK | Thomeas-McEwing_2022 | irrelevant | 0 | 0 | The study is a pharmacogenomic GWAS analyzing dose-response heterogeneity and does not report quantitative pharmacokinetic parameters (CL, V, etc.) for treprostinil. |
| PD | Thomeas-McEwing_2022 | not_relevant | 1 | 0 | The paper is a pharmacogenomic study (GWAS) identifying genetic predictors of treprostinil dose, but it does not report a concentration-effect or dose-response curve with numeric PD parameters (e.g., Emax, EC50). |
| popPK | Wade_2003 | irrelevant | 1 | 0 | The study reports pharmacokinetic parameters for warfarin (the subject drug) to assess interaction with treprostinil, not for treprostinil itself. |
| PD | Wade_2003 | not_relevant | 2 | 2 | The study reports summary statistics (AUEC, Emax) for warfarin's effect (INR) to assess drug-drug interaction, but does not model or report a concentration-effect relationship or PD parameters for treprostinil itself. |
| popPK | Walkey_2011 | irrelevant | 1 | 0 | The study is a clinical case series focusing on hemodynamic responses and pharmacodynamics, not a pharmacokinetic study reporting quantitative disposition parameters like clearance or volume. |
| PD | Walkey_2011 | not_relevant | 2 | 1 | The paper reports a qualitative comparison of hemodynamic changes (PAP) upon drug discontinuation and transition, but does not provide a concentration-effect or dose-response model with numeric PD parameters (e.g., Emax, EC50) for treprostinil. |
| popPK | Whittle_2012 | irrelevant | 0 | 0 | The study reports in vitro receptor binding affinities and functional potency (Ki, EC50) rather than pharmacokinetic disposition parameters (CL, V, t1/2). |
| PGx | Wu_2022 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions involving CYP enzymes but does not report pharmacogenomic effects of specific gene variants on treprostinil PK/PD. |
| popPK | Zhang_2024 | irrelevant | 0 | 0 | The study is a pharmacovigilance analysis of PDE5 inhibitors and does not involve treprostinil or report any pharmacokinetic parameters. |
| PD | Zhang_2024 | not_relevant | 0 | 0 | The paper is a pharmacovigilance study analyzing adverse event reports (hearing impairment) for PDE5 inhibitors in the FAERS database and does not contain any PK/PD modeling, exposure-response analysis, or numeric PD parameters for treprostinil. |
| popPK | unknown_2015 | irrelevant | 0 | 0 | no_text gate: only 106 chars of text extracted (&lt; 400) |
| PD | unknown_2015 | not_relevant | 0 | 0 | The provided text is only a header for a conference abstract collection and contains no specific data, models, or parameters for treprostinil. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
