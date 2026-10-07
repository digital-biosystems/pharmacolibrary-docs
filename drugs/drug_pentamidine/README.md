<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01C&quot;,&quot;href&quot;:&quot;atc/P01C.md&quot;},{&quot;label&quot;:&quot;Pentamidine&quot;}]"></div>

# Pentamidine

- **generic name:** Pentamidine
- **ATC codes:** `P01CX01`
- **DrugBank:** [DB00738](https://go.drugbank.com/drugs/DB00738) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Pentamidine is an antiprotozoal medicine used against leishmaniasis and trypanosomiasis. It is an approved drug, though it also has investigational uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q26841221](https://www.wikidata.org/wiki/Q26841221) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| pentamidine | parent | 340.427 | C19H24N4O2 | PubChem | [4735](https://pubchem.ncbi.nlm.nih.gov/compound/4735) | Conte_1991 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 08:26 | 14:17 | 0/1/0 | 8/0/0 | 0/0/0 | 493,109/20,176 | ollama / glm-5.3-flash | 12 | 0/12 | 12/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Conte_1991_reference](drugs/drug_pentamidine/Pentamidine_Conte1991_reference.md) | — | 1-compartment (no model) | 5 | Conte JE, Pharmacokinetics of intravenous pentami…, The Journal of infectious d… (1991) | [10.1093/infdis/163.1.169](https://doi.org/10.1093/infdis/163.1.169) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Aviles_2000_total_number_of_P_carinii_microorganisms_in_treated_cultures_relative_to_drug_free_cultures](drugs/drug_pentamidine/pd_Aviles_2000_total_number_of_P_carinii_microorganisms_in_trea.md) | total number of P. carinii microorganisms in treated cultures relative to drug-free cultures ← pentamidine · direct sigmoid Emax (Hill) effect | — | Aviles P et al., In vitro pharmacodynamic parameters of…, Antimicrobial agents and ch… (2000) | [10.1128/AAC.44.5.1284-1290.2000](https://doi.org/10.1128/AAC.44.5.1284-1290.2000) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Cox_1992_aggregation](drugs/drug_pentamidine/pd_Cox_1992_aggregation.md) | ADP-induced platelet aggregation in human platelet rich plasma ← pentamidine · inhibition effect | — | Cox D et al., Pentamidine: a non-peptide GPIIb/IIIa a…, Thrombosis and haemostasis (1992) | — |
| <span class="pk-badge pk-badge--green">extracted</span> | [Cox_1992_fibrinogen_binding](drugs/drug_pentamidine/pd_Cox_1992_fibrinogen_binding.md) | 125I-fibrinogen binding to ADP-activated fixed platelets ← pentamidine · inhibition effect | — | Cox D et al., Pentamidine: a non-peptide GPIIb/IIIa a…, Thrombosis and haemostasis (1992) | — |
| <span class="pk-badge pk-badge--green">extracted</span> | [Cox_1992_fibronectin_binding](drugs/drug_pentamidine/pd_Cox_1992_fibronectin_binding.md) | 125I-fibronectin binding to ADP-activated fixed platelets ← pentamidine · inhibition effect | — | Cox D et al., Pentamidine: a non-peptide GPIIb/IIIa a…, Thrombosis and haemostasis (1992) | — |
| <span class="pk-badge pk-badge--green">extracted</span> | [Cox_1992_vWF_binding](drugs/drug_pentamidine/pd_Cox_1992_vWF_binding.md) | 125I-von Willebrand factor binding to ADP-activated fixed platelets ← pentamidine · inhibition effect | — | Cox D et al., Pentamidine: a non-peptide GPIIb/IIIa a…, Thrombosis and haemostasis (1992) | — |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">in vitro</span> | [Kandpal_1995_arginine_transport_uptake_by_L_donovani_promastigotes](drugs/drug_pentamidine/pd_Kandpal_1995_arginine_transport_uptake_by_L_donovani_promast.md) | arginine transport (uptake) by L. donovani promastigotes biomarker turnover ← pentamidine | — | Kandpal M et al., Kinetics and molecular characteristics…, Molecular and biochemical p… (1995) | [10.1016/0166-6851(95)00042-y](https://doi.org/10.1016/0166-6851(95)00042-y) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from keyword rules on the title and abstract — no LLM answer yet).">human + animal</span> | [Kuryshev_2005_hERG_current](drugs/drug_pentamidine/pd_Kuryshev_2005_hERG_current.md) | hERG current reduction after overnight exposure (hERG trafficking block) ← pentamidine · inhibition effect | — | Kuryshev YA et al., Pentamidine-induced long QT syndrome an…, The Journal of pharmacology… (2005) | [10.1124/jpet.104.073692](https://doi.org/10.1124/jpet.104.073692) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Ludewig_1994_growth_on_glucose](drugs/drug_pentamidine/pd_Ludewig_1994_growth_on_glucose.md) | growth on glucose ← pentamidine · inhibition effect | — | Ludewig G et al., Effects of pentamidine isethionate on S…, Antimicrobial agents and ch… (1994) | [10.1128/AAC.38.5.1123](https://doi.org/10.1128/AAC.38.5.1123) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Ludewig_1994_growth_on_glycerol](drugs/drug_pentamidine/pd_Ludewig_1994_growth_on_glycerol.md) | growth on glycerol ← pentamidine · inhibition effect | — | Ludewig G et al., Effects of pentamidine isethionate on S…, Antimicrobial agents and ch… (1994) | [10.1128/AAC.38.5.1123](https://doi.org/10.1128/AAC.38.5.1123) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Ludewig_1994_respiration_by_intact_yeast_cells](drugs/drug_pentamidine/pd_Ludewig_1994_respiration_by_intact_yeast_cells.md) | respiration by intact yeast cells ← pentamidine · inhibition effect | — | Ludewig G et al., Effects of pentamidine isethionate on S…, Antimicrobial agents and ch… (1994) | [10.1128/AAC.38.5.1123](https://doi.org/10.1128/AAC.38.5.1123) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Reguera_1994_putrescine_uptake](drugs/drug_pentamidine/pd_Reguera_1994_putrescine_uptake.md) | Putrescine uptake inhibition in Leishmania infantum promastigotes ← pentamidine · inhibition effect | — | Reguera R et al., Putrescine uptake inhibition by aromati…, Biochemical pharmacology (1994) | [10.1016/0006-2952(94)90316-6](https://doi.org/10.1016/0006-2952(94)90316-6) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">rat</span> | [Reynolds_1993_3H_dizocilpine_binding](drugs/drug_pentamidine/pd_Reynolds_1993_3H_dizocilpine_binding.md) | [3H]dizocilpine binding to rat brain membranes ← pentamidine · direct sigmoid Emax (Hill) effect | — | Reynolds IJ et al., Studies on the effects of several penta…, European journal of pharmac… (1993) | [10.1016/0922-4106(93)90023-3](https://doi.org/10.1016/0922-4106(93)90023-3) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">rat</span> | [Reynolds_1993_Ca2](drugs/drug_pentamidine/pd_Reynolds_1993_Ca2.md) | NMDA- and glycine-induced intracellular Ca2+ changes ← pentamidine · direct sigmoid Emax (Hill) effect | — | Reynolds IJ et al., Studies on the effects of several penta…, European journal of pharmac… (1993) | [10.1016/0922-4106(93)90023-3](https://doi.org/10.1016/0922-4106(93)90023-3) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Thao_2014_T_brucei_growth_inhibition](drugs/drug_pentamidine/pd_Thao_2014_T_brucei_growth_inhibition.md) | T. brucei growth inhibition ← pentamidine · direct sigmoid Emax (Hill) effect | — | Thao NP et al., Secondary metabolites from Vietnamese m…, Molecules (Basel, Switzerla… (2014) | [10.3390/molecules19067869](https://doi.org/10.3390/molecules19067869) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=pentamidine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | kidney | `CYP3A5` substrate | DrugBank actor |
| metabolism | liver | `CYP2C19` substrate, `CYP2D6` substrate, `CYP3A5` substrate | DrugBank actor |
| metabolism | lung | `CYP1A1` substrate | DrugBank actor |
| metabolism | small intestine | `CYP1A1` substrate, `CYP3A5` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: CYP4A11 (substrate), DNA (intercalation), TPSAB1 (inhibitor), TRDMT1 (other).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 319 matched, 56 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_8 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Conte_1991.pdf` | Conte JE, Pharmacokinetics of intravenous pentami…, The Journal of infectious d… (1991) | popPK | 10 | [10.1093/infdis/163.1.169](https://doi.org/10.1093/infdis/163.1.169) | [1984463](https://pubmed.ncbi.nlm.nih.gov/1984463) | Human IV pentamidine PK with numeric CL, half-life, and compartmental model values reported directly in the abstract. |
| `Berger_1993.pdf` | Berger BJ et al., Polyamine and pentamidine metabolism in…, Acta tropica (1993) | pd | 5 | [10.1016/0001-706x(93)90094-r](https://doi.org/10.1016/0001-706x(93)90094-r) | [7902659](https://www.ncbi.nlm.nih.gov/pubmed/7902659) | metadata signals extractable PD data (IC50) |
| `Aréchiga-Figueroa_2017.pdf` | Aréchiga-Figueroa IA et al., High-potency block of Kir4.1 channels b…, European journal of pharmac… (2017) | pd | 4 | [10.1016/j.ejphar.2017.10.009](https://doi.org/10.1016/j.ejphar.2017.10.009) | [28993158](https://www.ncbi.nlm.nih.gov/pubmed/28993158) | metadata signals extractable PD data (IC50) |
| `Dron_2020.pdf` | Dron MY et al., Mechanisms of NMDA receptor inhibition…, The European journal of neu… (2020) | pd | 4 | [10.1111/ejn.14589](https://doi.org/10.1111/ejn.14589) | [31605636](https://www.ncbi.nlm.nih.gov/pubmed/31605636) | metadata signals extractable PD data (IC50) |
| `Reguera_1994.pdf` | Reguera R et al., Putrescine uptake inhibition by aromati…, Biochemical pharmacology (1994) | pd | 4 | [10.1016/0006-2952(94)90316-6](https://doi.org/10.1016/0006-2952(94)90316-6) | [8204103](https://www.ncbi.nlm.nih.gov/pubmed/8204103) | metadata signals extractable PD data (EC50) |
| `Afrin_2011.pdf` | Afrin LB et al., Value of preemptive CYP2C19 genotyping…, Clinical transplantation (2011) | pgx | 8 | [10.1111/j.1399-0012.2011.01399.x](https://doi.org/10.1111/j.1399-0012.2011.01399.x) | [21299635](https://www.ncbi.nlm.nih.gov/pubmed/21299635) | metadata signals extractable PGX data (CYP2C19, PK/PD-context) |
| `Michalets_2000.pdf` | Michalets EL et al., Drug interactions with cisapride: clini…, Clinical pharmacokinetics (2000) | pgx | 7 | [10.2165/00003088-200039010-00004](https://doi.org/10.2165/00003088-200039010-00004) | [10926350](https://www.ncbi.nlm.nih.gov/pubmed/10926350) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Koon_2023.pdf` | Koon A et al., Evaluation of pentamidine tolerability…, Pharmacogenomics (2023) | pgx | 5 | [10.2217/pgs-2023-0093](https://doi.org/10.2217/pgs-2023-0093) | [37846549](https://www.ncbi.nlm.nih.gov/pubmed/37846549) | metadata signals extractable PGX data (CYP2C19) |

<sub>queue written 2026-10-07T08:20:27.568514+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Afrin_2011 | not_relevant | 0 | 0 | Only a title is provided; no PK/PD parameter data or genotype effect for pentamidine is reported or extractable. |
| PGx | Ameen_2007 | not_relevant | 0 | 0 | Review abstract mentions pentamidine toxicity/resistance generally, with no pharmacogenomic effect on PK/PD parameters. |
| popPK | Aviles_2000 | irrelevant | 0 | 0 | Pentamidine is only a comparator in an in vitro pharmacodynamic (EC50) study of sordarin derivatives; no PK disposition parameters are reported. |
| popPK | Bertin_2023 | irrelevant | 0 | 0 | This is an in vitro drug-combination synergy screening study (RECOVER deep learning model) with no pharmacokinetic parameters for pentamidine or any drug. |
| PGx | Bürenheide_2008 | not_relevant | 0 | 0 | In vitro CYP inhibition study of pentamidine; no gene variant/genotype effect on pentamidine PK/PD reported. |
| popPK | Changtam_2010 | irrelevant | 0 | 0 | In-vitro antiprotozoal efficacy study of curcuminoid analogs; pentamidine appears only as a control drug with an EC50, no PK parameters. |
| PGx | Clement_2003 | not_relevant | 0 | 0 | Paper concerns in vitro biotransformation of ximelagatran; pentamidine only mentioned as prodrug principle origin, with no gene variant effect on pentamidine PK/PD. |
| PGx | Cubeddu_2016 | not_relevant | 2 | 3 | Pentamidine is only mentioned as a hERG trafficking disruptor; no gene variant/genotype effect on its PK or PD parameters is reported. |
| popPK | Dardonville_2015 | irrelevant | 0 | 0 | Medicinal chemistry SAR study of trypanocidal compounds; pentamidine only mentioned as transporter reference, no PK parameters. |
| popPK | Fernández-Llaneza_2025 | irrelevant | 0 | 0 | This is a drug-safety/AKI knowledge-integration study; pentamidine appears only in a nephrotoxicity drug list, with no PK parameters reported. |
| PGx | Fülöp_2026 | not_relevant | 3 | 2 | In vitro transporter interaction data for pentamidine analogs; no gene variant/genotype effect on pentamidine PK/PD parameters reported. |
| popPK | Gómez-Pérez_2014 | irrelevant | 0 | 0 | In-vitro antileishmanial efficacy study of pentamidine analogues; no PK disposition parameters for pentamidine. |
| PGx | Jabri_2024 | not_relevant | 0 | 0 | No gene variant/genotype/phenotype effects on pentamidine PK/PD are reported; study concerns nanomaterial drug delivery in Acanthamoeba. |
| popPK | Kabran_2015 | irrelevant | 0 | 0 | Natural product study; pentamidine only appears as a reference comparator in an in-vitro assay, with no PK parameters. |
| popPK | Kayukova_2026 | irrelevant | 0 | 0 | This is a medicinal chemistry synthesis/in vitro screening paper; pentamidine is only mentioned as an example amidine drug, with no PK parameters. |
| PGx | Latifi_2023 | not_relevant | 0 | 0 | In vitro drug susceptibility study with no gene variant/genotype effect on pentamidine PK/PD parameters. |
| popPK | Li_2026 | irrelevant | 0 | 0 | In vitro E. coli resistance-evolution study; pentamidine is only one of many drugs tested, with no PK parameters. |
| popPK | Mendonça_2019 | irrelevant | 0 | 0 | In vitro antileishmanial drug-screening study with no PK parameters for pentamidine (only mentioned as standard therapy). |
| PGx | Michalets_2000 | not_relevant | 0 | 0 | Paper concerns cisapride drug interactions, not pentamidine pharmacogenomics. |
| popPK | Mollineda-Diogo_2025 | irrelevant | 0 | 0 | This is an in vivo efficacy study of indazole derivatives in mice; pentamidine is only mentioned as a comparator drug with no PK parameters reported. |
| popPK | Nicco_2025 | irrelevant | 0 | 0 | Study protocol for acoziborole in gHAT; pentamidine is only mentioned as standard-of-care comparator, no PK parameters. |
| popPK | Oualha_2025 | irrelevant | 0 | 0 | In vitro study of tranylcypromine against Leishmania; pentamidine is only mentioned as a comparator drug, with no PK parameters. |
| popPK | Pereira_2025 | irrelevant | 0 | 0 | This is a medicinal-chemistry review of hydrazone anti-leishmanial scaffolds; pentamidine appears only as a reference comparator with no PK parameters reported. |
| popPK | Reguera_1994 | irrelevant | 0 | 0 | In-vitro Leishmania uptake inhibition study; no PK disposition parameters for pentamidine. |
| popPK | Ribeiro_2024 | irrelevant | 0 | 0 | Study of letrozole for leishmaniasis with no pentamidine PK parameters reported. |
| popPK | Taladriz_2012 | irrelevant | 0 | 0 | In-vitro drug discovery study of phosphonium salts; pentamidine only a comparator, no PK parameters. |
| popPK | Thao_2014 | irrelevant | 0 | 0 | Pentamidine is only an in-vitro assay positive control (EC50 reported), with no PK/disposition parameters. |
| popPK | Ullman_1989 | irrelevant | 0 | 0 | Pentamidine is only mentioned as a comparator antiprotozoal agent in an in-vitro Leishmania resistance study; no PK parameters reported. |
| PGx | Wong_2009 | not_relevant | 2 | 5 | Reports drug-drug synergism (quinacrine/apigenin dimer) reversing pentamidine resistance in Leishmania, not a gene variant/genotype effect on pentamidine PK/PD. |
| popPK | Yaima-Yate_2026 | irrelevant | 0 | 0 | Systematic review of plant-derived antileishmanial compounds; pentamidine is not the subject drug and no PK parameters are reported. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 08:20 UTC</sub>
