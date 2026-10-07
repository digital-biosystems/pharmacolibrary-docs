<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D04A&quot;,&quot;href&quot;:&quot;atc/D04A.md&quot;},{&quot;label&quot;:&quot;diphenhydramine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Diphenhydramine_Wasfi2003_reference&quot;,&quot;label&quot;:&quot;Wasfi_2003_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_diphenhydramine/Diphenhydramine_Wasfi2003_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# diphenhydramine

- **generic name:** diphenhydramine
- **ATC codes:** `D04AA32`, `D04AA33`, `M01AE57`, `R06AA02`
- **DrugBank:** [DB01075](https://go.drugbank.com/drugs/DB01075) · **PubChem:** [CID 3100](https://pubchem.ncbi.nlm.nih.gov/compound/3100)
- **molar mass:** 255.3547 g/mol (C17H21NO) — DrugBank
- **groups:** approved, investigational

## About

Diphenhydramine is an antihistamine used for conditions such as urticaria, motion sickness, insomnia and anxiety, and also acts as a sedative, antiemetic and topical antipruritic. It is an approved medicine in widespread use, available both as a systemic antihistamine and in topical preparations for itching.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q413486](https://www.wikidata.org/wiki/Q413486) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| diphenhydramine | parent | 255.355 | C17H21NO | DrugBank | [3100](https://pubchem.ncbi.nlm.nih.gov/compound/3100) | Wasfi_2003, Yoo_1993 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 14:38 | 23:00 | 1/0/1 | 13/1/0 | 0/0/0 | 326,516/63,163 | openai / gpt-6-luna | 7 | 2/4 | 7/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">horse</span> | [Wasfi_2003_reference](drugs/drug_diphenhydramine/Diphenhydramine_Wasfi2003_reference.md) | ▶ model + simulator | 1-compartment, IV | 5 | Wasfi IA et al., Comparative pharmacokinetics of diphenh…, Veterinary research communi… (2003) | [10.1023/a:1025789607863](https://doi.org/10.1023/a:1025789607863) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (sheep), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">sheep</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Yoo_1993_reference](drugs/drug_diphenhydramine/Diphenhydramine_Yoo1993_reference.md) | — | 1-compartment (no model) | 5 | Yoo SD et al., Transplacental and nonplacental clearan…, Journal of pharmaceutical s… (1993) | [10.1002/jps.2600820206](https://doi.org/10.1002/jps.2600820206) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">mouse</span> | [Balderas_2008_sedative_effect](drugs/drug_diphenhydramine/pd_Balderas_2008_sedative_effect.md) | sedative effect ← diphenhydramine · model not identified | — | Balderas JL et al., Pharmacodynamic interaction of the seda…, Journal of ethnopharmacology (2008) | [10.1016/j.jep.2008.05.035](https://doi.org/10.1016/j.jep.2008.05.035) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (pig), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">pig</span> | [Bockman_2002_histamine_stimulated_relaxation_of_nasal_mucosae](drugs/drug_diphenhydramine/pd_Bockman_2002_histamine_stimulated_relaxation_of_nasal_mucosa.md) | histamine-stimulated relaxation of nasal mucosae ← diphenhydramine · inhibition effect | — | Bockman CS et al., Histamine receptor type coupled to nitr…, Autonomic & autacoid pharma… (2002) | [10.1046/j.1474-8673.2002.00268.x](https://doi.org/10.1046/j.1474-8673.2002.00268.x) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Boxberger_2014_serotonin_uptake](drugs/drug_diphenhydramine/pd_Boxberger_2014_serotonin_uptake.md) | serotonin uptake ← diphenhydramine · inhibition effect | — | Boxberger KH et al., Common drugs inhibit human organic cati…, Drug metabolism and disposi… (2014) | [10.1124/dmd.113.055095](https://doi.org/10.1124/dmd.113.055095) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (pig), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">pig</span> | [Fujinuma_1985_contractile_responses_to_histamine_2_MH_and_PEA](drugs/drug_diphenhydramine/pd_Fujinuma_1985_contractile_responses_to_histamine_2_MH_and_PE.md) | contractile responses to histamine, 2-MH, and PEA ← diphenhydramine · inhibition effect | — | Fujinuma S et al., Pharmacological characterization of the…, British journal of pharmaco… (1985) | [10.1111/j.1476-5381.1985.tb08938.x](https://doi.org/10.1111/j.1476-5381.1985.tb08938.x) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Gespach_1982_cAMP](drugs/drug_diphenhydramine/pd_Gespach_1982_cAMP.md) | cyclic AMP levels ← diphenhydramine · inhibition effect | — | Gespach C et al., Identification and characterization of…, Molecular pharmacology (1982) | — |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (pig), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">pig</span> | [Gespach_1983_cAMP](drugs/drug_diphenhydramine/pd_Gespach_1983_cAMP.md) | cAMP production evoked by H ← diphenhydramine · inhibition effect | — | Gespach C et al., Regulation by vasoactive intestinal pep…, Endocrinology (1983) | [10.1210/endo-112-5-1597](https://doi.org/10.1210/endo-112-5-1597) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 0.00).">in vitro</span> | [Kester_2003_contractile_tensions](drugs/drug_diphenhydramine/pd_Kester_2003_contractile_tensions.md) | contractile tensions ← diphenhydramine · inhibition effect | — | Kester RR et al., Pharmacological characterization of iso…, The Journal of urology (2003) | [10.1097/01.ju.0000080440.74266.b1](https://doi.org/10.1097/01.ju.0000080440.74266.b1) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Kim_2017_proton_currents](drugs/drug_diphenhydramine/pd_Kim_2017_proton_currents.md) | proton currents ← diphenhydramine · inhibition effect | — | Kim J et al., Inhibitory effects of antihistamines, d…, European journal of pharmac… (2017) | [10.1016/j.ejphar.2017.01.032](https://doi.org/10.1016/j.ejphar.2017.01.032) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Mayer_2016_displacement_of_the_radioactive_tracer_from_its_receptor_binding_site](drugs/drug_diphenhydramine/pd_Mayer_2016_displacement_of_the_radioactive_tracer_from_its_r.md) | displacement of the radioactive tracer from its receptor binding site ← diphenhydramine · stimulation effect | — | Mayer T et al., Limitations of the Anticholinergic Acti…, The American journal of ger… (2016) | [10.1016/j.jagp.2016.07.024](https://doi.org/10.1016/j.jagp.2016.07.024) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Müller_2005_3H_MPP](drugs/drug_diphenhydramine/pd_M_ller_2005_3H_MPP.md) | [3H]MPP+ uptake ← diphenhydramine · inhibition effect | — | Müller J et al., Drug specificity and intestinal membran…, Biochemical pharmacology (2005) | [10.1016/j.bcp.2005.09.011](https://doi.org/10.1016/j.bcp.2005.09.011) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rabbit</span> | [Onaran_1990_histamine_H1_receptor_mediated_steady_state_responses](drugs/drug_diphenhydramine/pd_Onaran_1990_histamine_H1_receptor_mediated_steady_state_resp.md) | histamine-H1 receptor-mediated steady-state responses ← diphenhydramine · target-mediated drug disposition | — | Onaran HO et al., Kinetics of antagonism at histamine-H1…, Naunyn-Schmiedeberg's archi… (1990) | [10.1007/BF00180657](https://doi.org/10.1007/BF00180657) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">rat</span> | [Robertson_1994_acridine_formation](drugs/drug_diphenhydramine/pd_Robertson_1994_acridine_formation.md) | acridine formation ← diphenhydramine · inhibition effect | — | Robertson IG et al., Methadone: a potent inhibitor of rat li…, Biochemical pharmacology (1994) | [10.1016/0006-2952(94)90192-9](https://doi.org/10.1016/0006-2952(94)90192-9) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (cat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">cat</span> | [Wang_1998_QT](drugs/drug_diphenhydramine/pd_Wang_1998_QT.md) | QT prolongation ← diphenhydramine · inhibition effect | — | Wang WX et al., "Conventional" antihistamines slow card…, Journal of cardiovascular p… (1998) | [10.1097/00005344-199807000-00019](https://doi.org/10.1097/00005344-199807000-00019) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Seifert_1992_Ca2_i](drugs/drug_diphenhydramine/pd_Seifert_1992_Ca2_i.md) | histamine-induced rises in [Ca2+]i ← Diphenhydramine · inhibition effect | — | Seifert R et al., Histamine increases cytosolic Ca2+ in H…, Molecular pharmacology (1992) | — |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=diphenhydramine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | kidney | `SLC22A5` inhibitor | DrugBank actor |
| absorption | skeletal muscle | `SLC22A5` inhibitor | DrugBank actor |
| absorption | small intestine | `SLC22A5` inhibitor | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor/substrate | DrugBank actor |
| metabolism | liver | `CYP2C19` substrate, `CYP2C9` substrate, `CYP2D6` inhibitor/substrate | DrugBank actor |
| excretion | kidney | `SLC22A2` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: CHRM2 (target), HNMT (inhibitor), HRH1 (inverse agonist), PTGS1 (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 298 matched, 133 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 2  ·  extracted 1  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Kumar_1997.pdf` | Kumar S et al., Estimation of transplacental and nonpla…, The Journal of pharmacology… (1997) | popPK | 10 | not captured | [9262323](https://pubmed.ncbi.nlm.nih.gov/9262323) | Quantitative diphenhydramine clearances are reported directly in the evidence. |
| `Wasfi_2003.pdf` | Wasfi IA et al., Comparative pharmacokinetics of diphenh…, Veterinary research communi… (2003) | popPK | 10 | [10.1023/a:1025789607863](https://doi.org/10.1023/a:1025789607863) | [14582745](https://pubmed.ncbi.nlm.nih.gov/14582745) | Quantitative diphenhydramine pharmacokinetic parameters are reported for both species. |
| `Yoo_1993.pdf` | Yoo SD et al., Transplacental and nonplacental clearan…, Journal of pharmaceutical s… (1993) | popPK | 10 | [10.1002/jps.2600820206](https://doi.org/10.1002/jps.2600820206) | [8445526](https://pubmed.ncbi.nlm.nih.gov/8445526) | Reports numeric transplacental and nonplacental clearances for diphenhydramine in pregnant sheep. |
| `Ellison_2020.pdf` | Ellison CA et al., Application of structural and functiona…, Regulatory toxicology and p… (2020) | popPK | 8 | [10.1016/j.yrtph.2020.104667](https://doi.org/10.1016/j.yrtph.2020.104667) | [32387187](https://pubmed.ncbi.nlm.nih.gov/32387187) | A human diphenhydramine PBPK model is described, but no numeric parameter values are present in the evidence. |

<sub>queue written 2026-10-07T14:24:17.650256+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Akutsu_2007 | not_relevant | 0 | 0 | The study identifies CYP enzymes involved in in-vitro metabolism but does not assess genetic variants, genotypes, or phenotypes and their effects on diphenhydramine PK or PD. |
| popPK | Altura_1982 | irrelevant | 0 | 0 | Diphenhydramine is only an antagonist in an isolated dog artery study, with no pharmacokinetic parameters reported. |
| PGx | Auvity_2017 | not_relevant | 0 | 0 | The paper studies blood-brain barrier transport but reports no effect of a gene variant, genotype, or phenotype on a diphenhydramine PK/PD parameter. |
| popPK | Bafor_2010 | irrelevant | 0 | 0 | This in-vitro uterine study uses diphenhydramine only as an antagonist and reports no pharmacokinetic parameters. |
| popPK | Bafor_2010_2 | irrelevant | 0 | 0 | Diphenhydramine is an in-vitro antagonist, with no pharmacokinetic parameters reported. |
| PGx | Baig_2020 | not_relevant | 0 | 0 | The paper reports no gene variant, genotype, or phenotype effect on a pharmacokinetic or pharmacodynamic parameter of diphenhydramine. |
| popPK | Bockman_2002 | irrelevant | 0 | 0 | Diphenhydramine is an in-vitro receptor antagonist here, and no pharmacokinetic disposition parameters are reported. |
| PGx | Bond_2007 | not_relevant | 0 | 0 | The CYP2D6 discussion concerns possible atomoxetine metabolism; no pharmacogenomic effect on diphenhydramine is reported. |
| popPK | Cao_2026 | irrelevant | 0 | 0 | This human clinical outcomes analysis reports no quantitative pharmacokinetic parameters for diphenhydramine. |
| PGx | Cattelotte_2009 | not_relevant | 0 | 0 | Diphenhydramine is used as a test inhibitor of brain transport; no gene variant or phenotype effect on its PK or PD is reported. |
| PGx | Chapy_2015 | not_relevant | 0 | 0 | The paper studies transporter inhibitors but reports no gene variant, genotype, or phenotype effect on diphenhydramine PK or PD. |
| PGx | Chapy_2016 | not_relevant | 0 | 0 | Diphenhydramine is mentioned only as an inhibitor-sensitive probe; the study reports no pharmacogenomic effect on its PK or PD. |
| popPK | Ellison_2020 | relevant | 8 | 0 | A human diphenhydramine PBPK model is described, but no numeric parameter values are present in the evidence. |
| PGx | Frick_2007 | not_relevant | 0 | 0 | The CYP2D6 genotype is said to exclude a pharmacokinetic explanation, and decreased pharmacodynamic responsiveness is only speculative; no pharmacogenomic effect on a parameter is reported. |
| popPK | Fujinuma_1985 | irrelevant | 0 | 0 | Diphenhydramine is used only as an in-vitro receptor antagonist; no pharmacokinetic parameters are reported. |
| popPK | Fukao_2014 | irrelevant | 0 | 0 | Diphenhydramine is only an in-vitro inhibitor of metoprolol uptake, with no diphenhydramine disposition parameters reported. |
| PGx | Fukao_2014 | not_relevant | 0 | 0 | Diphenhydramine is mentioned only as an inhibitor of metoprolol uptake; no gene-related effect on diphenhydramine PK or PD is reported. |
| popPK | Gespach_1982 | irrelevant | 0 | 0 | This in-vitro receptor study reports diphenhydramine’s antagonist Ki, not pharmacokinetic disposition parameters. |
| popPK | Gespach_1983 | irrelevant | 0 | 0 | Diphenhydramine is only an antagonist in an in-vitro gastric gland study, with no pharmacokinetic disposition parameters reported. |
| popPK | Glatstein_2022 | irrelevant | 0 | 0 | Diphenhydramine was used to treat an antivenom reaction, with no pharmacokinetic parameters reported. |
| popPK | Goldberg_1982 | irrelevant | 0 | 0 | This is a lidocaine study that only mentions diphenhydramine, with no diphenhydramine PK values. |
| PGx | Grimsrud_2022 | not_relevant | 0 | 0 | Diphenhydramine is mentioned, but the paper reports no genotype-specific effect on any diphenhydramine PK or PD parameter. |
| PGx | Hamelin_1998 | not_relevant | 0 | 0 | The study tests diphenhydramine as an in-vitro CYP2D6 inhibitor; it does not report a gene-variant, genotype, or phenotype effect on diphenhydramine PK or PD. |
| PGx | Hamelin_2000 | not_relevant | 0 | 0 | CYP2D6 status modifies diphenhydramine’s interaction with metoprolol, but the paper does not report a pharmacogenomic effect on diphenhydramine’s own PK or PD. |
| popPK | Hashemzadeh-Gargari_1992 | irrelevant | 0 | 0 | Diphenhydramine is only a pharmacological comparator, and no pharmacokinetic parameters are reported. |
| PGx | He_2002 | not_relevant | 0 | 0 | The study tests diphenhydramine’s inhibition of CYP enzymes in liver microsomes; it does not report a genotype or phenotype effect on diphenhydramine PK or PD. |
| popPK | Horie_2014 | irrelevant | 0 | 0 | Diphenhydramine is only an in-vitro inhibitor, with no diphenhydramine pharmacokinetic parameters reported. |
| popPK | Huidobro-Toro_1985 | irrelevant | 0 | 0 | Diphenhydramine is only a pretreatment comparator, and no pharmacokinetic parameters are reported. |
| popPK | Ishida_2013 | irrelevant | 0 | 0 | Diphenhydramine is only an in-vitro inhibitor in a study of bisoprolol, with no diphenhydramine PK parameters reported. |
| popPK | Ishikawa_1989 | irrelevant | 0 | 0 | Diphenhydramine is only used as an H1-receptor antagonist; no pharmacokinetic parameters are reported. |
| popPK | Jafri_1997 | irrelevant | 0 | 0 | Diphenhydramine is only an H1-receptor antagonist, and no pharmacokinetic parameters are reported. |
| PGx | Kalow_1986 | not_relevant | 0 | 0 | The text mentions possible ethnic differences in diphenhydramine pharmacokinetics but reports no gene variant, genotype, or phenotype effect. |
| popPK | Kester_2003 | irrelevant | 0 | 0 | Diphenhydramine is an in-vitro antagonist, and no pharmacokinetic parameters are reported. |
| popPK | Ko_1997 | irrelevant | 0 | 0 | Diphenhydramine is only an agent tested for its effect on rat spleen contraction; no pharmacokinetic parameters are reported. |
| PGx | Kortunay_2002 | not_relevant | 0 | 0 | The study tests diphenhydramine's effect on CYP2D6 activity in debrisoquine extensive metabolizers; it does not report a genotype- or phenotype-dependent effect on diphenhydramine PK or PD. |
| popPK | Laurent_1985 | irrelevant | 0 | 0 | Diphenhydramine is only an antagonist comparator, and no diphenhydramine pharmacokinetic parameters are reported. |
| popPK | Li_2004 | irrelevant | 0 | 0 | Diphenhydramine is only a pharmacological antagonist in an isolated-artery study, with no diphenhydramine PK parameters reported. |
| PGx | Li_2024 | not_relevant | 0 | 0 | The study examines CYP-mediated genotoxicity of nitrosamine impurities, not how a gene variant or phenotype changes a diphenhydramine PK or PD parameter. |
| popPK | Lomba_2020 | irrelevant | 0 | 0 | This is an ecotoxicity study and reports no diphenhydramine pharmacokinetic disposition parameters. |
| PGx | Ma_2018 | not_relevant | 0 | 0 | Diphenhydramine is mentioned only as an internal standard; no genetic effect on its PK or PD is reported. |
| PGx | Maideen_2021 | not_relevant | 0 | 0 | The text describes diphenhydramine as a drug that may increase metoprolol concentrations, but reports no pharmacogenomic effect on diphenhydramine. |
| popPK | Mayer_2016 | irrelevant | 0 | 0 | This in-vitro receptor-binding study reports no quantitative pharmacokinetic disposition parameters. |
| popPK | Morcillo_1981 | irrelevant | 0 | 0 | Diphenhydramine is used as a histamine-receptor antagonist, with no pharmacokinetic disposition parameters reported. |
| PGx | Mori_2024 | not_relevant | 0 | 0 | Diphenhydramine is used in a cell-toxicity assay, but the paper does not report a gene-variant or genotype effect on its pharmacokinetic or pharmacodynamic parameters. |
| popPK | Murakawa_1988 | irrelevant | 0 | 0 | Diphenhydramine is only a receptor-antagonist comparator in an in vitro vascular study, with no PK parameters reported. |
| popPK | Murakawa_1990 | irrelevant | 0 | 0 | Diphenhydramine is only a receptor antagonist in an in vitro vascular study, with no pharmacokinetic parameters reported. |
| popPK | Nakahata_1987 | irrelevant | 0 | 0 | Diphenhydramine is only a test antagonist in an in-vitro rabbit tissue study, with no PK parameters reported. |
| PGx | Neul_2021 | not_relevant | 0 | 0 | No pharmacogenomic effect on a diphenhydramine PK or PD parameter is reported; genotype analyses concern sparteine. |
| popPK | Obrador_2026 | irrelevant | 0 | 0 | This is a review and reports no quantitative diphenhydramine pharmacokinetic parameters. |
| popPK | Oike_1992 | irrelevant | 0 | 0 | Diphenhydramine is only an antagonist comparator; no pharmacokinetic parameters are reported. |
| popPK | Onaran_1990 | irrelevant | 0 | 0 | This is an in-vitro receptor-kinetics study, not a pharmacokinetic study, and no numeric diphenhydramine values are provided. |
| popPK | Peters_2008 | irrelevant | 0 | 0 | This is an in vitro embryotoxicity assay and reports no diphenhydramine pharmacokinetic parameters. |
| PGx | Prost_2003 | not_relevant | 0 | 0 | The CYP2D6/CYP2C19 findings concern methaqualone metabolism, not a diphenhydramine PK or PD parameter. |
| PGx | Rosell_1995 | not_relevant | 0 | 0 | Diphenhydramine is mentioned only as premedication; no genetic effect on its PK or PD is reported. |
| popPK | Seifert_1992 | irrelevant | 0 | 0 | Diphenhydramine is an in-vitro receptor antagonist, and no disposition parameters are reported. |
| PGx | Sharma_2003 | not_relevant | 0 | 0 | The paper mentions CYP2D6 involvement in diphenhydramine metabolism but reports no genotype- or phenotype-associated change in a PK or PD parameter. |
| popPK | Sharma_2005 | irrelevant | 0 | 0 | Diphenhydramine is only a coadministered inhibitor; the reported pharmacokinetic parameters are for metoprolol. |
| PGx | Sharma_2005 | not_relevant | 0 | 0 | CYP2D6 metabolizer status is associated with metoprolol PK/PD, but the paper reports no genotype-dependent PK or PD effect for diphenhydramine. |
| PGx | Sharma_2010 | not_relevant | 0 | 0 | CYP2D6 phenotype effects are reported for metoprolol, not for a pharmacokinetic or pharmacodynamic parameter of diphenhydramine. |
| popPK | Spilker_1975 | irrelevant | 0 | 0 | This is a pharmacology study reporting antagonist ED50s, not diphenhydramine disposition parameters. |
| popPK | Szabo_1993 | irrelevant | 0 | 0 | Diphenhydramine is only used as a receptor blocker; the kinetic model is for pyrilamine. |
| popPK | Ueyama_1997 | irrelevant | 0 | 0 | No paper content or quantitative diphenhydramine pharmacokinetic values are present in the evidence. |
| popPK | Vugmeyster_2019 | irrelevant | 0 | 0 | Diphenhydramine is only a premedication covariate in avelumab QT analyses, with no diphenhydramine disposition parameters reported. |
| popPK | Wang_1998 | irrelevant | 0 | 0 | This isolated-heart pharmacology study reports QT effects, not diphenhydramine disposition parameters. |
| PGx | Whitt_2024 | not_relevant | 0 | 0 | Reports a diphenhydramine–hydrocodone drug interaction, not a gene-related effect on diphenhydramine PK or PD. |
| PGx | Wyatt_2025 | not_relevant | 0 | 0 | The paper compares formulations and reports no genotype- or phenotype-stratified diphenhydramine PK/PD effects. |
| popPK | Yamamoto_1991 | irrelevant | 0 | 0 | Diphenhydramine is only an in-vitro antagonist; no diphenhydramine pharmacokinetic parameters are reported. |
| popPK | Yeap_2014 | irrelevant | 0 | 0 | Diphenhydramine is only an analytical internal standard, with no disposition parameters reported. |
| PGx | Zhao_1999 | not_relevant | 0 | 0 | Diphenhydramine is mentioned only as a potential inhibitor of rokitamycin metabolism; no pharmacogenomic effect on its PK or PD is reported. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 14:25 UTC</sub>
