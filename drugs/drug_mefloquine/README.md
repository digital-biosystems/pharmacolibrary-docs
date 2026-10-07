<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01B&quot;,&quot;href&quot;:&quot;atc/P01B.md&quot;},{&quot;label&quot;:&quot;mefloquine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Mefloquine_CherkaouiRbati2023_reference&quot;,&quot;label&quot;:&quot;Cherkaoui-Rbati_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_mefloquine/Mefloquine_CherkaouiRbati2023_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Mefloquine_Rattanapunya2015_reference&quot;,&quot;label&quot;:&quot;Rattanapunya_2015_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_mefloquine/Mefloquine_Rattanapunya2015_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Mefloquine_Rufener2018_reference&quot;,&quot;label&quot;:&quot;Rufener_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_mefloquine/Mefloquine_Rufener2018_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# mefloquine

- **generic name:** mefloquine
- **ATC codes:** `P01BC02`, `P01BF02`
- **DrugBank:** [DB00358](https://go.drugbank.com/drugs/DB00358) · **PubChem:** [CID 4046](https://pubchem.ncbi.nlm.nih.gov/compound/4046)
- **molar mass:** 378.3122 g/mol (C17H16F6N2O) — DrugBank
- **groups:** approved

## About

Mefloquine is an antimalarial drug used to treat and prevent malaria, including forms caused by Plasmodium falciparum and Plasmodium vivax. It remains an approved medicine and appears on the WHO list of essential medicines, so it is still used worldwide for malaria treatment and prophylaxis.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q736270](https://www.wikidata.org/wiki/Q736270) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| mefloquine (mefloquine enantiomers) | parent | 378.312 | C17H16F6N2O | DrugBank | [4046](https://pubchem.ncbi.nlm.nih.gov/compound/4046) | Mim_2026, Rufener_2018, Saeheng_2023, Simpson_1999, Svensson_2002 |
| artesunate | metabolite | 384.425 | C19H28O8 | PubChem | [6917864](https://pubchem.ncbi.nlm.nih.gov/compound/6917864) | Saeheng_2023 |
| dihydroartemisinin | metabolite | 284.352 | C15H24O5 | PubChem | [107770](https://pubchem.ncbi.nlm.nih.gov/compound/107770) | Saeheng_2023 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 07:34 | 10:35 | 3/3/1 | 5/0/1 | 0/0/0 | 510,893/39,419 | ollama / glm-5.3-flash | 13 | 13/0 | 13/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Cherkaoui-Rbati_2023_reference](drugs/drug_mefloquine/Mefloquine_CherkaouiRbati2023_reference.md) | ▶ model + simulator | 2-compartment, IV | 5 | Cherkaoui-Rbati MH et al., A pharmacokinetic-pharmacodynamic model…, CPT: pharmacometrics & syst… (2023) | [10.1002/psp4.12875](https://doi.org/10.1002/psp4.12875) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Rattanapunya_2015_reference](drugs/drug_mefloquine/Mefloquine_Rattanapunya2015_reference.md) | ▶ model + simulator | 1-compartment, oral | 2 | Rattanapunya S et al., Pharmacokinetic interactions between ar…, Malaria journal (2015) | [10.1186/s12936-015-0916-8](https://doi.org/10.1186/s12936-015-0916-8) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Rufener_2018_reference](drugs/drug_mefloquine/Mefloquine_Rufener2018_reference.md) | ▶ model + simulator | 2-compartment, oral | 5 | Rufener R et al., Activity of mefloquine and mefloquine d…, International journal for p… (2018) | [10.1016/j.ijpddr.2018.06.004](https://doi.org/10.1016/j.ijpddr.2018.06.004) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q31 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Svensson_2002_reference](drugs/drug_mefloquine/Mefloquine_Svensson2002_reference.md) | — | 1-compartment (no model) | 4 | Svensson US et al., Population pharmacokinetic and pharmaco…, European journal of clinica… (2002) | [10.1007/s00228-002-0485-y](https://doi.org/10.1007/s00228-002-0485-y) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Mim_2026_reference](drugs/drug_mefloquine/Mefloquine_Mim2026_reference.md) | — | general linear (no model) | 4 | Mim SR et al., Pharmacokinetic and pharmacodynamic mod…, Antimicrobial agents and ch… (2026) | [10.1128/aac.01717-25](https://doi.org/10.1128/aac.01717-25) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Saeheng_2023_reference](drugs/drug_mefloquine/Mefloquine_Saeheng2023_reference.md) | — | parent + metabolite (no model) | 6 | Saeheng T et al., Prediction of improved antimalarial che…, PloS one (2023) | [10.1371/journal.pone.0282099](https://doi.org/10.1371/journal.pone.0282099) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Simpson_1999_reference](drugs/drug_mefloquine/Mefloquine_Simpson1999_reference.md) | — | 1-compartment (no model) | 6 | Simpson JA et al., Population pharmacokinetics of mefloqui…, Clinical pharmacology and t… (1999) | [10.1016/S0009-9236(99)70010-X](https://doi.org/10.1016/S0009-9236(99)70010-X) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Hoshen_2001_parasite_numbers](drugs/drug_mefloquine/pd_Hoshen_2001_parasite_numbers.md) | parasite numbers ← mefloquine · inhibition effect | — | Hoshen MB et al., Pharmacokinetic-pharmacodynamic modelli…, Parasitology 123(Pt 4):337–… (2001) | [10.1017/s003118200100854x](https://doi.org/10.1017/s003118200100854x) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Kay_2013_f_C](drugs/drug_mefloquine/pd_Kay_2013_f_C.md) | parasite killing rate (parasite number decline) ← mefloquine · direct sigmoid Emax (Hill) effect | — | Kay K et al., Improving pharmacokinetic-pharmacodynam…, PLoS computational biology (2013) | [10.1371/journal.pcbi.1003151](https://doi.org/10.1371/journal.pcbi.1003151) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Sacramento_2022_virus_titer](drugs/drug_mefloquine/pd_Sacramento_2022_virus_titer.md) | SARS-CoV-2 replication (virus titers, PFU/mL) in Calu-3 cells ← mefloquine · direct sigmoid Emax (Hill) effect | — | Sacramento CQ et al., Unlike Chloroquine, Mefloquine Inhibits…, Viruses (2022) | [10.3390/v14020374](https://doi.org/10.3390/v14020374) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Sacramento_2022_virus_titer_2](drugs/drug_mefloquine/pd_Sacramento_2022_virus_titer_2.md) | SARS-CoV-2 replication (virus titers, PFU/mL) in Vero E6 cells ← mefloquine · direct sigmoid Emax (Hill) effect | — | Sacramento CQ et al., Unlike Chloroquine, Mefloquine Inhibits…, Viruses (2022) | [10.3390/v14020374](https://doi.org/10.3390/v14020374) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Svensson_2002_parasite_count_P_falciparum](drugs/drug_mefloquine/pd_Svensson_2002_parasite_count_P_falciparum.md) | parasite count (P. falciparum) ← mefloquine enantiomers · inhibition effect | — | Svensson US et al., Population pharmacokinetic and pharmaco…, European journal of clinica… (2002) | [10.1007/s00228-002-0485-y](https://doi.org/10.1007/s00228-002-0485-y) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Zaloumis_2012_PCT_proportion_cured](drugs/drug_mefloquine/pd_Zaloumis_2012_PCT_proportion_cured.md) | Parasite count (parasitaemia-time profile; proportion clinically cured and parasite clearance time derived from it) ← mefloquine · direct sigmoid Emax (Hill) effect | — | Zaloumis S et al., Assessing the utility of an anti-malari…, Malaria journal (2012) | [10.1186/1475-2875-11-303](https://doi.org/10.1186/1475-2875-11-303) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Mim_2026_parasitemia_parasite_count](drugs/drug_mefloquine/pd_Mim_2026_parasitemia_parasite_count.md) | parasitemia (parasite count) ← mefloquine (and artesunate) · indirect response — drug inhibits the production of parasitemia (parasite count) | model (no simulator) | Mim SR et al., Pharmacokinetic and pharmacodynamic mod…, Antimicrobial agents and ch… (2026) | [10.1128/aac.01717-25](https://doi.org/10.1128/aac.01717-25) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=mefloquine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor/substrate | DrugBank actor |
| metabolism | blood | `BCHE` inhibitor | DrugBank actor |
| metabolism | liver | `BCHE` inhibitor, `CYP3A4` inhibitor/substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| — | adipose tissue | `CYP19A1` inhibitor | DrugBank actor |
| — | blood | `ACHE` inhibitor | DrugBank actor |
| — | neuromuscular junction | `ACHE` inhibitor | DrugBank actor |
| — | ovary | `CYP19A1` inhibitor | DrugBank actor |
| — | testis | `CYP19A1` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: ADORA2A (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 89 matched, 20 returned
- **screened:** 8  ·  **relevant:** 8
- **records:** 7  ·  extracted 3  ·  needs_review 1  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ramharter_2019.pdf` | Ramharter M et al., Population Pharmacokinetics of Mefloqui…, Antimicrobial agents and ch… (2019) | popPK | 10 | [10.1128/AAC.01113-18](https://doi.org/10.1128/AAC.01113-18) | [30455233](https://pubmed.ncbi.nlm.nih.gov/30455233) | Population PK (NONMEM, two-compartment) of mefloquine enantiomers and CMQ in 264 pregnant women, but no numeric parameter values appear in the provided evidence (likely in tables/supplement not included). |
| `Simpson_1999.pdf` | Simpson JA et al., Population pharmacokinetics of mefloqui…, Clinical pharmacology and t… (1999) | popPK | 10 | [10.1016/S0009-9236(99)70010-X](https://doi.org/10.1016/S0009-9236(99)70010-X) | [10579474](https://pubmed.ncbi.nlm.nih.gov/10579474) | Population PK (NONMEM) of mefloquine in 257 malaria patients with numeric V/F values in the abstract, though full CL/ka parameter estimates may be in the paper body/tables not shown here. |
| `Svensson_2002.pdf` | Svensson US et al., Population pharmacokinetic and pharmaco…, European journal of clinica… (2002) | popPK | 10 | [10.1007/s00228-002-0485-y](https://doi.org/10.1007/s00228-002-0485-y) | [12185558](https://pubmed.ncbi.nlm.nih.gov/12185558) | Population PK (NONMEM) of mefloquine enantiomers in malaria patients with numeric oral clearance values reported in the abstract; other parameters may be in tables not shown. |
| `Hoshen_2001.pdf` | Hoshen MB et al., Pharmacokinetic-pharmacodynamic modelli…, Parasitology 123(Pt 4):337–… (2001) | popPK | 7 | [10.1017/s003118200100854x](https://doi.org/10.1017/s003118200100854x) | [11676365](https://pubmed.ncbi.nlm.nih.gov/11676365) | PK-PD modelling of mefloquine disposition is the subject, but the numeric PK parameter values are not shown in the evidence (likely in tables/figures not provided). |

<sub>queue written 2026-10-07T07:25:05.905512+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Cherkaoui-Rbati_2023 | irrelevant | 0 | 0 | This is a PKPD model of DSM265, not mefloquine; mefloquine is only mentioned as a comparator prophylactic with no PK parameters for it. |
| popPK | Hoshen_2001 | relevant | 7 | 2 | PK-PD modelling of mefloquine disposition is the subject, but the numeric PK parameter values are not shown in the evidence (likely in tables/figures not provided). |
| popPK | Kay_2013 | irrelevant | 3 | 2 | PK/PD methodology paper on artemisinin combination therapies; mefloquine only mentioned as a combination partner, no numeric mefloquine PK parameters present (values appear in supplementary Text S1/figures not provided). |
| popPK | Lohy_2017 | irrelevant | 1 | 1 | This is a population PK/PD study of artesunate and dihydroartemisinin; mefloquine is only a co-administered partner drug with no mefloquine PK parameters modeled or reported. |
| popPK | Persoons_2021 | irrelevant | 0 | 0 | In-vitro antiviral study of quinoline analogues including mefloquine; no PK disposition parameters reported, only EC50/CC50 values in figures. |
| popPK | Ramharter_2019 | relevant | 10 | 3 | Population PK (NONMEM, two-compartment) of mefloquine enantiomers and CMQ in 264 pregnant women, but no numeric parameter values appear in the provided evidence (likely in tables/supplement not included). |
| popPK | Sacramento_2022 | relevant | 8 | 2 | A whole-body PBPK model of mefloquine is developed and validated against clinical data, but the drug-specific parameter values are in supplementary Table S1, not provided in the evidence. |
| popPK | Simpson_2000 | irrelevant | 3 | 1 | A modeling/review paper on resistance with no numeric PK parameter values (CL, V, half-life) present in the evidence. |
| popPK | Staehli_2013 | relevant | 9 | 4 | Population PK (NONMEM) of mefloquine in malaria patients is a core part of the study, but the numeric MQ parameter estimates (CL/F, V/F, ka) appear to be in Tables 4/5 whose values are not fully included in the evidence; only a Q value (122 L/h) and IIV (~40%/12%) are visible. |
| popPK | Zaloumis_2012 | relevant | 6 | 4 | Simulation PK-PD study using literature mefloquine PK parameters (CL/F, V/F, Q/F values appear in a table) but not an original population-PK study of mefloquine; some values may be in Additional file 2. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 07:25 UTC</sub>
