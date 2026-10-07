<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;zidovudine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Zidovudine_Fauchet2013_reference&quot;,&quot;label&quot;:&quot;Fauchet_2013_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_zidovudine/Zidovudine_Fauchet2013_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# zidovudine

- **generic name:** zidovudine
- **ATC codes:** `J05AF01`, `J05AR01`
- **DrugBank:** [DB00495](https://go.drugbank.com/drugs/DB00495) · **PubChem:** [CID 35370](https://pubchem.ncbi.nlm.nih.gov/compound/35370)
- **molar mass:** 267.2413 g/mol (C10H13N5O4) — DrugBank
- **groups:** approved, investigational

## About

Zidovudine (AZT) is an antiviral nucleoside analogue used to treat HIV infection and AIDS. It remains an approved medicine, is included on the WHO essential medicines list, and is used worldwide, often in combination with other HIV drugs.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q198504](https://www.wikidata.org/wiki/Q198504) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| zidovudine (zidovudine (AZT)) | parent | 267.241 | C10H13N5O4 | DrugBank | [35370](https://pubchem.ncbi.nlm.nih.gov/compound/35370) | Fauchet_2013, Tang_2026, von_2009 |
| G-ZDV (3′-azido-3′-deoxy-5′-glucuronylthymidine) | metabolite | — (mass units only) | — | — | — | — |
| zidovudine diphosphate (AZT-DP) | metabolite | 427.203 | C10H15N5O10P2 | PubChem | [455742](https://pubchem.ncbi.nlm.nih.gov/compound/455742) | Tang_2026, von_2009 |
| zidovudine monophosphate (AZT-MP) | metabolite | 347.224 | C10H14N5O7P | PubChem | [65374](https://pubchem.ncbi.nlm.nih.gov/compound/65374) | Tang_2026, von_2009 |
| zidovudine triphosphate (AZT-TP) | metabolite | 507.182 | C10H16N5O13P3 | PubChem | [72187](https://pubchem.ncbi.nlm.nih.gov/compound/72187) | Tang_2026, von_2009 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 16:39 | 12:37 | 1/2/0 | 2/1/0 | 0/0/0 | 317,264/61,721 | openai / gpt-6-luna | 6 | 1/5 | 6/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Fauchet_2013_reference](drugs/drug_zidovudine/Zidovudine_Fauchet2013_reference.md) | ▶ model + simulator | 1-compartment, oral | 5 | Fauchet F et al., Population pharmacokinetics study of re…, Antimicrobial agents and ch… (2013) | [10.1128/AAC.00911-13](https://doi.org/10.1128/AAC.00911-13) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Tang_2026_reference](drugs/drug_zidovudine/Zidovudine_Tang2026_reference.md) | — | general linear (no model) | 7 | Tang F et al., The study on the transport and phosphor…, Scientific reports (2026) | [10.1038/s41598-026-49905-1](https://doi.org/10.1038/s41598-026-49905-1) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.10).">human + animal</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [von_2009_reference](drugs/drug_zidovudine/Zidovudine_von2009_reference.md) | — | general linear (no model) | 6 (+3 cov.) | von Kleist M et al., Pharmacokinetic-pharmacodynamic relatio…, European journal of pharmac… (2009) | [10.1016/j.ejps.2008.12.010](https://doi.org/10.1016/j.ejps.2008.12.010) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Legrand_2003_antiviral_effect](drugs/drug_zidovudine/pd_Legrand_2003_antiviral_effect.md) | antiviral effect ← zidovudine · direct Emax (saturable) effect | — | Legrand M et al., An in vivo pharmacokinetic/pharmacodyna…, HIV clinical trials (2003) | [10.1310/77yn-gdmu-95w3-rwt7](https://doi.org/10.1310/77yn-gdmu-95w3-rwt7) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Wang_2022_2019_nCoV_infection_of_ACE2_HEK293T_cells](drugs/drug_zidovudine/pd_Wang_2022_2019_nCoV_infection_of_ACE2_HEK293T_cells.md) | 2019-nCoV infection of ACE2-HEK293T cells ← ZDV · inhibition effect | — | Wang J et al., Antiviral drugs suppress infection of 2…, Journal of biochemical and… (2022) | [10.1002/jbt.22948](https://doi.org/10.1002/jbt.22948) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Legrand_2003_infected_cells](drugs/drug_zidovudine/pd_Legrand_2003_infected_cells.md) | infected cells ← zidovudine, lamivudine, and indinavir · model not identified | — | Legrand M et al., An in vivo pharmacokinetic/pharmacodyna…, HIV clinical trials (2003) | [10.1310/77yn-gdmu-95w3-rwt7](https://doi.org/10.1310/77yn-gdmu-95w3-rwt7) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Legrand_2003_viral_load](drugs/drug_zidovudine/pd_Legrand_2003_viral_load.md) | viral load ← zidovudine, lamivudine, and indinavir · model not identified | — | Legrand M et al., An in vivo pharmacokinetic/pharmacodyna…, HIV clinical trials (2003) | [10.1310/77yn-gdmu-95w3-rwt7](https://doi.org/10.1310/77yn-gdmu-95w3-rwt7) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.10).">human + animal</span> | [von_2009_RT_activity](drugs/drug_zidovudine/pd_von_2009_RT_activity.md) | % residual RT activity ← AZT-TP · inhibition effect | — | von Kleist M et al., Pharmacokinetic-pharmacodynamic relatio…, European journal of pharmac… (2009) | [10.1016/j.ejps.2008.12.010](https://doi.org/10.1016/j.ejps.2008.12.010) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=zidovudine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| absorption | mammary gland | `ABCG2` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| absorption | testis | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| distribution | blood | `ALB` unknown | DrugBank actor |
| metabolism | kidney | `SLC22A7` unknown, `UGT2B7` substrate | DrugBank actor |
| metabolism | liver | `CYP2A6` substrate, `CYP2C9` substrate, `CYP3A4` substrate, `SLC22A7` unknown, `UGT1A1` inducer/substrate, `UGT2B7` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate, `UGT1A1` inducer/substrate, `UGT2B7` substrate | DrugBank actor |
| excretion | kidney | `ABCC4` substrate, `SLC22A2` unknown, `SLC22A6` substrate, `SLC22A8` inhibitor/substrate | DrugBank actor |
| excretion | liver | `ABCC4` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: ABCC5 (substrate), FLT3 (binder), SLC22A11 (unknown), SLC28A1 (unknown), SLC29A2 (unknown), TERT (inhibitor), TK1 (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 224 matched, 20 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 3  ·  extracted 1  ·  needs_review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_7 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Blum_1988.pdf` | Blum MR et al., Pharmacokinetics and bioavailability of…, The American journal of med… (1988) | popPK | 10 | not captured | [3165603](https://pubmed.ncbi.nlm.nih.gov/3165603) | Human zidovudine disposition values are reported, including clearance and half-life. |
| `Capparelli_2003_2.pdf` | Capparelli EV et al., Population pharmacokinetics and pharmac…, Journal of clinical pharmac… (2003) | popPK | 10 | [10.1177/0091270002239821](https://doi.org/10.1177/0091270002239821) | [12616665](https://pubmed.ncbi.nlm.nih.gov/12616665) | This is a population-PK study of zidovudine in children, but no numeric disposition parameter values are provided. |
| `Fauchet_2013.pdf` | Fauchet F et al., Population pharmacokinetics study of re…, Antimicrobial agents and ch… (2013) | popPK | 10 | [10.1128/AAC.00911-13](https://doi.org/10.1128/AAC.00911-13) | [23877688](https://pubmed.ncbi.nlm.nih.gov/23877688) | The human pediatric population-PK model reports numeric zidovudine and metabolite parameters in the evidence. |
| `Mirochnick_1999.pdf` | Mirochnick M et al., Pharmacokinetics of zidovudine in infan…, Clinical pharmacology and t… (1999) | popPK | 10 | [10.1016/S0009-9236(99)70049-4](https://doi.org/10.1016/S0009-9236(99)70049-4) | [10430105](https://pubmed.ncbi.nlm.nih.gov/10430105) | Human-infant population PK model, but numeric zidovudine parameter estimates are not present in the provided evidence. |
| `Capparelli_2003.pdf` | Capparelli EV et al., Pharmacokinetics and tolerance of zidov…, The Journal of pediatrics (2003) | popPK | 9 | [10.1067/mpd.2003.mpd0335](https://doi.org/10.1067/mpd.2003.mpd0335) | [12520254](https://pubmed.ncbi.nlm.nih.gov/12520254) | This is a zidovudine population-PK study, but no numeric parameter values are present in the evidence. |
| `Bouazza_2015.pdf` | Bouazza N et al., Lopinavir/ritonavir plus lamivudine and…, Antiviral therapy (2015) | popPK | 8 | [10.3851/IMP2876](https://doi.org/10.3851/IMP2876) | [25279808](https://pubmed.ncbi.nlm.nih.gov/25279808) | Pediatric population-PK analyses include zidovudine, but no numeric zidovudine disposition parameters are provided. |
| `Legrand_2003.pdf` | Legrand M et al., An in vivo pharmacokinetic/pharmacodyna…, HIV clinical trials (2003) | popPK | 8 | [10.1310/77yn-gdmu-95w3-rwt7](https://doi.org/10.1310/77yn-gdmu-95w3-rwt7) | [12815557](https://pubmed.ncbi.nlm.nih.gov/12815557) | Zidovudine PK was modeled in patients, but no numeric disposition parameter values appear in the provided evidence. |

<sub>queue written 2026-10-07T16:28:12.518263+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bouazza_2015 | relevant | 8 | 1 | Pediatric population-PK analyses include zidovudine, but no numeric zidovudine disposition parameters are provided. |
| popPK | Capparelli_2003 | relevant | 9 | 1 | This is a zidovudine population-PK study, but no numeric parameter values are present in the evidence. |
| popPK | Capparelli_2003_2 | relevant | 10 | 1 | This is a population-PK study of zidovudine in children, but no numeric disposition parameter values are provided. |
| popPK | Cressey_2017 | irrelevant | 0 | 0 | Zidovudine was co-administered, but the reported population-PK model and values are for nevirapine. |
| popPK | Hoetelmans_1996 | irrelevant | 1 | 0 | This is a review and provides no quantitative zidovudine disposition parameter values. |
| popPK | Legrand_2003 | relevant | 8 | 0 | Zidovudine PK was modeled in patients, but no numeric disposition parameter values appear in the provided evidence. |
| popPK | Li_2022 | irrelevant | 1 | 0 | This review mentions zidovudine only as an approved drug and provides no quantitative zidovudine disposition parameters. |
| popPK | Mirochnick_1999 | relevant | 10 | 0 | Human-infant population PK model, but numeric zidovudine parameter estimates are not present in the provided evidence. |
| popPK | Mishra_2024 | irrelevant | 0 | 0 | AZT is azithromycin here, not zidovudine, and no zidovudine PK parameter values are reported. |
| popPK | Ohrui_2001 | irrelevant | 0 | 0 | This is a review of other antiretroviral agents and reports no quantitative zidovudine disposition parameters. |
| popPK | Schinazi_1990 | irrelevant | 0 | 0 | The pharmacokinetic values are for CS-92, not zidovudine; no zidovudine parameter values are reported. |
| popPK | Tsirizani_2024 | irrelevant | 1 | 0 | The PK model and numeric parameters are for darunavir, while zidovudine is only a co-administered backbone drug. |
| popPK | Tucci_2023 | irrelevant | 0 | 0 | This in-vitro antiviral study reports activity of zidovudine derivatives, not zidovudine disposition parameters. |
| popPK | Vanhove_1997 | irrelevant | 2 | 0 | Zidovudine was co-administered, but no quantitative zidovudine disposition parameters are reported. |
| popPK | Waalewijn_2024 | irrelevant | 0 | 0 | Zidovudine is only a coadministered backbone drug; no zidovudine PK parameters are reported. |
| popPK | Wang_2022 | irrelevant | 0 | 0 | The study reports in-vitro binding and antiviral activity, not zidovudine disposition parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 16:28 UTC</sub>
