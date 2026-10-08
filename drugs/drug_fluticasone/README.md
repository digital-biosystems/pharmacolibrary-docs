<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D07A&quot;,&quot;href&quot;:&quot;atc/D07A.md&quot;},{&quot;label&quot;:&quot;fluticasone&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Fluticasone_Rebello2026_reference&quot;,&quot;label&quot;:&quot;Rebello_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fluticasone/Fluticasone_Rebello2026_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# fluticasone

- **generic name:** fluticasone
- **ATC codes:** `D07AC17`, `R01AD08`, `R03AK06`, `R03AK11`, `R03BA05`
- **DrugBank:** [DB13867](https://go.drugbank.com/drugs/DB13867) · **PubChem:** not captured
- **molar mass:** 444.51 g/mol (C22H27F3O4S) — DrugBank
- **groups:** approved, investigational, withdrawn

## About

Fluticasone is a corticosteroid used to treat inflammatory conditions such as rhinitis, sinusitis, and other respiratory diseases, and is also applied to the skin. It is widely used, available as nasal, inhaled, and dermatological preparations, though some products have been withdrawn.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q1002165](https://www.wikidata.org/wiki/Q1002165) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| fluticasone | parent | 444.51 | C22H27F3O4S | DrugBank | — | Mehta_2018, Mehta_2020, Möllmann_1998, Rebello_2026, Siederer_2016 |
| fluticasone furoate | metabolite | 538.577 | C27H29F3O6S | PubChem | [9854489](https://pubchem.ncbi.nlm.nih.gov/compound/9854489) | Mehta_2018, Mehta_2020, Siederer_2016 |
| fluticasone propionate | metabolite | 500.572 | C25H31F3O5S | PubChem | [444036](https://pubchem.ncbi.nlm.nih.gov/compound/444036) | Möllmann_1998, Rebello_2026 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 23:12 | 8:34 | 1/2/2 | 6/0/1 | 0/0/0 | 166,500/18,584 | ollama / qwen3.8:27b-mtp-q8_0 | 6 | 0/6 | 6/0 | 1 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Rebello_2026_reference](drugs/drug_fluticasone/Fluticasone_Rebello2026_reference.md) | ▶ model + simulator | 2-compartment, oral | 8 | Rebello J et al., Understanding Pulmonary and Systemic Ph…, European journal of drug me… (2026) | [10.1007/s13318-026-00989-0](https://doi.org/10.1007/s13318-026-00989-0) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Mehta_2020_reference](drugs/drug_fluticasone/Fluticasone_Mehta2020_reference.md) | — | 1-compartment (no model) | 1 | Mehta R et al., Population Pharmacokinetic Analysis of…, Clinical pharmacokinetics (2020) | [10.1007/s40262-019-00794-w](https://doi.org/10.1007/s40262-019-00794-w) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Siederer_2016_reference](drugs/drug_fluticasone/Fluticasone_Siederer2016_reference.md) | — | 1-compartment (no model) | 1 | Siederer S et al., Population Pharmacokinetics of Inhaled…, European journal of drug me… (2016) | [10.1007/s13318-015-0303-4](https://doi.org/10.1007/s13318-015-0303-4) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Mehta_2018_reference](drugs/drug_fluticasone/Fluticasone_Mehta2018_reference.md) | — | 1-compartment (no model) | 0 | Mehta R et al., Population Pharmacokinetic Analysis of…, Journal of clinical pharmac… (2018) | [10.1002/jcph.1253](https://doi.org/10.1002/jcph.1253) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Möllmann_1998_reference](drugs/drug_fluticasone/Fluticasone_Mllmann1998_reference.md) | — | 1-compartment (no model) | 3 | Möllmann H et al., Pharmacokinetic and pharmacodynamic eva…, European journal of clinica… (1998) | [10.1007/s002280050407](https://doi.org/10.1007/s002280050407) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Chakraborty_1999_cortisol](drugs/drug_fluticasone/pd_Chakraborty_1999_cortisol.md) | cortisol concentrations ← fluticasone propionate · indirect response — drug inhibits the production of cortisol concentrations | — | Chakraborty A et al., Mathematical modeling of circadian cort…, Journal of pharmacokinetics… (1999) | [10.1023/a:1020678628317](https://doi.org/10.1023/a:1020678628317) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Krzyzanski_2000_Cortisol](drugs/drug_fluticasone/pd_Krzyzanski_2000_Cortisol.md) | Cortisol ← fluticasone propionate · indirect response — drug inhibits the production of Cortisol | — | Krzyzanski W et al., Algorithm for application of Fourier an…, Chronobiology international (2000) | [10.1081/cbi-100101034](https://doi.org/10.1081/cbi-100101034) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Mackie_2000_cortisol_2](drugs/drug_fluticasone/pd_Mackie_2000_cortisol_2.md) | urinary cortisol excretion ← fluticasone propionate · direct Emax (saturable) effect | — | Mackie AE et al., The relationship between systemic expos…, Clinical pharmacokinetics 3… (2000) | [10.2165/00003088-200039001-00007](https://doi.org/10.2165/00003088-200039001-00007) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Pu_2026_URTI](drugs/drug_fluticasone/pd_Pu_2026_URTI.md) | upper respiratory tract infection ← fluticasone · direct Emax (saturable) effect | — | Pu X et al., Adverse events of inhaled corticosteroi…, BMJ evidence-based medicine (2026) | [10.1136/bmjebm-2024-113216](https://doi.org/10.1136/bmjebm-2024-113216) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Pu_2026_pneumonia](drugs/drug_fluticasone/pd_Pu_2026_pneumonia.md) | pneumonia ← fluticasone · direct Emax (saturable) effect | — | Pu X et al., Adverse events of inhaled corticosteroi…, BMJ evidence-based medicine (2026) | [10.1136/bmjebm-2024-113216](https://doi.org/10.1136/bmjebm-2024-113216) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Tapfumaneyi_2022_skin_blanching](drugs/drug_fluticasone/pd_Tapfumaneyi_2022_skin_blanching.md) | skin blanching ← fluticasone propionate · direct Emax (saturable) effect | — | Tapfumaneyi P et al., Fitting Pharmacodynamic Data to the, Molecular pharmaceutics (2022) | [10.1021/acs.molpharmaceut.2c00254](https://doi.org/10.1021/acs.molpharmaceut.2c00254) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Tayab_2007_urinary_cortisol_creatinine](drugs/drug_fluticasone/pd_Tayab_2007_urinary_cortisol_creatinine.md) | urinary cortisol/creatinine ← fluticasone propionate · direct Emax (saturable) effect | — | Tayab ZR et al., Pharmacokinetic/pharmacodynamic evaluat…, British journal of clinical… (2007) | [10.1111/j.1365-2125.2007.02919.x](https://doi.org/10.1111/j.1365-2125.2007.02919.x) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Mackie_2000_cortisol](drugs/drug_fluticasone/pd_Mackie_2000_cortisol.md) | plasma cortisol level ← fluticasone propionate · direct Emax (saturable) effect | model (no simulator) | Mackie AE et al., The relationship between systemic expos…, Clinical pharmacokinetics 3… (2000) | [10.2165/00003088-200039001-00007](https://doi.org/10.2165/00003088-200039001-00007) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Möllmann_1998_cortisol](drugs/drug_fluticasone/pd_M_llmann_1998_cortisol.md) | cortisol reduction ← fluticasone propionate · indirect response — drug inhibits the production of cortisol reduction | model (no simulator) | Möllmann H et al., Pharmacokinetic and pharmacodynamic eva…, European journal of clinica… (1998) | [10.1007/s002280050407](https://doi.org/10.1007/s002280050407) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Möllmann_1998_granulocytes](drugs/drug_fluticasone/pd_M_llmann_1998_granulocytes.md) | granulocyte induction ← fluticasone propionate · indirect response — drug stimulates the production of granulocyte induction | model (no simulator) | Möllmann H et al., Pharmacokinetic and pharmacodynamic eva…, European journal of clinica… (1998) | [10.1007/s002280050407](https://doi.org/10.1007/s002280050407) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Möllmann_1998_lymphocytes](drugs/drug_fluticasone/pd_M_llmann_1998_lymphocytes.md) | lymphocyte suppression ← fluticasone propionate · indirect response — drug inhibits the production of lymphocyte suppression | model (no simulator) | Möllmann H et al., Pharmacokinetic and pharmacodynamic eva…, European journal of clinica… (1998) | [10.1007/s002280050407](https://doi.org/10.1007/s002280050407) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=fluticasone) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | skin | <sub>named in DrugBank's ADME text</sub> | prose |
| absorption | small intestine | `ABCB1` substrate | DrugBank actor |
| absorption | testis | `ABCB1` substrate | DrugBank actor |
| metabolism | kidney | `CYP3A5` inducer/inhibitor/substrate | DrugBank actor |
| metabolism | liver | `CYP2C8` inhibitor, `CYP3A4` inducer/inhibitor/substrate, `CYP3A5` inducer/inhibitor/substrate, `CYP3A7` substrate, `SLCO1B1` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer/inhibitor/substrate, `CYP3A5` inducer/inhibitor/substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: NR3C1 (target), NR3C2 (target), PGR (target), PLA2G4A (inhibitor), SERPINA6 (unknown).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 60 matched, 20 returned
- **screened:** 6  ·  **relevant:** 6
- **records:** 5  ·  extracted 1  ·  needs_review 2  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Allen_2016.pdf` | Allen A et al., Population pharmacokinetics of inhaled…, International journal of cl… (2016) | popPK | 10 | [10.5414/CP202438](https://doi.org/10.5414/CP202438) | [26902504](https://pubmed.ncbi.nlm.nih.gov/26902504) | The paper reports a population PK model for fluticasone furoate, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence, only relative changes (e.g., AUC differences) are described. |
| `Li_2024.pdf` | Li S et al., Pharmacokinetic Models for Inhaled Flut…, The AAPS journal (2024) | popPK | 10 | [10.1208/s12248-024-00913-x](https://doi.org/10.1208/s12248-024-00913-x) | [38671158](https://pubmed.ncbi.nlm.nih.gov/38671158) | The paper describes a population PK study for fluticasone propionate in humans, but the specific numeric parameter values are not present in the provided evidence. |
| `Soulele_2015.pdf` | Soulele K et al., Population pharmacokinetics of fluticas…, European journal of pharmac… (2015) | popPK | 10 | [10.1016/j.ejps.2015.08.009](https://doi.org/10.1016/j.ejps.2015.08.009) | [26296862](https://pubmed.ncbi.nlm.nih.gov/26296862) | The study describes a population PK model for fluticasone propionate in humans, but the specific numeric parameter values are not present in the provided evidence text. |
| `Wakefield_2000.pdf` | Wakefield J et al., The combination of population pharmacok…, Biometrics (2000) | popPK | 10 | [10.1111/j.0006-341x.2000.00263.x](https://doi.org/10.1111/j.0006-341x.2000.00263.x) | [10783805](https://pubmed.ncbi.nlm.nih.gov/10783805) | The paper describes a population PK model for fluticasone propionate based on Phase I studies, but the specific numeric parameter values are not present in the provided evidence. |
| `Möllmann_1998.pdf` | Möllmann H et al., Pharmacokinetic and pharmacodynamic eva…, European journal of clinica… (1998) | popPK | 8 | [10.1007/s002280050407](https://doi.org/10.1007/s002280050407) | [9551705](https://pubmed.ncbi.nlm.nih.gov/9551705) | The study reports quantitative PK parameters (half-life, Tmax, Cmax) and PK/PD model fits for fluticasone propionate in humans, though specific clearance or volume values are not explicitly listed in the text. |

<sub>queue written 2026-10-07T23:05:42.648965+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Allen_2013 | irrelevant | 2 | 2 | The study models the pharmacodynamic relationship between fluticasone furoate AUC (a summary exposure metric) and cortisol suppression, rather than reporting compartmental pharmacokinetic parameters (CL, V, ka) for fluticasone itself. |
| popPK | Allen_2016 | relevant | 10 | 2 | The paper reports a population PK model for fluticasone furoate, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence, only relative changes (e.g., AUC differences) are described. |
| popPK | Chakraborty_1999 | irrelevant | 0 | 0 | The study focuses on mathematical modeling of cortisol circadian rhythms, using fluticasone only as a suppressant agent, and does not report pharmacokinetic parameters for fluticasone. |
| popPK | Daley-Yates_2004 | irrelevant | 2 | 0 | The study is a pharmacodynamic modeling of growth velocity using cortisol equivalents, not a pharmacokinetic study reporting disposition parameters (CL, V, etc.) for fluticasone. |
| popPK | Kelly_1998 | irrelevant | 2 | 0 | The paper is a review discussing general pharmacokinetic principles and relative potencies of inhaled corticosteroids without reporting specific quantitative PK parameter values (CL, V, etc.) for fluticasone. |
| popPK | Krzyzanski_2000 | irrelevant | 0 | 0 | The study focuses on pharmacodynamic modeling of cortisol suppression (PD) and does not report pharmacokinetic parameters (CL, V, etc.) for fluticasone. |
| popPK | Li_2024 | relevant | 10 | 0 | The paper describes a population PK study for fluticasone propionate in humans, but the specific numeric parameter values are not present in the provided evidence. |
| popPK | Mackie_2000 | irrelevant | 2 | 0 | The study reports PK/PD parameters (AUC50, Emax) relating exposure to cortisol suppression, but does not report standard disposition parameters (CL, V, ka, t1/2) for fluticasone itself. |
| popPK | Meibohm_1999 | irrelevant | 2 | 0 | The paper is a PK/PD modeling study predicting cortisol suppression using parameters from other studies, and it does not report original quantitative disposition parameters (CL, V, etc.) for fluticasone in the provided evidence. |
| popPK | Pu_2026 | irrelevant | 0 | 0 | The paper is a meta-analysis of adverse events and does not report pharmacokinetic parameters for fluticasone. |
| popPK | Soulele_2015 | relevant | 10 | 0 | The study describes a population PK model for fluticasone propionate in humans, but the specific numeric parameter values are not present in the provided evidence text. |
| popPK | Tapfumaneyi_2022 | irrelevant | 0 | 0 | The study reports pharmacodynamic parameters (Emax, ED50) from a vasoconstrictor assay, not pharmacokinetic disposition parameters. |
| popPK | Tayab_2007 | irrelevant | 2 | 0 | The study focuses on pharmacodynamic effects (urinary cortisol suppression) and relative bioavailability comparisons, reporting no quantitative PK parameters (CL, V, ka) for fluticasone. |
| popPK | Wakefield_2000 | relevant | 10 | 0 | The paper describes a population PK model for fluticasone propionate based on Phase I studies, but the specific numeric parameter values are not present in the provided evidence. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 23:06 UTC</sub>
