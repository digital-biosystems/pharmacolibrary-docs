<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;sulpiride&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Sulpiride_Bressolle1984_reference&quot;,&quot;label&quot;:&quot;Bressolle_1984_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sulpiride/Sulpiride_Bressolle1984_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# sulpiride

- **generic name:** sulpiride
- **ATC codes:** `N05AL01`
- **DrugBank:** [DB00391](https://go.drugbank.com/drugs/DB00391) · **PubChem:** [CID 5355](https://pubchem.ncbi.nlm.nih.gov/compound/5355)
- **molar mass:** 341.426 g/mol (C15H23N3O4S) — DrugBank
- **groups:** approved, withdrawn

## About

Sulpiride is an antipsychotic medicine used to treat psychotic disorders such as schizophrenia. It is approved in some countries and used mainly in Europe and Asia, but it is not available everywhere, as some markets have withdrawn it.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q422418](https://www.wikidata.org/wiki/Q422418) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| sulpiride | parent | 341.426 | C15H23N3O4S | DrugBank | [5355](https://pubchem.ncbi.nlm.nih.gov/compound/5355) | Bressolle_1984, Brès_1991, Helmy_2013, Wiesel_1980, Yao_2019 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 17:37 | 13:50 | 1/2/2 | 2/2/1 | 0/0/0 | 335,846/15,039 | ollama / glm-5.3-flash | 8 | 3/3 | 7/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Bressolle_1984_reference](drugs/drug_sulpiride/Sulpiride_Bressolle1984_reference.md) | ▶ model + simulator | 1-compartment, oral | 8 | Bressolle F et al., Sulpiride pharmacokinetics in humans af…, Journal of pharmaceutical s… (1984) | [10.1002/jps.2600730826](https://doi.org/10.1002/jps.2600730826) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Brès_1991_reference](drugs/drug_sulpiride/Sulpiride_Brs1991_reference.md) | — | 1-compartment (no model) | 7 | Brès J et al., Pharmacokinetics of sulpiride in humans…, Journal of pharmaceutical s… (1991) | [10.1002/jps.2600801206](https://doi.org/10.1002/jps.2600801206) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Wiesel_1980_reference](drugs/drug_sulpiride/Sulpiride_Wiesel1980_reference.md) | — | 1-compartment (no model) | 8 | Wiesel FA et al., The pharmacokinetics of intravenous and…, European journal of clinica… (1980) | [10.1007/BF00558453](https://doi.org/10.1007/BF00558453) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Helmy_2013_reference](drugs/drug_sulpiride/Sulpiride_Helmy2013_reference.md) | — | 2-compartment (no model) | 10 | Helmy SA, Therapeutic drug monitoring and pharmac…, Biopharmaceutics & drug dis… (2013) | [10.1002/bdd.1843](https://doi.org/10.1002/bdd.1843) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span><br><sub>blocking: C7 apparent-parameter coherence violated (double correction)</sub><br><sub>route_to: `human_review`</sub> | [Yao_2019_reference](drugs/drug_sulpiride/Sulpiride_Yao2019_reference.md) | — | 2-compartment (no model) | 7 | Yao QY et al., Preclinical PK/PD model for the combina…, Acta pharmacologica Sinica (2019) | [10.1038/s41401-019-0251-7](https://doi.org/10.1038/s41401-019-0251-7) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Werner_1996_dopamine_induced_inward_GIRK_current_blocked_by_sulpiride](drugs/drug_sulpiride/pd_Werner_1996_dopamine_induced_inward_GIRK_current_blocked_by_.md) | dopamine-induced inward GIRK current (blocked by (-)-sulpiride) ← (-)-sulpiride · inhibition effect | — | Werner P et al., D2, D3, and D4 dopamine receptors coupl…, Molecular pharmacology (1996) | — |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Yao_2019_TV](drugs/drug_sulpiride/pd_Yao_2019_TV.md) | Tumor volume ← sulpiride (Csul) sensitizing dexamethasone (Cdex) effect · disease-progression model | — | Yao QY et al., Preclinical PK/PD model for the combina…, Acta pharmacologica Sinica (2019) | [10.1038/s41401-019-0251-7](https://doi.org/10.1038/s41401-019-0251-7) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Peris_1988_3H_ASP_release](drugs/drug_sulpiride/pd_Peris_1988_3H_ASP_release.md) | K+-stimulated [3H]D-aspartate release from rat striatal slices ← sulpiride · direct Emax (saturable) effect | model (no simulator) | Peris J et al., Biphasic modulation of evoked [3H]D-asp…, Synapse (New York, N.Y.) (1988) | [10.1002/syn.890020413](https://doi.org/10.1002/syn.890020413) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Baldi_1988_adenylate_cyclase_activity_DA_induced_stimulation](drugs/drug_sulpiride/pd_Baldi_1988_adenylate_cyclase_activity_DA_induced_stimulation.md) | adenylate cyclase activity (DA-induced stimulation) ← (+)-sulpiride · inhibition effect | — | Baldi E et al., Presence of dopamine-dependent adenylat…, European journal of pharmac… (1988) | [10.1016/0014-2999(88)90667-x](https://doi.org/10.1016/0014-2999(88)90667-x) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">other animal</span> | [Magoski_1995_Synaptic_transmission_from_RPeD1_to_its_follower_cells_inhibition_by_sulpiride](drugs/drug_sulpiride/pd_Magoski_1995_Synaptic_transmission_from_RPeD1_to_its_followe.md) | Synaptic transmission from RPeD1 to its follower cells (inhibition by sulpiride) ← (+/-)-sulpiride · direct sigmoid Emax (Hill) effect | — | Magoski NS et al., Dopaminergic transmission between ident…, Journal of neurophysiology (1995) | [10.1152/jn.1995.74.3.1287](https://doi.org/10.1152/jn.1995.74.3.1287) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=sulpiride) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| absorption | mammary gland | `ABCG2` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| absorption | testis | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| distribution | blood | `ALB` binder | DrugBank actor |
| distribution | liver | `SLC22A3` substrate | DrugBank actor |
| distribution | placenta | `SLC22A3` substrate | DrugBank actor |
| distribution | skeletal muscle | `SLC22A3` substrate | DrugBank actor |
| metabolism | blood | `BCHE` inhibitor | DrugBank actor |
| metabolism | liver | `BCHE` inhibitor, `SLC22A1` substrate | DrugBank actor |
| excretion | kidney | `SLC22A2` substrate, `SLC47A1` substrate, `SLC47A2` substrate | DrugBank actor |
| excretion | liver | `SLC47A1` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: CA2 (inhibitor), CA3 (inhibitor), DRD2 (target), DRD3 (target), DRD4 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 384 matched, 98 returned
- **screened:** 6  ·  **relevant:** 6
- **records:** 5  ·  extracted 1  ·  needs_review 2  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_10 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Bressolle_1984.pdf` | Bressolle F et al., Sulpiride pharmacokinetics in humans af…, Journal of pharmaceutical s… (1984) | popPK | 10 | [10.1002/jps.2600730826](https://doi.org/10.1002/jps.2600730826) | [6491918](https://pubmed.ncbi.nlm.nih.gov/6491918) | Full quantitative two-compartment PK parameters for sulpiride (CL, Vss, rate constants, half-lives) are reported directly in the abstract. |
| `Brès_1991.pdf` | Brès J et al., Pharmacokinetics of sulpiride in humans…, Journal of pharmaceutical s… (1991) | popPK | 10 | [10.1002/jps.2600801206](https://doi.org/10.1002/jps.2600801206) | [1815069](https://pubmed.ncbi.nlm.nih.gov/1815069) | Human PK study of sulpiride with full numeric disposition parameters (t½, Vss, CL, renal CL) reported directly in the abstract. |
| `Helmy_2013.pdf` | Helmy SA, Therapeutic drug monitoring and pharmac…, Biopharmaceutics & drug dis… (2013) | popPK | 10 | [10.1002/bdd.1843](https://doi.org/10.1002/bdd.1843) | [23585286](https://pubmed.ncbi.nlm.nih.gov/23585286) | Full PK parameter values (CL/F, Vd/F, ka, t1/2, compartmental model) for sulpiride are reported directly in the abstract. |
| `Wiesel_1980.pdf` | Wiesel FA et al., The pharmacokinetics of intravenous and…, European journal of clinica… (1980) | popPK | 10 | [10.1007/BF00558453](https://doi.org/10.1007/BF00558453) | [7418717](https://pubmed.ncbi.nlm.nih.gov/7418717) | Human PK study of sulpiride with full numeric disposition parameters (CL, Vd, half-life, bioavailability) present in the abstract. |
| `Bressolle_1992.pdf` | Bressolle F et al., Absolute bioavailability, rate of absor…, Journal of pharmaceutical s… (1992) | popPK | 8 | [10.1002/jps.2600810106](https://doi.org/10.1002/jps.2600810106) | [1619566](https://pubmed.ncbi.nlm.nih.gov/1619566) | Human PK study of sulpiride with compartmental model, but only half-life (7.0 h) and MRT appear in the abstract; CL/V values likely in tables not provided. |
| `Lenhard_1991.pdf` | Lenhard G et al., The importance of pharmacokinetic data…, International journal of cl… (1991) | popPK | 8 | not captured | [1869345](https://pubmed.ncbi.nlm.nih.gov/1869345) | Human bioequivalence/PK study of sulpiride reporting CL, Vd, T1/2β, MRT via compartmental models, but the abstract gives only Cmax/AUC values, not the disposition parameter numbers. |
| `Rietbrock_1995.pdf` | Rietbrock S et al., Absorption behavior of sulpiride descri…, International journal of cl… (1995) | popPK | 8 | not captured | [7655770](https://pubmed.ncbi.nlm.nih.gov/7655770) | Population (NONMEM) absorption model of sulpiride in humans, but no numeric parameter values are present in the evidence. |
| `Chen_1989.pdf` | Chen IJ et al., [Comparative pharmacokinetics of two su…, Gaoxiong yi xue ke xue za z… (1989) | popPK | 7 | not captured | [2769828](https://pubmed.ncbi.nlm.nih.gov/2769828) | Human bioavailability study reporting numeric PK parameters (Cmax, Tmax, t½, AUC) for sulpiride, though no CL or V values are given. |
| `Mizuno_1986.pdf` | Mizuno N et al., Gastrointestinal absorption of sulpirid…, Archives internationales de… (1986) | popPK | 7 | not captured | [3800511](https://pubmed.ncbi.nlm.nih.gov/3800511) | Rat PK study with two-compartment model and bioavailability, but numeric CL/V/ka values are not given in the evidence text. |
| `Noh_2021.pdf` | Noh K et al., Use of Intravenous Infusion Study Desig…, Drug metabolism and disposi… (2021) | popPK | 7 | [10.1124/dmd.120.000242](https://doi.org/10.1124/dmd.120.000242) | [33262223](https://pubmed.ncbi.nlm.nih.gov/33262223) | Sulpiride is one of the studied compounds with CL, Vss and t1/2,eff determined in rats, but the actual numeric parameter values for sulpiride are not present in the evidence (they appear to live in tables/figures not provided). |

<sub>queue written 2026-10-06T17:33:19.621349+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Akazawa_2018 | not_relevant | 0 | 0 | Sulpiride is only used as a permeability probe in hiPSC-IECs; no gene variant/genotype effect on its PK/PD is reported. |
| popPK | Albert_1990 | irrelevant | 0 | 0 | In-vitro receptor pharmacology study; sulpiride is only an antagonist used for KI comparison, with no PK parameters. |
| popPK | Baldi_1988 | irrelevant | 0 | 0 | In vitro receptor pharmacology study; sulpiride is only an antagonist tool, no PK parameters. |
| popPK | Barry_1987 | irrelevant | 0 | 0 | Behavioral pharmacology study in mice with no PK parameters for sulpiride. |
| popPK | Bobker_1990 | irrelevant | 0 | 0 | Electrophysiology study where (-)sulpiride is merely a receptor antagonist tool with no PK parameters; no disposition values reported. |
| popPK | Bredberg_1991 | irrelevant | 2 | 2 | Sulpiride is used only as an antagonist probe in a rat PD study; no quantitative PK disposition parameters for sulpiride are reported in the evidence. |
| popPK | Bressolle_1992 | relevant | 8 | 4 | Human PK study of sulpiride with compartmental model, but only half-life (7.0 h) and MRT appear in the abstract; CL/V values likely in tables not provided. |
| popPK | Ceci_1999 | irrelevant | 0 | 0 | In vitro electrophysiology study; sulpiride is only a receptor antagonist tool, no PK parameters reported. |
| popPK | Coronas_2004 | irrelevant | 0 | 0 | Sulpiride is only used as a D3 antagonist in in-vitro cell cultures; no pharmacokinetic parameters are reported. |
| popPK | Costall_1987 | irrelevant | 0 | 0 | Behavioral pharmacology study in mice; sulpiride is a test drug with no PK parameters reported. |
| popPK | Cubeddu_1989 | irrelevant | 0 | 0 | In-vitro neurochemistry study using sulpiride only as a D2 antagonist tool; no PK parameters reported. |
| popPK | Eglen_1990 | irrelevant | 0 | 0 | In-vitro receptor pharmacology study in guinea-pig ileum; sulpiride is only an agonist in a rank-order list, with no PK parameters. |
| popPK | Elswood_1991 | irrelevant | 0 | 0 | Sulpiride is only used as a pharmacological tool (1 µM) in an in vitro receptor study; no PK parameters reported. |
| popPK | Enjalbert_1988 | irrelevant | 0 | 0 | In-vitro pituitary cell study where sulpiride is only a receptor antagonist probe; no PK parameters. |
| PGx | Erwin_1993 | not_relevant | 2 | 3 | Sulpiride is only a radioligand used to measure D2 receptor binding; no pharmacogenomic effect on sulpiride PK/PD is reported. |
| popPK | Faggin_1990 | irrelevant | 0 | 0 | Sulpiride is only used as a D2 antagonist tool in a neurochemistry study; no PK parameters reported. |
| popPK | Friedman_1992 | irrelevant | 0 | 0 | Sulpiride is only used as a D2 receptor antagonist in an in vitro vascular pharmacology study; no PK parameters for sulpiride are reported. |
| popPK | Fujiwara_1987 | irrelevant | 0 | 0 | Sulpiride is only used as a D2 antagonist in an in vitro neurochemistry study; no PK parameters reported. |
| popPK | Gallagher_1985 | irrelevant | 0 | 0 | Pharmacology study of a dopamine agonist; sulpiride only used as an antagonist probe, no PK parameters. |
| popPK | Gomes_2003 | irrelevant | 0 | 0 | Sulpiride is only used as a D2 receptor antagonist tool in an in-vitro electrophysiology study; no PK parameters reported. |
| PGx | Harkitis_2015 | not_relevant | 2 | 3 | Sulpiride is used as a D2 antagonist to alter CYP expression; no gene variant/genotype effect on sulpiride's own PK/PD parameters is reported. |
| PGx | Hernández-Lozano_2021 | not_relevant | 0 | 0 | Sulpiride is used only as a transporter inhibitor pretreatment; the paper studies metoclopramide disposition, not sulpiride PK/PD. |
| popPK | Ichida_1983 | irrelevant | 0 | 0 | In-vitro receptor binding study of spiroperidol in rat uterus; sulpiride is only a comparator ligand, no PK parameters. |
| popPK | Itokawa_1996 | irrelevant | 0 | 0 | Sulpiride is only a radiolabeled binding ligand in an in-vitro receptor study; no PK disposition parameters for sulpiride itself. |
| PGx | Itokawa_1996 | not_relevant | 2 | 5 | Sulpiride is used only as a radioligand tracer for D2 receptor sequestration; the Ser311 variant affects receptor internalization, not a PK/PD parameter of sulpiride itself. |
| popPK | Lenhard_1991 | relevant | 8 | 3 | Human bioequivalence/PK study of sulpiride reporting CL, Vd, T1/2β, MRT via compartmental models, but the abstract gives only Cmax/AUC values, not the disposition parameter numbers. |
| popPK | Magoski_1995 | irrelevant | 0 | 0 | Sulpiride is used only as a dopamine antagonist pharmacological tool in snail neurons; no PK parameters for sulpiride are reported. |
| popPK | Maina_2010 | irrelevant | 0 | 0 | Sulpiride is only used as a D2 antagonist validation tool in an in vitro voltammetry assay; no PK parameters reported. |
| popPK | Mazzuco_1999 | irrelevant | 0 | 0 | Sulpiride is only used as a dopamine receptor antagonist in an in vitro vascular pharmacology study; no PK parameters for sulpiride. |
| popPK | Meschler_2001 | irrelevant | 0 | 0 | Sulpiride is only used as an in-vitro D2 antagonist tool; no PK parameters for sulpiride are reported. |
| popPK | Mizuno_1986 | relevant | 7 | 4 | Rat PK study with two-compartment model and bioavailability, but numeric CL/V/ka values are not given in the evidence text. |
| PGx | Mohammed_2020 | not_relevant | 0 | 0 | No gene variant/genotype/phenotype is linked to sulpiride PK/PD; paper examines drug-drug interactions in rats without pharmacogenomics. |
| PGx | Niwa_2005 | not_relevant | 0 | 0 | In vitro CYP inhibition study of sulpiride with no gene variant/genotype/phenotype effect on sulpiride PK or PD. |
| PGx | Niwa_2024 | not_relevant | 0 | 0 | Regulatory review of adrenaline labeling with no gene variant/genotype effect on any PK/PD parameter; sulpiride not mentioned. |
| popPK | Noh_2021 | relevant | 7 | 2 | Sulpiride is one of the studied compounds with CL, Vss and t1/2,eff determined in rats, but the actual numeric parameter values for sulpiride are not present in the evidence (they appear to live in tables/figures not provided). |
| popPK | Patel_2003 | irrelevant | 0 | 0 | Sulpiride is only used as a D2/D3 autoreceptor antagonist in voltammetry experiments; no PK parameters for sulpiride are reported. |
| popPK | Peris_1988 | irrelevant | 0 | 0 | Sulpiride is used only as a D-2 receptor ligand in an in vitro neurotransmitter release study; no PK disposition parameters are reported. |
| popPK | Pich_1986 | irrelevant | 0 | 0 | Behavioral pharmacology study in rats with no PK parameters for sulpiride. |
| popPK | Pruitt_1995 | irrelevant | 0 | 0 | Sulpiride is only a pharmacological tool (D2 antagonist) in a behavioral study; no PK parameters reported. |
| PGx | Rane_1996 | not_relevant | 0 | 0 | Study reports drug effects on CYP expression in rats, not a gene variant/genotype effect on sulpiride PK/PD. |
| popPK | Rao_1997 | irrelevant | 0 | 0 | Sulpiride is only used as a D2 antagonist tool in an in vitro neurotransmitter release study; no PK parameters for sulpiride. |
| popPK | Riese_1998 | irrelevant | 0 | 0 | Sulpiride is only used as a D2 antagonist tool in an in-vitro cell signaling study; no PK parameters for sulpiride are reported. |
| popPK | Rietbrock_1995 | relevant | 8 | 2 | Population (NONMEM) absorption model of sulpiride in humans, but no numeric parameter values are present in the evidence. |
| popPK | Rump_1995 | irrelevant | 0 | 0 | Sulpiride is only used as a D2 antagonist in an in vitro neurotransmission assay; no PK parameters for sulpiride are reported. |
| popPK | Schou_2015 | irrelevant | 3 | 3 | Sulpiride is one of 13 drugs in a PET brain-exposure study in monkeys; only Kp (0.002) and Cmax values are given, compartmental analysis failed for sulpiride, and detailed values are in supplementary tables not provided. |
| PGx | Stöllberger_2005 | not_relevant | 2 | 0 | Only mentions gene polymorphisms as a general QT risk factor; no specific genotype effect on sulpiride PK/PD reported. |
| PGx | Takei_2024 | not_relevant | 0 | 0 | Sulpiride levels are only mentioned as within therapeutic range; no gene variant effect on its PK/PD is reported. |
| popPK | Trendelenburg_1994 | irrelevant | 0 | 0 | Sulpiride is only used as a pharmacological tool in an in vitro receptor study; no PK parameters reported. |
| popPK | Undie_1990 | irrelevant | 0 | 0 | In vitro rat brain receptor pharmacology study; sulpiride is only a D2 antagonist control, no PK parameters. |
| popPK | Vieira-Coelho_1998 | irrelevant | 0 | 0 | Sulpiride is only used as an in-vitro antagonist in Ussing chamber experiments; no PK parameters for sulpiride are reported. |
| popPK | Vieira-Coelho_2001 | irrelevant | 0 | 0 | Sulpiride is only used as a dopamine receptor antagonist in an in vitro transport study; no PK parameters for sulpiride are reported. |
| popPK | Weiss_1985 | irrelevant | 0 | 0 | In vitro receptor pharmacology study; sulpiride is only a D2 antagonist tool, no PK parameters. |
| popPK | Werner_1996 | irrelevant | 0 | 0 | In vitro Xenopus oocyte receptor pharmacology study; sulpiride is only an antagonist probe with IC50 values, no PK disposition parameters. |
| popPK | Yamaguchi_1996 | irrelevant | 0 | 0 | Sulpiride is only used as a D2 antagonist in an in vitro cell-signaling study; no PK parameters for sulpiride are reported. |
| popPK | Zhang_2012 | irrelevant | 0 | 0 | Sulpiride is only used as a D2 antagonist tool in a rat colon motility study; no PK parameters reported. |
| popPK | Zhang_2018 | irrelevant | 0 | 0 | Sulpiride is used only as a D2 receptor blocker in an electrophysiology study; no PK parameters for sulpiride are reported. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 17:33 UTC</sub>
