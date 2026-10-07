<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D11A&quot;,&quot;href&quot;:&quot;atc/D11A.md&quot;},{&quot;label&quot;:&quot;ivermectin&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ivermectin_Alshehri2023_reference&quot;,&quot;label&quot;:&quot;Alshehri_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ivermectin/Ivermectin_Alshehri2023_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ivermectin_Duthaler2019_reference&quot;,&quot;label&quot;:&quot;Duthaler_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ivermectin/Ivermectin_Duthaler2019_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ivermectin_Kobylinski2017_reference&quot;,&quot;label&quot;:&quot;Kobylinski_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ivermectin/Ivermectin_Kobylinski2017_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# ivermectin

- **generic name:** ivermectin
- **ATC codes:** `D11AX22`, `P02CF01`
- **DrugBank:** [DB00602](https://go.drugbank.com/drugs/DB00602) · **PubChem:** [CID 46936176](https://pubchem.ncbi.nlm.nih.gov/compound/46936176)
- **molar mass:** 1736.185 g/mol (C95H146O28) — DrugBank
- **groups:** approved, investigational, vet_approved

## About

Ivermectin is an antiparasitic medicine used against infections such as scabies, lice infestation, onchocerciasis, strongyloidiasis, ascariasis, filariasis and rosacea. It is widely used in humans and also approved for veterinary use, and is included on the WHO list of essential medicines.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q415178](https://www.wikidata.org/wiki/Q415178) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| ivermectin | parent | 1736.18 | C95H146O28 | DrugBank | [46936176](https://pubchem.ncbi.nlm.nih.gov/compound/46936176) | Alshehri_2023, Duthaler_2019, Gwee_2020, Kobylinski_2017 |
| fenbendazole | metabolite | — (mass units only) | — | — | — | — |
| oxfendazole | metabolite | — (mass units only) | — | — | — | — |
| sulphone | metabolite | — (mass units only) | — | — | — | — |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 08:33 | 3:24 | 3/2/1 | 1/0/1 | 0/0/0 | 258,952/14,976 | einfracz / qwen3.8-27b | 10 | 0/10 | 10/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Alshehri_2023_reference](drugs/drug_ivermectin/Ivermectin_Alshehri2023_reference.md) | ▶ model + simulator | 2-compartment, oral | 6 (+1 cov.) | Alshehri A et al., Population pharmacokinetic model of ive…, PLoS neglected tropical dis… (2023) | [10.1371/journal.pntd.0011319](https://doi.org/10.1371/journal.pntd.0011319) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Duthaler_2019_reference](drugs/drug_ivermectin/Ivermectin_Duthaler2019_reference.md) | ▶ model + simulator | 1-compartment, oral | 2 | Duthaler U et al., Population pharmacokinetics of oral ive…, British journal of clinical… (2019) | [10.1111/bcp.13840](https://doi.org/10.1111/bcp.13840) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Kobylinski_2017_reference](drugs/drug_ivermectin/Ivermectin_Kobylinski2017_reference.md) | ▶ model + simulator | 2-compartment, oral | 7 | Kobylinski KC et al., Ivermectin susceptibility and sporontoc…, Malaria journal (2017) | [10.1186/s12936-017-1923-8](https://doi.org/10.1186/s12936-017-1923-8) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Gwee_2020_reference](drugs/drug_ivermectin/Ivermectin_Gwee2020_reference.md) | — | 1-compartment (no model) | 1 | Gwee A et al., Population pharmacokinetics of ivermect…, PLoS neglected tropical dis… (2020) | [10.1371/journal.pntd.0008886](https://doi.org/10.1371/journal.pntd.0008886) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Fimbo_2023_reference](drugs/drug_ivermectin/Ivermectin_Fimbo2023_reference.md) | — | 1-compartment (no model) | 0 | Fimbo AM et al., Population pharmacokinetics of ivermect…, CPT: pharmacometrics & syst… (2023) | [10.1002/psp4.13038](https://doi.org/10.1002/psp4.13038) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">other animal</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Mackintosh_1985_reference](drugs/drug_ivermectin/Ivermectin_Mackintosh1985_reference.md) | — | general linear (no model) | 0 | Mackintosh CG et al., Efficacy and pharmacokinetics of febant…, New Zealand veterinary jour… (1985) | [10.1080/00480169.1985.35194](https://doi.org/10.1080/00480169.1985.35194) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Lacher_2015_inhibition_of_P_gp_transport_of_rhodamine_123](drugs/drug_ivermectin/pd_Lacher_2015_inhibition_of_P_gp_transport_of_rhodamine_123.md) | inhibition of P-gp transport of rhodamine-123 ← ivermectin · inhibition effect | — | Lacher SE et al., P-Glycoprotein Transport of Neurotoxic…, The Journal of pharmacology… (2015) | [10.1124/jpet.115.226373](https://doi.org/10.1124/jpet.115.226373) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Ding_2024_NS1](drugs/drug_ivermectin/pd_Ding_2024_NS1.md) | dengue non-structural protein 1 ← ivermectin · indirect response — drug inhibits the production of dengue non-structural protein 1 | model (no simulator) | Ding J et al., In-host modeling of dengue virus and no…, CPT: pharmacometrics & syst… (2024) | [10.1002/psp4.13233](https://doi.org/10.1002/psp4.13233) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=ivermectin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inducer/inhibitor/substrate, `ABCG2` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` inducer/inhibitor/substrate | DrugBank actor |
| absorption | liver | `ABCB1` inducer/inhibitor/substrate, `ABCG2` substrate | DrugBank actor |
| absorption | mammary gland | `ABCG2` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` inducer/inhibitor/substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` inducer/inhibitor/substrate, `ABCG2` substrate | DrugBank actor |
| absorption | testis | `ABCB1` inducer/inhibitor/substrate, `ABCG2` substrate | DrugBank actor |
| distribution | blood-brain barrier | `ABCC1` inhibitor | DrugBank actor |
| distribution | lung | `ABCC1` inhibitor | DrugBank actor |
| metabolism | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | liver | `CYP2D6` substrate, `CYP2E1` substrate, `CYP3A4` substrate, `SLCO1B1` inhibitor, `SLCO1B3` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | `ABCC2` inhibitor | DrugBank actor |
| excretion | liver | `ABCC2` inhibitor | DrugBank actor |
| excretion | small intestine | `ABCC2` inhibitor | DrugBank actor |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 153 matched, 20 returned
- **screened:** 8  ·  **relevant:** 8
- **records:** 6  ·  extracted 3  ·  needs_review 1  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Akyol_2024.pdf` | Akyol BA et al., The effect of intravenous lipid emulsio…, Naunyn-Schmiedeberg's archi… (2024) | popPK | 10 | [10.1007/s00210-023-02738-5](https://doi.org/10.1007/s00210-023-02738-5) | [37768375](https://pubmed.ncbi.nlm.nih.gov/37768375) | The study reports non-compartmental PK parameters (Vdss, Cl, AUC, C0) for ivermectin in rabbits, with specific numeric values provided for C0 and AUC, while Vdss and Cl changes are described by percentage reduction rather than absolute values. |
| `Duthaler_2019.pdf` | Duthaler U et al., Population pharmacokinetics of oral ive…, British journal of clinical… (2019) | popPK | 10 | [10.1111/bcp.13840](https://doi.org/10.1111/bcp.13840) | [30566757](https://pubmed.ncbi.nlm.nih.gov/30566757) | The abstract provides explicit numeric values for population clearance, central and peripheral volumes of distribution, and inter-individual variability for ivermectin. |
| `Yang_2025.pdf` | Yang W et al., Ivermectin dosing for children under 2…, The Journal of antimicrobia… (2025) | popPK | 9 | [10.1093/jac/dkaf344](https://doi.org/10.1093/jac/dkaf344) | [40985148](https://pubmed.ncbi.nlm.nih.gov/40985148) | The paper describes a population PK model for ivermectin in children and reports simulated AUC values, but specific individual pharmacokinetic parameter estimates (e.g., CL, V, ka) are not provided in the text. |
| `Mackintosh_1985.pdf` | Mackintosh CG et al., Efficacy and pharmacokinetics of febant…, New Zealand veterinary jour… (1985) | popPK | 8 | [10.1080/00480169.1985.35194](https://doi.org/10.1080/00480169.1985.35194) | [16031188](https://pubmed.ncbi.nlm.nih.gov/16031188) | Reports compartmental model parameters (peak concentration, time to peak) for ivermectin in red deer, but lacks explicit clearance or volume values. |
| `Muchiut_2025.pdf` | Muchiut S et al., Failure of doramectin and ivermectin in…, Veterinary parasitology (2025) | popPK | 6 | [10.1016/j.vetpar.2024.110384](https://doi.org/10.1016/j.vetpar.2024.110384) | [39733599](https://pubmed.ncbi.nlm.nih.gov/39733599) | The study is a PK-PD investigation of ivermectin in cattle, but the extracted evidence contains no quantitative PK parameter values (CL, V, t1/2, etc.), only qualitative concentration comparisons. |

<sub>queue written 2026-10-07T08:31:52.425858+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ballent_2020 | irrelevant | 4 | 1 | The study involves ivermectin co-administration with abamectin in cattle, but no quantitative PK parameter values (e.g., CL, V, t1/2) are present in the evidence. |
| popPK | Borges_2020 | irrelevant | 0 | 0 | The study focuses on the in vitro and in vivo anthelmintic efficacy and resistance reversal of ivermectin combined with quercetin, not on the pharmacokinetic disposition parameters (CL, V, t1/2) of ivermectin itself. |
| popPK | Chhonker_2023 | relevant | 3 | 3 | ivermectin is a co-administered comparator in this study focused on moxidectin, with only limited summary NCA parameters reported for IVM. |
| popPK | Ding_2024 | relevant | 10 | 4 | The study reports a population PK model for ivermectin with specific numeric values for terminal half-life (94 h) and qualitative references to CL/F, but detailed parameter estimates are deferred to Supplementary Material. |
| popPK | Lacher_2015 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of P-glycoprotein transport using pesticides, including ivermectin as a probe/inhibitor, and does not report quantitative population-pharmacokinetic parameters for ivermectin. |
| popPK | Lamassiaude_2021 | irrelevant | 0 | 0 | The study focuses on the molecular targets and electrophysiological mechanisms of ivermectin in human lice (in vivo bioassays and in vitro oocyte expression), not on population pharmacokinetics or quantitative disposition parameters. |
| popPK | Muchiut_2025 | relevant | 6 | 0 | The study is a PK-PD investigation of ivermectin in cattle, but the extracted evidence contains no quantitative PK parameter values (CL, V, t1/2, etc.), only qualitative concentration comparisons. |
| popPK | Schärer_2023 | irrelevant | 0 | 0 | This is an in-vitro study on Trichuris muris egg hatching that uses ivermectin only as a test compound for ovicidal activity, reporting no pharmacokinetic parameters. |
| popPK | Sereno-Bruno_2024 | irrelevant | 0 | 0 | The study reports in vitro efficacy (EC50) of ivermectin against a protozoan, containing no pharmacokinetic parameters (CL, V, ka, etc.) for the drug's disposition. |
| popPK | Varghese_2016 | irrelevant | 0 | 0 | The study is an in-vitro antiviral screen reporting EC50 values, not a pharmacokinetic study reporting disposition parameters (CL, V, etc.). |
| popPK | Yang_2025 | relevant | 9 | 3 | The paper describes a population PK model for ivermectin in children and reports simulated AUC values, but specific individual pharmacokinetic parameter estimates (e.g., CL, V, ka) are not provided in the text. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 08:32 UTC</sub>
