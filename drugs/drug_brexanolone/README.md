<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;brexanolone&quot;}]"></div>

# brexanolone

- **generic name:** brexanolone
- **ATC codes:** `N06AX29`
- **DrugBank:** [DB11859](https://go.drugbank.com/drugs/DB11859) · **PubChem:** [CID 92786](https://pubchem.ncbi.nlm.nih.gov/compound/92786)
- **molar mass:** 318.4935 g/mol (C21H34O2) — DrugBank
- **groups:** approved, investigational

## About

Brexanolone is an antidepressant used to treat postpartum depression in adult women. It is approved but restricted to hospital or supervised settings, where patients must be monitored during the infusion, and it is not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2482223](https://www.wikidata.org/wiki/Q2482223) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| allopregnanolone (brexanolone) | parent | 318.493 | C21H34O2 | DrugBank | [92786](https://pubchem.ncbi.nlm.nih.gov/compound/92786) | Wald_2022 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 22:06 | 20:17 | 0/1/0 | 18/1/1 | 0/0/0 | 510,670/24,947 | ollama / glm-5.3-flash | 19 | 6/10 | 19/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Wald_2022_reference](drugs/drug_brexanolone/Brexanolone_Wald2022_reference.md) | — | general linear (no model) | 10 | Wald J et al., Allopregnanolone Concentrations in Brea…, Clinical pharmacokinetics (2022) | [10.1007/s40262-022-01155-w](https://doi.org/10.1007/s40262-022-01155-w) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Bukanova_2021_I_GABA](drugs/drug_brexanolone/pd_Bukanova_2021_I_GABA.md) | GABA-induced chloride current peak amplitude (normalized, potentiation by allopregnanolone) in Purkinje cells of rat cerebellum ← allopregnanolone (ALLO) · direct sigmoid Emax (Hill) effect | — | Bukanova J et al., Epipregnanolone as a Positive Modulator…, Biomolecules (2021) | [10.3390/biom11060791](https://doi.org/10.3390/biom11060791) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Bukanova_2025_IGABA](drugs/drug_brexanolone/pd_Bukanova_2025_IGABA.md) | GABA-induced chloride current (potentiation by Allo) ← Allopregnanolone · stimulation effect | — | Bukanova JV et al., Interaction Between Allopregnanolone an…, Cell biochemistry and bioph… (2025) | [10.1007/s12013-024-01654-6](https://doi.org/10.1007/s12013-024-01654-6) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Cabral_1994_Relaxation_of_KCl_60_mM_induced_tonic_contraction_of_rat_uterus](drugs/drug_brexanolone/pd_Cabral_1994_Relaxation_of_KCl_60_mM_induced_tonic_contractio.md) | Relaxation of KCl (60 mM)-induced tonic contraction of rat uterus ← allopregnanolone · inhibition effect | — | Cabral R et al., Progesterone and pregnanolone derivativ…, General pharmacology (1994) | [10.1016/0306-3623(94)90029-9](https://doi.org/10.1016/0306-3623(94)90029-9) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Charalampopoulos_2004_protection_against_serum_deprivation_induced_apoptosis](drugs/drug_brexanolone/pd_Charalampopoulos_2004_protection_against_serum_deprivation_i.md) | protection against serum deprivation-induced apoptosis ← allopregnanolone · stimulation effect | — | Charalampopoulos I et al., Dehydroepiandrosterone and allopregnano…, Proceedings of the National… (2004) | [10.1073/pnas.0306631101](https://doi.org/10.1073/pnas.0306631101) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Earl_2011_L_VGCC_Ba2_current](drugs/drug_brexanolone/pd_Earl_2011_L_VGCC_Ba2_current.md) | Whole-cell Ba2+ current through recombinant L-type voltage-gated calcium channels (Ca(v)1.2 and Ca(v)1.3) in HEK293T cells ← allopregnanolone · inhibition effect | — | Earl DE et al., Inhibition of recombinant L-type voltag…, The Journal of pharmacology… (2011) | [10.1124/jpet.110.178244](https://doi.org/10.1124/jpet.110.178244) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Fodor_2005_Displacement_of_3_H_EBOB_binding_from_rat_cerebellar_GABAA_receptors](drugs/drug_brexanolone/pd_Fodor_2005_Displacement_of_3_H_EBOB_binding_from_rat_cerebel.md) | Displacement of [(3)H]EBOB binding from rat cerebellar GABAA receptors ← allopregnanolone · inhibition effect | — | Fodor L et al., Nanomolar allopregnanolone potentiates…, Neuroscience letters (2005) | [10.1016/j.neulet.2005.03.064](https://doi.org/10.1016/j.neulet.2005.03.064) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Fodor_2005_Potentiation_of_GABA_1_M_elicited_chloride_current_in_rat_cerebellar_GABAA_receptors](drugs/drug_brexanolone/pd_Fodor_2005_Potentiation_of_GABA_1_M_elicited_chloride_curren.md) | Potentiation of GABA (1 µM)-elicited chloride current in rat cerebellar GABAA receptors ← allopregnanolone · direct Emax (saturable) effect | — | Fodor L et al., Nanomolar allopregnanolone potentiates…, Neuroscience letters (2005) | [10.1016/j.neulet.2005.03.064](https://doi.org/10.1016/j.neulet.2005.03.064) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Horishita_2018_INa_Nav1_3_1](drugs/drug_brexanolone/pd_Horishita_2018_INa_Nav1_3_1.md) | Sodium current (INa) of Nav1.3 with β1 subunit ← allopregnanolone sulfate (APAS) · direct sigmoid Emax (Hill) effect | — | Horishita T et al., The neurosteroid allopregnanolone sulfa…, Journal of pharmacological… (2018) | [10.1016/j.jphs.2018.01.010](https://doi.org/10.1016/j.jphs.2018.01.010) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Horishita_2018_INa_Nav1_3_3](drugs/drug_brexanolone/pd_Horishita_2018_INa_Nav1_3_3.md) | Sodium current (INa) of Nav1.3 with β3 subunit ← allopregnanolone sulfate (APAS) · direct sigmoid Emax (Hill) effect | — | Horishita T et al., The neurosteroid allopregnanolone sulfa…, Journal of pharmacological… (2018) | [10.1016/j.jphs.2018.01.010](https://doi.org/10.1016/j.jphs.2018.01.010) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Lockhart_2002_TUNEL](drugs/drug_brexanolone/pd_Lockhart_2002_TUNEL.md) | percentage of TUNEL-positive cells ← allopregnanolone · direct Emax (saturable) effect | — | Lockhart EM et al., Allopregnanolone attenuates N-methyl-D-…, Neuroscience letters (2002) | [10.1016/s0304-3940(02)00448-2](https://doi.org/10.1016/s0304-3940(02)00448-2) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Maksay_2011_EBOB_binding](drugs/drug_brexanolone/pd_Maksay_2011_EBOB_binding.md) | Enhancement of [(3)H]EBOB binding to rat cerebral cortex GABA(A) receptors ← allopregnanolone · direct Emax (saturable) effect | — | Maksay G et al., Differential effects of two major neuro…, European journal of pharmac… (2011) | [10.1016/j.ejphar.2010.10.003](https://doi.org/10.1016/j.ejphar.2010.10.003) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Mtchedlishvili_2001_GABA_current](drugs/drug_brexanolone/pd_Mtchedlishvili_2001_GABA_current.md) | GABA-evoked peak whole-cell current (enhancement by allopregnanolone) ← allopregnanolone · direct Emax (saturable) effect | — | Mtchedlishvili Z et al., Diminished allopregnanolone enhancement…, The Journal of physiology 5… (2001) | [10.1111/j.1469-7793.2001.00453.x](https://doi.org/10.1111/j.1469-7793.2001.00453.x) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Mtchedlishvili_2003_Allopregnanolone_potentiation_of_GABA_evoked_GABAA_receptor_current_in_dentate_granule_cells](drugs/drug_brexanolone/pd_Mtchedlishvili_2003_Allopregnanolone_potentiation_of_GABA_ev.md) | Allopregnanolone potentiation of GABA-evoked GABAA receptor current in dentate granule cells ← allopregnanolone · direct sigmoid Emax (Hill) effect | — | Mtchedlishvili Z et al., Increased neurosteroid sensitivity of h…, Neuroscience (2003) | [10.1016/s0306-4522(03)00043-5](https://doi.org/10.1016/s0306-4522(03)00043-5) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Pignataro_1997_3H_flunitrazepam_binding_enhancement](drugs/drug_brexanolone/pd_Pignataro_1997_3H_flunitrazepam_binding_enhancement.md) | [3H]flunitrazepam binding enhancement ← allopregnanolone · direct Emax (saturable) effect | — | Pignataro L et al., Epipregnanolone acts as a partial agoni…, Neurochemical research (1997) | [10.1023/a:1027327910138](https://doi.org/10.1023/a:1027327910138) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">other animal</span> | [Verleye_2001_35_S_TBPS_binding](drugs/drug_brexanolone/pd_Verleye_2001_35_S_TBPS_binding.md) | Inhibition of [(35)S] t-butylbicyclophosphorothionate binding to GABA(A) receptor chloride channel site ← allopregnanolone · inhibition effect | — | Verleye M et al., Functional modulation of gamma-aminobut…, Neuroscience letters (2001) | [10.1016/s0304-3940(01)01647-0](https://doi.org/10.1016/s0304-3940(01)01647-0) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span> | [Vuu_2022_iEEG_PSD](drugs/drug_brexanolone/pd_Vuu_2022_iEEG_PSD.md) | absolute power spectral density in iEEG frequency bands ← allopregnanolone · direct sigmoid Emax (Hill) effect | — | Vuu I et al., Intravenous and Intramuscular Allopregn…, The Journal of pharmacology… (2022) | [10.1124/jpet.121.000736](https://doi.org/10.1124/jpet.121.000736) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Wang_2008_Ca2_i](drugs/drug_brexanolone/pd_Wang_2008_Ca2_i.md) | intracellular calcium concentration increase ← allopregnanolone (APα) · direct Emax (saturable) effect | — | Wang JM et al., Allopregnanolone-induced rise in intrac…, BMC neuroscience 9 Suppl 2(… (2008) | [10.1186/1471-2202-9-S2-S11](https://doi.org/10.1186/1471-2202-9-S2-S11) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Yu_2002_LDH](drugs/drug_brexanolone/pd_Yu_2002_LDH.md) | lactate dehydrogenase (LDH) activity released in the culture medium (KA-induced excitotoxicity) ← allopregnanolone · inhibition effect | — | Yu R et al., Differential effects of allopregnanolon…, Acta pharmacologica Sinica (2002) | — |
| <span class="pk-badge pk-badge--green">extracted</span> | [Yu_2019_Inhibition_of_3H_tenocyclidine_binding_to_Torpedo_nAChR_desensitized_state](drugs/drug_brexanolone/pd_Yu_2019_Inhibition_of_3H_tenocyclidine_binding_to_Torpedo_nA.md) | Inhibition of [3H]tenocyclidine binding to Torpedo nAChR (desensitized state) ← F4N3Bzoxy-AP (11β-(p-azidotetrafluorobenzoyloxy)allopregnanolone) · inhibition effect | — | Yu Z et al., A photoreactive analog of allopregnanol…, The Journal of biological c… (2019) | [10.1074/jbc.RA118.007172](https://doi.org/10.1074/jbc.RA118.007172) |
| <span class="pk-badge pk-badge--green">extracted</span> | [unknown_2018_ataxia_and_sedation_CNS_PD_effect](drugs/drug_brexanolone/pd_unknown_2018_ataxia_and_sedation_CNS_PD_effect.md) | ataxia and sedation (CNS PD effect) ← allopregnanolone · model not identified | — | unknown, Abstracts of 20th Annual ASENT Meeting, Neurotherapeutics : the jou… (2018) | [10.1007/s13311-018-0641-4](https://doi.org/10.1007/s13311-018-0641-4) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Waters_1997_cytoprotection](drugs/drug_brexanolone/pd_Waters_1997_cytoprotection.md) | cytoprotection of rabbit renal proximal tubules (antimycin A exposure) ← allopregnanolone (AP) · direct Emax (saturable) effect | — | Waters SL et al., Neurosteroid inhibition of cell death, The American journal of phy… (1997) | [10.1152/ajprenal.1997.273.6.F869](https://doi.org/10.1152/ajprenal.1997.273.6.F869) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Jiang_2006_I_gly](drugs/drug_brexanolone/pd_Jiang_2006_I_gly.md) | glycine-induced current amplitude ← pregnanolone · direct sigmoid Emax (Hill) effect | — | Jiang P et al., Mechanisms of modulation of pregnanolon…, Neuroscience (2006) | [10.1016/j.neuroscience.2006.05.009](https://doi.org/10.1016/j.neuroscience.2006.05.009) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=brexanolone) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: AKR1B1 (substrate), GABRA1 (inhibitor), GABRA1 (positive allosteric modulator), GABRB2 (inhibitor), GABRD (inhibitor), GABRG2 (inhibitor), GABRG3 (modulator).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 204 matched, 109 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Zolkowska_2018.pdf` | Zolkowska D et al., Intramuscular allopregnanolone and gana…, Epilepsia 59 Suppl 2(Suppl… (2018) | popPK | 10 | [10.1111/epi.13999](https://doi.org/10.1111/epi.13999) | [29453777](https://pubmed.ncbi.nlm.nih.gov/29453777) | Reports full two-compartment PK parameters (Vd, CL, t½, F, Cmax) for allopregnanolone (brexanolone) directly in the abstract. |
| `Vuu_2022.pdf` | Vuu I et al., Intravenous and Intramuscular Allopregn…, The Journal of pharmacology… (2022) | popPK | 8 | [10.1124/jpet.121.000736](https://doi.org/10.1124/jpet.121.000736) | [34862270](https://pubmed.ncbi.nlm.nih.gov/34862270) | PK-PD characterization of IV/IM allopregnanolone (brexanolone) in dogs with a compartmental/indirect link model, but no numeric parameter values appear in the provided evidence. |

<sub>queue written 2026-10-06T22:02:05.184315+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bitran_1993 | irrelevant | 0 | 0 | Pharmacodynamic/neuroendocrine study of progesterone in rats; no PK disposition parameters for brexanolone (allopregnanolone) are reported, only measured levels. |
| PGx | Bu_2026 | not_relevant | 1 | 1 | Narrative review mentions brexanolone only as a drug class; no gene variant effect on its PK/PD parameters reported. |
| popPK | Bukanova_2021 | irrelevant | 0 | 0 | This is an in-vitro patch-clamp electrophysiology study of epipregnanolone (a brexanolone stereoisomer) on GABA currents, with no PK disposition parameters (CL, V, half-life, or PK model) for brexanolone. |
| popPK | Bukanova_2025 | irrelevant | 0 | 0 | In-vitro electrophysiology study of GABAA receptor interactions; no pharmacokinetic disposition parameters for brexanolone/allopregnanolone are reported. |
| popPK | Charalampopoulos_2004 | irrelevant | 0 | 0 | In-vitro cell survival study of allopregnanolone with EC50 pharmacodynamics, no PK disposition parameters. |
| popPK | Charalampopoulos_2005 | irrelevant | 0 | 0 | In vitro mechanistic study of allopregnanolone effects on PC12 cells with no pharmacokinetic parameters for brexanolone. |
| popPK | Charalampopoulos_2006 | irrelevant | 0 | 0 | This is a review of neurosteroid neuroprotection with no PK parameters for brexanolone; only EC50 values for cell effects are given. |
| popPK | Chase_2012 | irrelevant | 0 | 0 | This is an editorial about ICU prognostic mortality models (SAPS-II), with no brexanolone PK data or parameters. |
| popPK | Costa_1995 | irrelevant | 0 | 0 | Electrophysiology study of progesterone/allopregnanolone withdrawal in rat neurons; no brexanolone PK parameters reported. |
| PGx | Cushman_2011 | not_relevant | 3 | 3 | Study examines allopregnanolone/ethanol behavioral effects in α4 GABA(A)R KO mice, not brexanolone PK/PD pharmacogenomics. |
| PGx | DeBattista_2024 | not_relevant | 0 | 0 | Brexanolone is only mentioned descriptively; no gene variant/genotype effect on any PK/PD parameter is reported. |
| popPK | Dodeja_2026 | irrelevant | 0 | 0 | This is a narrative review about drug transfer into human milk; brexanolone is not the subject drug and no brexanolone PK parameters appear in the evidence. |
| popPK | Durán_2009 | irrelevant | 0 | 0 | This is a chemistry/GABA(A) receptor binding study of allopregnanolone analogues with no pharmacokinetic parameters for brexanolone. |
| PGx | Etyemez_2023 | not_relevant | 2 | 3 | Endogenous neurosteroid metabolism (AKR1C2 genotype effect on allopregnanolone pathway), not a PK/PD parameter of administered brexanolone. |
| popPK | Fodor_2005 | irrelevant | 0 | 0 | In vitro electrophysiology/pharmacodynamics of allopregnanolone on rat GABAA receptors; no PK disposition parameters for brexanolone. |
| PGx | Funae_2003 | not_relevant | 3 | 4 | Mentions CYP2D metabolism of allopregnanolone (brexanolone's parent steroid) but no genotype effect on PK/PD parameters of brexanolone is reported. |
| popPK | Ghosal_2010 | irrelevant | 0 | 0 | This is an ELISA assay for fecal allopregnanolone in elephants for estrus monitoring, with no PK parameters for brexanolone. |
| popPK | Grobin_2001 | irrelevant | 0 | 0 | This is a developmental neurobiology study measuring endogenous allopregnanolone brain concentrations and GABA(A) receptor flux in rats, not a pharmacokinetic study with disposition parameters for brexanolone. |
| popPK | Gyenes_1994 | irrelevant | 0 | 0 | In vitro electrophysiology study of GABAA receptor phosphorylation with no PK parameters for brexanolone. |
| popPK | Haney_2023 | irrelevant | 0 | 0 | This paper is about AEF0117 (a CB1 signaling-specific inhibitor), not brexanolone; no brexanolone PK parameters are reported, and AEF0117 PK values largely reside in supplementary tables not provided. |
| PGx | Hart_2012 | not_relevant | 0 | 0 | Paper concerns genetic associations with subjective response to d-amphetamine, not brexanolone PK/PD parameters. |
| popPK | Huang_2002 | irrelevant | 0 | 0 | In vitro electrophysiology of GABA(A) receptor pharmacology in rat brain slices; no PK parameters for brexanolone. |
| popPK | Inoue_2013 | irrelevant | 0 | 0 | In-vitro electrophysiology of GABAA receptors in guinea-pig adrenal medullary cells; allopregnanolone is only a modulator, no PK parameters for brexanolone. |
| popPK | Jiang_2006 | irrelevant | 0 | 0 | In-vitro electrophysiology of pregnanolone on glycine receptors; no PK disposition parameters for brexanolone. |
| PGx | Kishimoto_2004 | not_relevant | 3 | 4 | Reports CYP2D-mediated metabolism of allopregnanolone (not brexanolone) in vitro with no genotype/phenotype effect on PK/PD parameters. |
| PGx | Lamba_2004 | not_relevant | 3 | 2 | Shows allopregnanolone activates PXR to induce CYP3A4 transcription, but no gene variant/genotype effect on brexanolone PK/PD parameters is reported. |
| PGx | Lindsay_2008 | not_relevant | 2 | 3 | Review of SULT enzymes mentions allopregnanolone (related to brexanolone) as a substrate but reports no gene variant effect on brexanolone PK/PD parameters. |
| popPK | Lockhart_2002 | irrelevant | 0 | 0 | In vitro neuroprotection study of allopregnanolone in cultured cells with no PK parameters. |
| popPK | Machado_2019 | irrelevant | 0 | 0 | Behavioural study in rats about fluoxetine and allopregnanolone; no brexanolone PK parameters reported. |
| popPK | Maitra_1998 | irrelevant | 0 | 0 | In-vitro electrophysiology study of GABA(A) receptor modulation by allopregnanolone; no pharmacokinetic parameters for brexanolone. |
| popPK | Maksay_2011 | irrelevant | 0 | 0 | In vitro receptor binding/electrophysiology study of neurosteroids (allopregnanolone, THDOC) with no pharmacokinetic disposition parameters for brexanolone. |
| popPK | Mayne_2026 | irrelevant | 0 | 0 | This is an observational study of endogenous allopregnanolone concentrations vs. psychosocial distress; brexanolone is only mentioned as a drug, with no PK parameters reported. |
| popPK | Morris_1999 | irrelevant | 0 | 0 | In-vitro electrophysiology of GABA(C) receptor modulation by neuroactive steroids; no PK parameters for brexanolone. |
| popPK | Mtchedlishvili_2001 | irrelevant | 0 | 0 | In-vitro electrophysiology of allopregnanolone (not brexanolone) on GABA(A) receptor currents; no PK disposition parameters. |
| popPK | Mtchedlishvili_2003 | irrelevant | 0 | 0 | In vitro electrophysiology of allopregnanolone on GABA(A) receptors in rat neurons; no PK disposition parameters for brexanolone. |
| popPK | Nik_2017 | irrelevant | 0 | 0 | In-vitro GABA_A receptor pharmacology assay with no PK disposition parameters for brexanolone. |
| PGx | Nipper_2019 | not_relevant | 3 | 5 | The paper reports genotype-dependent PD effects (HIC AUC) for ganaxolone, not brexanolone, and effect sizes are percent changes rather than fitted PK/PD parameters. |
| PGx | Niwa_2008 | not_relevant | 3 | 5 | The paper examines CYP2D4/CYP2D6-mediated 21-hydroxylation of allopregnanolone (brexanolone's active steroid) and its inhibition by psychotropic drugs, but reports no gene variant/genotype/phenotype effect on a PK or PD parameter of brexanolone itself. |
| PGx | Niwa_2009 | not_relevant | 2 | 3 | Review of endobiotic metabolism by P450s; mentions allopregnanolone (not brexanolone) metabolism and generic polymorphism effects, no gene-variant effect on brexanolone PK/PD. |
| PGx | Niwa_2015 | not_relevant | 2 | 3 | In vitro review of steroid metabolism by P450s; no gene variant effect on brexanolone PK/PD parameters reported. |
| popPK | Nookala_2026 | irrelevant | 2 | 0 | Review of pediatric extrapolation strategies; brexanolone only mentioned as a case example with no PK parameter values reported. |
| PGx | Oakley_2023 | not_relevant | 2 | 3 | No drug brexanolone administered or PK/PD parameters measured; only endogenous neurosteroid metabolism linked to AKR1C variants. |
| popPK | Pierce_2020 | irrelevant | 0 | 0 | In-vitro electrophysiology of GABAA receptor desensitization with allopregnanolone as a modulator; no PK disposition parameters for brexanolone. |
| popPK | Pignataro_1997 | irrelevant | 0 | 0 | In-vitro receptor binding study in chick tissue with no pharmacokinetic disposition parameters for brexanolone. |
| popPK | Pignataro_2001 | irrelevant | 0 | 0 | In vitro receptor binding study in chick embryos with no PK disposition parameters for brexanolone. |
| popPK | Pinna_2014 | irrelevant | 0 | 0 | This is a behavioral pharmacology study of ganaxolone (not brexanolone) in mice with no PK disposition parameters reported. |
| popPK | Prince_1993 | irrelevant | 0 | 0 | In-vitro receptor binding study with no pharmacokinetic disposition parameters for brexanolone. |
| PGx | Raikes_2022 | not_relevant | 3 | 5 | APOE ε4 status is qualitatively associated with hippocampal volume change (a disease/imaging biomarker), not a PK or PD parameter of allopregnanolone; no fitted genotype effect on drug exposure or response is reported. |
| PGx | Reddy_2017 | not_relevant | 0 | 0 | No gene variant/genotype effect on brexanolone PK/PD; paper concerns progesterone/neurosteroid regulation of GABA-A receptors in mice. |
| PGx | Saraf_2022 | not_relevant | 2 | 3 | Paper studies FPT (not brexanolone) in Fmr1 KO mice; genotype differences in EEG response are drug effects, not a pharmacogenomic effect on brexanolone PK/PD parameters. |
| popPK | Savechenkov_2017 | irrelevant | 0 | 0 | In vitro photolabeling/pharmacology study of alphaxalone analogs, not a PK study of brexanolone with disposition parameters. |
| popPK | Sherer_2023 | irrelevant | 0 | 0 | Observational study of hormones/anxiety in pregnancy; no brexanolone PK parameters reported. |
| popPK | Smith_2014 | irrelevant | 0 | 0 | In vitro mechanistic study of pregnenolone sulfate signaling with no PK parameters for brexanolone. |
| popPK | Sun_2023 | irrelevant | 0 | 0 | This is a cryo-EM structural study of GABA_A receptors with allopregnanolone binding; no PK disposition parameters (CL, V, half-life, population-PK model) for brexanolone are reported. |
| popPK | Syafni_2022 | irrelevant | 0 | 0 | Natural products chemistry study of GABAA allosteric modulators; allopregnanolone is only a co-administered probe, no brexanolone PK parameters. |
| PGx | Tanchuck-Nipper_2015 | not_relevant | 2 | 4 | The paper concerns ethanol effects in Srd5a1 knockout mice, not a pharmacogenomic effect on brexanolone PK/PD parameters. |
| popPK | Vuu_2022 | relevant | 8 | 2 | PK-PD characterization of IV/IM allopregnanolone (brexanolone) in dogs with a compartmental/indirect link model, but no numeric parameter values appear in the provided evidence. |
| popPK | Wang_2008 | irrelevant | 0 | 0 | In vitro calcium signaling study of allopregnanolone in rat neurons; no PK disposition parameters for brexanolone. |
| popPK | Waters_1997 | irrelevant | 0 | 0 | In-vitro cytoprotection study in rabbit renal tubules with EC50 values only; no PK disposition parameters for brexanolone. |
| popPK | Wenzel_2021 | irrelevant | 0 | 0 | This is an endogenous neurosteroid biomarker study in pregnancy with no brexanolone dosing and no PK parameters. |
| popPK | Yu_2002 | irrelevant | 0 | 0 | In-vitro study of allopregnanolone effects on excitotoxicity in cultured rat cortical cells; no pharmacokinetic disposition parameters reported. |
| popPK | unknown_2018 | irrelevant | 0 | 0 | This is a collection of abstracts about other neurotherapeutics (T3D-959, GM6, etc.); brexanolone is not the subject and no PK parameters for it appear. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 22:02 UTC</sub>
