<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02A&quot;,&quot;href&quot;:&quot;atc/N02A.md&quot;},{&quot;label&quot;:&quot;tilidine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Tilidine_Ringwelski1975_reference&quot;,&quot;label&quot;:&quot;Ringwelski_1975_reference&quot;,&quot;href&quot;:&quot;drugs/drug_tilidine/Tilidine_Ringwelski1975_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# tilidine

- **generic name:** tilidine
- **ATC codes:** `N02AX01`, `N02AX51`
- **DrugBank:** [DB13787](https://go.drugbank.com/drugs/DB13787)
- **groups:** investigational

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-20 21:47 | 7:23 | 0/1/0 | 0/1/0 | 0/0/1 | 181,752/8,884 | ollama / qwen3.8:27b-mtp-q8_0 | 24 | 12/12 | 23/1 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Ringwelski_1975_reference](drugs/drug_tilidine/Tilidine_Ringwelski1975_reference.md) | Ringwelski L, [Analog computer analysis of radioactiv…, International journal of cl… (1975) | — |

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | [Bryant_1982](drugs/drug_tilidine/pd_Bryant_1982_unknown.md) | Bryant RM et al., Involvement of the median raphe nucleus…, British journal of pharmaco… (1982) | [10.1111/j.1476-5381.1982.tb09339.x](https://doi.org/10.1111/j.1476-5381.1982.tb09339.x) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **CYP2C19** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | formation | [Grün_2012](drugs/drug_tilidine/pgx_Gr_n_2012_CYP2C19_Q100.md) | Grün B et al., Contribution of CYP2C19 and CYP3A4 to t…, British journal of clinical… (2012) | [10.1111/j.1365-2125.2012.04261.x](https://doi.org/10.1111/j.1365-2125.2012.04261.x) |

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Coverage

- **PubMed hits:** 172 matched, 58 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ringwelski_1975.pdf` | Ringwelski L, [Analog computer analysis of radioactiv…, International journal of cl… (1975) | popPK | 10 | not captured | [1140877](https://pubmed.ncbi.nlm.nih.gov/1140877) | The paper reports quantitative compartmental PK parameters (half-lives for absorption, transport, resorption, and elimination) for tilidine derived from an analog computer model. |
| `Brennscheidt_2007.pdf` | Brennscheidt U et al., Pharmacokinetics of tilidine and naloxo…, Arzneimittel-Forschung (2007) | popPK | 9 | [10.1055/s-0031-1296591](https://doi.org/10.1055/s-0031-1296591) | [17396621](https://pubmed.ncbi.nlm.nih.gov/17396621) | The study reports quantitative PK parameters for tilidine and its metabolites in hepatic impairment, but the evidence only provides relative changes (percentages/factors) compared to healthy volunteers rather than absolute numeric values for clearance, volume, or half-life. |
| `Eichbaum_2015.pdf` | Eichbaum C et al., Pre-systemic elimination of tilidine: l…, Basic & clinical pharmacolo… (2015) | pgx | 7 | [10.1111/bcpt.12328](https://doi.org/10.1111/bcpt.12328) | [25223231](https://www.ncbi.nlm.nih.gov/pubmed/25223231) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Weiss_2008.pdf` | Weiss J et al., In vitro metabolism of the opioid tilid…, Naunyn-Schmiedeberg's archi… (2008) | pgx | 7 | [10.1007/s00210-008-0294-7](https://doi.org/10.1007/s00210-008-0294-7) | [18516595](https://www.ncbi.nlm.nih.gov/pubmed/18516595) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Wustrow_2012.pdf` | Wustrow I et al., In vitro identification of the cytochro…, Naunyn-Schmiedeberg's archi… (2012) | pgx | 7 | [10.1007/s00210-012-0737-z](https://doi.org/10.1007/s00210-012-0737-z) | [22349139](https://www.ncbi.nlm.nih.gov/pubmed/22349139) | metadata signals extractable PGX data (CYP2C19, PK/PD-context) |

<sub>queue written 2026-09-20T21:42:15.917305+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Baradaran_2025 | irrelevant | 0 | 0 | The paper describes an optical coherence tomography imaging system and contains no pharmacokinetic data or information regarding tilidine. |
| popPK | Brennscheidt_2000 | irrelevant | 2 | 0 | The study focuses on the pharmacokinetics of the metabolite nortilidine and naloxone rather than tilidine itself, and no quantitative PK parameter values are provided in the evidence. |
| popPK | Brennscheidt_2007 | relevant | 9 | 2 | The study reports quantitative PK parameters for tilidine and its metabolites in hepatic impairment, but the evidence only provides relative changes (percentages/factors) compared to healthy volunteers rather than absolute numeric values for clearance, volume, or half-life. |
| popPK | Chiappini_2021 | irrelevant | 0 | 0 | The paper is a cross-sectional epidemiological study on opioid dependence prevalence in the elderly and does not report any pharmacokinetic parameters for tilidine. |
| popPK | Chue-Sang_2019 | irrelevant | 0 | 0 | The paper is a review of optical phantoms for biomedical polarimetry and does not contain any pharmacokinetic data or parameters for tilidine. |
| popPK | Cook_1988 | irrelevant | 0 | 0 | The paper is a neurophysiology study on fetal lambs investigating evoked potentials and does not involve tilidine or pharmacokinetic parameters. |
| popPK | Cordonnier_1987 | irrelevant | 2 | 0 | The paper is a forensic toxicology case report describing a fatal poisoning and qualitative/quantitative analysis of tissues, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Cottrill_2021 | irrelevant | 0 | 0 | The paper is a pharmacogenomic study analyzing genetic polymorphisms for drug metabolism and does not report any quantitative pharmacokinetic parameters (e.g., clearance, volume, half-life) for tilidine. |
| PGx | Cottrill_2021 | not_relevant | 0 | 0 | The paper reports genotype/phenotype profiling for drug metabolism but does not measure or report specific pharmacokinetic or pharmacodynamic parameter changes for tilidine. |
| popPK | Dubinsky_1975 | irrelevant | 0 | 0 | no_text gate: only 109 chars of text extracted (&lt; 400) |
| PGx | Eichbaum_2015 | not_relevant | 0 | 0 | The study investigates the effect of CYP3A4 inhibitors/activators (grapefruit juice, efavirenz) on tilidine PK, not the effect of genetic variants (pharmacogenomics). |
| popPK | Feng_2017 | irrelevant | 1 | 0 | The paper is a narrative review of opioid drug interactions that mentions tilidine only as a drug involved in interactions with antimycotics and protease inhibitors, without reporting any original quantitative pharmacokinetic parameters (CL, V, etc.) for tilidine. |
| popPK | Freye_2000 | irrelevant | 0 | 0 | The study is a pharmacodynamic evaluation of oral-caecal transit and pupillary light reflex, reporting no pharmacokinetic parameters for tilidine. |
| popPK | GIESE_1961 | irrelevant | 0 | 0 | The paper is a study on the regeneration of the protozoan Blepharisma undulans and contains no information regarding the drug tilidine or pharmacokinetic parameters. |
| popPK | Gailevičius_2020 | irrelevant | 0 | 0 | The paper is a materials science study on the optical birefringence of black silicon surfaces and contains no pharmacokinetic data for tilidine. |
| popPK | Giorgetti_2024 | irrelevant | 0 | 0 | The paper is a forensic case report on novel synthetic opioids (U-47700, MeACF) where tilidine is only a co-administered drug without specific PK parameter reporting. |
| PD | Grün_2009 | not_relevant | 3 | 2 | The study reports PK parameters and qualitative changes in analgesic effect (pain thresholds) using non-parametric ANOVA, but does not provide a concentration-effect model or numeric PD parameters (e.g., EC50, Emax) for tilidine. |
| PGx | Grün_2009 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction (voriconazole) rather than a pharmacogenomic effect (gene variant/genotype). |
| popPK | Hankemeier_1991 | irrelevant | 0 | 0 | The paper is a clinical analgesia study reporting pain scores and rescue medication usage, not a pharmacokinetic study with quantitative disposition parameters for tilidine. |
| popPK | Hoffmeister_1988 | irrelevant | 0 | 0 | The study is a behavioral pharmacology experiment assessing stimulus effects and generalization in monkeys, not a pharmacokinetic study reporting disposition parameters for tilidine. |
| popPK | Hristova_2024 | irrelevant | 0 | 0 | The paper is a theoretical optics study on polarization retarders and contains no pharmacokinetic data or mention of tilidine. |
| popPK | Högger_1999 | irrelevant | 1 | 0 | The study is a clinical efficacy trial for pain relief that does not report quantitative pharmacokinetic parameters (CL, V, ka, etc.) for tilidine. |
| PD | Högger_1999 | not_relevant | 2 | 1 | The study reports qualitative efficacy rankings and mentions plasma levels but does not provide numeric concentration-effect data, dose-response curves, or PD parameters for tilidine. |
| PD | Högger_2000 | not_relevant | 2 | 1 | The study reports a qualitative correlation between plasma epinephrine levels and adverse effects (vertigo) but does not provide numeric PD parameters (e.g., EC50, Emax) or a quantitative concentration-effect model for the analgesic or adverse effect. |
| popPK | Jage_2008 | irrelevant | 0 | 0 | The paper is a clinical review of analgesic drugs and does not report original quantitative pharmacokinetic parameters for tilidine. |
| popPK | Jage_2008_2 | irrelevant | 0 | 0 | The paper is a clinical review of perioperative analgesia and does not report original quantitative pharmacokinetic parameters for tilidine. |
| popPK | Jasinski_1986 | irrelevant | 0 | 0 | The study focuses on subjective abuse potential and toxicity, reporting no quantitative pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Jobski_2024 | irrelevant | 0 | 0 | The paper is a clinical cohort study analyzing pain medication regimens and utilization patterns, not a pharmacokinetic study, and contains no PK parameters for tilidine. |
| popPK | Kleine-Borgmann_2021 | irrelevant | 0 | 0 | The study is a pharmacodynamic analysis of analgesic efficacy and safety in a cold pressor test, reporting no pharmacokinetic parameters (e.g., clearance, volume, half-life) for tilidine. |
| popPK | Krüger_2014 | irrelevant | 0 | 0 | The paper is an internet analysis of opioid misuse and does not report any pharmacokinetic parameters for tilidine. |
| popPK | Leary_1976 | irrelevant | 0 | 0 | The paper is a clinical efficacy study comparing pain relief and does not report any pharmacokinetic parameters for tilidine. |
| popPK | Lien_2022 | irrelevant | 0 | 0 | The paper is a biophotonics study on collagen glycation and birefringence, containing no pharmacokinetic data or mention of tilidine. |
| popPK | Lötsch_2005 | irrelevant | 1 | 0 | The paper is a review of opioid metabolism and active metabolites, mentioning tilidine only as a prodrug example without providing any quantitative pharmacokinetic parameters for tilidine itself. |
| popPK | Maalouli_2024 | irrelevant | 0 | 0 | The study is an analytical method development for detecting drugs in exhaled breath aerosol and does not report pharmacokinetic parameters for tilidine. |
| popPK | Naoumkina_2024 | irrelevant | 0 | 0 | The paper is a review on naturally colored cotton and textile applications, containing no pharmacokinetic data for tilidine. |
| popPK | Oldenbourg_1998 | irrelevant | 0 | 0 | The paper describes birefringence measurements of microtubules using polarized light microscopy and contains no pharmacokinetic data for tilidine. |
| popPK | Radbruch_2013 | irrelevant | 0 | 0 | The paper is a review on the abuse and misuse potential of tilidine and does not report any quantitative pharmacokinetic parameters. |
| popPK | Richards_2022 | irrelevant | 0 | 0 | The paper is a global epidemiological study of opioid consumption rates and does not report any pharmacokinetic parameters for tilidine. |
| popPK | Romagnoli_1975 | irrelevant | 0 | 0 | The study focuses on respiratory depression and pharmacodynamics, not pharmacokinetic parameters like clearance or volume. |
| popPK | Saarnivaara_1980 | irrelevant | 0 | 0 | no_text gate: only 139 chars of text extracted (&lt; 400) |
| popPK | Schutter_2010 | irrelevant | 0 | 0 | The study is a clinical efficacy trial for buprenorphine where tilidine is only mentioned as a previous comparator therapy, with no pharmacokinetic parameters reported. |
| popPK | Schutter_2010_2 | irrelevant | 0 | 0 | no_text gate: only 172 chars of text extracted (&lt; 400) |
| popPK | Shah_2016 | irrelevant | 0 | 0 | The paper is a review on low protein diet management in chronic kidney disease and does not contain any pharmacokinetic data or parameters for tilidine. |
| popPK | Sommer_2024 | irrelevant | 0 | 0 | The paper is a pharmacovigilance study analyzing adverse drug reactions (falls and bleeding) using regression models, not a pharmacokinetic study, and contains no PK parameters for tilidine. |
| PD | Sommer_2024 | not_relevant | 0 | 0 | The paper analyzes adverse drug reaction risk using regression models on polypharmacy data, not pharmacodynamic exposure-response or dose-response relationships. |
| popPK | Tegeder_1999 | irrelevant | 0 | 0 | The paper is a review discussing opioid metabolism in liver disease and mentions tilidine only qualitatively regarding its dependence on active metabolites, without reporting any quantitative pharmacokinetic parameters. |
| popPK | Trojan_1978 | irrelevant | 0 | 0 | The paper is a review of tilidine abuse and dependence without reporting original quantitative pharmacokinetic parameters. |
| popPK | Vollmer_1976 | irrelevant | 2 | 0 | The study describes qualitative absorption, distribution, and excretion patterns in animals but does not report quantitative pharmacokinetic parameters such as clearance, volume of distribution, or half-life. |
| popPK | Vormfelde_2001 | irrelevant | 0 | 0 | The paper discusses methadone mortality and prevention strategies, mentioning tilidine only as a comparator for naloxone adjuncts, with no pharmacokinetic data. |
| popPK | Wall_2020 | irrelevant | 0 | 0 | The paper is a clinical audit of analgesia prescribing practices and contains no pharmacokinetic data or quantitative disposition parameters for tilidine. |
| popPK | Weber_2020 | irrelevant | 0 | 0 | The paper is a general review of pain therapy in palliative care and does not report any quantitative pharmacokinetic parameters for tilidine. |
| popPK | Weber_2025 | irrelevant | 0 | 0 | The paper is a general review of pain therapy in palliative care and does not report any quantitative pharmacokinetic parameters for tilidine. |
| popPK | Weiss_2008 | irrelevant | 1 | 0 | The study is an in-vitro mechanistic investigation of CYP metabolism and does not report quantitative population pharmacokinetic parameters (CL, V, ka) for tilidine. |
| PGx | Weiss_2008 | not_relevant | 0 | 0 | The study investigates in vitro enzyme kinetics and drug-drug interactions but does not report pharmacogenomic effects of specific gene variants on PK or PD parameters. |
| PGx | Wustrow_2012 | not_relevant | 0 | 0 | The study identifies CYP isozymes involved in tilidine metabolism using in vitro systems but does not report any pharmacogenomic effects (gene variants/genotypes) on PK or PD parameters. |
| popPK | Wörz_1984 | irrelevant | 0 | 0 | The paper discusses morphine therapy for cancer pain and does not contain any pharmacokinetic data or parameters for tilidine. |
| popPK | Zhang_2024 | irrelevant | 0 | 0 | The paper describes a microscopy imaging technique (GROM) and contains no pharmacokinetic data or information regarding the drug tilidine. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_tilidine`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
