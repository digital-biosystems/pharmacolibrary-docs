<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;acepromazine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Acepromazine_Garbin2022_reference&quot;,&quot;label&quot;:&quot;Garbin_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_acepromazine/Acepromazine_Garbin2022_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Acepromazine_Steagall2026_reference&quot;,&quot;label&quot;:&quot;Steagall_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_acepromazine/Acepromazine_Steagall2026_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# acepromazine

- **generic name:** acepromazine
- **ATC codes:** `N05AA04`
- **DrugBank:** [DB01614](https://go.drugbank.com/drugs/DB01614) · **PubChem:** [CID 6077](https://pubchem.ncbi.nlm.nih.gov/compound/6077)
- **molar mass:** 326.456 g/mol (C19H22N2OS) — DrugBank
- **groups:** investigational, vet_approved

## About

Acepromazine is a phenothiazine antipsychotic and dopamine antagonist. It is approved for veterinary use and remains investigational in humans, so it is not used in routine human medicine.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q425097](https://www.wikidata.org/wiki/Q425097) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| acepromazine | parent | 326.456 | C19H22N2OS | DrugBank | [6077](https://pubchem.ncbi.nlm.nih.gov/compound/6077) | Hashem_1992, Hashem_1993, McGree_2013 |
| 2-(1-hydroxyethyl)promazine | metabolite | 345 | — | the paper | — | McGree_2013 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 14:53 | 5:38 | 2/2/1 | 3/0/0 | 0/0/1 | 185,944/13,193 | ollama / glm-5.3-flash | 8 | 1/5 | 8/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (cat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">cat</span> | [Garbin_2022_reference](drugs/drug_acepromazine/Acepromazine_Garbin2022_reference.md) | ▶ model + simulator | 1-compartment, oral | 2 | Garbin M et al., Pharmacokinetics of Bupivacaine Followi…, Pharmaceutics (2022) | [10.3390/pharmaceutics14081548](https://doi.org/10.3390/pharmaceutics14081548) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (cat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">cat</span> | [Steagall_2026_reference](drugs/drug_acepromazine/Acepromazine_Steagall2026_reference.md) | ▶ model + simulator | 1-compartment, oral | 2 | Steagall PV et al., Pharmacokinetics of bupivacaine after b…, Journal of feline medicine… (2026) | [10.1177/1098612X251407158](https://doi.org/10.1177/1098612X251407158) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">horse</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [McGree_2013_reference](drugs/drug_acepromazine/Acepromazine_McGree2013_reference.md) | — | 1-compartment (no model) | 1 | McGree JM et al., A Bayesian approach for estimating dete…, Journal of veterinary pharm… (2013) | [10.1111/j.1365-2885.2013.01389.x](https://doi.org/10.1111/j.1365-2885.2013.01389.x) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Hashem_1992_reference](drugs/drug_acepromazine/Acepromazine_Hashem1992_reference.md) | — | 1-compartment (no model) | 2 | Hashem A et al., [The pharmacokinetics and bioavailabili…, DTW. Deutsche tierarztliche… (1992) | — |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">horse</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Hashem_1993_reference](drugs/drug_acepromazine/Acepromazine_Hashem1993_reference.md) | — | 1-compartment (no model) | 5 | Hashem A et al., Disposition, bioavailability and clinic…, Journal of veterinary pharm… (1993) | [10.1111/j.1365-2885.1993.tb00183.x](https://doi.org/10.1111/j.1365-2885.1993.tb00183.x) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">horse</span> | [Calloe_2019_Kv11_1_current](drugs/drug_acepromazine/pd_Calloe_2019_Kv11_1_current.md) | equine Kv11.1 current inhibition ← acepromazine maleate · inhibition effect | — | Calloe K et al., Compounds commonly used in equine medic…, Research in veterinary scie… (2019) | [10.1016/j.rvsc.2019.01.009](https://doi.org/10.1016/j.rvsc.2019.01.009) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Joo_2017_Itail](drugs/drug_acepromazine/pd_Joo_2017_Itail.md) | hERG peak tail currents (activated states) ← acepromazine · direct sigmoid Emax (Hill) effect | — | Joo YS et al., Acepromazine inhibits hERG potassium io…, The Korean journal of physi… (2017) | [10.4196/kjpp.2017.21.1.75](https://doi.org/10.4196/kjpp.2017.21.1.75) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Joo_2017_Itail_2](drugs/drug_acepromazine/pd_Joo_2017_Itail_2.md) | hERG tail currents (open state block) ← acepromazine · direct sigmoid Emax (Hill) effect | — | Joo YS et al., Acepromazine inhibits hERG potassium io…, The Korean journal of physi… (2017) | [10.4196/kjpp.2017.21.1.75](https://doi.org/10.4196/kjpp.2017.21.1.75) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">horse</span> | [Sedrish_1999_Relaxation_of_NE_contracted_large_colon_arterial_and_venous_rings](drugs/drug_acepromazine/pd_Sedrish_1999_Relaxation_of_NE_contracted_large_colon_arteria.md) | Relaxation of NE-contracted large colon arterial and venous rings ← acepromazine · stimulation effect | — | Sedrish SA et al., In vitro response of large colon arteri…, American journal of veterin… (1999) | — |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">dog</span> | **ABCB1** | `Q351` · CLm/F | transport | [Deshpande_2016](drugs/drug_acepromazine/pgx_Deshpande_2016_ABCB1_Q351.md) | Deshpande D et al., The Effect of the Canine ABCB1-1Δ Mutat…, Journal of veterinary inter… (2016) | [10.1111/jvim.13827](https://doi.org/10.1111/jvim.13827) |

<details class="pk-legend"><summary>What the PGx badges mean — evidence, and whether a model runs</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>the paper gives the effect of each phenotype (or genotype) on a named model parameter — a θ per category.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>the effect comes from a CPIC / DPWG dosing guideline, not from this paper's numbers.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>the paper's popPK model runs per phenotype in the browser (Simulation tab); its PGx Modelica model is under Models.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>a PGx Modelica model exists but has no in-browser simulator.</td></tr></tbody></table></details>

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=acepromazine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` transport | paper PGx gene |
| absorption | kidney | `ABCB1` transport | paper PGx gene |
| absorption | liver | `ABCB1` transport | paper PGx gene |
| absorption | placenta | `ABCB1` transport | paper PGx gene |
| absorption | small intestine | `ABCB1` transport | paper PGx gene |
| absorption | testis | `ABCB1` transport | paper PGx gene |
| distribution | blood | `ALB` unknown | DrugBank actor |

<sub>Actors without a tissue in the table: ADRA1A (target), ADRA1B (target), DRD1 (target), DRD2 (target), HTR1A (target), HTR2A (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 42 matched, 42 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 5  ·  extracted 2  ·  needs_review 1  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Hashem_1992.pdf` | Hashem A et al., [The pharmacokinetics and bioavailabili…, DTW. Deutsche tierarztliche… (1992) | popPK | 9 | not captured | [1425314](https://pubmed.ncbi.nlm.nih.gov/1425314) | Original PK study of acepromazine in dogs with numeric half-lives and bioavailability reported in the abstract, though full parameter set (CL, V) may be in the paper body not shown. |
| `Hashem_1993.pdf` | Hashem A et al., Disposition, bioavailability and clinic…, Journal of veterinary pharm… (1993) | popPK | 8 | [10.1111/j.1365-2885.1993.tb00183.x](https://doi.org/10.1111/j.1365-2885.1993.tb00183.x) | [8230407](https://pubmed.ncbi.nlm.nih.gov/8230407) | Original PK study in horses with numeric disposition parameters (half-lives, tmax, Cmax, bioavailability) reported directly in the abstract, though CL/V values are not shown. |

<sub>queue written 2026-10-06T14:51:28.535522+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abass_1994 | irrelevant | 1 | 2 | The PK parameters reported (CL, V, half-lives) are for thiopentone, not acepromazine, which is only a pre-medication agent. |
| popPK | Baxter_1989 | irrelevant | 0 | 0 | In vitro vascular reactivity study measuring EC50 vasodilation, not pharmacokinetic disposition parameters for acepromazine. |
| popPK | Cardozo_2024 | irrelevant | 0 | 0 | Acepromazine is only used as premedication; no PK parameters are reported. |
| popPK | Choi_2014 | irrelevant | 2 | 1 | Environmental soil dissipation kinetics of acepromazine, not pharmacokinetic disposition parameters in a living subject; no numeric PK values present. |
| popPK | Garbin_2022 | irrelevant | 0 | 0 | This is a pharmacokinetic study of bupivacaine in cats; acepromazine is only a co-administered sedative in the anesthetic protocol, with no acepromazine PK parameters reported. |
| popPK | Hatz_2015 | irrelevant | 0 | 0 | This is a blood pressure measurement validation study in horses; acepromazine is only a premedication, with no PK parameters reported. |
| popPK | Joo_2017 | irrelevant | 0 | 0 | In-vitro electrophysiology (hERG channel blockade in HEK293 cells); no PK disposition parameters for acepromazine, only cited Cmax values from other studies. |
| popPK | Keating_2016 | irrelevant | 2 | 3 | Acepromazine is only a co-administered sedative; the PK parameters reported (CL, Vc) are for fentanyl, not acepromazine itself. |
| popPK | Micieli_2018 | irrelevant | 0 | 0 | This is a pharmacodynamic comparison of ocular effects in dogs; no PK parameters for acepromazine are reported. |
| popPK | Sedlacik_2015 | irrelevant | 0 | 0 | Acepromazine is only a component of the anesthetic regimen; no PK parameters for it are reported. |
| popPK | Sedrish_1999 | irrelevant | 0 | 0 | In vitro vascular pharmacodynamics study; acepromazine is one of several vasodilators tested, no PK disposition parameters reported. |
| popPK | Steagall_2026 | irrelevant | 0 | 0 | This is a pharmacokinetic study of bupivacaine in cats; acepromazine is only a co-administered sedative premedication with no acepromazine PK parameters reported. |
| popPK | de_2026 | irrelevant | 0 | 0 | This is a sedative/cardiovascular comparison study in dogs with no pharmacokinetic parameters (no CL, V, ka, half-life, or PK model) for acepromazine; plasma concentrations were not even measured. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 14:51 UTC</sub>
