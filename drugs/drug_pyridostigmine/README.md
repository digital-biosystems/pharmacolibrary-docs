<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N07A&quot;,&quot;href&quot;:&quot;atc/N07A.md&quot;},{&quot;label&quot;:&quot;pyridostigmine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Pyridostigmine_Hosseini2018_reference&quot;,&quot;label&quot;:&quot;Hosseini_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_pyridostigmine/Pyridostigmine_Hosseini2018_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Pyridostigmine_Seng2009_reference&quot;,&quot;label&quot;:&quot;Seng_2009_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_pyridostigmine/Pyridostigmine_Seng2009_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Pyridostigmine_Thakkar2017_reference&quot;,&quot;label&quot;:&quot;Thakkar_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_pyridostigmine/Pyridostigmine_Thakkar2017_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# pyridostigmine

- **generic name:** pyridostigmine
- **ATC codes:** `N07AA02`
- **DrugBank:** [DB00545](https://go.drugbank.com/drugs/DB00545) · **PubChem:** [CID 4991](https://pubchem.ncbi.nlm.nih.gov/compound/4991)
- **molar mass:** 181.2117 g/mol (C9H13N2O2) — DrugBank
- **groups:** approved, investigational

## About

Pyridostigmine is a medication used to treat myasthenia gravis. It is an acetylcholinesterase inhibitor included on the WHO list of essential medicines and is approved, so it remains in widespread use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q419472](https://www.wikidata.org/wiki/Q419472) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| pyridostigmine | parent | 181.212 | C9H13N2O2 | DrugBank | [4991](https://pubchem.ncbi.nlm.nih.gov/compound/4991) | Seng_2009 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 02:15 | 11:07 | 3/0/0 | 8/0/2 | 0/0/1 | 358,770/14,218 | ollama / glm-5.3-flash | 15 | 1/10 | 14/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Hosseini_2018_reference](drugs/drug_pyridostigmine/Pyridostigmine_Hosseini2018_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Hosseini I et al., gPKPDSim: a SimBiology&lt;sup&gt;®&lt;/sup&gt;-base…, Journal of pharmacokinetics… (2018) | [10.1007/s10928-017-9562-9](https://doi.org/10.1007/s10928-017-9562-9) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Seng_2009_reference](drugs/drug_pyridostigmine/Pyridostigmine_Seng2009_reference.md) | ▶ model + simulator | 1-compartment, oral | 4 | Seng KY et al., Retrospective population pharmacokineti…, The Journal of pharmacy and… (2009) | [10.1211/jpp/61.09.0008](https://doi.org/10.1211/jpp/61.09.0008) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Thakkar_2017_reference](drugs/drug_pyridostigmine/Pyridostigmine_Thakkar2017_reference.md) | ▶ model + simulator | 2-compartment, oral | 4 | Thakkar N et al., Population Pharmacokinetics/Pharmacodyn…, CPT: pharmacometrics & syst… (2017) | [10.1002/psp4.12218](https://doi.org/10.1002/psp4.12218) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Aquilonius_1983_decrement_in_the_deltoid_muscle](drugs/drug_pyridostigmine/pd_Aquilonius_1983_decrement_in_the_deltoid_muscle.md) | decrement in the deltoid muscle ← pyridostigmine · model not identified | — | Aquilonius SM et al., Clinical pharmacology of pyridostigmine…, Journal of neurology, neuro… (1983) | [10.1136/jnnp.46.10.929](https://doi.org/10.1136/jnnp.46.10.929) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">rat</span> | [Bartkowski_1987_reversal_of_pancuronium_neuromuscular_blockade_tension](drugs/drug_pyridostigmine/pd_Bartkowski_1987_reversal_of_pancuronium_neuromuscular_blocka.md) | reversal of pancuronium neuromuscular blockade (tension) ← pyridostigmine · direct Emax (saturable) effect | — | Bartkowski RR, Incomplete reversal of pancuronium neur…, Anesthesia and analgesia (1987) | — |
| <span class="pk-badge pk-badge--green">extracted</span> | [Donati_1987_T1](drugs/drug_pyridostigmine/pd_Donati_1987_T1.md) | first twitch height recovery ← pyridostigmine · direct sigmoid Emax (Hill) effect | — | Donati F et al., Dose-response curves for edrophonium, n…, Anesthesiology (1987) | [10.1097/00000542-198704000-00004](https://doi.org/10.1097/00000542-198704000-00004) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Donati_1987_TOF](drugs/drug_pyridostigmine/pd_Donati_1987_TOF.md) | train-of-four ratio ← pyridostigmine · direct sigmoid Emax (Hill) effect | — | Donati F et al., Dose-response curves for edrophonium, n…, Anesthesiology (1987) | [10.1097/00000542-198704000-00004](https://doi.org/10.1097/00000542-198704000-00004) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Mansour_1987_22_Na_influx](drugs/drug_pyridostigmine/pd_Mansour_1987_22_Na_influx.md) | carbachol-stimulated [22-Na] influx ← pyridostigmine · inhibition effect | — | Mansour NA et al., Biochemical interactions of carbamates…, Journal of biochemical toxi… (1987) | [10.1002/jbt.2570020104](https://doi.org/10.1002/jbt.2570020104) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Mansour_1987_3_H_PCP_binding](drugs/drug_pyridostigmine/pd_Mansour_1987_3_H_PCP_binding.md) | carbachol-activated [3-H]-phencyclidine binding to AChR channel sites ← pyridostigmine · inhibition effect | — | Mansour NA et al., Biochemical interactions of carbamates…, Journal of biochemical toxi… (1987) | [10.1002/jbt.2570020104](https://doi.org/10.1002/jbt.2570020104) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Marino_1998_RBC_AChE](drugs/drug_pyridostigmine/pd_Marino_1998_RBC_AChE.md) | red blood cell acetylcholinesterase activity ← pyridostigmine · delayed effect through an effect compartment | — | Marino MT et al., Population pharmacokinetics and pharmac…, Journal of clinical pharmac… (1998) | [10.1002/j.1552-4604.1998.tb04420.x](https://doi.org/10.1002/j.1552-4604.1998.tb04420.x) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">mouse</span> | [Wilson_2002_AChE](drugs/drug_pyridostigmine/pd_Wilson_2002_AChE.md) | acetylcholinesterase (AChE) activity inhibition ← pyridostigmine · inhibition effect | — | Wilson BW et al., Actions of pyridostigmine and organopho…, Drug and chemical toxicology (2002) | [10.1081/dct-120003255](https://doi.org/10.1081/dct-120003255) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">mouse</span> | [Wilson_2002_NTE](drugs/drug_pyridostigmine/pd_Wilson_2002_NTE.md) | neuropathy target esterase (NTE) inhibition ← pyridostigmine · inhibition effect | — | Wilson BW et al., Actions of pyridostigmine and organopho…, Drug and chemical toxicology (2002) | [10.1081/dct-120003255](https://doi.org/10.1081/dct-120003255) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Yamamoto_1996_HR](drugs/drug_pyridostigmine/pd_Yamamoto_1996_HR.md) | heart rate (bradycardiac response) ← pyridostigmine · delayed effect through an effect compartment | — | Yamamoto K et al., Toxicodynamic analysis of cardiac effec…, The Journal of pharmacy and… (1996) | [10.1111/j.2042-7158.1996.tb06006.x](https://doi.org/10.1111/j.2042-7158.1996.tb06006.x) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Yamamoto_1996_2_contractile_tension](drugs/drug_pyridostigmine/pd_Yamamoto_1996_2_contractile_tension.md) | developed tension of triceps muscle induced by sciatic nerve stimulation ← pyridostigmine · inhibition effect | — | Yamamoto K et al., Pharmacodynamic analysis of contractile…, Journal of pharmacokinetics… (1996) | [10.1007/BF02353516](https://doi.org/10.1007/BF02353516) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Hosseini_2018_muscular_response](drugs/drug_pyridostigmine/pd_Hosseini_2018_muscular_response.md) | percent gain of muscular response ← pyridostigmine · indirect response — drug inhibits the loss of percent gain of muscular response | model (no simulator) | Hosseini I et al., gPKPDSim: a SimBiology&lt;sup&gt;®&lt;/sup&gt;-base…, Journal of pharmacokinetics… (2018) | [10.1007/s10928-017-9562-9](https://doi.org/10.1007/s10928-017-9562-9) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Seng_2009_AChE](drugs/drug_pyridostigmine/pd_Seng_2009_AChE.md) | red blood cell acetylcholinesterase (AChE) activity ← pyridostigmine · direct Emax (saturable) effect | model (no simulator) | Seng KY et al., Retrospective population pharmacokineti…, The Journal of pharmacy and… (2009) | [10.1211/jpp/61.09.0008](https://doi.org/10.1211/jpp/61.09.0008) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **PON2** | `Q321` · EC50 | metabolism | [Parween_2021](drugs/drug_pyridostigmine/pgx_Parween_2021_PON2_Q321.md) | Parween F et al., Association between human paraoxonase 2…, PloS one (2021) | [10.1371/journal.pone.0258879](https://doi.org/10.1371/journal.pone.0258879) |

<details class="pk-legend"><summary>What the PGx badges mean — evidence, and whether a model runs</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>the paper gives the effect of each phenotype (or genotype) on a named model parameter — a θ per category.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>the effect comes from a CPIC / DPWG dosing guideline, not from this paper's numbers.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>the paper's popPK model runs per phenotype in the browser (Simulation tab); its PGx Modelica model is under Models.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>a PGx Modelica model exists but has no in-browser simulator.</td></tr></tbody></table></details>

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=pyridostigmine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood | <sub>named in DrugBank's ADME text</sub> | prose |
| absorption | liver | <sub>named in DrugBank's ADME text</sub> | prose |
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | blood | `BCHE` inhibitor/substrate | DrugBank actor |
| metabolism | liver | `BCHE` inhibitor/substrate, `CYP3A4` inducer | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| — | blood | `ACHE` inhibitor/substrate | DrugBank actor |
| — | neuromuscular junction | `ACHE` inhibitor/substrate | DrugBank actor |

<sub>Actors without a tissue in the table: F10 (inhibitor), PON2 (metabolism).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 110 matched, 73 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 3  ·  extracted 3  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Seng_2009.pdf` | Seng KY et al., Retrospective population pharmacokineti…, The Journal of pharmacy and… (2009) | popPK | 10 | [10.1211/jpp/61.09.0008](https://doi.org/10.1211/jpp/61.09.0008) | [19703368](https://pubmed.ncbi.nlm.nih.gov/19703368) | Population PK (NONMEM) of pyridostigmine with CL, V, and ka values reported directly in the abstract. |
| `Hennis_1984.pdf` | Hennis PJ et al., Metabolites of neostigmine and pyridost…, Anesthesiology (1984) | popPK | 8 | [10.1097/00000542-198411000-00010](https://doi.org/10.1097/00000542-198411000-00010) | [6149707](https://pubmed.ncbi.nlm.nih.gov/6149707) | PK of pyridostigmine and its metabolite MP in dogs with a three-compartment model, but numeric half-life/Vdss/CL values are only described qualitatively in the abstract, not given. |
| `Marino_1998.pdf` | Marino MT et al., Population pharmacokinetics and pharmac…, Journal of clinical pharmac… (1998) | popPK | 8 | [10.1002/j.1552-4604.1998.tb04420.x](https://doi.org/10.1002/j.1552-4604.1998.tb04420.x) | [9549661](https://pubmed.ncbi.nlm.nih.gov/9549661) | Human population PK (NONMEM two-compartment) of pyridostigmine is described, but no numeric parameter values (CL, V, ka) appear in the evidence provided. |
| `Tan_2012.pdf` | Tan QY et al., Role of a novel pyridostigmine bromide-…, Archives of pharmacal resea… (2012) | popPK | 5 | [10.1007/s12272-012-0313-6](https://doi.org/10.1007/s12272-012-0313-6) | [22477197](https://pubmed.ncbi.nlm.nih.gov/22477197) | Rat PK study of pyridostigmine with a two-compartment model, but only Tmax, Cmax and AUC values are given; no CL/V/ka parameters appear, likely in the full paper's tables. |

<sub>queue written 2026-10-07T02:12:06.057680+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Ahmed_2026 | not_relevant | 0 | 0 | Pyridostigmine is only mentioned as a symptomatic treatment for vincristine neurotoxicity; no pharmacogenomic effect on pyridostigmine PK/PD parameters is reported. |
| PGx | Botta_2021 | not_relevant | 0 | 0 | HLA genotype is linked to pembrolizumab irAE risk (myositis/myasthenia), not to any PK/PD parameter of pyridostigmine. |
| popPK | Capacio_2001 | irrelevant | 0 | 0 | The PK model and parameters are for diazepam, not pyridostigmine, which is only a pretreatment agent. |
| popPK | Chen_2017 | irrelevant | 0 | 0 | This is a population-PK study of tacrolimus in myasthenia gravis patients; pyridostigmine appears only as a co-administered drug/DDI covariate, with no PK parameters for pyridostigmine itself. |
| popPK | Chen_2023 | irrelevant | 0 | 0 | This is a population PK/PD model of tacrolimus in myasthenia gravis; pyridostigmine is only mentioned as a co-administered drug, with no pyridostigmine PK parameters reported. |
| PGx | Cheshire_2019 | not_relevant | 0 | 0 | Review of nOH pharmacotherapy mentions pharmacogenetics only as future promise; no gene effect on pyridostigmine PK/PD reported. |
| PGx | Choi_2004 | not_relevant | 0 | 0 | In vitro enzyme inhibition study with no gene variant/genotype effect on pyridostigmine PK/PD; pyridostigmine showed no effect. |
| popPK | Choi_2013 | irrelevant | 0 | 0 | This is a pharmacodynamic (EEG sigmoid Emax) study of sevoflurane; pyridostigmine is only used for neuromuscular reversal with no PK parameters for it. |
| PGx | Golomb_2008 | not_relevant | 6 | 2 | Abstract mentions genotype-linked AChEi detoxification and illness but reports no specific PK/PD parameter effect for pyridostigmine. |
| PGx | Haley_1999 | not_relevant | 3 | 3 | PON1 genotype is associated with toxicity symptoms after pyridostigmine, not with any PK/PD parameter of the drug itself. |
| popPK | Hennis_1984 | relevant | 8 | 3 | PK of pyridostigmine and its metabolite MP in dogs with a three-compartment model, but numeric half-life/Vdss/CL values are only described qualitatively in the abstract, not given. |
| PGx | Hodgson_2005 | not_relevant | 3 | 1 | Abstract-level overview mentions polymorphic enzyme variants studied with pyridostigmine but reports no specific PK/PD effect sizes. |
| popPK | Hosseini_2018 | irrelevant | 0 | 0 | This is a software tool paper (gPKPDSim) with example PK parameters for other drugs, not pyridostigmine; no pyridostigmine data present. |
| popPK | Hrvat_2020 | irrelevant | 0 | 0 | This is a review of nerve agent countermeasures; pyridostigmine is not the subject drug and no PK parameters for it are reported. |
| popPK | Jaklitsch_1990 | irrelevant | 3 | 1 | Pyridostigmine is only one of several agents in a simulation model; no numeric PK parameter values for pyridostigmine appear in the evidence. |
| popPK | Jusko_1994 | irrelevant | 0 | 0 | PD modeling review mentioning pyridostigmine only as an example; no PK parameters or numeric values present. |
| PGx | Kerr_2015 | not_relevant | 2 | 1 | Overview mentions genotype subgroups in GWI associations but reports no PK/PD parameter effects for pyridostigmine. |
| popPK | Ki_2018 | irrelevant | 0 | 0 | This is a pharmacodynamic study of cerebral oxygen saturation vs end-tidal CO2; pyridostigmine is not mentioned and no PK parameters for it appear. |
| popPK | Krall_2026 | irrelevant | 0 | 0 | Clinical outcomes study of efgartigimod; pyridostigmine is only a co-medication with no PK parameters reported. |
| popPK | Lukey_1991 | irrelevant | 0 | 0 | The PK parameters reported (V, CL, ka model) are for diazepam in monkeys; pyridostigmine is only mentioned as a pretreatment, with no pyridostigmine parameters. |
| popPK | Marino_1998 | relevant | 8 | 3 | Human population PK (NONMEM two-compartment) of pyridostigmine is described, but no numeric parameter values (CL, V, ka) appear in the evidence provided. |
| popPK | Morris_1981 | irrelevant | 1 | 1 | Pyridostigmine is only mentioned as a comparator; the PK parameters reported are for edrophonium, not pyridostigmine. |
| popPK | Ricordel_2000 | irrelevant | 0 | 0 | A narrative review on chemical weapon antidotes with no PK parameters or numeric values for pyridostigmine. |
| popPK | Rocha_2014 | irrelevant | 0 | 0 | Ecotoxicity study reporting EC50/LOEC toxicity endpoints in Daphnia magna, not pharmacokinetic disposition parameters. |
| popPK | Rupp_1983 | irrelevant | 0 | 0 | This is a PK study of 4-aminopyridine in dogs; pyridostigmine is only mentioned as a comparator with no PK parameters for it. |
| popPK | Shin_2014 | irrelevant | 0 | 0 | This is a pharmacodynamic study of sevoflurane recovery; pyridostigmine is only mentioned as a co-administered reversal agent with no PK parameters. |
| popPK | Tan_2012 | relevant | 5 | 4 | Rat PK study of pyridostigmine with a two-compartment model, but only Tmax, Cmax and AUC values are given; no CL/V/ka parameters appear, likely in the full paper's tables. |
| popPK | Thakkar_2017 | irrelevant | 0 | 0 | This is a population PK study of 3,4-diaminopyridine (and its metabolite), not pyridostigmine; pyridostigmine appears only as a comedication covariate. |
| PGx | Usmani_2002 | not_relevant | 2 | 3 | Pyridostigmine only appears as an inhibitor/modulator of DEET metabolism in vitro; no gene variant effect on pyridostigmine PK/PD is reported. |
| PGx | Usmani_2003 | not_relevant | 2 | 3 | Reports chemical (pyridostigmine) effects on CYP3A4-mediated testosterone metabolism in vitro, not a gene variant/genotype effect on pyridostigmine PK/PD. |
| PGx | Wadman_2020 | not_relevant | 0 | 0 | Pyridostigmine trial only mentioned as pending; no gene variant effects on PK/PD reported. |
| popPK | Yamamoto_1996 | irrelevant | 3 | 2 | Toxicodynamic (effect-compartment PD) study in rats; no PK disposition parameters (CL, V, ka) for pyridostigmine reported, only EC50 values. |
| popPK | Zhang_2025 | irrelevant | 0 | 0 | Snake venom toxin protection study in mice; pyridostigmine not studied and no PK parameters reported. |
| popPK | unknown_2017 | irrelevant | 0 | 0 | no_text gate: only 20 chars of text extracted (&lt; 400) |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 02:12 UTC</sub>
