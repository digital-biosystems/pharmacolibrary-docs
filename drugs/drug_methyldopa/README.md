<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C02A&quot;,&quot;href&quot;:&quot;atc/C02A.md&quot;},{&quot;label&quot;:&quot;Methyldopa&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Methyldopa_Brogden1988_reference&quot;,&quot;label&quot;:&quot;Brogden_1988_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_methyldopa/Methyldopa_Brogden1988_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Methyldopa_Singh1985_reference&quot;,&quot;label&quot;:&quot;Singh_1985_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_methyldopa/Methyldopa_Singh1985_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# Methyldopa

- **generic name:** Methyldopa
- **ATC codes:** `C02AB01`
- **DrugBank:** [DB00968](https://go.drugbank.com/drugs/DB00968) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Methyldopa is a centrally acting antihypertensive drug used to treat high blood pressure. It is an approved medicine and is included on the WHO list of essential medicines, so it remains in use worldwide.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q412621](https://www.wikidata.org/wiki/Q412621) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| methyldopa | parent | 211.217 | C10H13NO4 | PubChem | [38853](https://pubchem.ncbi.nlm.nih.gov/compound/38853) | Barnett_1977, Jorga_1997 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-10 17:37 | 23:16 | 2/3/0 | 0/0/0 | 0/0/0 | 1,409,526/136,392 | einfracz / qwen3.8-27b | 40 | 35/5 | 4/36 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.583). Primary extraction retained.">cross-check: disputed</span> | [Brogden_1988_reference](drugs/drug_methyldopa/Methyldopa_Brogden1988_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Brogden RN et al., Captopril. An update of its pharmacodyn…, Drugs (1988) | [10.2165/00003495-198836050-00003](https://doi.org/10.2165/00003495-198836050-00003) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.615). Primary extraction retained.">cross-check: disputed</span> | [Singh_1985_reference](drugs/drug_methyldopa/Methyldopa_Singh1985_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Singh BN et al., Acebutolol. A review of its pharmacolog…, Drugs (1985) | [10.2165/00003495-198529060-00003](https://doi.org/10.2165/00003495-198529060-00003) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.571), gpt-oss:120b (partly confirmed, agreement 0.857). Primary extraction retained.">cross-check: partial 0/2</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Barnett_1977_reference](drugs/drug_methyldopa/Methyldopa_Barnett1977_reference.md) | — | 1-compartment (no model) | 3 | Barnett AJ et al., Pharmacokinetics of methyldopa. Plasma…, Clinical and experimental p… (1977) | [10.1111/j.1440-1681.1977.tb02670.x](https://doi.org/10.1111/j.1440-1681.1977.tb02670.x) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.273). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Jorga_1997_reference](drugs/drug_methyldopa/Methyldopa_Jorga1997_reference.md) | — | parent + metabolite (no model) | 4 | Jorga KM et al., Optimizing levodopa pharmacokinetics wi…, Clinical pharmacology and t… (1997) | [10.1016/S0009-9236(97)90033-3](https://doi.org/10.1016/S0009-9236(97)90033-3) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0), gpt-oss:120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓ 2/2</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Liu_2025_reference](drugs/drug_methyldopa/Methyldopa_Liu2025_reference.md) | — | 1-compartment (no model) | 0 | Liu X et al., Determining the Optimal Dosing of Methy…, Clinical pharmacokinetics (2025) | [10.1007/s40262-025-01523-2](https://doi.org/10.1007/s40262-025-01523-2) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=methyldopa).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | `SLC15A1` inhibitor | DrugBank actor |
| distribution | blood | `ALB` binder | DrugBank actor |
| metabolism | brain | `COMT` substrate | DrugBank actor |
| metabolism | kidney | `COMT` substrate | DrugBank actor |
| metabolism | liver | `COMT` substrate, `SULT1A1` substrate | DrugBank actor |
| metabolism | small intestine | `SULT1A1` substrate | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: ADRA2A (target), DBH (substrate), DDC (inhibitor), DDC (substrate), DRD2 (target), PNMT (substrate).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 112 matched, 74 returned
- **screened:** 39  ·  **relevant:** 2
- **records:** 5  ·  extracted 2  ·  needs_review 0  ·  rejected 3  ·  stale 2
- **scholar-agent fallback query used:** True

## Full-text requests

_5 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Kwan_1976.pdf` | Kwan KC et al., Pharmacokinetics of methyldopa in man, The Journal of pharmacology… (1976) | popPK | 10 | not captured | [781212](https://pubmed.ncbi.nlm.nih.gov/781212) | The study reports a two-compartment PK model for methyldopa in humans, but the specific numeric parameter values (CL, V, ka, t1/2) are not listed in the provided abstract/evidence text. |
| `Dingemanse_1996.pdf` | Dingemanse J et al., Multiple-dose clinical pharmacology of…, European journal of clinica… (1996) | pd | 5 | [10.1007/s002280050068](https://doi.org/10.1007/s002280050068) | [8739811](https://www.ncbi.nlm.nih.gov/pubmed/8739811) | metadata signals extractable PD data (concentration-effect) |
| `Trocóniz_1998.pdf` | Trocóniz IF et al., Population pharmacodynamic modeling of…, Clinical pharmacology and t… (1998) | pd | 5 | [10.1016/S0009-9236(98)90028-5](https://doi.org/10.1016/S0009-9236(98)90028-5) | [9695725](https://www.ncbi.nlm.nih.gov/pubmed/9695725) | metadata signals extractable PD data (pharmacodynamicmodel) |
| `Wu_1999.pdf` | Wu G et al., Pharmacodynamic modelling of levodopa,…, Pharmacological research (1999) | pd | 4 | [10.1006/phrs.1998.0435](https://doi.org/10.1006/phrs.1998.0435) | [10094845](https://www.ncbi.nlm.nih.gov/pubmed/10094845) | metadata signals extractable PD data (Pharmacodynamicmodel) |
| `Weinshilboum_1984.pdf` | Weinshilboum RM, Human pharmacogenetics of methyl conjug…, Federation proceedings (1984) | pgx | 5 | not captured | [6714437](https://www.ncbi.nlm.nih.gov/pubmed/6714437) | metadata signals extractable PGX data (COMT) |

<sub>queue written 2026-10-10T17:24:02.165645+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Adamiak-Giera_2021 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of levodopa and its metabolite 3-O-methyldopa, not the drug methyldopa. |
| popPK | Adamiak_2010 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of levodopa, not methyldopa, which is the required subject drug. |
| PD | Adamiak_2010 | not_relevant | 0 | 0 | The paper reports pharmacodynamic modeling for levodopa, not methyldopa. |
| PGx | Ameyaw_2000 | not_relevant | 0 | 0 | The study reports the genetic frequency of the COMT low-activity allele in a population but does not provide pharmacokinetic or pharmacodynamic data for methyldopa. |
| popPK | Amro_2016 | irrelevant | 0 | 0 | This is a narrative review of antihypertensive therapy in pregnancy; while it mentions methyldopa's elimination characteristics qualitatively, it does not report quantitative PK parameters (CL, Vd, etc.) for methyldopa. |
| PD | Amro_2016 | not_relevant | 0 | 0 | The paper is a clinical review of hypertension management in pregnancy, focusing on labetalol and calcium channel blockers; it does not report any pharmacodynamic or exposure-response analysis for Methyldopa. |
| popPK | Antonini_2010 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of levodopa and its metabolite 3-OMD in Parkinson's disease, not the drug methyldopa. |
| PGx | Atwal_2015 | not_relevant | 0 | 0 | The study reports on the diagnosis of AADC deficiency using metabolomic profiling and is unrelated to the pharmacogenomics of methyldopa therapy. |
| popPK | Baas_2001 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of levodopa (subject drug), and 3-O-methyldopa is mentioned only as a metabolite of levodopa, not methyldopa. |
| popPK | Bonifácio_2015 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of levodopa and 3-OMD in the context of COMT inhibition, not on methyldopa. |
| PGx | Brennenstuhl_2020 | not_relevant | 0 | 0 | The paper studies 3-O-methyldopa (a biomarker for AADC deficiency) and does not report the pharmacokinetics or pharmacodynamics of the drug methyldopa. |
| popPK | Brogden_1988 | irrelevant | 0 | 0 | The paper is a review of captopril pharmacokinetics and therapeutic trials where methyldopa is only mentioned as a comparator drug for quality of life or concomitant therapy, with no PK parameters reported for methyldopa. |
| PD | Brogden_1988 | not_relevant | 2 | 1 | The paper is a review article covering various antihypertensives (including Captopril, beta-blockers, diuretics) but lacks specific numeric exposure-response or dose-response parameters for Methyldopa in the provided text. |
| popPK | Brogden_1990 | irrelevant | 0 | 0 | The paper is a review of ketanserin; methyldopa is only mentioned as a comparator drug for antihypertensive efficacy, and no PK parameters for methyldopa are reported. |
| PD | Brogden_1990 | not_relevant | 0 | 0 | The paper is a review of Ketanserin's properties and only mentions Methyldopa as a comparator drug without providing any PD or exposure-response data for it. |
| popPK | Deleu_2002 | irrelevant | 0 | 0 | The paper is a review of pharmacokinetics of antiparkinsonian drugs (levodopa, dopamine agonists, etc.) and does not report quantitative pharmacokinetic parameters for methyldopa. |
| PGx | Desir_2012 | not_relevant | 2 | 0 | The paper identifies a-methyldopa as a substrate for renalase in an in vitro screen, but it does not report a pharmacogenomic association where a specific genotype variant alters the pharmacokinetics or pharmacodynamics of methyldopa in vivo. |
| popPK | Dingemanse_1995 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of tolcapone and levodopa; 3-O-methyldopa is only a minor metabolite used to measure COMT activity and is not the subject drug. |
| popPK | Dingemanse_1996 | irrelevant | 0 | 0 | no_text gate: only 112 chars of text extracted (&lt; 400) |
| PD | Dingemanse_1996 | not_relevant | 0 | 0 | The paper focuses on the pharmacology of tolcapone, not methyldopa, and does not report PD parameters for methyldopa. |
| popPK | Entezari_2023 | irrelevant | 0 | 0 | The study is an in-vitro assessment of endocrine-disrupting potential (aromatase inhibition, ER binding) and does not report pharmacokinetic disposition parameters. |
| PD | Entezari_2023 | not_relevant | 3 | 2 | The paper reports qualitative effects of alpha-methyldopa on steroidogenesis (increased E2/T) at specific concentrations but does not provide numeric PD parameters (e.g., EC50, Emax) or a fitted dose-response curve for the drug. |
| popPK | Finnerty_1985 | irrelevant | 0 | 0 | The paper is a review of drug-induced photosensitivity and does not contain any pharmacokinetic data for methyldopa. |
| popPK | Grange_2001 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of L-dopa and benserazide in rats, not methyldopa. |
| popPK | Harder_1995 | irrelevant | 0 | 0 | The paper focuses on levodopa pharmacokinetics and dynamics in Parkinson's disease, and methyldopa is not the subject drug. |
| PD | Harder_1995 | not_relevant | 1 | 0 | The paper discusses levodopa, not methyldopa, and provides only qualitative descriptions of concentration-effect relationships without specific numeric PD parameters for the target drug. |
| popPK | Hollister_1981 | irrelevant | 0 | 0 | The paper is a review of antidepressant drugs and only mentions methyldopa in the context of drug interactions, without providing any pharmacokinetic parameters for it. |
| popPK | Holmes_1983 | irrelevant | 0 | 0 | The paper is a review of guanabenz, and methyldopa is only mentioned as a comparator agent without providing any quantitative pharmacokinetic parameters for methyldopa. |
| PGx | Hyland_2020 | not_relevant | 0 | 0 | The paper focuses on the prevalence of aromatic L-amino acid decarboxylase (AADC) deficiency in a clinical population and does not report pharmacogenomic effects on the PK/PD of methyldopa. |
| popPK | Johnston_1992 | irrelevant | 0 | 0 | The paper is a clinical review on dosing strategies for antihypertensive drugs and does not report any pharmacokinetic parameters (clearance, volume, half-life, etc.) for methyldopa. |
| popPK | Jorga_1997 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of tolcapone and its effect on levodopa, with no data for methyldopa. |
| popPK | Jorga_1998 | irrelevant | 1 | 0 | The study investigates the pharmacokinetics of tolcapone and its effect on levodopa, not methyldopa. |
| popPK | Jorga_2000 | irrelevant | 1 | 0 | The study focuses on the pharmacokinetics of levodopa (and its metabolite 3-O-methyldopa), not methyldopa. |
| popPK | KIRKENDALL_1962 | irrelevant | 0 | 0 | The paper is a clinical review of blood pressure effects and mechanisms of action for methyldopa and other antihypertensives, but it does not report quantitative pharmacokinetic parameters (clearance, volume, half-life, etc.) for the drug. |
| popPK | Kaakkola_2000 | irrelevant | 0 | 0 | The paper is a review on COMT inhibitors and levodopa, mentioning methyldopa only as a list item of enzyme substrates without reporting any pharmacokinetic parameters. |
| popPK | Kang_2010 | irrelevant | 0 | 0 | The study investigates the effects of EGCG on levodopa (L-DOPA) metabolism and neuroprotection, not methyldopa pharmacokinetics. |
| PD | Kang_2010 | not_relevant | 0 | 0 | The paper investigates the effects of EGCG on Levodopa metabolism and neuroprotection, but does not report any pharmacodynamic or exposure-response relationship for Methyldopa. |
| popPK | Kaye_2019 | irrelevant | 1 | 0 | This is a clinical review article on the management of cardiovascular disease in pregnancy; it lists qualitative PK changes and dosing for methyldopa but does not report original quantitative PK parameters like clearance or volume. |
| popPK | Kwan_1976 | relevant | 10 | 2 | The study reports a two-compartment PK model for methyldopa in humans, but the specific numeric parameter values (CL, V, ka, t1/2) are not listed in the provided abstract/evidence text. |
| popPK | LeWitt_2023 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of levodopa and opicapone in Parkinson's disease; methyldopa is not the subject drug and no methyldopa data are reported. |
| PGx | Luizon_2017 | not_relevant | 5 | 6 | The paper is a review discussing pharmacogenetics in pre-eclampsia, and while it mentions methyldopa, it does not report a specific quantitative PK/PD parameter change for methyldopa resulting from a gene variant in the provided text/tables. |
| popPK | Markowitz_1995 | irrelevant | 0 | 0 | The paper is a clinical review of drug-drug interactions between antipsychotics and antihypertensives, using methyldopa only as a co-administered agent to discuss hypotensive effects and adverse reactions, without reporting any quantitative pharmacokinetic parameters for methyldopa itself. |
| popPK | Nissinen_1992 | irrelevant | 0 | 0 | The study focuses on the pharmacology of entacapone (a COMT inhibitor) and its effect on L-dopa metabolism, not on the pharmacokinetic disposition parameters (CL, V, t1/2) of methyldopa itself. |
| popPK | Nunes_2009 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of levodopa and nebicapone in healthy subjects, not methyldopa. |
| PD | Nunes_2009 | not_relevant | 0 | 0 | The paper investigates the pharmacokinetics and pharmacodynamics of nebicapone and levodopa, not methyldopa. |
| popPK | Nutt_1997 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of levodopa and large neutral amino acids in Parkinson's disease, with 3-O-methyldopa (a metabolite of levodopa) serving as a covariate, not the drug methyldopa. |
| popPK | Nyholm_2002 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of levodopa and its metabolite 3-O-methyldopa, not methyldopa. |
| popPK | ONESTI_1962 | irrelevant | 1 | 0 | The study reports hemodynamic and blood pressure responses to methyldopa but does not provide any pharmacokinetic disposition parameters (e.g., clearance, volume, half-life). |
| PD | ONESTI_1962 | not_relevant | 4 | 3 | The study describes a small-n (n=12) dose-response analysis (2.0 vs 2.5g) with measured hemodynamic effects, but the provided text does not contain the specific numeric parameter values (e.g., specific drops in BP, CO, or RBF) required to derive a quantitative PD curve. |
| popPK | ONESTI_1964 | irrelevant | 0 | 0 | This is a hemodynamic study (blood pressure, cardiac output, renal blood flow) rather than a pharmacokinetic study, and no PK parameters like clearance, volume, or half-life of methyldopa are reported. |
| PD | ONESTI_1964 | not_relevant | 3 | 1 | The study reports qualitative hemodynamic changes following a single dose but does not provide concentration data or numeric parameters (like Emax or EC50) to derive a quantitative exposure-response relationship. |
| PGx | Ozsvár_2010 | not_relevant | 2 | 2 | The paper discusses CYP3A4 phenotyping to adjust the dose of nifedipine (a different drug), but does not report genetic variants altering the PK or PD of methyldopa itself. |
| popPK | Piepho_1991 | irrelevant | 0 | 0 | The paper is a review of pharmacokinetics in the elderly that mentions methyldopa only in the summary and table of contents, but the provided text does not contain the specific section or any quantitative disposition parameters for methyldopa. |
| popPK | Porto_2021 | irrelevant | 0 | 0 | The study evaluates the in vitro antiparasitic activity (EC50/EC90) of methyldopa against Schistosoma mansoni, not its pharmacokinetic disposition parameters. |
| popPK | Qi_2015 | irrelevant | 1 | 1 | The study focuses on the pharmacokinetics of Salvianolic acid B and L-DOPA (measuring L-DOPA and its metabolite 3-OMD), not methyldopa. |
| popPK | Reilly_1983 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of levodopa and its metabolite 3-O-methyldopa, not the pharmacokinetic parameters (CL, V, etc.) of the drug methyldopa itself. |
| popPK | Ripka_1965 | irrelevant | 0 | 0 | no_text gate: only 59 chars of text extracted (&lt; 400) |
| PD | Ripka_1965 | not_relevant | 0 | 0 | The provided text contains only the title of the paper and lacks the full text, abstract, or data required to determine if numeric PD parameters or exposure-response relationships are reported. |
| popPK | Schultz_1990 | irrelevant | 0 | 0 | The study measures in-vitro enzyme kinetics (COMT and AADC) for L-dopa, not the pharmacokinetic parameters (CL, V, etc.) for methyldopa. |
| PD | Schultz_1990 | not_relevant | 0 | 0 | The paper studies the metabolism of L-dopa to 3-O-methyldopa and reports enzyme activities and IC50 values for COMT inhibitors, but it does not report a pharmacodynamic exposure-response or dose-response relationship for the drug Methyldopa itself. |
| popPK | Schwartz_2004 | irrelevant | 0 | 0 | The paper is a pharmacogenetics review discussing genetic polymorphisms (e.g., COMT) that influence methyldopa metabolism, but it does not report quantitative pharmacokinetic parameters (CL, V, etc.) for methyldopa. |
| PGx | Schwartz_2004 | not_relevant | 2 | 0 | The text mentions COMT variants affect methyldopa metabolism (PK) but explicitly states they have not been shown to influence the antihypertensive effect, and provides no specific quantitative data or fitted effect sizes. |
| popPK | Singh_1985 | irrelevant | 0 | 0 | The paper is a review of acebutolol, mentioning methyldopa only as a comparator drug in clinical trials without providing any PK parameters for methyldopa. |
| popPK | Trocóniz_1998 | irrelevant | 0 | 0 | no_text gate: only 105 chars of text extracted (&lt; 400) |
| PD | Trocóniz_1998 | not_relevant | 0 | 0 | The paper focuses on levodopa and entacapone, not methyldopa. |
| popPK | Vaz-da-Silva_2008 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of levodopa and its metabolite 3-O-methyldopa (a distinct compound from methyldopa), with methyldopa not being the subject drug. |
| popPK | WEIL_1963 | irrelevant | 0 | 0 | The study examines hemodynamic and renal effects (blood pressure, cardiac output, creatinine clearance) of methyldopa but does not report pharmacokinetic parameters like clearance, volume of distribution, or half-life for the drug itself. |
| PGx | Weinshilboum_1984 | not_relevant | 2 | 0 | The text states that COMT activity correlates with the methyl conjugation of methyldopa but does not report specific pharmacokinetic or pharmacodynamic parameter changes for methyldopa in the provided text. |
| popPK | Wu_1999 | irrelevant | 0 | 0 | no_text gate: only 109 chars of text extracted (&lt; 400) |
| PD | Wu_1999 | not_relevant | 0 | 0 | The paper focuses on levodopa and 3-O-methyldopa, not Methyldopa. |
| PGx | Yamamoto_2021 | not_relevant | 0 | 0 | The study investigates the pharmacokinetics of l-dopa (not methyldopa) and its metabolite 3-O-methyldopa in the presence of entacapone; therefore, it does not report a pharmacogenomic effect on the PK/PD of methyldopa. |
| PGx | de_2017 | not_relevant | 1 | 2 | The study characterizes autoimmune features of methyldopa-induced liver injury and notes the absence of specific HLA allele associations, but does not report a change in pharmacokinetic (PK) or pharmacodynamic (PD) parameters based on genotype. |
| popPK | van_1988 | irrelevant | 0 | 0 | The study investigates the mechanism of action (opioid receptor involvement) of alpha-methyldopa in rats, not its pharmacokinetic disposition parameters. |
| PD | van_1988 | not_relevant | 4 | 2 | The paper describes a dose-response relationship and antagonist shift but does not provide numeric PD parameters (e.g., ED50, Emax) or data points in the text to derive them. |
| popPK | van_2022 | irrelevant | 2 | 0 | This is a systematic review and the only methyldopa data provided are fetal/maternal and amniotic/maternal concentration ratios, not quantitative disposition parameters (CL, V, half-life) for the drug. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-10 17:23 UTC</sub>
