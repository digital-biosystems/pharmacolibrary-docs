<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01C&quot;,&quot;href&quot;:&quot;atc/P01C.md&quot;},{&quot;label&quot;:&quot;Pentamidine&quot;}]"></div>

# Pentamidine

- **generic name:** Pentamidine
- **ATC codes:** `P01CX01`
- **DrugBank:** [DB00738](https://go.drugbank.com/drugs/DB00738) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Pentamidine is an antiprotozoal medicine used against leishmaniasis and trypanosomiasis. It is an approved drug, though it also has investigational uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q26841221](https://www.wikidata.org/wiki/Q26841221) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 19:41 | 3:48 | 0/1/0 | 1/0/0 | 0/0/1 | 214,072/13,543 | einfracz / qwen3.8-27b | 12 | 0/12 | 12/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Conte_1991_reference](drugs/drug_pentamidine/Pentamidine_Conte1991_reference.md) | — | 1-compartment (no model) | 0 | Conte JE, Pharmacokinetics of intravenous pentami…, The Journal of infectious d… (1991) | [10.1093/infdis/163.1.169](https://doi.org/10.1093/infdis/163.1.169) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Aviles_2000_total_number_of_microorganisms](drugs/drug_pentamidine/pd_Aviles_2000_total_number_of_microorganisms.md) | total number of microorganisms ← pentamidine · direct sigmoid Emax (Hill) effect | — | Aviles P et al., In vitro pharmacodynamic parameters of…, Antimicrobial agents and ch… (2000) | [10.1128/AAC.44.5.1284-1290.2000](https://doi.org/10.1128/AAC.44.5.1284-1290.2000) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **KCNH2** | `Q321` · EC50 | target | [Cubeddu_2016](drugs/drug_pentamidine/pgx_Cubeddu_2016_KCNH2_Q321.md) | Cubeddu LX, Drug-induced Inhibition and Trafficking…, Current cardiology reviews (2016) | [10.2174/1573403x12666160301120217](https://doi.org/10.2174/1573403x12666160301120217) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=pentamidine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | kidney | `CYP3A5` substrate | DrugBank actor |
| metabolism | liver | `CYP2C19` substrate, `CYP2D6` substrate, `CYP3A5` substrate | DrugBank actor |
| metabolism | lung | `CYP1A1` substrate | DrugBank actor |
| metabolism | small intestine | `CYP1A1` substrate, `CYP3A5` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: CYP4A11 (substrate), DNA (intercalation), KCNH2 (target), TPSAB1 (inhibitor), TRDMT1 (other).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 319 matched, 56 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_8 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Conte_1991.pdf` | Conte JE, Pharmacokinetics of intravenous pentami…, The Journal of infectious d… (1991) | popPK | 10 | [10.1093/infdis/163.1.169](https://doi.org/10.1093/infdis/163.1.169) | [1984463](https://pubmed.ncbi.nlm.nih.gov/1984463) | The abstract reports quantitative pharmacokinetic parameters for pentamidine including clearance (l/h), half-life (h), and a three-compartment model fit in human subjects. |
| `Berger_1993.pdf` | Berger BJ et al., Polyamine and pentamidine metabolism in…, Acta tropica (1993) | pd | 5 | [10.1016/0001-706x(93)90094-r](https://doi.org/10.1016/0001-706x(93)90094-r) | [7902659](https://www.ncbi.nlm.nih.gov/pubmed/7902659) | metadata signals extractable PD data (IC50) |
| `Aréchiga-Figueroa_2017.pdf` | Aréchiga-Figueroa IA et al., High-potency block of Kir4.1 channels b…, European journal of pharmac… (2017) | pd | 4 | [10.1016/j.ejphar.2017.10.009](https://doi.org/10.1016/j.ejphar.2017.10.009) | [28993158](https://www.ncbi.nlm.nih.gov/pubmed/28993158) | metadata signals extractable PD data (IC50) |
| `Dron_2020.pdf` | Dron MY et al., Mechanisms of NMDA receptor inhibition…, The European journal of neu… (2020) | pd | 4 | [10.1111/ejn.14589](https://doi.org/10.1111/ejn.14589) | [31605636](https://www.ncbi.nlm.nih.gov/pubmed/31605636) | metadata signals extractable PD data (IC50) |
| `Reguera_1994.pdf` | Reguera R et al., Putrescine uptake inhibition by aromati…, Biochemical pharmacology (1994) | pd | 4 | [10.1016/0006-2952(94)90316-6](https://doi.org/10.1016/0006-2952(94)90316-6) | [8204103](https://www.ncbi.nlm.nih.gov/pubmed/8204103) | metadata signals extractable PD data (EC50) |
| `Afrin_2011.pdf` | Afrin LB et al., Value of preemptive CYP2C19 genotyping…, Clinical transplantation (2011) | pgx | 8 | [10.1111/j.1399-0012.2011.01399.x](https://doi.org/10.1111/j.1399-0012.2011.01399.x) | [21299635](https://www.ncbi.nlm.nih.gov/pubmed/21299635) | metadata signals extractable PGX data (CYP2C19, PK/PD-context) |
| `Michalets_2000.pdf` | Michalets EL et al., Drug interactions with cisapride: clini…, Clinical pharmacokinetics (2000) | pgx | 7 | [10.2165/00003088-200039010-00004](https://doi.org/10.2165/00003088-200039010-00004) | [10926350](https://www.ncbi.nlm.nih.gov/pubmed/10926350) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Koon_2023.pdf` | Koon A et al., Evaluation of pentamidine tolerability…, Pharmacogenomics (2023) | pgx | 5 | [10.2217/pgs-2023-0093](https://doi.org/10.2217/pgs-2023-0093) | [37846549](https://www.ncbi.nlm.nih.gov/pubmed/37846549) | metadata signals extractable PGX data (CYP2C19) |

<sub>queue written 2026-10-14T19:39:04.313608+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Ameen_2007 | not_relevant | 0 | 0 | The paper is a general review of therapeutic strategies for cutaneous leishmaniasis and does not report any pharmacogenomic studies or gene-variant effects on pentamidine PK/PD. |
| popPK | Aviles_2000 | irrelevant | 0 | 0 | The study reports in vitro pharmacodynamic parameters (EC50) for anti-infective drugs, not pharmacokinetic disposition parameters (CL, V, etc.) for pentamidine. |
| popPK | Bertin_2023 | irrelevant | 0 | 0 | The paper describes an in vitro machine learning platform for identifying synergistic drug combinations in cancer cell lines and does not report pharmacokinetic parameters for pentamidine. |
| PGx | Bürenheide_2008 | not_relevant | 0 | 0 | The study investigates CYP450 inhibitory properties of pentamidine in vitro and does not report any pharmacogenomic effects on its PK or PD parameters. |
| popPK | Changtam_2010 | irrelevant | 0 | 0 | The study reports in vitro anti-protozoal activity (IC50/EC50) of curcuminoids, with pentamidine serving only as a control agent, and contains no pharmacokinetic parameters. |
| PGx | Clement_2003 | not_relevant | 0 | 0 | The paper describes the in vitro biotransformation of ximelagatran, a direct thrombin inhibitor, and only mentions pentamidine historically; it does not report pharmacogenomic effects on pentamidine PK/PD. |
| PGx | Cubeddu_2016 | not_relevant | 5 | 2 | The paper mentions pentamidine's effect on channel trafficking and lists genetic risk factors for arrhythmia, but it is a general review that does not report specific pharmacogenomic genotype-phenotype associations with quantified PK/PD parameters for pentamidine. |
| popPK | Dardonville_2015 | irrelevant | 0 | 0 | This is an in-vitro structure-activity relationship study of novel trypanocides, not a pharmacokinetic study of pentamidine. |
| popPK | Fernández-Llaneza_2025 | irrelevant | 0 | 0 | The paper is a review of drug-induced acute kidney injury signals and databases, mentioning pentamidine only as one of many drugs with AKI potential, without reporting any pharmacokinetic parameters. |
| PGx | Fülöp_2026 | not_relevant | 0 | 0 | The paper describes transporter (OATP/ABCB1) interactions with pentamidine analogs in vitro but does not report pharmacogenomic effects (e.g., specific gene variants/polymorphisms) on human PK or PD parameters. |
| popPK | Gómez-Pérez_2014 | irrelevant | 0 | 0 | The study is an in vitro pharmacological investigation of new antileishmanial compounds using EC50 values and mode of action assays, with no population pharmacokinetic modeling or disposition parameters. |
| PGx | Jabri_2024 | not_relevant | 0 | 0 | The paper investigates nanotechnology-based drug formulation and anti-amoebic efficacy, not pharmacogenomic effects of gene variants on PK/PD parameters. |
| popPK | Kabran_2015 | irrelevant | 0 | 0 | The paper describes the isolation and in-vitro trypanocidal activity of plant compounds, using pentamidine only as a reference standard. |
| popPK | Kayukova_2026 | irrelevant | 0 | 0 | This is a medicinal chemistry study on the synthesis and in vitro biological activity of novel amidoxime derivatives, and pentamidine is only mentioned as a reference drug with general properties, not as the subject of pharmacokinetic analysis. |
| PGx | Koon_2023 | not_relevant | 2 | 5 | The study evaluates CYP2C19 phenotypes but reports no association with PK parameters or clinical PD outcomes (discontinuation/infection) for pentamidine. |
| PGx | Latifi_2023 | not_relevant | 0 | 0 | The study is an in vitro comparison of antimicrobial efficacy and cytotoxicity without any genetic variation or pharmacogenomic analysis. |
| popPK | Li_2026 | irrelevant | 0 | 0 | The study is an in-vitro evolution of antibiotic resistance in Escherichia coli, not a pharmacokinetic study, and does not report PK parameters for pentamidine. |
| popPK | Mendonça_2019 | irrelevant | 0 | 0 | The paper is an in vitro study of the antiparasitic activity of nitro-heterocyclic compounds against Leishmania, mentioning pentamidine only as background context for current treatments without reporting any pharmacokinetic parameters for it. |
| PGx | Michalets_2000 | not_relevant | 0 | 0 | The paper discusses pharmacokinetic and pharmacodynamic drug-drug interactions with cisapride, but does not report any pharmacogenomic effects (gene variants) on the PK or PD parameters of pentamidine. |
| popPK | Mollineda-Diogo_2025 | irrelevant | 0 | 0 | The study evaluates the in vivo antileishmanial efficacy of novel indazole derivatives in mice, mentioning pentamidine only as a general comparator for existing drug toxicity, and provides no pharmacokinetic parameters for pentamidine. |
| popPK | Nicco_2025 | irrelevant | 0 | 0 | The paper is a study protocol for an epidemiological and safety trial of acoziborole for Human African Trypanosomiasis, and pentamidine is only mentioned as a standard of care comparator for confirmed cases, with no pharmacokinetic data reported. |
| popPK | Oualha_2025 | irrelevant | 0 | 0 | The study investigates the in vitro antileishmanial activity of tranylcypromine and only mentions pentamidine as a second-line therapy in the introduction, providing no pharmacokinetic data for pentamidine. |
| popPK | Pereira_2025 | irrelevant | 0 | 0 | The paper is a review of hydrazone scaffolds for Leishmania, and pentamidine is only mentioned as a reference drug for comparing IC50 values, not as the subject of a PK study. |
| popPK | Reguera_1994 | irrelevant | 0 | 0 | The study reports in-vitro biochemical data (putrescine uptake inhibition) for pentamidine, not pharmacokinetic disposition parameters. |
| popPK | Ribeiro_2024 | irrelevant | 0 | 0 | The study investigates the antileishmanial activity of letrozole in vitro and in mice, not the pharmacokinetics of pentamidine. |
| popPK | Taladriz_2012 | irrelevant | 0 | 0 | The paper is an in-vitro structure-activity relationship (SAR) study of new phosphonium compounds, where pentamidine is only used as a reference for resistance and transport inhibition, with no PK parameters reported. |
| popPK | Thao_2014 | irrelevant | 0 | 0 | The paper is an in vitro screening study for anti-trypanosomal activity of marine natural products, where pentamidine is used only as a positive control. |
| popPK | Ullman_1989 | irrelevant | 0 | 0 | The paper is an in-vitro study on Leishmania donovani resistance to Pentostam, and pentamidine is only mentioned as a comparator agent, with no pharmacokinetic data reported. |
| PGx | Wong_2009 | not_relevant | 0 | 0 | The paper investigates pharmacological sensitization of a parasite using chemical compounds, not human pharmacogenomics (gene variants affecting drug response). |
| popPK | Yaima-Yate_2026 | irrelevant | 0 | 0 | The paper is a systematic review on antileishmanial activity of plant compounds, with no pharmacokinetic data for pentamidine. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-14 19:39 UTC</sub>
