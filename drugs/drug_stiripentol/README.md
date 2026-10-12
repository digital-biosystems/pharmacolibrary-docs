<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N03A&quot;,&quot;href&quot;:&quot;atc/N03A.md&quot;},{&quot;label&quot;:&quot;stiripentol&quot;}]"></div>

# stiripentol

- **generic name:** stiripentol
- **ATC codes:** `N03AX17`
- **DrugBank:** [DB09118](https://go.drugbank.com/drugs/DB09118) · **PubChem:** [CID 5311454](https://pubchem.ncbi.nlm.nih.gov/compound/5311454)
- **molar mass:** 234.295 g/mol (C14H18O3) — DrugBank
- **groups:** approved, investigational

## About

Stiripentol is an anticonvulsant drug used to treat epilepsy, notably juvenile myoclonic epilepsy. It is authorised in the European Union and is also under investigation for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q412182](https://www.wikidata.org/wiki/Q412182) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 07:49 | 4:49 | 0/1/0 | 0/0/0 | 0/0/1 | 64,453/3,949 | einfracz / qwen3.8-27b | 5 | 1/4 | 5/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Peigné_2018_reference](drugs/drug_stiripentol/Stiripentol_Peign2018_reference.md) | — | 1-compartment (no model) | 0 | Peigné S et al., Population Pharmacokinetics of Stiripen…, Clinical pharmacokinetics (2018) | [10.1007/s40262-017-0592-7](https://doi.org/10.1007/s40262-017-0592-7) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (?, agreement 0.25). Primary extraction retained.">cross-check: partial</span> | **CYP2C19** | `Q27` · CL/F | metabolism | [Eltanameli_2025](drugs/drug_stiripentol/pgx_Eltanameli_2025_CYP2C19_Q27.md) | Eltanameli B et al., Physiologically Based Pharmacokinetic M…, Journal of personalized med… (2025) | [10.3390/jpm15110549](https://doi.org/10.3390/jpm15110549) |

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

- **PubMed hits:** 72 matched, 49 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_17 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Peigné_2014.pdf` | Peigné S et al., Reassessment of stiripentol pharmacokin…, Epilepsy research (2014) | popPK | 10 | [10.1016/j.eplepsyres.2014.03.009](https://doi.org/10.1016/j.eplepsyres.2014.03.009) | [24725808](https://pubmed.ncbi.nlm.nih.gov/24725808) | The study reports quantitative non-compartmental pharmacokinetic parameters (AUC, t1/2, Vmax, Km) for stiripentol in healthy adult volunteers. |
| `Peigné_2018.pdf` | Peigné S et al., Population Pharmacokinetics of Stiripen…, Clinical pharmacokinetics (2018) | popPK | 10 | [10.1007/s40262-017-0592-7](https://doi.org/10.1007/s40262-017-0592-7) | [28819726](https://pubmed.ncbi.nlm.nih.gov/28819726) | The abstract explicitly provides mean population estimates for CL/F (4.2 L/h) and Vd/F (82 L) with variability, derived from a population PK model. |
| `Shen_1992.pdf` | Shen DD et al., Comparative anticonvulsant potency and…, Epilepsy research (1992) | popPK | 10 | [10.1016/0920-1211(92)90088-b](https://doi.org/10.1016/0920-1211(92)90088-b) | [1526226](https://pubmed.ncbi.nlm.nih.gov/1526226) | The abstract explicitly reports quantitative pharmacokinetic parameters (clearance and half-life) for stiripentol enantiomers in rats. |
| `Klein_2019.pdf` | Klein P et al., Drug-drug interactions and pharmacodyna…, Epilepsy & behavior : E&B (2019) | pd | 5 | [10.1016/j.yebeh.2019.106459](https://doi.org/10.1016/j.yebeh.2019.106459) | [31519475](https://www.ncbi.nlm.nih.gov/pubmed/31519475) | metadata signals extractable PD data (pharmacodynamicmodel) |
| `Chiron_2016.pdf` | Chiron C, Stiripentol and vigabatrin current role…, Expert opinion on pharmacot… (2016) | pgx | 8 | [10.1517/14656566.2016.1161026](https://doi.org/10.1517/14656566.2016.1161026) | [26933940](https://www.ncbi.nlm.nih.gov/pubmed/26933940) | metadata signals extractable PGX data (CYP2C19, PK/PD-context) |
| `Djordjevic_2017.pdf` | Djordjevic N et al., Pharmacokinetics and Pharmacogenetics o…, European journal of drug me… (2017) | pgx | 8 | [10.1007/s13318-016-0397-3](https://doi.org/10.1007/s13318-016-0397-3) | [28064419](https://www.ncbi.nlm.nih.gov/pubmed/28064419) | metadata signals extractable PGX data (CYP1A2*1F, PK/PD-context) |
| `Jaisupa_2025.pdf` | Jaisupa N et al., Cannabidiol metabolism in vitro: the ro…, Xenobiotica; the fate of fo… (2025) | pgx | 8 | [10.1080/00498254.2025.2498696](https://doi.org/10.1080/00498254.2025.2498696) | [40315023](https://www.ncbi.nlm.nih.gov/pubmed/40315023) | metadata signals extractable PGX data (CYP2C19, PK/PD-context) |
| `Kouga_2015.pdf` | Kouga T et al., Effect of CYP2C19 polymorphisms on stir…, Brain & development (2015) | pgx | 8 | [10.1016/j.braindev.2014.04.003](https://doi.org/10.1016/j.braindev.2014.04.003) | [24819914](https://www.ncbi.nlm.nih.gov/pubmed/24819914) | metadata signals extractable PGX data (CYP2C19, PK/PD-context) |
| `Nabbout_2012.pdf` | Nabbout R et al., Stiripentol: an example of antiepilepti…, European journal of paediat… (2012) | pgx | 8 | [10.1016/j.ejpn.2012.04.009](https://doi.org/10.1016/j.ejpn.2012.04.009) | [22695038](https://www.ncbi.nlm.nih.gov/pubmed/22695038) | metadata signals extractable PGX data (CYP2C19, PK/PD-context) |
| `Yamamoto_2020.pdf` | Yamamoto Y et al., Impact of CYP2C19 Phenotypes on Clinica…, Therapeutic drug monitoring (2020) | pgx | 8 | [10.1097/FTD.0000000000000676](https://doi.org/10.1097/FTD.0000000000000676) | [31318844](https://www.ncbi.nlm.nih.gov/pubmed/31318844) | metadata signals extractable PGX data (CYP2C19, PK/PD-context) |
| `Cazali_2003.pdf` | Cazali N et al., Inhibitory effect of stiripentol on car…, British journal of clinical… (2003) | pgx | 7 | [10.1046/j.0306-5251.2003.01919.x](https://doi.org/10.1046/j.0306-5251.2003.01919.x) | [14651727](https://www.ncbi.nlm.nih.gov/pubmed/14651727) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Giraud_2006.pdf` | Giraud C et al., In vitro and in vivo inhibitory effect…, Drug metabolism and disposi… (2006) | pgx | 7 | [10.1124/dmd.105.007237](https://doi.org/10.1124/dmd.105.007237) | [16415114](https://www.ncbi.nlm.nih.gov/pubmed/16415114) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Spina_1996.pdf` | Spina E et al., Clinically significant pharmacokinetic…, Clinical pharmacokinetics (1996) | pgx | 7 | [10.2165/00003088-199631030-00004](https://doi.org/10.2165/00003088-199631030-00004) | [8877250](https://www.ncbi.nlm.nih.gov/pubmed/8877250) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Verdier_2012.pdf` | Verdier MC et al., [Therapeutic drug monitoring of stiripe…, Therapie (2012) | pgx | 7 | [10.2515/therapie/2012014](https://doi.org/10.2515/therapie/2012014) | [22850103](https://www.ncbi.nlm.nih.gov/pubmed/22850103) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Yamamoto_2014.pdf` | Yamamoto Y et al., Impact of cytochrome P450 inducers with…, European journal of clinica… (2014) | pgx | 7 | [10.1007/s00228-014-1719-5](https://doi.org/10.1007/s00228-014-1719-5) | [25048408](https://www.ncbi.nlm.nih.gov/pubmed/25048408) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Zaccara_2021.pdf` | Zaccara G et al., A review of pharmacokinetic drug intera…, Epileptic disorders : inter… (2021) | pgx | 7 | [10.1684/epd.2021.1261](https://doi.org/10.1684/epd.2021.1261) | [33814360](https://www.ncbi.nlm.nih.gov/pubmed/33814360) | metadata signals extractable PGX data (CYP2C9, PK/PD-context) |
| `Yamamoto_2013.pdf` | Yamamoto Y et al., Influence of CYP2C19 polymorphism and c…, Therapeutic drug monitoring (2013) | pgx | 5 | [10.1097/FTD.0b013e318283b49a](https://doi.org/10.1097/FTD.0b013e318283b49a) | [23666564](https://www.ncbi.nlm.nih.gov/pubmed/23666564) | metadata signals extractable PGX data (CYP2C19) |

<sub>queue written 2026-10-07T07:48:23.369653+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Arends_1994 | irrelevant | 3 | 0 | The study is in rats and mentions "elimination half-life" and brain concentration ratios, but the provided evidence contains no quantitative numeric PK parameters (CL, V, ka, specific half-life values) for stiripentol. |
| popPK | Bai_2019 | irrelevant | 0 | 0 | The paper is a medicinal chemistry and preclinical pharmacodynamics study of novel synthetic compounds, where stiripentol serves only as a comparator drug for anticonvulsant activity, with no pharmacokinetic data reported. |
| PGx | Burns_2016 | not_relevant | 0 | 0 | The study focuses on the pharmacokinetics of clobazam and its metabolite, mentioning stiripentol only as a comedication that influences drug-drug interactions, rather than investigating a pharmacogenomic effect on stiripentol. |
| PGx | Cazali_2003 | not_relevant | 0 | 0 | The paper describes drug-drug interactions (DDI) where stiripentol inhibits the metabolism of carbamazepine and saquinavir, rather than a pharmacogenomic effect on stiripentol's own PK/PD. |
| PGx | Chiron_2005 | not_relevant | 1 | 0 | The text describes the drug mechanism and general CYP inhibition interactions, but does not report specific pharmacogenomic gene variants or genotype-specific effects. |
| PGx | Chiron_2007 | not_relevant | 0 | 0 | The paper reviews the pharmacology, efficacy, and safety of stiripentol but does not report any pharmacogenomic studies linking gene variants to its PK or PD parameters. |
| PGx | Chiron_2016 | not_relevant | 0 | 0 | The paper is a narrative review on the roles of stiripentol and vigabatrin, with no quantitative data on a pharmacogenomic effect on PK or PD parameters. |
| PGx | Chiron_2019 | not_relevant | 2 | 2 | The paper mentions pharmacogenetic data supporting the anticonvulsant effect but does not report specific gene variants affecting PK or PD parameters. |
| PGx | Cokley_2022 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions (DPIs) involving stiripentol, not pharmacogenomic effects (gene variant/genotype) on its PK/PD parameters. |
| PGx | Djordjevic_2017 | not_relevant | 0 | 0 | The paper discusses carbamazepine pharmacogenetics, not stiripentol. |
| PGx | Giraud_2006 | not_relevant | 0 | 0 | The paper investigates drug-drug interaction (stiripentol inhibiting clobazam), not a pharmacogenomic effect of a gene variant on stiripentol's PK/PD. |
| PGx | Inoue_2009 | not_relevant | 3 | 5 | The paper reports clinical efficacy and safety of stiripentol in a Japanese population and mentions CYP2C19 mutations in the context of clobazam interaction, but it does not report a specific pharmacogenomic effect (e.g., genotype-specific change) on a stiripentol PK or PD parameter. |
| PGx | Jaisupa_2025 | not_relevant | 0 | 0 | The paper focuses on the metabolism of Cannabidiol and the effects of CYP2C19 genotypes, not on the pharmacokinetics or pharmacodynamics of stiripentol. |
| popPK | Jullien_2015 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for clobazam and N-desmethylclobazam, while stiripentol is only a concomitant medication and its own PK parameters are not reported. |
| popPK | Klein_2019 | irrelevant | 0 | 0 | The study models the pharmacokinetics of clobazam and N-desmethylclobazam; stiripentol is only a co-administered drug used to assess drug-drug interactions on clobazam levels, not the subject of PK parameter estimation. |
| PGx | Levy_1995 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions and CYP isoform specificity for phenytoin and carbamazepine, but does not report pharmacogenomic effects (gene variants) on stiripentol. |
| PGx | Martin_2022 | not_relevant | 0 | 0 | The paper evaluates the pharmacokinetics of fenfluramine and its interaction with stiripentol but does not report a pharmacogenomic effect (gene variant) on stiripentol's PK or PD. |
| PGx | Nabbout_2012 | not_relevant | 3 | 2 | The paper mentions that CYP2C19 polymorphisms affect clobazam metabolism when co-administered with stiripentol, but it does not report pharmacogenomic effects on stiripentol's own PK/PD parameters. |
| PGx | Patsalos_2020 | not_relevant | 0 | 0 | The paper reports drug-drug interactions (pharmacokinetic effects of CBD on stiripentol), but does not investigate or report pharmacogenomic effects (gene variant/genotype/phenotype). |
| PGx | Roberti_2025 | not_relevant | 0 | 0 | The paper is a review focusing on drug-drug interactions and mentions pharmacogenetics only as a future direction without reporting specific gene variant effects on stiripentol PK/PD. |
| PGx | Spina_1996 | not_relevant | 1 | 1 | The paper discusses drug-drug interactions affecting carbamazepine and does not report pharmacogenomic effects on stiripentol PK/PD parameters. |
| popPK | Sun_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacological effects of β-asaronol using zebrafish models, where stiripentol is only used as a comparator agent and no stiripentol PK parameters are reported. |
| popPK | Sun_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacological effects of α-Asaronol, with stiripentol used only as a comparator drug, and no pharmacokinetic parameters for stiripentol are reported. |
| popPK | Tolbert_2019 | irrelevant | 1 | 0 | This is a population pharmacokinetic study of clobazam, and stiripentol is mentioned only as a comparator drug in a previous study, with no quantitative PK parameters provided for it. |
| PGx | Tran_2001 | not_relevant | 0 | 0 | The study investigates the protective effect of stiripentol on acetaminophen toxicity in rats but does not report any pharmacogenomic associations or gene variants affecting stiripentol's PK/PD. |
| PGx | Verdier_2012 | not_relevant | 0 | 0 | The paper describes general pharmacokinetics and therapeutic drug monitoring guidelines for stiripentol but does not report any effects of gene variants or genotypes on its PK or PD parameters. |
| PGx | Yamamoto_2013 | not_relevant | 0 | 0 | The paper discusses Clobazam, not Stiripentol. |
| PGx | Yamamoto_2014 | not_relevant | 0 | 0 | The paper focuses on drug-drug interactions affecting clobazam, not the pharmacogenomics of stiripentol. |
| PGx | Yamamoto_2020 | not_relevant | 4 | 2 | The paper investigates the impact of CYP2C19 genotypes on the pharmacokinetics of clobazam and NCLB (due to stiripentol inhibition) and clinical retention of stiripentol, but does not report pharmacokinetic parameters for stiripentol itself. |
| PGx | Zaccara_2021 | not_relevant | 0 | 0 | The paper reviews drug-drug interactions, specifically involving stiripentol, but does not discuss pharmacogenomic effects (gene variants) on its pharmacokinetic or pharmacodynamic parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 07:48 UTC</sub>
