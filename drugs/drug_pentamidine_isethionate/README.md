<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01C&quot;,&quot;href&quot;:&quot;atc/P01C.md&quot;},{&quot;label&quot;:&quot;pentamidine isethionate&quot;}]"></div>

# pentamidine isethionate

- **generic name:** pentamidine isethionate
- **ATC codes:** `P01CX01`
- **DrugBank:** [DB00738](https://go.drugbank.com/drugs/DB00738) · **PubChem:** [CID 4735](https://pubchem.ncbi.nlm.nih.gov/compound/4735)
- **molar mass:** 340.4195 g/mol (C19H24N4O2) — DrugBank
- **groups:** approved, investigational

## About

Pentamidine isethionate is an antiprotozoal medicine used against leishmaniasis, trypanosomiasis, and pneumocystosis. It is an approved medicine and appears on the WHO essential medicines list, so it remains in use worldwide.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q416206](https://www.wikidata.org/wiki/Q416206) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| pentamidine (pentamidine_isethionate) | parent | 340.42 | C19H24N4O2 | DrugBank | [4735](https://pubchem.ncbi.nlm.nih.gov/compound/4735) | Conte_1991 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 08:52 | 25:33 | 0/1/0 | 14/2/0 | 0/0/0 | 963,103/39,611 | ollama / glm-5.3-flash | 24 | 1/21 | 24/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Conte_1991_reference](drugs/drug_pentamidine_isethionate/PentamidineIsethionate_Conte1991_reference.md) | — | 1-compartment (no model) | 5 | Conte JE, Pharmacokinetics of intravenous pentami…, The Journal of infectious d… (1991) | [10.1093/infdis/163.1.169](https://doi.org/10.1093/infdis/163.1.169) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Aréchiga-Figueroa_2017_Kir4_1_block](drugs/drug_pentamidine_isethionate/pd_Ar_chiga_Figueroa_2017_Kir4_1_block.md) | Kir4.1 channel current block ← pentamidine · direct sigmoid Emax (Hill) effect | — | Aréchiga-Figueroa IA et al., High-potency block of Kir4.1 channels b…, European journal of pharmac… (2017) | [10.1016/j.ejphar.2017.10.009](https://doi.org/10.1016/j.ejphar.2017.10.009) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Aviles_2000_total_number_of_microorganisms_in_treated_cultures_relative_to_drug_free_cultures_P_carinii](drugs/drug_pentamidine_isethionate/pd_Aviles_2000_total_number_of_microorganisms_in_treated_cultur.md) | total number of microorganisms in treated cultures relative to drug-free cultures (P. carinii) ← pentamidine · direct sigmoid Emax (Hill) effect | — | Aviles P et al., In vitro pharmacodynamic parameters of…, Antimicrobial agents and ch… (2000) | [10.1128/AAC.44.5.1284-1290.2000](https://doi.org/10.1128/AAC.44.5.1284-1290.2000) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (pig), not measured in people (from the LLM relevance screen, p(non-human) 0.50).">pig</span> | [Biyah_1996_contraction](drugs/drug_pentamidine_isethionate/pd_Biyah_1996_contraction.md) | contraction of guinea-pig isolated main bronchi (% of response to acetylcholine 1 mM) ← pentamidine · direct Emax (saturable) effect | — | Biyah K et al., Indirect muscarinic receptor activation…, British journal of pharmaco… (1996) | [10.1111/j.1476-5381.1996.tb16014.x](https://doi.org/10.1111/j.1476-5381.1996.tb16014.x) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (pig), not measured in people (from the LLM relevance screen, p(non-human) 0.50).">pig</span> | [Biyah_1996_contraction_2](drugs/drug_pentamidine_isethionate/pd_Biyah_1996_contraction_2.md) | contraction of human isolated bronchi (% of response to acetylcholine 1 mM) ← pentamidine · direct Emax (saturable) effect | — | Biyah K et al., Indirect muscarinic receptor activation…, British journal of pharmaco… (1996) | [10.1111/j.1476-5381.1996.tb16014.x](https://doi.org/10.1111/j.1476-5381.1996.tb16014.x) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Cox_1992_aggregation](drugs/drug_pentamidine_isethionate/pd_Cox_1992_aggregation.md) | ADP-induced platelet aggregation in platelet rich plasma ← pentamidine · direct sigmoid Emax (Hill) effect | — | Cox D et al., Pentamidine: a non-peptide GPIIb/IIIa a…, Thrombosis and haemostasis (1992) | — |
| <span class="pk-badge pk-badge--green">extracted</span> | [Cox_1992_fibrinogen_binding](drugs/drug_pentamidine_isethionate/pd_Cox_1992_fibrinogen_binding.md) | 125I-fibrinogen binding to ADP-activated fixed platelets ← pentamidine · direct sigmoid Emax (Hill) effect | — | Cox D et al., Pentamidine: a non-peptide GPIIb/IIIa a…, Thrombosis and haemostasis (1992) | — |
| <span class="pk-badge pk-badge--green">extracted</span> | [Cox_1992_fibronectin_binding](drugs/drug_pentamidine_isethionate/pd_Cox_1992_fibronectin_binding.md) | 125I-fibronectin binding to ADP-activated fixed platelets ← pentamidine · direct sigmoid Emax (Hill) effect | — | Cox D et al., Pentamidine: a non-peptide GPIIb/IIIa a…, Thrombosis and haemostasis (1992) | — |
| <span class="pk-badge pk-badge--green">extracted</span> | [Cox_1992_vWF_binding](drugs/drug_pentamidine_isethionate/pd_Cox_1992_vWF_binding.md) | 125I-von Willebrand factor binding to ADP-activated fixed platelets ← pentamidine · direct sigmoid Emax (Hill) effect | — | Cox D et al., Pentamidine: a non-peptide GPIIb/IIIa a…, Thrombosis and haemostasis (1992) | — |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">rat</span> | [Dron_2020_NMDA_inhibition](drugs/drug_pentamidine_isethionate/pd_Dron_2020_NMDA_inhibition.md) | NMDA receptor current inhibition ← pentamidine · inhibition effect | — | Dron MY et al., Mechanisms of NMDA receptor inhibition…, The European journal of neu… (2020) | [10.1111/ejn.14589](https://doi.org/10.1111/ejn.14589) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">mouse</span> | [Durand_1997_percentage_of_parasite_suppression_liver_parasite_burden](drugs/drug_pentamidine_isethionate/pd_Durand_1997_percentage_of_parasite_suppression_liver_parasit.md) | percentage of parasite suppression (liver parasite burden) ← pentamidine · direct sigmoid Emax (Hill) effect | — | Durand R et al., Activity of pentamidine-loaded methacry…, International journal for p… (1997) | [10.1016/s0020-7519(97)00124-0](https://doi.org/10.1016/s0020-7519(97)00124-0) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">in vitro</span> | [Kandpal_1995_arginine_transport_uptake_by_L_donovani_promastigotes](drugs/drug_pentamidine_isethionate/pd_Kandpal_1995_arginine_transport_uptake_by_L_donovani_promast.md) | arginine transport (uptake) by L. donovani promastigotes ← pentamidine · inhibition effect | — | Kandpal M et al., Kinetics and molecular characteristics…, Molecular and biochemical p… (1995) | [10.1016/0166-6851(95)00042-y](https://doi.org/10.1016/0166-6851(95)00042-y) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Mukherjee_2006_IC50](drugs/drug_pentamidine_isethionate/pd_Mukherjee_2006_IC50.md) | growth inhibition of promastigotes (pentamidine susceptibility) ← pentamidine · inhibition effect | — | Mukherjee A et al., Roles for mitochondria in pentamidine s…, Molecular and biochemical p… (2006) | [10.1016/j.molbiopara.2005.08.016](https://doi.org/10.1016/j.molbiopara.2005.08.016) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Reguera_1994_putrescine_uptake_inhibition](drugs/drug_pentamidine_isethionate/pd_Reguera_1994_putrescine_uptake_inhibition.md) | putrescine uptake inhibition ← pentamidine · inhibition effect | — | Reguera R et al., Putrescine uptake inhibition by aromati…, Biochemical pharmacology (1994) | [10.1016/0006-2952(94)90316-6](https://doi.org/10.1016/0006-2952(94)90316-6) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">rat</span> | [Reynolds_1993_3H_dizocilpine_binding](drugs/drug_pentamidine_isethionate/pd_Reynolds_1993_3H_dizocilpine_binding.md) | [3H]dizocilpine binding inhibition to rat brain membranes ← pentamidine · direct sigmoid Emax (Hill) effect | — | Reynolds IJ et al., Studies on the effects of several penta…, European journal of pharmac… (1993) | [10.1016/0922-4106(93)90023-3](https://doi.org/10.1016/0922-4106(93)90023-3) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">rat</span> | [Reynolds_1993_Ca2](drugs/drug_pentamidine_isethionate/pd_Reynolds_1993_Ca2.md) | NMDA- and glycine-induced intracellular Ca2+ changes (fura-2) ← pentamidine · direct sigmoid Emax (Hill) effect | — | Reynolds IJ et al., Studies on the effects of several penta…, European journal of pharmac… (1993) | [10.1016/0922-4106(93)90023-3](https://doi.org/10.1016/0922-4106(93)90023-3) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Rosenthal_1992_protection_from_mortality](drugs/drug_pentamidine_isethionate/pd_Rosenthal_1992_protection_from_mortality.md) | protection from mortality ← pentamidine isethionate · inhibition effect | — | Rosenthal GJ et al., Pentamidine blocks the pathophysiologic…, Toxicology and applied phar… (1992) | [10.1016/0041-008x(92)90191-t](https://doi.org/10.1016/0041-008x(92)90191-t) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Standaert-Vitse_2015_P_carinii_viability_inhibition](drugs/drug_pentamidine_isethionate/pd_Standaert_Vitse_2015_P_carinii_viability_inhibition.md) | P. carinii viability inhibition ← pentamidine · direct sigmoid Emax (Hill) effect | — | Standaert-Vitse A et al., SYTO-13, a Viability Marker as a New To…, PloS one (2015) | [10.1371/journal.pone.0130358](https://doi.org/10.1371/journal.pone.0130358) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Sun_2008_T1_footprinting_protection](drugs/drug_pentamidine_isethionate/pd_Sun_2008_T1_footprinting_protection.md) | Protection of G34 and G36 from T1 ribonuclease cleavage ← pentamidine · direct sigmoid Emax (Hill) effect | — | Sun T et al., Pentamidine binds to tRNA through non-s…, Nucleic acids research (2008) | [10.1093/nar/gkm1180](https://doi.org/10.1093/nar/gkm1180) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Sun_2008_in_vitro_translation](drugs/drug_pentamidine_isethionate/pd_Sun_2008_in_vitro_translation.md) | Luciferase activity from in vitro translation ← pentamidine · direct sigmoid Emax (Hill) effect | — | Sun T et al., Pentamidine binds to tRNA through non-s…, Nucleic acids research (2008) | [10.1093/nar/gkm1180](https://doi.org/10.1093/nar/gkm1180) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Sun_2008_leucylation](drugs/drug_pentamidine_isethionate/pd_Sun_2008_leucylation.md) | Relative activity of LeuRS to charge tRNALeu (aminoacylation) ← pentamidine · direct sigmoid Emax (Hill) effect | — | Sun T et al., Pentamidine binds to tRNA through non-s…, Nucleic acids research (2008) | [10.1093/nar/gkm1180](https://doi.org/10.1093/nar/gkm1180) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Sun_2008_tRNA_binding](drugs/drug_pentamidine_isethionate/pd_Sun_2008_tRNA_binding.md) | Pentamidine binding to tRNALeu (gel shift fraction) ← pentamidine · direct sigmoid Emax (Hill) effect | — | Sun T et al., Pentamidine binds to tRNA through non-s…, Nucleic acids research (2008) | [10.1093/nar/gkm1180](https://doi.org/10.1093/nar/gkm1180) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Thao_2014_T_brucei_EC50](drugs/drug_pentamidine_isethionate/pd_Thao_2014_T_brucei_EC50.md) | T. brucei growth inhibition (pentamidine, positive control) ← pentamidine · direct sigmoid Emax (Hill) effect | — | Thao NP et al., Secondary metabolites from Vietnamese m…, Molecules (Basel, Switzerla… (2014) | [10.3390/molecules19067869](https://doi.org/10.3390/molecules19067869) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Loiseau_1998_EC50](drugs/drug_pentamidine_isethionate/pd_Loiseau_1998_EC50.md) | Infective larvae of Molinema dessetae killed (antifilarial activity) ← Ir(I)-COD-pentamidine tetraphenylborate · direct sigmoid Emax (Hill) effect | — | Loiseau PM et al., In vitro antifilarial activity of organ…, International journal for p… (1998) | [10.1016/s0020-7519(98)00072-1](https://doi.org/10.1016/s0020-7519(98)00072-1) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Wicha_2017_OD600](drugs/drug_pentamidine_isethionate/pd_Wicha_2017_OD600.md) | fungal growth (optical density at 600 nm) ← Pentamidine (Pen) · direct sigmoid Emax (Hill) effect | — | Wicha SG et al., A general pharmacodynamic interaction m…, Nature communications (2017) | [10.1038/s41467-017-01929-y](https://doi.org/10.1038/s41467-017-01929-y) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=pentamidine_isethionate) page (add drugs there; the set becomes a link).

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

- **PubMed hits:** 319 matched, 100 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Conte_1991.pdf` | Conte JE, Pharmacokinetics of intravenous pentami…, The Journal of infectious d… (1991) | popPK | 10 | [10.1093/infdis/163.1.169](https://doi.org/10.1093/infdis/163.1.169) | [1984463](https://pubmed.ncbi.nlm.nih.gov/1984463) | Human PK study of IV pentamidine with numeric CL, half-life, and compartment model values reported directly in the abstract. |

<sub>queue written 2026-10-07T08:41:31.303757+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Alkhaldi_2025 | irrelevant | 0 | 0 | In-vitro antiparasitic drug screening with pentamidine only as a comparator control; no PK parameters for pentamidine. |
| PGx | Ameen_2007 | not_relevant | 0 | 0 | Review abstract mentions pentamidine toxicity/resistance generally, with no pharmacogenomic effect on PK/PD parameters. |
| popPK | Auerbach_2016 | irrelevant | 0 | 0 | This is a ToxCast high-throughput screening review about environmental chemicals and diabetes/obesity; pentamidine is not the subject and no PK parameters appear. |
| popPK | Aviles_2000 | irrelevant | 0 | 0 | Pentamidine is only a comparator in an in vitro pharmacodynamic (EC50) study of sordarin derivatives; no PK disposition parameters for pentamidine are reported. |
| popPK | Barreiro-Costa_2021 | irrelevant | 0 | 0 | This is a medicinal chemistry/in vitro antileishmanial screening study of synthetic spiropyrazolone compounds; pentamidine is only mentioned as a comparator drug with no PK parameters reported. |
| popPK | Bernardino_2006 | irrelevant | 0 | 0 | In-vitro leishmanicidal activity study; pentamidine is only a comparator, no PK parameters. |
| popPK | Bertin_2023 | irrelevant | 0 | 0 | This is an in vitro drug-combination synergy ML study with no pentamidine PK parameters; pentamidine is not even mentioned. |
| popPK | Biyah_1996 | irrelevant | 0 | 0 | In-vitro pharmacodynamic study of pentamidine's bronchoconstrictor effect; no PK disposition parameters reported. |
| popPK | Bustamante_2019 | irrelevant | 1 | 0 | Pentamidine is only mentioned as a comparator; PK simulations focus on perphenazine and rifabutin with no pentamidine disposition parameters reported. |
| PGx | Bürenheide_2008 | not_relevant | 0 | 0 | In vitro CYP inhibition study with no gene variant/genotype effect on pentamidine PK/PD parameters. |
| popPK | Changtam_2010 | irrelevant | 0 | 0 | In-vitro antiprotozoal efficacy study of curcuminoid analogs; pentamidine appears only as a control drug with an EC50, no PK parameters. |
| PGx | Clement_2003 | not_relevant | 0 | 0 | Paper concerns ximelagatran prodrug metabolism; pentamidine only mentioned as historical prodrug example, no gene variant effect on its PK/PD. |
| PGx | Cubeddu_2016 | not_relevant | 2 | 3 | Pentamidine is only mentioned as a hERG trafficking disruptor; no gene variant/genotype effect on its PK or PD parameters is reported. |
| popPK | Dardonville_2015 | irrelevant | 0 | 0 | Medicinal chemistry SAR study of trypanocidal compounds; pentamidine only mentioned as transporter reference, no PK parameters. |
| popPK | Fernández-Llaneza_2025 | irrelevant | 0 | 0 | This is a drug-safety/AKI knowledge-resource study; pentamidine isethionate is only listed among nephrotoxic drugs, with no PK parameters reported. |
| PGx | Fülöp_2026 | not_relevant | 3 | 2 | Study examines transporter-mediated uptake/efflux of pentamidine analogs in vitro, but no gene variant/genotype effect on PK/PD parameters is reported. |
| popPK | Gangneux_2019 | irrelevant | 0 | 0 | no_text gate: only 297 chars of text extracted (&lt; 400) |
| popPK | Gatti_1996 | irrelevant | 0 | 0 | The paper models dapsone, not pentamidine isethionate; pentamidine is not the subject drug. |
| popPK | Goldsmith_2010 | irrelevant | 2 | 1 | Pentamidine is only mentioned as an antibody template; the PK/metabolism data concern CPD-0801/DB868 in rats with no pentamidine disposition parameters reported. |
| popPK | Grecco_2018 | irrelevant | 0 | 0 | In vitro antileishmanial natural-product study; pentamidine only mentioned as a toxic standard drug, no PK parameters for it. |
| popPK | Gómez-Pérez_2014 | irrelevant | 0 | 0 | In-vitro antileishmanial efficacy study of pentamidine analogues; no PK disposition parameters for pentamidine. |
| popPK | Hui_2016 | irrelevant | 0 | 0 | This is a population PK study of efavirenz, not pentamidine isethionate; no pentamidine parameters appear. |
| PGx | Jabri_2024 | not_relevant | 0 | 0 | No pharmacogenomic effects on pentamidine PK/PD are reported; the study examines nanomaterial drug loading against Acanthamoeba. |
| popPK | Jansson-Löfmark_2015 | irrelevant | 0 | 0 | This is a population-PK study of eflornithine, not pentamidine isethionate; pentamidine is not mentioned. |
| popPK | Jing_2025 | irrelevant | 0 | 0 | FAERS pharmacovigilance study of azole-related myopathy with no pentamidine PK parameters; pentamidine not mentioned at all. |
| popPK | Jones_2010 | irrelevant | 0 | 0 | In-vitro antitrypanosomal screening study; pentamidine is only a screening comparator with EC50 values, no PK disposition parameters. |
| popPK | Kabran_2015 | irrelevant | 0 | 0 | Natural products study; pentamidine is only an in-vitro activity comparator, no PK parameters. |
| popPK | Kayukova_2026 | irrelevant | 0 | 0 | This is a medicinal chemistry synthesis and in vitro antimicrobial/antifungal/antidiabetic screening paper; pentamidine is only mentioned as an example amidine drug, with no PK parameters for it. |
| PGx | Latifi_2023 | not_relevant | 0 | 0 | In vitro drug susceptibility/cytotoxicity study with no gene variant or pharmacogenomic effect on PK/PD parameters. |
| popPK | Li_2026 | irrelevant | 0 | 0 | In vitro E. coli evolution study of drug resistance; pentamidine is only one of many tested drugs and no PK parameters are reported. |
| popPK | Loiseau_1998 | irrelevant | 0 | 0 | In vitro antifilarial activity study of organometallic complexes; no PK parameters for pentamidine. |
| popPK | Mendonça_2019 | irrelevant | 0 | 0 | In vitro antiparasitic efficacy study of nitro-heterocyclic compounds; pentamidine is only mentioned as a standard treatment, with no PK parameters. |
| PGx | Michalets_2000 | not_relevant | 0 | 0 | Paper discusses drug-drug interactions with cisapride, not pharmacogenomic effects on pentamidine PK/PD parameters. |
| popPK | Mollineda-Diogo_2025 | irrelevant | 0 | 0 | This is an in vivo efficacy study of indazole derivatives in mice; pentamidine is only mentioned as a comparator drug and no PK parameters are reported. |
| popPK | Nicco_2025 | irrelevant | 0 | 0 | Study protocol for acoziborole in gambiense HAT; pentamidine is only mentioned as standard-of-care comparator with no PK parameters reported. |
| popPK | Ojara_2023 | irrelevant | 0 | 0 | A systematic review of lactation PK for malaria/TB/NTD drugs; pentamidine is not among the drugs studied and no pentamidine PK parameters appear. |
| popPK | Oualha_2025 | irrelevant | 0 | 0 | In vitro study of tranylcypromine against Leishmania; pentamidine is only mentioned as a comparator drug name, with no PK parameters. |
| popPK | Pereira_2025 | irrelevant | 0 | 0 | This is a medicinal-chemistry review of hydrazone anti-leishmanial compounds; pentamidine is only mentioned as a potency comparator and no PK parameters appear. |
| popPK | Reguera_1994 | irrelevant | 0 | 0 | In-vitro Leishmania uptake inhibition study with EC50/Ki values, no pharmacokinetic disposition parameters for pentamidine. |
| popPK | Reisner_2000 | irrelevant | 0 | 0 | This is an analytical immunoassay development paper (ELISA) with no PK parameters for pentamidine. |
| popPK | Ribeiro_2024 | irrelevant | 0 | 0 | This is a letrozole repurposing study for leishmaniasis with no pentamidine PK parameters reported. |
| popPK | Rosenthal_1992 | irrelevant | 0 | 0 | Pharmacodynamic/endotoxemia protection study in mice with no PK disposition parameters for pentamidine. |
| popPK | Seguel_2016 | irrelevant | 0 | 0 | This is an in vitro/in vivo efficacy interaction study of pentamidine with benznidazole in T. cruzi; no pharmacokinetic disposition parameters are reported. |
| popPK | Seifert_2011 | irrelevant | 0 | 0 | In vitro drug-interaction study against Leishmania; pentamidine is only a test agent, no PK parameters reported. |
| popPK | Standaert-Vitse_2015 | irrelevant | 0 | 0 | This is an in vitro pharmacodynamic (EC50/Emax) study of anti-Pneumocystis drugs, with no pharmacokinetic disposition parameters (CL, V, half-life) for pentamidine. |
| popPK | Sun_2008 | irrelevant | 0 | 0 | In-vitro mechanistic study of pentamidine binding to tRNA; no pharmacokinetic disposition parameters (CL, V, half-life, PK model) are reported. |
| popPK | Taladriz_2012 | irrelevant | 0 | 0 | This is a medicinal chemistry/SAR study of phosphonium salts; pentamidine is only mentioned as a comparator with no PK parameters. |
| popPK | Thao_2014 | irrelevant | 0 | 0 | Pentamidine is only used as an in vitro assay positive control (EC50 reported), with no pharmacokinetic parameters. |
| popPK | Ullman_1989 | irrelevant | 0 | 0 | In-vitro Leishmania drug-resistance study; pentamidine only mentioned as a comparator agent with no PK parameters. |
| popPK | Wicha_2017 | irrelevant | 0 | 0 | This is a pharmacodynamic interaction modeling paper in yeast; pentamidine is not the subject drug and no PK disposition parameters are reported. |
| PGx | Wong_2009 | not_relevant | 2 | 5 | Resistance is experimentally induced by drug pressure, not a gene variant/genotype; effects are drug-drug interactions on IC50, not pharmacogenomic effects on PK/PD parameters. |
| popPK | Yaima-Yate_2026 | irrelevant | 0 | 0 | Systematic review of plant-derived antileishmanial compounds; pentamidine is not the subject and no PK parameters are reported. |
| popPK | unknown_2015 | irrelevant | 0 | 0 | no_text gate: only 48 chars of text extracted (&lt; 400) |
| popPK | unknown_2018 | irrelevant | 0 | 0 | no_text gate: only 125 chars of text extracted (&lt; 400) |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 08:41 UTC</sub>
