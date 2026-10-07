<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01B&quot;,&quot;href&quot;:&quot;atc/P01B.md&quot;},{&quot;label&quot;:&quot;primaquine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Primaquine_Chairat2018_reference&quot;,&quot;label&quot;:&quot;Chairat_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_primaquine/Primaquine_Chairat2018_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Primaquine_Sridharan2019_reference&quot;,&quot;label&quot;:&quot;Sridharan_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_primaquine/Primaquine_Sridharan2019_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# primaquine

- **generic name:** primaquine
- **ATC codes:** `P01BA03`
- **DrugBank:** [DB01087](https://go.drugbank.com/drugs/DB01087) · **PubChem:** [CID 4908](https://pubchem.ncbi.nlm.nih.gov/compound/4908)
- **molar mass:** 259.3467 g/mol (C15H21N3O) — DrugBank
- **groups:** approved, investigational

## About

Primaquine is an antimalarial drug used to treat malaria, including Plasmodium vivax and Plasmodium falciparum infections, and for malaria prophylaxis. It is an approved medicine and appears on the WHO list of essential medicines, so it remains in use worldwide.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q419834](https://www.wikidata.org/wiki/Q419834) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| primaquine | parent | 259.347 | C15H21N3O | DrugBank | [4908](https://pubchem.ncbi.nlm.nih.gov/compound/4908) | Chairat_2018, Chotsiri_2024_2, Lee_2021, Sridharan_2019, Wattanakul_2024_2 |
| carboxyprimaquine (carboxy-primaquine) | metabolite | 274.32 | C15H18N2O3 | PubChem | [127542](https://pubchem.ncbi.nlm.nih.gov/compound/127542) | Chairat_2018, Chotsiri_2024_2, Lee_2021, Wattanakul_2024_2 |
| primaquine carbamoyl-glucuronide | metabolite | — (mass units only) | — | — | — | — |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 07:59 | 12:27 | 2/3/0 | 1/0/0 | 0/0/0 | 458,054/44,881 | ollama / glm-5.3-flash | 30 | 1/14 | 14/1 | 1 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Chairat_2018_reference](drugs/drug_primaquine/Primaquine_Chairat2018_reference.md) | ▶ model + simulator | parent 1-cmt + liver + 1 metabolite (1-cmt) | 10 | Chairat K et al., Enantiospecific pharmacokinetics and dr…, The Journal of antimicrobia… (2018) | [10.1093/jac/dky297](https://doi.org/10.1093/jac/dky297) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Sridharan_2019_reference](drugs/drug_primaquine/Primaquine_Sridharan2019_reference.md) | ▶ model + simulator | 1-compartment, oral | 4 | Sridharan K et al., Population pharmacokinetics of primaqui…, Indian journal of pharmacol… (2019) | [10.4103/ijp.IJP_230_16](https://doi.org/10.4103/ijp.IJP_230_16) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Chotsiri_2024_2_reference](drugs/drug_primaquine/Primaquine_Chotsiri2024v2_reference.md) | — | 2-compartment (no model) | 4 | Chotsiri P et al., Population pharmacokinetics of primaqui…, Malaria journal (2024) | [10.1186/s12936-024-04979-y](https://doi.org/10.1186/s12936-024-04979-y) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Lee_2021_reference](drugs/drug_primaquine/Primaquine_Lee2021_reference.md) | — | parent + metabolite (no model) | 0 | Lee WY et al., Population Pharmacokinetics of Primaqui…, Pharmaceutics (2021) | [10.3390/pharmaceutics13050652](https://doi.org/10.3390/pharmaceutics13050652) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Wattanakul_2024_2_reference](drugs/drug_primaquine/Primaquine_Wattanakul2024v2_reference.md) | — | parent + metabolite (no model) | 0 | Wattanakul T et al., Population pharmacokinetic modelling of…, Nature communications (2024) | [10.1038/s41467-024-47908-y](https://doi.org/10.1038/s41467-024-47908-y) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Chotivanich_2006_percent_inhibition_of_oocyst_development_transmission_blocking_activity](drugs/drug_primaquine/pd_Chotivanich_2006_percent_inhibition_of_oocyst_development_tr.md) | percent inhibition of oocyst development (transmission-blocking activity) ← primaquine · direct Emax (saturable) effect | — | Chotivanich K et al., Transmission-blocking activities of qui…, Antimicrobial agents and ch… (2006) | [10.1128/AAC.01472-05](https://doi.org/10.1128/AAC.01472-05) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=primaquine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor | DrugBank actor |
| metabolism | liver | `CYP1A2` inducer/substrate, `CYP2D6` inhibitor, `CYP3A4` inhibitor/substrate | DrugBank actor |
| metabolism | lung | `CYP1A1` inducer, `CYP1B1` inducer | DrugBank actor |
| metabolism | skin | `CYP1B1` inducer | DrugBank actor |
| metabolism | small intestine | `CYP1A1` inducer, `CYP3A4` inhibitor/substrate | DrugBank actor |

<sub>Actors without a tissue in the table: KRT7 (other/unknown), NQO2 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 33 matched, 20 returned
- **screened:** 6  ·  **relevant:** 6
- **records:** 5  ·  extracted 2  ·  needs_review 0  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Araujo-Lima_2023 | irrelevant | 0 | 0 | Primaquine is only a structural moiety in synthetic hybrids; PK is in silico ADME prediction of the hybrids, with no quantitative disposition parameters for primaquine itself. |
| popPK | Bolchoz_2001 | irrelevant | 1 | 1 | In-vitro/mechanistic metabolism and toxicity study of a primaquine metabolite with no PK disposition parameters reported. |
| popPK | Boonyasuppayakorn_2014 | irrelevant | 0 | 0 | This is an in-vitro antiviral study of amodiaquine against dengue; primaquine is only a screened comparator with no PK parameters. |
| popPK | Brueckner_1991 | irrelevant | 0 | 0 | The drug studied is WR 238605, a primaquine analogue, not primaquine itself; numeric PK parameters are for the analogue in dogs. |
| popPK | Capela_2018 | irrelevant | 0 | 0 | Medicinal chemistry study of hybrid compounds; primaquine only as comparator, no PK parameters. |
| popPK | Chotivanich_2006 | irrelevant | 0 | 0 | In vitro gametocytocidal EC50/EC90 study, not a PK study; no disposition parameters (CL, V, half-life) for primaquine are reported. |
| popPK | Chotsiri_2017 | irrelevant | 2 | 1 | Primaquine is only a co-administered probe/placebo arm; the population-PK parameters (CL/F, V, ka, t1/2) reported are for DHA and piperaquine, with no quantitative primaquine PK model values. |
| popPK | Commons_2019 | irrelevant | 0 | 0 | This is a haematological (haemoglobin response) IPD meta-analysis of vivax malaria; primaquine is a co-intervention, with no PK parameters (CL, V, ka, half-life, or population-PK model) reported anywhere in the evidence. |
| popPK | Daher_2019_2 | irrelevant | 2 | 1 | PK parameters (AUC, half-life) are for chloroquine/mefloquine/lumefantrine; primaquine PK was not modelled and no numeric primaquine parameters are present. |
| popPK | Marino_1994 | irrelevant | 0 | 0 | The drug studied is WR242511, a different 8-aminoquinoline; primaquine is only mentioned as background, and no numeric PK parameters for primaquine appear. |
| popPK | Nyamwihura_2021 | irrelevant | 0 | 0 | This is a medicinal chemistry/synthesis paper on nopol-based quinoline antimalarials with in vitro EC50 data; primaquine is only mentioned as a comparator and no PK parameters are reported. |
| popPK | Persoons_2021 | irrelevant | 0 | 0 | In-vitro antiviral study of quinoline analogues including primaquine; no PK disposition parameters reported, only EC50/CC50 values. |
| popPK | Rajić_2018 | irrelevant | 0 | 0 | This is a synthetic chemistry/antimicrobial activity paper on primaquine derivatives; no PK parameters for primaquine are reported. |
| popPK | Watson_2017 | irrelevant | 2 | 1 | This is a model of primaquine-induced haemolysis (RBC dynamics), not a PK model of primaquine disposition; the only PK value is a half-life (~5 hr) mentioned in passing with no CL/V or population-PK parameters, and no numeric PK table is present. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 07:50 UTC</sub>
