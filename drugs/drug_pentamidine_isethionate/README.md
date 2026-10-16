<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01C&quot;,&quot;href&quot;:&quot;atc/P01C.md&quot;},{&quot;label&quot;:&quot;pentamidine isethionate&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;PentamidineIsethionate_Hui2016_reference&quot;,&quot;label&quot;:&quot;Hui_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_pentamidine_isethionate/PentamidineIsethionate_Hui2016_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# pentamidine isethionate

- **generic name:** pentamidine isethionate
- **ATC codes:** `P01CX01`
- **DrugBank:** [DB00738](https://go.drugbank.com/drugs/DB00738) · **PubChem:** [CID 4735](https://pubchem.ncbi.nlm.nih.gov/compound/4735)
- **molar mass:** 340.4195 g/mol (C19H24N4O2) — DrugBank
- **groups:** approved, investigational

## About

Pentamidine isethionate is an antiprotozoal medicine used against leishmaniasis, trypanosomiasis, and pneumocystosis. It is an approved medicine and appears on the WHO essential medicines list, so it remains in use worldwide.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q416206](https://www.wikidata.org/wiki/Q416206) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 19:48 | 6:59 | 0/1/1 | 3/0/0 | 0/0/0 | 474,536/28,033 | einfracz / qwen3.8-27b | 24 | 1/21 | 24/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: unreported model parameter default(s): ka</sub><br><sub>route_to: `scholar`</sub> | [Hui_2016_reference](drugs/drug_pentamidine_isethionate/PentamidineIsethionate_Hui2016_reference.md) | ▶ model + simulator | 1-compartment, oral | 2 | Hui KH et al., Dose Optimization of Efavirenz Based on…, CPT: pharmacometrics & syst… (2016) | [10.1002/psp4.12067](https://doi.org/10.1002/psp4.12067) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.143). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Conte_1991_reference](drugs/drug_pentamidine_isethionate/PentamidineIsethionate_Conte1991_reference.md) | — | 1-compartment (no model) | 0 | Conte JE, Pharmacokinetics of intravenous pentami…, The Journal of infectious d… (1991) | [10.1093/infdis/163.1.169](https://doi.org/10.1093/infdis/163.1.169) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Aviles_2000_total_number_of_microorganisms](drugs/drug_pentamidine_isethionate/pd_Aviles_2000_total_number_of_microorganisms.md) | total number of microorganisms ← pentamidine · direct sigmoid Emax (Hill) effect | — | Aviles P et al., In vitro pharmacodynamic parameters of…, Antimicrobial agents and ch… (2000) | [10.1128/AAC.44.5.1284-1290.2000](https://doi.org/10.1128/AAC.44.5.1284-1290.2000) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by glm-5.3-flash, p(non-human) 1.00).">rat</span> | [Dron_2020_NMDA_receptor_inhibition](drugs/drug_pentamidine_isethionate/pd_Dron_2020_NMDA_receptor_inhibition.md) | NMDA receptor inhibition ← pentamidine · inhibition effect | — | Dron MY et al., Mechanisms of NMDA receptor inhibition…, The European journal of neu… (2020) | [10.1111/ejn.14589](https://doi.org/10.1111/ejn.14589) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Standaert-Vitse_2015_percentage_of_viability_inhibition](drugs/drug_pentamidine_isethionate/pd_Standaert_Vitse_2015_percentage_of_viability_inhibition.md) | percentage of viability inhibition ← pentamidine · direct sigmoid Emax (Hill) effect | — | Standaert-Vitse A et al., SYTO-13, a Viability Marker as a New To…, PloS one (2015) | [10.1371/journal.pone.0130358](https://doi.org/10.1371/journal.pone.0130358) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=pentamidine_isethionate).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | kidney | `CYP3A5` substrate | DrugBank actor |
| metabolism | liver | `CYP2C19` substrate, `CYP2D6` substrate, `CYP3A5` substrate | DrugBank actor |
| metabolism | lung | `CYP1A1` substrate | DrugBank actor |
| metabolism | small intestine | `CYP1A1` substrate, `CYP3A5` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: CYP4A11 (substrate), DNA (intercalation), TPSAB1 (inhibitor), TRDMT1 (other).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 319 matched, 100 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 2  ·  extracted 0  ·  needs_review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Conte_1991.pdf` | Conte JE, Pharmacokinetics of intravenous pentami…, The Journal of infectious d… (1991) | popPK | 10 | [10.1093/infdis/163.1.169](https://doi.org/10.1093/infdis/163.1.169) | [1984463](https://pubmed.ncbi.nlm.nih.gov/1984463) | The study reports quantitative pharmacokinetic parameters (clearance, half-life) for pentamidine in humans, with specific numeric values provided in the evidence text. |

<sub>queue written 2026-10-14T19:43:57.210255+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Afrin_2011 | not_relevant | 4 | 3 | The study reports clinical outcomes and costs associated with CYP2C19 genotypes but does not provide quantitative pharmacokinetic parameters (e.g., AUC, clearance, Cmax) for pentamidine. |
| popPK | Alkhaldi_2025 | irrelevant | 0 | 0 | This is an in vitro pharmacological study testing the antiparasitic efficacy (EC50) of tetralone derivatives, with pentamidine used only as a positive control, not a PK study. |
| PGx | Ameen_2007 | not_relevant | 0 | 0 | The paper is a general review of treatment strategies for cutaneous leishmaniasis and does not report pharmacogenomic effects on pentamidine PK/PD. |
| popPK | Auerbach_2016 | irrelevant | 0 | 0 | The paper is a review of high-throughput screening data for environmental chemicals related to obesity and diabetes, and does not contain pharmacokinetic data for pentamidine isethionate. |
| popPK | Aviles_2000 | irrelevant | 0 | 0 | The study reports in vitro pharmacodynamic parameters (EC50, Emax) and in vivo efficacy (ED50), not pharmacokinetic parameters (CL, V, ka) for pentamidine. |
| popPK | Barreiro-Costa_2021 | irrelevant | 0 | 0 | The study focuses on the synthesis and in vitro biological activity of bis(spiropyrazolone)cyclopropanes for leishmaniasis, and does not contain pharmacokinetic data for pentamidine isethionate. |
| popPK | Bernardino_2006 | irrelevant | 0 | 0 | The study focuses on the synthesis and in vitro leishmanicidal activity of new pyrazole derivatives, using pentamidine only as a comparator drug rather than studying its pharmacokinetics. |
| popPK | Bertin_2023 | irrelevant | 0 | 0 | The paper is a machine learning study on drug synergy screening and does not report pharmacokinetic parameters for pentamidine isethionate. |
| popPK | Biyah_1996 | irrelevant | 0 | 0 | The paper investigates the pharmacodynamic effects of pentamidine on airway smooth muscle, not its pharmacokinetic parameters. |
| popPK | Bustamante_2019 | irrelevant | 2 | 0 | The study focuses on drug repurposing for leishmaniasis and uses pentamidine as a reference/comparator, reporting PK simulations for other candidates rather than quantitative PK parameters for pentamidine. |
| PGx | Bürenheide_2008 | not_relevant | 0 | 0 | The study investigates in vitro CYP450 enzyme inhibition by pentamidine, not the effect of a gene variant on the PK or PD of the drug itself. |
| popPK | Changtam_2010 | irrelevant | 0 | 0 | The study evaluates the antitrypanosomal and antileishmanial activity of curcuminoids in vitro, using pentamidine only as a control for efficacy, with no pharmacokinetic data reported. |
| PGx | Clement_2003 | not_relevant | 0 | 0 | The paper describes the in vitro biotransformation of ximelagatran; pentamidine is mentioned only in the context of the prodrug principle, and no pharmacogenomic data for pentamidine is reported. |
| PGx | Cubeddu_2016 | not_relevant | 0 | 0 | The paper is a general review of drug-induced QT prolongation mechanisms and does not report specific pharmacogenomic effects on pentamidine's PK or PD parameters. |
| popPK | Dardonville_2015 | irrelevant | 0 | 0 | The paper is a structure-activity relationship (SAR) study reporting in vitro antitrypanosomal activity (EC50), not pharmacokinetic parameters. |
| popPK | Fernández-Llaneza_2025 | irrelevant | 0 | 0 | The paper is a review of drugs causing acute kidney injury and lists pentamidine isethionate as a drug of interest in Table 2, but contains no pharmacokinetic parameters. |
| PGx | Fülöp_2026 | not_relevant | 0 | 0 | The paper analyzes the transport of pentamidine analogs by OATP and ABCB1 in vitro and in silico, but does not report pharmacogenomic associations between specific human genetic variants and PK/PD parameters of pentamidine isethionate. |
| popPK | Gangneux_2019 | irrelevant | 0 | 0 | no_text gate: only 297 chars of text extracted (&lt; 400) |
| popPK | Gatti_1996 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for dapsone, not pentamidine isethionate. |
| popPK | Goldsmith_2010 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of the investigational compound CPD-0801 (and its prodrug DB868), using pentamidine only as a reference for antibody development, not as the subject drug. |
| popPK | Grecco_2018 | irrelevant | 0 | 0 | The paper is an in vitro study on antileishmanial neolignans and does not report pharmacokinetic parameters for pentamidine_isethionate, which is only mentioned as a comparator drug with toxicity issues. |
| popPK | Gómez-Pérez_2014 | irrelevant | 0 | 0 | The study investigates the antileishmanial activity and mode of action of pentamidine analogues (specifically VGP-106) in Leishmania parasites, not the pharmacokinetic disposition of pentamidine isethionate. |
| popPK | Hui_2016 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of efavirenz, not pentamidine isethionate. |
| PGx | Jabri_2024 | not_relevant | 0 | 0 | The paper evaluates nano-formulation effects on antiparasitic activity and human cell toxicity, not pharmacogenomic effects on PK/PD. |
| popPK | Jansson-Löfmark_2015 | irrelevant | 0 | 0 | The study characterizes the pharmacokinetics of eflornithine, not pentamidine_isethionate. |
| popPK | Jing_2025 | irrelevant | 0 | 0 | The study analyzes azole antifungal drug safety signals in the FAERS database and does not involve pentamidine isethionate or any pharmacokinetic modeling of it. |
| popPK | Jones_2010 | irrelevant | 0 | 0 | The paper reports in vitro screening of antitrypanosomal compounds where pentamidine is used only as a known positive control, containing no pharmacokinetic parameters for pentamidine. |
| popPK | Kabran_2015 | irrelevant | 0 | 0 | This is an in-vitro pharmacological study of plant compounds where pentamidine is only mentioned as a reference comparator for trypanocidal activity, with no pharmacokinetic parameters reported. |
| popPK | Kayukova_2026 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on the synthesis and in vitro activity of new benzimidazole derivatives, with pentamidine only mentioned as a reference for poor oral bioavailability in the introduction, providing no pharmacokinetic data for pentamidine. |
| PGx | Koon_2023 | not_relevant | 1 | 1 | The study reports no association between CYP2C19 phenotype and pentamidine discontinuation due to side effects, failing to demonstrate a pharmacogenomic effect on a PK/PD parameter. |
| PGx | Latifi_2023 | not_relevant | 0 | 0 | The paper reports in vitro efficacy and cytotoxicity data but contains no information regarding gene variants, genotypes, or pharmacogenomic effects on PK/PD parameters. |
| popPK | Li_2026 | irrelevant | 0 | 0 | The paper is an in vitro study on antibiotic resistance evolution in E. coli, and pentamidine is only mentioned as one of many drugs used to select for resistant strains, not for PK analysis. |
| popPK | Loiseau_1998 | irrelevant | 0 | 0 | The study focuses on the in vitro antifilarial activity of organometallic complexes, not the pharmacokinetic disposition parameters of pentamidine isethionate. |
| popPK | Mendonça_2019 | irrelevant | 0 | 0 | The paper is an in vitro study on the antiparasitic activity of nitro-heterocyclic compounds against Leishmania, with no pharmacokinetic data for pentamidine. |
| PGx | Michalets_2000 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions involving pentamidine but does not report on gene variants or pharmacogenomic effects. |
| popPK | Mollineda-Diogo_2025 | irrelevant | 0 | 0 | The study evaluates new indazole derivatives for leishmaniasis, with pentamidine only mentioned in passing as a known drug, and no PK parameters for pentamidine are reported. |
| popPK | Nicco_2025 | irrelevant | 0 | 0 | The paper is a study protocol for the treatment of Human African Trypanosomiasis with acoziborole and does not report any pharmacokinetic parameters for pentamidine isethionate. |
| popPK | Ojara_2023 | irrelevant | 0 | 0 | This is a systematic review of lactation pharmacokinetics for malaria, tuberculosis, and NTD drugs, and it does not report any data for pentamidine_isethionate. |
| popPK | Oualha_2025 | irrelevant | 0 | 0 | The paper investigates tranylcypromine for Leishmaniases and only mentions pentamidine as a comparator drug, providing no PK data for pentamidine. |
| popPK | Pereira_2025 | irrelevant | 0 | 0 | The paper is a review of hydrazone-containing scaffolds for anti-leishmanial activity and does not report pharmacokinetic parameters for pentamidine isethionate. |
| popPK | Reguera_1994 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of drug efficacy and uptake inhibition in Leishmania, not a pharmacokinetic study reporting disposition parameters (CL, V, t1/2) for pentamidine in a host species. |
| popPK | Reisner_2000 | irrelevant | 0 | 0 | The paper describes the development of an immunoassay (ELISA) for pentamidine and does not report any pharmacokinetic parameters or disposition data. |
| popPK | Ribeiro_2024 | irrelevant | 0 | 0 | The paper studies the antileishmanial activity of letrozole and does not involve pentamidine isethionate pharmacokinetics. |
| popPK | Rosenthal_1992 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic effects of pentamidine in a murine endotoxemia model and does not report any quantitative pharmacokinetic parameters (clearance, volume, half-life). |
| popPK | Seguel_2016 | irrelevant | 0 | 0 | The study is a mechanistic and efficacy investigation of drug combination in T. cruzi and mice, not a pharmacokinetic study, and reports no PK parameters (CL, V, etc.) for pentamidine. |
| popPK | Seifert_2011 | irrelevant | 0 | 0 | This is an in-vitro pharmacodynamic study evaluating drug interactions against Leishmania, not a pharmacokinetic study measuring disposition parameters. |
| popPK | Standaert-Vitse_2015 | irrelevant | 0 | 0 | The paper reports in vitro pharmacodynamic parameters (EC50, Emax) for Pentamidine, not pharmacokinetic parameters (CL, V, ka). |
| popPK | Sun_2008 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study of pentamidine binding to tRNA and does not report any pharmacokinetic parameters. |
| popPK | Taladriz_2012 | irrelevant | 0 | 0 | The study is an in vitro structure-activity relationship analysis of new phosphonium salts, using pentamidine only as a comparator, and reports no pharmacokinetic parameters. |
| popPK | Thao_2014 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological screening of marine natural products against Trypanosoma, where pentamidine is used only as a positive control, and no pharmacokinetic parameters are reported. |
| popPK | Ullman_1989 | irrelevant | 0 | 0 | The paper describes the isolation of drug-resistant Leishmania cell lines and in-vitro cytotoxicity profiles, reporting no pharmacokinetic parameters for pentamidine isethionate. |
| popPK | Wicha_2017 | irrelevant | 0 | 0 | The paper describes a general pharmacodynamic interaction model applied to drug combinations in yeast and does not contain any pharmacokinetic parameters for pentamidine isethionate. |
| PGx | Wong_2009 | not_relevant | 0 | 0 | The study investigates chemosensitization of Leishmania parasites by quinacrine and an apigenin dimer, not the effect of human gene variants on the PK/PD of pentamidine. |
| popPK | Yaima-Yate_2026 | irrelevant | 0 | 0 | The paper is a systematic review of antileishmanial activity of plant extracts (Azadirachta indica and Cnidoscolus spp.) and does not report pharmacokinetic parameters for pentamidine isethionate. |
| popPK | unknown_2015 | irrelevant | 0 | 0 | no_text gate: only 48 chars of text extracted (&lt; 400) |
| popPK | unknown_2018 | irrelevant | 0 | 0 | no_text gate: only 125 chars of text extracted (&lt; 400) |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-14 19:43 UTC</sub>
