<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N04B&quot;,&quot;href&quot;:&quot;atc/N04B.md&quot;},{&quot;label&quot;:&quot;amantadine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Amantadine_Jaber2021_reference&quot;,&quot;label&quot;:&quot;Jaber_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_amantadine/Amantadine_Jaber2021_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Amantadine_Ohk2022_reference&quot;,&quot;label&quot;:&quot;Ohk_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_amantadine/Amantadine_Ohk2022_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Amantadine_Riley2026_reference&quot;,&quot;label&quot;:&quot;Riley_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_amantadine/Amantadine_Riley2026_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# amantadine

- **generic name:** amantadine
- **ATC codes:** `N04BB01`
- **DrugBank:** [DB00915](https://go.drugbank.com/drugs/DB00915) · **PubChem:** [CID 2130](https://pubchem.ncbi.nlm.nih.gov/compound/2130)
- **molar mass:** 151.2487 g/mol (C10H17N) — DrugBank
- **groups:** approved, investigational

## About

Amantadine is a medication used to treat Parkinson's disease and the dyskinesia associated with parkinsonism, and it has also been used against influenza. It is an approved drug, classified as an antiparkinson dopaminergic agent, and is used in human medicine.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q409761](https://www.wikidata.org/wiki/Q409761) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| amantadine | parent | 151.249 | C10H17N | DrugBank | [2130](https://pubchem.ncbi.nlm.nih.gov/compound/2130) | Aoki_1985, Kornhuber_2006, Riley_2026, Siao_2011, deVries_2019 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 12:54 | 36:46 | 3/2/4 | 8/0/0 | 0/0/1 | 1,363,736/107,397 | ollama / glm-5.3-flash | 38 | 2/30 | 38/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.444). The first reading is what the record holds.">cross-check: disputed</span> | [Jaber_2021_reference](drugs/drug_amantadine/Amantadine_Jaber2021_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Jaber MM et al., Application of Deep Neural Networks as…, Pharmaceutics (2021) | [10.3390/pharmaceutics13060797](https://doi.org/10.3390/pharmaceutics13060797) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.5). The first reading is what the record holds.">cross-check: disputed</span> | [Ohk_2022_reference](drugs/drug_amantadine/Amantadine_Ohk2022_reference.md) | ▶ model + simulator | 1-compartment, oral | 2 | Ohk B et al., Evaluation of sex differences in the ph…, Biopharmaceutics & drug dis… (2022) | [10.1002/bdd.2307](https://doi.org/10.1002/bdd.2307) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. The first reading is what the record holds.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">horse</span> | [Riley_2026_reference](drugs/drug_amantadine/Amantadine_Riley2026_reference.md) | ▶ model + simulator | 2-compartment, oral | 8 | Riley HL et al., Assessment of pharmacokinetic parameter…, BMC veterinary research (2026) | [10.1186/s12917-026-05672-9](https://doi.org/10.1186/s12917-026-05672-9) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.364). The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: disposition incomplete — no disposition parameter from this paper; review-gap-f…</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q31 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Aoki_1985_reference](drugs/drug_amantadine/Amantadine_Aoki1985_reference.md) | — | 1-compartment (no model) | 6 | Aoki FY et al., Amantadine kinetics in healthy elderly…, Clinical pharmacology and t… (1985) | [10.1038/clpt.1985.25](https://doi.org/10.1038/clpt.1985.25) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.75). The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: disposition incomplete — volume from this paper; review-gap-filled from other p…</sub><br><sub>route_to: `human_review`</sub> | [Kornhuber_2006_reference](drugs/drug_amantadine/Amantadine_Kornhuber2006_reference.md) | — | 1-compartment (no model) | 4 | Kornhuber J et al., Pharmacokinetic characterization of ama…, Therapeutic drug monitoring (2006) | [10.1097/01.ftd.0000245390.48552.04](https://doi.org/10.1097/01.ftd.0000245390.48552.04) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.875). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: disposition incomplete — no disposition parameter from this paper; review-gap-f…</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q32, Q17, Q91, Q26 — no SI value to…</sub><br><sub>route_to: `human_review`</sub> | [deVries_2019_adjusted_p_value](drugs/drug_amantadine/Amantadine_deVries2019_adjusted_p_value.md) | — | 1-compartment (no model) | 6 | deVries T et al., Effects of Renal Impairment on the Phar…, CNS drugs (2019) | [10.1007/s40263-019-00651-1](https://doi.org/10.1007/s40263-019-00651-1) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.875). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: disposition incomplete — no disposition parameter from this paper; review-gap-f…</sub><br><sub>route_to: `human_review`</sub> | [deVries_2019_geometric_ls_mean](drugs/drug_amantadine/Amantadine_deVries2019_geometric_ls_mean.md) | — | 1-compartment (no model) | 6 | deVries T et al., Effects of Renal Impairment on the Phar…, CNS drugs (2019) | [10.1007/s40263-019-00651-1](https://doi.org/10.1007/s40263-019-00651-1) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.9). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (cat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">cat</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Siao_2011_reference](drugs/drug_amantadine/Amantadine_Siao2011_reference.md) | — | 1-compartment (no model) | 6 | Siao KT et al., Pharmacokinetics of amantadine in cats, Journal of veterinary pharm… (2011) | [10.1111/j.1365-2885.2011.01278.x](https://doi.org/10.1111/j.1365-2885.2011.01278.x) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.75). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [deVries_2019_group](drugs/drug_amantadine/Amantadine_deVries2019_group.md) | — | 1-compartment (no model) | 0 | deVries T et al., Effects of Renal Impairment on the Phar…, CNS drugs (2019) | [10.1007/s40263-019-00651-1](https://doi.org/10.1007/s40263-019-00651-1) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Breitinger_2016_p7_1a_current_inhibition](drugs/drug_amantadine/pd_Breitinger_2016_p7_1a_current_inhibition.md) | Inhibition of p7-1a-mediated current by amantadine ← amantadine · inhibition effect | — | Breitinger U et al., Patch-Clamp Study of Hepatitis C p7 Cha…, Biophysical journal (2016) | [10.1016/j.bpj.2016.04.018](https://doi.org/10.1016/j.bpj.2016.04.018) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Breitinger_2016_p7_2a_current_inhibition](drugs/drug_amantadine/pd_Breitinger_2016_p7_2a_current_inhibition.md) | Inhibition of p7-2a-mediated current by amantadine ← amantadine · inhibition effect | — | Breitinger U et al., Patch-Clamp Study of Hepatitis C p7 Cha…, Biophysical journal (2016) | [10.1016/j.bpj.2016.04.018](https://doi.org/10.1016/j.bpj.2016.04.018) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Breitinger_2016_p7_3a_current_inhibition](drugs/drug_amantadine/pd_Breitinger_2016_p7_3a_current_inhibition.md) | Inhibition of p7-3a-mediated current by amantadine ← amantadine · inhibition effect | — | Breitinger U et al., Patch-Clamp Study of Hepatitis C p7 Cha…, Biophysical journal (2016) | [10.1016/j.bpj.2016.04.018](https://doi.org/10.1016/j.bpj.2016.04.018) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Breitinger_2016_p7_4a_current_inhibition](drugs/drug_amantadine/pd_Breitinger_2016_p7_4a_current_inhibition.md) | Inhibition of p7-4a-mediated current by amantadine ← amantadine · inhibition effect | — | Breitinger U et al., Patch-Clamp Study of Hepatitis C p7 Cha…, Biophysical journal (2016) | [10.1016/j.bpj.2016.04.018](https://doi.org/10.1016/j.bpj.2016.04.018) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 0.70).">rat</span> | [Brigham_2018_LID](drugs/drug_amantadine/pd_Brigham_2018_LID.md) | antidyskinetic efficacy (reduction of levodopa-induced dyskinesia) ← amantadine · direct Emax (saturable) effect | — | Brigham EF et al., Pharmacokinetic/Pharmacodynamic Correla…, The Journal of pharmacology… (2018) | [10.1124/jpet.118.247650](https://doi.org/10.1124/jpet.118.247650) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">in vitro</span> | [Channar_2018_CA_II](drugs/drug_amantadine/pd_Channar_2018_CA_II.md) | carbonic anhydrase II inhibition ← 6b (amantadine-derived phenolic azo Schiff base) · inhibition effect | — | Channar PA et al., Extending the scope of amantadine drug…, Chemical biology & drug des… (2018) | [10.1111/cbdd.13335](https://doi.org/10.1111/cbdd.13335) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">in vitro</span> | [Fink_2021_SARS_CoV_2_replication_inhibition](drugs/drug_amantadine/pd_Fink_2021_SARS_CoV_2_replication_inhibition.md) | SARS-CoV-2 replication inhibition ← amantadine · inhibition effect | — | Fink K et al., Amantadine Inhibits SARS-CoV-2 In Vitro, Viruses (2021) | [10.3390/v13040539](https://doi.org/10.3390/v13040539) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">other animal</span> | [Matsubayashi_1997_type_IA_current](drugs/drug_amantadine/pd_Matsubayashi_1997_type_IA_current.md) | type IA nicotinic current (alpha 7 nAChR-mediated, ACh-evoked) peak amplitude ← amantadine · direct sigmoid Emax (Hill) effect | — | Matsubayashi H et al., Amantadine inhibits nicotinic acetylcho…, The Journal of pharmacology… (1997) | — |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">other animal</span> | [Matsubayashi_1997_type_IA_current_coapplication](drugs/drug_amantadine/pd_Matsubayashi_1997_type_IA_current_coapplication.md) | type IA nicotinic current (alpha 7 nAChR-mediated) with brief coapplication of amantadine with ACh ← amantadine · direct sigmoid Emax (Hill) effect | — | Matsubayashi H et al., Amantadine inhibits nicotinic acetylcho…, The Journal of pharmacology… (1997) | — |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">other animal</span> | [Matsubayashi_1997_type_III_current](drugs/drug_amantadine/pd_Matsubayashi_1997_type_III_current.md) | type III nicotinic current (alpha 3 beta 4 nAChR-mediated) peak amplitude ← amantadine · inhibition effect | — | Matsubayashi H et al., Amantadine inhibits nicotinic acetylcho…, The Journal of pharmacology… (1997) | — |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">other animal</span> | [Matsubayashi_1997_type_II_current](drugs/drug_amantadine/pd_Matsubayashi_1997_type_II_current.md) | type II nicotinic current (alpha 4 beta 2 nAChR-mediated) decay-time constant and sustained current amplitude ← amantadine · inhibition effect | — | Matsubayashi H et al., Amantadine inhibits nicotinic acetylcho…, The Journal of pharmacology… (1997) | — |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Rahman_2017_EC50](drugs/drug_amantadine/pd_Rahman_2017_EC50.md) | inhibition of virus-induced cytopathic effect (MTT assay) ← amantadine · direct sigmoid Emax (Hill) effect | — | Rahman M et al., Molecular analysis of amantadine-resist…, Virus genes (2017) | [10.1007/s11262-017-1447-x](https://doi.org/10.1007/s11262-017-1447-x) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (cat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">cat</span> | [Siao_2012_TT](drugs/drug_amantadine/pd_Siao_2012_TT.md) | Thermal threshold (also skin temperature and thermal excursion, transformed as % maximum response) ← oxymorphone (amantadine evaluated as treatment factor at fixed 1100 ng/mL plasma concentration) · direct Emax (saturable) effect | — | Siao KT et al., Effect of amantadine on oxymorphone-ind…, Journal of veterinary pharm… (2012) | [10.1111/j.1365-2885.2011.01305.x](https://doi.org/10.1111/j.1365-2885.2011.01305.x) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Wang_2009_AM2_current](drugs/drug_amantadine/pd_Wang_2009_AM2_current.md) | AM2 proton channel current (inhibition by amantadine, two-electrode voltage-clamp assay) ← amantadine · inhibition effect | — | Wang J et al., Discovery of spiro-piperidine inhibitor…, Journal of the American Che… (2009) | [10.1021/ja900063s](https://doi.org/10.1021/ja900063s) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.25). The first reading is what the record holds.">cross-check: partial</span> | **SLC22A1** | `Q40` · Fab | transport | [Becker_2011](drugs/drug_amantadine/pgx_Becker_2011_SLC22A1_Q40.md) | Becker ML et al., OCT1 polymorphism is associated with re…, Neurogenetics (2011) | [10.1007/s10048-010-0254-5](https://doi.org/10.1007/s10048-010-0254-5) |

<details class="pk-legend"><summary>What the PGx badges mean — evidence, and whether a model runs</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>the paper gives the effect of each phenotype (or genotype) on a named model parameter — a θ per category.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>the effect comes from a CPIC / DPWG dosing guideline, not from this paper's numbers.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>the paper's popPK model runs per phenotype in the browser (Simulation tab); its PGx Modelica model is under Models.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>a PGx Modelica model exists but has no in-browser simulator.</td></tr></tbody></table></details>

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=amantadine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | brain | `MAOB` inhibitor | DrugBank actor |
| metabolism | liver | `SLC22A1` inhibitor/substrate/transport | DrugBank actor |
| metabolism | platelet | `MAOB` inhibitor | DrugBank actor |
| excretion | kidney | `SLC22A2` inhibitor/substrate | DrugBank actor |

<sub>Actors without a tissue in the table: CHRNA3 (target), CHRNA4 (target), CHRNA7 (target), DDC (inducer), DRD2 (target), GRIN3A (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 305 matched, 152 returned
- **screened:** 6  ·  **relevant:** 6
- **records:** 9  ·  extracted 3  ·  needs_review 4  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Siao_2011.pdf` | Siao KT et al., Pharmacokinetics of amantadine in cats, Journal of veterinary pharm… (2011) | popPK | 10 | [10.1111/j.1365-2885.2011.01278.x](https://doi.org/10.1111/j.1365-2885.2011.01278.x) | [21323678](https://pubmed.ncbi.nlm.nih.gov/21323678) | Original compartmental PK study of amantadine in cats with full numeric parameters (V, CL, half-life, bioavailability) present in the abstract. |
| `Aoki_1985.pdf` | Aoki FY et al., Amantadine kinetics in healthy elderly…, Clinical pharmacology and t… (1985) | popPK | 8 | [10.1038/clpt.1985.25](https://doi.org/10.1038/clpt.1985.25) | [3967456](https://pubmed.ncbi.nlm.nih.gov/3967456) | Human PK study of amantadine with one-compartment model reporting t1/2, Vd, renal clearance values in the abstract, though some parameters may only be in tables not shown. |
| `Kornhuber_2006.pdf` | Kornhuber J et al., Pharmacokinetic characterization of ama…, Therapeutic drug monitoring (2006) | popPK | 8 | [10.1097/01.ftd.0000245390.48552.04](https://doi.org/10.1097/01.ftd.0000245390.48552.04) | [17038888](https://pubmed.ncbi.nlm.nih.gov/17038888) | Population PK parameters (kel, t1/2, V) for amantadine in human brain tissue are reported directly with numeric values. |
| `Brigham_2018.pdf` | Brigham EF et al., Pharmacokinetic/Pharmacodynamic Correla…, The Journal of pharmacology… (2018) | popPK | 7 | [10.1124/jpet.118.247650](https://doi.org/10.1124/jpet.118.247650) | [30087157](https://pubmed.ncbi.nlm.nih.gov/30087157) | PK profiles of amantadine were determined in mice, rats, and macaques for a PK/PD model, but the evidence only shows EC50 values (~1025–1633 ng/ml); the actual disposition parameters (CL, V, etc.) appear to live in figures/tables not provided. |
| `Norkus_2015.pdf` | Norkus C et al., Pharmacokinetics of oral amantadine in…, Journal of veterinary pharm… (2015) | popPK | 7 | [10.1111/jvp.12190](https://doi.org/10.1111/jvp.12190) | [25427541](https://pubmed.ncbi.nlm.nih.gov/25427541) | Original NCA PK study in greyhound dogs with numeric Cmax, Tmax, and half-life reported, though no CL or V values appear in the evidence. |

<sub>queue written 2026-10-06T12:39:18.783257+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abd_2025 | irrelevant | 0 | 0 | Amantadine is only a reference comparator with an EC50 antiviral value; no PK disposition parameters are reported. |
| popPK | Achilli_2026 | irrelevant | 0 | 0 | Computational neuroscience study of GABAergic modulation in disorders of consciousness; no PK parameters for amantadine (zolpidem only mentioned, no disposition values). |
| popPK | Al-Salahi_2019 | irrelevant | 0 | 0 | Amantadine is only an in-vitro comparator standard; no PK parameters reported. |
| PGx | Bates_2008 | not_relevant | 2 | 5 | Amantadine is used as an endocytosis inhibitor; SP-A genotype alters lipid uptake, not amantadine PK/PD parameters. |
| PGx | Berg_2003 | not_relevant | 0 | 0 | not captured |
| PGx | Bizollon_2005 | not_relevant | 0 | 0 | Clinical efficacy study of triple antiviral therapy; no gene variant/genotype effect on amantadine PK/PD reported (HCV genotype only). |
| popPK | Brigham_2018 | relevant | 7 | 3 | PK profiles of amantadine were determined in mice, rats, and macaques for a PK/PD model, but the evidence only shows EC50 values (~1025–1633 ng/ml); the actual disposition parameters (CL, V, etc.) appear to live in figures/tables not provided. |
| popPK | Brooks_2012 | irrelevant | 0 | 0 | Amantadine appears only as a comparator in an in-vitro antiviral study of arbidol, with no PK parameters for amantadine. |
| PGx | Cacabelos_2017 | not_relevant | 2 | 1 | General PD pharmacogenomics review; amantadine only listed as a drug with no gene-variant effect on its PK/PD parameters reported. |
| popPK | Campos_2025 | irrelevant | 0 | 0 | Amantadine is only mentioned as a comparator drug in an antiviral potency study; no PK parameters for amantadine are reported. |
| popPK | Capó_2025 | irrelevant | 0 | 0 | This is a review of NMDA receptors in CNS disorders; amantadine is not the subject drug and no PK parameters appear. |
| PGx | Chen_2012 | not_relevant | 0 | 0 | Meta-analysis of amantadine efficacy in HCV therapy; no gene variant or PK/PD parameter reported. |
| popPK | Contin_2022 | irrelevant | 0 | 0 | This is a levodopa pharmacokinetic study; amantadine is not the subject drug and no amantadine parameters appear. |
| popPK | Costello_2023 | irrelevant | 0 | 0 | This is a clinical study of depression symptoms in Parkinson's disease; amantadine is only one co-analyzed medication class with no PK parameters reported. |
| popPK | Dang_2014 | irrelevant | 0 | 0 | Amantadine is only mentioned as a resistance comparator; no PK parameters for amantadine are reported. |
| PGx | Daruich_2010 | not_relevant | 0 | 0 | Paper reviews HCV treatment with peginterferon/ribavirin; amantadine only mentioned as controversial add-on with no pharmacogenomic PK/PD data. |
| popPK | Dong_2020 | irrelevant | 0 | 0 | Medicinal chemistry study of novel anti-influenza derivatives with in vitro antiviral assays; no PK parameters for amantadine reported. |
| popPK | Dong_2025 | irrelevant | 0 | 0 | This is a medicinal chemistry study of amantadine-derived antiviral compounds with only in vitro antiviral assays and predicted ADMET, no PK disposition parameters for amantadine. |
| PGx | Ehrhardt_2007 | not_relevant | 0 | 0 | Paper studies a plant extract's antiviral activity; amantadine only mentioned regarding resistance, no gene variant effect on PK/PD. |
| PGx | Ehrhardt_2013 | not_relevant | 0 | 0 | Paper studies a plant extract's antiviral activity; amantadine is only a resistance-development reference, with no gene variant/genotype effect on PK or PD parameters. |
| PGx | Engler_2004 | not_relevant | 0 | 0 | No gene variant or pharmacogenomic effect on amantadine PK/PD is reported; "genotype" refers only to HCV viral genotype. |
| popPK | Fernández-Llaneza_2025 | irrelevant | 0 | 0 | This is a drug-safety knowledge aggregation study on AKI potential; amantadine is only listed among drugs and no PK parameters appear. |
| popPK | Freudenthaler_1998 | irrelevant | 0 | 3 | The study is about memantine, a different drug, not amantadine; renal clearance values are for memantine only. |
| PGx | Gaeta_2001 | not_relevant | 0 | 0 | not captured |
| popPK | Gordon_2017 | irrelevant | 0 | 0 | This is an in-vitro antiviral drug-discovery study of copper complexes; amantadine is only mentioned as a resistance reference, with no PK parameters. |
| popPK | Guo_2025 | irrelevant | 0 | 0 | This is a proteome-wide mendelian randomization study on lymphoma drug targets; amantadine is not studied and no PK parameters appear. |
| PGx | Helbling_2002 | not_relevant | 0 | 0 | not captured |
| popPK | Hu_2017 | irrelevant | 0 | 0 | Antiviral efficacy study of a spiroadamantane analog; amantadine is only a reference drug, no PK parameters reported. |
| PGx | Idéo_2002 | not_relevant | 0 | 0 | Review of HCV therapies mentioning amantadine only as a trial drug; no gene variant effect on PK/PD parameters. |
| popPK | Jaber_2021 | irrelevant | 0 | 0 | The paper models cortisol PK with a DNN absorption classifier; amantadine is only mentioned as an example of FDA guidance, with no amantadine PK parameters. |
| popPK | Jacob_2016 | irrelevant | 0 | 0 | This is an in vitro antiviral resistance study of H5N1 viruses; no PK parameters for amantadine are reported. |
| PGx | Jain_2022 | not_relevant | 0 | 0 | Systematic review of FA treatments; amantadine mentioned only as an intervention count, with no gene variant effects on PK/PD parameters. |
| popPK | Jalily_2016 | irrelevant | 0 | 0 | In vitro virology study of M2 inhibitors; amantadine is only a comparator, no PK parameters. |
| popPK | Jefferson_2014 | irrelevant | 0 | 0 | This is a Cochrane review of neuraminidase inhibitors (oseltamivir/zanamivir) efficacy; amantadine is not the subject and no PK parameters are reported. |
| popPK | Ji_2022 | irrelevant | 0 | 0 | Amantadine (1-adamantanamine) is only used as a competitor trigger to release the bactericide; no PK parameters for it are reported. |
| popPK | Kamal_2015 | irrelevant | 0 | 0 | This is an oseltamivir drug-disease (viral dynamics) model; amantadine is not the subject drug and no amantadine PK parameters appear. |
| PGx | Kamar_2006 | not_relevant | 0 | 0 | No pharmacogenomic effect on amantadine PK/PD is reported; genotype refers to HCV viral genotype, not host genetics affecting drug parameters. |
| popPK | Kang_2015 | irrelevant | 0 | 0 | Amantadine is only a comparator in antiviral potency assays; no PK parameters reported. |
| PGx | Keating_2003 | not_relevant | 0 | 0 | Review of peginterferon/ribavirin efficacy; amantadine only mentioned as co-therapy with no gene variant or PK/PD pharmacogenomic data. |
| PGx | Khalili_2000 | not_relevant | 0 | 0 | Clinical trial comparing interferon+ribavirin vs interferon+amantadine efficacy; no gene variant effects on amantadine PK/PD reported. |
| popPK | Kim_2012 | irrelevant | 0 | 0 | Amantadine is only a comparator antiviral in an in vitro antiviral assay; no PK parameters reported. |
| popPK | Kinnings_2010 | irrelevant | 0 | 0 | This is a computational drug-target network study of M. tuberculosis with no pharmacokinetic parameters for amantadine (or any drug) reported. |
| PGx | Kok_2010 | not_relevant | 2 | 3 | A1AT genotype is only associated with SVR (treatment outcome), not with any PK/PD parameter of amantadine. |
| popPK | Kumar_2011 | irrelevant | 0 | 0 | Amantadine is only mentioned as a comparator for resistance emergence; no PK parameters for amantadine are reported. |
| popPK | Lago_2022 | irrelevant | 0 | 0 | This is a schizophrenia drug-target/repurposing review; amantadine is not studied and no PK parameters appear. |
| PGx | Lake-Bakaar_2003 | not_relevant | 0 | 0 | No gene variant/genotype/phenotype is studied; paper reports drug combination effects on viral kinetics, not pharmacogenomics. |
| popPK | Liu_2022 | irrelevant | 0 | 0 | Antiviral efficacy study of ABMA/DABMA; amantadine is only a comparator, no PK parameters reported. |
| PGx | Loustaud-Ratti_2008 | not_relevant | 0 | 0 | Study relates ribavirin exposure to SVR; no gene variant/genotype effect on amantadine PK/PD reported. |
| popPK | Luo_2024 | irrelevant | 0 | 0 | Machine-learning drug discovery study on zebrafish brain activity maps; no PK parameters for amantadine are reported. |
| popPK | Luo_2025 | irrelevant | 0 | 0 | This is an in vitro machine-learning drug-synergy study for pimodivir combinations; amantadine is only mentioned as a resistance statistic, with no PK parameters for amantadine. |
| popPK | Ma_2024 | irrelevant | 0 | 0 | This is a medicinal chemistry/antiviral study of novel degraders; amantadine appears only as a resistant strain reference, with no PK parameters. |
| PGx | Mangia_2001 | not_relevant | 0 | 0 | not captured |
| popPK | Mao_2016 | irrelevant | 0 | 0 | This is a population pharmacodynamic (disease progression/Emax) model of levodopa (IPX066); amantadine appears only as an allowed co-medication, with no amantadine PK parameters reported. |
| PGx | Marcellin_2004 | not_relevant | 0 | 0 | Amantadine is only mentioned as an investigational drug; no gene variant effect on PK/PD parameters is reported. |
| popPK | Matsubayashi_1997 | irrelevant | 0 | 0 | In-vitro electrophysiology study of receptor inhibition; no PK disposition parameters for amantadine. |
| PGx | McHutchison_2004 | not_relevant | 0 | 0 | Amantadine is only mentioned as a potential add-on therapy; no gene variant or PK/PD pharmacogenomic effect is reported. |
| popPK | Mehrbod_2021 | irrelevant | 0 | 0 | In-vitro antiviral screening of plant extracts; amantadine is only a positive-control comparator with no PK parameters. |
| popPK | Mindlin_2024 | irrelevant | 0 | 0 | This is a whole-brain computational modelling study of disorders of consciousness; amantadine is only mentioned as a treatment option and no PK parameters for it are reported. |
| popPK | Nomoto_2005 | irrelevant | 2 | 1 | Review-style discussion mentioning amantadine only qualitatively (renal excretion) with no PK parameters for amantadine; population PK values concern levodopa. |
| PGx | Nomoto_2005 | not_relevant | 1 | 2 | Amantadine PK variability is attributed to renal function, not any gene variant/genotype/phenotype. |
| PGx | Oguz_2005 | not_relevant | 0 | 0 | Clinical efficacy study of amantadine triple therapy in HCV; no gene variant or PK/PD parameter reported. |
| popPK | Ohk_2022 | irrelevant | 0 | 0 | This is a population PK study of sumatriptan, not amantadine; amantadine is only mentioned as an OCT2 example with no amantadine PK parameters reported. |
| popPK | Othman_2024 | irrelevant | 0 | 0 | Study protocol about apomorphine/methylphenidate in brain injury; amantadine only mentioned as a comparator, no PK parameters reported. |
| popPK | Parsons_1999 | irrelevant | 1 | 1 | Amantadine is only a comparator in NMDA receptor assays; the PK parameters (half-life, bioavailability) are for MRZ 2/579, not amantadine. |
| popPK | Peeters_2004 | irrelevant | 0 | 0 | Mechanistic pharmacology study of sigma1 receptor binding; no PK disposition parameters for amantadine are reported. |
| PGx | Piai_2003 | not_relevant | 0 | 0 | Genotype refers to HCV viral genotype, not a host pharmacogenomic variant affecting amantadine PK/PD. |
| PGx | Puoti_2004 | not_relevant | 0 | 0 | This is a clinical trial of amantadine efficacy in HCV/HIV co-infection; no gene variant/genotype/phenotype effects on amantadine PK or PD parameters are reported. |
| popPK | Rahman_2017 | irrelevant | 0 | 0 | In-vitro antiviral susceptibility study (EC50 in MDCK cells) with no pharmacokinetic disposition parameters for amantadine. |
| popPK | Reis_2026 | irrelevant | 0 | 0 | In vitro antiviral study of eugenol-derived Mannich bases; amantadine is only a reference control for CHIKV assays, with no PK parameters for amantadine. |
| popPK | Rosales-Mendoza_2020 | irrelevant | 0 | 0 | This is a review on algal antiviral compounds; amantadine is not the subject drug and no PK parameters for it appear. |
| PGx | Salomon_2014 | not_relevant | 2 | 3 | Amantadine is only used as an inhibitor of ASP(+) uptake in a cell model; no gene variant/genotype effect on amantadine PK/PD is reported. |
| popPK | Sargent_2020 | irrelevant | 0 | 0 | This is a clinical association study of anticholinergic burden with cognitive/frailty outcomes, with no pharmacokinetic parameters for amantadine reported. |
| popPK | Siao_2012 | irrelevant | 1 | 2 | Amantadine is a co-administered agent in a feline pharmacodynamic interaction study; no PK disposition parameters (CL, V, half-life) for amantadine are reported, only target plasma concentrations. |
| popPK | Silva-Reis_2023 | irrelevant | 0 | 0 | This is a pharmacology/synthesis study of amantadine-peptide bioconjugates with receptor potency and cytotoxicity data, not a PK study reporting disposition parameters for amantadine. |
| popPK | Smee_2002 | irrelevant | 0 | 0 | In vitro antiviral assay methods comparison; no PK disposition parameters for amantadine. |
| PGx | Steinmann_2007 | not_relevant | 0 | 0 | Paper studies antiviral effects of amantadine against HCV; no gene variant effect on amantadine PK/PD parameters reported. |
| PGx | Sugaya_2000 | not_relevant | 0 | 0 | Paper discusses influenza encephalopathy pathogenesis and amantadine use, but no gene variant effect on amantadine PK/PD parameters. |
| popPK | Sugaya_2012 | irrelevant | 0 | 0 | This is a population PK study of peramivir, not amantadine; no amantadine parameters are reported. |
| PGx | Tang_2024 | not_relevant | 0 | 0 | Study examines TSS effects on CYP expression in vitro; no gene variant/genotype effect on amantadine PK/PD parameters reported. |
| PGx | Teuber_2003 | not_relevant | 0 | 0 | HCV genotype affects treatment response, not amantadine PK/PD parameters; no pharmacogenomic effect on amantadine reported. |
| PGx | Thomas_2004 | not_relevant | 0 | 0 | Paper concerns imatinib transport; amantadine appears only as an hOCT1 inhibitor, with no gene variant effect on amantadine PK/PD. |
| PGx | Thuluvath_2004 | not_relevant | 2 | 0 | HCV viral genotype (not host gene variant) predicts treatment response; no pharmacogenomic effect on amantadine PK/PD parameters reported. |
| popPK | Tokmakjian_2026 | irrelevant | 0 | 0 | This is a C. elegans CAD defense/metabolism study with no amantadine PK parameters; amantadine is not even a subject drug here. |
| popPK | Tonelli_2017 | irrelevant | 0 | 0 | This is an antiviral drug-discovery/medicinal chemistry paper on cycloguanil analogues; amantadine is only mentioned as a comparator and no PK parameters for it are reported. |
| PGx | Uyama_2007 | not_relevant | 0 | 0 | Study reports HCV treatment efficacy (SVR rates) with amantadine combination therapy; no gene variant effect on amantadine PK/PD parameters. |
| popPK | Vamecq_1998 | irrelevant | 0 | 0 | No pharmacokinetic parameters for amantadine; it is only mentioned as showing no anti-HIV activity in an anticonvulsant/antiviral screening study. |
| popPK | Venuto_2021 | irrelevant | 0 | 0 | This is a population PK study of isradipine, not amantadine; no amantadine parameters are reported. |
| PGx | Vrolijk_2004 | not_relevant | 0 | 0 | not captured |
| popPK | Wu_2015 | irrelevant | 0 | 0 | Medicinal chemistry study of isocyanide antiviral analogues; amantadine is only a comparator with EC50 potency data, no PK disposition parameters. |
| PGx | Yang_2010 | not_relevant | 0 | 0 | In vitro antiviral drug combination study with no gene variant/genotype/phenotype effects on amantadine PK or PD parameters. |
| PGx | Yang_2025 | not_relevant | 1 | 1 | FAERS/network toxicology study of adverse events; no gene variant effect on amantadine PK/PD parameters reported. |
| PGx | Younossi_2003 | not_relevant | 0 | 0 | Clinical efficacy study of triple therapy in hepatitis C; no gene variant effects on amantadine PK/PD reported. |
| popPK | Yu_2019 | irrelevant | 0 | 0 | This is a medicinal chemistry/SAR study of new inhibitors; amantadine is only a reference comparator with no PK parameters reported. |
| popPK | Yukawa_2002 | irrelevant | 0 | 0 | This is a population-PK study of haloperidol; amantadine is only mentioned as a co-administered antiparkinsonian drug with no amantadine PK parameters. |
| popPK | Zarubaev_2015 | irrelevant | 0 | 0 | Amantadine is only a comparator for resistance testing; no PK parameters for amantadine are reported. |
| popPK | Zhan_2012 | irrelevant | 0 | 0 | Amantadine is only a comparator in antiviral potency assays; no PK parameters reported. |
| popPK | unknown_2017 | irrelevant | 0 | 0 | no_text gate: only 20 chars of text extracted (&lt; 400) |
| PGx | van_2010 | not_relevant | 0 | 0 | not captured |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 12:39 UTC</sub>
