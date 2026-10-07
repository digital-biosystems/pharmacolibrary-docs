<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;desipramine&quot;}]"></div>

# desipramine

- **generic name:** desipramine
- **ATC codes:** `N06AA01`
- **DrugBank:** [DB01151](https://go.drugbank.com/drugs/DB01151) · **PubChem:** [CID 2995](https://pubchem.ncbi.nlm.nih.gov/compound/2995)
- **molar mass:** 266.3807 g/mol (C18H22N2) — DrugBank
- **groups:** approved

## About

Desipramine is a tricyclic antidepressant used for depression and has also been used for pain, attention deficit hyperactivity disorder, substance use disorder, and neurotic disorders. It remains an approved medicine, though it carries a boxed warning and is used less often than newer antidepressants.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q423288](https://www.wikidata.org/wiki/Q423288) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| desipramine | parent | 266.381 | C18H22N2 | DrugBank | [2995](https://pubchem.ncbi.nlm.nih.gov/compound/2995) | Asiimwe_2024, Gueorguieva_2010 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 22:20 | 3:21 | 0/3/1 | 3/0/1 | 0/0/0 | 167,767/15,239 | ollama / glm-5.3-flash | 16 | 14/2 | 5/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.444). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Gueorguieva_2010_reference](drugs/drug_desipramine/Desipramine_Gueorguieva2010_reference.md) | — | 2-compartment (no model) | 4 | Gueorguieva I et al., Desipramine, substrate for CYP2D6 activ…, British journal of clinical… (2010) | [10.1111/j.1365-2125.2010.03731.x](https://doi.org/10.1111/j.1365-2125.2010.03731.x) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.571). The first reading is what the record holds.">cross-check: partial</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Asiimwe_2024_reference](drugs/drug_desipramine/Desipramine_Asiimwe2024_reference.md) | — | 2-compartment (no model) | 4 | Asiimwe IG et al., Machine-Learning Assisted Screening of…, The AAPS journal (2024) | [10.1208/s12248-024-00934-6](https://doi.org/10.1208/s12248-024-00934-6) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.688). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [DeVane_1981_reference](drugs/drug_desipramine/Desipramine_DeVane1981_reference.md) | — | 1-compartment (no model) | 8 | DeVane CL et al., Desipramine and 2-hydroxy-desipramine p…, European journal of clinica… (1981) | [10.1007/BF00558386](https://doi.org/10.1007/BF00558386) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (monkey), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">monkey</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Raffel_2013_reference](drugs/drug_desipramine/Desipramine_Raffel2013_reference.md) | — | 1-compartment (no model) | 2 | Raffel DM et al., Quantification of cardiac sympathetic n…, Journal of nuclear medicine… (2013) | [10.2967/jnumed.113.120659](https://doi.org/10.2967/jnumed.113.120659) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Ho_2005_Ca2_i](drugs/drug_desipramine/pd_Ho_2005_Ca2_i.md) | intracellular Ca2+ concentration ([Ca2+]i) rise in MDCK renal tubular cells ← desipramine · direct Emax (saturable) effect | — | Ho CM et al., Effect of desipramine on Ca2+ levels an…, Cellular signalling (2005) | [10.1016/j.cellsig.2004.11.005](https://doi.org/10.1016/j.cellsig.2004.11.005) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Jan_2003_Ca_2_i](drugs/drug_desipramine/pd_Jan_2003_Ca_2_i.md) | intracellular Ca(2+) concentration ([Ca(2+)]i) rise ← desipramine · direct Emax (saturable) effect | — | Jan CR et al., Effect of the antidepressant desipramin…, Pharmacology (2003) | [10.1159/000073663](https://doi.org/10.1159/000073663) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rabbit</span> | [Shin_2018_Kv_current](drugs/drug_desipramine/pd_Shin_2018_Kv_current.md) | voltage-dependent K+ (Kv) current amplitude ← desipramine · direct sigmoid Emax (Hill) effect | — | Shin SE et al., Inhibition of the Voltage-Dependent K, Cardiovascular toxicology (2018) | [10.1007/s12012-017-9435-x](https://doi.org/10.1007/s12012-017-9435-x) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Argenti_1994_beta_receptor_density](drugs/drug_desipramine/pd_Argenti_1994_beta_receptor_density.md) | cortical beta adrenergic receptor density downregulation ← desipramine · direct Emax (saturable) effect | — | Argenti D et al., The pharmacodynamics of desipramine and…, The Journal of pharmacology… (1994) | — |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Argenti_1994_beta_receptor_density_2](drugs/drug_desipramine/pd_Argenti_1994_beta_receptor_density_2.md) | cortical beta adrenergic receptor density downregulation ← desmethyldesipramine · direct Emax (saturable) effect | — | Argenti D et al., The pharmacodynamics of desipramine and…, The Journal of pharmacology… (1994) | — |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=desipramine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor, `SLC22A4` inhibitor, `SLC22A5` inhibitor | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor | DrugBank actor |
| absorption | skeletal muscle | `SLC22A5` inhibitor | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor, `SLC22A4` inhibitor, `SLC22A5` inhibitor | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor | DrugBank actor |
| distribution | blood | `ORM1` unknown | DrugBank actor |
| distribution | liver | `SLC22A3` inhibitor | DrugBank actor |
| distribution | placenta | `SLC22A3` inhibitor | DrugBank actor |
| distribution | skeletal muscle | `SLC22A3` inhibitor | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor/substrate | DrugBank actor |
| metabolism | liver | `CYP1A2` product, `CYP2B6` inhibitor, `CYP2D6` inhibitor/substrate, `CYP2E1` inhibitor, `CYP3A4` inhibitor, `SLC22A1` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor | DrugBank actor |
| excretion | kidney | `SLC22A2` inhibitor | DrugBank actor |
| excretion | liver | <sub>named in DrugBank's ADME text</sub> | prose |
| — | brain | `SLC6A4` inhibitor | DrugBank actor |
| — | platelet | `SLC6A4` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: ADRA1A (target), ADRA2A (binder), ADRB1 (other), ADRB2 (target), CHRM1 (target), CHRM2 (target), CHRM3 (target), CHRM4 (target), CHRM5 (target), DRD2 (binder), HRH1 (target), HTR1A (binder), HTR2A (target), HTR2C (binder), SLC6A2 (inhibitor), SMPD1 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 76 matched, 20 returned
- **screened:** 14  ·  **relevant:** 2
- **records:** 4  ·  extracted 0  ·  needs_review 1  ·  rejected 3  ·  stale 2
- **scholar-agent fallback query used:** not captured

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `DeVane_1981_2.pdf` | DeVane CL et al., Desipramine and 2-hydroxy-desipramine p…, European journal of clinica… (1981) | popPK | 8 | [10.1007/BF00558386](https://doi.org/10.1007/BF00558386) | [7461025](https://pubmed.ncbi.nlm.nih.gov/7461025) | Human PK study of desipramine and its metabolite with compartmental modeling, but numeric parameter values (CL, V, t½) are not present in the abstract evidence provided. |
| `Tamayo_1992.pdf` | Tamayo M et al., Population pharmacokinetics of imiprami…, European journal of clinica… (1992) | popPK | 8 | [10.1007/BF02280761](https://doi.org/10.1007/BF02280761) | [1505617](https://pubmed.ncbi.nlm.nih.gov/1505617) | Population PK of imipramine with desipramine as active metabolite after parent dosing; only elimination constants (0.0425, 0.0359 h⁻¹) are given, other parameters not shown in evidence. |
| `Weiner_1981.pdf` | Weiner D et al., Pharmacokinetic linearity of desipramin…, Journal of pharmaceutical s… (1981) | popPK | 7 | [10.1002/jps.2600700929](https://doi.org/10.1002/jps.2600700929) | [6101159](https://pubmed.ncbi.nlm.nih.gov/6101159) | Human PK study of desipramine with a one-compartment model, but no numeric parameter values appear in the evidence provided. |
| `Yuen_2017.pdf` | Yuen E et al., Prediction of human efficacious antidep…, Pharmacology, biochemistry,… (2017) | popPK | 7 | [10.1016/j.pbb.2017.09.002](https://doi.org/10.1016/j.pbb.2017.09.002) | [28888484](https://pubmed.ncbi.nlm.nih.gov/28888484) | Population PK/PD modeling of desipramine in mice is described, but numeric PK parameter values (CL, V, etc.) are not shown in the abstract and likely reside in tables/supplementary material not provided. |

<sub>queue written 2026-10-06T22:17:53.097475+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Argenti_1994 | irrelevant | 3 | 2 | This is a pharmacodynamic (receptor downregulation) study in rats; only tissue:blood ratios and ED50/EC50/Emax are given, no PK disposition parameters (CL, V, t½) for desipramine. |
| popPK | Baumann_1996_2 | irrelevant | 2 | 1 | Review on SSRI pharmacokinetics where desipramine is only mentioned as a CYP2D6 probe/comparator, with no quantitative disposition parameters for desipramine. |
| popPK | Broch_1987 | irrelevant | 0 | 0 | Neurochemical turnover study in rat brain; desipramine is only a comparator drug with no PK parameters reported. |
| popPK | DeVane_1981_2 | relevant | 8 | 3 | Human PK study of desipramine and its metabolite with compartmental modeling, but numeric parameter values (CL, V, t½) are not present in the abstract evidence provided. |
| popPK | Ho_2005 | irrelevant | 0 | 0 | In vitro cellular Ca2+ study with no pharmacokinetic disposition parameters for desipramine. |
| popPK | Jan_2003 | irrelevant | 0 | 0 | In-vitro cellular Ca(2+) study with no pharmacokinetic disposition parameters for desipramine. |
| popPK | Mosaddeghi_1989 | irrelevant | 0 | 0 | In-vitro rat cortical slice pharmacology study; desipramine is a co-administered uptake inhibitor, no PK parameters reported. |
| popPK | Mu_2020 | irrelevant | 0 | 0 | Desipramine is only used as a NET-blocking probe in a PET tracer ([11C]mHED) kinetic study in mice; no PK parameters of desipramine itself are reported. |
| popPK | Pancrazio_1998 | irrelevant | 0 | 0 | In-vitro electrophysiology study of Na+ channel blockade with no pharmacokinetic disposition parameters for desipramine. |
| popPK | Raffel_2013 | irrelevant | 1 | 1 | Desipramine is only a NET-blocking probe; the PK/kinetic parameters are for the radiotracer 11C-GMO, not for desipramine itself. |
| popPK | Shin_2018 | irrelevant | 0 | 0 | In-vitro electrophysiology study of desipramine's effect on Kv channels; no pharmacokinetic disposition parameters reported. |
| popPK | Sistovaris_1983 | irrelevant | 3 | 2 | Desipramine appears only as the desmethyl metabolite of dosed imipramine (analytical method paper); no numeric PK parameter values for desipramine are given, only assay detection limits. |
| popPK | Sudhir_1990 | irrelevant | 0 | 0 | Desipramine is only used as a neuronal uptake tool in an in vitro vascular reactivity study; no PK parameters reported. |
| popPK | Tamayo_1992 | relevant | 8 | 4 | Population PK of imipramine with desipramine as active metabolite after parent dosing; only elimination constants (0.0425, 0.0359 h⁻¹) are given, other parameters not shown in evidence. |
| popPK | Tyagi_2010 | irrelevant | 0 | 0 | Desipramine is only a CYP2D6 probe drug in a mirabegron drug-profile review; no PK parameter values are reported. |
| popPK | Weiner_1981 | relevant | 7 | 2 | Human PK study of desipramine with a one-compartment model, but no numeric parameter values appear in the evidence provided. |
| popPK | Yuen_2017 | relevant | 7 | 3 | Population PK/PD modeling of desipramine in mice is described, but numeric PK parameter values (CL, V, etc.) are not shown in the abstract and likely reside in tables/supplementary material not provided. |
| popPK | von_1995 | irrelevant | 0 | 0 | Desipramine is only used as a neuronal uptake blocker in a rat atrial neurotransmitter release study; no PK parameters for desipramine are reported. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 22:18 UTC</sub>
