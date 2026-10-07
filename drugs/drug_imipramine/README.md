<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;imipramine&quot;}]"></div>

# imipramine

- **generic name:** imipramine
- **ATC codes:** `N06AA02`
- **DrugBank:** [DB00458](https://go.drugbank.com/drugs/DB00458) · **PubChem:** [CID 3696](https://pubchem.ncbi.nlm.nih.gov/compound/3696)
- **molar mass:** 280.4073 g/mol (C19H24N2) — DrugBank
- **groups:** approved, investigational

## About

Imipramine is a tricyclic antidepressant used for depression, panic disorder, attention deficit hyperactivity disorder, neurotic disorders, and pain. It is an approved medicine and remains in use, though it is not authorised centrally in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q58396](https://www.wikidata.org/wiki/Q58396) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| desipramine | metabolite | — (mass units only) | — | — | — | — |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 23:17 | 4:21 | 0/1/0 | 8/0/0 | 0/0/0 | 262,757/16,618 | ollama / glm-5.3-flash | 18 | 4/2 | 6/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.8). The first reading is what the record holds.">cross-check: partial</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Tamayo_1992_reference](drugs/drug_imipramine/Imipramine_Tamayo1992_reference.md) | — | parent + metabolite (no model) | 0 | Tamayo M et al., Population pharmacokinetics of imiprami…, European journal of clinica… (1992) | [10.1007/BF02280761](https://doi.org/10.1007/BF02280761) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rabbit</span> | [An_2020_Kv](drugs/drug_imipramine/pd_An_2020_Kv.md) | Voltage-dependent K+ (Kv) channel current inhibition ← imipramine · direct sigmoid Emax (Hill) effect | — | An JR et al., Inhibition by Imipramine of the Voltage…, Toxicological sciences : an… (2020) | [10.1093/toxsci/kfaa149](https://doi.org/10.1093/toxsci/kfaa149) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Bliziotes_2006_5_HT_uptake](drugs/drug_imipramine/pd_Bliziotes_2006_5_HT_uptake.md) | [3H]5-HT uptake in MLO-Y4 cells ← imipramine · inhibition effect | — | Bliziotes M et al., Serotonin transporter and receptor expr…, Bone (2006) | [10.1016/j.bone.2006.06.009](https://doi.org/10.1016/j.bone.2006.06.009) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Hong_1984_human_sperm_motility_inhibitory_effect](drugs/drug_imipramine/pd_Hong_1984_human_sperm_motility_inhibitory_effect.md) | human sperm motility (inhibitory effect) ← imipramine · inhibition effect | — | Hong CY et al., Sperm immobilizing potency of amitripty…, Archives of andrology (1984) | [10.3109/01485018409161143](https://doi.org/10.3109/01485018409161143) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Johnson_1998_3H_MPP_release_hDAT](drugs/drug_imipramine/pd_Johnson_1998_3H_MPP_release_hDAT.md) | [3H]MPP+ release from C6-hDAT cells ← imipramine · direct Emax (saturable) effect | — | Johnson RA et al., [3H]substrate- and cell-specific effect…, Synapse (New York, N.Y.) (1998) | [10.1002/(SICI)1098-2396(199809)30:1&lt;97::AID-SYN12&gt;3.0.CO;2-M](https://doi.org/10.1002/(SICI)1098-2396(199809)30:1&lt;97::AID-SYN12&gt;3.0.CO;2-M) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Johnson_1998_3H_MPP_release_hSERT](drugs/drug_imipramine/pd_Johnson_1998_3H_MPP_release_hSERT.md) | [3H]MPP+ release from C6-hSERT cells ← imipramine · direct Emax (saturable) effect | — | Johnson RA et al., [3H]substrate- and cell-specific effect…, Synapse (New York, N.Y.) (1998) | [10.1002/(SICI)1098-2396(199809)30:1&lt;97::AID-SYN12&gt;3.0.CO;2-M](https://doi.org/10.1002/(SICI)1098-2396(199809)30:1&lt;97::AID-SYN12&gt;3.0.CO;2-M) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Meyerson_1987_3H_5_HT_uptake](drugs/drug_imipramine/pd_Meyerson_1987_3H_5_HT_uptake.md) | [3H]5-HT uptake ← imipramine · direct sigmoid Emax (Hill) effect | — | Meyerson LR et al., Allosteric interaction between the site…, Journal of neurochemistry (1987) | [10.1111/j.1471-4159.1987.tb04129.x](https://doi.org/10.1111/j.1471-4159.1987.tb04129.x) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Meyerson_1987_3H_IMI_binding](drugs/drug_imipramine/pd_Meyerson_1987_3H_IMI_binding.md) | [3H]IMI binding ← imipramine · direct sigmoid Emax (Hill) effect | — | Meyerson LR et al., Allosteric interaction between the site…, Journal of neurochemistry (1987) | [10.1111/j.1471-4159.1987.tb04129.x](https://doi.org/10.1111/j.1471-4159.1987.tb04129.x) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Sitte_2000_efflux](drugs/drug_imipramine/pd_Sitte_2000_efflux.md) | [3H]5-HT efflux (drug-induced efflux during first 8 min of drug exposure) ← imipramine · direct Emax (saturable) effect | — | Sitte HH et al., Characterization of carrier-mediated ef…, Journal of neurochemistry (2000) | [10.1046/j.1471-4159.2000.741317.x](https://doi.org/10.1046/j.1471-4159.2000.741317.x) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Sitte_2000_uptake](drugs/drug_imipramine/pd_Sitte_2000_uptake.md) | [3H]5-HT uptake ← imipramine · direct Emax (saturable) effect | — | Sitte HH et al., Characterization of carrier-mediated ef…, Journal of neurochemistry (2000) | [10.1046/j.1471-4159.2000.741317.x](https://doi.org/10.1046/j.1471-4159.2000.741317.x) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.75). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Teschemacher_1999_I_HERG](drugs/drug_imipramine/pd_Teschemacher_1999_I_HERG.md) | HERG tail current (I HERG) inhibition ← imipramine · direct sigmoid Emax (Hill) effect | — | Teschemacher AG et al., Inhibition of the current of heterologo…, British journal of pharmaco… (1999) | [10.1038/sj.bjp.0702800](https://doi.org/10.1038/sj.bjp.0702800) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rabbit</span> | [Wölfel_1992_3H_5_HT_efflux](drugs/drug_imipramine/pd_W_lfel_1992_3H_5_HT_efflux.md) | drug-induced increase in 3H-5-HT efflux from platelets ← imipramine · direct Emax (saturable) effect | — | Wölfel R et al., Evidence for various tryptamines and re…, Naunyn-Schmiedeberg's archi… (1992) | [10.1007/BF00165727](https://doi.org/10.1007/BF00165727) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=imipramine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate, `SLC22A4` inhibitor | DrugBank actor |
| absorption | liver | `ABCB1` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate, `SLC22A4` inhibitor | DrugBank actor |
| absorption | testis | `ABCB1` substrate | DrugBank actor |
| distribution | blood | `ALB` unknown, `ORM1` unknown | DrugBank actor |
| distribution | liver | `SLC22A3` inhibitor | DrugBank actor |
| distribution | placenta | `SLC22A3` inhibitor | DrugBank actor |
| distribution | skeletal muscle | `SLC22A3` inhibitor | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor/substrate | DrugBank actor |
| metabolism | liver | `CYP1A2` inhibitor/substrate, `CYP2B6` substrate, `CYP2C19` inhibitor/substrate, `CYP2D6` inhibitor/substrate, `CYP2E1` inhibitor, `CYP3A4` substrate, `CYP3A7` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | kidney | `SLC22A2` inhibitor | DrugBank actor |
| — | brain | `SLC6A4` inhibitor | DrugBank actor |
| — | platelet | `SLC6A4` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: ADRA1A (target), ADRA1B (target), ADRA1D (target), CHRM1 (target), CHRM2 (target), CHRM3 (target), CHRM4 (target), CHRM5 (target), CYP2C18 (substrate), DRD1 (binder), DRD2 (binder), HRH1 (target), HTR1A (activator), HTR2A (target), HTR2C (target), HTR6 (binder), HTR7 (target), KCND2 (inhibitor), KCND3 (inhibitor), KCNH1 (inhibitor), KCNH2 (inhibitor), SLC6A2 (inhibitor), SLC6A3 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 60 matched, 47 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 1
- **scholar-agent fallback query used:** True

## Full text wanted

_6 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Daripelli_2026.pdf` | Daripelli S et al., Model-based steady state pharmacokineti…, Xenobiotica; the fate of fo… (2026) | popPK | 8 | [10.1080/00498254.2026.2637031](https://doi.org/10.1080/00498254.2026.2637031) | [41744318](https://pubmed.ncbi.nlm.nih.gov/41744318) | Mouse PK study of imipramine with compartmental modelling, but numeric CL/V/absorption parameters are not shown in the abstract text. |
| `Grasela_1987.pdf` | Grasela TH et al., An evaluation of population pharmacokin…, Clinical pharmacology and t… (1987) | popPK | 8 | [10.1038/clpt.1987.174](https://doi.org/10.1038/clpt.1987.174) | [3665341](https://pubmed.ncbi.nlm.nih.gov/3665341) | Population PK (mixed-effect) analysis of imipramine clearance with alprazolam interaction, but only a 20% clearance change is stated; full parameter values not present in the evidence. |
| `Meineke_1997.pdf` | Meineke I et al., Modelling of non-linear pharmacokinetic…, Pharmacology & toxicology (1997) | popPK | 8 | [10.1111/j.1600-0773.1997.tb01972.x](https://doi.org/10.1111/j.1600-0773.1997.tb01972.x) | [9225362](https://pubmed.ncbi.nlm.nih.gov/9225362) | PK model (3-compartment, nonlinear clearance) of imipramine in sheep, but numeric parameter values are not present in the evidence provided. |
| `Tamayo_1992.pdf` | Tamayo M et al., Population pharmacokinetics of imiprami…, European journal of clinica… (1992) | popPK | 8 | [10.1007/BF02280761](https://doi.org/10.1007/BF02280761) | [1505617](https://pubmed.ncbi.nlm.nih.gov/1505617) | Population PK of imipramine and desipramine in children with some numeric values (elimination constants) in the abstract, but full parameter set (CL, V) not shown. |
| `Daniel_1981.pdf` | Daniel W et al., Cerebral pharmacokinetics of imipramine…, Naunyn-Schmiedeberg's archi… (1981) | popPK | 7 | [10.1007/BF00503818](https://doi.org/10.1007/BF00503818) | [7322212](https://pubmed.ncbi.nlm.nih.gov/7322212) | PK study of imipramine and desipramine in rats, but no numeric parameter values (CL, V, half-lives) are present in the evidence. |
| `Sistovaris_1983.pdf` | Sistovaris N et al., Thin-layer chromatographic determinatio…, Journal of chromatography (1983) | popPK | 7 | [10.1016/s0378-4347(00)84844-6](https://doi.org/10.1016/s0378-4347(00)84844-6) | [6643612](https://pubmed.ncbi.nlm.nih.gov/6643612) | PK study of imipramine with one-compartment model in 8 volunteers, but no numeric parameter values appear in the evidence. |

<sub>queue written 2026-10-06T23:14:33.879173+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | An_2020 | irrelevant | 0 | 0 | In-vitro patch-clamp ion channel study, no PK disposition parameters for imipramine. |
| popPK | Apparsundaram_2008 | irrelevant | 0 | 0 | In-vitro radioligand binding study of SERT inhibition; imipramine is only a test ligand, no PK disposition parameters. |
| popPK | Arias_2013 | irrelevant | 0 | 0 | In-vitro receptor pharmacology study of quinuclidine derivatives; imipramine appears only as a binding-site reference, with no PK parameters. |
| PD | Arias_2013 | not_relevant | 0 | 0 | The paper focuses on the synthesis and in vitro pharmacological characterization of novel nicotinic receptor antagonists, with imipramine mentioned only as a structural reference for binding site overlap, not as the subject of a PD or exposure-response analysis. |
| popPK | Beck_1989 | irrelevant | 0 | 0 | Electrophysiology/pharmacodynamics study in rat hippocampal slices with no PK parameters reported. |
| popPK | Bliziotes_2006 | irrelevant | 0 | 0 | Imipramine is only used as a serotonin transporter antagonist in an in vitro bone cell study; no PK parameters for imipramine are reported. |
| popPK | Broch_1987 | irrelevant | 0 | 0 | Neurochemical turnover study in rat brain; no PK disposition parameters for imipramine reported. |
| popPK | Conway_1985 | irrelevant | 0 | 0 | In-vitro receptor binding study in rat brain membranes, not a pharmacokinetic study with disposition parameters. |
| PD | Conway_1985 | not_relevant | 0 | 0 | The paper reports in vitro receptor binding affinity and dissociation kinetics, not a pharmacodynamic exposure-response or dose-response relationship for drug effect. |
| popPK | Daniel_1981 | relevant | 7 | 2 | PK study of imipramine and desipramine in rats, but no numeric parameter values (CL, V, half-lives) are present in the evidence. |
| popPK | Daripelli_2026 | relevant | 8 | 3 | Mouse PK study of imipramine with compartmental modelling, but numeric CL/V/absorption parameters are not shown in the abstract text. |
| popPK | Duan_2012 | irrelevant | 1 | 1 | Imipramine is only a benchmark/literature drug for validating a liver Kp prediction model for HCV antivirals; no imipramine PK parameters are reported, and the Kp values live in Table 2/figures not provided. |
| PD | Duan_2012 | not_relevant | 0 | 0 | Imipramine is used only as a benchmark drug to validate the liver partition coefficient prediction model; the paper does not report a pharmacodynamic or exposure-response relationship for imipramine itself. |
| popPK | Fernandez_1989 | irrelevant | 4 | 2 | TDM forecasting study using literature mean PK parameters; no numeric CL/V/ka values for imipramine are given in the evidence. |
| popPK | Frizelle_2000 | irrelevant | 0 | 0 | In-vitro electrophysiology study with no PK parameters for imipramine. |
| popPK | Grasela_1987 | relevant | 8 | 3 | Population PK (mixed-effect) analysis of imipramine clearance with alprazolam interaction, but only a 20% clearance change is stated; full parameter values not present in the evidence. |
| popPK | Gup_1989 | irrelevant | 0 | 0 | In vitro receptor binding study where imipramine is only an antagonist in inhibition experiments; no PK parameters for imipramine. |
| PD | Gup_1989 | not_relevant | 4 | 2 | The paper reports in vitro concentration-response data for imipramine (antagonist inhibition) but provides no numeric PD parameters (e.g., IC50, Ki) or curves in the text, only qualitative statements that inhibition was identical between groups. |
| popPK | Hong_1984 | irrelevant | 0 | 0 | In-vitro pharmacodynamic study of sperm motility with EC50 values, no PK disposition parameters for imipramine. |
| popPK | Iga_2015 | irrelevant | 2 | 1 | Imipramine is only one of several co-simulated drugs in a PBPK model focused on fluvoxamine; its parameter values are assumed inputs, not reported numerically in the evidence. |
| popPK | Iqbal_2022 | irrelevant | 0 | 0 | Imipramine is only tentatively identified as a phytochemical constituent via GC-MS; no PK parameters for imipramine are reported. |
| PD | Iqbal_2022 | not_relevant | 0 | 0 | The paper reports pharmacological activity (EC50) for plant extracts (Chrozophora tinctoria), not for the drug imipramine; imipramine is only listed as a compound identified in the extract. |
| popPK | Johnson_1998 | irrelevant | 0 | 0 | In-vitro transporter efflux study; imipramine is only a probe drug with EC50 potency ranking, no PK disposition parameters. |
| popPK | Kutsuno_2013 | irrelevant | 1 | 2 | Imipramine is only an inhibitor/UGT1A4 probe substrate in in-vitro microsome assays; no PK disposition parameters for imipramine are reported. |
| PD | Kutsuno_2013 | not_relevant | 0 | 0 | The paper reports in vitro enzyme kinetics (glucuronidation rates and inhibition) for imipramine, not a pharmacodynamic exposure-response or dose-response relationship for the drug's therapeutic effect. |
| popPK | Launay_1994 | irrelevant | 0 | 0 | In-vitro platelet serotonin uptake study; imipramine only mentioned as a binding site, no PK parameters. |
| PD | Launay_1994 | not_relevant | 0 | 0 | The paper focuses on histamine receptor pharmacology in platelets and only mentions imipramine as a negative control for effector sites, providing no exposure-response or dose-response data for imipramine. |
| popPK | Marcus_2007 | irrelevant | 0 | 0 | Clinical side-effect study with no PK parameters or numeric disposition values for imipramine. |
| popPK | Meineke_1997 | relevant | 8 | 3 | PK model (3-compartment, nonlinear clearance) of imipramine in sheep, but numeric parameter values are not present in the evidence provided. |
| popPK | Merlo_1989 | irrelevant | 0 | 0 | Behavioral pharmacology study in rats; imipramine is only a test drug with no PK parameters reported. |
| popPK | Meyerson_1987 | irrelevant | 0 | 0 | In-vitro receptor binding/uptake study in platelets, not a pharmacokinetic study of imipramine disposition. |
| popPK | Miller_2016 | irrelevant | 3 | 2 | Imipramine is one of eight compounds in an aquatic invertebrate bioconcentration study; kinetic rate constants/BCFs are reported only as ranges, with no imipramine-specific numeric disposition parameters in the evidence. |
| popPK | Muraoka_1998 | irrelevant | 0 | 0 | In-vitro cell signaling study with no pharmacokinetic disposition parameters for imipramine. |
| popPK | Nowakowska_2003 | irrelevant | 0 | 0 | Behavioural pharmacology study in rats with no PK parameters for imipramine. |
| popPK | ODonnell_1985 | irrelevant | 0 | 0 | This is a receptor-binding/pharmacodynamics study in rat brain; imipramine is only a treatment comparator with no PK parameters reported. |
| PD | ODonnell_1985 | not_relevant | 0 | 0 | The paper reports that imipramine did not affect receptor/N-protein coupling, providing no numeric PD parameters or exposure-response relationship for imipramine. |
| popPK | ORiordan_1990 | irrelevant | 1 | 1 | In-vitro radioligand binding kinetics to platelet membranes, not pharmacokinetic disposition parameters for imipramine. |
| popPK | Onaivi_1989 | irrelevant | 0 | 0 | Behavioral anxiety test validation in mice; imipramine only tested for behavioral effects, no PK parameters reported. |
| popPK | Schlicker_1992 | irrelevant | 0 | 0 | This is a receptor pharmacology/behavioural study of anpirtoline; imipramine is only a comparator drug in behavioural tests, with no PK parameters reported. |
| PD | Schlicker_1992 | not_relevant | 0 | 0 | The paper focuses on the pharmacology of anpirtoline; imipramine is only mentioned as a standard comparator in the forced swimming test without providing specific dose-response parameters or PD modeling for imipramine. |
| popPK | Segonzac_1985 | irrelevant | 0 | 0 | In vitro receptor-binding/uptake study in human platelets; imipramine is a radioligand/probe, not a PK disposition study with CL/V parameters. |
| PD | Segonzac_1985 | not_relevant | 3 | 2 | The paper describes in vitro binding kinetics and allosteric modulation of imipramine by tryptamine/serotonin, reporting a Km for tryptamine uptake but lacking a formal pharmacodynamic exposure-response or dose-response model for imipramine's therapeutic effect. |
| popPK | Sette_1983 | irrelevant | 0 | 0 | In vitro receptor binding study with no pharmacokinetic disposition parameters for imipramine. |
| popPK | Sher_2022 | irrelevant | 0 | 0 | This is a phytochemical/laxative study of Chrozophora tinctoria; imipramine is only mentioned as a GC-MS library match, with no PK parameters for imipramine. |
| PD | Sher_2022 | not_relevant | 0 | 0 | The paper reports pharmacological effects (IC50, EC50) for plant extracts (Chrozophora tinctoria), not for the specific drug imipramine, which is only mentioned as a compound identified within the extracts. |
| popPK | Simiand_1993 | irrelevant | 0 | 0 | This is a behavioral pharmacology study of SR 57746A in rodents; imipramine is only mentioned as a potency comparator, with no PK parameters reported. |
| popPK | Sistovaris_1983 | relevant | 7 | 2 | PK study of imipramine with one-compartment model in 8 volunteers, but no numeric parameter values appear in the evidence. |
| popPK | Sitte_2000 | irrelevant | 0 | 0 | In-vitro transporter study where imipramine is only a tool drug affecting 5-HT efflux/uptake; no PK disposition parameters for imipramine are reported. |
| popPK | Slamon_2000 | irrelevant | 0 | 0 | In-vitro cytotoxicity study of antidepressants (EC50 values) with no pharmacokinetic disposition parameters for imipramine. |
| PD | Slamon_2000 | not_relevant | 3 | 2 | The paper reports EC50 values for cytotoxicity in cell lines, which is a toxicological endpoint rather than a pharmacodynamic (therapeutic) exposure-response relationship for the drug's clinical effect. |
| popPK | Stockmeier_1986 | irrelevant | 0 | 0 | Receptor binding study in rat brain; imipramine only appears as a radioligand binding marker, no PK parameters. |
| PD | Stockmeier_1986 | not_relevant | 0 | 0 | The paper focuses on 5-HT-2 receptor regulation by ECS and amitriptyline; imipramine is only mentioned as a binding marker for presynaptic function, with no exposure-response or dose-response analysis for imipramine. |
| popPK | Sugawara_1998 | irrelevant | 0 | 0 | In-vitro mechanistic study of imipramine's effect on intestinal transport, with no PK disposition parameters for imipramine. |
| PD | Sugawara_1998 | not_relevant | 3 | 2 | The paper describes a mechanistic in vitro study of imipramine's inhibition of glutamate transport, providing qualitative kinetic insights (competitive inhibition) but lacking specific numeric PD parameters (e.g., Ki, IC50) or an exposure-response model for the drug itself. |
| popPK | Sánchez_1997 | irrelevant | 0 | 0 | Behavioral pharmacology study of SSRIs; imipramine only used as a potency comparator, no PK parameters. |
| popPK | Teschemacher_1999 | irrelevant | 0 | 0 | In-vitro electrophysiology study of imipramine blocking HERG channels; no PK disposition parameters (CL, V, ka, half-life) reported. |
| popPK | Willets_1995 | irrelevant | 0 | 0 | In-vitro neurotoxicity study of salsolinol; imipramine is only a co-addition agent, no PK parameters. |
| PD | Willets_1995 | not_relevant | 0 | 0 | The paper studies the neurotoxicity and pharmacological effects of salsolinol, not imipramine; imipramine is only mentioned as an ineffective inhibitor of cytotoxicity. |
| popPK | Wölfel_1991 | irrelevant | 0 | 0 | In-vitro platelet efflux study with no PK disposition parameters for imipramine. |
| PD | Wölfel_1991 | not_relevant | 4 | 2 | The paper describes a concentration-effect relationship and mentions Emax, but the provided text lacks specific numeric values for Emax, EC50, or concentration-response data points, making quantitative PD parameters non-extractable. |
| popPK | Wölfel_1992 | irrelevant | 0 | 0 | In-vitro platelet transporter study; imipramine is only a comparator uptake inhibitor, no PK parameters. |
| popPK | Xiang_2026 | irrelevant | 0 | 0 | This is an efficacy/tolerability IPD meta-analysis of antidepressants in pediatric MDD; imipramine is only a comparator drug and no PK parameters are reported. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 23:14 UTC</sub>
