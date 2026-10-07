<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01M&quot;,&quot;href&quot;:&quot;atc/J01M.md&quot;},{&quot;label&quot;:&quot;norfloxacin&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Norfloxacin_Martnez2017_reference&quot;,&quot;label&quot;:&quot;Mart\u00ednez_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_norfloxacin/Norfloxacin_Martnez2017_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# norfloxacin

- **generic name:** norfloxacin
- **ATC codes:** `J01MA06`, `J01RA13`, `J01RA14`, `S01AE02`
- **DrugBank:** [DB01059](https://go.drugbank.com/drugs/DB01059) · **PubChem:** [CID 4539](https://pubchem.ncbi.nlm.nih.gov/compound/4539)
- **molar mass:** 319.3308 g/mol (C16H18FN3O3) — DrugBank
- **groups:** approved, investigational

## About

Norfloxacin is a fluoroquinolone antibiotic used to treat bacterial infections, including urinary tract infections, gonorrhea, prostatitis, and eye infections such as conjunctivitis. It is an approved medicine, available as an oral antibacterial and also as an ophthalmic preparation, though it is not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q417897](https://www.wikidata.org/wiki/Q417897) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| norfloxacin | parent | 319.331 | C16H18FN3O3 | DrugBank | [4539](https://pubchem.ncbi.nlm.nih.gov/compound/4539) | Anadón_1995, Xu_2015 |
| norfloxacin nicotinate | metabolite | 442.447 | C22H23FN4O5 | PubChem | [83908](https://pubchem.ncbi.nlm.nih.gov/compound/83908) | Xu_2015 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 11:37 | 6:48 | 1/2/2 | 7/0/0 | 0/0/0 | 354,958/23,201 | einfracz / qwen3.8-27b | 26 | 7/5 | 12/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (bird), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">bird</span> | [Martínez_2017_reference](drugs/drug_norfloxacin/Norfloxacin_Martnez2017_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Martínez MA et al., Oral Bioavailability and Plasma Disposi…, Frontiers in veterinary sci… (2017) | [10.3389/fvets.2017.00077](https://doi.org/10.3389/fvets.2017.00077) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (pig), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">pig</span><br><sub>blocking: disposition incomplete — no disposition parameter from this paper; review-gap-f…</sub><br><sub>route_to: `human_review`</sub> | [Anadón_1995_reference](drugs/drug_norfloxacin/Norfloxacin_Anadn1995_reference.md) | — | 1-compartment (no model) | 6 | Anadón A et al., Pharmacokinetics and tissue residues of…, Journal of veterinary pharm… (1995) | [10.1111/j.1365-2885.1995.tb00582.x](https://doi.org/10.1111/j.1365-2885.1995.tb00582.x) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (fish), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">fish</span><br><sub>blocking: disposition incomplete — no disposition parameter from this paper; review-gap-f…</sub><br><sub>route_to: `human_review`</sub> | [Xu_2015_reference](drugs/drug_norfloxacin/Norfloxacin_Xu2015_reference.md) | — | 1-compartment (no model) | 7 | Xu N et al., Comparative pharmacokinetics of norflox…, Journal of veterinary pharm… (2015) | [10.1111/jvp.12193](https://doi.org/10.1111/jvp.12193) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rabbit</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Pavithra_2009_reference](drugs/drug_norfloxacin/Norfloxacin_Pavithra2009_reference.md) | — | 1-compartment (no model) | 0 | Pavithra BH et al., Modification of pharmacokinetics of nor…, Journal of veterinary scien… (2009) | [10.4142/jvs.2009.10.4.293](https://doi.org/10.4142/jvs.2009.10.4.293) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (sheep), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">sheep</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Soback_1994_reference](drugs/drug_norfloxacin/Norfloxacin_Soback1994_reference.md) | — | 1-compartment (no model) | 0 | Soback S et al., Effect of lactation on single-dose phar…, Antimicrobial agents and ch… (1994) | [10.1128/AAC.38.10.2336](https://doi.org/10.1128/AAC.38.10.2336) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 0.00).">in vitro</span> | [Beberok_2015_mushroom_tyrosinase_activity](drugs/drug_norfloxacin/pd_Beberok_2015_mushroom_tyrosinase_activity.md) | mushroom tyrosinase activity ← norfloxacin · inhibition effect | — | Beberok A et al., Effect of norfloxacin and moxifloxacin…, Molecular and cellular bioc… (2015) | [10.1007/s11010-014-2297-7](https://doi.org/10.1007/s11010-014-2297-7) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 0.00).">in vitro</span> | [Beberok_2015_viability](drugs/drug_norfloxacin/pd_Beberok_2015_viability.md) | viability ← norfloxacin · inhibition effect | — | Beberok A et al., Effect of norfloxacin and moxifloxacin…, Molecular and cellular bioc… (2015) | [10.1007/s11010-014-2297-7](https://doi.org/10.1007/s11010-014-2297-7) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Chenel_2003_P](drugs/drug_norfloxacin/pd_Chenel_2003_P.md) | EEG total power ← norfloxacin · delayed effect through an effect compartment | — | Chenel M et al., Pharmacokinetic-pharmacodynamic modelin…, Antimicrobial agents and ch… (2003) | [10.1128/AAC.47.6.1952-1957.2003](https://doi.org/10.1128/AAC.47.6.1952-1957.2003) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Chenel_2004_P](drugs/drug_norfloxacin/pd_Chenel_2004_P.md) | Total power (EEG effect) ← norfloxacin · direct sigmoid Emax (Hill) effect | — | Chenel M et al., Simultaneous central nervous system dis…, British journal of pharmaco… (2004) | [10.1038/sj.bjp.0705748](https://doi.org/10.1038/sj.bjp.0705748) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Delon_1999_SB](drugs/drug_norfloxacin/pd_Delon_1999_SB.md) | specific binding ← Norfloxacin · direct sigmoid Emax (Hill) effect | — | Delon A et al., Pharmacokinetic-pharmacodynamic contrib…, Antimicrobial agents and ch… (1999) | [10.1128/AAC.43.6.1511](https://doi.org/10.1128/AAC.43.6.1511) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Koutsoviti-Papadopoulou_2001_GABA_A_mediated_contractile_response_of_the_isolated_guinea_pig_ileum](drugs/drug_norfloxacin/pd_Koutsoviti_Papadopoulou_2001_GABA_A_mediated_contractile_res.md) | GABA(A)-mediated contractile response of the isolated guinea-pig ileum ← norfloxacin · direct Emax (saturable) effect | — | Koutsoviti-Papadopoulou M et al., Biphenylacetic acid enhances the antago…, Pharmacological research (2001) | [10.1006/phrs.2001.0853](https://doi.org/10.1006/phrs.2001.0853) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Nie_2009_CAT](drugs/drug_norfloxacin/pd_Nie_2009_CAT.md) | catalase ← norfloxacin · model not identified | — | Nie X et al., Effects of norfloxacin and butylated hy…, Ecotoxicology (London, Engl… (2009) | [10.1007/s10646-009-0334-1](https://doi.org/10.1007/s10646-009-0334-1) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Nie_2009_Chl_a](drugs/drug_norfloxacin/pd_Nie_2009_Chl_a.md) | chlorophyll a ← norfloxacin · inhibition effect | — | Nie X et al., Effects of norfloxacin and butylated hy…, Ecotoxicology (London, Engl… (2009) | [10.1007/s10646-009-0334-1](https://doi.org/10.1007/s10646-009-0334-1) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Nie_2009_EROD](drugs/drug_norfloxacin/pd_Nie_2009_EROD.md) | 7-ethoxyresorufin-o-dealkylases ← norfloxacin · model not identified | — | Nie X et al., Effects of norfloxacin and butylated hy…, Ecotoxicology (London, Engl… (2009) | [10.1007/s10646-009-0334-1](https://doi.org/10.1007/s10646-009-0334-1) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Nie_2009_GST](drugs/drug_norfloxacin/pd_Nie_2009_GST.md) | glutathione s-transferase ← norfloxacin · model not identified | — | Nie X et al., Effects of norfloxacin and butylated hy…, Ecotoxicology (London, Engl… (2009) | [10.1007/s10646-009-0334-1](https://doi.org/10.1007/s10646-009-0334-1) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Nie_2009_MDA](drugs/drug_norfloxacin/pd_Nie_2009_MDA.md) | total malondialdehyde content ← norfloxacin · model not identified | — | Nie X et al., Effects of norfloxacin and butylated hy…, Ecotoxicology (London, Engl… (2009) | [10.1007/s10646-009-0334-1](https://doi.org/10.1007/s10646-009-0334-1) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Nie_2009_growth_rate](drugs/drug_norfloxacin/pd_Nie_2009_growth_rate.md) | growth rate ← norfloxacin · inhibition effect | — | Nie X et al., Effects of norfloxacin and butylated hy…, Ecotoxicology (London, Engl… (2009) | [10.1007/s10646-009-0334-1](https://doi.org/10.1007/s10646-009-0334-1) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">other animal</span> | [Pan_2016_root_elongation](drugs/drug_norfloxacin/pd_Pan_2016_root_elongation.md) | root elongation ← norfloxacin · direct Emax (saturable) effect | — | Pan M et al., Phytotoxicity of veterinary antibiotics…, Ecotoxicology and environme… (2016) | [10.1016/j.ecoenv.2015.12.027](https://doi.org/10.1016/j.ecoenv.2015.12.027) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=norfloxacin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | kidney | `SLC22A5` inhibitor | DrugBank actor |
| absorption | skeletal muscle | `SLC22A5` inhibitor | DrugBank actor |
| absorption | small intestine | `SLC22A5` inhibitor | DrugBank actor |
| metabolism | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | `CYP1A2` inhibitor, `CYP3A4` inhibitor, `CYP3A7` inhibitor | DrugBank actor |
| metabolism | lung | `CYP1A1` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP1A1` inhibitor, `CYP3A4` inhibitor | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | `SLC22A6` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: TOP2A (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 47 matched, 47 returned
- **screened:** 12  ·  **relevant:** 12
- **records:** 5  ·  extracted 1  ·  needs_review 2  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_10 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Anadón_1995.pdf` | Anadón A et al., Pharmacokinetics and tissue residues of…, Journal of veterinary pharm… (1995) | popPK | 10 | [10.1111/j.1365-2885.1995.tb00582.x](https://doi.org/10.1111/j.1365-2885.1995.tb00582.x) | [7674459](https://pubmed.ncbi.nlm.nih.gov/7674459) | The study reports quantitative PK parameters (t1/2, MRT, Vd, bioavailability) for norfloxacin in pigs, though specific CL and Vd values are only described qualitatively or partially. |
| `Chen_1990.pdf` | Chen IJ et al., [Comparative study on the pharmacokinet…, Gaoxiong yi xue ke xue za z… (1990) | popPK | 10 | not captured | [2213972](https://pubmed.ncbi.nlm.nih.gov/2213972) | The study reports quantitative pharmacokinetic parameters (Ka, Kel, T1/2, AUC) for norfloxacin in human volunteers with values explicitly provided in the text. |
| `González_1997.pdf` | González F et al., Age-related differences in norfloxacin…, The veterinary quarterly (1997) | popPK | 10 | [10.1080/01652176.1997.9694760](https://doi.org/10.1080/01652176.1997.9694760) | [9413109](https://pubmed.ncbi.nlm.nih.gov/9413109) | The study is a PK model for norfloxacin in sheep, and while specific qualitative descriptors and percentages (F) are provided, the specific quantitative parameter values (CL, V, ka) are described rather than explicitly listed in the extracted text. |
| `Park_2003.pdf` | Park SC et al., Clinical pharmacokinetics of norfloxaci…, Research in veterinary scie… (2003) | popPK | 10 | [10.1016/s0034-5288(02)00150-9](https://doi.org/10.1016/s0034-5288(02)00150-9) | [12507569](https://pubmed.ncbi.nlm.nih.gov/12507569) | The paper reports quantitative disposition parameters (Vd, half-lives, ka, F) for norfloxacin in horses with all values clearly present in the abstract. |
| `Soback_1994.pdf` | Soback S et al., Effect of lactation on single-dose phar…, Antimicrobial agents and ch… (1994) | popPK | 10 | [10.1128/AAC.38.10.2336](https://doi.org/10.1128/AAC.38.10.2336) | [7840566](https://pubmed.ncbi.nlm.nih.gov/7840566) | The study reports quantitative non-compartmental PK parameters (CL, MRT, Vss, t1/2) for norfloxacin in ewes. |
| `Xu_2015.pdf` | Xu N et al., Comparative pharmacokinetics of norflox…, Journal of veterinary pharm… (2015) | popPK | 10 | [10.1111/jvp.12193](https://doi.org/10.1111/jvp.12193) | [25427758](https://pubmed.ncbi.nlm.nih.gov/25427758) | The study reports specific PK parameters (t1/2, Cmax, Tmax, AUC) for norfloxacin in carp, though specific clearance (CL) and volume (V) values are not explicitly listed in the abstract text. |
| `Fukuda_2004.pdf` | Fukuda M et al., The effect of the corneal epithelium on…, Japanese journal of ophthal… (2004) | popPK | 8 | [10.1007/s10384-003-0033-z](https://doi.org/10.1007/s10384-003-0033-z) | [15060787](https://pubmed.ncbi.nlm.nih.gov/15060787) | The study reports pharmacokinetic data for norfloxacin in rabbit eyes, with specific concentration-time points and a mention of one-compartment model parameters, though the explicit numeric values for CL, V, or t1/2 are not explicitly listed in the provided text. |
| `Jha_1996.pdf` | Jha K et al., The effect of induced fever on the biok…, Veterinary research communi… (1996) | popPK | 8 | [10.1007/BF00419185](https://doi.org/10.1007/BF00419185) | [8908728](https://pubmed.ncbi.nlm.nih.gov/8908728) | The study reports quantitative PK parameters (Cmax, Cl, Kel, t1/2) for norfloxacin in goats, but only peak plasma levels are explicitly provided in the text while specific values for clearance and half-life are not listed numerically. |
| `Zhang_2003.pdf` | Zhang LR et al., Neurotoxicity and toxicokinetics of nor…, Acta pharmacologica Sinica (2003) | popPK | 8 | not captured | [12791190](https://pubmed.ncbi.nlm.nih.gov/12791190) | The study is a toxicokinetic analysis of norfloxacin in rats reporting specific PK parameters (clearance, volume, half-life), but the numeric values are not provided in the extracted text or evidence. |
| `Delon_1997.pdf` | Delon A et al., Pharmacokinetic-pharmacodynamic contrib…, The Journal of pharmacology… (1997) | popPK | 7 | not captured | [9023315](https://pubmed.ncbi.nlm.nih.gov/9023315) | The study reports pharmacokinetic data for norfloxacin in rats, specifically providing quantitative concentrations in plasma and cerebrospinal fluid at the endpoint, but lacks explicit compartmental parameters like clearance or volume. |

<sub>queue written 2026-10-07T11:33:06.120076+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Alou_2006_2 | irrelevant | 2 | 0 | The study is an in vitro pharmacodynamic simulation using literature-derived urine concentrations rather than a primary pharmacokinetic analysis reporting quantitative disposition parameters for norfloxacin. |
| popPK | Beberok_2015 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic analysis of norfloxacin's effect on melanin synthesis and antioxidant enzymes in human melanocytes, reporting no pharmacokinetic disposition parameters (CL, V, ka, etc.). |
| popPK | Carrillo-Abad_2020 | irrelevant | 0 | 0 | This is an electrochemical oxidation study focused on degradation mechanisms and reactor performance, not a pharmacokinetic study reporting disposition parameters for norfloxacin. |
| popPK | Chenel_2004 | relevant | 10 | 2 | The paper describes a PK-PD study in rats for norfloxacin and presents the mathematical compartmental models, but the specific numeric parameter estimates (CL, V, ka, etc.) are not listed in the provided text or evidence. |
| popPK | Delon_1999 | irrelevant | 2 | 0 | The study focuses on convulsant activity and GABA binding, reporting only single-point CSF/plasma ratios rather than standard population pharmacokinetic parameters like CL, V, or ka. |
| popPK | Dodd_1989 | irrelevant | 0 | 0 | This is an in-vitro neurochemical binding study, not a pharmacokinetic study, and contains no disposition parameters. |
| popPK | Eid_2023 | irrelevant | 0 | 0 | The study focuses on the formulation and efficacy (EC50, tachyzoite count) of niosomes, not on reporting quantitative pharmacokinetic disposition parameters like clearance or volume of distribution. |
| popPK | Giannola_2008 | irrelevant | 0 | 0 | The study is an in-vitro investigation of a drug delivery system where norfloxacin serves as a model drug, and it does not report systemic pharmacokinetic parameters like clearance or volume. |
| popPK | Hamzah_2000 | irrelevant | 0 | 0 | The paper reports in vitro antimalarial activity (EC50) of norfloxacin as a comparator, not pharmacokinetic parameters. |
| popPK | Han_2017 | irrelevant | 0 | 0 | The study is an in vitro pharmacological assessment of anaphylactoid reactions and histamine release, not a pharmacokinetic study of norfloxacin. |
| popPK | Jha_1996 | relevant | 8 | 3 | The study reports quantitative PK parameters (Cmax, Cl, Kel, t1/2) for norfloxacin in goats, but only peak plasma levels are explicitly provided in the text while specific values for clearance and half-life are not listed numerically. |
| popPK | K_2014 | irrelevant | 1 | 0 | The study investigates moxifloxacin pharmacokinetics in rats, and norfloxacin is only mentioned as a background comparator with no quantitative parameter values reported for it. |
| popPK | Kergaravat_2021 | irrelevant | 0 | 0 | The study is an ecotoxicology investigation measuring lethal and effective concentrations (LC50/EC50) in aquatic organisms, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Kihira_2004 | irrelevant | 0 | 0 | The study uses ciprofloxacin pharmacokinetics in monkeys to predict efficacy in humans and does not report original quantitative PK parameters for norfloxacin. |
| popPK | Koutsoviti-Papadopoulou_1995 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic interaction of norfloxacin with GABA receptors in guinea pig ileum and does not report any pharmacokinetic parameters. |
| popPK | Koutsoviti-Papadopoulou_2001 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of receptor binding/antagonism in guinea-pig ileum, reporting no pharmacokinetic disposition parameters for norfloxacin. |
| popPK | Lai_2026 | irrelevant | 0 | 0 | The paper is an ecotoxicity study reporting LC50/EC50 values in saltwater species, not a pharmacokinetic study with disposition parameters (CL, V, etc.). |
| popPK | Marchand_2000 | irrelevant | 1 | 0 | The study focuses on the pharmacodynamic interaction between norfloxacin and BPAA in rats, reporting concentrations at the onset of seizures rather than standard disposition parameters like clearance or volume. |
| popPK | Martínez_2017 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of pefloxacin in broiler chickens, where norfloxacin appears only as a minor metabolite (5% of AUC) without a dedicated PK model or independent parameter table. |
| popPK | Nie_2009 | irrelevant | 0 | 0 | The study investigates the toxicological effects of norfloxacin on microalgae, not its pharmacokinetics or disposition parameters. |
| popPK | Pan_2016 | irrelevant | 0 | 0 | The study focuses on the phytotoxicity of norfloxacin on plants (seed germination and root elongation) and reports EC50 values, not pharmacokinetic parameters like clearance or volume of distribution. |
| popPK | Pandeya_2000 | irrelevant | 0 | 0 | This is a medicinal chemistry paper reporting synthesis and in vitro/efficacy data, with no pharmacokinetic parameters for norfloxacin. |
| popPK | Pant_2005 | irrelevant | 3 | 4 | Norfloxacin is the active metabolite of the subject drug pefloxacin, not the primary drug being dosed or modeled as a parent compound. |
| popPK | Ricky_2023 | irrelevant | 0 | 0 | The study is an environmental ecotoxicology investigation on algal phycoremediation of norfloxacin, not a pharmacokinetic study, and reports no PK parameters. |
| popPK | Shinya_2024 | irrelevant | 0 | 0 | The study focuses on the antimicrobial activity of a MATE transporter inhibitor co-administered with norfloxacin, not on the pharmacokinetics of norfloxacin itself. |
| popPK | Sriram_2005 | irrelevant | 0 | 0 | The paper is an in vitro medicinal chemistry and pharmacodynamics study of zidovudine prodrugs, not a pharmacokinetic study of norfloxacin as the subject drug. |
| popPK | Yang_2021 | irrelevant | 0 | 0 | The study investigates the toxicity of norfloxacin on bacterial strains in wastewater treatment, not the pharmacokinetic disposition parameters of the drug in a biological host. |
| popPK | Yang_2021_2 | irrelevant | 0 | 0 | The study investigates the plant toxicity (root elongation) of antibiotics, not the pharmacokinetics or disposition of norfloxacin. |
| popPK | Zhang_2003 | relevant | 8 | 1 | The study is a toxicokinetic analysis of norfloxacin in rats reporting specific PK parameters (clearance, volume, half-life), but the numeric values are not provided in the extracted text or evidence. |
| popPK | Zhang_2017 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of danofloxacin in chickens, with norfloxacin only used as a comparator for in vitro susceptibility (MIC) determinations, not for PK parameter estimation. |
| popPK | Zhu_2016 | irrelevant | 0 | 0 | The paper is an electrochemical/mechanistic study of oxidation products and toxicity, not a pharmacokinetic study. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 11:33 UTC</sub>
