<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A06A&quot;,&quot;href&quot;:&quot;atc/A06A.md&quot;},{&quot;label&quot;:&quot;magnesium sulfate&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;MagnesiumSulfate_Chuan2001_reference&quot;,&quot;label&quot;:&quot;Chuan_2001_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_magnesium_sulfate/MagnesiumSulfate_Chuan2001_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# magnesium sulfate

- **generic name:** magnesium sulfate
- **ATC codes:** `A06AD04`, `A12CC02`, `B05XA05`, `D11AX05`, `V04CC02`
- **DrugBank:** [DB00653](https://go.drugbank.com/drugs/DB00653) · **PubChem:** [CID 24083](https://pubchem.ncbi.nlm.nih.gov/compound/24083)
- **molar mass:** 120.368 g/mol (MgO4S) — DrugBank
- **groups:** approved, investigational, vet_approved

## About

Magnesium sulfate is used as a laxative for constipation, as a magnesium supplement, and in electrolyte solutions; it also acts as an anticonvulsant, antiarrhythmic, analgesic, anesthetic, and tocolytic agent. It is widely used in human medicine and is also an approved veterinary drug, with some investigational uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q288266](https://www.wikidata.org/wiki/Q288266) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| magnesium | metabolite | 24.305 | Mg | PubChem | [5462224](https://pubchem.ncbi.nlm.nih.gov/compound/5462224) | Brookfield_2021, Du_2019 |
| magnesium_sulfate | metabolite | 120.368 | MgO4S | DrugBank | [24083](https://pubchem.ncbi.nlm.nih.gov/compound/24083) | Brookfield_2016, Brookfield_2021, Chuan_2001, Deng_2024, Du_2019, Rower_2017, da_2020 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 19:52 | 7:21 | 3/6/1 | 0/0/0 | 0/0/0 | 282,060/53,703 | einfracz / qwen3.8-27b | 8 | 1/7 | 7/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.444). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Brookfield_2021_reference](drugs/drug_magnesium_sulfate/MagnesiumSulfate_Brookfield2021_reference.md) | held back | 2-compartment, oral | 6 (+3 cov.) | Brookfield K et al., Magnesium sulfate pharmacokinetics afte…, AJOG global reports (2021) | [10.1016/j.xagr.2021.100018](https://doi.org/10.1016/j.xagr.2021.100018) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Chuan_2001_reference](drugs/drug_magnesium_sulfate/MagnesiumSulfate_Chuan2001_reference.md) | ▶ model + simulator | 1-compartment, IV | 3 | Chuan FS et al., Population pharmacokinetics of magnesiu…, American journal of obstetr… (2001) | [10.1067/mob.2001.116726](https://doi.org/10.1067/mob.2001.116726) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Du_2019_reference](drugs/drug_magnesium_sulfate/MagnesiumSulfate_Du2019_reference.md) | held back | 2-compartment, IV | 4 (+3 cov.) | Du L et al., Population Pharmacokinetic Modeling to…, Journal of clinical pharmac… (2019) | [10.1002/jcph.1328](https://doi.org/10.1002/jcph.1328) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Brookfield_2016_reference](drugs/drug_magnesium_sulfate/MagnesiumSulfate_Brookfield2016_reference.md) | — | 1-compartment (no model) | 2 | Brookfield KF et al., Pharmacokinetics and placental transfer…, American journal of obstetr… (2016) | [10.1016/j.ajog.2015.12.060](https://doi.org/10.1016/j.ajog.2015.12.060) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.333). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: C2 negative clearance/volume in a covariate scenario or base (implausible — bas…</sub><br><sub>route_to: `human_review`</sub> | [Deng_2024_reference](drugs/drug_magnesium_sulfate/MagnesiumSulfate_Deng2024_reference.md) | — | 1-compartment (no model) | 3 | Deng J et al., Population pharmacokinetics and dose op…, BMC pregnancy and childbirth (2024) | [10.1186/s12884-024-06620-x](https://doi.org/10.1186/s12884-024-06620-x) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Du_2019_2_reference](drugs/drug_magnesium_sulfate/MagnesiumSulfate_Du2019v2_reference.md) | — | 1-compartment (no model) | 0 | Du L et al., Alternative Magnesium Sulfate Dosing Re…, Journal of clinical pharmac… (2019) | [10.1002/jcph.1448](https://doi.org/10.1002/jcph.1448) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.25). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Lu_2002_reference](drugs/drug_magnesium_sulfate/MagnesiumSulfate_Lu2002_reference.md) | — | 1-compartment (no model) | 0 | Lu J et al., Pharmacokinetic-pharmacodynamic modelli…, Clinical pharmacokinetics (2002) | [10.2165/00003088-200241130-00007](https://doi.org/10.2165/00003088-200241130-00007) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Rower_2017_reference](drugs/drug_magnesium_sulfate/MagnesiumSulfate_Rower2017_reference.md) | — | 1-compartment (no model) | 1 | Rower JE et al., Clinical pharmacokinetics of magnesium…, European journal of clinica… (2017) | [10.1007/s00228-016-2165-3](https://doi.org/10.1007/s00228-016-2165-3) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Rui_1996_reference](drugs/drug_magnesium_sulfate/MagnesiumSulfate_Rui1996_reference.md) | — | 1-compartment (no model) | 0 | Rui JZ et al., [Population pharmacokinetics/pharmacody…, Yao xue xue bao = Acta phar… (1996) | — |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.75). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [da_2020_reference](drugs/drug_magnesium_sulfate/MagnesiumSulfate_da2020_reference.md) | — | 2-compartment (no model) | 3 | da Costa TX et al., Population Pharmacokinetics of Magnesiu…, Drugs in R&D (2020) | [10.1007/s40268-020-00315-2](https://doi.org/10.1007/s40268-020-00315-2) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=magnesium_sulfate) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: CACNA1C (blocker), CACNA1C (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 28 matched, 20 returned
- **screened:** 10  ·  **relevant:** 10
- **records:** 10  ·  extracted 3  ·  needs_review 1  ·  rejected 6  ·  stale 4
- **scholar-agent fallback query used:** not captured

## Full text wanted

_6 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Brookfield_2016.pdf` | Brookfield KF et al., Pharmacokinetics and placental transfer…, American journal of obstetr… (2016) | popPK | 10 | [10.1016/j.ajog.2015.12.060](https://doi.org/10.1016/j.ajog.2015.12.060) | [26767791](https://pubmed.ncbi.nlm.nih.gov/26767791) | The study reports specific quantitative pharmacokinetic parameters for magnesium sulfate (clearance values for preeclamptic and non-preeclamptic women and steady-state concentrations) in the abstract. |
| `Chuan_2001.pdf` | Chuan FS et al., Population pharmacokinetics of magnesiu…, American journal of obstetr… (2001) | popPK | 10 | [10.1067/mob.2001.116726](https://doi.org/10.1067/mob.2001.116726) | [11568783](https://pubmed.ncbi.nlm.nih.gov/11568783) | The study reports quantitative population PK parameters (CL, V, t1/2) for magnesium sulfate in humans, with all values explicitly listed in the abstract. |
| `Lu_2002.pdf` | Lu J et al., Pharmacokinetic-pharmacodynamic modelli…, Clinical pharmacokinetics (2002) | popPK | 10 | [10.2165/00003088-200241130-00007](https://doi.org/10.2165/00003088-200241130-00007) | [12403646](https://pubmed.ncbi.nlm.nih.gov/12403646) | The paper reports specific population pharmacokinetic parameter estimates (CL, Vc, Vp, Q) for magnesium sulfate in a two-compartment model. |
| `Rower_2017.pdf` | Rower JE et al., Clinical pharmacokinetics of magnesium…, European journal of clinica… (2017) | popPK | 10 | [10.1007/s00228-016-2165-3](https://doi.org/10.1007/s00228-016-2165-3) | [27909740](https://pubmed.ncbi.nlm.nih.gov/27909740) | The paper describes a population PK study of magnesium sulfate in children and reports key parameters such as half-life (2.7 h) and baseline concentration, but detailed compartmental values (CL, V) are likely in the full text or tables not fully shown in the evidence snippet. |
| `Rui_1996.pdf` | Rui JZ et al., [Population pharmacokinetics/pharmacody…, Yao xue xue bao = Acta phar… (1996) | popPK | 10 | not captured | [8762465](https://pubmed.ncbi.nlm.nih.gov/8762465) | The paper reports quantitative population PK parameters (K10, K12, K21, Vc) and values for magnesium sulfate in humans. |
| `Chen_1991.pdf` | Chen G et al., [Pharmacokinetic-pharmacodynamic model…, Zhongguo yao li xue bao = A… (1991) | popPK | 8 | not captured | [1781283](https://pubmed.ncbi.nlm.nih.gov/1781283) | The paper describes a PK-PD model for magnesium sulfate and provides specific PD parameters (Kco, Emax), but the primary PK disposition values (CL, V) are not explicitly listed in the text, likely residing in unprovided tables or figures. |

<sub>queue written 2026-10-07T19:45:48.054678+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chen_1991 | relevant | 8 | 2 | The paper describes a PK-PD model for magnesium sulfate and provides specific PD parameters (Kco, Emax), but the primary PK disposition values (CL, V) are not explicitly listed in the text, likely residing in unprovided tables or figures. |
| popPK | Cho_2018 | irrelevant | 0 | 0 | The study is an in-vitro pharmacodynamic investigation of neuromuscular blockade in rat tissue, containing no pharmacokinetic parameters (CL, V, ka) for magnesium sulfate. |
| popPK | Landau_2004 | irrelevant | 1 | 0 | The study reports local vascular hemodynamics (ED50 of vasodilation) and peak plasma concentrations, but does not model pharmacokinetic parameters like clearance or volume of distribution. |
| popPK | Lu_2000 | irrelevant | 2 | 5 | This is a review article outlining pharmacokinetic principles rather than an original study, though it cites a specific range for volume of distribution. |
| popPK | Mohammed_2020 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of vascular reactivity (myography) in chicken embryos, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Polat_2007 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of vasorelaxant effects, not a pharmacokinetic study, and reports no disposition parameters like clearance or volume. |
| popPK | Rower_2025 | irrelevant | 5 | 1 | The study reports external validation metrics (bias/accuracy) and exposure thresholds for an IV magnesium sulfate model, but the actual quantitative disposition parameter estimates (clearance, volume) are stated to be in Table S3 of a prior publication and are not included in the provided evidence. |
| popPK | Skajaa_1990 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of vascular reactivity and mechanistic effects of magnesium on isolated vessels, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Torregrosa_1994 | irrelevant | 0 | 0 | The study is a physiological/mechanistic investigation of magnesium's effects on vascular tone and blood flow in goats, not a pharmacokinetic study reporting disposition parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 19:49 UTC</sub>
